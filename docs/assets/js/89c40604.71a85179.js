"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [5409],
  {
    5863: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => l,
          contentTitle: () => c,
          default: () => k,
          frontMatter: () => i,
          metadata: () => p,
          toc: () => u,
        });
      var a = n(7462),
        o = n(3366),
        s = (n(7294), n(3905)),
        r = (n(828), ["components"]),
        i = {},
        c = "CNN",
        p = {
          unversionedId: "ai/ann/network_types/cnn",
          id: "ai/ann/network_types/cnn",
          title: "CNN",
          description:
            "A Convolutional Neural Network (CNN) is an ANN that uses a",
          source: "@site/docs/ai/ann/network_types/cnn.md",
          sourceDirName: "ai/ann/network_types",
          slug: "/ai/ann/network_types/cnn",
          permalink: "/docs/ai/ann/network_types/cnn",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Autoencoders",
            permalink: "/docs/ai/ann/network_types/autoencoders",
          },
          next: { title: "LSTM", permalink: "/docs/ai/ann/network_types/lstm" },
        },
        l = {},
        u = [{ value: "VGG", id: "vgg", level: 2 }],
        d = { toc: u };
      function k(e) {
        var t = e.components,
          n = (0, o.Z)(e, r);
        return (0, s.kt)(
          "wrapper",
          (0, a.Z)({}, d, n, { components: t, mdxType: "MDXLayout" }),
          (0, s.kt)("h1", { id: "cnn" }, "CNN"),
          (0, s.kt)(
            "p",
            null,
            "A ",
            (0, s.kt)(
              "strong",
              { parentName: "p" },
              "Convolutional Neural Network"
            ),
            " (",
            (0, s.kt)("strong", { parentName: "p" }, "CNN"),
            ") is an ",
            (0, s.kt)("a", { parentName: "p", href: "/docs/ai/ann/" }, "ANN"),
            " that uses a\nkernel with learnable weights. This allows the network to learn local features\nwithout needing an absurd amount of complexity. It is commonly used for computer\nvision problems, such as\n",
            (0, s.kt)(
              "a",
              {
                parentName: "p",
                href: "/docs/ai/problem_types/image_classification",
              },
              "image classification"
            ),
            " and\n",
            (0, s.kt)(
              "a",
              {
                parentName: "p",
                href: "/docs/ai/problem_types/object_detection",
              },
              "object detection"
            ),
            "."
          ),
          (0, s.kt)("h2", { id: "vgg" }, "VGG"),
          (0, s.kt)(
            "p",
            null,
            (0, s.kt)("strong", { parentName: "p" }, "VGG"),
            ", named after Visual Geometry Group, is an architecture that stacks many\nconvolutional layers on top of each other."
          )
        );
      }
      k.isMDXComponent = !0;
    },
  },
]);
