"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [9212],
  {
    1471: (e, t, o) => {
      o.r(t),
        o.d(t, {
          assets: () => l,
          contentTitle: () => p,
          default: () => h,
          frontMatter: () => s,
          metadata: () => k,
          toc: () => i,
        });
      var n = o(7462),
        c = o(3366),
        r = (o(7294), o(3905)),
        a = (o(828), ["components"]),
        s = {},
        p = "WebSocket",
        k = {
          unversionedId: "network/protocols/websocket/README",
          id: "network/protocols/websocket/README",
          title: "WebSocket",
          description: "WebSocket is a TCP protocol, which in contrast to",
          source: "@site/docs/network/protocols/websocket/README.md",
          sourceDirName: "network/protocols/websocket",
          slug: "/network/protocols/websocket/",
          permalink: "/docs/network/protocols/websocket/",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "VoIP",
            permalink: "/docs/network/protocols/voip",
          },
          next: { title: "Proxy", permalink: "/docs/network/proxy" },
        },
        l = {},
        i = [{ value: "HTTP Handshake", id: "http-handshake", level: 2 }],
        d = { toc: i };
      function h(e) {
        var t = e.components,
          o = (0, c.Z)(e, a);
        return (0, r.kt)(
          "wrapper",
          (0, n.Z)({}, d, o, { components: t, mdxType: "MDXLayout" }),
          (0, r.kt)("h1", { id: "websocket" }, "WebSocket"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("strong", { parentName: "p" }, "WebSocket"),
            " is a ",
            (0, r.kt)(
              "a",
              { parentName: "p", href: "/docs/network/protocols/tcp" },
              "TCP"
            ),
            " protocol, which in contrast to\n",
            (0, r.kt)(
              "a",
              { parentName: "p", href: "/docs/network/protocols/http/" },
              "HTTP"
            ),
            " is bidirectional."
          ),
          (0, r.kt)("h2", { id: "http-handshake" }, "HTTP Handshake"),
          (0, r.kt)(
            "p",
            null,
            "To upgrade to WebSocket from a HTTP connection, there is a HTTP connection as\nfollows:"
          ),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-txt" },
              "GET /chat HTTP/1.1\nHost: server.example.com\nUpgrade: websocket\nConnection: Upgrade\nSec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==\nSec-WebSocket-Protocol: chat, superchat\nSec-WebSocket-Version: 13\nOrigin: http://example.com\n"
            )
          ),
          (0, r.kt)("p", null, "and"),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-txt" },
              "HTTP/1.1 101 Switching Protocols\nUpgrade: websocket\nConnection: Upgrade\nSec-WebSocket-Accept: HSmrc0sMlYUkAGmm5OPpG2HaGWk=\nSec-WebSocket-Protocol: chat\n"
            )
          )
        );
      }
      h.isMDXComponent = !0;
    },
  },
]);
