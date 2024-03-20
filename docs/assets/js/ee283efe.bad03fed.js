"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [2899],
  {
    9471: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => p,
          contentTitle: () => c,
          default: () => v,
          frontMatter: () => s,
          metadata: () => l,
          toc: () => d,
        });
      var o = t(7462),
        i = t(3366),
        a = (t(7294), t(3905)),
        r = (t(828), ["components"]),
        s = {},
        c = "Dotenv",
        l = {
          unversionedId: "devops/configuration/dotenv",
          id: "devops/configuration/dotenv",
          title: "Dotenv",
          description:
            "A Dotenv file is a shell file often having the name .env (or",
          source: "@site/docs/devops/configuration/dotenv.md",
          sourceDirName: "devops/configuration",
          slug: "/devops/configuration/dotenv",
          permalink: "/docs/devops/configuration/dotenv",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Configuration",
            permalink: "/docs/devops/configuration/",
          },
          next: {
            title: "GitOps",
            permalink: "/docs/devops/configuration/gitops",
          },
        },
        p = {},
        d = [],
        u = { toc: d };
      function v(e) {
        var n = e.components,
          t = (0, i.Z)(e, r);
        return (0, a.kt)(
          "wrapper",
          (0, o.Z)({}, u, t, { components: n, mdxType: "MDXLayout" }),
          (0, a.kt)("h1", { id: "dotenv" }, "Dotenv"),
          (0, a.kt)(
            "p",
            null,
            "A ",
            (0, a.kt)("strong", { parentName: "p" }, "Dotenv"),
            " file is a shell file often having the name ",
            (0, a.kt)("inlineCode", { parentName: "p" }, ".env"),
            " (or\n",
            (0, a.kt)("inlineCode", { parentName: "p" }, ".env.production"),
            "). The file contain configurations for environment variables\nwhich later can be read by various applications. A file could for example\ncontain"
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "AWS_SECRET=aws-secret\nS3_URL=s3://my-s3-url\n"
            )
          ),
          (0, a.kt)(
            "p",
            null,
            "This can be imported in a shell on Unix systems by running ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "source .env"),
            "."
          ),
          (0, a.kt)(
            "p",
            null,
            "It is an approach to configuration (and sometimes\n",
            (0, a.kt)(
              "a",
              { parentName: "p", href: "/docs/devops/configuration/secrets" },
              "secret management"
            ),
            "). Dotenv files are typically not tracked by\nVCS. It is well suited for managing secrets for local development."
          )
        );
      }
      v.isMDXComponent = !0;
    },
  },
]);
