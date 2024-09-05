"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [9173],
  {
    4495: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => c,
          contentTitle: () => r,
          default: () => m,
          frontMatter: () => p,
          metadata: () => d,
          toc: () => l,
        });
      var o = n(7462),
        s = n(3366),
        a = (n(7294), n(3905)),
        i = (n(828), ["components"]),
        p = {},
        r = "CI/CD",
        d = {
          unversionedId: "devops/ci_cd",
          id: "devops/ci_cd",
          title: "CI/CD",
          description:
            "Continuous Integration (CI) and Continuous Deployment (CD) are",
          source: "@site/docs/devops/ci_cd.md",
          sourceDirName: "devops",
          slug: "/devops/ci_cd",
          permalink: "/docs/devops/ci_cd",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Test-driven development",
            permalink: "/docs/development/tdd",
          },
          next: { title: "VPS", permalink: "/docs/devops/cloud/vps" },
        },
        c = {},
        l = [],
        u = { toc: l };
      function m(e) {
        var t = e.components,
          n = (0, s.Z)(e, i);
        return (0, a.kt)(
          "wrapper",
          (0, o.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
          (0, a.kt)("h1", { id: "cicd" }, "CI/CD"),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)("strong", { parentName: "p" }, "Continuous Integration"),
            " (",
            (0, a.kt)("strong", { parentName: "p" }, "CI"),
            ") and ",
            (0, a.kt)("strong", { parentName: "p" }, "Continuous Deployment"),
            " (",
            (0, a.kt)("strong", { parentName: "p" }, "CD"),
            ") are\nthe concepts of integrating and deploying code continuously. This is\naccomplished by triggering a pipeline on certain events, typically triggered on\npushes or merge requests on a ",
            (0, a.kt)(
              "a",
              { parentName: "p", href: "/docs/devops/vcs/git" },
              "Git"
            ),
            " SaaS. This pipeline can run\n",
            (0, a.kt)(
              "a",
              { parentName: "p", href: "/docs/testing/" },
              "testing"
            ),
            ",\n",
            (0, a.kt)(
              "a",
              {
                parentName: "p",
                href: "/docs/development/static_code_analysis",
              },
              "static code analysis"
            ),
            " and even\ndeployments."
          ),
          (0, a.kt)(
            "p",
            null,
            "In CI you typically run a test pipeline to confirm tests pass. In CD you also\ndeploy the changes."
          )
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
