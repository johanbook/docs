"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [5748],
  {
    8434: (e, t, o) => {
      o.r(t),
        o.d(t, {
          assets: () => l,
          contentTitle: () => p,
          default: () => u,
          frontMatter: () => s,
          metadata: () => c,
          toc: () => m,
        });
      var r = o(7462),
        n = o(3366),
        a = (o(7294), o(3905)),
        i = (o(828), ["components"]),
        s = {},
        p = "OCR",
        c = {
          unversionedId: "ai/problem_types/ocr",
          id: "ai/problem_types/ocr",
          title: "OCR",
          description:
            "Optical Character Recognition (OCR) is a computer vision problem of",
          source: "@site/docs/ai/problem_types/ocr.md",
          sourceDirName: "ai/problem_types",
          slug: "/ai/problem_types/ocr",
          permalink: "/docs/ai/problem_types/ocr",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Object detection",
            permalink: "/docs/ai/problem_types/object_detection",
          },
          next: {
            title: "Segmentation",
            permalink: "/docs/ai/problem_types/segmentation",
          },
        },
        l = {},
        m = [],
        d = { toc: m };
      function u(e) {
        var t = e.components,
          o = (0, n.Z)(e, i);
        return (0, a.kt)(
          "wrapper",
          (0, r.Z)({}, d, o, { components: t, mdxType: "MDXLayout" }),
          (0, a.kt)("h1", { id: "ocr" }, "OCR"),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)(
              "strong",
              { parentName: "p" },
              "Optical Character Recognition"
            ),
            " (",
            (0, a.kt)("strong", { parentName: "p" }, "OCR"),
            ") is a computer vision problem of\nrecognizing characters in images."
          ),
          (0, a.kt)(
            "p",
            null,
            "One typically uses a ",
            (0, a.kt)(
              "a",
              { parentName: "p", href: "/docs/ai/ann/network_types/cnn" },
              "CNN"
            ),
            " for solving OCR\nproblems."
          )
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
