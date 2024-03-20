"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [4902],
  {
    5568: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => c,
          contentTitle: () => s,
          default: () => u,
          frontMatter: () => n,
          metadata: () => l,
          toc: () => d,
        });
      var o = r(7462),
        i = r(3366),
        g = (r(7294), r(3905)),
        a = (r(828), ["components"]),
        n = {},
        s = "Logging architecture",
        l = {
          unversionedId: "devops/monitoring/logging/architecture",
          id: "devops/monitoring/logging/architecture",
          title: "Logging architecture",
          description:
            "Logging architecture is typically tightly integrated into the infrastructure",
          source: "@site/docs/devops/monitoring/logging/architecture.md",
          sourceDirName: "devops/monitoring/logging",
          slug: "/devops/monitoring/logging/architecture",
          permalink: "/docs/devops/monitoring/logging/architecture",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Logging",
            permalink: "/docs/devops/monitoring/logging/",
          },
          next: {
            title: "Log levels",
            permalink: "/docs/devops/monitoring/logging/log-levels",
          },
        },
        c = {},
        d = [
          { value: "Log aggregator", id: "log-aggregator", level: 2 },
          { value: "Visualizer", id: "visualizer", level: 2 },
          { value: "Scraper", id: "scraper", level: 2 },
        ],
        p = { toc: d };
      function u(e) {
        var t = e.components,
          r = (0, i.Z)(e, a);
        return (0, g.kt)(
          "wrapper",
          (0, o.Z)({}, p, r, { components: t, mdxType: "MDXLayout" }),
          (0, g.kt)(
            "h1",
            { id: "logging-architecture" },
            "Logging architecture"
          ),
          (0, g.kt)(
            "p",
            null,
            (0, g.kt)("strong", { parentName: "p" }, "Logging architecture"),
            " is typically tightly integrated into the infrastructure\nof a software system. However, here we will discuss some general components."
          ),
          (0, g.kt)("h2", { id: "log-aggregator" }, "Log aggregator"),
          (0, g.kt)(
            "p",
            null,
            "The log aggregator consolidates, indexes and stores logs. It typically receives\nlogs from multiple different input streams. The log aggregator often uses a time\nseries database."
          ),
          (0, g.kt)("h2", { id: "visualizer" }, "Visualizer"),
          (0, g.kt)(
            "p",
            null,
            "The visualizer is a UI for querying logs from the aggregator. They typically\nsupports some form of bespoke query language for the log aggregator."
          ),
          (0, g.kt)("h2", { id: "scraper" }, "Scraper"),
          (0, g.kt)(
            "p",
            null,
            "The scraper is responsible for transmitting logs from the application to the log\naggregator. How this is done depends on the underlying system. In a\n",
            (0, g.kt)(
              "a",
              { parentName: "p", href: "/docs/devops/containerization/docker" },
              "Docker"
            ),
            " microservice architecture one\ntypically logs to ",
            (0, g.kt)(
              "a",
              { parentName: "p", href: "/docs/programming/standard-streams" },
              "stdout and stderr"
            ),
            "\nwhich is captured and forwarded to the aggregator by a Docker plugin."
          )
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
