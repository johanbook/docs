"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [4490],
  {
    6709: (e, t, s) => {
      s.r(t),
        s.d(t, {
          assets: () => c,
          contentTitle: () => d,
          default: () => m,
          frontMatter: () => a,
          metadata: () => l,
          toc: () => u,
        });
      var o = s(7462),
        n = s(3366),
        i = (s(7294), s(3905)),
        r = (s(828), ["components"]),
        a = {},
        d = "sed",
        l = {
          unversionedId: "unix/tools/sed",
          id: "unix/tools/sed",
          title: "sed",
          description: "Search and replace in multiple files in directory",
          source: "@site/docs/unix/tools/sed.md",
          sourceDirName: "unix/tools",
          slug: "/unix/tools/sed",
          permalink: "/docs/unix/tools/sed",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "scp", permalink: "/docs/unix/tools/scp" },
          next: { title: "Socat", permalink: "/docs/unix/tools/socat" },
        },
        c = {},
        u = [],
        p = { toc: u };
      function m(e) {
        var t = e.components,
          s = (0, n.Z)(e, r);
        return (0, i.kt)(
          "wrapper",
          (0, o.Z)({}, p, s, { components: t, mdxType: "MDXLayout" }),
          (0, i.kt)("h1", { id: "sed" }, "sed"),
          (0, i.kt)(
            "p",
            null,
            "Search and replace in multiple files in directory"
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "sed -i 's/foo/bar/g' **/*.md\n"
            )
          )
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
