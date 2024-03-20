"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [7795],
  {
    6593: (t, e, s) => {
      s.r(e),
        s.d(e, {
          assets: () => p,
          contentTitle: () => g,
          default: () => l,
          frontMatter: () => r,
          metadata: () => d,
          toc: () => m,
        });
      var n = s(7462),
        i = s(3366),
        a = (s(7294), s(3905)),
        o = (s(828), ["components"]),
        r = {},
        g = "Testing HTML",
        d = {
          unversionedId: "testing/automated_testing/testing_html",
          id: "testing/automated_testing/testing_html",
          title: "Testing HTML",
          description:
            "Testing web applications is tricky since they are based in",
          source: "@site/docs/testing/automated_testing/testing_html.md",
          sourceDirName: "testing/automated_testing",
          slug: "/testing/automated_testing/testing_html",
          permalink: "/docs/testing/automated_testing/testing_html",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Snapshotting",
            permalink: "/docs/testing/automated_testing/snapshots",
          },
          next: {
            title: "Tools",
            permalink: "/docs/testing/automated_testing/tools",
          },
        },
        p = {},
        m = [],
        c = { toc: m };
      function l(t) {
        var e = t.components,
          s = (0, i.Z)(t, o);
        return (0, a.kt)(
          "wrapper",
          (0, n.Z)({}, c, s, { components: e, mdxType: "MDXLayout" }),
          (0, a.kt)("h1", { id: "testing-html" }, "Testing HTML"),
          (0, a.kt)(
            "p",
            null,
            "Testing web applications is tricky since they are based in\n",
            (0, a.kt)(
              "a",
              { parentName: "p", href: "/docs/programming/data_formats/html" },
              "HTML"
            ),
            " (testing GUI is general\ndifficult). One approach to this is DOM-testing, in where one renders a DOM and\nruns assertions against it. In order to have fast tests one want to avoid\nrunning them inside a browser - even if it's headless."
          ),
          (0, a.kt)(
            "p",
            null,
            "One approach to testing HTML is ",
            (0, a.kt)(
              "a",
              {
                parentName: "p",
                href: "/docs/testing/automated_testing/snapshots",
              },
              "snapshotting"
            ),
            "."
          )
        );
      }
      l.isMDXComponent = !0;
    },
  },
]);
