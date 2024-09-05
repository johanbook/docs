"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [8482],
  {
    1923: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => d,
          contentTitle: () => c,
          default: () => l,
          frontMatter: () => r,
          metadata: () => p,
          toc: () => m,
        });
      var o = t(7462),
        a = t(3366),
        i = (t(7294), t(3905)),
        s = (t(828), ["components"]),
        r = {},
        c = "Daemon",
        p = {
          unversionedId: "unix/daemon",
          id: "unix/daemon",
          title: "Daemon",
          description:
            "Daemon is a process running in the background, not expecting interaction.",
          source: "@site/docs/unix/daemon.md",
          sourceDirName: "unix",
          slug: "/unix/daemon",
          permalink: "/docs/unix/daemon",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Types of tests",
            permalink: "/docs/testing/types-of-tests",
          },
          next: { title: "ELF", permalink: "/docs/unix/elf" },
        },
        d = {},
        m = [],
        u = { toc: m };
      function l(e) {
        var n = e.components,
          t = (0, a.Z)(e, s);
        return (0, i.kt)(
          "wrapper",
          (0, o.Z)({}, u, t, { components: n, mdxType: "MDXLayout" }),
          (0, i.kt)("h1", { id: "daemon" }, "Daemon"),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)("strong", { parentName: "p" }, "Daemon"),
            " is a process running in the background, not expecting interaction.\nDaemon processes traditionally has the suffix ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "d"),
            ". Daemons often has the\n",
            (0, i.kt)(
              "a",
              { parentName: "p", href: "./processes" },
              "init process"
            ),
            " as parent (which can be accomplished via adopting).\nFor example, the ",
            (0, i.kt)(
              "a",
              { parentName: "p", href: "../devops/containerization/docker" },
              "Docker"
            ),
            " daemon is called\n",
            (0, i.kt)("inlineCode", { parentName: "p" }, "dockerd"),
            "."
          )
        );
      }
      l.isMDXComponent = !0;
    },
  },
]);
