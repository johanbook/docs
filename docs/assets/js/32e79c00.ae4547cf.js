"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [6696],
  {
    1661: (n, t, e) => {
      e.r(t),
        e.d(t, {
          assets: () => g,
          contentTitle: () => l,
          default: () => u,
          frontMatter: () => s,
          metadata: () => p,
          toc: () => c,
        });
      var r = e(7462),
        o = e(3366),
        a = (e(7294), e(3905)),
        i = (e(828), ["components"]),
        s = {},
        l = "Singleton",
        p = {
          unversionedId: "programming/patterns/singleton",
          id: "programming/patterns/singleton",
          title: "Singleton",
          description:
            "Singleton is a creational design pattern where there should only exist one",
          source: "@site/docs/programming/patterns/singleton.md",
          sourceDirName: "programming/patterns",
          slug: "/programming/patterns/singleton",
          permalink: "/docs/programming/patterns/singleton",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Pub/Sub",
            permalink: "/docs/programming/patterns/pubsub",
          },
          next: {
            title: "SOLID",
            permalink: "/docs/programming/patterns/solid",
          },
        },
        g = {},
        c = [],
        m = { toc: c };
      function u(n) {
        var t = n.components,
          e = (0, o.Z)(n, i);
        return (0, a.kt)(
          "wrapper",
          (0, r.Z)({}, m, e, { components: t, mdxType: "MDXLayout" }),
          (0, a.kt)("h1", { id: "singleton" }, "Singleton"),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)("strong", { parentName: "p" }, "Singleton"),
            " is a creational design pattern where there should only exist one\nglobal instance of an entity. One common usage is for application settings."
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-ts" },
              "public class Singleton {\n  private static Singleton instance = new Singleton();\n\n  private Singleton() {}\n\n  private Singleton getInstance() {\n    return instance;\n  }\n}\n"
            )
          )
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
