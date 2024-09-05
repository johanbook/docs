"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [9490],
  {
    4624: (e, a, t) => {
      t.r(a),
        t.d(a, {
          assets: () => l,
          contentTitle: () => c,
          default: () => k,
          frontMatter: () => d,
          metadata: () => i,
          toc: () => p,
        });
      var r = t(7462),
        s = t(3366),
        n = (t(7294), t(3905)),
        o = (t(828), ["components"]),
        d = {},
        c = "MAC address",
        i = {
          unversionedId: "network/mac",
          id: "network/mac",
          title: "MAC address",
          description:
            "Media Access Control (MAC) addresses are physical hardware addresses",
          source: "@site/docs/network/mac.md",
          sourceDirName: "network",
          slug: "/network/mac",
          permalink: "/docs/network/mac",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Load balancers",
            permalink: "/docs/network/load_balancers",
          },
          next: { title: "NAT", permalink: "/docs/network/nat" },
        },
        l = {},
        p = [],
        m = { toc: p };
      function k(e) {
        var a = e.components,
          t = (0, s.Z)(e, o);
        return (0, n.kt)(
          "wrapper",
          (0, r.Z)({}, m, t, { components: a, mdxType: "MDXLayout" }),
          (0, n.kt)("h1", { id: "mac-address" }, "MAC address"),
          (0, n.kt)(
            "p",
            null,
            (0, n.kt)("strong", { parentName: "p" }, "Media Access Control"),
            " (",
            (0, n.kt)("strong", { parentName: "p" }, "MAC"),
            ") addresses are physical hardware addresses\nthat are unique to each machine. They can be spoofed."
          ),
          (0, n.kt)(
            "p",
            null,
            "MACs for virtual machines are generated when the machine is created."
          )
        );
      }
      k.isMDXComponent = !0;
    },
  },
]);
