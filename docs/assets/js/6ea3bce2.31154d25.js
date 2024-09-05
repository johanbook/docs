"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [6204],
  {
    5922: (o, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => m,
          contentTitle: () => p,
          default: () => l,
          frontMatter: () => a,
          metadata: () => d,
          toc: () => c,
        });
      var e = n(7462),
        i = n(3366),
        r = (n(7294), n(3905)),
        s = (n(828), ["components"]),
        a = {},
        p = "Monitoring",
        d = {
          unversionedId: "devops/monitoring/README",
          id: "devops/monitoring/README",
          title: "Monitoring",
          description:
            "Monitoring is monitoring the performance and state of an application in all",
          source: "@site/docs/devops/monitoring/README.md",
          sourceDirName: "devops/monitoring",
          slug: "/devops/monitoring/",
          permalink: "/docs/devops/monitoring/",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Service mesh",
            permalink: "/docs/devops/infrastructure/service-mesh",
          },
          next: {
            title: "Logging",
            permalink: "/docs/devops/monitoring/logging/",
          },
        },
        m = {},
        c = [{ value: "MELT", id: "melt", level: 2 }],
        g = { toc: c };
      function l(o) {
        var t = o.components,
          n = (0, i.Z)(o, s);
        return (0, r.kt)(
          "wrapper",
          (0, e.Z)({}, g, n, { components: t, mdxType: "MDXLayout" }),
          (0, r.kt)("h1", { id: "monitoring" }, "Monitoring"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("strong", { parentName: "p" }, "Monitoring"),
            " is monitoring the performance and state of an application in all\nof its software phases, from development to production."
          ),
          (0, r.kt)("h2", { id: "melt" }, "MELT"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("strong", { parentName: "p" }, "MELT"),
            " is a monitoring concept that stands for ",
            (0, r.kt)(
              "a",
              { parentName: "p", href: "/docs/devops/monitoring/metrics" },
              "metrics"
            ),
            ",\nevents, ",
            (0, r.kt)(
              "a",
              { parentName: "p", href: "/docs/devops/monitoring/logging/" },
              "logs"
            ),
            " and ",
            (0, r.kt)(
              "a",
              { parentName: "p", href: "/docs/devops/monitoring/tracing" },
              "traces"
            ),
            "."
          )
        );
      }
      l.isMDXComponent = !0;
    },
  },
]);
