# Docker

**Docker** is a tool for running virtual machines that share
[kernel processes](../unix/kernel) making them more lightweight than standard
VMs. This allows for quickly spinning up and down containers, which was one of
the pillars for micro-service oriented architectures became a thing.

## Containers

The [daemon](../unix/daemon) that handles creating and destroying containers is
called `containerd`.

### Finding container OS

Note that since kernel processes are shared running e.g. `uname` inside a
container will resolve to host details. If the container is Linux-based, try
`cat /etc/os-release`.

## DNS

The docker engine also works as a [DNS server](../network/protocols/dns)
allowing one to resolve container names to [IP addresses](../network/ip_address)
within the network. This is called **automatic service discovery**.

## Logging

Docker uses a JSON logging driver by default that logs to a file
`/var/lib/docker/containers/<container-id>/<container-id>-json.log` on the host
system. There are also other logging drivers that forward logs to third party services for
log analysis.
