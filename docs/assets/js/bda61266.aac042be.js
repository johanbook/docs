"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [6795],
  {
    9962: (e, t, o) => {
      o.r(t),
        o.d(t, {
          assets: () => d,
          contentTitle: () => r,
          default: () => k,
          frontMatter: () => l,
          metadata: () => p,
          toc: () => c,
        });
      var a = o(7462),
        n = o(3366),
        s = (o(7294), o(3905)),
        i = (o(828), ["components"]),
        l = {},
        r = "Feedback loop",
        p = {
          unversionedId: "development/feedback_loop",
          id: "development/feedback_loop",
          title: "Feedback loop",
          description:
            "The feedback loop is the time it takes from making a change to a software",
          source: "@site/docs/development/feedback_loop.md",
          sourceDirName: "development",
          slug: "/development/feedback_loop",
          permalink: "/docs/development/feedback_loop",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Debugging",
            permalink: "/docs/development/debugging",
          },
          next: {
            title: "Package manager",
            permalink: "/docs/development/package_manager",
          },
        },
        d = {},
        c = [],
        m = { toc: c };
      function k(e) {
        var t = e.components,
          o = (0, n.Z)(e, i);
        return (0, s.kt)(
          "wrapper",
          (0, a.Z)({}, m, o, { components: t, mdxType: "MDXLayout" }),
          (0, s.kt)("h1", { id: "feedback-loop" }, "Feedback loop"),
          (0, s.kt)(
            "p",
            null,
            "The ",
            (0, s.kt)("strong", { parentName: "p" }, "feedback loop"),
            " is the time it takes from making a change to a software\nuntil the change can be evaluated. It is important having a short feedback loop\nduring development. With a too long feedback loop developers might lose focus.\nThings that create short feedback loops are:"
          ),
          (0, s.kt)(
            "ul",
            null,
            (0, s.kt)(
              "li",
              { parentName: "ul" },
              (0, s.kt)("strong", { parentName: "li" }, "Fast tests"),
              " Expensive operations should be mocked. If testing expensive\noperations they should have their own test suit that can run in a remote\n",
              (0, s.kt)(
                "a",
                { parentName: "li", href: "../devops/ci_cd" },
                "CI/CD"
              ),
              " pipeline."
            ),
            (0, s.kt)(
              "li",
              { parentName: "ul" },
              (0, s.kt)("strong", { parentName: "li" }, "Interactive tests"),
              " Developers should be able to run a test watchdog and be\nable to single out tests. This should preferable be integrated on an IDE\nlevel."
            ),
            (0, s.kt)(
              "li",
              { parentName: "ul" },
              (0, s.kt)("strong", { parentName: "li" }, "Isolated services"),
              " If developing in the microservice paradigm, it is\ncrucial that services can run in isolation for development and interaction. It\nshould not be needed to spin up a whole stack."
            )
          )
        );
      }
      k.isMDXComponent = !0;
    },
  },
]);
