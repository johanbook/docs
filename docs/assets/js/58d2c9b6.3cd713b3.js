"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [3139],
  {
    2677: (t, e, s) => {
      s.r(e),
        s.d(e, {
          assets: () => d,
          contentTitle: () => p,
          default: () => g,
          frontMatter: () => i,
          metadata: () => l,
          toc: () => c,
        });
      var n = s(7462),
        a = s(3366),
        o = (s(7294), s(3905)),
        r = (s(828), ["components"]),
        i = {},
        p = "Types of tests",
        l = {
          unversionedId: "testing/types-of-tests",
          id: "testing/types-of-tests",
          title: "Types of tests",
          description: "There are multiple types of tests.",
          source: "@site/docs/testing/types-of-tests.md",
          sourceDirName: "testing",
          slug: "/testing/types-of-tests",
          permalink: "/docs/testing/types-of-tests",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Types of Tests",
            permalink: "/docs/testing/automated_testing/types_of_tests",
          },
          next: { title: "Daemon", permalink: "/docs/unix/daemon" },
        },
        d = {},
        c = [
          { value: "Performance testing", id: "performance-testing", level: 2 },
          { value: "Load testing", id: "load-testing", level: 3 },
          { value: "Soak testing", id: "soak-testing", level: 3 },
          { value: "Stress testing", id: "stress-testing", level: 3 },
          { value: "Security testing", id: "security-testing", level: 2 },
          {
            value: "User acceptance test",
            id: "user-acceptance-test",
            level: 2,
          },
        ],
        u = { toc: c };
      function g(t) {
        var e = t.components,
          s = (0, a.Z)(t, r);
        return (0, o.kt)(
          "wrapper",
          (0, n.Z)({}, u, s, { components: e, mdxType: "MDXLayout" }),
          (0, o.kt)("h1", { id: "types-of-tests" }, "Types of tests"),
          (0, o.kt)("p", null, "There are multiple types of tests."),
          (0, o.kt)("h2", { id: "performance-testing" }, "Performance testing"),
          (0, o.kt)(
            "p",
            null,
            "A ",
            (0, o.kt)("strong", { parentName: "p" }, "performance test"),
            " is to test how a software system behaves under different\nworkloads."
          ),
          (0, o.kt)("h3", { id: "load-testing" }, "Load testing"),
          (0, o.kt)(
            "p",
            null,
            "A ",
            (0, o.kt)("strong", { parentName: "p" }, "load test"),
            " test a software system under a normal load."
          ),
          (0, o.kt)("h3", { id: "soak-testing" }, "Soak testing"),
          (0, o.kt)(
            "p",
            null,
            "A ",
            (0, o.kt)("strong", { parentName: "p" }, "soak test"),
            " tests if a software system can handle a load for a longer period\nof time."
          ),
          (0, o.kt)("h3", { id: "stress-testing" }, "Stress testing"),
          (0, o.kt)(
            "p",
            null,
            "A ",
            (0, o.kt)("strong", { parentName: "p" }, "stress test"),
            " puts a high burden on the system to see how it is handled."
          ),
          (0, o.kt)("h2", { id: "security-testing" }, "Security testing"),
          (0, o.kt)(
            "p",
            null,
            "A ",
            (0, o.kt)("strong", { parentName: "p" }, "security test"),
            " is a test that attempts to find attack vectors of a software\nsystem."
          ),
          (0, o.kt)(
            "h2",
            { id: "user-acceptance-test" },
            "User acceptance test"
          ),
          (0, o.kt)(
            "p",
            null,
            "A ",
            (0, o.kt)("strong", { parentName: "p" }, "User acceptance test"),
            " (",
            (0, o.kt)("strong", { parentName: "p" }, "UAT"),
            ") is a test done by the end user to accept a\nsoftware system before moving it to a production environment."
          )
        );
      }
      g.isMDXComponent = !0;
    },
  },
]);
