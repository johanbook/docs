"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [9203],
  {
    4137: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => c,
          contentTitle: () => l,
          default: () => k,
          frontMatter: () => i,
          metadata: () => d,
          toc: () => p,
        });
      var r = n(7462),
        s = n(3366),
        a = (n(7294), n(3905)),
        o = (n(828), ["components"]),
        i = {},
        l = "Zero trust networking",
        d = {
          unversionedId: "security/defense/ztn",
          id: "security/defense/ztn",
          title: "Zero trust networking",
          description:
            "Zero trust networking (ZTN) is an approach where agents on a network are",
          source: "@site/docs/security/defense/ztn.md",
          sourceDirName: "security/defense",
          slug: "/security/defense/ztn",
          permalink: "/docs/security/defense/ztn",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "User Training",
            permalink: "/docs/security/defense/training",
          },
          next: { title: "JWT", permalink: "/docs/security/jwt" },
        },
        c = {},
        p = [
          { value: "Least-privilege", id: "least-privilege", level: 2 },
          { value: "ZTNA", id: "ztna", level: 2 },
        ],
        u = { toc: p };
      function k(e) {
        var t = e.components,
          n = (0, s.Z)(e, o);
        return (0, a.kt)(
          "wrapper",
          (0, r.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
          (0, a.kt)(
            "h1",
            { id: "zero-trust-networking" },
            "Zero trust networking"
          ),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)("strong", { parentName: "p" }, "Zero trust networking"),
            " (",
            (0, a.kt)("strong", { parentName: "p" }, "ZTN"),
            ") is an approach where agents on a network are\nnot trusted by default. It builds on the assumption that one's attackers already\nare on one's core network."
          ),
          (0, a.kt)(
            "p",
            null,
            "ZTN is in contrast to the old cast-and-moat model that typically relies on IP\naddress based control. However this model has several flaws:"
          ),
          (0, a.kt)(
            "ul",
            null,
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              "Does not accommodate for the scenario when the attacker already is on an\ninternal network."
            ),
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              "Difficult administer when data is spread across networks, vendors and clouds."
            )
          ),
          (0, a.kt)(
            "p",
            null,
            "In ZTN, control should be governed by identity."
          ),
          (0, a.kt)("h2", { id: "least-privilege" }, "Least-privilege"),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)("strong", { parentName: "p" }, "Least-privilege"),
            " is the concept that each agent should have the minimal\nprivileges possible to perform their task."
          ),
          (0, a.kt)("h2", { id: "ztna" }, "ZTNA"),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)(
              "strong",
              { parentName: "p" },
              "Zero Trust Network Access"
            ),
            " (",
            (0, a.kt)("strong", { parentName: "p" }, "ZTNA"),
            ") is network model building on ZTN. It\ncan offer similar functionality as ",
            (0, a.kt)(
              "a",
              { parentName: "p", href: "/docs/network/vpn" },
              "VPNs"
            ),
            "."
          )
        );
      }
      k.isMDXComponent = !0;
    },
  },
]);
