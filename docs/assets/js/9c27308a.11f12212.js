"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [4333],
  {
    6989: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => h,
          contentTitle: () => c,
          default: () => u,
          frontMatter: () => a,
          metadata: () => d,
          toc: () => l,
        });
      var o = n(7462),
        r = n(3366),
        i = (n(7294), n(3905)),
        s = (n(828), ["components"]),
        a = {},
        c = "Tor",
        d = {
          unversionedId: "network/tor",
          id: "network/tor",
          title: "Tor",
          description:
            "Tor, short for The Onion Router, is an approach for anonymous",
          source: "@site/docs/network/tor.md",
          sourceDirName: "network",
          slug: "/network/tor",
          permalink: "/docs/network/tor",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Network topologies",
            permalink: "/docs/network/topologies",
          },
          next: { title: "URL", permalink: "/docs/network/url" },
        },
        h = {},
        l = [
          { value: "Hidden services", id: "hidden-services", level: 2 },
          { value: "Using Tor", id: "using-tor", level: 2 },
        ],
        p = { toc: l };
      function u(e) {
        var t = e.components,
          n = (0, r.Z)(e, s);
        return (0, i.kt)(
          "wrapper",
          (0, o.Z)({}, p, n, { components: t, mdxType: "MDXLayout" }),
          (0, i.kt)("h1", { id: "tor" }, "Tor"),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)("strong", { parentName: "p" }, "Tor"),
            ", short for ",
            (0, i.kt)("strong", { parentName: "p" }, "The Onion Router"),
            ", is an approach for anonymous\ncommunication. If A wishes to talk to B, then it will let the connection go\nthrough C. C is itself a series of nodes (commonly called a Tor network). If the\ncommunication is passed through three nodes in C, then each package A sends\nthrough C is encrypted three times over, such that each node only knows its\nencrypted content and the path to the next node. Om the way back the exact\nopposite happens. This means that if a Tor node is captured (assuming it is not\nan input or exit node) the capturer cannot tell who A or B are nor what they\ncommunicate about. If an outsider is sniffing on both the input and exit nodes\nbetween A and B, then one can deduce what traffic is between them by considering\nthe times of the packages."
          ),
          (0, i.kt)(
            "p",
            null,
            "Each package (called cells) sent inside the Tor network are of the same size and\nwill look equivalent if inspected externally."
          ),
          (0, i.kt)("h2", { id: "hidden-services" }, "Hidden services"),
          (0, i.kt)(
            "p",
            null,
            "There can be hidden services inside the Tor network. These are often called\nonion sites and use the ",
            (0, i.kt)("inlineCode", { parentName: "p" }, ".onion"),
            " domain. In order to connect to such a site, one\nneeds to know the onion address - something that is typically not public."
          ),
          (0, i.kt)("h2", { id: "using-tor" }, "Using Tor"),
          (0, i.kt)(
            "p",
            null,
            "If using Tor, one's ISP can see that one is using Tor which may raise eyebrows.\nHowever, this can be mitigated by using a ",
            (0, i.kt)("a", { parentName: "p", href: "vpn" }, "VPN"),
            " to connect to Tor."
          )
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
