"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [3983],
  {
    6985: (n, o, e) => {
      e.r(o),
        e.d(o, {
          assets: () => u,
          contentTitle: () => c,
          default: () => p,
          frontMatter: () => s,
          metadata: () => d,
          toc: () => l,
        });
      var t = e(7462),
        i = e(3366),
        a = (e(7294), e(3905)),
        r = (e(828), ["components"]),
        s = {},
        c = "Configuration",
        d = {
          unversionedId: "devops/configuration/README",
          id: "devops/configuration/README",
          title: "Configuration",
          description:
            "All software needs some form of configuration. Configurations can be divided",
          source: "@site/docs/devops/configuration/README.md",
          sourceDirName: "devops/configuration",
          slug: "/devops/configuration/",
          permalink: "/docs/devops/configuration/",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "VPS", permalink: "/docs/devops/cloud/vps" },
          next: {
            title: "Dotenv",
            permalink: "/docs/devops/configuration/dotenv",
          },
        },
        u = {},
        l = [
          { value: "Types", id: "types", level: 2 },
          {
            value: "Static configuration",
            id: "static-configuration",
            level: 3,
          },
          {
            value: "Dynamic configuration",
            id: "dynamic-configuration",
            level: 3,
          },
          { value: "Providers", id: "providers", level: 2 },
          { value: "Concerns", id: "concerns", level: 2 },
        ],
        f = { toc: l };
      function p(n) {
        var o = n.components,
          e = (0, i.Z)(n, r);
        return (0, a.kt)(
          "wrapper",
          (0, t.Z)({}, f, e, { components: o, mdxType: "MDXLayout" }),
          (0, a.kt)("h1", { id: "configuration" }, "Configuration"),
          (0, a.kt)(
            "p",
            null,
            "All software needs some form of configuration. Configurations can be divided\ninto static configurations and dynamic ones."
          ),
          (0, a.kt)("h2", { id: "types" }, "Types"),
          (0, a.kt)(
            "h3",
            { id: "static-configuration" },
            "Static configuration"
          ),
          (0, a.kt)(
            "p",
            null,
            "Static configuration are those that are hardcoded / embedded into an\napplication. They are safer but have longer turn-around. They are typically also\ncovered by tests."
          ),
          (0, a.kt)(
            "h3",
            { id: "dynamic-configuration" },
            "Dynamic configuration"
          ),
          (0, a.kt)(
            "p",
            null,
            "Dynamic configurations on the other hand are typically set at application\nruntime. This means that the configurations might not be covered by test and\nfaulty configurations might bring the application down."
          ),
          (0, a.kt)("h2", { id: "providers" }, "Providers"),
          (0, a.kt)(
            "p",
            null,
            "There are multiple types of configuration providers, such as\n",
            (0, a.kt)(
              "a",
              { parentName: "p", href: "/docs/devops/configuration/secrets" },
              "vaults"
            ),
            " or environmental variables."
          ),
          (0, a.kt)("h2", { id: "concerns" }, "Concerns"),
          (0, a.kt)(
            "p",
            null,
            "When deciding on how configurations are used one need to look at the functional\nrequirements of the system, i.e. what is the target uptime and how long should\nit take for a configuration change to be deployed."
          )
        );
      }
      p.isMDXComponent = !0;
    },
  },
]);
