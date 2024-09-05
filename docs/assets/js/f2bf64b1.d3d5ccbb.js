"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [3485],
  {
    5292: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => d,
          contentTitle: () => l,
          default: () => m,
          frontMatter: () => r,
          metadata: () => p,
          toc: () => c,
        });
      var a = t(7462),
        i = t(3366),
        s = (t(7294), t(3905)),
        o = (t(828), ["components"]),
        r = {},
        l = "Scanning",
        p = {
          unversionedId: "security/pentesting/scanning",
          id: "security/pentesting/scanning",
          title: "Scanning",
          description:
            "This document will discuss different scanning techniques and demonstrate how to",
          source: "@site/docs/security/pentesting/scanning.md",
          sourceDirName: "security/pentesting",
          slug: "/security/pentesting/scanning",
          permalink: "/docs/security/pentesting/scanning",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "OWASP", permalink: "/docs/security/owasp" },
          next: {
            title: "Shells",
            permalink: "/docs/security/pentesting/shells",
          },
        },
        d = {},
        c = [
          {
            value: "Local network IP address",
            id: "local-network-ip-address",
            level: 2,
          },
          { value: "Ping sweeps", id: "ping-sweeps", level: 2 },
          { value: "Port scans", id: "port-scans", level: 2 },
        ],
        u = { toc: c };
      function m(e) {
        var n = e.components,
          t = (0, i.Z)(e, o);
        return (0, s.kt)(
          "wrapper",
          (0, a.Z)({}, u, t, { components: n, mdxType: "MDXLayout" }),
          (0, s.kt)("h1", { id: "scanning" }, "Scanning"),
          (0, s.kt)(
            "p",
            null,
            "This document will discuss different scanning techniques and demonstrate how to\nperform them using the tool ",
            (0, s.kt)("inlineCode", { parentName: "p" }, "nmap"),
            "."
          ),
          (0, s.kt)(
            "h2",
            { id: "local-network-ip-address" },
            "Local network IP address"
          ),
          (0, s.kt)(
            "p",
            null,
            "To scan a network one need its IP address. To find the address of the local\nnetwork, one can use ",
            (0, s.kt)("inlineCode", { parentName: "p" }, "route -n"),
            " to find the router. It is the gateway with a\ndestination of ",
            (0, s.kt)("inlineCode", { parentName: "p" }, "0.0.0.0"),
            ". Alternatively, one can see the address of one's own\ncomputer with ",
            (0, s.kt)("inlineCode", { parentName: "p" }, "ip addr"),
            "."
          ),
          (0, s.kt)("h2", { id: "ping-sweeps" }, "Ping sweeps"),
          (0, s.kt)(
            "p",
            null,
            "One quick way of finding active devices on a network is through a\n",
            (0, s.kt)(
              "a",
              { parentName: "p", href: "../../network/protocols/icmp" },
              "ICMP"
            ),
            " ping sweep. This will send an ICMP package\nto each assignable IP address in a given network. According to RFC every device\nmust respond to ICMP, meaning that one has efficient way of detecting devices.\nHowever, some devices (e.g. Microsoft Windows hosts) do not respond to ICMP\nmaking them impossible to detect through such a ping sweep."
          ),
          (0, s.kt)(
            "p",
            null,
            "The command for running a ping sweep with ",
            (0, s.kt)("inlineCode", { parentName: "p" }, "nmap"),
            " is"
          ),
          (0, s.kt)(
            "pre",
            null,
            (0, s.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "nmap -sn <target>\n"
            )
          ),
          (0, s.kt)("h2", { id: "port-scans" }, "Port scans"),
          (0, s.kt)(
            "p",
            null,
            "In order to find active services on a host one can run a port scan. One\ntypically attempts to complete a TCP handshake with each port of interest. Since\nclosed ports must respond with the TCP ",
            (0, s.kt)("inlineCode", { parentName: "p" }, "RST"),
            " flag this gives reliable\ninformation on port status. If there is no response there is likely some\nfirewall that filters incoming traffic."
          ),
          (0, s.kt)(
            "p",
            null,
            "Here are some different TCP scanning techniques"
          ),
          (0, s.kt)(
            "ul",
            null,
            (0, s.kt)(
              "li",
              { parentName: "ul" },
              (0, s.kt)("strong", { parentName: "li" }, "ACK"),
              " Complete TCP handshake."
            ),
            (0, s.kt)(
              "li",
              { parentName: "ul" },
              (0, s.kt)("strong", { parentName: "li" }, "SYN"),
              " Initiate TCP handshake but send ",
              (0, s.kt)("inlineCode", { parentName: "li" }, "RST"),
              " instead of ",
              (0, s.kt)("inlineCode", { parentName: "li" }, "ACK"),
              " as response to\n",
              (0, s.kt)("inlineCode", { parentName: "li" }, "SYN-ACK"),
              "."
            )
          ),
          (0, s.kt)(
            "p",
            null,
            "These scan types does not initiate with a ",
            (0, s.kt)("inlineCode", { parentName: "p" }, "SYN"),
            " but that still assumes the\nconnection is reset if the port is closed. The purpose of the different scans\nare IDS and firewall detection."
          ),
          (0, s.kt)(
            "ul",
            null,
            (0, s.kt)(
              "li",
              { parentName: "ul" },
              (0, s.kt)("strong", { parentName: "li" }, "Null"),
              " Send a package without any flags at all."
            ),
            (0, s.kt)(
              "li",
              { parentName: "ul" },
              (0, s.kt)("strong", { parentName: "li" }, "Fin"),
              " Set the ",
              (0, s.kt)("inlineCode", { parentName: "li" }, "FIN"),
              " flag meaning the transmission is finished."
            ),
            (0, s.kt)(
              "li",
              { parentName: "ul" },
              (0, s.kt)("strong", { parentName: "li" }, "Xmas"),
              " Sends a deformed data package."
            )
          ),
          (0, s.kt)(
            "p",
            null,
            "We can run a TCP (ACK) port scan with service fingerprinting using"
          ),
          (0, s.kt)(
            "pre",
            null,
            (0, s.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "nmap -sV <target>\n"
            )
          ),
          (0, s.kt)(
            "p",
            null,
            "NB: Mobile devices typically do not expose any ports."
          ),
          (0, s.kt)(
            "p",
            null,
            (0, s.kt)(
              "a",
              { parentName: "p", href: "../../network/protocols/udp" },
              "UDP"
            ),
            " port scans are more difficult since there is\nno expected response from an open port, making it impossible to differentiate\nbetween an open port and a filtered one."
          )
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
