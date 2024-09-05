"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [5887],
  {
    1939: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => c,
          contentTitle: () => l,
          default: () => k,
          frontMatter: () => a,
          metadata: () => d,
          toc: () => u,
        });
      var i = t(7462),
        o = t(3366),
        s = (t(7294), t(3905)),
        r = (t(828), ["components"]),
        a = {},
        l = "Networking",
        d = {
          unversionedId: "unix/networking",
          id: "unix/networking",
          title: "Networking",
          description:
            "This document will outline some relevant info for networking in Linux.",
          source: "@site/docs/unix/networking.md",
          sourceDirName: "unix",
          slug: "/unix/networking",
          permalink: "/docs/unix/networking",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "Logs", permalink: "/docs/unix/logs" },
          next: {
            title: "Permissions and ownerships",
            permalink: "/docs/unix/permissions",
          },
        },
        c = {},
        u = [
          { value: "Hosts", id: "hosts", level: 2 },
          { value: "DNS", id: "dns", level: 2 },
          { value: "Interfaces", id: "interfaces", level: 2 },
        ],
        p = { toc: u };
      function k(e) {
        var n = e.components,
          t = (0, o.Z)(e, r);
        return (0, s.kt)(
          "wrapper",
          (0, i.Z)({}, p, t, { components: n, mdxType: "MDXLayout" }),
          (0, s.kt)("h1", { id: "networking" }, "Networking"),
          (0, s.kt)(
            "p",
            null,
            "This document will outline some relevant info for networking in Linux."
          ),
          (0, s.kt)("h2", { id: "hosts" }, "Hosts"),
          (0, s.kt)(
            "p",
            null,
            "The file ",
            (0, s.kt)("inlineCode", { parentName: "p" }, "/etc/hosts"),
            " contains name resolutions used instead of query the local\nname server. This file can look like"
          ),
          (0, s.kt)(
            "pre",
            null,
            (0, s.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "127.0.0.1   localhost\n::1     localhost\n"
            )
          ),
          (0, s.kt)("h2", { id: "dns" }, "DNS"),
          (0, s.kt)(
            "p",
            null,
            "The DNS name server is set in ",
            (0, s.kt)("inlineCode", { parentName: "p" }, "/etc/resolv.conf"),
            ". This is typically the default\ngateway. The file might look like"
          ),
          (0, s.kt)(
            "pre",
            null,
            (0, s.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "search dance.com everybody.dance.com\noptions ndots:1\nnameserver 192.168.0.1\n"
            )
          ),
          (0, s.kt)(
            "p",
            null,
            "The ",
            (0, s.kt)("inlineCode", { parentName: "p" }, "search"),
            " directive will trigger lookups for a query ",
            (0, s.kt)("inlineCode", { parentName: "p" }, "<query>.dance.com"),
            " and\n",
            (0, s.kt)(
              "inlineCode",
              { parentName: "p" },
              "<query>.everybody.dance.com"
            ),
            ". The ",
            (0, s.kt)("inlineCode", { parentName: "p" }, "ndots"),
            " directive indicates that a query\nshould be tested without search options if having more dots than 1 otherwise\nsearch directive is applied first."
          ),
          (0, s.kt)("h2", { id: "interfaces" }, "Interfaces"),
          (0, s.kt)(
            "p",
            null,
            "The system will have different network interface, for example a loopback\nconfigured on 127.0.0.1. The various interface can be seen by running\n",
            (0, s.kt)("inlineCode", { parentName: "p" }, "ip link show"),
            "."
          )
        );
      }
      k.isMDXComponent = !0;
    },
  },
]);
