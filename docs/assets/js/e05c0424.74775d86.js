"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [8048],
  {
    8939: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => c,
          contentTitle: () => i,
          default: () => m,
          frontMatter: () => l,
          metadata: () => p,
          toc: () => d,
        });
      var a = n(7462),
        r = n(3366),
        o = (n(7294), n(3905)),
        s = (n(828), ["components"]),
        l = {},
        i = "Components",
        p = {
          unversionedId: "devops/orchestration/kubernetes/components",
          id: "devops/orchestration/kubernetes/components",
          title: "Components",
          description: "Kubernetes use different components.",
          source: "@site/docs/devops/orchestration/kubernetes/components.md",
          sourceDirName: "devops/orchestration/kubernetes",
          slug: "/devops/orchestration/kubernetes/components",
          permalink: "/docs/devops/orchestration/kubernetes/components",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Kubernetes",
            permalink: "/docs/devops/orchestration/kubernetes/",
          },
          next: {
            title: "Storage",
            permalink: "/docs/devops/orchestration/kubernetes/storage",
          },
        },
        c = {},
        d = [
          { value: "Pod", id: "pod", level: 2 },
          { value: "Deployment", id: "deployment", level: 2 },
          { value: "Service", id: "service", level: 2 },
          { value: "Ingress", id: "ingress", level: 2 },
        ],
        u = { toc: d };
      function m(e) {
        var t = e.components,
          n = (0, r.Z)(e, s);
        return (0, o.kt)(
          "wrapper",
          (0, a.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
          (0, o.kt)("h1", { id: "components" }, "Components"),
          (0, o.kt)("p", null, "Kubernetes use different components."),
          (0, o.kt)("h2", { id: "pod" }, "Pod"),
          (0, o.kt)(
            "p",
            null,
            "Is an abstraction over a container and typically meant to only run one in each\ncontainer. Each pod has its own IP address in the Kubernetes virtual network,\nhowever, as containers are ephemeral these IP addresses are not permanent."
          ),
          (0, o.kt)("h2", { id: "deployment" }, "Deployment"),
          (0, o.kt)(
            "p",
            null,
            "A deployment is a declarative way of creating pods."
          ),
          (0, o.kt)(
            "pre",
            null,
            (0, o.kt)(
              "code",
              { parentName: "pre", className: "language-yaml" },
              "apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: target-deployment\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: target-app\n  template:\n    metadata:\n      labels:\n        app: target-app\n    spec:\n      containers:\n        - name: target\n          image: target-server:test\n          imagePullPolicy: IfNotPresent\n"
            )
          ),
          (0, o.kt)("h2", { id: "service" }, "Service"),
          (0, o.kt)(
            "p",
            null,
            "A service allows exposing a set of pods to the virtual network. Each service has\na static IP address making it more reliable to refer than pod IPs. Services can\nbe both publicly exposed or only internal. They can also work as a load\nbalancers."
          ),
          (0, o.kt)(
            "pre",
            null,
            (0, o.kt)(
              "code",
              { parentName: "pre", className: "language-yaml" },
              "apiVersion: v1\nkind: Service\nmetadata:\n  name: target-service\nspec:\n  ports:\n    - port: 80\n      protocol: TCP\n  selector:\n    app: target-app\n"
            )
          ),
          (0, o.kt)("p", null, "There are four types of services:"),
          (0, o.kt)(
            "ul",
            null,
            (0, o.kt)(
              "li",
              { parentName: "ul" },
              (0, o.kt)("strong", { parentName: "li" }, "ClusterIP"),
              " Only reachable within cluster."
            ),
            (0, o.kt)(
              "li",
              { parentName: "ul" },
              (0, o.kt)("strong", { parentName: "li" }, "NodePort"),
              " Exposes service en each nodes on a static port."
            ),
            (0, o.kt)(
              "li",
              { parentName: "ul" },
              (0, o.kt)("strong", { parentName: "li" }, "LoadBalancer"),
              " Exposes service through load balancer. This is then handled\nby e.g. a cloud provider."
            ),
            (0, o.kt)(
              "li",
              { parentName: "ul" },
              (0, o.kt)("strong", { parentName: "li" }, "ExternalName"),
              " Allows using a ",
              (0, o.kt)("inlineCode", { parentName: "li" }, "CNAME"),
              " record."
            )
          ),
          (0, o.kt)("h2", { id: "ingress" }, "Ingress"),
          (0, o.kt)(
            "p",
            null,
            "An ingress controller is responsible for routing external traffic into the\ncluster."
          )
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
