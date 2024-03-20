"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [1959],
  {
    8235: (e, a, n) => {
      n.r(a),
        n.d(a, {
          assets: () => c,
          contentTitle: () => l,
          default: () => p,
          frontMatter: () => o,
          metadata: () => d,
          toc: () => u,
        });
      var t = n(7462),
        r = n(3366),
        s = (n(7294), n(3905)),
        i = (n(828), ["components"]),
        o = {},
        l = "Learning rate schedulers",
        d = {
          unversionedId: "ai/ann/learning_rate_schedulers",
          id: "ai/ann/learning_rate_schedulers",
          title: "Learning rate schedulers",
          description:
            "A learning rate scheduler is an adaptable learning rate which can be used",
          source: "@site/docs/ai/ann/learning_rate_schedulers.md",
          sourceDirName: "ai/ann",
          slug: "/ai/ann/learning_rate_schedulers",
          permalink: "/docs/ai/ann/learning_rate_schedulers",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Unsupervised learning",
            permalink: "/docs/ai/ann/learning/unsupervised_learning",
          },
          next: {
            title: "Autoencoders",
            permalink: "/docs/ai/ann/network_types/autoencoders",
          },
        },
        c = {},
        u = [{ value: "Warm starts", id: "warm-starts", level: 2 }],
        h = { toc: u };
      function p(e) {
        var a = e.components,
          n = (0, r.Z)(e, i);
        return (0, s.kt)(
          "wrapper",
          (0, t.Z)({}, h, n, { components: a, mdxType: "MDXLayout" }),
          (0, s.kt)(
            "h1",
            { id: "learning-rate-schedulers" },
            "Learning rate schedulers"
          ),
          (0, s.kt)(
            "p",
            null,
            "A ",
            (0, s.kt)("strong", { parentName: "p" }, "learning rate scheduler"),
            " is an adaptable learning rate which can be used\nwhen ",
            (0, s.kt)(
              "a",
              { parentName: "p", href: "/docs/ai/ann/optimizers" },
              "optimizing"
            ),
            " an ",
            (0, s.kt)("a", { parentName: "p", href: "/docs/ai/ann/" }, "ANN"),
            ". This is useful as the\nlearning rate is likely the one hyperparameter that is the most difficult to\nset. By performing a range test one can establish a range of suitable learning\nrates. From this one can construct a learning rate scheduler, such as CLR\n(Cyclic Learning Rate) or a plateau scheduler."
          ),
          (0, s.kt)("h2", { id: "warm-starts" }, "Warm starts"),
          (0, s.kt)(
            "p",
            null,
            (0, s.kt)("strong", { parentName: "p" }, "Warm starts"),
            " is when one start training a model that is already pre-trained.\nThis might shorten otherwise long training times. The network does not even need\nto be pre-trained on the same type of domain of data."
          )
        );
      }
      p.isMDXComponent = !0;
    },
  },
]);
