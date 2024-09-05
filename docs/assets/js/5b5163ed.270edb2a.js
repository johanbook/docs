"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [2915],
  {
    6894: (e, a, n) => {
      n.r(a),
        n.d(a, {
          assets: () => u,
          contentTitle: () => l,
          default: () => p,
          frontMatter: () => d,
          metadata: () => o,
          toc: () => c,
        });
      var s = n(7462),
        t = n(3366),
        i = (n(7294), n(3905)),
        r = (n(828), ["components"]),
        d = {},
        l = "Indexes",
        o = {
          unversionedId: "databases/relational_databases/indexes",
          id: "databases/relational_databases/indexes",
          title: "Indexes",
          description:
            "A database index is an index to more quickly search a table. The index uses",
          source: "@site/docs/databases/relational_databases/indexes.md",
          sourceDirName: "databases/relational_databases",
          slug: "/databases/relational_databases/indexes",
          permalink: "/docs/databases/relational_databases/indexes",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Constraints",
            permalink: "/docs/databases/relational_databases/constraints",
          },
          next: {
            title: "Migrations",
            permalink: "/docs/databases/relational_databases/migrations",
          },
        },
        u = {},
        c = [
          {
            value: "Multi-column indexes",
            id: "multi-column-indexes",
            level: 2,
          },
        ],
        m = { toc: c };
      function p(e) {
        var a = e.components,
          n = (0, t.Z)(e, r);
        return (0, i.kt)(
          "wrapper",
          (0, s.Z)({}, m, n, { components: a, mdxType: "MDXLayout" }),
          (0, i.kt)("h1", { id: "indexes" }, "Indexes"),
          (0, i.kt)(
            "p",
            null,
            "A ",
            (0, i.kt)("strong", { parentName: "p" }, "database index"),
            " is an index to more quickly search a table. The index uses\na balanced tree-like data structure, avoiding the need for full-table scans.\nHowever, adding an index to a table requires the index to be updated and\nrebalanced when the table is updated. This causes slower writes and a higher\nmemory consumption."
          ),
          (0, i.kt)("p", null, "You can create an index as below;"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-sql" },
              "CREATE TABLE person (\n  name varchar(255),\n  address varchar(255),\n);\n\nCREATE INDEX idx_person_name\nON person (name);\n"
            )
          ),
          (0, i.kt)(
            "h2",
            { id: "multi-column-indexes" },
            "Multi-column indexes"
          ),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)("strong", { parentName: "p" }, "Multi-column indexes"),
            " is an index that works on multiple columns. This is\nuseful if searching often on multiple columns simultaneously. Such an index can\nbe created using:"
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-sql" },
              "CREATE TABLE person (\n  first_name varchar(255) NOT NULL,\n  last_name  varchar(255) NOT NULL,\n);\n\nCREATE INDEX idx_person_name\nON person (first_name, last_name);\n"
            )
          )
        );
      }
      p.isMDXComponent = !0;
    },
  },
]);
