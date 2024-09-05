"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [4823],
  {
    5226: (e, t, a) => {
      a.r(t),
        a.d(t, {
          assets: () => m,
          contentTitle: () => i,
          default: () => h,
          frontMatter: () => s,
          metadata: () => p,
          toc: () => c,
        });
      var o = a(7462),
        n = a(3366),
        l = (a(7294), a(3905)),
        r = (a(828), ["components"]),
        s = {},
        i = "Waterfall",
        p = {
          unversionedId: "project-management/methodologies/waterfall",
          id: "project-management/methodologies/waterfall",
          title: "Waterfall",
          description:
            "Waterfall is the traditional project methodology for developing software. It",
          source: "@site/docs/project-management/methodologies/waterfall.md",
          sourceDirName: "project-management/methodologies",
          slug: "/project-management/methodologies/waterfall",
          permalink: "/docs/project-management/methodologies/waterfall",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Retrospective",
            permalink:
              "/docs/project-management/methodologies/scrum/retrospective",
          },
          next: { title: "OKR", permalink: "/docs/project-management/okr" },
        },
        m = {},
        c = [
          { value: "Phases", id: "phases", level: 2 },
          { value: "Planning", id: "planning", level: 3 },
          { value: "Building", id: "building", level: 3 },
          { value: "Testing", id: "testing", level: 3 },
          { value: "Release", id: "release", level: 3 },
        ],
        d = { toc: c };
      function h(e) {
        var t = e.components,
          a = (0, n.Z)(e, r);
        return (0, l.kt)(
          "wrapper",
          (0, o.Z)({}, d, a, { components: t, mdxType: "MDXLayout" }),
          (0, l.kt)("h1", { id: "waterfall" }, "Waterfall"),
          (0, l.kt)(
            "p",
            null,
            (0, l.kt)("strong", { parentName: "p" }, "Waterfall"),
            " is the traditional project methodology for developing software. It\nis suitable for projects where the requirements are not subject to change.\nOtherwise, an agile approach, such as ",
            (0, l.kt)(
              "a",
              {
                parentName: "p",
                href: "/docs/project-management/methodologies/scrum/",
              },
              "Scrum"
            ),
            ", is more\nsuitable."
          ),
          (0, l.kt)("h2", { id: "phases" }, "Phases"),
          (0, l.kt)(
            "p",
            null,
            "Each phase can take for example 3-6 months, which is in contrast to\ne.g.",
            (0, l.kt)(
              "a",
              {
                parentName: "p",
                href: "/docs/project-management/methodologies/scrum/",
              },
              "Scrum"
            ),
            " where one phase (iteration) should not be longer\nthan a month."
          ),
          (0, l.kt)("h3", { id: "planning" }, "Planning"),
          (0, l.kt)("p", null, "The project is planned."),
          (0, l.kt)("h3", { id: "building" }, "Building"),
          (0, l.kt)("p", null, "The project is built."),
          (0, l.kt)("h3", { id: "testing" }, "Testing"),
          (0, l.kt)("p", null, "The project is tested."),
          (0, l.kt)("h3", { id: "release" }, "Release"),
          (0, l.kt)("p", null, "The project is released.")
        );
      }
      h.isMDXComponent = !0;
    },
  },
]);
