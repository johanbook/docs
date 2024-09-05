"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [2336],
  {
    5224: (e, t, s) => {
      s.r(t),
        s.d(t, {
          assets: () => l,
          contentTitle: () => c,
          default: () => g,
          frontMatter: () => n,
          metadata: () => p,
          toc: () => m,
        });
      var a = s(7462),
        i = s(3366),
        o = (s(7294), s(3905)),
        r = (s(828), ["components"]),
        n = {},
        c = "Forecasting",
        p = {
          unversionedId: "ai/problem_types/forecasting",
          id: "ai/problem_types/forecasting",
          title: "Forecasting",
          description:
            "Forecasting is a sequence based problem, typically involving time-series.",
          source: "@site/docs/ai/problem_types/forecasting.md",
          sourceDirName: "ai/problem_types",
          slug: "/ai/problem_types/forecasting",
          permalink: "/docs/ai/problem_types/forecasting",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "Data", permalink: "/docs/ai/data" },
          next: {
            title: "Image classification",
            permalink: "/docs/ai/problem_types/image_classification",
          },
        },
        l = {},
        m = [],
        d = { toc: m };
      function g(e) {
        var t = e.components,
          s = (0, i.Z)(e, r);
        return (0, o.kt)(
          "wrapper",
          (0, a.Z)({}, d, s, { components: t, mdxType: "MDXLayout" }),
          (0, o.kt)("h1", { id: "forecasting" }, "Forecasting"),
          (0, o.kt)(
            "p",
            null,
            (0, o.kt)("strong", { parentName: "p" }, "Forecasting"),
            " is a sequence based problem, typically involving time-series.\nExamples of forecasting problems are stock prediction and weather forecasting."
          ),
          (0, o.kt)(
            "p",
            null,
            "One typically uses ",
            (0, o.kt)(
              "a",
              { parentName: "p", href: "/docs/ai/ann/network_types/rnn" },
              "RNN"
            ),
            " for solving forecasting\nproblems."
          )
        );
      }
      g.isMDXComponent = !0;
    },
  },
]);
