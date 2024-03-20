"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [361],
  {
    4617: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => u,
          contentTitle: () => c,
          default: () => f,
          frontMatter: () => o,
          metadata: () => l,
          toc: () => p,
        });
      var s = r(7462),
        a = r(3366),
        n = (r(7294), r(3905)),
        i = (r(828), ["components"]),
        o = {},
        c = "Types of software",
        l = {
          unversionedId: "architecture/types",
          id: "architecture/types",
          title: "Types of software",
          description:
            "There are different categories of software systems which will aflected in",
          source: "@site/docs/architecture/types.md",
          sourceDirName: "architecture",
          slug: "/architecture/types",
          permalink: "/docs/architecture/types",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Requirements analysis",
            permalink: "/docs/architecture/requirements_analysis",
          },
          next: { title: "Graphs", permalink: "/docs/data_structures/graphs" },
        },
        u = {},
        p = [],
        m = { toc: p };
      function f(e) {
        var t = e.components,
          r = (0, a.Z)(e, i);
        return (0, n.kt)(
          "wrapper",
          (0, s.Z)({}, m, r, { components: t, mdxType: "MDXLayout" }),
          (0, n.kt)("h1", { id: "types-of-software" }, "Types of software"),
          (0, n.kt)(
            "p",
            null,
            "There are different ",
            (0, n.kt)("strong", { parentName: "p" }, "categories"),
            " of software systems which will aflected in\nthe functional and non-functional\n",
            (0, n.kt)(
              "a",
              {
                parentName: "p",
                href: "/docs/architecture/requirements_analysis",
              },
              "system requirements"
            ),
            ". Some examples of categories\nare the following:"
          ),
          (0, n.kt)(
            "ul",
            null,
            (0, n.kt)(
              "li",
              { parentName: "ul" },
              (0, n.kt)("strong", { parentName: "li" }, "Enterprise"),
              " which often are very complex and a vast number of features.\nResponse times and scalability might not be a concern."
            ),
            (0, n.kt)(
              "li",
              { parentName: "ul" },
              (0, n.kt)("strong", { parentName: "li" }, "Public"),
              " often has scalability and high availability but might not be as\ncomplex."
            ),
            (0, n.kt)(
              "li",
              { parentName: "ul" },
              (0, n.kt)("strong", { parentName: "li" }, "Scientific"),
              " focuses on correctness and robustness. Number of features might\nbe small and response times might be less prioritized."
            )
          )
        );
      }
      f.isMDXComponent = !0;
    },
  },
]);
