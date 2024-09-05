"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [9210],
  {
    935: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => p,
          contentTitle: () => i,
          default: () => u,
          frontMatter: () => a,
          metadata: () => d,
          toc: () => m,
        });
      var o = n(7462),
        l = n(3366),
        r = (n(7294), n(3905)),
        s = (n(828), ["components"]),
        a = {},
        i = "Test-driven development",
        d = {
          unversionedId: "development/tdd",
          id: "development/tdd",
          title: "Test-driven development",
          description:
            "Test-driven development (TDD) is a form of development where one writes",
          source: "@site/docs/development/tdd.md",
          sourceDirName: "development",
          slug: "/development/tdd",
          permalink: "/docs/development/tdd",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Static code analysis",
            permalink: "/docs/development/static_code_analysis",
          },
          next: { title: "CI/CD", permalink: "/docs/devops/ci_cd" },
        },
        p = {},
        m = [{ value: "Workflow", id: "workflow", level: 2 }],
        c = { toc: m };
      function u(e) {
        var t = e.components,
          n = (0, l.Z)(e, s);
        return (0, r.kt)(
          "wrapper",
          (0, o.Z)({}, c, n, { components: t, mdxType: "MDXLayout" }),
          (0, r.kt)(
            "h1",
            { id: "test-driven-development" },
            "Test-driven development"
          ),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("strong", { parentName: "p" }, "Test-driven development"),
            " (",
            (0, r.kt)("strong", { parentName: "p" }, "TDD"),
            ") is a form of development where one writes\nthe tests before implementing the functionality."
          ),
          (0, r.kt)("p", null, "Advantages of using TDD are the following:"),
          (0, r.kt)(
            "ul",
            null,
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              "knowing when the code is good enough and prevents over-engineering"
            ),
            (0, r.kt)("li", { parentName: "ul" }, "helps creating better APIs"),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              "can help breaking down complex requirements"
            ),
            (0, r.kt)("li", { parentName: "ul" }, "confidence in code")
          ),
          (0, r.kt)("h2", { id: "workflow" }, "Workflow"),
          (0, r.kt)("p", null, "The TDD workflow is as follows:"),
          (0, r.kt)(
            "ol",
            null,
            (0, r.kt)(
              "li",
              { parentName: "ol" },
              "Create a unit tests. Make sure it compiles and files."
            ),
            (0, r.kt)(
              "li",
              { parentName: "ol" },
              "Impelement the functionality such that the tests pass."
            ),
            (0, r.kt)("li", { parentName: "ol" }, "Refactor and cleanup test.")
          )
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
