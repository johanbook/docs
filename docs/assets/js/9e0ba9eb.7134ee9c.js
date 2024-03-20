"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [1668],
  {
    4696: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => c,
          contentTitle: () => o,
          default: () => k,
          frontMatter: () => l,
          metadata: () => u,
          toc: () => p,
        });
      var n = r(7462),
        s = r(3366),
        a = (r(7294), r(3905)),
        i = (r(828), ["components"]),
        l = {},
        o = "Kernel",
        u = {
          unversionedId: "unix/kernel",
          id: "unix/kernel",
          title: "Kernel",
          description:
            "The kernel is the core of the operating system. It acts as a layer between",
          source: "@site/docs/unix/kernel.md",
          sourceDirName: "unix",
          slug: "/unix/kernel",
          permalink: "/docs/unix/kernel",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "Inode", permalink: "/docs/unix/inode" },
          next: { title: "Logs", permalink: "/docs/unix/logs" },
        },
        c = {},
        p = [
          { value: "Virtual file system", id: "virtual-file-system", level: 2 },
        ],
        d = { toc: p };
      function k(e) {
        var t = e.components,
          r = (0, s.Z)(e, i);
        return (0, a.kt)(
          "wrapper",
          (0, n.Z)({}, d, r, { components: t, mdxType: "MDXLayout" }),
          (0, a.kt)("h1", { id: "kernel" }, "Kernel"),
          (0, a.kt)(
            "p",
            null,
            "The ",
            (0, a.kt)("strong", { parentName: "p" }, "kernel"),
            " is the core of the operating system. It acts as a layer between\nmemory, ",
            (0, a.kt)(
              "a",
              { parentName: "p", href: "../hardware/processor/cpu" },
              "CPU"
            ),
            ", devices etc. and the applications that\nare run."
          ),
          (0, a.kt)("h2", { id: "virtual-file-system" }, "Virtual file system"),
          (0, a.kt)(
            "p",
            null,
            "The kernel exposes files through a virtual file system."
          )
        );
      }
      k.isMDXComponent = !0;
    },
  },
]);
