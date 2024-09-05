"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [6039],
  {
    9634: (r, e, t) => {
      t.r(e),
        t.d(e, {
          assets: () => p,
          contentTitle: () => i,
          default: () => u,
          frontMatter: () => n,
          metadata: () => d,
          toc: () => c,
        });
      var o = t(7462),
        a = t(3366),
        m = (t(7294), t(3905)),
        s = (t(828), ["components"]),
        n = {},
        i = "ROM",
        d = {
          unversionedId: "hardware/memory/rom",
          id: "hardware/memory/rom",
          title: "ROM",
          description:
            "ROM (Read Only Memory) is a primary memory that is not writable. It is",
          source: "@site/docs/hardware/memory/rom.md",
          sourceDirName: "hardware/memory",
          slug: "/hardware/memory/rom",
          permalink: "/docs/hardware/memory/rom",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "RAM", permalink: "/docs/hardware/memory/ram" },
          next: { title: "SSD", permalink: "/docs/hardware/memory/ssd" },
        },
        p = {},
        c = [],
        l = { toc: c };
      function u(r) {
        var e = r.components,
          t = (0, a.Z)(r, s);
        return (0, m.kt)(
          "wrapper",
          (0, o.Z)({}, l, t, { components: e, mdxType: "MDXLayout" }),
          (0, m.kt)("h1", { id: "rom" }, "ROM"),
          (0, m.kt)(
            "p",
            null,
            (0, m.kt)("strong", { parentName: "p" }, "ROM"),
            " (",
            (0, m.kt)("strong", { parentName: "p" }, "Read Only Memory"),
            ") is a primary memory that is not writable. It is\nused to store low-level computer boot instructions."
          )
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
