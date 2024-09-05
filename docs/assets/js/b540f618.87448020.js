"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [5782],
  {
    3162: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => d,
          contentTitle: () => p,
          default: () => b,
          frontMatter: () => g,
          metadata: () => r,
          toc: () => l,
        });
      var i = n(7462),
        o = n(3366),
        a = (n(7294), n(3905)),
        s = (n(828), ["components"]),
        g = {},
        p = "Debugging",
        r = {
          unversionedId: "development/debugging",
          id: "development/debugging",
          title: "Debugging",
          description:
            "Debugging is the process of inspecting an application to find and fix bugs.",
          source: "@site/docs/development/debugging.md",
          sourceDirName: "development",
          slug: "/development/debugging",
          permalink: "/docs/development/debugging",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Types of databases",
            permalink: "/docs/databases/types_of_databases",
          },
          next: {
            title: "Feedback loop",
            permalink: "/docs/development/feedback_loop",
          },
        },
        d = {},
        l = [
          { value: "Debugger", id: "debugger", level: 2 },
          { value: "Breakpoints", id: "breakpoints", level: 2 },
        ],
        u = { toc: l };
      function b(e) {
        var t = e.components,
          n = (0, o.Z)(e, s);
        return (0, a.kt)(
          "wrapper",
          (0, i.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
          (0, a.kt)("h1", { id: "debugging" }, "Debugging"),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)("strong", { parentName: "p" }, "Debugging"),
            " is the process of inspecting an application to find and fix bugs.\nWhen debugging a production application, one often also uses\n",
            (0, a.kt)(
              "a",
              { parentName: "p", href: "/docs/devops/monitoring/logging/" },
              "logs"
            ),
            "."
          ),
          (0, a.kt)("h2", { id: "debugger" }, "Debugger"),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)("strong", { parentName: "p" }, "Debugger"),
            " is a custom tools for debugging, often distributed as part of a\nlanguage's SDK. For example, there is ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "gdb"),
            " which is the GNU Debugger for\ndebugging binary applications. There is also ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "pdb"),
            " which is the official Python\ndebugger."
          ),
          (0, a.kt)(
            "p",
            null,
            "A debugger typically allows one to set breakpoints where the application is\nstopped and its state can inspected and modified."
          ),
          (0, a.kt)("h2", { id: "breakpoints" }, "Breakpoints"),
          (0, a.kt)(
            "p",
            null,
            "A ",
            (0, a.kt)("strong", { parentName: "p" }, "breakpoint"),
            " is a point in the code where the debugger will pause. Many\ndebuggers support conditional breakpoints where the debugger only pauses if\ncertain conditions are met."
          )
        );
      }
      b.isMDXComponent = !0;
    },
  },
]);
