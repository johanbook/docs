"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [4353],
  {
    877: (o, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => l,
          contentTitle: () => c,
          default: () => k,
          frontMatter: () => i,
          metadata: () => p,
          toc: () => u,
        });
      var e = r(7462),
        n = r(3366),
        s = (r(7294), r(3905)),
        a = (r(828), ["components"]),
        i = {},
        c = "BGP",
        p = {
          unversionedId: "network/protocols/bgp",
          id: "network/protocols/bgp",
          title: "BGP",
          description:
            "Border Gateway Protocol (BGP) is a protocol for finding a route from a",
          source: "@site/docs/network/protocols/bgp.md",
          sourceDirName: "network/protocols",
          slug: "/network/protocols/bgp",
          permalink: "/docs/network/protocols/bgp",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "ARP", permalink: "/docs/network/protocols/arp" },
          next: {
            title: "Bluetooth",
            permalink: "/docs/network/protocols/bluetooth",
          },
        },
        l = {},
        u = [],
        d = { toc: u };
      function k(o) {
        var t = o.components,
          r = (0, n.Z)(o, a);
        return (0, s.kt)(
          "wrapper",
          (0, e.Z)({}, d, r, { components: t, mdxType: "MDXLayout" }),
          (0, s.kt)("h1", { id: "bgp" }, "BGP"),
          (0, s.kt)(
            "p",
            null,
            (0, s.kt)("strong", { parentName: "p" }, "Border Gateway Protocol"),
            " (",
            (0, s.kt)("strong", { parentName: "p" }, "BGP"),
            ") is a protocol for finding a route from a\ndestination A to destination B through various autonomous systems (AS)."
          ),
          (0, s.kt)(
            "p",
            null,
            "One can do BGP hijacking which means announcing bad or malicious routes which\nthen will be shared throughout the network."
          )
        );
      }
      k.isMDXComponent = !0;
    },
  },
]);
