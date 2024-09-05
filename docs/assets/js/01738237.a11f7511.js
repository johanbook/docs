"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [946],
  {
    6944: (e, a, t) => {
      t.r(a),
        t.d(a, {
          assets: () => l,
          contentTitle: () => d,
          default: () => m,
          frontMatter: () => i,
          metadata: () => p,
          toc: () => r,
        });
      var n = t(7462),
        s = t(3366),
        o = (t(7294), t(3905)),
        c = (t(828), ["components"]),
        i = {},
        d = "Execution plan",
        p = {
          unversionedId: "databases/execution-plan",
          id: "databases/execution-plan",
          title: "Execution plan",
          description:
            "The execution plan is how a database plans to execute a command and can be",
          source: "@site/docs/databases/execution-plan.md",
          sourceDirName: "databases",
          slug: "/databases/execution-plan",
          permalink: "/docs/databases/execution-plan",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Deployment",
            permalink: "/docs/databases/deployment",
          },
          next: { title: "MVCC", permalink: "/docs/databases/mvcc" },
        },
        l = {},
        r = [],
        u = { toc: r };
      function m(e) {
        var a = e.components,
          t = (0, s.Z)(e, c);
        return (0, o.kt)(
          "wrapper",
          (0, n.Z)({}, u, t, { components: a, mdxType: "MDXLayout" }),
          (0, o.kt)("h1", { id: "execution-plan" }, "Execution plan"),
          (0, o.kt)(
            "p",
            null,
            "The ",
            (0, o.kt)("strong", { parentName: "p" }, "execution plan"),
            " is how a database plans to execute a command and can be\nused to estimate how costly that command will be."
          )
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
