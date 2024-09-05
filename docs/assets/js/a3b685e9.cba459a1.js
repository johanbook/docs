"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [6266],
  {
    5773: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => g,
          contentTitle: () => p,
          default: () => h,
          frontMatter: () => o,
          metadata: () => l,
          toc: () => c,
        });
      var i = n(7462),
        r = n(3366),
        s = (n(7294), n(3905)),
        a = (n(828), ["components"]),
        o = {},
        p = "Single Responsibility Principle",
        l = {
          unversionedId: "programming/patterns/srp",
          id: "programming/patterns/srp",
          title: "Single Responsibility Principle",
          description:
            "The Single Responsibility Principle (SRP) is a principle that states",
          source: "@site/docs/programming/patterns/srp.md",
          sourceDirName: "programming/patterns",
          slug: "/programming/patterns/srp",
          permalink: "/docs/programming/patterns/srp",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "SOLID",
            permalink: "/docs/programming/patterns/solid",
          },
          next: {
            title: "Unix principle",
            permalink: "/docs/programming/patterns/unix-principle",
          },
        },
        g = {},
        c = [{ value: "Flag arguments", id: "flag-arguments", level: 2 }],
        m = { toc: c };
      function h(e) {
        var t = e.components,
          n = (0, r.Z)(e, a);
        return (0, s.kt)(
          "wrapper",
          (0, i.Z)({}, m, n, { components: t, mdxType: "MDXLayout" }),
          (0, s.kt)(
            "h1",
            { id: "single-responsibility-principle" },
            "Single Responsibility Principle"
          ),
          (0, s.kt)(
            "p",
            null,
            "The ",
            (0, s.kt)(
              "strong",
              { parentName: "p" },
              "Single Responsibility Principle"
            ),
            " (",
            (0, s.kt)("strong", { parentName: "p" }, "SRP"),
            ") is a principle that states\nthat a module should only have one reason to change. This means that code with\nhigh cohesion should put together, or simply put, code that change together\nshould be together."
          ),
          (0, s.kt)(
            "p",
            null,
            "SRP helps creating clean code and enforces precise names and focused classes."
          ),
          (0, s.kt)(
            "p",
            null,
            "It is similar to the ",
            (0, s.kt)(
              "a",
              {
                parentName: "p",
                href: "/docs/programming/patterns/unix-principle",
              },
              "Unix principle"
            ),
            "."
          ),
          (0, s.kt)("h2", { id: "flag-arguments" }, "Flag arguments"),
          (0, s.kt)(
            "p",
            null,
            "A flag argument is a sign that a function does more than one thing. Then the\nsingle responsibility of this function should be to delegate the work to other\nfunctions."
          )
        );
      }
      h.isMDXComponent = !0;
    },
  },
]);
