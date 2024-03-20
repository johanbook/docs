"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [9260],
  {
    1154: (t, e, i) => {
      i.r(e),
        i.d(e, {
          assets: () => c,
          contentTitle: () => r,
          default: () => p,
          frontMatter: () => l,
          metadata: () => d,
          toc: () => u,
        });
      var n = i(7462),
        o = i(3366),
        s = (i(7294), i(3905)),
        a = (i(828), ["components"]),
        l = {},
        r = "Tools",
        d = {
          unversionedId: "testing/automated_testing/tools",
          id: "testing/automated_testing/tools",
          title: "Tools",
          description:
            "In order to create efficient tests, one need a set of different tools, typically",
          source: "@site/docs/testing/automated_testing/tools.md",
          sourceDirName: "testing/automated_testing",
          slug: "/testing/automated_testing/tools",
          permalink: "/docs/testing/automated_testing/tools",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Testing HTML",
            permalink: "/docs/testing/automated_testing/testing_html",
          },
          next: {
            title: "Types of Tests",
            permalink: "/docs/testing/automated_testing/types_of_tests",
          },
        },
        c = {},
        u = [
          { value: "Utilities", id: "utilities", level: 2 },
          { value: "Mocks", id: "mocks", level: 3 },
          { value: "Spies", id: "spies", level: 3 },
          { value: "Stub", id: "stub", level: 3 },
        ],
        m = { toc: u };
      function p(t) {
        var e = t.components,
          i = (0, o.Z)(t, a);
        return (0, s.kt)(
          "wrapper",
          (0, n.Z)({}, m, i, { components: e, mdxType: "MDXLayout" }),
          (0, s.kt)("h1", { id: "tools" }, "Tools"),
          (0, s.kt)(
            "p",
            null,
            "In order to create efficient tests, one need a set of different tools, typically\nincluding:"
          ),
          (0, s.kt)(
            "ul",
            null,
            (0, s.kt)(
              "li",
              { parentName: "ul" },
              (0, s.kt)("strong", { parentName: "li" }, "Test runner"),
              " (e.g. jest, mocha, pytest) is a program responsible for\nfinding tests and executing them."
            ),
            (0, s.kt)(
              "li",
              { parentName: "ul" },
              (0, s.kt)("strong", { parentName: "li" }, "Assertion library"),
              " (e.g. chai) is a library with assertions."
            ),
            (0, s.kt)(
              "li",
              { parentName: "ul" },
              (0, s.kt)("strong", { parentName: "li" }, "Mock framework"),
              " (e.g. sinon) is framework for mocking, stubbing and spying."
            )
          ),
          (0, s.kt)("h2", { id: "utilities" }, "Utilities"),
          (0, s.kt)(
            "p",
            null,
            "To facilitate testing one commonly employs different tools. Here are a few\ncommon ones."
          ),
          (0, s.kt)("h3", { id: "mocks" }, "Mocks"),
          (0, s.kt)(
            "p",
            null,
            "A mock is a replacement for a function or object where the details of its\nimplementation typically can be decided during runtime. The mock will also\nrecord all calls on it allowing for direct test assertions on the mock."
          ),
          (0, s.kt)("h3", { id: "spies" }, "Spies"),
          (0, s.kt)(
            "p",
            null,
            "One can spy on an object or function to how it is called but without altering\nits implementation."
          ),
          (0, s.kt)("h3", { id: "stub" }, "Stub"),
          (0, s.kt)(
            "p",
            null,
            "An object with predefined responses, which is in contrast to a mock that is\nconfigured during runtime. They usually do not respond to calls that do not\nmatch predefined responses."
          )
        );
      }
      p.isMDXComponent = !0;
    },
  },
]);
