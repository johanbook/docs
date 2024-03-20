"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [8455],
  {
    3720: (e, a, t) => {
      t.r(a),
        t.d(a, {
          assets: () => d,
          contentTitle: () => u,
          default: () => m,
          frontMatter: () => i,
          metadata: () => o,
          toc: () => p,
        });
      var n = t(7462),
        s = t(3366),
        r = (t(7294), t(3905)),
        l = (t(828), ["components"]),
        i = {},
        u = "BigQuery",
        o = {
          unversionedId: "databases/bigquery",
          id: "databases/bigquery",
          title: "BigQuery",
          description:
            "BigQuery is a relational database for large data. This document contains",
          source: "@site/docs/databases/bigquery.md",
          sourceDirName: "databases",
          slug: "/databases/bigquery",
          permalink: "/docs/databases/bigquery",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "ACID", permalink: "/docs/databases/acid" },
          next: {
            title: "Deployment",
            permalink: "/docs/databases/deployment",
          },
        },
        d = {},
        p = [
          { value: "Arrays", id: "arrays", level: 2 },
          { value: "Unnesting", id: "unnesting", level: 3 },
          { value: "Structs", id: "structs", level: 2 },
        ],
        c = { toc: p };
      function m(e) {
        var a = e.components,
          t = (0, s.Z)(e, l);
        return (0, r.kt)(
          "wrapper",
          (0, n.Z)({}, c, t, { components: a, mdxType: "MDXLayout" }),
          (0, r.kt)("h1", { id: "bigquery" }, "BigQuery"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("strong", { parentName: "p" }, "BigQuery"),
            " is a relational database for large data. This document contains\nsome info on how it differentiates towards other databases. For general SQL, see\n",
            (0, r.kt)(
              "a",
              {
                parentName: "p",
                href: "/docs/databases/relational_databases/sql",
              },
              "this page"
            ),
            "."
          ),
          (0, r.kt)("h2", { id: "arrays" }, "Arrays"),
          (0, r.kt)(
            "p",
            null,
            "An array is a list of objects with the same schema, such as ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "[1, 2, 3]"),
            " or\n",
            (0, r.kt)("inlineCode", { parentName: "p" }, '["A", "B", "C"]'),
            ". The data type can also be structs - an data structure that is\ndiscussed later."
          ),
          (0, r.kt)("h3", { id: "unnesting" }, "Unnesting"),
          (0, r.kt)(
            "p",
            null,
            "As arrays are a data type and not tables, they cannot be queried and one cannot\nuse e.g. the ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "WHERE"),
            " keyword. For example"
          ),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-sql" },
              "SELECT [1, 2, 3] AS myValue;\n"
            )
          ),
          (0, r.kt)("p", null, "will return"),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-json" },
              '[\n  {\n    "myValue": [1, 2, 3]\n  }\n]\n'
            )
          ),
          (0, r.kt)(
            "p",
            null,
            "Using ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "UNNEST"),
            " the array becomes a table we can query and manipulate like so by\ntransforming each array item into a separate row:"
          ),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-sql" },
              "SELECT * FROM UNNEST([1,2,3,10]) AS myValue\nWHERE myValue < 5;\n"
            )
          ),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-json" },
              '[\n  {\n    "myValue": "1"\n  },\n  {\n    "myValue": "2"\n  },\n  {\n    "myValue": "3"\n  }\n]\n'
            )
          ),
          (0, r.kt)("h2", { id: "structs" }, "Structs"),
          (0, r.kt)(
            "p",
            null,
            "A ",
            (0, r.kt)("strong", { parentName: "p" }, "struct"),
            " is a custom data type that used to handle nested data. A struct can\nbe created like"
          ),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-sql" },
              "SELECT STRUCT(1 AS myValue) AS myStruct;\n"
            )
          ),
          (0, r.kt)("p", null, "which produces"),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-json" },
              '[\n  {\n    "myStruct": {\n      "myValue": 1\n    }\n  }\n]\n'
            )
          )
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
