"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [2292],
  {
    5158: (t, s, e) => {
      e.r(s),
        e.d(s, {
          assets: () => c,
          contentTitle: () => l,
          default: () => m,
          frontMatter: () => r,
          metadata: () => u,
          toc: () => p,
        });
      var n = e(7462),
        o = e(3366),
        a = (e(7294), e(3905)),
        i = (e(828), ["components"]),
        r = {},
        l = "ss",
        u = {
          unversionedId: "unix/tools/ss",
          id: "unix/tools/ss",
          title: "ss",
          description:
            "ss is a networking utility meant to replace netstat and can be used to",
          source: "@site/docs/unix/tools/ss.md",
          sourceDirName: "unix/tools",
          slug: "/unix/tools/ss",
          permalink: "/docs/unix/tools/ss",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "Socat", permalink: "/docs/unix/tools/socat" },
          next: { title: "syslog", permalink: "/docs/unix/tools/syslog" },
        },
        c = {},
        p = [],
        d = { toc: p };
      function m(t) {
        var s = t.components,
          e = (0, o.Z)(t, i);
        return (0, a.kt)(
          "wrapper",
          (0, n.Z)({}, d, e, { components: s, mdxType: "MDXLayout" }),
          (0, a.kt)("h1", { id: "ss" }, "ss"),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)("strong", { parentName: "p" }, "ss"),
            " is a networking utility meant to replace ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "netstat"),
            " and can be used to\nquery information about sockets on a machine. To see listening TCP sockets run"
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "ss --listen --tcp\n"
            )
          )
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
