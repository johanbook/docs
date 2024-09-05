"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [5129],
  {
    3622: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => u,
          contentTitle: () => l,
          default: () => m,
          frontMatter: () => r,
          metadata: () => c,
          toc: () => d,
        });
      var s = t(7462),
        i = t(3366),
        a = (t(7294), t(3905)),
        o = (t(828), ["components"]),
        r = {},
        l = "ELF",
        c = {
          unversionedId: "unix/elf",
          id: "unix/elf",
          title: "ELF",
          description:
            "Executable and Linkable Format (ELF) is a format for binary files such",
          source: "@site/docs/unix/elf.md",
          sourceDirName: "unix",
          slug: "/unix/elf",
          permalink: "/docs/unix/elf",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "Daemon", permalink: "/docs/unix/daemon" },
          next: { title: "FIFO", permalink: "/docs/unix/fifo" },
        },
        u = {},
        d = [],
        f = { toc: d };
      function m(e) {
        var n = e.components,
          t = (0, i.Z)(e, o);
        return (0, a.kt)(
          "wrapper",
          (0, s.Z)({}, f, t, { components: n, mdxType: "MDXLayout" }),
          (0, a.kt)("h1", { id: "elf" }, "ELF"),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)(
              "strong",
              { parentName: "p" },
              "Executable and Linkable Format"
            ),
            " (",
            (0, a.kt)("strong", { parentName: "p" }, "ELF"),
            ") is a format for binary files such\nas libraries and executables. On Windows the equivalent is EXE files. An ELF\nfile consists of headers, sections and linking headers. The sections contain\nassembly code."
          ),
          (0, a.kt)(
            "p",
            null,
            "Many Linux commands are ELF files as compiled C/C++ code yields such files."
          )
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
