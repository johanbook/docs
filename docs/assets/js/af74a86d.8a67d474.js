"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [4523],
  {
    2897: (o, e, t) => {
      t.r(e),
        t.d(e, {
          assets: () => c,
          contentTitle: () => s,
          default: () => d,
          frontMatter: () => p,
          metadata: () => i,
          toc: () => k,
        });
      var r = t(7462),
        n = t(3366),
        a = (t(7294), t(3905)),
        l = (t(828), ["components"]),
        p = {},
        s = "VoIP",
        i = {
          unversionedId: "network/protocols/voip",
          id: "network/protocols/voip",
          title: "VoIP",
          description:
            "Voice over IP (VoIP) are multiple protocols for telephony over the",
          source: "@site/docs/network/protocols/voip.md",
          sourceDirName: "network/protocols",
          slug: "/network/protocols/voip",
          permalink: "/docs/network/protocols/voip",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "UPnP",
            permalink: "/docs/network/protocols/upnp",
          },
          next: {
            title: "WebSocket",
            permalink: "/docs/network/protocols/websocket/",
          },
        },
        c = {},
        k = [],
        u = { toc: k };
      function d(o) {
        var e = o.components,
          t = (0, n.Z)(o, l);
        return (0, a.kt)(
          "wrapper",
          (0, r.Z)({}, u, t, { components: e, mdxType: "MDXLayout" }),
          (0, a.kt)("h1", { id: "voip" }, "VoIP"),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)("strong", { parentName: "p" }, "Voice over IP"),
            " (",
            (0, a.kt)("strong", { parentName: "p" }, "VoIP"),
            ") are multiple protocols for telephony over the\n",
            (0, a.kt)(
              "a",
              { parentName: "p", href: "/docs/network/protocols/ip" },
              "IP protocol"
            ),
            "."
          ),
          (0, a.kt)("p", null, "Functions covered by VoIP are:"),
          (0, a.kt)(
            "ul",
            null,
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              "Network and transport. Reliable transports over unreliable network protocols."
            ),
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              'Session management. Handle the session, aka "the call".'
            ),
            (0, a.kt)("li", { parentName: "ul" }, "Signaling"),
            (0, a.kt)("li", { parentName: "ul" }, "Media descriptions"),
            (0, a.kt)("li", { parentName: "ul" }, "Media"),
            (0, a.kt)("li", { parentName: "ul" }, "Quality"),
            (0, a.kt)("li", { parentName: "ul" }, "Security")
          )
        );
      }
      d.isMDXComponent = !0;
    },
  },
]);
