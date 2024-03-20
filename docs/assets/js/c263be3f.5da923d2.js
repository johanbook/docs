"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [6818],
  {
    1258: (t, e, n) => {
      n.r(e),
        n.d(e, {
          assets: () => c,
          contentTitle: () => i,
          default: () => d,
          frontMatter: () => p,
          metadata: () => m,
          toc: () => k,
        });
      var a = n(7462),
        s = n(3366),
        r = (n(7294), n(3905)),
        o = (n(828), ["components"]),
        p = {},
        i = "LSTM",
        m = {
          unversionedId: "ai/ann/network_types/lstm",
          id: "ai/ann/network_types/lstm",
          title: "LSTM",
          description:
            "Long Short Term Memory (LSTM) is a RNN that keeps a memory",
          source: "@site/docs/ai/ann/network_types/lstm.md",
          sourceDirName: "ai/ann/network_types",
          slug: "/ai/ann/network_types/lstm",
          permalink: "/docs/ai/ann/network_types/lstm",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "CNN",
            permalink: "/docs/ai/ann/network_types/cnn",
          },
          next: { title: "RNN", permalink: "/docs/ai/ann/network_types/rnn" },
        },
        c = {},
        k = [],
        l = { toc: k };
      function d(t) {
        var e = t.components,
          n = (0, s.Z)(t, o);
        return (0, r.kt)(
          "wrapper",
          (0, a.Z)({}, l, n, { components: e, mdxType: "MDXLayout" }),
          (0, r.kt)("h1", { id: "lstm" }, "LSTM"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("strong", { parentName: "p" }, "Long Short Term Memory"),
            " (",
            (0, r.kt)("strong", { parentName: "p" }, "LSTM"),
            ") is a ",
            (0, r.kt)(
              "a",
              { parentName: "p", href: "/docs/ai/ann/network_types/rnn" },
              "RNN"
            ),
            " that keeps a memory\nstate, which allows it to process sequences of data. It can be used in e.g.\n",
            (0, r.kt)(
              "a",
              { parentName: "p", href: "/docs/ai/problem_types/nlp" },
              "NLP"
            ),
            "."
          )
        );
      }
      d.isMDXComponent = !0;
    },
  },
]);
