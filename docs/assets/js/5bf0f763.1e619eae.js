"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [3424],
  {
    4244: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => u,
          contentTitle: () => l,
          default: () => p,
          frontMatter: () => r,
          metadata: () => c,
          toc: () => m,
        });
      var s = n(7462),
        a = n(3366),
        o = (n(7294), n(3905)),
        i = (n(828), ["components"]),
        r = {},
        l = "Atomic design",
        c = {
          unversionedId: "ux/atomic_design",
          id: "ux/atomic_design",
          title: "Atomic design",
          description:
            "Atomic design is an approach to creating UI designs. It useful when building",
          source: "@site/docs/ux/atomic_design.md",
          sourceDirName: "ux",
          slug: "/ux/atomic_design",
          permalink: "/docs/ux/atomic_design",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "Users and groups", permalink: "/docs/unix/user" },
          next: { title: "Colors", permalink: "/docs/ux/colors/" },
        },
        u = {},
        m = [{ value: "Process", id: "process", level: 2 }],
        d = { toc: m };
      function p(e) {
        var t = e.components,
          n = (0, a.Z)(e, i);
        return (0, o.kt)(
          "wrapper",
          (0, s.Z)({}, d, n, { components: t, mdxType: "MDXLayout" }),
          (0, o.kt)("h1", { id: "atomic-design" }, "Atomic design"),
          (0, o.kt)(
            "p",
            null,
            (0, o.kt)("strong", { parentName: "p" }, "Atomic design"),
            " is an approach to creating UI designs. It useful when building\ne.g. component libraries."
          ),
          (0, o.kt)("p", null, "In atomic design, UIs consists of"),
          (0, o.kt)(
            "ul",
            null,
            (0, o.kt)(
              "li",
              { parentName: "ul" },
              (0, o.kt)("strong", { parentName: "li" }, "Atoms"),
              " is an element that cannot be broken down any further. Examples are\nlabels, buttons and check boxes."
            ),
            (0, o.kt)(
              "li",
              { parentName: "ul" },
              (0, o.kt)("strong", { parentName: "li" }, "Molecules"),
              " is reusable group of atoms. For example, molecule could be a\nsearch from."
            ),
            (0, o.kt)(
              "li",
              { parentName: "ul" },
              (0, o.kt)("strong", { parentName: "li" }, "Organisms"),
              " is multiple molecules."
            ),
            (0, o.kt)(
              "li",
              { parentName: "ul" },
              (0, o.kt)("strong", { parentName: "li" }, "Templates")
            ),
            (0, o.kt)(
              "li",
              { parentName: "ul" },
              (0, o.kt)("strong", { parentName: "li" }, "Pages")
            )
          ),
          (0, o.kt)("h2", { id: "process" }, "Process"),
          (0, o.kt)(
            "p",
            null,
            "Atomic design incorporates a dynamic process, meaning what earlier was seen as\nan atom can later be considered a molecule."
          )
        );
      }
      p.isMDXComponent = !0;
    },
  },
]);
