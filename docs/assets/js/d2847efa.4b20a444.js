"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [7634],
  {
    6460: (a, e, t) => {
      t.r(e),
        t.d(e, {
          assets: () => c,
          contentTitle: () => d,
          default: () => m,
          frontMatter: () => i,
          metadata: () => l,
          toc: () => p,
        });
      var s = t(7462),
        n = t(3366),
        r = (t(7294), t(3905)),
        o = (t(828), ["components"]),
        i = {},
        d = "ORM",
        l = {
          unversionedId: "databases/orm",
          id: "databases/orm",
          title: "ORM",
          description:
            "An Object-Relational Mapping (ORM) is a technique for querying and",
          source: "@site/docs/databases/orm.md",
          sourceDirName: "databases",
          slug: "/databases/orm",
          permalink: "/docs/databases/orm",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "MVCC", permalink: "/docs/databases/mvcc" },
          next: {
            title: "Constraints",
            permalink: "/docs/databases/relational_databases/constraints",
          },
        },
        c = {},
        p = [
          { value: "Session", id: "session", level: 2 },
          { value: "Drawbacks", id: "drawbacks", level: 2 },
        ],
        u = { toc: p };
      function m(a) {
        var e = a.components,
          t = (0, n.Z)(a, o);
        return (0, r.kt)(
          "wrapper",
          (0, s.Z)({}, u, t, { components: e, mdxType: "MDXLayout" }),
          (0, r.kt)("h1", { id: "orm" }, "ORM"),
          (0, r.kt)(
            "p",
            null,
            "An ",
            (0, r.kt)(
              "strong",
              { parentName: "p" },
              "Object-Relational Mapping"
            ),
            " (",
            (0, r.kt)("strong", { parentName: "p" }, "ORM"),
            ") is a technique for querying and\nmutating relational data from an object oriented paradigm. It acts as an\nabstracting layer on top of the database layer. This allows the database type to\nbe more easily swapped out if the need would arise."
          ),
          (0, r.kt)("h2", { id: "session" }, "Session"),
          (0, r.kt)(
            "p",
            null,
            "In order to interact with the database via the ORM one uses a session."
          ),
          (0, r.kt)("h2", { id: "drawbacks" }, "Drawbacks"),
          (0, r.kt)(
            "p",
            null,
            "Using an ORM comes with multiple potential drawbacks:"
          ),
          (0, r.kt)(
            "ul",
            null,
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              "SQL queries are abstracted away meaning they are harder to inspect."
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              "Suboptimal SQL queries might be generated compared to what a person would\nwrite by hand."
            )
          )
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
