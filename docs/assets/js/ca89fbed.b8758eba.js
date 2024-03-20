"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [9702],
  {
    1597: (e, i, a) => {
      a.r(i),
        a.d(i, {
          assets: () => p,
          contentTitle: () => r,
          default: () => g,
          frontMatter: () => c,
          metadata: () => l,
          toc: () => m,
        });
      var s = a(7462),
        t = a(3366),
        n = (a(7294), a(3905)),
        o = (a(828), ["components"]),
        c = {},
        r = "Image classification",
        l = {
          unversionedId: "ai/problem_types/image_classification",
          id: "ai/problem_types/image_classification",
          title: "Image classification",
          description:
            "Image classification is a computer vision problem of classifying an image",
          source: "@site/docs/ai/problem_types/image_classification.md",
          sourceDirName: "ai/problem_types",
          slug: "/ai/problem_types/image_classification",
          permalink: "/docs/ai/problem_types/image_classification",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Forecasting",
            permalink: "/docs/ai/problem_types/forecasting",
          },
          next: { title: "NLP", permalink: "/docs/ai/problem_types/nlp" },
        },
        p = {},
        m = [],
        f = { toc: m };
      function g(e) {
        var i = e.components,
          a = (0, t.Z)(e, o);
        return (0, n.kt)(
          "wrapper",
          (0, s.Z)({}, f, a, { components: i, mdxType: "MDXLayout" }),
          (0, n.kt)(
            "h1",
            { id: "image-classification" },
            "Image classification"
          ),
          (0, n.kt)(
            "p",
            null,
            (0, n.kt)("strong", { parentName: "p" }, "Image classification"),
            " is a computer vision problem of classifying an image\ninto several different categories. Examples are detecting if images contains\nviolent or sexual content."
          ),
          (0, n.kt)(
            "p",
            null,
            "One typically uses a ",
            (0, n.kt)(
              "a",
              { parentName: "p", href: "/docs/ai/ann/network_types/cnn" },
              "CNN"
            ),
            " for solving image\nclassification problems."
          )
        );
      }
      g.isMDXComponent = !0;
    },
  },
]);
