"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [4432],
  {
    8083: (e, t, o) => {
      o.r(t),
        o.d(t, {
          assets: () => d,
          contentTitle: () => p,
          default: () => f,
          frontMatter: () => a,
          metadata: () => c,
          toc: () => u,
        });
      var s = o(7462),
        n = o(3366),
        i = (o(7294), o(3905)),
        r = (o(828), ["components"]),
        a = {},
        p = "GitOps",
        c = {
          unversionedId: "devops/configuration/gitops",
          id: "devops/configuration/gitops",
          title: "GitOps",
          description: "GitOps, also Git for devops, is approach where on uses",
          source: "@site/docs/devops/configuration/gitops.md",
          sourceDirName: "devops/configuration",
          slug: "/devops/configuration/gitops",
          permalink: "/docs/devops/configuration/gitops",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Dotenv",
            permalink: "/docs/devops/configuration/dotenv",
          },
          next: {
            title: "Secret management",
            permalink: "/docs/devops/configuration/secrets",
          },
        },
        d = {},
        u = [{ value: "Components", id: "components", level: 2 }],
        g = { toc: u };
      function f(e) {
        var t = e.components,
          o = (0, n.Z)(e, r);
        return (0, i.kt)(
          "wrapper",
          (0, s.Z)({}, g, o, { components: t, mdxType: "MDXLayout" }),
          (0, i.kt)("h1", { id: "gitops" }, "GitOps"),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)("strong", { parentName: "p" }, "GitOps"),
            ", also ",
            (0, i.kt)("strong", { parentName: "p" }, "Git for devops"),
            ", is approach where on uses\n",
            (0, i.kt)(
              "a",
              { parentName: "p", href: "/docs/devops/vcs/git" },
              "Git"
            ),
            " for configuring infrastructure. This can be done with e.g.\n",
            (0, i.kt)(
              "a",
              {
                parentName: "p",
                href: "/docs/devops/orchestration/kubernetes/",
              },
              "Kubernetes"
            ),
            ". The advantage of using\nGitOps is that configurations can have code review practices and supports\nrollbacks."
          ),
          (0, i.kt)("h2", { id: "components" }, "Components"),
          (0, i.kt)(
            "p",
            null,
            "In GitOps, the Git repository is the single source of truth. Changes are\ndeployed using a ",
            (0, i.kt)(
              "a",
              { parentName: "p", href: "/docs/devops/ci_cd" },
              "CD"
            ),
            " pipeline."
          )
        );
      }
      f.isMDXComponent = !0;
    },
  },
]);
