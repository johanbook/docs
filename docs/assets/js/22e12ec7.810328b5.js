"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [5077],
  {
    1329: (t, e, n) => {
      n.r(e),
        n.d(e, {
          assets: () => c,
          contentTitle: () => l,
          default: () => u,
          frontMatter: () => r,
          metadata: () => g,
          toc: () => d,
        });
      var s = n(7462),
        i = n(3366),
        a = (n(7294), n(3905)),
        o = (n(828), ["components"]),
        r = {},
        l = "Testing",
        g = {
          unversionedId: "testing/README",
          id: "testing/README",
          title: "Testing",
          description:
            "Testing, or dynamic testing to be precise, is done to confirm that",
          source: "@site/docs/testing/README.md",
          sourceDirName: "testing",
          slug: "/testing/",
          permalink: "/docs/testing/",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "XML External Entity",
            permalink: "/docs/security/vulnerabilities/xxe",
          },
          next: {
            title: "Automated testing",
            permalink: "/docs/testing/automated_testing/",
          },
        },
        c = {},
        d = [
          { value: "Manual testing", id: "manual-testing", level: 2 },
          { value: "White-box testing", id: "white-box-testing", level: 3 },
          { value: "Black-box testing", id: "black-box-testing", level: 3 },
        ],
        p = { toc: d };
      function u(t) {
        var e = t.components,
          n = (0, i.Z)(t, o);
        return (0, a.kt)(
          "wrapper",
          (0, s.Z)({}, p, n, { components: e, mdxType: "MDXLayout" }),
          (0, a.kt)("h1", { id: "testing" }, "Testing"),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)("strong", { parentName: "p" }, "Testing"),
            ", or ",
            (0, a.kt)("strong", { parentName: "p" }, "dynamic testing"),
            " to be precise, is done to confirm that\nsoftware behaves as intended. This can be done by writing\n",
            (0, a.kt)(
              "a",
              { parentName: "p", href: "/docs/testing/automated_testing/" },
              "automated tests"
            ),
            " or by writing and executing\nmanual tests cases. This is contrast to\n",
            (0, a.kt)(
              "a",
              {
                parentName: "p",
                href: "/docs/development/static_code_analysis",
              },
              "static code analysis"
            ),
            " which can be done\nwithout running the program itself."
          ),
          (0, a.kt)("h2", { id: "manual-testing" }, "Manual testing"),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)("strong", { parentName: "p" }, "Manual testing"),
            " is typically when a tester writes and executes test cases.\nThis can be either black-box or white-box testing."
          ),
          (0, a.kt)("h3", { id: "white-box-testing" }, "White-box testing"),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)("strong", { parentName: "p" }, "White-box testing"),
            ", also known as ",
            (0, a.kt)("strong", { parentName: "p" }, "structural testing"),
            ", when one tests a\nsystem with knowledge of its internal workings."
          ),
          (0, a.kt)("h3", { id: "black-box-testing" }, "Black-box testing"),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)("strong", { parentName: "p" }, "Black-box testing"),
            ",also known as ",
            (0, a.kt)("strong", { parentName: "p" }, "functional testing"),
            ", is when one tests a\nsystem with no prior knowledge of its internal workings."
          )
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
