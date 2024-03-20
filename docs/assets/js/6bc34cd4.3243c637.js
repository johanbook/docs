"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [4693],
  {
    9549: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => u,
          contentTitle: () => l,
          default: () => y,
          frontMatter: () => o,
          metadata: () => c,
          toc: () => d,
        });
      var s = n(7462),
        i = n(3366),
        r = (n(7294), n(3905)),
        a = (n(828), ["components"]),
        o = {},
        l = "Security By Design",
        c = {
          unversionedId: "security/defense/security_by_design",
          id: "security/defense/security_by_design",
          title: "Security By Design",
          description:
            "Security by design is a mindset in software engineering. Some examples of",
          source: "@site/docs/security/defense/security_by_design.md",
          sourceDirName: "security/defense",
          slug: "/security/defense/security_by_design",
          permalink: "/docs/security/defense/security_by_design",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Multi-factor authentication",
            permalink: "/docs/security/defense/mfa",
          },
          next: {
            title: "User Training",
            permalink: "/docs/security/defense/training",
          },
        },
        u = {},
        d = [],
        p = { toc: d };
      function y(e) {
        var t = e.components,
          n = (0, i.Z)(e, a);
        return (0, r.kt)(
          "wrapper",
          (0, s.Z)({}, p, n, { components: t, mdxType: "MDXLayout" }),
          (0, r.kt)("h1", { id: "security-by-design" }, "Security By Design"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("strong", { parentName: "p" }, "Security by design"),
            " is a mindset in software engineering. Some examples of\nprinciples are the following:"
          ),
          (0, r.kt)(
            "ul",
            null,
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)(
                "strong",
                { parentName: "li" },
                "Principle of least privilege"
              ),
              " A system component should not have access to\nmore than what it needs."
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "Avoid complexity"),
              " Makes systems harder to analyze."
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "Isolate and separate"),
              " parts of the system."
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "Design for change")
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "Fault tolerance"),
              " being able to continue working even though errors and\nongoing attacks. This also implies that there should be no single point of\nfailure."
            )
          )
        );
      }
      y.isMDXComponent = !0;
    },
  },
]);
