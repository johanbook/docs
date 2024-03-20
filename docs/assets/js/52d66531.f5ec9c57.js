"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [3905],
  {
    650: (e, t, o) => {
      o.r(t),
        o.d(t, {
          assets: () => p,
          contentTitle: () => d,
          default: () => u,
          frontMatter: () => l,
          metadata: () => i,
          toc: () => m,
        });
      var n = o(7462),
        s = o(3366),
        r = (o(7294), o(3905)),
        a = (o(828), ["components"]),
        l = {},
        d = "Release models",
        i = {
          unversionedId: "devops/deployment/release-models",
          id: "devops/deployment/release-models",
          title: "Release models",
          description:
            "There different release models for how a new release is rolled out. Some",
          source: "@site/docs/devops/deployment/release-models.md",
          sourceDirName: "devops/deployment",
          slug: "/devops/deployment/release-models",
          permalink: "/docs/devops/deployment/release-models",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Deployment",
            permalink: "/docs/devops/deployment/",
          },
          next: { title: "CDN", permalink: "/docs/devops/infrastructure/cdn" },
        },
        p = {},
        m = [],
        c = { toc: m };
      function u(e) {
        var t = e.components,
          o = (0, s.Z)(e, a);
        return (0, r.kt)(
          "wrapper",
          (0, n.Z)({}, c, o, { components: t, mdxType: "MDXLayout" }),
          (0, r.kt)("h1", { id: "release-models" }, "Release models"),
          (0, r.kt)(
            "p",
            null,
            "There different ",
            (0, r.kt)("strong", { parentName: "p" }, "release models"),
            " for how a new release is rolled out. Some\nexamples are the following:"
          ),
          (0, r.kt)(
            "ul",
            null,
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "Canary"),
              " is when the new deployment is only released to a fraction of one's\nuser base. If no errors are encountered, the fractions can be continuously\nincreased. If there are errors one can do a rollback. This is the safest\napproach."
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "Blue/Green"),
              " is when the new deployment is rolled out in parallel to the old\nand traffic is redirected as the new deployment becomes operational."
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "Rolling"),
              " is when servers are taken down sequentially and upgraded."
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "A/B"),
              " is similar to canary but more intended for design decisions."
            )
          )
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
