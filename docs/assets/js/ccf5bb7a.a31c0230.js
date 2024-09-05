"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [3827],
  {
    5054: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => c,
          contentTitle: () => p,
          default: () => m,
          frontMatter: () => r,
          metadata: () => l,
          toc: () => u,
        });
      var i = n(7462),
        s = n(3366),
        a = (n(7294), n(3905)),
        o = (n(828), ["components"]),
        r = {},
        p = "FIFO",
        l = {
          unversionedId: "unix/fifo",
          id: "unix/fifo",
          title: "FIFO",
          description:
            "A First In First Out Special File (FIFO) is a named pipe. They can be",
          source: "@site/docs/unix/fifo.md",
          sourceDirName: "unix",
          slug: "/unix/fifo",
          permalink: "/docs/unix/fifo",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "ELF", permalink: "/docs/unix/elf" },
          next: { title: "File systems", permalink: "/docs/unix/filesystems" },
        },
        c = {},
        u = [],
        d = { toc: u };
      function m(e) {
        var t = e.components,
          n = (0, s.Z)(e, o);
        return (0, a.kt)(
          "wrapper",
          (0, i.Z)({}, d, n, { components: t, mdxType: "MDXLayout" }),
          (0, a.kt)("h1", { id: "fifo" }, "FIFO"),
          (0, a.kt)(
            "p",
            null,
            "A ",
            (0, a.kt)(
              "strong",
              { parentName: "p" },
              "First In First Out Special File"
            ),
            " (",
            (0, a.kt)("strong", { parentName: "p" }, "FIFO"),
            ") is a named pipe. They can be\naccessed as part of the filesystem. For example,"
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "mkfifo my-pipe\nls > my-pipe\n"
            )
          ),
          (0, a.kt)(
            "p",
            null,
            "Open another terminal in the same directory and do ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "cat < my-pipe"),
            " and voila the\ncontent is piped between the terminals. They also show up using ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "ls"),
            "."
          )
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
