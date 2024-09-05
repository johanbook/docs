"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [1807],
  {
    6630: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => p,
          contentTitle: () => c,
          default: () => l,
          frontMatter: () => a,
          metadata: () => d,
          toc: () => m,
        });
      var n = r(7462),
        o = r(3366),
        i = (r(7294), r(3905)),
        s = (r(828), ["components"]),
        a = {},
        c = "Tracing",
        d = {
          unversionedId: "devops/monitoring/tracing",
          id: "devops/monitoring/tracing",
          title: "Tracing",
          description:
            "Traces are request traces. It typically requires code instrumentation. This",
          source: "@site/docs/devops/monitoring/tracing.md",
          sourceDirName: "devops/monitoring",
          slug: "/devops/monitoring/tracing",
          permalink: "/docs/devops/monitoring/tracing",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Telemetry",
            permalink: "/docs/devops/monitoring/telemetry",
          },
          next: {
            title: "Orchestration",
            permalink: "/docs/devops/orchestration/",
          },
        },
        p = {},
        m = [],
        g = { toc: m };
      function l(e) {
        var t = e.components,
          r = (0, o.Z)(e, s);
        return (0, i.kt)(
          "wrapper",
          (0, n.Z)({}, g, r, { components: t, mdxType: "MDXLayout" }),
          (0, i.kt)("h1", { id: "tracing" }, "Tracing"),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)("strong", { parentName: "p" }, "Traces"),
            " are request traces. It typically requires code instrumentation. This\ncan either be done as part of ",
            (0, i.kt)(
              "a",
              { parentName: "p", href: "/docs/devops/monitoring/logging/" },
              "logging"
            ),
            " or be handled by a\ncompletely different system."
          )
        );
      }
      l.isMDXComponent = !0;
    },
  },
]);
