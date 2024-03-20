"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [4789],
  {
    9989: (a, t, s) => {
      s.r(t),
        s.d(t, {
          assets: () => u,
          contentTitle: () => d,
          default: () => h,
          frontMatter: () => r,
          metadata: () => l,
          toc: () => c,
        });
      var e = s(7462),
        o = s(3366),
        i = (s(7294), s(3905)),
        n = (s(828), ["components"]),
        r = {},
        d = "Dashboards",
        l = {
          unversionedId: "ux/dashboarding",
          id: "ux/dashboarding",
          title: "Dashboards",
          description:
            "A Dashboard is a GUI that displays various data visualizations. As a rule of",
          source: "@site/docs/ux/dashboarding.md",
          sourceDirName: "ux",
          slug: "/ux/dashboarding",
          permalink: "/docs/ux/dashboarding",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "Components", permalink: "/docs/ux/components" },
          next: { title: "Design system", permalink: "/docs/ux/design_system" },
        },
        u = {},
        c = [
          { value: "Strategic", id: "strategic", level: 2 },
          { value: "Operational", id: "operational", level: 2 },
          { value: "Analytical", id: "analytical", level: 2 },
        ],
        p = { toc: c };
      function h(a) {
        var t = a.components,
          s = (0, o.Z)(a, n);
        return (0, i.kt)(
          "wrapper",
          (0, e.Z)({}, p, s, { components: t, mdxType: "MDXLayout" }),
          (0, i.kt)("h1", { id: "dashboards" }, "Dashboards"),
          (0, i.kt)(
            "p",
            null,
            "A ",
            (0, i.kt)("strong", { parentName: "p" }, "Dashboard"),
            " is a GUI that displays various data visualizations. As a rule of\nthumb, dashboards can be divided into categories."
          ),
          (0, i.kt)("h2", { id: "strategic" }, "Strategic"),
          (0, i.kt)(
            "p",
            null,
            "Strategic dashboard shows KPIs and quick numbers. Should be fast and easy to\nread. Would be of interest to C-level."
          ),
          (0, i.kt)("h2", { id: "operational" }, "Operational"),
          (0, i.kt)(
            "p",
            null,
            "Operational dashboard shows supporting information. Has more detailed graphs.\nWould be interesting to managers."
          ),
          (0, i.kt)("h2", { id: "analytical" }, "Analytical"),
          (0, i.kt)(
            "p",
            null,
            "Analytical dashboards allows users to perform EDAs and very granular analysis.\nWould be interesting to specialists."
          )
        );
      }
      h.isMDXComponent = !0;
    },
  },
]);
