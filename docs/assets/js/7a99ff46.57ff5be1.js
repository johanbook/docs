"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [5431],
  {
    5510: (e, a, n) => {
      n.r(a),
        n.d(a, {
          assets: () => c,
          contentTitle: () => i,
          default: () => p,
          frontMatter: () => o,
          metadata: () => u,
          toc: () => d,
        });
      var t = n(7462),
        r = n(3366),
        s = (n(7294), n(3905)),
        l = (n(828), ["components"]),
        o = {},
        i = "Constraints",
        u = {
          unversionedId: "databases/relational_databases/constraints",
          id: "databases/relational_databases/constraints",
          title: "Constraints",
          description:
            "Database constraints are rules for relational databases for ensuring",
          source: "@site/docs/databases/relational_databases/constraints.md",
          sourceDirName: "databases/relational_databases",
          slug: "/databases/relational_databases/constraints",
          permalink: "/docs/databases/relational_databases/constraints",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "ORM", permalink: "/docs/databases/orm" },
          next: {
            title: "Indexes",
            permalink: "/docs/databases/relational_databases/indexes",
          },
        },
        c = {},
        d = [
          { value: "Primary key", id: "primary-key", level: 2 },
          {
            value: "Multi-column primary keys",
            id: "multi-column-primary-keys",
            level: 3,
          },
          { value: "Foreign key", id: "foreign-key", level: 2 },
          { value: "Not null", id: "not-null", level: 2 },
          { value: "Unique", id: "unique", level: 2 },
          { value: "Default", id: "default", level: 2 },
          { value: "Check", id: "check", level: 2 },
        ],
        m = { toc: d };
      function p(e) {
        var a = e.components,
          n = (0, r.Z)(e, l);
        return (0, s.kt)(
          "wrapper",
          (0, t.Z)({}, m, n, { components: a, mdxType: "MDXLayout" }),
          (0, s.kt)("h1", { id: "constraints" }, "Constraints"),
          (0, s.kt)(
            "p",
            null,
            (0, s.kt)("strong", { parentName: "p" }, "Database constraints"),
            " are rules for relational databases for ensuring\ndatabase integrity. The constraints are checked before a transaction and if the\ncheck fails the transaction will not be persisted."
          ),
          (0, s.kt)("h2", { id: "primary-key" }, "Primary key"),
          (0, s.kt)(
            "p",
            null,
            "A ",
            (0, s.kt)("strong", { parentName: "p" }, "primary key"),
            " is unique non-null id for a row. It will create an\n",
            (0, s.kt)(
              "a",
              {
                parentName: "p",
                href: "/docs/databases/relational_databases/indexes",
              },
              "index"
            ),
            " for the column. For example,"
          ),
          (0, s.kt)(
            "pre",
            null,
            (0, s.kt)(
              "code",
              { parentName: "pre", className: "language-sql" },
              "CREATE TABLE person (\n  social_security_number integer PRIMARY KEY,\n  name varchar(255),\n  address varchar(255),\n);\n"
            )
          ),
          (0, s.kt)("p", null, "Note that a primary key is not mandatory."),
          (0, s.kt)(
            "h3",
            { id: "multi-column-primary-keys" },
            "Multi-column primary keys"
          ),
          (0, s.kt)(
            "p",
            null,
            (0, s.kt)(
              "strong",
              { parentName: "p" },
              "Multi-column primary keys"
            ),
            ", also known as ",
            (0, s.kt)("strong", { parentName: "p" }, "composite primary keys"),
            ", are\nwhen multiple columns are used as primary keys, as shown in the example below.\nMulti-column primary keys are useful for table used to connect other tables,\ne.g. primary keys are also foreign keys."
          ),
          (0, s.kt)(
            "pre",
            null,
            (0, s.kt)(
              "code",
              { parentName: "pre", className: "language-sql" },
              "CREATE TABLE reservation (\n  name varchar(255),\n  day date,\n  day_time time,\n  number_of_people integer,\n  PRIMARY KEY (name, day, day_time)\n);\n\n"
            )
          ),
          (0, s.kt)("h2", { id: "foreign-key" }, "Foreign key"),
          (0, s.kt)(
            "p",
            null,
            "A ",
            (0, s.kt)("strong", { parentName: "p" }, "foreign key"),
            " refers to a primary key of another table, as shown in the\nexample below. With this constraint, it will not be possible to insert a record\ninto ",
            (0, s.kt)("inlineCode", { parentName: "p" }, "car"),
            " where the owner's social security number does not exist."
          ),
          (0, s.kt)(
            "pre",
            null,
            (0, s.kt)(
              "code",
              { parentName: "pre", className: "language-sql" },
              "CREATE TABLE person (\n  social_security_number integer PRIMARY KEY,\n  name varchar(255),\n);\n\nCREATE TABLE car (\n number_plate varchar(6) PRIMARY KEY,\n owner_social_security_number integer,\n FOREIGN KEY (owner_social_security_number) REFERENCES person(social_security_number)\n);\n"
            )
          ),
          (0, s.kt)("h2", { id: "not-null" }, "Not null"),
          (0, s.kt)(
            "p",
            null,
            "A column can be either nullable or non-nullable. When declared, columns are\nnullable by default. To create non-nullable columns, one can use the ",
            (0, s.kt)("inlineCode", { parentName: "p" }, "NOT NULL"),
            "\nkeyword as shown below:"
          ),
          (0, s.kt)(
            "pre",
            null,
            (0, s.kt)(
              "code",
              { parentName: "pre", className: "language-sql" },
              "CREATE TABLE person (\n  social_security_number integer PRIMARY KEY,\n  name varchar(255) NOT NULL,\n);\n"
            )
          ),
          (0, s.kt)("h2", { id: "unique" }, "Unique"),
          (0, s.kt)("p", null, "Columns can be unique."),
          (0, s.kt)(
            "pre",
            null,
            (0, s.kt)(
              "code",
              { parentName: "pre", className: "language-sql" },
              "CREATE TABLE person (\n  social_security_number integer PRIMARY KEY,\n  name varchar(255) UNIQUE,\n);\n"
            )
          ),
          (0, s.kt)("h2", { id: "default" }, "Default"),
          (0, s.kt)("p", null, "Columns can be assigned a default value;"),
          (0, s.kt)(
            "pre",
            null,
            (0, s.kt)(
              "code",
              { parentName: "pre", className: "language-sql" },
              'CREATE TABLE dog (\n  name varchar(255) DEFAULT "ruffy",\n);\n'
            )
          ),
          (0, s.kt)("h2", { id: "check" }, "Check"),
          (0, s.kt)(
            "p",
            null,
            "It is possible to impose custom validation checks using the ",
            (0, s.kt)("inlineCode", { parentName: "p" }, "CHECK"),
            " keyword."
          ),
          (0, s.kt)(
            "pre",
            null,
            (0, s.kt)(
              "code",
              { parentName: "pre", className: "language-sql" },
              "CREATE TABLE dog (\n  name varchar(255),\n  age integer,\n  CHECK (age<40)\n);\n"
            )
          ),
          (0, s.kt)(
            "p",
            null,
            "Note that the syntax may differ depending on the database system."
          )
        );
      }
      p.isMDXComponent = !0;
    },
  },
]);
