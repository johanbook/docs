"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [7876],
  {
    1731: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => p,
          contentTitle: () => d,
          default: () => k,
          frontMatter: () => i,
          metadata: () => l,
          toc: () => c,
        });
      var s = n(7462),
        o = n(3366),
        a = (n(7294), n(3905)),
        r = (n(828), ["components"]),
        i = {},
        d = "DHCP",
        l = {
          unversionedId: "network/protocols/dhcp",
          id: "network/protocols/dhcp",
          title: "DHCP",
          description:
            "Dynamic Host Configuration Protocol (DHCP) is a client-server protocol",
          source: "@site/docs/network/protocols/dhcp.md",
          sourceDirName: "network/protocols",
          slug: "/network/protocols/dhcp",
          permalink: "/docs/network/protocols/dhcp",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Bluetooth",
            permalink: "/docs/network/protocols/bluetooth",
          },
          next: { title: "DNS", permalink: "/docs/network/protocols/dns" },
        },
        p = {},
        c = [{ value: "Handshake", id: "handshake", level: 2 }],
        h = { toc: c };
      function k(e) {
        var t = e.components,
          n = (0, o.Z)(e, r);
        return (0, a.kt)(
          "wrapper",
          (0, s.Z)({}, h, n, { components: t, mdxType: "MDXLayout" }),
          (0, a.kt)("h1", { id: "dhcp" }, "DHCP"),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)(
              "strong",
              { parentName: "p" },
              "Dynamic Host Configuration Protocol"
            ),
            " (",
            (0, a.kt)("strong", { parentName: "p" }, "DHCP"),
            ") is a client-server protocol\nfor dynamically assigning ",
            (0, a.kt)(
              "a",
              { parentName: "p", href: "../ip_address" },
              "IP addresses"
            ),
            ". The DHCP server will\nalso supply a DNS address, default gateway and network mask. IP addresses are\ngiven as time-limited leases."
          ),
          (0, a.kt)(
            "p",
            null,
            "For info on how DHCP typically is implemented in Linux, see\n",
            (0, a.kt)(
              "a",
              { parentName: "p", href: "/docs/unix/tools/dhcpcd" },
              "dhcpd"
            ),
            "."
          ),
          (0, a.kt)(
            "p",
            null,
            "For example, one can run a DHCP query using the network utility ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "nmap"),
            " as done\nbelow."
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "sudo nmap --script broadcast-dhcp-discover\nStarting Nmap 7.92 ( https://nmap.org ) at 2021-08-23 13:45 CEST\nPre-scan script results:\n| broadcast-dhcp-discover:\n|   Response 1 of 1:\n|     Interface: wlp0s20f3\n|     IP Offered: 192.168.1.103\n|     DHCP Message Type: DHCPOFFER\n|     Server Identifier: 192.168.1.1\n|     IP Address Lease Time: 1d00h00m00s\n|     Subnet Mask: 255.255.255.0\n|     Router: 192.168.1.1\n|_    Domain Name Server: 192.168.1.1\nWARNING: No targets were specified, so 0 hosts scanned.\nNmap done: 0 IP addresses (0 hosts up) scanned in 11.32 seconds\n"
            )
          ),
          (0, a.kt)("h2", { id: "handshake" }, "Handshake"),
          (0, a.kt)(
            "p",
            null,
            "When a client attempts to lease an IP there is a handshake with the following\nsteps:"
          ),
          (0, a.kt)(
            "ol",
            null,
            (0, a.kt)(
              "li",
              { parentName: "ol" },
              (0, a.kt)("strong", { parentName: "li" }, "DHCP Discover"),
              " The client requests an IP from any device on the network."
            ),
            (0, a.kt)(
              "li",
              { parentName: "ol" },
              (0, a.kt)("strong", { parentName: "li" }, "DHCP Offer"),
              " The host offers it an IP address."
            ),
            (0, a.kt)(
              "li",
              { parentName: "ol" },
              (0, a.kt)("strong", { parentName: "li" }, "DHCP Request"),
              " The client requests the offered IP address."
            ),
            (0, a.kt)(
              "li",
              { parentName: "ol" },
              (0, a.kt)("strong", { parentName: "li" }, "DHCP ACK"),
              " The host acknowledges that the IP address has been designated."
            )
          )
        );
      }
      k.isMDXComponent = !0;
    },
  },
]);
