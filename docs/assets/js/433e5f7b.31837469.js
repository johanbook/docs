"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [5059],
  {
    4297: (e, t, o) => {
      o.r(t),
        o.d(t, {
          assets: () => p,
          contentTitle: () => c,
          default: () => h,
          frontMatter: () => i,
          metadata: () => d,
          toc: () => u,
        });
      var r = o(7462),
        s = o(3366),
        n = (o(7294), o(3905)),
        a = (o(828), ["components"]),
        i = {},
        c = "Storage",
        d = {
          unversionedId: "devops/orchestration/kubernetes/storage",
          id: "devops/orchestration/kubernetes/storage",
          title: "Storage",
          description:
            "Pods are ephemeral and hence have no persistent storage. One must therefore",
          source: "@site/docs/devops/orchestration/kubernetes/storage.md",
          sourceDirName: "devops/orchestration/kubernetes",
          slug: "/devops/orchestration/kubernetes/storage",
          permalink: "/docs/devops/orchestration/kubernetes/storage",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Components",
            permalink: "/docs/devops/orchestration/kubernetes/components",
          },
          next: { title: "Servers", permalink: "/docs/devops/servers" },
        },
        p = {},
        u = [],
        l = { toc: u };
      function h(e) {
        var t = e.components,
          o = (0, s.Z)(e, a);
        return (0, n.kt)(
          "wrapper",
          (0, r.Z)({}, l, o, { components: t, mdxType: "MDXLayout" }),
          (0, n.kt)("h1", { id: "storage" }, "Storage"),
          (0, n.kt)(
            "p",
            null,
            "Pods are ephemeral and hence have no persistent storage. One must therefore\nconfigure global volumes. It is important that the storage is available on all\nnodes, not dependent on pod life-cycle and can survive a cluster crash."
          )
        );
      }
      h.isMDXComponent = !0;
    },
  },
]);
