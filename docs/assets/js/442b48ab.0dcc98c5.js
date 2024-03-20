"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [5510],
  {
    888: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => u,
          contentTitle: () => l,
          default: () => d,
          frontMatter: () => s,
          metadata: () => p,
          toc: () => c,
        });
      var r = n(7462),
        i = n(3366),
        o = (n(7294), n(3905)),
        a = (n(828), ["components"]),
        s = {},
        l = "VPN",
        p = {
          unversionedId: "network/vpn",
          id: "network/vpn",
          title: "VPN",
          description:
            "A Virtual Private Network (VPN) is a technology to join two targets",
          source: "@site/docs/network/vpn.md",
          sourceDirName: "network",
          slug: "/network/vpn",
          permalink: "/docs/network/vpn",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "URL", permalink: "/docs/network/url" },
          next: { title: "Assembly", permalink: "/docs/programming/assembly" },
        },
        u = {},
        c = [
          { value: "VPN Tunnel", id: "vpn-tunnel", level: 2 },
          {
            value: "Using a VPN for privacy",
            id: "using-a-vpn-for-privacy",
            level: 2,
          },
        ],
        v = { toc: c };
      function d(e) {
        var t = e.components,
          n = (0, i.Z)(e, a);
        return (0, o.kt)(
          "wrapper",
          (0, r.Z)({}, v, n, { components: t, mdxType: "MDXLayout" }),
          (0, o.kt)("h1", { id: "vpn" }, "VPN"),
          (0, o.kt)(
            "p",
            null,
            "A ",
            (0, o.kt)("strong", { parentName: "p" }, "Virtual Private Network"),
            " (",
            (0, o.kt)("strong", { parentName: "p" }, "VPN"),
            ") is a technology to join two targets\n(which itself can be networks) for private communication over another network\n(typically the internet)."
          ),
          (0, o.kt)("h2", { id: "vpn-tunnel" }, "VPN Tunnel"),
          (0, o.kt)(
            "p",
            null,
            "When using a VPN an IP tunnel (",
            (0, o.kt)("a", { parentName: "p", href: "./ipsec" }, "IPSec"),
            ") is established between the\nclient and the VPN server. If someone tries to penetrate the tunnel it will\nrecreate on a new route."
          ),
          (0, o.kt)(
            "h2",
            { id: "using-a-vpn-for-privacy" },
            "Using a VPN for privacy"
          ),
          (0, o.kt)(
            "p",
            null,
            "There are many providers offering VPN as a service. Here are some things to keep\nin mind:"
          ),
          (0, o.kt)(
            "ul",
            null,
            (0, o.kt)(
              "li",
              { parentName: "ul" },
              "The provider can log your activity. Since a great portion of the traffic going\nthrough a VPN provider would be sensitive (activism, journalism or\ncriminality) the provider has a incentive to log activity."
            ),
            (0, o.kt)(
              "li",
              { parentName: "ul" },
              "DNS requests can leak to default DNS server. Some VPNs offer a DNS server of\ntheir own."
            )
          ),
          (0, o.kt)(
            "p",
            null,
            "The IPs of established providers are often well-known, meaning e.g. an ISP can\ndeduce you are using a VPN which in turn might draw attention."
          ),
          (0, o.kt)(
            "p",
            null,
            "Hence it might be more useful to set up your own VPN service on a virtual\nprivate server."
          )
        );
      }
      d.isMDXComponent = !0;
    },
  },
]);
