"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [3970],
  {
    783: (e, t, o) => {
      o.r(t),
        o.d(t, {
          assets: () => m,
          contentTitle: () => l,
          default: () => c,
          frontMatter: () => r,
          metadata: () => g,
          toc: () => p,
        });
      var n = o(7462),
        i = o(3366),
        s = (o(7294), o(3905)),
        a = (o(828), ["components"]),
        r = {},
        l = "Log levels",
        g = {
          unversionedId: "devops/monitoring/logging/log-levels",
          id: "devops/monitoring/logging/log-levels",
          title: "Log levels",
          description:
            "Log levels are used to categorize logs. The established log",
          source: "@site/docs/devops/monitoring/logging/log-levels.md",
          sourceDirName: "devops/monitoring/logging",
          slug: "/devops/monitoring/logging/log-levels",
          permalink: "/docs/devops/monitoring/logging/log-levels",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Logging architecture",
            permalink: "/docs/devops/monitoring/logging/architecture",
          },
          next: {
            title: "Sensitive data",
            permalink: "/docs/devops/monitoring/logging/sensitive-data",
          },
        },
        m = {},
        p = [],
        d = { toc: p };
      function c(e) {
        var t = e.components,
          o = (0, i.Z)(e, a);
        return (0, s.kt)(
          "wrapper",
          (0, n.Z)({}, d, o, { components: t, mdxType: "MDXLayout" }),
          (0, s.kt)("h1", { id: "log-levels" }, "Log levels"),
          (0, s.kt)(
            "p",
            null,
            (0, s.kt)("strong", { parentName: "p" }, "Log levels"),
            " are used to categorize ",
            (0, s.kt)(
              "a",
              { parentName: "p", href: "/docs/devops/monitoring/logging/" },
              "logs"
            ),
            ". The established log\nlevels are:"
          ),
          (0, s.kt)(
            "ul",
            null,
            (0, s.kt)(
              "li",
              { parentName: "ul" },
              (0, s.kt)("strong", { parentName: "li" }, "Trace"),
              " is common events, used for tracing the code. See\n",
              (0, s.kt)(
                "a",
                { parentName: "li", href: "/docs/devops/monitoring/tracing" },
                "tracing"
              ),
              "."
            ),
            (0, s.kt)(
              "li",
              { parentName: "ul" },
              (0, s.kt)("strong", { parentName: "li" }, "Debug"),
              " is information that potentially could be useful when debugging the\nsystem. For example diagnostic information."
            ),
            (0, s.kt)(
              "li",
              { parentName: "ul" },
              (0, s.kt)("strong", { parentName: "li" }, "Info"),
              " is valuable information, such as the progress of the application."
            ),
            (0, s.kt)(
              "li",
              { parentName: "ul" },
              (0, s.kt)("strong", { parentName: "li" }, "Warn"),
              " is someting that might be an issue but is not a problem for the\nsystem."
            ),
            (0, s.kt)(
              "li",
              { parentName: "ul" },
              (0, s.kt)("strong", { parentName: "li" }, "Error"),
              " is a specific system functinality that does not work. Should be\ninvestigated but not neccesarily right away."
            ),
            (0, s.kt)(
              "li",
              { parentName: "ul" },
              (0, s.kt)("strong", { parentName: "li" }, "Fatal / Critical"),
              " is a major error that prevents the system from working.\nShould be investigated as soon as possible."
            )
          ),
          (0, s.kt)(
            "p",
            null,
            "Trace and debug is often something that is activated on demand."
          )
        );
      }
      c.isMDXComponent = !0;
    },
  },
]);
