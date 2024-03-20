"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [2941],
  {
    1619: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => l,
          contentTitle: () => c,
          default: () => m,
          frontMatter: () => i,
          metadata: () => d,
          toc: () => u,
        });
      var a = n(7462),
        o = n(3366),
        r = (n(7294), n(3905)),
        s = (n(828), ["components"]),
        i = {},
        c = "Coverage",
        d = {
          unversionedId: "testing/automated_testing/coverage",
          id: "testing/automated_testing/coverage",
          title: "Coverage",
          description:
            "Coverage is a measure of how much of a codebase is covered during",
          source: "@site/docs/testing/automated_testing/coverage.md",
          sourceDirName: "testing/automated_testing",
          slug: "/testing/automated_testing/coverage",
          permalink: "/docs/testing/automated_testing/coverage",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Automated testing",
            permalink: "/docs/testing/automated_testing/",
          },
          next: {
            title: "Snapshotting",
            permalink: "/docs/testing/automated_testing/snapshots",
          },
        },
        l = {},
        u = [
          { value: "Coverage importance", id: "coverage-importance", level: 2 },
          {
            value: "Code instrumentation",
            id: "code-instrumentation",
            level: 2,
          },
        ],
        g = { toc: u };
      function m(e) {
        var t = e.components,
          n = (0, o.Z)(e, s);
        return (0, r.kt)(
          "wrapper",
          (0, a.Z)({}, g, n, { components: t, mdxType: "MDXLayout" }),
          (0, r.kt)("h1", { id: "coverage" }, "Coverage"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("strong", { parentName: "p" }, "Coverage"),
            " is a measure of how much of a codebase is covered during\n",
            (0, r.kt)(
              "a",
              { parentName: "p", href: "/docs/testing/" },
              "automated tests"
            ),
            ". This allows one to triangulate the code to find\nareas in need of testing. Coverage is generated when the tests are run and can\nbe divided into e.g. statements, functions, lines and branches."
          ),
          (0, r.kt)("h2", { id: "coverage-importance" }, "Coverage importance"),
          (0, r.kt)(
            "p",
            null,
            "Different regions of an application has different requirements for coverage, for\nexample;"
          ),
          (0, r.kt)(
            "ul",
            null,
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              "Application layer depends on cost and benefit"
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              "Domain model should have 100% coverage"
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              "Infrastructure layer need no coverage in terms of unit tests"
            )
          ),
          (0, r.kt)(
            "h2",
            { id: "code-instrumentation" },
            "Code instrumentation"
          ),
          (0, r.kt)(
            "p",
            null,
            "In order to generate a coverage report, one first needs to instrument the target\ncode. This is typically an automatic process that converts a code"
          ),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-ts" },
              "const arr = [1, 2, 3];\n\nfor (item of arr) {\n  console.log(arr);\n}\n"
            )
          ),
          (0, r.kt)("p", null, "to"),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-ts" },
              'const coverage = { line1: 0, line2: 0 };\n\ncoverage["line1"]++;\nconst arr = [1, 2, 3];\n\nfor (item of arr) {\n  coverage["line2"]++;\n  console.log(arr);\n}\n'
            )
          ),
          (0, r.kt)(
            "p",
            null,
            "When the instrumented code has been tested, one can parse the coverage object to\ncalculate the total coverage."
          )
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
