"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [1659],
  {
    9138: (n, t, e) => {
      e.r(t),
        e.d(t, {
          assets: () => p,
          contentTitle: () => l,
          default: () => f,
          frontMatter: () => a,
          metadata: () => d,
          toc: () => u,
        });
      var o = e(7462),
        i = e(3366),
        s = (e(7294), e(3905)),
        r = (e(828), ["components"]),
        a = {},
        l = "find",
        d = {
          unversionedId: "unix/tools/find",
          id: "unix/tools/find",
          title: "find",
          description:
            "find is a useful Unix program for locating files. For example, to find all",
          source: "@site/docs/unix/tools/find.md",
          sourceDirName: "unix/tools",
          slug: "/unix/tools/find",
          permalink: "/docs/unix/tools/find",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "dhcpcd", permalink: "/docs/unix/tools/dhcpcd" },
          next: { title: "grep", permalink: "/docs/unix/tools/grep" },
        },
        p = {},
        u = [],
        c = { toc: u };
      function f(n) {
        var t = n.components,
          e = (0, i.Z)(n, r);
        return (0, s.kt)(
          "wrapper",
          (0, o.Z)({}, c, e, { components: t, mdxType: "MDXLayout" }),
          (0, s.kt)("h1", { id: "find" }, "find"),
          (0, s.kt)(
            "p",
            null,
            (0, s.kt)("strong", { parentName: "p" }, "find"),
            " is a useful Unix program for locating files. For example, to find all\nfiles matching a regex run"
          ),
          (0, s.kt)(
            "pre",
            null,
            (0, s.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              'find <path> -name "*.html" -type f\n'
            )
          )
        );
      }
      f.isMDXComponent = !0;
    },
  },
]);
