"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [9242],
  {
    9849: (e, t, o) => {
      o.r(t),
        o.d(t, {
          assets: () => c,
          contentTitle: () => a,
          default: () => u,
          frontMatter: () => p,
          metadata: () => i,
          toc: () => k,
        });
      var n = o(7462),
        r = o(3366),
        s = (o(7294), o(3905)),
        l = (o(828), ["components"]),
        p = {},
        a = "Telnet",
        i = {
          unversionedId: "network/telnet",
          id: "network/telnet",
          title: "Telnet",
          description: "Telnet is a shell text protocol running over TCP,",
          source: "@site/docs/network/telnet.md",
          sourceDirName: "network",
          slug: "/network/telnet",
          permalink: "/docs/network/telnet",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "Proxy", permalink: "/docs/network/proxy" },
          next: {
            title: "Network topologies",
            permalink: "/docs/network/topologies",
          },
        },
        c = {},
        k = [],
        d = { toc: k };
      function u(e) {
        var t = e.components,
          o = (0, r.Z)(e, l);
        return (0, s.kt)(
          "wrapper",
          (0, n.Z)({}, d, o, { components: t, mdxType: "MDXLayout" }),
          (0, s.kt)("h1", { id: "telnet" }, "Telnet"),
          (0, s.kt)(
            "p",
            null,
            (0, s.kt)("strong", { parentName: "p" }, "Telnet"),
            " is a shell text protocol running over ",
            (0, s.kt)("a", { parentName: "p", href: "./protocols/tcp" }, "TCP"),
            ",\ntypically on port 23. As it is unencrypted, ",
            (0, s.kt)("a", { parentName: "p", href: "./protocols/ssh" }, "SSH"),
            " is preferred\nover telnet."
          )
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
