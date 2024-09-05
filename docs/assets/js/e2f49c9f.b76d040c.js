"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [6600],
  {
    7866: (e, t, o) => {
      o.r(t),
        o.d(t, {
          assets: () => p,
          contentTitle: () => r,
          default: () => m,
          frontMatter: () => a,
          metadata: () => d,
          toc: () => b,
        });
      var n = o(7462),
        i = o(3366),
        s = (o(7294), o(3905)),
        c = (o(828), ["components"]),
        a = {},
        r = "Object detection",
        d = {
          unversionedId: "ai/problem_types/object_detection",
          id: "ai/problem_types/object_detection",
          title: "Object detection",
          description:
            "Object detection is when one detects objects with bounding boxes in video",
          source: "@site/docs/ai/problem_types/object_detection.md",
          sourceDirName: "ai/problem_types",
          slug: "/ai/problem_types/object_detection",
          permalink: "/docs/ai/problem_types/object_detection",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "NLP", permalink: "/docs/ai/problem_types/nlp" },
          next: { title: "OCR", permalink: "/docs/ai/problem_types/ocr" },
        },
        p = {},
        b = [{ value: "IoU", id: "iou", level: 2 }],
        l = { toc: b };
      function m(e) {
        var t = e.components,
          o = (0, i.Z)(e, c);
        return (0, s.kt)(
          "wrapper",
          (0, n.Z)({}, l, o, { components: t, mdxType: "MDXLayout" }),
          (0, s.kt)("h1", { id: "object-detection" }, "Object detection"),
          (0, s.kt)(
            "p",
            null,
            (0, s.kt)("strong", { parentName: "p" }, "Object detection"),
            " is when one detects objects with bounding boxes in video\nand images. It can be used for e.g. face detection."
          ),
          (0, s.kt)(
            "p",
            null,
            "One typically uses a ",
            (0, s.kt)(
              "a",
              { parentName: "p", href: "/docs/ai/ann/network_types/cnn" },
              "CNN"
            ),
            " for solving object\ndetection problems."
          ),
          (0, s.kt)("h2", { id: "iou" }, "IoU"),
          (0, s.kt)(
            "p",
            null,
            (0, s.kt)("strong", { parentName: "p" }, "Intersection over Union"),
            " (",
            (0, s.kt)("strong", { parentName: "p" }, "IoU"),
            ") is a measurement that can be used to\ndetermine how much two bounding boxes overlap. Given an IoU threshold one can\nestimate if two bounding boxes are the same."
          )
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
