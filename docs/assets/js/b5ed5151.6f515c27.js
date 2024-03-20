"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [4565],
  {
    6196: (t, e, n) => {
      n.r(e),
        n.d(e, {
          assets: () => c,
          contentTitle: () => i,
          default: () => u,
          frontMatter: () => d,
          metadata: () => p,
          toc: () => k,
        });
      var r = n(7462),
        o = n(3366),
        s = (n(7294), n(3905)),
        a = (n(828), ["components"]),
        d = {},
        i = "NAT",
        p = {
          unversionedId: "network/nat",
          id: "network/nat",
          title: "NAT",
          description:
            "Network Address Translation (NAT) is used to translate one set of IP",
          source: "@site/docs/network/nat.md",
          sourceDirName: "network",
          slug: "/network/nat",
          permalink: "/docs/network/nat",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "MAC address", permalink: "/docs/network/mac" },
          next: { title: "ARP", permalink: "/docs/network/protocols/arp" },
        },
        c = {},
        k = [],
        l = { toc: k };
      function u(t) {
        var e = t.components,
          n = (0, o.Z)(t, a);
        return (0, s.kt)(
          "wrapper",
          (0, r.Z)({}, l, n, { components: e, mdxType: "MDXLayout" }),
          (0, s.kt)("h1", { id: "nat" }, "NAT"),
          (0, s.kt)(
            "p",
            null,
            (0, s.kt)(
              "strong",
              { parentName: "p" },
              "Network Address Translation"
            ),
            " (",
            (0, s.kt)("strong", { parentName: "p" }, "NAT"),
            ") is used to translate one set of IP\naddresses to another set, typically between public and private."
          )
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
