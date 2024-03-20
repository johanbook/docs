"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [1413],
  {
    2134: (e, s, t) => {
      t.r(s),
        t.d(s, {
          assets: () => l,
          contentTitle: () => i,
          default: () => m,
          frontMatter: () => a,
          metadata: () => c,
          toc: () => u,
        });
      var o = t(7462),
        n = t(3366),
        r = (t(7294), t(3905)),
        p = (t(828), ["components"]),
        a = {},
        i = "Processes",
        c = {
          unversionedId: "unix/processes",
          id: "unix/processes",
          title: "Processes",
          description:
            "In Unix there is a concept of processes. All processes have one parent",
          source: "@site/docs/unix/processes.md",
          sourceDirName: "unix",
          slug: "/unix/processes",
          permalink: "/docs/unix/processes",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Permissions and ownerships",
            permalink: "/docs/unix/permissions",
          },
          next: {
            title: "bluetoothctl",
            permalink: "/docs/unix/tools/bluetoothctl",
          },
        },
        l = {},
        u = [{ value: "Process adoption", id: "process-adoption", level: 2 }],
        d = { toc: u };
      function m(e) {
        var s = e.components,
          t = (0, n.Z)(e, p);
        return (0, r.kt)(
          "wrapper",
          (0, o.Z)({}, d, t, { components: s, mdxType: "MDXLayout" }),
          (0, r.kt)("h1", { id: "processes" }, "Processes"),
          (0, r.kt)(
            "p",
            null,
            "In Unix there is a concept of ",
            (0, r.kt)("strong", { parentName: "p" }, "processes"),
            ". All processes have one parent\nexcept for the top-most process (aka the ",
            (0, r.kt)("strong", { parentName: "p" }, "init process"),
            ")."
          ),
          (0, r.kt)("p", null, "You can view all processes by running"),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "ps -ef\n"
            )
          ),
          (0, r.kt)("h2", { id: "process-adoption" }, "Process adoption"),
          (0, r.kt)(
            "p",
            null,
            "If a process terminates, then its children are adopted by its parent."
          )
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
