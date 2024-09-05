"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [1123],
  {
    7390: (e, r, t) => {
      t.r(r),
        t.d(r, {
          assets: () => c,
          contentTitle: () => i,
          default: () => D,
          frontMatter: () => n,
          metadata: () => m,
          toc: () => p,
        });
      var a = t(7462),
        s = t(3366),
        o = (t(7294), t(3905)),
        d = (t(828), ["components"]),
        n = {},
        i = "HDD",
        m = {
          unversionedId: "hardware/memory/hdd",
          id: "hardware/memory/hdd",
          title: "HDD",
          description:
            "A Hard Drive Disc (HDD) is a secondary persistent memory. It consists of",
          source: "@site/docs/hardware/memory/hdd.md",
          sourceDirName: "hardware/memory",
          slug: "/hardware/memory/hdd",
          permalink: "/docs/hardware/memory/hdd",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "Git", permalink: "/docs/devops/vcs/git" },
          next: { title: "RAM", permalink: "/docs/hardware/memory/ram" },
        },
        c = {},
        p = [],
        h = { toc: p };
      function D(e) {
        var r = e.components,
          t = (0, s.Z)(e, d);
        return (0, o.kt)(
          "wrapper",
          (0, a.Z)({}, h, t, { components: r, mdxType: "MDXLayout" }),
          (0, o.kt)("h1", { id: "hdd" }, "HDD"),
          (0, o.kt)(
            "p",
            null,
            "A ",
            (0, o.kt)("strong", { parentName: "p" }, "Hard Drive Disc"),
            " (",
            (0, o.kt)("strong", { parentName: "p" }, "HDD"),
            ") is a secondary persistent memory. It consists of\na mechanical disc, similar to a CD. It is slower but cheaper than ",
            (0, o.kt)("a", { parentName: "p", href: "./ssd" }, "SSD"),
            "."
          )
        );
      }
      D.isMDXComponent = !0;
    },
  },
]);
