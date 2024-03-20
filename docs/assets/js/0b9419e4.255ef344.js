"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [9839],
  {
    4007: (e, r, s) => {
      s.r(r),
        s.d(r, {
          assets: () => g,
          contentTitle: () => o,
          default: () => l,
          frontMatter: () => c,
          metadata: () => m,
          toc: () => p,
        });
      var a = s(7462),
        n = s(3366),
        t = (s(7294), s(3905)),
        i = (s(828), ["components"]),
        c = {},
        o = "Caching",
        m = {
          unversionedId: "programming/browsers/caching",
          id: "programming/browsers/caching",
          title: "Caching",
          description:
            "Browsers has several caching mechanisms to increase performance.",
          source: "@site/docs/programming/browsers/caching.md",
          sourceDirName: "programming/browsers",
          slug: "/programming/browsers/caching",
          permalink: "/docs/programming/browsers/caching",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "Basics", permalink: "/docs/programming/basics" },
          next: {
            title: "GML",
            permalink: "/docs/programming/data_formats/gml",
          },
        },
        g = {},
        p = [{ value: "Cache busting", id: "cache-busting", level: 2 }],
        h = { toc: p };
      function l(e) {
        var r = e.components,
          s = (0, n.Z)(e, i);
        return (0, t.kt)(
          "wrapper",
          (0, a.Z)({}, h, s, { components: r, mdxType: "MDXLayout" }),
          (0, t.kt)("h1", { id: "caching" }, "Caching"),
          (0, t.kt)(
            "p",
            null,
            "Browsers has several caching mechanisms to increase performance."
          ),
          (0, t.kt)("h2", { id: "cache-busting" }, "Cache busting"),
          (0, t.kt)(
            "p",
            null,
            "Cache busting are different approaches to deliver the most recent files to a\nuser despite there existing potentially multiple caching layers. One common\napproach is to version to the file name."
          )
        );
      }
      l.isMDXComponent = !0;
    },
  },
]);
