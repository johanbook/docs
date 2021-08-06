# Kubernetes

Kubernetes, sometimes shortened to K8s, is an open-source cluster manager
developed by Google. It offers

- **Availability** No down time
- **Scalability** High performance
- **Disaster recovery** Backup

There is a master which manages several nodes, each typically running in its own
machine. The master exposes a key-value store (etcd) to its child nodes.

## Components

I will here briefly discuss some different Kubernetes components.

### Pod

Is an abstraction over a container and hence typically meant to only run one
container. Each pod also gets its own IP in a virtual network, however, as
containers are ephemeral these IP addresses are not permanent and can be
reassigned.

### Service

A service is more or less a static IP address corresponding to a single pod. Can
be both publically exposed or purely internal. It also works as a load balancer.

### Ingress

Ingress is a service that connects an external name to the exposed IP.

## Types of Nodes

As mentioned earlier, there are two types of nodes; workers and masters.

### Worker node

Each worker node needs the following to be installed:

- Container runtime
- Kubelet, interface between container and node.
- Kube Proxy, intelligently routes requests (e.g. pods on same node are
  preferred over other nodes)

### Master process

Each master process has four services running:

- **API Server**, the interface. Also handles authentication.
- **Scheduler**. Responsible for starting and stopping pods. It connects to the
  Kubelet in a node with itself then communicates with the container runtime.
- **Controller manager** Detect cluster state changes. If a pod dies it asks
  scheduler to schedule a new pod.
- **etcd** Is a key-value store that keep tracks of the state of the cluster.

One typically runs multiple masters where api server is load balanced and etcd
use a distributed storage.

### Namespaces

Namespaces are an efficient way of organizing components. This stops e.g. name
clashes to cause component overriding. Resources can also be limited on a
namespace level.

### Storage

Pods are ephemeral and hence have no persistent storage. One must therefore
configure global volumes. It is important that the storage is available on all
nodes, not dependent on pod life-cycle and can survive a cluster crash.
