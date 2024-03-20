"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [4869],
  {
    5474: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => l,
          contentTitle: () => s,
          default: () => u,
          frontMatter: () => d,
          metadata: () => c,
          toc: () => g,
        });
      var i = t(7462),
        r = t(3366),
        a = (t(7294), t(3905)),
        o = (t(828), ["components"]),
        d = {},
        s = "Under- and overfitting",
        c = {
          unversionedId: "ai/ann/learning/under_over_fitting",
          id: "ai/ann/learning/under_over_fitting",
          title: "Under- and overfitting",
          description:
            "Underfitting and overfitting are problems that can occur if the",
          source: "@site/docs/ai/ann/learning/under_over_fitting.md",
          sourceDirName: "ai/ann/learning",
          slug: "/ai/ann/learning/under_over_fitting",
          permalink: "/docs/ai/ann/learning/under_over_fitting",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Teacher Forcing",
            permalink: "/docs/ai/ann/learning/teacher_forcing",
          },
          next: {
            title: "Unsupervised learning",
            permalink: "/docs/ai/ann/learning/unsupervised_learning",
          },
        },
        l = {},
        g = [
          { value: "Underfitting", id: "underfitting", level: 2 },
          { value: "Overfitting", id: "overfitting", level: 2 },
          { value: "Dropout", id: "dropout", level: 2 },
        ],
        p = { toc: g };
      function u(e) {
        var n = e.components,
          t = (0, r.Z)(e, o);
        return (0, a.kt)(
          "wrapper",
          (0, i.Z)({}, p, t, { components: n, mdxType: "MDXLayout" }),
          (0, a.kt)(
            "h1",
            { id: "under--and-overfitting" },
            "Under- and overfitting"
          ),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)("strong", { parentName: "p" }, "Underfitting"),
            " and ",
            (0, a.kt)("strong", { parentName: "p" }, "overfitting"),
            " are problems that can occur if the\ncomplexity of the model does not match the problem. Both problems show up as\npoor performance on any validation data."
          ),
          (0, a.kt)("h2", { id: "underfitting" }, "Underfitting"),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)("strong", { parentName: "p" }, "Underfitting"),
            " happens when a model is not complex enough to solve a given\nproblem. An indication of this is poor performance (e.g. low classification\naccuracy)."
          ),
          (0, a.kt)("h2", { id: "overfitting" }, "Overfitting"),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)("strong", { parentName: "p" }, "Overfitting"),
            " is when a model is too complex and is capable of learning each\ndata point in the training data rather than learning to generalize. It is\nrecognized by excellent training metrics but poor validation metrics. There are\nvarious techniques to counter overtraining, such as data augmentation."
          ),
          (0, a.kt)("h2", { id: "dropout" }, "Dropout"),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)("strong", { parentName: "p" }, "Dropout"),
            " is an approach to mitigate overtraining. One randomly picks a set of\nnodes that are inactive during the training period. New nodes are picked after\neach update and during inferring all nodes are active."
          ),
          (0, a.kt)(
            "p",
            null,
            "Dropout can be used during inference to create ensemble machines. The mean of\nthe predictions is a good estimate for the true prediction and the variance is a\nmeasure of uncertainty. However, fine-tuning the used drop-out rate during\ninference becomes rather challenging and directly affects the given measure of\nuncertainty."
          )
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
