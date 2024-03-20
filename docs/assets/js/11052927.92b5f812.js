"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [7481],
  {
    4041: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => l,
          contentTitle: () => d,
          default: () => h,
          frontMatter: () => i,
          metadata: () => r,
          toc: () => p,
        });
      var o = n(7462),
        c = n(3366),
        a = (n(7294), n(3905)),
        s = (n(828), ["components"]),
        i = {},
        d = "dhcpcd",
        r = {
          unversionedId: "unix/tools/dhcpcd",
          id: "unix/tools/dhcpcd",
          title: "dhcpcd",
          description: "DHCPC Daemon (dhcpcd) is a Linux daemon for handling",
          source: "@site/docs/unix/tools/dhcpcd.md",
          sourceDirName: "unix/tools",
          slug: "/unix/tools/dhcpcd",
          permalink: "/docs/unix/tools/dhcpcd",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "cURL", permalink: "/docs/unix/tools/curl" },
          next: { title: "find", permalink: "/docs/unix/tools/find" },
        },
        l = {},
        p = [
          { value: "Static IP", id: "static-ip", level: 2 },
          { value: "resolvconf", id: "resolvconf", level: 2 },
        ],
        u = { toc: p };
      function h(e) {
        var t = e.components,
          n = (0, c.Z)(e, s);
        return (0, a.kt)(
          "wrapper",
          (0, o.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
          (0, a.kt)("h1", { id: "dhcpcd" }, "dhcpcd"),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)("strong", { parentName: "p" }, "DHCPC Daemon"),
            " (",
            (0, a.kt)("strong", { parentName: "p" }, "dhcpcd"),
            ") is a Linux ",
            (0, a.kt)(
              "a",
              { parentName: "p", href: "/docs/unix/daemon" },
              "daemon"
            ),
            " for handling\n",
            (0, a.kt)(
              "a",
              { parentName: "p", href: "/docs/network/protocols/dhcp" },
              "DHCPC"
            ),
            " queries. The configurations of the\ndaemon are typically found in ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "/etc/dhcpcd"),
            "."
          ),
          (0, a.kt)("h2", { id: "static-ip" }, "Static IP"),
          (0, a.kt)(
            "p",
            null,
            "To request a static IP with dhcpcd, use the following configuration:"
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "interface <INTERFACE>\nstatic ip_address=<CIDR_IP_ADDRESS>\nstatic routers=<IP_ADDRESS>\nstatic domain_name_servers=<NAME_SERVER>\n"
            )
          ),
          (0, a.kt)("h2", { id: "resolvconf" }, "resolvconf"),
          (0, a.kt)(
            "p",
            null,
            "To see the current nameserver on a system using resolvconf, do\n",
            (0, a.kt)(
              "inlineCode",
              { parentName: "p" },
              "cat /etc/resolv.conf"
            ),
            "."
          )
        );
      }
      h.isMDXComponent = !0;
    },
  },
]);
