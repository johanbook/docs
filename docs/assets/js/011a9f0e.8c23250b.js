"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [4370],
  {
    6981: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => u,
          contentTitle: () => l,
          default: () => d,
          frontMatter: () => a,
          metadata: () => p,
          toc: () => c,
        });
      var n = r(7462),
        o = r(3366),
        s = (r(7294), r(3905)),
        i = (r(828), ["components"]),
        a = {},
        l = "grep",
        p = {
          unversionedId: "unix/tools/grep",
          id: "unix/tools/grep",
          title: "grep",
          description:
            "grep is a tooling for searching a text stream. Although there are faster",
          source: "@site/docs/unix/tools/grep.md",
          sourceDirName: "unix/tools",
          slug: "/unix/tools/grep",
          permalink: "/docs/unix/tools/grep",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "find", permalink: "/docs/unix/tools/find" },
          next: {
            title: "journalctl",
            permalink: "/docs/unix/tools/journalctl",
          },
        },
        u = {},
        c = [
          {
            value: "Grepping files for search term",
            id: "grepping-files-for-search-term",
            level: 2,
          },
        ],
        g = { toc: c };
      function d(e) {
        var t = e.components,
          r = (0, o.Z)(e, i);
        return (0, s.kt)(
          "wrapper",
          (0, n.Z)({}, g, r, { components: t, mdxType: "MDXLayout" }),
          (0, s.kt)("h1", { id: "grep" }, "grep"),
          (0, s.kt)(
            "p",
            null,
            (0, s.kt)("strong", { parentName: "p" }, "grep"),
            " is a tooling for searching a text stream. Although there are faster\ntext stream searchers, grep is found on most Linux distros, making it a reliable\nchoice."
          ),
          (0, s.kt)(
            "h2",
            { id: "grepping-files-for-search-term" },
            "Grepping files for search term"
          ),
          (0, s.kt)(
            "p",
            null,
            "One can e.g. grep multiple files using ",
            (0, s.kt)(
              "a",
              { parentName: "p", href: "/docs/unix/tools/find" },
              "find"
            ),
            " like so:"
          ),
          (0, s.kt)(
            "pre",
            null,
            (0, s.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              'find . -name "*.html" | xargs grep\n'
            )
          )
        );
      }
      d.isMDXComponent = !0;
    },
  },
]);
