"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [3214],
  {
    288: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => u,
          contentTitle: () => d,
          default: () => p,
          frontMatter: () => c,
          metadata: () => a,
          toc: () => f,
        });
      var s = t(7462),
        i = t(3366),
        r = (t(7294), t(3905)),
        o = (t(828), ["components"]),
        c = {},
        d = "Defense in Depth",
        a = {
          unversionedId: "security/defense/defense_in_depth",
          id: "security/defense/defense_in_depth",
          title: "Defense in Depth",
          description:
            "If running a microservice system, instead of relying only on on global",
          source: "@site/docs/security/defense/defense_in_depth.md",
          sourceDirName: "security/defense",
          slug: "/security/defense/defense_in_depth",
          permalink: "/docs/security/defense/defense_in_depth",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Access Controls",
            permalink: "/docs/security/defense/access-controls",
          },
          next: {
            title: "Firewall",
            permalink: "/docs/security/defense/firewall",
          },
        },
        u = {},
        f = [],
        l = { toc: f };
      function p(e) {
        var n = e.components,
          t = (0, i.Z)(e, o);
        return (0, r.kt)(
          "wrapper",
          (0, s.Z)({}, l, t, { components: n, mdxType: "MDXLayout" }),
          (0, r.kt)("h1", { id: "defense-in-depth" }, "Defense in Depth"),
          (0, r.kt)(
            "p",
            null,
            "If running a microservice system, instead of relying only on on global\nauthentication happening in the API gateway, each service should need to\nauthenticate when communicating with any other service (",
            (0, r.kt)(
              "a",
              { parentName: "p", href: "/docs/security/defense/ztn" },
              "zero trust"
            ),
            ")"
          )
        );
      }
      p.isMDXComponent = !0;
    },
  },
]);
