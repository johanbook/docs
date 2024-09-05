"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [6232],
  {
    5739: (t, e, i) => {
      i.r(e),
        i.d(e, {
          assets: () => d,
          contentTitle: () => l,
          default: () => m,
          frontMatter: () => s,
          metadata: () => a,
          toc: () => u,
        });
      var o = i(7462),
        n = i(3366),
        r = (i(7294), i(3905)),
        p = (i(828), ["components"]),
        s = {},
        l = "zip",
        a = {
          unversionedId: "unix/tools/zip",
          id: "unix/tools/zip",
          title: "zip",
          description: "zip is a tool for zipping multiple files.",
          source: "@site/docs/unix/tools/zip.md",
          sourceDirName: "unix/tools",
          slug: "/unix/tools/zip",
          permalink: "/docs/unix/tools/zip",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "Systemd", permalink: "/docs/unix/tools/systemd" },
          next: { title: "Users and groups", permalink: "/docs/unix/user" },
        },
        d = {},
        u = [
          {
            value: "Zip directory and ignore multiple pattern",
            id: "zip-directory-and-ignore-multiple-pattern",
            level: 2,
          },
        ],
        c = { toc: u };
      function m(t) {
        var e = t.components,
          i = (0, n.Z)(t, p);
        return (0, r.kt)(
          "wrapper",
          (0, o.Z)({}, c, i, { components: e, mdxType: "MDXLayout" }),
          (0, r.kt)("h1", { id: "zip" }, "zip"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("strong", { parentName: "p" }, "zip"),
            " is a tool for zipping multiple files."
          ),
          (0, r.kt)(
            "h2",
            { id: "zip-directory-and-ignore-multiple-pattern" },
            "Zip directory and ignore multiple pattern"
          ),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              'zip docs.zip -r docs -x "**/node_modules/*" -x "**/.git/*"\n'
            )
          )
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
