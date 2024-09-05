"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [637],
  {
    2845: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => p,
          contentTitle: () => l,
          default: () => u,
          frontMatter: () => i,
          metadata: () => k,
          toc: () => c,
        });
      var r = n(7462),
        o = n(3366),
        a = (n(7294), n(3905)),
        s = (n(828), ["components"]),
        i = {},
        l = "Basics of networks",
        k = {
          unversionedId: "network/basics",
          id: "network/basics",
          title: "Basics of networks",
          description: "Here is some basic terminology;",
          source: "@site/docs/network/basics.md",
          sourceDirName: "network",
          slug: "/network/basics",
          permalink: "/docs/network/basics",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "MIT", permalink: "/docs/laws/licenses/mit" },
          next: { title: "IP Address", permalink: "/docs/network/ip_address" },
        },
        p = {},
        c = [
          { value: "Types of networks", id: "types-of-networks", level: 2 },
          { value: "Other network types", id: "other-network-types", level: 2 },
        ],
        m = { toc: c };
      function u(e) {
        var t = e.components,
          n = (0, o.Z)(e, s);
        return (0, a.kt)(
          "wrapper",
          (0, r.Z)({}, m, n, { components: t, mdxType: "MDXLayout" }),
          (0, a.kt)("h1", { id: "basics-of-networks" }, "Basics of networks"),
          (0, a.kt)("p", null, "Here is some basic terminology;"),
          (0, a.kt)(
            "ul",
            null,
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)("strong", { parentName: "li" }, "Latency"),
              " - the time it takes for data to get one one point to another in a\nsystem."
            ),
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)("strong", { parentName: "li" }, "Throughput"),
              " - how many operations a machine in a system can perform. E.g\nhow many requests a server can respond to."
            ),
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)("strong", { parentName: "li" }, "High Availability"),
              " - meaning that a system has high availability. Is often\nshortened as HA."
            )
          ),
          (0, a.kt)("h2", { id: "types-of-networks" }, "Types of networks"),
          (0, a.kt)(
            "ul",
            null,
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)("strong", { parentName: "li" }, "LAN"),
              " A Local Area Network is a network connected to a gateway / router."
            ),
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)("strong", { parentName: "li" }, "WAN"),
              " A Wide Area Network consists of several LANs."
            ),
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)("strong", { parentName: "li" }, "Overlay"),
              " A virtual network running on top of another network."
            )
          ),
          (0, a.kt)("p", null, "Other:"),
          (0, a.kt)(
            "ul",
            null,
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)("strong", { parentName: "li" }, "CAN"),
              " A Controller Area Network is a network commonly used in cars for\ndifferent components to communicate with each other."
            )
          ),
          (0, a.kt)("h2", { id: "other-network-types" }, "Other network types"),
          (0, a.kt)(
            "ul",
            null,
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)("strong", { parentName: "li" }, "Peer-To-Peer / P2P"),
              " A network where in all machines have equal\nresponsibilities (in e.g. distributing a file). This is in contrast to the\nserver-client approach."
            )
          )
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
