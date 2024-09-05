"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [425],
  {
    9392: (e, r, a) => {
      a.r(r),
        a.d(r, {
          assets: () => p,
          contentTitle: () => d,
          default: () => u,
          frontMatter: () => s,
          metadata: () => i,
          toc: () => c,
        });
      var t = a(7462),
        o = a(3366),
        n = (a(7294), a(3905)),
        m = (a(828), ["components"]),
        s = {},
        d = "RAM",
        i = {
          unversionedId: "hardware/memory/ram",
          id: "hardware/memory/ram",
          title: "RAM",
          description:
            "Random Access Memory (RAM) is a type of non-persistent primary memory",
          source: "@site/docs/hardware/memory/ram.md",
          sourceDirName: "hardware/memory",
          slug: "/hardware/memory/ram",
          permalink: "/docs/hardware/memory/ram",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "HDD", permalink: "/docs/hardware/memory/hdd" },
          next: { title: "ROM", permalink: "/docs/hardware/memory/rom" },
        },
        p = {},
        c = [],
        y = { toc: c };
      function u(e) {
        var r = e.components,
          a = (0, o.Z)(e, m);
        return (0, n.kt)(
          "wrapper",
          (0, t.Z)({}, y, a, { components: r, mdxType: "MDXLayout" }),
          (0, n.kt)("h1", { id: "ram" }, "RAM"),
          (0, n.kt)(
            "p",
            null,
            (0, n.kt)("strong", { parentName: "p" }, "Random Access Memory"),
            " (",
            (0, n.kt)("strong", { parentName: "p" }, "RAM"),
            ") is a type of non-persistent primary memory\nwhere any memory location can be accessed. This is in contrast to a\n",
            (0, n.kt)("a", { parentName: "p", href: "./hdd" }, "HDD"),
            "."
          ),
          (0, n.kt)(
            "p",
            null,
            "RAM memory is often used to load the OS and store data about running\napplications."
          )
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
