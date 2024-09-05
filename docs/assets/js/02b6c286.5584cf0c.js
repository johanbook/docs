"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [6409],
  {
    3228: (t, e, n) => {
      n.r(e),
        n.d(e, {
          assets: () => m,
          contentTitle: () => u,
          default: () => c,
          frontMatter: () => r,
          metadata: () => l,
          toc: () => d,
        });
      var a = n(7462),
        s = n(3366),
        o = (n(7294), n(3905)),
        i = (n(828), ["components"]),
        r = {},
        u = "Automated testing",
        l = {
          unversionedId: "testing/automated_testing/README",
          id: "testing/automated_testing/README",
          title: "Automated testing",
          description:
            "Automated testing is a testing approach where one uses automated tests,",
          source: "@site/docs/testing/automated_testing/README.md",
          sourceDirName: "testing/automated_testing",
          slug: "/testing/automated_testing/",
          permalink: "/docs/testing/automated_testing/",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "Testing", permalink: "/docs/testing/" },
          next: {
            title: "Coverage",
            permalink: "/docs/testing/automated_testing/coverage",
          },
        },
        m = {},
        d = [
          {
            value: "The anatomy of a test",
            id: "the-anatomy-of-a-test",
            level: 2,
          },
        ],
        p = { toc: d };
      function c(t) {
        var e = t.components,
          n = (0, s.Z)(t, i);
        return (0, o.kt)(
          "wrapper",
          (0, a.Z)({}, p, n, { components: e, mdxType: "MDXLayout" }),
          (0, o.kt)("h1", { id: "automated-testing" }, "Automated testing"),
          (0, o.kt)(
            "p",
            null,
            (0, o.kt)("strong", { parentName: "p" }, "Automated testing"),
            " is a testing approach where one uses automated tests,\ntypically by writing bespoke tests as part of the source code. Automated tests\nare a typically a form of ",
            (0, o.kt)(
              "a",
              { parentName: "p", href: "/docs/testing/#white-box-testing" },
              "white-box testing"
            ),
            "."
          ),
          (0, o.kt)(
            "h2",
            { id: "the-anatomy-of-a-test" },
            "The anatomy of a test"
          ),
          (0, o.kt)(
            "p",
            null,
            "The anatomy of an automated test can be broken down into the following stages:"
          ),
          (0, o.kt)(
            "ol",
            null,
            (0, o.kt)("li", { parentName: "ol" }, "Setup"),
            (0, o.kt)("li", { parentName: "ol" }, "Arrange"),
            (0, o.kt)("li", { parentName: "ol" }, "Interaction"),
            (0, o.kt)("li", { parentName: "ol" }, "Assertions"),
            (0, o.kt)("li", { parentName: "ol" }, "Teardown")
          ),
          (0, o.kt)("p", null, "An example of this structure is shown below."),
          (0, o.kt)(
            "pre",
            null,
            (0, o.kt)(
              "code",
              { parentName: "pre", className: "language-py" },
              "def test_my_function_returns_numbers():\n  # Setup\n  my_function = maybe_function_reference\n\n  # Interaction\n  value = my_function(1)\n\n  # Assertions\n  assert type(value) is int\n  assert value == 2\n"
            )
          )
        );
      }
      c.isMDXComponent = !0;
    },
  },
]);
