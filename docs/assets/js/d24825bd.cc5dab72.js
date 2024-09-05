"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [636],
  {
    4278: (e, t, o) => {
      o.r(t),
        o.d(t, {
          assets: () => l,
          contentTitle: () => i,
          default: () => m,
          frontMatter: () => p,
          metadata: () => c,
          toc: () => u,
        });
      var s = o(7462),
        n = o(3366),
        r = (o(7294), o(3905)),
        a = (o(828), ["components"]),
        p = {},
        i = "scp",
        c = {
          unversionedId: "unix/tools/scp",
          id: "unix/tools/scp",
          title: "scp",
          description: "secure copy (scp) is a tool for copying files over",
          source: "@site/docs/unix/tools/scp.md",
          sourceDirName: "unix/tools",
          slug: "/unix/tools/scp",
          permalink: "/docs/unix/tools/scp",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "OpenRC", permalink: "/docs/unix/tools/openrc" },
          next: { title: "sed", permalink: "/docs/unix/tools/sed" },
        },
        l = {},
        u = [],
        d = { toc: u };
      function m(e) {
        var t = e.components,
          o = (0, n.Z)(e, a);
        return (0, r.kt)(
          "wrapper",
          (0, s.Z)({}, d, o, { components: t, mdxType: "MDXLayout" }),
          (0, r.kt)("h1", { id: "scp" }, "scp"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("strong", { parentName: "p" }, "secure copy"),
            " (",
            (0, r.kt)("strong", { parentName: "p" }, "scp"),
            ") is a tool for copying files over\n",
            (0, r.kt)(
              "a",
              { parentName: "p", href: "/docs/network/protocols/ssh" },
              "SSH"
            ),
            " which is available in most Linux systems."
          ),
          (0, r.kt)(
            "p",
            null,
            "To copy a file to a remote destination, give ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "scp"),
            " a local file and a remote\n",
            (0, r.kt)(
              "a",
              { parentName: "p", href: "/docs/network/url" },
              "URL"
            ),
            " like so:"
          ),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "scp <file> <user>@<host>:<path>\n"
            )
          )
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
