"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [6951],
  {
    2021: (e, t, a) => {
      a.r(t),
        a.d(t, {
          assets: () => d,
          contentTitle: () => c,
          default: () => m,
          frontMatter: () => i,
          metadata: () => l,
          toc: () => h,
        });
      var n = a(7462),
        r = a(3366),
        o = (a(7294), a(3905)),
        s = (a(828), ["components"]),
        i = {},
        c = "C4",
        l = {
          unversionedId: "architecture/diagrams/c4",
          id: "architecture/diagrams/c4",
          title: "C4",
          description:
            "C4 is a standardized way of visualizing the workings of a software system.",
          source: "@site/docs/architecture/diagrams/c4.md",
          sourceDirName: "architecture/diagrams",
          slug: "/architecture/diagrams/c4",
          permalink: "/docs/architecture/diagrams/c4",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Adversarial attack",
            permalink: "/docs/ai/problems_with_ai/adversarial_attack",
          },
          next: { title: "UML", permalink: "/docs/architecture/diagrams/uml" },
        },
        d = {},
        h = [
          { value: "Context", id: "context", level: 2 },
          { value: "Containers", id: "containers", level: 2 },
          { value: "Component", id: "component", level: 2 },
          { value: "Code", id: "code", level: 2 },
        ],
        p = { toc: h };
      function m(e) {
        var t = e.components,
          a = (0, r.Z)(e, s);
        return (0, o.kt)(
          "wrapper",
          (0, n.Z)({}, p, a, { components: t, mdxType: "MDXLayout" }),
          (0, o.kt)("h1", { id: "c4" }, "C4"),
          (0, o.kt)(
            "p",
            null,
            (0, o.kt)("strong", { parentName: "p" }, "C4"),
            " is a standardized way of visualizing the workings of a software system.\nIt breaks the system down into four different levels of varying granularity. See\n",
            (0, o.kt)(
              "a",
              { parentName: "p", href: "https://c4model.com/" },
              "c4model.com"
            ),
            "."
          ),
          (0, o.kt)("h2", { id: "context" }, "Context"),
          (0, o.kt)(
            "p",
            null,
            "The highest level of granularity is the ",
            (0, o.kt)("strong", { parentName: "p" }, "context"),
            " level which illustrates how\nthe whole software system is used and fits into the real world."
          ),
          (0, o.kt)(
            "p",
            null,
            "The context diagram can be shown to non-technical people."
          ),
          (0, o.kt)("h2", { id: "containers" }, "Containers"),
          (0, o.kt)(
            "p",
            null,
            "The ",
            (0, o.kt)("strong", { parentName: "p" }, "container"),
            " level shows the running application and data store that built\nup the software system. Each container corresponds to a separate runnable /\ndeployable."
          ),
          (0, o.kt)(
            "p",
            null,
            "The container diragram also shows major technologies and communication protocols"
          ),
          (0, o.kt)("h2", { id: "component" }, "Component"),
          (0, o.kt)(
            "p",
            null,
            "The ",
            (0, o.kt)("strong", { parentName: "p" }, "component"),
            " level shows the largest abstract building blocks within a\ncontainer."
          ),
          (0, o.kt)("h2", { id: "code" }, "Code"),
          (0, o.kt)(
            "p",
            null,
            "A ",
            (0, o.kt)("strong", { parentName: "p" }, "code diagram"),
            " describes how the actual code works. It can be e.g. a\n",
            (0, o.kt)(
              "a",
              { parentName: "p", href: "/docs/architecture/diagrams/uml" },
              "UML diagram"
            ),
            ". These diagrams are often less important then the other\nlevels and should only be created when needed."
          )
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
