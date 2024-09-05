"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [1592],
  {
    9045: (a, e, t) => {
      t.r(e),
        t.d(e, {
          assets: () => p,
          contentTitle: () => i,
          default: () => m,
          frontMatter: () => l,
          metadata: () => d,
          toc: () => b,
        });
      var s = t(7462),
        o = t(3366),
        r = (t(7294), t(3905)),
        n = (t(828), ["components"]),
        l = {},
        i = "Types of databases",
        d = {
          unversionedId: "databases/types_of_databases",
          id: "databases/types_of_databases",
          title: "Types of databases",
          description:
            "There are different types of databases that suits for different problem types.",
          source: "@site/docs/databases/types_of_databases.md",
          sourceDirName: "databases",
          slug: "/databases/types_of_databases",
          permalink: "/docs/databases/types_of_databases",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "SQL",
            permalink: "/docs/databases/relational_databases/sql",
          },
          next: {
            title: "Debugging",
            permalink: "/docs/development/debugging",
          },
        },
        p = {},
        b = [
          {
            value: "Relational Databases",
            id: "relational-databases",
            level: 2,
          },
          {
            value: "Non-relational Databases",
            id: "non-relational-databases",
            level: 2,
          },
          { value: "Key-Value Storage", id: "key-value-storage", level: 3 },
          { value: "Blob store", id: "blob-store", level: 3 },
          { value: "Other Types", id: "other-types", level: 2 },
        ],
        u = { toc: b };
      function m(a) {
        var e = a.components,
          t = (0, o.Z)(a, n);
        return (0, r.kt)(
          "wrapper",
          (0, s.Z)({}, u, t, { components: e, mdxType: "MDXLayout" }),
          (0, r.kt)("h1", { id: "types-of-databases" }, "Types of databases"),
          (0, r.kt)(
            "p",
            null,
            "There are different types of databases that suits for different problem types.\nDatabases are usually divided into relational and non-relational databases."
          ),
          (0, r.kt)(
            "h2",
            { id: "relational-databases" },
            "Relational Databases"
          ),
          (0, r.kt)(
            "p",
            null,
            "A ",
            (0, r.kt)("strong", { parentName: "p" }, "relational database"),
            " imposes a relational structure on its data. This\nstructure is described in schemas. Most relational databases support\n",
            (0, r.kt)(
              "a",
              {
                parentName: "p",
                href: "/docs/databases/relational_databases/sql",
              },
              "SQL"
            ),
            "."
          ),
          (0, r.kt)(
            "h2",
            { id: "non-relational-databases" },
            "Non-relational Databases"
          ),
          (0, r.kt)(
            "p",
            null,
            "A ",
            (0, r.kt)("strong", { parentName: "p" }, "non-relational database"),
            " (often referred to as a ",
            (0, r.kt)("strong", { parentName: "p" }, "NoSQL database"),
            ") is\ndatabase that does not require relational data. NoSQL is suitable for\nheterogeneous data where this no natural relations (such as random documents)."
          ),
          (0, r.kt)("h3", { id: "key-value-storage" }, "Key-Value Storage"),
          (0, r.kt)(
            "p",
            null,
            "A ",
            (0, r.kt)("strong", { parentName: "p" }, "key-value storage"),
            " is a database that store values by keys. This is\nsuitable for cache or system configurations (used in e.g. ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "etcd"),
            ")."
          ),
          (0, r.kt)("h3", { id: "blob-store" }, "Blob store"),
          (0, r.kt)(
            "p",
            null,
            "A ",
            (0, r.kt)("strong", { parentName: "p" }, "blob store"),
            " is a database designed to store Blobs (binary large object),\nwhich is unstructured data, in contrast e.g. to\n",
            (0, r.kt)(
              "a",
              { parentName: "p", href: "/docs/programming/data_formats/json" },
              "JSON"
            ),
            ". Blob stores usually behaves\nsimilarly like key-value stores."
          ),
          (0, r.kt)("h2", { id: "other-types" }, "Other Types"),
          (0, r.kt)("p", null, "Some other specialized data bases are:"),
          (0, r.kt)(
            "ul",
            null,
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "Time series database"),
              " Handles time-series data. Often used for e.g.\n",
              (0, r.kt)(
                "a",
                { parentName: "li", href: "/docs/devops/monitoring/" },
                "monitoring"
              ),
              "."
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "Graph database"),
              " Uses a graph model."
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "Spatial database"),
              " For storing spatial data, such as points on a map."
            )
          )
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
