"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [1379],
  {
    1802: (t, e, n) => {
      n.r(e),
        n.d(e, {
          assets: () => l,
          contentTitle: () => p,
          default: () => g,
          frontMatter: () => i,
          metadata: () => d,
          toc: () => m,
        });
      var r = n(7462),
        a = n(3366),
        o = (n(7294), n(3905)),
        s = (n(828), ["components"]),
        i = {},
        p = "MVC",
        d = {
          unversionedId: "programming/patterns/mvc",
          id: "programming/patterns/mvc",
          title: "MVC",
          description:
            "Model View Controller (MVC) is a design pattern that separates an",
          source: "@site/docs/programming/patterns/mvc.md",
          sourceDirName: "programming/patterns",
          slug: "/programming/patterns/mvc",
          permalink: "/docs/programming/patterns/mvc",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Layered architecture",
            permalink: "/docs/programming/patterns/layered-architecture",
          },
          next: {
            title: "Prototype",
            permalink: "/docs/programming/patterns/prototype",
          },
        },
        l = {},
        m = [],
        c = { toc: m };
      function g(t) {
        var e = t.components,
          n = (0, a.Z)(t, s);
        return (0, o.kt)(
          "wrapper",
          (0, r.Z)({}, c, n, { components: e, mdxType: "MDXLayout" }),
          (0, o.kt)("h1", { id: "mvc" }, "MVC"),
          (0, o.kt)(
            "p",
            null,
            (0, o.kt)("strong", { parentName: "p" }, "Model View Controller"),
            " (",
            (0, o.kt)("strong", { parentName: "p" }, "MVC"),
            ") is a design pattern that separates an\napplication into model, view and controller. The controller handles incoming\nuser events and interacts with the model. The model manipulates the data (and\nperforms business logic) and trigger events in the view. This means that both\nthe controller and view are dependent on the model. This did not fully account\nfor e.g. handling databases etc."
          ),
          (0, o.kt)("p", null, "MVC is intended for a fullstack application.")
        );
      }
      g.isMDXComponent = !0;
    },
  },
]);
