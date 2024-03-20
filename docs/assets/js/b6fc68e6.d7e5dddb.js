"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [228],
  {
    161: (o, e, t) => {
      t.r(e),
        t.d(e, {
          assets: () => c,
          contentTitle: () => i,
          default: () => d,
          frontMatter: () => a,
          metadata: () => u,
          toc: () => g,
        });
      var s = t(7462),
        n = t(3366),
        l = (t(7294), t(3905)),
        r = (t(828), ["components"]),
        a = {},
        i = "Logs",
        u = {
          unversionedId: "unix/logs",
          id: "unix/logs",
          title: "Logs",
          description: "Logs are crucial to monitor how a system behaves.",
          source: "@site/docs/unix/logs.md",
          sourceDirName: "unix",
          slug: "/unix/logs",
          permalink: "/docs/unix/logs",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "Kernel", permalink: "/docs/unix/kernel" },
          next: { title: "Networking", permalink: "/docs/unix/networking" },
        },
        c = {},
        g = [
          { value: "journalctl", id: "journalctl", level: 2 },
          { value: "syslog", id: "syslog", level: 2 },
        ],
        p = { toc: g };
      function d(o) {
        var e = o.components,
          t = (0, n.Z)(o, r);
        return (0, l.kt)(
          "wrapper",
          (0, s.Z)({}, p, t, { components: e, mdxType: "MDXLayout" }),
          (0, l.kt)("h1", { id: "logs" }, "Logs"),
          (0, l.kt)(
            "p",
            null,
            "Logs are crucial to monitor how a system behaves."
          ),
          (0, l.kt)("h2", { id: "journalctl" }, "journalctl"),
          (0, l.kt)(
            "p",
            null,
            "A common program for handling logs is ",
            (0, l.kt)(
              "a",
              { parentName: "p", href: "/docs/unix/tools/journalctl" },
              "journalctl"
            ),
            ". To\nshow the most recent logs, run"
          ),
          (0, l.kt)(
            "pre",
            null,
            (0, l.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "journalctl -r\n"
            )
          ),
          (0, l.kt)("h2", { id: "syslog" }, "syslog"),
          (0, l.kt)(
            "p",
            null,
            (0, l.kt)(
              "a",
              { parentName: "p", href: "/docs/unix/tools/syslog" },
              "syslog"
            ),
            " is an alternative logging application."
          )
        );
      }
      d.isMDXComponent = !0;
    },
  },
]);
