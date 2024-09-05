"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [5144],
  {
    6943: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => d,
          contentTitle: () => s,
          default: () => g,
          frontMatter: () => c,
          metadata: () => p,
          toc: () => l,
        });
      var i = t(7462),
        r = t(3366),
        a = (t(7294), t(3905)),
        o = (t(828), ["components"]),
        c = {},
        s = "Dependency injection",
        p = {
          unversionedId: "programming/patterns/dependency_injection",
          id: "programming/patterns/dependency_injection",
          title: "Dependency injection",
          description:
            "Dependency injection (DI) is a pattern where an entity gets its",
          source: "@site/docs/programming/patterns/dependency_injection.md",
          sourceDirName: "programming/patterns",
          slug: "/programming/patterns/dependency_injection",
          permalink: "/docs/programming/patterns/dependency_injection",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "CQRS",
            permalink: "/docs/programming/patterns/cqsr",
          },
          next: {
            title: "Event driven architecture",
            permalink: "/docs/programming/patterns/eda",
          },
        },
        d = {},
        l = [{ value: "IoC containers", id: "ioc-containers", level: 2 }],
        m = { toc: l };
      function g(e) {
        var n = e.components,
          t = (0, r.Z)(e, o);
        return (0, a.kt)(
          "wrapper",
          (0, i.Z)({}, m, t, { components: n, mdxType: "MDXLayout" }),
          (0, a.kt)(
            "h1",
            { id: "dependency-injection" },
            "Dependency injection"
          ),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)("strong", { parentName: "p" }, "Dependency injection"),
            " (",
            (0, a.kt)("strong", { parentName: "p" }, "DI"),
            ") is a pattern where an entity gets its\ndependencies injected, typically via a function call. This helps with inversion\nof control."
          ),
          (0, a.kt)("p", null, "One relies on the concepts of"),
          (0, a.kt)(
            "ul",
            null,
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)("strong", { parentName: "li" }, "Interface"),
              " An interface is a contract of what API an entity should expose."
            ),
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)("strong", { parentName: "li" }, "Services"),
              " A service consumes dependencies by declaring what interfaces the\ndependencies should fulfill."
            ),
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)("strong", { parentName: "li" }, "Injectors"),
              " An injection is an entity responsible for creating and injection\nthe dependencies needed by a service."
            )
          ),
          (0, a.kt)("h2", { id: "ioc-containers" }, "IoC containers"),
          (0, a.kt)(
            "p",
            null,
            "An ",
            (0, a.kt)(
              "strong",
              { parentName: "p" },
              "Inversion of Control container"
            ),
            ", or an ",
            (0, a.kt)("strong", { parentName: "p" }, "IoC container"),
            ", is a framework\nfor implementing dependency injection. This can either be done fully\nautomatically, e.g. by scanning the program assembly or done manually be in-code\nconfiguration or through external XML/JSON configuration. The latter is not type\nsafe, but allows for changing injected dependencies without recompiling the\nprogram."
          )
        );
      }
      g.isMDXComponent = !0;
    },
  },
]);
