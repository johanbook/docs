"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [5622],
  {
    5409: (e, t, i) => {
      i.r(t),
        i.d(t, {
          assets: () => l,
          contentTitle: () => r,
          default: () => m,
          frontMatter: () => d,
          metadata: () => g,
          toc: () => p,
        });
      var n = i(7462),
        o = i(3366),
        s = (i(7294), i(3905)),
        a = (i(828), ["components"]),
        d = {},
        r = "Sensitive data",
        g = {
          unversionedId: "devops/monitoring/logging/sensitive-data",
          id: "devops/monitoring/logging/sensitive-data",
          title: "Sensitive data",
          description: "When logging sensitive data (for example GDPR data),",
          source: "@site/docs/devops/monitoring/logging/sensitive-data.md",
          sourceDirName: "devops/monitoring/logging",
          slug: "/devops/monitoring/logging/sensitive-data",
          permalink: "/docs/devops/monitoring/logging/sensitive-data",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Log levels",
            permalink: "/docs/devops/monitoring/logging/log-levels",
          },
          next: {
            title: "Metrics",
            permalink: "/docs/devops/monitoring/metrics",
          },
        },
        l = {},
        p = [],
        v = { toc: p };
      function m(e) {
        var t = e.components,
          i = (0, o.Z)(e, a);
        return (0, s.kt)(
          "wrapper",
          (0, n.Z)({}, v, i, { components: t, mdxType: "MDXLayout" }),
          (0, s.kt)("h1", { id: "sensitive-data" }, "Sensitive data"),
          (0, s.kt)(
            "p",
            null,
            "When logging sensitive data (for example ",
            (0, s.kt)(
              "a",
              { parentName: "p", href: "/docs/laws/gdpr" },
              "GDPR data"
            ),
            "),\nthe log itself become sensitive and the same regulations for the sensitive data\napplies. In general, one wants avoid do so."
          )
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
