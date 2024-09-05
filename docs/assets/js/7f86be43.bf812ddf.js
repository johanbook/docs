"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [6431],
  {
    1113: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => p,
          contentTitle: () => l,
          default: () => d,
          frontMatter: () => r,
          metadata: () => u,
          toc: () => m,
        });
      var s = n(7462),
        i = n(3366),
        o = (n(7294), n(3905)),
        a = (n(828), ["components"]),
        r = {},
        l = "Systemd",
        u = {
          unversionedId: "unix/tools/systemd",
          id: "unix/tools/systemd",
          title: "Systemd",
          description:
            "Systemd is a suite of tools, including an init system, for Linux. The",
          source: "@site/docs/unix/tools/systemd.md",
          sourceDirName: "unix/tools",
          slug: "/unix/tools/systemd",
          permalink: "/docs/unix/tools/systemd",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "syslog", permalink: "/docs/unix/tools/syslog" },
          next: { title: "zip", permalink: "/docs/unix/tools/zip" },
        },
        p = {},
        m = [
          {
            value: "Enabling a service on system startup",
            id: "enabling-a-service-on-system-startup",
            level: 2,
          },
          { value: "Configuring a unit", id: "configuring-a-unit", level: 2 },
        ],
        c = { toc: m };
      function d(e) {
        var t = e.components,
          n = (0, i.Z)(e, a);
        return (0, o.kt)(
          "wrapper",
          (0, s.Z)({}, c, n, { components: t, mdxType: "MDXLayout" }),
          (0, o.kt)("h1", { id: "systemd" }, "Systemd"),
          (0, o.kt)(
            "p",
            null,
            (0, o.kt)("strong", { parentName: "p" }, "Systemd"),
            " is a suite of tools, including an init system, for Linux. The\nsystemd ecosystem builds on the concept of units. To see the system units, run\n",
            (0, o.kt)("inlineCode", { parentName: "p" }, "systemctl status"),
            "."
          ),
          (0, o.kt)("p", null, "A service can be started using"),
          (0, o.kt)(
            "pre",
            null,
            (0, o.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "systemctl start bluetooth.service\n"
            )
          ),
          (0, o.kt)(
            "h2",
            { id: "enabling-a-service-on-system-startup" },
            "Enabling a service on system startup"
          ),
          (0, o.kt)("p", null, "To enable a service on system startup, run"),
          (0, o.kt)(
            "pre",
            null,
            (0, o.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "systemctl enable bluetooth.service\n"
            )
          ),
          (0, o.kt)("h2", { id: "configuring-a-unit" }, "Configuring a unit"),
          (0, o.kt)(
            "p",
            null,
            "One can easily configure one's own systemd units. Create a new file\n",
            (0, o.kt)("inlineCode", { parentName: "p" }, "my-service.service"),
            " in ",
            (0, o.kt)("inlineCode", { parentName: "p" }, "/etc/systemd/system"),
            " containing the following TOML-like\nconfigurations:"
          ),
          (0, o.kt)(
            "pre",
            null,
            (0, o.kt)(
              "code",
              { parentName: "pre", className: "language-toml" },
              "[Unit]\nDescription=My program\n\n[Service]\nType=forking\nExecStart=/usr/bin/python /home/guest/my-program.py\nWorkingDirectory=/srv/www/\n\n[Install]\nWantedBy=multi-user.target\n"
            )
          ),
          (0, o.kt)(
            "p",
            null,
            "There available types are ",
            (0, o.kt)("inlineCode", { parentName: "p" }, "simple"),
            ", ",
            (0, o.kt)("inlineCode", { parentName: "p" }, "exec"),
            ", ",
            (0, o.kt)("inlineCode", { parentName: "p" }, "forking"),
            ", ",
            (0, o.kt)("inlineCode", { parentName: "p" }, "oneshot"),
            ", ",
            (0, o.kt)("inlineCode", { parentName: "p" }, "dbus"),
            ",\n",
            (0, o.kt)("inlineCode", { parentName: "p" }, "notify"),
            " and ",
            (0, o.kt)("inlineCode", { parentName: "p" }, "idle"),
            "."
          ),
          (0, o.kt)(
            "p",
            null,
            "To see logs for your unit, use ",
            (0, o.kt)(
              "a",
              { parentName: "p", href: "/docs/unix/tools/journalctl" },
              "journalctl"
            ),
            " like\n",
            (0, o.kt)(
              "inlineCode",
              { parentName: "p" },
              "journalctl -u my-service.service"
            ),
            "."
          )
        );
      }
      d.isMDXComponent = !0;
    },
  },
]);
