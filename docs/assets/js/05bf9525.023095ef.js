"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [6328],
  {
    5401: (n, e, a) => {
      a.r(e),
        a.d(e, {
          assets: () => g,
          contentTitle: () => l,
          default: () => d,
          frontMatter: () => s,
          metadata: () => c,
          toc: () => p,
        });
      var i = a(7462),
        r = a(3366),
        t = (a(7294), a(3905)),
        o = (a(828), ["components"]),
        s = {},
        l = "Reinforcement learning",
        c = {
          unversionedId: "ai/ann/learning/reinforcement_learning",
          id: "ai/ann/learning/reinforcement_learning",
          title: "Reinforcement learning",
          description:
            "Reinforcement learning (RL) is an approach to training a",
          source: "@site/docs/ai/ann/learning/reinforcement_learning.md",
          sourceDirName: "ai/ann/learning",
          slug: "/ai/ann/learning/reinforcement_learning",
          permalink: "/docs/ai/ann/learning/reinforcement_learning",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "Basics", permalink: "/docs/ai/ann/" },
          next: {
            title: "Supervised learning",
            permalink: "/docs/ai/ann/learning/supervised_learning",
          },
        },
        g = {},
        p = [],
        m = { toc: p };
      function d(n) {
        var e = n.components,
          a = (0, r.Z)(n, o);
        return (0, t.kt)(
          "wrapper",
          (0, i.Z)({}, m, a, { components: e, mdxType: "MDXLayout" }),
          (0, t.kt)(
            "h1",
            { id: "reinforcement-learning" },
            "Reinforcement learning"
          ),
          (0, t.kt)(
            "p",
            null,
            (0, t.kt)("strong", { parentName: "p" }, "Reinforcement learning"),
            " (",
            (0, t.kt)("strong", { parentName: "p" }, "RL"),
            ") is an approach to training a\n",
            (0, t.kt)(
              "a",
              { parentName: "p", href: "/docs/ai/ann/" },
              "neural network"
            ),
            ", where the network takes a series of actions and is\nrewarded or punished based on the result. Reinforcement learning allows training\nmachine learning algorithms that supersedes humans, something that is not\npossible with classical ",
            (0, t.kt)(
              "a",
              {
                parentName: "p",
                href: "/docs/ai/ann/learning/supervised_learning",
              },
              "supervised learning"
            ),
            "."
          ),
          (0, t.kt)(
            "p",
            null,
            "One immediate problem with reinforcement learning is figuring out which actions\ncontributed to a positive outcome and which to a negative one."
          )
        );
      }
      d.isMDXComponent = !0;
    },
  },
]);
