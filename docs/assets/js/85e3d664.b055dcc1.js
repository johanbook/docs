"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [8652],
  {
    3192: (e, t, o) => {
      o.r(t),
        o.d(t, {
          assets: () => d,
          contentTitle: () => i,
          default: () => u,
          frontMatter: () => c,
          metadata: () => p,
          toc: () => l,
        });
      var r = o(7462),
        n = o(3366),
        s = (o(7294), o(3905)),
        a = (o(828), ["components"]),
        c = {},
        i = "IPSec",
        p = {
          unversionedId: "network/ipsec",
          id: "network/ipsec",
          title: "IPSec",
          description:
            "Internet Protocol Security (IPSec) is a layer on top of",
          source: "@site/docs/network/ipsec.md",
          sourceDirName: "network",
          slug: "/network/ipsec",
          permalink: "/docs/network/ipsec",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "IP Address",
            permalink: "/docs/network/ip_address",
          },
          next: {
            title: "Load balancers",
            permalink: "/docs/network/load_balancers",
          },
        },
        d = {},
        l = [],
        k = { toc: l };
      function u(e) {
        var t = e.components,
          o = (0, n.Z)(e, a);
        return (0, s.kt)(
          "wrapper",
          (0, r.Z)({}, k, o, { components: t, mdxType: "MDXLayout" }),
          (0, s.kt)("h1", { id: "ipsec" }, "IPSec"),
          (0, s.kt)(
            "p",
            null,
            (0, s.kt)(
              "strong",
              { parentName: "p" },
              "Internet Protocol Security"
            ),
            " (",
            (0, s.kt)("strong", { parentName: "p" }, "IPSec"),
            ") is a layer on top of\n",
            (0, s.kt)("a", { parentName: "p", href: "./protocols/ip" }, "IP"),
            " that adds authentication."
          )
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
