"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [9078],
  {
    1793: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => u,
          contentTitle: () => l,
          default: () => p,
          frontMatter: () => o,
          metadata: () => c,
          toc: () => d,
        });
      var s = r(7462),
        n = r(3366),
        a = (r(7294), r(3905)),
        i = (r(828), ["components"]),
        o = {},
        l = "Requirements analysis",
        c = {
          unversionedId: "architecture/requirements_analysis",
          id: "architecture/requirements_analysis",
          title: "Requirements analysis",
          description:
            "Requirements analysis is the process of gathering and requiring requirements",
          source: "@site/docs/architecture/requirements_analysis.md",
          sourceDirName: "architecture",
          slug: "/architecture/requirements_analysis",
          permalink: "/docs/architecture/requirements_analysis",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Microservices architecture",
            permalink: "/docs/architecture/micro_services",
          },
          next: {
            title: "Types of software",
            permalink: "/docs/architecture/types",
          },
        },
        u = {},
        d = [
          { value: "Best practices", id: "best-practices", level: 2 },
          { value: "Stakeholders", id: "stakeholders", level: 2 },
        ],
        m = { toc: d };
      function p(e) {
        var t = e.components,
          r = (0, n.Z)(e, i);
        return (0, a.kt)(
          "wrapper",
          (0, s.Z)({}, m, r, { components: t, mdxType: "MDXLayout" }),
          (0, a.kt)(
            "h1",
            { id: "requirements-analysis" },
            "Requirements analysis"
          ),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)("strong", { parentName: "p" }, "Requirements analysis"),
            " is the process of gathering and requiring requirements\nfor a software system. It is vital before and during the process of building the\nsystem. It is part of the requirements engineering process and takes place after\nthe requirements have been elicited."
          ),
          (0, a.kt)(
            "p",
            null,
            "Requirements can be divided into functional and non-functional. Functional\nrequirement are typically explicitly covered by users stores while the\nnon-functional ones tend to be implicit. Examples of non-functional requirements\nare security and performance concerns. Requirements should be categorized using\nthe\n",
            (0, a.kt)(
              "a",
              {
                parentName: "p",
                href: "https://iso25000.com/index.php/en/iso-25000-standards/iso-25010",
              },
              "ISO/IEC 25010"
            ),
            "\nstandard."
          ),
          (0, a.kt)("h2", { id: "best-practices" }, "Best practices"),
          (0, a.kt)(
            "p",
            null,
            "Break requirements into smaller requirements and number them so that each have a\nunique ID."
          ),
          (0, a.kt)("h2", { id: "stakeholders" }, "Stakeholders"),
          (0, a.kt)("p", null, "There are following types of stakeholders:"),
          (0, a.kt)(
            "ul",
            null,
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)("strong", { parentName: "li" }, "Direct stakeholders"),
              " directly impacted by the system."
            ),
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)(
                "strong",
                { parentName: "li" },
                "Indirect stakeholders"
              ),
              " need to be aware of the system and its development.\nFor example, external partners."
            )
          )
        );
      }
      p.isMDXComponent = !0;
    },
  },
]);
