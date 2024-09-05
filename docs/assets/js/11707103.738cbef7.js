"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [8830],
  {
    8221: (a, e, t) => {
      t.r(e),
        t.d(e, {
          assets: () => m,
          contentTitle: () => r,
          default: () => h,
          frontMatter: () => s,
          metadata: () => d,
          toc: () => u,
        });
      var n = t(7462),
        o = t(3366),
        l = (t(7294), t(3905)),
        i = (t(828), ["components"]),
        s = {},
        r = "Normalization",
        d = {
          unversionedId: "databases/relational_databases/normalization",
          id: "databases/relational_databases/normalization",
          title: "Normalization",
          description: "Normal Forms",
          source: "@site/docs/databases/relational_databases/normalization.md",
          sourceDirName: "databases/relational_databases",
          slug: "/databases/relational_databases/normalization",
          permalink: "/docs/databases/relational_databases/normalization",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Migrations",
            permalink: "/docs/databases/relational_databases/migrations",
          },
          next: {
            title: "SQL",
            permalink: "/docs/databases/relational_databases/sql",
          },
        },
        m = {},
        u = [
          { value: "Normal Forms", id: "normal-forms", level: 2 },
          { value: "1NF", id: "1nf", level: 3 },
          { value: "2NF", id: "2nf", level: 3 },
          { value: "3NF", id: "3nf", level: 3 },
          { value: "4NF", id: "4nf", level: 3 },
          { value: "5NF", id: "5nf", level: 3 },
        ],
        p = { toc: u };
      function h(a) {
        var e = a.components,
          t = (0, o.Z)(a, i);
        return (0, l.kt)(
          "wrapper",
          (0, n.Z)({}, p, t, { components: e, mdxType: "MDXLayout" }),
          (0, l.kt)("h1", { id: "normalization" }, "Normalization"),
          (0, l.kt)("h2", { id: "normal-forms" }, "Normal Forms"),
          (0, l.kt)("h3", { id: "1nf" }, "1NF"),
          (0, l.kt)(
            "ul",
            null,
            (0, l.kt)(
              "li",
              { parentName: "ul" },
              "The database should not convey information through row order."
            ),
            (0, l.kt)(
              "li",
              { parentName: "ul" },
              "Columns should have a single data type."
            ),
            (0, l.kt)(
              "li",
              { parentName: "ul" },
              "Tables should have primary keys."
            ),
            (0, l.kt)(
              "li",
              { parentName: "ul" },
              "No repeating groups. That means one should not group items like a text field\nwith ",
              (0, l.kt)(
                "inlineCode",
                { parentName: "li" },
                "1 gold, 3 silver, 6 bronze"
              ),
              ". That makes it hard to query .e.g which\nplayer has the most gold."
            )
          ),
          (0, l.kt)("h3", { id: "2nf" }, "2NF"),
          (0, l.kt)("h3", { id: "3nf" }, "3NF"),
          (0, l.kt)(
            "p",
            null,
            "A non-key attribute may not depend on another non-key attribute. For example,\nyou should not have two columns ",
            (0, l.kt)("inlineCode", { parentName: "p" }, "player_rating"),
            " and ",
            (0, l.kt)("inlineCode", { parentName: "p" }, "player_level"),
            " in same table\nif ",
            (0, l.kt)("inlineCode", { parentName: "p" }, "player_rating"),
            " is computing from ",
            (0, l.kt)("inlineCode", { parentName: "p" }, "player_level"),
            "."
          ),
          (0, l.kt)(
            "p",
            null,
            "It means that every non-key attributes in a table should depend on only the\nprimary key of the table."
          ),
          (0, l.kt)("h3", { id: "4nf" }, "4NF"),
          (0, l.kt)("p", null, "Multivalued"),
          (0, l.kt)("h3", { id: "5nf" }, "5NF"),
          (0, l.kt)(
            "p",
            null,
            "The table should not possible to think of a as a join of two other tables. If\nso, the table in question should not exist."
          )
        );
      }
      h.isMDXComponent = !0;
    },
  },
]);
