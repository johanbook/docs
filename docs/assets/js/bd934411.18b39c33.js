"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [9723],
  {
    2621: (t, o, e) => {
      e.r(o),
        e.d(o, {
          assets: () => l,
          contentTitle: () => i,
          default: () => u,
          frontMatter: () => c,
          metadata: () => p,
          toc: () => d,
        });
      var r = e(7462),
        s = e(3366),
        n = (e(7294), e(3905)),
        a = (e(828), ["components"]),
        c = {},
        i = "ICMP",
        p = {
          unversionedId: "network/protocols/icmp",
          id: "network/protocols/icmp",
          title: "ICMP",
          description:
            "Internet Control Message Protocol (ICMP) is an alternative to UDP/TCP",
          source: "@site/docs/network/protocols/icmp.md",
          sourceDirName: "network/protocols",
          slug: "/network/protocols/icmp",
          permalink: "/docs/network/protocols/icmp",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Status codes",
            permalink: "/docs/network/protocols/http/status_codes",
          },
          next: { title: "IP", permalink: "/docs/network/protocols/ip" },
        },
        l = {},
        d = [],
        k = { toc: d };
      function u(t) {
        var o = t.components,
          e = (0, s.Z)(t, a);
        return (0, n.kt)(
          "wrapper",
          (0, r.Z)({}, k, e, { components: o, mdxType: "MDXLayout" }),
          (0, n.kt)("h1", { id: "icmp" }, "ICMP"),
          (0, n.kt)(
            "p",
            null,
            (0, n.kt)(
              "strong",
              { parentName: "p" },
              "Internet Control Message Protocol"
            ),
            " (",
            (0, n.kt)("strong", { parentName: "p" }, "ICMP"),
            ") is an alternative to UDP/TCP\nthat is often used for relying error message or running diagnostics. According\nto the RFC standard all devices must response to ICMP packets, however, it is\noften disabled for the sake of security. Many firewalls block ICMP."
          )
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
