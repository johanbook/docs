"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [4266],
  {
    7943: (a, e, t) => {
      t.r(e),
        t.d(e, {
          assets: () => u,
          contentTitle: () => i,
          default: () => g,
          frontMatter: () => d,
          metadata: () => o,
          toc: () => c,
        });
      var s = t(7462),
        r = t(3366),
        n = (t(7294), t(3905)),
        l = (t(828), ["components"]),
        d = {},
        i = "SQL",
        o = {
          unversionedId: "databases/relational_databases/sql",
          id: "databases/relational_databases/sql",
          title: "SQL",
          description:
            "Structured Query Language (SQL) is a language for querying and modifying",
          source: "@site/docs/databases/relational_databases/sql.md",
          sourceDirName: "databases/relational_databases",
          slug: "/databases/relational_databases/sql",
          permalink: "/docs/databases/relational_databases/sql",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Normalization",
            permalink: "/docs/databases/relational_databases/normalization",
          },
          next: {
            title: "Types of databases",
            permalink: "/docs/databases/types_of_databases",
          },
        },
        u = {},
        c = [
          { value: "Create table", id: "create-table", level: 2 },
          { value: "Adding a row", id: "adding-a-row", level: 2 },
          { value: "Updating a row", id: "updating-a-row", level: 2 },
          { value: "Deleting a row", id: "deleting-a-row", level: 2 },
        ],
        p = { toc: c };
      function g(a) {
        var e = a.components,
          t = (0, r.Z)(a, l);
        return (0, n.kt)(
          "wrapper",
          (0, s.Z)({}, p, t, { components: e, mdxType: "MDXLayout" }),
          (0, n.kt)("h1", { id: "sql" }, "SQL"),
          (0, n.kt)(
            "p",
            null,
            (0, n.kt)(
              "strong",
              { parentName: "p" },
              "Structured Query Language"
            ),
            " (",
            (0, n.kt)("strong", { parentName: "p" }, "SQL"),
            ") is a language for querying and modifying\na database."
          ),
          (0, n.kt)("h2", { id: "create-table" }, "Create table"),
          (0, n.kt)(
            "pre",
            null,
            (0, n.kt)(
              "code",
              { parentName: "pre", className: "language-sql" },
              "CREATE TABLE person (\n  social_security_number integer PRIMARY KEY,\n  name varchar(255),\n  address varchar(255),\n);\n"
            )
          ),
          (0, n.kt)("h2", { id: "adding-a-row" }, "Adding a row"),
          (0, n.kt)(
            "pre",
            null,
            (0, n.kt)(
              "code",
              { parentName: "pre", className: "language-sql" },
              "INSERT INTO person (social_security_number, name, address)\nVALUES (123, 'Erik', 'My Street 123')\n"
            )
          ),
          (0, n.kt)("h2", { id: "updating-a-row" }, "Updating a row"),
          (0, n.kt)(
            "pre",
            null,
            (0, n.kt)(
              "code",
              { parentName: "pre", className: "language-sql" },
              "UPDATE person\nSET name = 'Erik'\nWHERE social_security_number = 1234;\n"
            )
          ),
          (0, n.kt)("h2", { id: "deleting-a-row" }, "Deleting a row"),
          (0, n.kt)(
            "pre",
            null,
            (0, n.kt)(
              "code",
              { parentName: "pre", className: "language-sql" },
              "DELETE FROM person\nWHERE social_security_number = 1234;\n"
            )
          )
        );
      }
      g.isMDXComponent = !0;
    },
  },
]);
