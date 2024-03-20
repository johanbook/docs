"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [7981],
  {
    9255: (e, n, r) => {
      r.r(n),
        r.d(n, {
          assets: () => d,
          contentTitle: () => s,
          default: () => u,
          frontMatter: () => c,
          metadata: () => l,
          toc: () => g,
        });
      var a = r(7462),
        i = r(3366),
        t = (r(7294), r(3905)),
        o = (r(828), ["components"]),
        c = {},
        s = "Teacher Forcing",
        l = {
          unversionedId: "ai/ann/learning/teacher_forcing",
          id: "ai/ann/learning/teacher_forcing",
          title: "Teacher Forcing",
          description:
            "Teacher forcing is a method for training recurrent neural networks. It is",
          source: "@site/docs/ai/ann/learning/teacher_forcing.md",
          sourceDirName: "ai/ann/learning",
          slug: "/ai/ann/learning/teacher_forcing",
          permalink: "/docs/ai/ann/learning/teacher_forcing",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Supervised learning",
            permalink: "/docs/ai/ann/learning/supervised_learning",
          },
          next: {
            title: "Under- and overfitting",
            permalink: "/docs/ai/ann/learning/under_over_fitting",
          },
        },
        d = {},
        g = [],
        p = { toc: g };
      function u(e) {
        var n = e.components,
          r = (0, i.Z)(e, o);
        return (0, t.kt)(
          "wrapper",
          (0, a.Z)({}, p, r, { components: n, mdxType: "MDXLayout" }),
          (0, t.kt)("h1", { id: "teacher-forcing" }, "Teacher Forcing"),
          (0, t.kt)(
            "p",
            null,
            (0, t.kt)("strong", { parentName: "p" }, "Teacher forcing"),
            " is a method for training recurrent neural networks. It is\ncommonly used in ",
            (0, t.kt)(
              "a",
              { parentName: "p", href: "/docs/ai/problem_types/nlp" },
              "NLP"
            ),
            "."
          )
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
