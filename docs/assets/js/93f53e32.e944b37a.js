"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [7071],
  {
    154: (e, t, s) => {
      s.r(t),
        s.d(t, {
          assets: () => c,
          contentTitle: () => i,
          default: () => m,
          frontMatter: () => l,
          metadata: () => p,
          toc: () => u,
        });
      var n = s(7462),
        r = s(3366),
        o = (s(7294), s(3905)),
        a = (s(828), ["components"]),
        l = {},
        i = "Kubernetes",
        p = {
          unversionedId: "devops/orchestration/kubernetes/README",
          id: "devops/orchestration/kubernetes/README",
          title: "Kubernetes",
          description:
            "Kubernetes, sometimes shortened to K8s, is an open-source cluster",
          source: "@site/docs/devops/orchestration/kubernetes/README.md",
          sourceDirName: "devops/orchestration/kubernetes",
          slug: "/devops/orchestration/kubernetes/",
          permalink: "/docs/devops/orchestration/kubernetes/",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Docker Swarm",
            permalink: "/docs/devops/orchestration/docker-swarm",
          },
          next: {
            title: "Components",
            permalink: "/docs/devops/orchestration/kubernetes/components",
          },
        },
        c = {},
        u = [
          { value: "Types of Nodes", id: "types-of-nodes", level: 2 },
          { value: "Worker node", id: "worker-node", level: 3 },
          { value: "Master process", id: "master-process", level: 3 },
          { value: "Namespaces", id: "namespaces", level: 3 },
        ],
        d = { toc: u };
      function m(e) {
        var t = e.components,
          s = (0, r.Z)(e, a);
        return (0, o.kt)(
          "wrapper",
          (0, n.Z)({}, d, s, { components: t, mdxType: "MDXLayout" }),
          (0, o.kt)("h1", { id: "kubernetes" }, "Kubernetes"),
          (0, o.kt)(
            "p",
            null,
            (0, o.kt)("strong", { parentName: "p" }, "Kubernetes"),
            ", sometimes shortened to ",
            (0, o.kt)("strong", { parentName: "p" }, "K8s"),
            ", is an open-source cluster\nmanager developed by Google. It offers"
          ),
          (0, o.kt)(
            "ul",
            null,
            (0, o.kt)(
              "li",
              { parentName: "ul" },
              (0, o.kt)("strong", { parentName: "li" }, "Availability"),
              " No down time"
            ),
            (0, o.kt)(
              "li",
              { parentName: "ul" },
              (0, o.kt)("strong", { parentName: "li" }, "Scalability"),
              " High performance"
            ),
            (0, o.kt)(
              "li",
              { parentName: "ul" },
              (0, o.kt)("strong", { parentName: "li" }, "Disaster recovery"),
              " Backup"
            )
          ),
          (0, o.kt)(
            "p",
            null,
            "There is a master which manages several nodes, each typically running in its own\nmachine. The master exposes a key-value store (etcd) to its child nodes."
          ),
          (0, o.kt)("h2", { id: "types-of-nodes" }, "Types of Nodes"),
          (0, o.kt)(
            "p",
            null,
            "As mentioned earlier, there are two types of nodes; workers and masters."
          ),
          (0, o.kt)("h3", { id: "worker-node" }, "Worker node"),
          (0, o.kt)(
            "p",
            null,
            "Each worker node needs the following to be installed:"
          ),
          (0, o.kt)(
            "ul",
            null,
            (0, o.kt)("li", { parentName: "ul" }, "Container runtime"),
            (0, o.kt)(
              "li",
              { parentName: "ul" },
              "Kubelet, interface between container and node."
            ),
            (0, o.kt)(
              "li",
              { parentName: "ul" },
              "Kube Proxy, intelligently routes requests (e.g. pods on same node are\npreferred over other nodes)"
            )
          ),
          (0, o.kt)("h3", { id: "master-process" }, "Master process"),
          (0, o.kt)(
            "p",
            null,
            "Each master process has four services running:"
          ),
          (0, o.kt)(
            "ul",
            null,
            (0, o.kt)(
              "li",
              { parentName: "ul" },
              (0, o.kt)("strong", { parentName: "li" }, "API Server"),
              ", the interface. Also handles authentication."
            ),
            (0, o.kt)(
              "li",
              { parentName: "ul" },
              (0, o.kt)("strong", { parentName: "li" }, "Scheduler"),
              ". Responsible for starting and stopping pods. It connects to the\nKubelet in a node with itself then communicates with the container runtime."
            ),
            (0, o.kt)(
              "li",
              { parentName: "ul" },
              (0, o.kt)("strong", { parentName: "li" }, "Controller manager"),
              " Detect cluster state changes. If a pod dies it asks\nscheduler to schedule a new pod."
            ),
            (0, o.kt)(
              "li",
              { parentName: "ul" },
              (0, o.kt)("strong", { parentName: "li" }, "etcd"),
              " Is a key-value store that keep tracks of the state of the cluster."
            )
          ),
          (0, o.kt)(
            "p",
            null,
            "One typically runs multiple masters where API server is load balanced and etcd\nuse a distributed storage."
          ),
          (0, o.kt)(
            "p",
            null,
            "This is sometimes referred to as the control plane."
          ),
          (0, o.kt)("h3", { id: "namespaces" }, "Namespaces"),
          (0, o.kt)(
            "p",
            null,
            "Namespaces are an efficient way of organizing components. This stops e.g. name\nclashes to cause component overriding. Resources can also be limited on a\nnamespace level."
          )
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
