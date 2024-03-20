"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [7356],
  {
    7948: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => u,
          contentTitle: () => l,
          default: () => g,
          frontMatter: () => o,
          metadata: () => c,
          toc: () => p,
        });
      var s = t(7462),
        i = t(3366),
        a = (t(7294), t(3905)),
        r = (t(828), ["components"]),
        o = {},
        l = "Uploads",
        c = {
          unversionedId: "security/pentesting/uploads",
          id: "security/pentesting/uploads",
          title: "Uploads",
          description:
            "If the backend supports PHP one can gain a shell by uploading a",
          source: "@site/docs/security/pentesting/uploads.md",
          sourceDirName: "security/pentesting",
          slug: "/security/pentesting/uploads",
          permalink: "/docs/security/pentesting/uploads",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Shells",
            permalink: "/docs/security/pentesting/shells",
          },
          next: {
            title: "Social engineering",
            permalink: "/docs/security/social_engineering",
          },
        },
        u = {},
        p = [
          { value: "Extensions", id: "extensions", level: 2 },
          { value: "Magic number", id: "magic-number", level: 2 },
        ],
        d = { toc: p };
      function g(e) {
        var n = e.components,
          t = (0, i.Z)(e, r);
        return (0, a.kt)(
          "wrapper",
          (0, s.Z)({}, d, t, { components: n, mdxType: "MDXLayout" }),
          (0, a.kt)("h1", { id: "uploads" }, "Uploads"),
          (0, a.kt)(
            "p",
            null,
            "If the backend supports PHP one can gain a ",
            (0, a.kt)("a", { parentName: "p", href: "./shells" }, "shell"),
            " by uploading a\nreverse shell PHP."
          ),
          (0, a.kt)("h2", { id: "extensions" }, "Extensions"),
          (0, a.kt)(
            "p",
            null,
            "There can be server side extension black- or white-lists. In this case it's\nuseful to test different allowed PHP extensions."
          ),
          (0, a.kt)("h2", { id: "magic-number" }, "Magic number"),
          (0, a.kt)(
            "p",
            null,
            "There can be magic number checks on server side. This can be evaded by changing\nthe magic number in a tool like ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "hexer"),
            ". A list magic number can be found\n",
            (0, a.kt)(
              "a",
              {
                parentName: "p",
                href: "https://en.wikipedia.org/wiki/List_of_file_signatures",
              },
              "here"
            ),
            "."
          )
        );
      }
      g.isMDXComponent = !0;
    },
  },
]);
