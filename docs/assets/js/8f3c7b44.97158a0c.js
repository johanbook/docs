"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [5350],
  {
    5156: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => u,
          contentTitle: () => i,
          default: () => l,
          frontMatter: () => c,
          metadata: () => d,
          toc: () => p,
        });
      var s = n(7462),
        a = n(3366),
        o = (n(7294), n(3905)),
        r = (n(828), ["components"]),
        c = {},
        i = "Secret management",
        d = {
          unversionedId: "devops/configuration/secrets",
          id: "devops/configuration/secrets",
          title: "Secret management",
          description:
            "Secret management is managing secrets, such as credentials and database",
          source: "@site/docs/devops/configuration/secrets.md",
          sourceDirName: "devops/configuration",
          slug: "/devops/configuration/secrets",
          permalink: "/docs/devops/configuration/secrets",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "GitOps",
            permalink: "/docs/devops/configuration/gitops",
          },
          next: {
            title: "Docker",
            permalink: "/docs/devops/containerization/docker",
          },
        },
        u = {},
        p = [{ value: "Vaults", id: "vaults", level: 2 }],
        m = { toc: p };
      function l(e) {
        var t = e.components,
          n = (0, a.Z)(e, r);
        return (0, o.kt)(
          "wrapper",
          (0, s.Z)({}, m, n, { components: t, mdxType: "MDXLayout" }),
          (0, o.kt)("h1", { id: "secret-management" }, "Secret management"),
          (0, o.kt)(
            "p",
            null,
            (0, o.kt)("strong", { parentName: "p" }, "Secret management"),
            " is managing secrets, such as credentials and database\nconnection strings. Secrets should not tracked by a VCS system such that they\ncan be exposed to those not intended for."
          ),
          (0, o.kt)("h2", { id: "vaults" }, "Vaults"),
          (0, o.kt)(
            "p",
            null,
            "A ",
            (0, o.kt)("strong", { parentName: "p" }, "vault"),
            " is a dedicated component for storing secrets."
          )
        );
      }
      l.isMDXComponent = !0;
    },
  },
]);
