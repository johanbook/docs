"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [3910],
  {
    7606: (e, r, t) => {
      t.r(r),
        t.d(r, {
          assets: () => p,
          contentTitle: () => i,
          default: () => u,
          frontMatter: () => d,
          metadata: () => m,
          toc: () => c,
        });
      var s = t(7462),
        a = t(3366),
        o = (t(7294), t(3905)),
        n = (t(828), ["components"]),
        d = {},
        i = "SSD",
        m = {
          unversionedId: "hardware/memory/ssd",
          id: "hardware/memory/ssd",
          title: "SSD",
          description:
            "A Solid State Drive (SSD) is a persistent secondary memory. It is",
          source: "@site/docs/hardware/memory/ssd.md",
          sourceDirName: "hardware/memory",
          slug: "/hardware/memory/ssd",
          permalink: "/docs/hardware/memory/ssd",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "ROM", permalink: "/docs/hardware/memory/rom" },
          next: { title: "PCI", permalink: "/docs/hardware/pci" },
        },
        p = {},
        c = [],
        l = { toc: c };
      function u(e) {
        var r = e.components,
          t = (0, a.Z)(e, n);
        return (0, o.kt)(
          "wrapper",
          (0, s.Z)({}, l, t, { components: r, mdxType: "MDXLayout" }),
          (0, o.kt)("h1", { id: "ssd" }, "SSD"),
          (0, o.kt)(
            "p",
            null,
            "A ",
            (0, o.kt)("strong", { parentName: "p" }, "Solid State Drive"),
            " (",
            (0, o.kt)("strong", { parentName: "p" }, "SSD"),
            ") is a persistent secondary memory. It is\nsignificantly slower than ",
            (0, o.kt)("a", { parentName: "p", href: "./hdd" }, "HDD"),
            "."
          )
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
