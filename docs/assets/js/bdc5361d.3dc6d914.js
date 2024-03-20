"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [4885],
  {
    8922: (o, t, l) => {
      l.r(t),
        l.d(t, {
          assets: () => i,
          contentTitle: () => u,
          default: () => m,
          frontMatter: () => a,
          metadata: () => c,
          toc: () => p,
        });
      var n = l(7462),
        e = l(3366),
        r = (l(7294), l(3905)),
        s = (l(828), ["components"]),
        a = {},
        u = "journalctl",
        c = {
          unversionedId: "unix/tools/journalctl",
          id: "unix/tools/journalctl",
          title: "journalctl",
          description:
            "journalctl is a journaling system that is part of systemd.",
          source: "@site/docs/unix/tools/journalctl.md",
          sourceDirName: "unix/tools",
          slug: "/unix/tools/journalctl",
          permalink: "/docs/unix/tools/journalctl",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "grep", permalink: "/docs/unix/tools/grep" },
          next: { title: "Netcat", permalink: "/docs/unix/tools/netcat" },
        },
        i = {},
        p = [
          { value: "Follow logs", id: "follow-logs", level: 2 },
          {
            value: "Only logs for current boot",
            id: "only-logs-for-current-boot",
            level: 2,
          },
        ],
        d = { toc: p };
      function m(o) {
        var t = o.components,
          l = (0, e.Z)(o, s);
        return (0, r.kt)(
          "wrapper",
          (0, n.Z)({}, d, l, { components: t, mdxType: "MDXLayout" }),
          (0, r.kt)("h1", { id: "journalctl" }, "journalctl"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("strong", { parentName: "p" }, "journalctl"),
            " is a journaling system that is part of ",
            (0, r.kt)(
              "a",
              { parentName: "p", href: "/docs/unix/tools/systemd" },
              "systemd"
            ),
            "."
          ),
          (0, r.kt)("h2", { id: "follow-logs" }, "Follow logs"),
          (0, r.kt)("p", null, "To follow logs from a unit do"),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "journalctl -fu <unit>\n"
            )
          ),
          (0, r.kt)(
            "h2",
            { id: "only-logs-for-current-boot" },
            "Only logs for current boot"
          ),
          (0, r.kt)("p", null, "To show logs for current boot run"),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "journalctl -b\n"
            )
          )
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
