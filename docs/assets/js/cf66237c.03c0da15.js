"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [9851],
  {
    9597: (e, s, t) => {
      t.r(s),
        t.d(s, {
          assets: () => d,
          contentTitle: () => i,
          default: () => m,
          frontMatter: () => a,
          metadata: () => l,
          toc: () => u,
        });
      var c = t(7462),
        n = t(3366),
        r = (t(7294), t(3905)),
        o = (t(828), ["components"]),
        a = {},
        i = "Access Controls",
        l = {
          unversionedId: "security/defense/access-controls",
          id: "security/defense/access-controls",
          title: "Access Controls",
          description:
            "Access controls are mechanisms to control which resources an agent can",
          source: "@site/docs/security/defense/access-controls.md",
          sourceDirName: "security/defense",
          slug: "/security/defense/access-controls",
          permalink: "/docs/security/defense/access-controls",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Digital signature",
            permalink: "/docs/security/cryptography/signature",
          },
          next: {
            title: "Defense in Depth",
            permalink: "/docs/security/defense/defense_in_depth",
          },
        },
        d = {},
        u = [{ value: "Best practices", id: "best-practices", level: 2 }],
        p = { toc: u };
      function m(e) {
        var s = e.components,
          t = (0, n.Z)(e, o);
        return (0, r.kt)(
          "wrapper",
          (0, c.Z)({}, p, t, { components: s, mdxType: "MDXLayout" }),
          (0, r.kt)("h1", { id: "access-controls" }, "Access Controls"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("strong", { parentName: "p" }, "Access controls"),
            " are mechanisms to control which resources an agent can\naccess."
          ),
          (0, r.kt)("h2", { id: "best-practices" }, "Best practices"),
          (0, r.kt)(
            "p",
            null,
            "Create user accounts separate from admin account. Only elevate privileges when\nneeded."
          )
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
