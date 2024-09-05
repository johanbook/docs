"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [4744],
  {
    1724: (a, e, t) => {
      t.r(e),
        t.d(e, {
          assets: () => p,
          contentTitle: () => d,
          default: () => b,
          frontMatter: () => l,
          metadata: () => m,
          toc: () => c,
        });
      var n = t(7462),
        s = t(3366),
        i = (t(7294), t(3905)),
        r = t(828),
        o = ["components"],
        l = {},
        d = "Migrations",
        m = {
          unversionedId: "databases/relational_databases/migrations",
          id: "databases/relational_databases/migrations",
          title: "Migrations",
          description:
            "Database migrations happens when one needs to import data or alter the",
          source: "@site/docs/databases/relational_databases/migrations.md",
          sourceDirName: "databases/relational_databases",
          slug: "/databases/relational_databases/migrations",
          permalink: "/docs/databases/relational_databases/migrations",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Indexes",
            permalink: "/docs/databases/relational_databases/indexes",
          },
          next: {
            title: "Normalization",
            permalink: "/docs/databases/relational_databases/normalization",
          },
        },
        p = {},
        c = [
          { value: "Schema alteration", id: "schema-alteration", level: 2 },
          { value: "Importing data", id: "importing-data", level: 2 },
        ],
        h = { toc: c };
      function b(a) {
        var e = a.components,
          t = (0, s.Z)(a, o);
        return (0, i.kt)(
          "wrapper",
          (0, n.Z)({}, h, t, { components: e, mdxType: "MDXLayout" }),
          (0, i.kt)("h1", { id: "migrations" }, "Migrations"),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)("strong", { parentName: "p" }, "Database migrations"),
            " happens when one needs to import data or alter the\nschema of an already existing database."
          ),
          (0, i.kt)("h2", { id: "schema-alteration" }, "Schema alteration"),
          (0, i.kt)(
            "p",
            null,
            "Schema alterations typically happens in conjunction with deploying new versions\nof the software. One approach is to view the database schemas as a state machine\nand database migrations as transitioning between different states. For each\nneeded transition, one creates a migration script that contains the necessary\ncommands for executing the state change."
          ),
          (0, i.kt)(r.G, {
            chart:
              "graph TD\n    A[Previous state] --\x3e|Up| B[Newest state]\n    B --\x3e|Down| A",
            mdxType: "Mermaid",
          }),
          (0, i.kt)(
            "p",
            null,
            "Although the migration scripts typically are written in an ",
            (0, i.kt)(
              "a",
              { parentName: "p", href: "/docs/databases/orm" },
              "ORM"
            ),
            ",\nhere is an example in SQL. Assume we initially created a table like so:"
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-sql" },
              "-- Create initial table\nCREATE TABLE Persons (\n  Id int,\n  Name varchar(255),\n  Address varchar(255)\n);\n"
            )
          ),
          (0, i.kt)(
            "p",
            null,
            "Assume, that the need arise to specify last and first name. Then the following\ncan be a suitable migration script:"
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-sql" },
              "-- Add last name to Persons table\nALTER TABLE Persons\nADD LastName varchar(255);\n\n-- Rename name to first name\nALTER TABLE Persons\nRENAME COLUMN Name TO FirstName;\n"
            )
          ),
          (0, i.kt)(
            "p",
            null,
            "This obviously has problems with that all names are assumed to be first names,\nbut never the less illustrates the idea. We typically also want the possibility\nof performing the opposite transition (downgrading). An example of this would be"
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-sql" },
              "-- Remove last name from Persons table\nALTER TABLE Persons\nDROP COLUMN LastName;\n\n-- Rename first name to name\nALTER TABLE Persons\nRENAME COLUMN FirstName TO Name;\n"
            )
          ),
          (0, i.kt)("h2", { id: "importing-data" }, "Importing data"),
          (0, i.kt)(
            "p",
            null,
            "Sometimes data needs to be imported into the database, for example if syncing to\nan external system. This can cause performance issues, especially when handling\nbig data."
          ),
          (0, i.kt)(
            "p",
            null,
            "If downtime is allowed, it can be faster to disable constraints on integrity\nwhile importing data and later rebuilding it."
          )
        );
      }
      b.isMDXComponent = !0;
    },
  },
]);
