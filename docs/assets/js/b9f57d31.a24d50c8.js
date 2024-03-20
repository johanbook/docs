"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [1341],
  {
    390: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => l,
          contentTitle: () => i,
          default: () => u,
          frontMatter: () => p,
          metadata: () => c,
          toc: () => d,
        });
      var o = r(7462),
        n = r(3366),
        a = (r(7294), r(3905)),
        s = (r(828), ["components"]),
        p = {},
        i = "Proxy",
        c = {
          unversionedId: "network/proxy",
          id: "network/proxy",
          title: "Proxy",
          description:
            "A proxy is a component that forwards traffic to another unit in the network.",
          source: "@site/docs/network/proxy.md",
          sourceDirName: "network",
          slug: "/network/proxy",
          permalink: "/docs/network/proxy",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "WebSocket",
            permalink: "/docs/network/protocols/websocket/",
          },
          next: { title: "Telnet", permalink: "/docs/network/telnet" },
        },
        l = {},
        d = [
          { value: "Forward proxy", id: "forward-proxy", level: 2 },
          { value: "Reverse proxy", id: "reverse-proxy", level: 2 },
        ],
        k = { toc: d };
      function u(e) {
        var t = e.components,
          r = (0, n.Z)(e, s);
        return (0, a.kt)(
          "wrapper",
          (0, o.Z)({}, k, r, { components: t, mdxType: "MDXLayout" }),
          (0, a.kt)("h1", { id: "proxy" }, "Proxy"),
          (0, a.kt)(
            "p",
            null,
            "A ",
            (0, a.kt)("strong", { parentName: "p" }, "proxy"),
            " is a component that forwards traffic to another unit in the network."
          ),
          (0, a.kt)("h2", { id: "forward-proxy" }, "Forward proxy"),
          (0, a.kt)(
            "p",
            null,
            "A ",
            (0, a.kt)("strong", { parentName: "p" }, "forward proxy"),
            " acts on behalf of a client, concealing the client to servers\nthat the client interact with. These proxies can be used for e.g.\n",
            (0, a.kt)("a", { parentName: "p", href: "./vpn" }, "VPN"),
            "-like setups."
          ),
          (0, a.kt)("h2", { id: "reverse-proxy" }, "Reverse proxy"),
          (0, a.kt)(
            "p",
            null,
            "A ",
            (0, a.kt)("strong", { parentName: "p" }, "reverse proxy"),
            " acts on behalf of the server, concealing the server to the\nclients that interact with it. Reverse proxies are typically used for\nload-balancing or routing."
          )
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
