"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [2560],
  {
    1808: (e, t, a) => {
      a.r(t),
        a.d(t, {
          assets: () => u,
          contentTitle: () => o,
          default: () => c,
          frontMatter: () => r,
          metadata: () => d,
          toc: () => p,
        });
      var n = a(7462),
        i = a(3366),
        l = (a(7294), a(3905)),
        s = (a(828), ["components"]),
        r = {},
        o = "Firewall",
        d = {
          unversionedId: "security/defense/firewall",
          id: "security/defense/firewall",
          title: "Firewall",
          description:
            "A firewall is a networking middleware that decides what traffic should be",
          source: "@site/docs/security/defense/firewall.md",
          sourceDirName: "security/defense",
          slug: "/security/defense/firewall",
          permalink: "/docs/security/defense/firewall",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Defense in Depth",
            permalink: "/docs/security/defense/defense_in_depth",
          },
          next: { title: "IDS", permalink: "/docs/security/defense/ids" },
        },
        u = {},
        p = [{ value: "Setup ufw", id: "setup-ufw", level: 2 }],
        f = { toc: p };
      function c(e) {
        var t = e.components,
          a = (0, i.Z)(e, s);
        return (0, l.kt)(
          "wrapper",
          (0, n.Z)({}, f, a, { components: t, mdxType: "MDXLayout" }),
          (0, l.kt)("h1", { id: "firewall" }, "Firewall"),
          (0, l.kt)(
            "p",
            null,
            "A ",
            (0, l.kt)("strong", { parentName: "p" }, "firewall"),
            " is a networking middleware that decides what traffic should be\nallowed into and out of a network node. A firewall can check"
          ),
          (0, l.kt)(
            "ul",
            null,
            (0, l.kt)("li", { parentName: "ul" }, "Communication Protocol"),
            (0, l.kt)("li", { parentName: "ul" }, "Ports"),
            (0, l.kt)("li", { parentName: "ul" }, "IP Address")
          ),
          (0, l.kt)("p", null, "It can also use connection tracking."),
          (0, l.kt)(
            "p",
            null,
            "For Linux based systems there is (as of now) ",
            (0, l.kt)("inlineCode", { parentName: "p" }, "iptables"),
            " that is a complete\nfirewall. There is also ",
            (0, l.kt)("inlineCode", { parentName: "p" }, "ufw"),
            " for a simplified interface to ",
            (0, l.kt)("inlineCode", { parentName: "p" }, "iptables"),
            "."
          ),
          (0, l.kt)("h2", { id: "setup-ufw" }, "Setup ufw"),
          (0, l.kt)(
            "p",
            null,
            "Here is a standard ",
            (0, l.kt)("inlineCode", { parentName: "p" }, "ufw"),
            " setup"
          ),
          (0, l.kt)(
            "pre",
            null,
            (0, l.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "sudo ufw default deny incoming\nsudo ufw default allow outgoing\nsudo ufw allow ssh,http,https\n"
            )
          )
        );
      }
      c.isMDXComponent = !0;
    },
  },
]);
