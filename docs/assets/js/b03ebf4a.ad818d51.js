"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [22],
  {
    8893: (t, e, s) => {
      s.r(e),
        s.d(e, {
          assets: () => u,
          contentTitle: () => d,
          default: () => m,
          frontMatter: () => r,
          metadata: () => l,
          toc: () => p,
        });
      var n = s(7462),
        o = s(3366),
        a = (s(7294), s(3905)),
        i = (s(828), ["components"]),
        r = {},
        d = "Types of Tests",
        l = {
          unversionedId: "testing/automated_testing/types_of_tests",
          id: "testing/automated_testing/types_of_tests",
          title: "Types of Tests",
          description:
            "Tests can be divided into several different categories.",
          source: "@site/docs/testing/automated_testing/types_of_tests.md",
          sourceDirName: "testing/automated_testing",
          slug: "/testing/automated_testing/types_of_tests",
          permalink: "/docs/testing/automated_testing/types_of_tests",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Tools",
            permalink: "/docs/testing/automated_testing/tools",
          },
          next: {
            title: "Types of tests",
            permalink: "/docs/testing/types-of-tests",
          },
        },
        u = {},
        p = [
          { value: "Unit Tests", id: "unit-tests", level: 2 },
          { value: "End-To-End Tests", id: "end-to-end-tests", level: 2 },
          { value: "Integration Tests", id: "integration-tests", level: 2 },
        ],
        c = { toc: p };
      function m(t) {
        var e = t.components,
          s = (0, o.Z)(t, i);
        return (0, a.kt)(
          "wrapper",
          (0, n.Z)({}, c, s, { components: e, mdxType: "MDXLayout" }),
          (0, a.kt)("h1", { id: "types-of-tests" }, "Types of Tests"),
          (0, a.kt)(
            "p",
            null,
            "Tests can be divided into several different categories."
          ),
          (0, a.kt)("h2", { id: "unit-tests" }, "Unit Tests"),
          (0, a.kt)(
            "p",
            null,
            "A ",
            (0, a.kt)("strong", { parentName: "p" }, "unit test"),
            " is an automated test that tests a single piece of functionality\nof an object and nothing more. Unit tests should be fast and any time-consuming\nor external processes are typically mocked. You typically end up with many unit\ntests but as long as tests are useful, then the more the better."
          ),
          (0, a.kt)(
            "p",
            null,
            "Unit-tests should be idempotent and have a cyclomatic complexity of 1."
          ),
          (0, a.kt)("h2", { id: "end-to-end-tests" }, "End-To-End Tests"),
          (0, a.kt)(
            "p",
            null,
            "An ",
            (0, a.kt)("strong", { parentName: "p" }, "end-to-end"),
            " test (or ",
            (0, a.kt)("strong", { parentName: "p" }, "e2e"),
            " test for short) tests a system the exact same\nway an end user would interact with it. For example, if the service consists of\na stack with a frontend UI one needs to spin up a scripted browser and run tests\nfrom there."
          ),
          (0, a.kt)("h2", { id: "integration-tests" }, "Integration Tests"),
          (0, a.kt)(
            "p",
            null,
            "An ",
            (0, a.kt)("strong", { parentName: "p" }, "integration tests"),
            " how several components interact. In contrast to a unit\ntest, you can test a longer user flow that would be unsuitable for a unit test.\nSuch a flow could for example be to register a user, confirm email and check\nthat login works. The different between integration tests and end-to-end tests\nis that integration tests do not require spinning up the whole system and one\ncan use mocks."
          )
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
