"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [8068],
  {
    2839: (e, o, t) => {
      t.r(o),
        t.d(o, {
          assets: () => c,
          contentTitle: () => i,
          default: () => u,
          frontMatter: () => p,
          metadata: () => l,
          toc: () => d,
        });
      var r = t(7462),
        n = t(3366),
        a = (t(7294), t(3905)),
        s = (t(828), ["components"]),
        p = {},
        i = "ARP",
        l = {
          unversionedId: "network/protocols/arp",
          id: "network/protocols/arp",
          title: "ARP",
          description:
            "Address Resolution Protocol (ARP) is a protocol for finding a",
          source: "@site/docs/network/protocols/arp.md",
          sourceDirName: "network/protocols",
          slug: "/network/protocols/arp",
          permalink: "/docs/network/protocols/arp",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "NAT", permalink: "/docs/network/nat" },
          next: { title: "BGP", permalink: "/docs/network/protocols/bgp" },
        },
        c = {},
        d = [{ value: "Neighbor table", id: "neighbor-table", level: 2 }],
        k = { toc: d };
      function u(e) {
        var o = e.components,
          t = (0, n.Z)(e, s);
        return (0, a.kt)(
          "wrapper",
          (0, r.Z)({}, k, t, { components: o, mdxType: "MDXLayout" }),
          (0, a.kt)("h1", { id: "arp" }, "ARP"),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)(
              "strong",
              { parentName: "p" },
              "Address Resolution Protocol"
            ),
            " (",
            (0, a.kt)("strong", { parentName: "p" }, "ARP"),
            ") is a protocol for finding a\n",
            (0, a.kt)("a", { parentName: "p", href: "../mac" }, "MAC address"),
            " given an ",
            (0, a.kt)(
              "a",
              { parentName: "p", href: "../ip_address" },
              "IP address"
            ),
            "."
          ),
          (0, a.kt)("h2", { id: "neighbor-table" }, "Neighbor table"),
          (0, a.kt)("p", null, "One can view the neighbor table by running"),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "ip neighbor show\n"
            )
          )
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
