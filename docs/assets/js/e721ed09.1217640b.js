"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [9183],
  {
    8660: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => p,
          contentTitle: () => c,
          default: () => m,
          frontMatter: () => i,
          metadata: () => d,
          toc: () => u,
        });
      var s = r(7462),
        n = r(3366),
        o = (r(7294), r(3905)),
        a = (r(828), ["components"]),
        i = {},
        c = "CDN",
        d = {
          unversionedId: "devops/infrastructure/cdn",
          id: "devops/infrastructure/cdn",
          title: "CDN",
          description:
            "A Content Delivery Network (CDN) is a network for distributing static",
          source: "@site/docs/devops/infrastructure/cdn.md",
          sourceDirName: "devops/infrastructure",
          slug: "/devops/infrastructure/cdn",
          permalink: "/docs/devops/infrastructure/cdn",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Release models",
            permalink: "/docs/devops/deployment/release-models",
          },
          next: {
            title: "Service mesh",
            permalink: "/docs/devops/infrastructure/service-mesh",
          },
        },
        p = {},
        u = [{ value: "PoP", id: "pop", level: 2 }],
        l = { toc: u };
      function m(e) {
        var t = e.components,
          r = (0, n.Z)(e, a);
        return (0, o.kt)(
          "wrapper",
          (0, s.Z)({}, l, r, { components: t, mdxType: "MDXLayout" }),
          (0, o.kt)("h1", { id: "cdn" }, "CDN"),
          (0, o.kt)(
            "p",
            null,
            "A ",
            (0, o.kt)(
              "strong",
              { parentName: "p" },
              "Content Delivery Network"
            ),
            " (",
            (0, o.kt)("strong", { parentName: "p" }, "CDN"),
            ") is a network for distributing static\nfiles, such as for example the assets for a web application."
          ),
          (0, o.kt)("h2", { id: "pop" }, "PoP"),
          (0, o.kt)(
            "p",
            null,
            "One has origin servers and ",
            (0, o.kt)("strong", { parentName: "p" }, "Points of Presence"),
            " (",
            (0, o.kt)("strong", { parentName: "p" }, "PoP"),
            ") that are closer to\nthe target audience than the origin servers."
          )
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
