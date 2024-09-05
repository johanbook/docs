"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [7688],
  {
    7400: (t, a, e) => {
      e.r(a),
        e.d(a, {
          assets: () => d,
          contentTitle: () => i,
          default: () => m,
          frontMatter: () => c,
          metadata: () => l,
          toc: () => p,
        });
      var s = e(7462),
        n = e(3366),
        o = (e(7294), e(3905)),
        r = (e(828), ["components"]),
        c = {},
        i = "MVCC",
        l = {
          unversionedId: "databases/mvcc",
          id: "databases/mvcc",
          title: "MVCC",
          description:
            "Multiversion Concurrency Control (MVCC) is a currency control for",
          source: "@site/docs/databases/mvcc.md",
          sourceDirName: "databases",
          slug: "/databases/mvcc",
          permalink: "/docs/databases/mvcc",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Execution plan",
            permalink: "/docs/databases/execution-plan",
          },
          next: { title: "ORM", permalink: "/docs/databases/orm" },
        },
        d = {},
        p = [],
        u = { toc: p };
      function m(t) {
        var a = t.components,
          e = (0, n.Z)(t, r);
        return (0, o.kt)(
          "wrapper",
          (0, s.Z)({}, u, e, { components: a, mdxType: "MDXLayout" }),
          (0, o.kt)("h1", { id: "mvcc" }, "MVCC"),
          (0, o.kt)(
            "p",
            null,
            (0, o.kt)(
              "strong",
              { parentName: "p" },
              "Multiversion Concurrency Control"
            ),
            " (",
            (0, o.kt)("strong", { parentName: "p" }, "MVCC"),
            ") is a currency control for\ndatabases that relies on version-control rather strict locks to\n",
            (0, o.kt)(
              "a",
              { parentName: "p", href: "/docs/databases/acid#isolation" },
              "transaction isolation"
            ),
            " in databases. This allows\nnon-blocking implementations of isolation levels which might otherwise be an\nissue in lock-based databases, especially for long transactions."
          ),
          (0, o.kt)("p", null, "Each user sees a snapshot of the database.")
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
