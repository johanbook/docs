"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [5728],
  {
    1896: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => d,
          contentTitle: () => o,
          default: () => f,
          frontMatter: () => c,
          metadata: () => u,
          toc: () => l,
        });
      var i = n(7462),
        s = n(3366),
        r = (n(7294), n(3905)),
        a = (n(828), ["components"]),
        c = {},
        o = "User Training",
        u = {
          unversionedId: "security/defense/training",
          id: "security/defense/training",
          title: "User Training",
          description:
            "An important part of defensive security is to educating users of a system. That",
          source: "@site/docs/security/defense/training.md",
          sourceDirName: "security/defense",
          slug: "/security/defense/training",
          permalink: "/docs/security/defense/training",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Security By Design",
            permalink: "/docs/security/defense/security_by_design",
          },
          next: {
            title: "Zero trust networking",
            permalink: "/docs/security/defense/ztn",
          },
        },
        d = {},
        l = [],
        p = { toc: l };
      function f(e) {
        var t = e.components,
          n = (0, s.Z)(e, a);
        return (0, r.kt)(
          "wrapper",
          (0, i.Z)({}, p, n, { components: t, mdxType: "MDXLayout" }),
          (0, r.kt)("h1", { id: "user-training" }, "User Training"),
          (0, r.kt)(
            "p",
            null,
            "An important part of defensive security is to educating users of a system. That\nincludes making them aware of"
          ),
          (0, r.kt)(
            "ul",
            null,
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)(
                "a",
                { parentName: "li", href: "/docs/security/attacks/phishing" },
                "phishing attempts"
              ),
              ". For example, teach users to\nalways check URLs before clicking them."
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              "recognize ",
              (0, r.kt)(
                "a",
                { parentName: "li", href: "/docs/security/social_engineering" },
                "social engineering"
              )
            )
          )
        );
      }
      f.isMDXComponent = !0;
    },
  },
]);
