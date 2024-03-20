"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [3731],
  {
    4378: (t, e, a) => {
      a.r(e),
        a.d(e, {
          assets: () => c,
          contentTitle: () => d,
          default: () => m,
          frontMatter: () => l,
          metadata: () => r,
          toc: () => p,
        });
      var s = a(7462),
        n = a(3366),
        i = (a(7294), a(3905)),
        o = (a(828), ["components"]),
        l = {},
        d = "Static code analysis",
        r = {
          unversionedId: "development/static_code_analysis",
          id: "development/static_code_analysis",
          title: "Static code analysis",
          description:
            "Static Code Analysis, also known as linting, is an analysis that is",
          source: "@site/docs/development/static_code_analysis.md",
          sourceDirName: "development",
          slug: "/development/static_code_analysis",
          permalink: "/docs/development/static_code_analysis",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Package manager",
            permalink: "/docs/development/package_manager",
          },
          next: {
            title: "Test-driven development",
            permalink: "/docs/development/tdd",
          },
        },
        c = {},
        p = [{ value: "Quality gate", id: "quality-gate", level: 2 }],
        u = { toc: p };
      function m(t) {
        var e = t.components,
          a = (0, n.Z)(t, o);
        return (0, i.kt)(
          "wrapper",
          (0, s.Z)({}, u, a, { components: e, mdxType: "MDXLayout" }),
          (0, i.kt)(
            "h1",
            { id: "static-code-analysis" },
            "Static code analysis"
          ),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)("strong", { parentName: "p" }, "Static Code Analysis"),
            ", also known as ",
            (0, i.kt)("strong", { parentName: "p" }, "linting"),
            ", is an analysis that is\ntypically run on a program's source code to find potential bugs, formatting\nissues and undesirable patterns. Static code analysis should be run either as\npart of a ",
            (0, i.kt)(
              "a",
              { parentName: "p", href: "/docs/devops/vcs/git#hooks" },
              "Git hook"
            ),
            " or as part of a\n",
            (0, i.kt)(
              "a",
              { parentName: "p", href: "/docs/devops/ci_cd" },
              "CI pipeline"
            ),
            "."
          ),
          (0, i.kt)("h2", { id: "quality-gate" }, "Quality gate"),
          (0, i.kt)(
            "p",
            null,
            "A ",
            (0, i.kt)("strong", { parentName: "p" }, "quality gate"),
            " is a threshold the code must pass when being linted."
          )
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
