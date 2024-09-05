"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [6253],
  {
    1320: (t, e, n) => {
      n.r(e),
        n.d(e, {
          assets: () => c,
          contentTitle: () => d,
          default: () => k,
          frontMatter: () => i,
          metadata: () => l,
          toc: () => p,
        });
      var a = n(7462),
        o = n(3366),
        r = (n(7294), n(3905)),
        s = (n(828), ["components"]),
        i = {},
        d = "IP",
        l = {
          unversionedId: "network/protocols/ip",
          id: "network/protocols/ip",
          title: "IP",
          description:
            "The Internet Protocol (IP) is a protocol for transferring data over a",
          source: "@site/docs/network/protocols/ip.md",
          sourceDirName: "network/protocols",
          slug: "/network/protocols/ip",
          permalink: "/docs/network/protocols/ip",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "ICMP",
            permalink: "/docs/network/protocols/icmp",
          },
          next: { title: "NFS", permalink: "/docs/network/protocols/nfs" },
        },
        c = {},
        p = [
          { value: "Subnetting", id: "subnetting", level: 2 },
          { value: "Addressing methods", id: "addressing-methods", level: 2 },
        ],
        h = { toc: p };
      function k(t) {
        var e = t.components,
          n = (0, o.Z)(t, s);
        return (0, r.kt)(
          "wrapper",
          (0, a.Z)({}, h, n, { components: e, mdxType: "MDXLayout" }),
          (0, r.kt)("h1", { id: "ip" }, "IP"),
          (0, r.kt)(
            "p",
            null,
            "The ",
            (0, r.kt)("strong", { parentName: "p" }, "Internet Protocol"),
            " (",
            (0, r.kt)("strong", { parentName: "p" }, "IP"),
            ") is a protocol for transferring data over a\nnetwork. The data is chunked into small packages, each containing a header with\ntarget ",
            (0, r.kt)(
              "a",
              { parentName: "p", href: "../ip_address" },
              "IP address"
            ),
            ". Each package is forwarded through the\noptimal route for the network and arrives at its destination, but not\nnecessarily in the original order (which is added in ",
            (0, r.kt)("a", { parentName: "p", href: "tcp" }, "TCP"),
            ")."
          ),
          (0, r.kt)(
            "p",
            null,
            "The computers that are part of a network can see all data being transmitted over\nthe network. Hence, when wanting to transmitting themselves it is possible that\nthat the network already is in use. If this is the case, they wait a random time\nand checks if its free. The reason the time is random is in case several\ncomputers are waiting and to avoid that they all wake up and try to connect at\nthe same time."
          ),
          (0, r.kt)("h2", { id: "subnetting" }, "Subnetting"),
          (0, r.kt)(
            "p",
            null,
            "IP allows parts of a network to become a sub-network, where a switch (or router)\ndecides what communication goes between the parent and child network. This\nreduces network traffic, as not all traffic on the parent network is forwarded\nto the child and so on. It also alleviates the requirement of global node IDs,\nas a node only need to have a unique id inside its local network."
          ),
          (0, r.kt)("h2", { id: "addressing-methods" }, "Addressing methods"),
          (0, r.kt)("p", null, "There are multiple addressing methods in IP:"),
          (0, r.kt)(
            "ul",
            null,
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "Broadcast"),
              " sends data to all nodes in the network."
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "Anycast"),
              " is when data is transmitted to the nearest node."
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "Multicast"),
              " is when data is transmitted to multiple nodes."
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "Unicast"),
              " is when data is transmitted to one specific node."
            )
          )
        );
      }
      k.isMDXComponent = !0;
    },
  },
]);
