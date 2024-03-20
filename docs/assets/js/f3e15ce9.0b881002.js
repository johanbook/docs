"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [9170],
  {
    5751: (o, e, t) => {
      t.r(e),
        t.d(e, {
          assets: () => c,
          contentTitle: () => i,
          default: () => u,
          frontMatter: () => a,
          metadata: () => p,
          toc: () => d,
        });
      var r = t(7462),
        n = t(3366),
        l = (t(7294), t(3905)),
        s = (t(828), ["components"]),
        a = {},
        i = "Network topologies",
        p = {
          unversionedId: "network/topologies",
          id: "network/topologies",
          title: "Network topologies",
          description:
            "There are different topologies for how a network can be setup. Here are a few.",
          source: "@site/docs/network/topologies.md",
          sourceDirName: "network",
          slug: "/network/topologies",
          permalink: "/docs/network/topologies",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "Telnet", permalink: "/docs/network/telnet" },
          next: { title: "Tor", permalink: "/docs/network/tor" },
        },
        c = {},
        d = [
          { value: "Ring topology", id: "ring-topology", level: 2 },
          { value: "Bus topology", id: "bus-topology", level: 2 },
          { value: "Star topology", id: "star-topology", level: 2 },
        ],
        g = { toc: d };
      function u(o) {
        var e = o.components,
          t = (0, n.Z)(o, s);
        return (0, l.kt)(
          "wrapper",
          (0, r.Z)({}, g, t, { components: e, mdxType: "MDXLayout" }),
          (0, l.kt)("h1", { id: "network-topologies" }, "Network topologies"),
          (0, l.kt)(
            "p",
            null,
            "There are different topologies for how a network can be setup. Here are a few."
          ),
          (0, l.kt)("h2", { id: "ring-topology" }, "Ring topology"),
          (0, l.kt)(
            "p",
            null,
            "Every computer is connected to two other computers. This means that if one\ncomputer or cable goes down the whole thing goes down."
          ),
          (0, l.kt)("h2", { id: "bus-topology" }, "Bus topology"),
          (0, l.kt)(
            "p",
            null,
            "All computers are connected to a single cable (the backbone). Cannot handle a\nlarge amount of data."
          ),
          (0, l.kt)("h2", { id: "star-topology" }, "Star topology"),
          (0, l.kt)(
            "p",
            null,
            "All devices are connected to a central hub. It's common."
          )
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
