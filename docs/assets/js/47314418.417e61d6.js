"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [1765],
  {
    9247: (a, r, t) => {
      t.r(r),
        t.d(r, {
          assets: () => p,
          contentTitle: () => m,
          default: () => l,
          frontMatter: () => o,
          metadata: () => i,
          toc: () => g,
        });
      var e = t(7462),
        n = t(3366),
        s = (t(7294), t(3905)),
        d = (t(828), ["components"]),
        o = {},
        m = "Standard streams",
        i = {
          unversionedId: "programming/standard-streams",
          id: "programming/standard-streams",
          title: "Standard streams",
          description:
            "Standard streams are a way for a program to communicate with its",
          source: "@site/docs/programming/standard-streams.md",
          sourceDirName: "programming",
          slug: "/programming/standard-streams",
          permalink: "/docs/programming/standard-streams",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Stack and heap memory",
            permalink: "/docs/programming/stack_and_heap_memory",
          },
          next: { title: "Strings", permalink: "/docs/programming/strings" },
        },
        p = {},
        g = [
          { value: "Standard in", id: "standard-in", level: 2 },
          { value: "Standard out", id: "standard-out", level: 2 },
          { value: "Standard error", id: "standard-error", level: 2 },
        ],
        u = { toc: g };
      function l(a) {
        var r = a.components,
          t = (0, n.Z)(a, d);
        return (0, s.kt)(
          "wrapper",
          (0, e.Z)({}, u, t, { components: r, mdxType: "MDXLayout" }),
          (0, s.kt)("h1", { id: "standard-streams" }, "Standard streams"),
          (0, s.kt)(
            "p",
            null,
            (0, s.kt)("strong", { parentName: "p" }, "Standard streams"),
            " are a way for a program to communicate with its\nenvironment."
          ),
          (0, s.kt)("h2", { id: "standard-in" }, "Standard in"),
          (0, s.kt)(
            "p",
            null,
            (0, s.kt)("strong", { parentName: "p" }, "Standard in"),
            " (",
            (0, s.kt)("strong", { parentName: "p" }, "stdin"),
            ") is a stream for a program to read input data."
          ),
          (0, s.kt)("h2", { id: "standard-out" }, "Standard out"),
          (0, s.kt)(
            "p",
            null,
            (0, s.kt)("strong", { parentName: "p" }, "Standard out"),
            " (",
            (0, s.kt)("strong", { parentName: "p" }, "stdout"),
            ") is a stream where a program writes output data."
          ),
          (0, s.kt)("h2", { id: "standard-error" }, "Standard error"),
          (0, s.kt)(
            "p",
            null,
            (0, s.kt)("strong", { parentName: "p" }, "Standard error"),
            " (",
            (0, s.kt)("strong", { parentName: "p" }, "stderr"),
            ") is a stream where a program writes error\nmessages and diagnostics."
          )
        );
      }
      l.isMDXComponent = !0;
    },
  },
]);
