"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [7727],
  {
    1960: (e, t, a) => {
      a.r(t),
        a.d(t, {
          assets: () => c,
          contentTitle: () => l,
          default: () => b,
          frontMatter: () => o,
          metadata: () => d,
          toc: () => u,
        });
      var i = a(7462),
        s = a(3366),
        n = (a(7294), a(3905)),
        r = (a(828), ["components"]),
        o = {},
        l = "ACID",
        d = {
          unversionedId: "databases/acid",
          id: "databases/acid",
          title: "ACID",
          description:
            "ACID is an abbreviation for describing desirable properties of a database",
          source: "@site/docs/databases/acid.md",
          sourceDirName: "databases",
          slug: "/databases/acid",
          permalink: "/docs/databases/acid",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Data structures",
            permalink: "/docs/data_structures/overview",
          },
          next: { title: "BigQuery", permalink: "/docs/databases/bigquery" },
        },
        c = {},
        u = [
          { value: "Atomicity", id: "atomicity", level: 2 },
          { value: "Consistency", id: "consistency", level: 2 },
          { value: "Isolation", id: "isolation", level: 2 },
          { value: "Isolation levels", id: "isolation-levels", level: 3 },
          { value: "Durability", id: "durability", level: 2 },
        ],
        p = { toc: u };
      function b(e) {
        var t = e.components,
          a = (0, s.Z)(e, r);
        return (0, n.kt)(
          "wrapper",
          (0, i.Z)({}, p, a, { components: t, mdxType: "MDXLayout" }),
          (0, n.kt)("h1", { id: "acid" }, "ACID"),
          (0, n.kt)(
            "p",
            null,
            (0, n.kt)("strong", { parentName: "p" }, "ACID"),
            " is an abbreviation for describing desirable properties of a database\ntransaction."
          ),
          (0, n.kt)("h2", { id: "atomicity" }, "Atomicity"),
          (0, n.kt)(
            "p",
            null,
            (0, n.kt)("strong", { parentName: "p" }, "Atomicity"),
            " is a transaction involving several operations all fail or all\nsucceed such that data integrity is maintained."
          ),
          (0, n.kt)("h2", { id: "consistency" }, "Consistency"),
          (0, n.kt)(
            "p",
            null,
            (0, n.kt)("strong", { parentName: "p" }, "Consistency"),
            " means that the database is updated directly after a transaction\nand that invariants are respected. If there is an error in a transaction, the\ndatabase will be rolled back. This is in contrast to eventual consistency where\na database will update at some after the transaction, but not necessarily\ndirectly."
          ),
          (0, n.kt)("h2", { id: "isolation" }, "Isolation"),
          (0, n.kt)(
            "p",
            null,
            (0, n.kt)("strong", { parentName: "p" }, "Isolation"),
            " means that although queries are run in parallel they behave as if\nserial. This requires a mean of concurrency control, such as ",
            (0, n.kt)(
              "a",
              { parentName: "p", href: "/docs/databases/mvcc" },
              "MVCC"
            ),
            "."
          ),
          (0, n.kt)("h3", { id: "isolation-levels" }, "Isolation levels"),
          (0, n.kt)("p", null, "There are different isolation levels."),
          (0, n.kt)(
            "p",
            null,
            "Different isolation levels are applicable for different use cases. For example,\nfor storing metrics, a dirty read isolation level is often sufficient is there\nhigh-density reads and often low-density reads with some tolerance for\ndeviations in the read results."
          ),
          (0, n.kt)("h2", { id: "durability" }, "Durability"),
          (0, n.kt)(
            "p",
            null,
            (0, n.kt)("strong", { parentName: "p" }, "Durability"),
            " means that committed changes to the database are permanent, even\nin case of system failure."
          )
        );
      }
      b.isMDXComponent = !0;
    },
  },
]);
