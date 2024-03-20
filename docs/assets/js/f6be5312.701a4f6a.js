"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [1137],
  {
    3273: (e, t, s) => {
      s.r(t),
        s.d(t, {
          assets: () => p,
          contentTitle: () => c,
          default: () => k,
          frontMatter: () => i,
          metadata: () => l,
          toc: () => d,
        });
      var n = s(7462),
        r = s(3366),
        a = (s(7294), s(3905)),
        o = (s(828), ["components"]),
        i = {},
        c = "OpenRC",
        l = {
          unversionedId: "unix/tools/openrc",
          id: "unix/tools/openrc",
          title: "OpenRC",
          description: "OpenRC is an alternative init system to systemd.",
          source: "@site/docs/unix/tools/openrc.md",
          sourceDirName: "unix/tools",
          slug: "/unix/tools/openrc",
          permalink: "/docs/unix/tools/openrc",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "Netcat", permalink: "/docs/unix/tools/netcat" },
          next: { title: "scp", permalink: "/docs/unix/tools/scp" },
        },
        p = {},
        d = [
          { value: "rc-service", id: "rc-service", level: 2 },
          {
            value: "Restarting a service",
            id: "restarting-a-service",
            level: 2,
          },
        ],
        u = { toc: d };
      function k(e) {
        var t = e.components,
          s = (0, r.Z)(e, o);
        return (0, a.kt)(
          "wrapper",
          (0, n.Z)({}, u, s, { components: t, mdxType: "MDXLayout" }),
          (0, a.kt)("h1", { id: "openrc" }, "OpenRC"),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)("strong", { parentName: "p" }, "OpenRC"),
            " is an alternative init system to ",
            (0, a.kt)(
              "a",
              { parentName: "p", href: "/docs/unix/tools/systemd" },
              "systemd"
            ),
            "."
          ),
          (0, a.kt)("h2", { id: "rc-service" }, "rc-service"),
          (0, a.kt)("p", null, "To add a new service"),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "rc-update add docker\n"
            )
          ),
          (0, a.kt)("p", null, "To check that it is enabled run"),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "rc-status\n"
            )
          ),
          (0, a.kt)(
            "h2",
            { id: "restarting-a-service" },
            "Restarting a service"
          ),
          (0, a.kt)(
            "p",
            null,
            "To restart eg the ",
            (0, a.kt)(
              "a",
              { parentName: "p", href: "/docs/network/protocols/ssh" },
              "ssh"
            ),
            " daemon run"
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "service sshd restart\n"
            )
          )
        );
      }
      k.isMDXComponent = !0;
    },
  },
]);
