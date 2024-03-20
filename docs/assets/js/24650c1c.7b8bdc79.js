"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [7883],
  {
    1902: (s, o, t) => {
      t.r(o),
        t.d(o, {
          assets: () => c,
          contentTitle: () => i,
          default: () => p,
          frontMatter: () => r,
          metadata: () => u,
          toc: () => d,
        });
      var e = t(7462),
        l = t(3366),
        n = (t(7294), t(3905)),
        a = (t(828), ["components"]),
        r = {},
        i = "syslog",
        u = {
          unversionedId: "unix/tools/syslog",
          id: "unix/tools/syslog",
          title: "syslog",
          description:
            "syslog is a logging system similar to journalctl. To read",
          source: "@site/docs/unix/tools/syslog.md",
          sourceDirName: "unix/tools",
          slug: "/unix/tools/syslog",
          permalink: "/docs/unix/tools/syslog",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "ss", permalink: "/docs/unix/tools/ss" },
          next: { title: "Systemd", permalink: "/docs/unix/tools/systemd" },
        },
        c = {},
        d = [],
        g = { toc: d };
      function p(s) {
        var o = s.components,
          t = (0, l.Z)(s, a);
        return (0, n.kt)(
          "wrapper",
          (0, e.Z)({}, g, t, { components: o, mdxType: "MDXLayout" }),
          (0, n.kt)("h1", { id: "syslog" }, "syslog"),
          (0, n.kt)(
            "p",
            null,
            (0, n.kt)("strong", { parentName: "p" }, "syslog"),
            " is a logging system similar to ",
            (0, n.kt)(
              "a",
              { parentName: "p", href: "/docs/unix/tools/journalctl" },
              "journalctl"
            ),
            ". To read\nlogs do"
          ),
          (0, n.kt)(
            "pre",
            null,
            (0, n.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "tail -f /var/log/messages\n"
            )
          )
        );
      }
      p.isMDXComponent = !0;
    },
  },
]);
