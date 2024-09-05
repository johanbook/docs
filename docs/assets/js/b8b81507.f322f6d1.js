"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [5519],
  {
    2025: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => d,
          contentTitle: () => s,
          default: () => g,
          frontMatter: () => p,
          metadata: () => c,
          toc: () => m,
        });
      var n = r(7462),
        a = r(3366),
        i = (r(7294), r(3905)),
        o = (r(828), ["components"]),
        p = {},
        s = "Event driven architecture",
        c = {
          unversionedId: "programming/patterns/eda",
          id: "programming/patterns/eda",
          title: "Event driven architecture",
          description:
            "An event driven architecture (EDA) is an approach to weak coupling by",
          source: "@site/docs/programming/patterns/eda.md",
          sourceDirName: "programming/patterns",
          slug: "/programming/patterns/eda",
          permalink: "/docs/programming/patterns/eda",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Dependency injection",
            permalink: "/docs/programming/patterns/dependency_injection",
          },
          next: {
            title: "Facade",
            permalink: "/docs/programming/patterns/facade",
          },
        },
        d = {},
        m = [],
        u = { toc: m };
      function g(e) {
        var t = e.components,
          r = (0, a.Z)(e, o);
        return (0, i.kt)(
          "wrapper",
          (0, n.Z)({}, u, r, { components: t, mdxType: "MDXLayout" }),
          (0, i.kt)(
            "h1",
            { id: "event-driven-architecture" },
            "Event driven architecture"
          ),
          (0, i.kt)(
            "p",
            null,
            "An ",
            (0, i.kt)(
              "strong",
              { parentName: "p" },
              "event driven architecture"
            ),
            " (",
            (0, i.kt)("strong", { parentName: "p" }, "EDA"),
            ") is an approach to weak coupling by\nthe use of events. Common for microservices. Is building on the\n",
            (0, i.kt)(
              "a",
              { parentName: "p", href: "/docs/programming/patterns/pubsub" },
              "Pub/Sub pattern"
            ),
            "."
          )
        );
      }
      g.isMDXComponent = !0;
    },
  },
]);
