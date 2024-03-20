"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [9279],
  {
    9153: (n, e, a) => {
      a.r(e),
        a.d(e, {
          assets: () => g,
          contentTitle: () => l,
          default: () => u,
          frontMatter: () => o,
          metadata: () => p,
          toc: () => d,
        });
      var i = a(7462),
        r = a(3366),
        t = (a(7294), a(3905)),
        s = (a(828), ["components"]),
        o = {},
        l = "Supervised learning",
        p = {
          unversionedId: "ai/ann/learning/supervised_learning",
          id: "ai/ann/learning/supervised_learning",
          title: "Supervised learning",
          description:
            "Supervised learning is an approach to training neural networks where one has",
          source: "@site/docs/ai/ann/learning/supervised_learning.md",
          sourceDirName: "ai/ann/learning",
          slug: "/ai/ann/learning/supervised_learning",
          permalink: "/docs/ai/ann/learning/supervised_learning",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Reinforcement learning",
            permalink: "/docs/ai/ann/learning/reinforcement_learning",
          },
          next: {
            title: "Teacher Forcing",
            permalink: "/docs/ai/ann/learning/teacher_forcing",
          },
        },
        g = {},
        d = [],
        c = { toc: d };
      function u(n) {
        var e = n.components,
          a = (0, r.Z)(n, s);
        return (0, t.kt)(
          "wrapper",
          (0, i.Z)({}, c, a, { components: e, mdxType: "MDXLayout" }),
          (0, t.kt)("h1", { id: "supervised-learning" }, "Supervised learning"),
          (0, t.kt)(
            "p",
            null,
            (0, t.kt)("strong", { parentName: "p" }, "Supervised learning"),
            " is an approach to training neural networks where one has\na dataset containing input points and target points. The network can then be\ntrained using calculating the gradient for a given point and then using\nbackpropagation."
          )
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
