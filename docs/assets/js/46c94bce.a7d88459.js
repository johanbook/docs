"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [1025],
  {
    9104: (o, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => l,
          contentTitle: () => c,
          default: () => k,
          frontMatter: () => p,
          metadata: () => i,
          toc: () => d,
        });
      var e = r(7462),
        a = r(3366),
        n = (r(7294), r(3905)),
        s = (r(828), ["components"]),
        p = {},
        c = "UDP",
        i = {
          unversionedId: "network/protocols/udp",
          id: "network/protocols/udp",
          title: "UDP",
          description:
            "User Datagram Protocol (UDP) is a protocol built on top of IP.",
          source: "@site/docs/network/protocols/udp.md",
          sourceDirName: "network/protocols",
          slug: "/network/protocols/udp",
          permalink: "/docs/network/protocols/udp",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Certificate",
            permalink: "/docs/network/protocols/tls/certificate",
          },
          next: { title: "UPnP", permalink: "/docs/network/protocols/upnp" },
        },
        l = {},
        d = [],
        u = { toc: d };
      function k(o) {
        var t = o.components,
          r = (0, a.Z)(o, s);
        return (0, n.kt)(
          "wrapper",
          (0, e.Z)({}, u, r, { components: t, mdxType: "MDXLayout" }),
          (0, n.kt)("h1", { id: "udp" }, "UDP"),
          (0, n.kt)(
            "p",
            null,
            (0, n.kt)("strong", { parentName: "p" }, "User Datagram Protocol"),
            " (",
            (0, n.kt)("strong", { parentName: "p" }, "UDP"),
            ") is a protocol built on top of ",
            (0, n.kt)("a", { parentName: "p", href: "./ip" }, "IP"),
            ".\nIt has no guarantees of order or delivery, which is in contrast to ",
            (0, n.kt)("a", { parentName: "p", href: "./tcp" }, "TCP"),
            ".\nIt is suitable for applications where performance is favored over accuracy."
          )
        );
      }
      k.isMDXComponent = !0;
    },
  },
]);
