"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [6687],
  {
    9251: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => d,
          contentTitle: () => p,
          default: () => l,
          frontMatter: () => i,
          metadata: () => m,
          toc: () => c,
        });
      var r = n(7462),
        a = n(3366),
        s = (n(7294), n(3905)),
        o = (n(828), ["components"]),
        i = {},
        p = "CQRS",
        m = {
          unversionedId: "programming/patterns/cqsr",
          id: "programming/patterns/cqsr",
          title: "CQRS",
          description:
            "Command Query Responsibility Segregation (CQRS) is a design pattern",
          source: "@site/docs/programming/patterns/cqsr.md",
          sourceDirName: "programming/patterns",
          slug: "/programming/patterns/cqsr",
          permalink: "/docs/programming/patterns/cqsr",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Encodings",
            permalink: "/docs/programming/encodings",
          },
          next: {
            title: "Dependency injection",
            permalink: "/docs/programming/patterns/dependency_injection",
          },
        },
        d = {},
        c = [{ value: "CQS", id: "cqs", level: 3 }],
        g = { toc: c };
      function l(e) {
        var t = e.components,
          n = (0, a.Z)(e, o);
        return (0, s.kt)(
          "wrapper",
          (0, r.Z)({}, g, n, { components: t, mdxType: "MDXLayout" }),
          (0, s.kt)("h1", { id: "cqrs" }, "CQRS"),
          (0, s.kt)(
            "p",
            null,
            (0, s.kt)(
              "strong",
              { parentName: "p" },
              "Command Query Responsibility Segregation"
            ),
            " (",
            (0, s.kt)("strong", { parentName: "p" }, "CQRS"),
            ") is a design pattern\nwhere system operations are classified either as queries or commands. A query is\na read-only action while a command will mutate the application state. There\nshould never be an operation that does both."
          ),
          (0, s.kt)("h3", { id: "cqs" }, "CQS"),
          (0, s.kt)(
            "p",
            null,
            "A related, but less strict design pattern, is ",
            (0, s.kt)(
              "strong",
              { parentName: "p" },
              "Command Query Segregation"
            ),
            "\n(",
            (0, s.kt)("strong", { parentName: "p" }, "CQS"),
            ") which enforces separation of commands and queries but without the need\nfor separation of data models."
          )
        );
      }
      l.isMDXComponent = !0;
    },
  },
]);
