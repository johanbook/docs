"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [6144],
  {
    2462: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => d,
          contentTitle: () => l,
          default: () => g,
          frontMatter: () => r,
          metadata: () => p,
          toc: () => c,
        });
      var i = t(7462),
        s = t(3366),
        o = (t(7294), t(3905)),
        a = (t(828), ["components"]),
        r = {},
        l = "SOLID",
        p = {
          unversionedId: "programming/patterns/solid",
          id: "programming/patterns/solid",
          title: "SOLID",
          description:
            "SOLID is a set of principles to help attaining clean code. The first",
          source: "@site/docs/programming/patterns/solid.md",
          sourceDirName: "programming/patterns",
          slug: "/programming/patterns/solid",
          permalink: "/docs/programming/patterns/solid",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Singleton",
            permalink: "/docs/programming/patterns/singleton",
          },
          next: {
            title: "Single Responsibility Principle",
            permalink: "/docs/programming/patterns/srp",
          },
        },
        d = {},
        c = [
          {
            value: "Open / closed principle",
            id: "open--closed-principle",
            level: 2,
          },
          {
            value: "Liskov substitution principle",
            id: "liskov-substitution-principle",
            level: 2,
          },
          {
            value: "Interface Segregation Principle",
            id: "interface-segregation-principle",
            level: 2,
          },
          {
            value: "Dependency Inversion Principle",
            id: "dependency-inversion-principle",
            level: 2,
          },
          {
            value: "Cohesion and coupling",
            id: "cohesion-and-coupling",
            level: 2,
          },
        ],
        h = { toc: c };
      function g(e) {
        var n = e.components,
          t = (0, s.Z)(e, a);
        return (0, o.kt)(
          "wrapper",
          (0, i.Z)({}, h, t, { components: n, mdxType: "MDXLayout" }),
          (0, o.kt)("h1", { id: "solid" }, "SOLID"),
          (0, o.kt)(
            "p",
            null,
            (0, o.kt)("strong", { parentName: "p" }, "SOLID"),
            " is a set of principles to help attaining clean code. The first\nprinciple is ",
            (0, o.kt)(
              "a",
              { parentName: "p", href: "/docs/programming/patterns/srp" },
              "the single responsibility"
            ),
            ". The remaining principles are\ndescribed in this document."
          ),
          (0, o.kt)(
            "h2",
            { id: "open--closed-principle" },
            "Open / closed principle"
          ),
          (0, o.kt)(
            "p",
            null,
            "The ",
            (0, o.kt)("strong", { parentName: "p" }, "open / closed principle"),
            " (",
            (0, o.kt)("strong", { parentName: "p" }, "OCP"),
            ") states that modules should be open for\nextension but closed for modification. One can see this as that one should not\nneed to modify the source code of a module when extending it. One example of how\nto accomplish this is the strategy pattern."
          ),
          (0, o.kt)(
            "h2",
            { id: "liskov-substitution-principle" },
            "Liskov substitution principle"
          ),
          (0, o.kt)(
            "p",
            null,
            "The ",
            (0, o.kt)(
              "strong",
              { parentName: "p" },
              "Liskov substitution principle"
            ),
            " (",
            (0, o.kt)("strong", { parentName: "p" }, "LSP"),
            ") states that a subclass should be\nsubstitutable for the classes they were derived from. A classic example of this\nis trying to model a square as deriving from a rectangle - it makes sense in the\nreal world but not in a program. For instance see the rectangle class below:"
          ),
          (0, o.kt)(
            "pre",
            null,
            (0, o.kt)(
              "code",
              { parentName: "pre", className: "language-ts" },
              "class Rectangle {\n  height: number;\n  width: number;\n\n  setHeight(height: number): void {\n    this.height = height;\n  }\n\n  setWidth(width: number): void {\n    this.width = width;\n  }\n}\n"
            )
          ),
          (0, o.kt)(
            "p",
            null,
            "If we derive a square class from the rectangle one as done below, we end up some\noddities when setting width and height."
          ),
          (0, o.kt)(
            "pre",
            null,
            (0, o.kt)(
              "code",
              { parentName: "pre", className: "language-ts" },
              "class Square extends Rectangle {\n  setHeight(height: number): void {\n    this.height = height;\n    this.width = height;\n  }\n\n  setWidth(width: number): void {\n    this.height = width;\n    this.width = width;\n  }\n}\n"
            )
          ),
          (0, o.kt)(
            "h2",
            { id: "interface-segregation-principle" },
            "Interface Segregation Principle"
          ),
          (0, o.kt)(
            "p",
            null,
            "The ",
            (0, o.kt)(
              "strong",
              { parentName: "p" },
              "Interface Segregation Principle"
            ),
            " (",
            (0, o.kt)("strong", { parentName: "p" }, "ISP"),
            ") is about that implementations\nshould not need to implements parts of interfaces that do not make sense for\nthem. For example, consider the following interface:"
          ),
          (0, o.kt)(
            "pre",
            null,
            (0, o.kt)(
              "code",
              { parentName: "pre", className: "language-ts" },
              "interface Bird {\n  eat(): void;\n  fly(): void;\n}\n"
            )
          ),
          (0, o.kt)(
            "p",
            null,
            "If we implement this interface for a bird that cannot fly, this will leave one\nmethod with an unexpected result, such as"
          ),
          (0, o.kt)(
            "pre",
            null,
            (0, o.kt)(
              "code",
              { parentName: "pre", className: "language-ts" },
              'class Ostrich implements Bird {\n  eat() {\n    /* ... */\n  }\n  fly() {\n    throw new Error("Bird cannot fly");\n  }\n}\n'
            )
          ),
          (0, o.kt)(
            "p",
            null,
            "To come around this, interfaces should have a single responsibilty and kept as\nsmall as possible."
          ),
          (0, o.kt)(
            "h2",
            { id: "dependency-inversion-principle" },
            "Dependency Inversion Principle"
          ),
          (0, o.kt)(
            "p",
            null,
            "The ",
            (0, o.kt)(
              "strong",
              { parentName: "p" },
              "dependency inversion principle"
            ),
            " (",
            (0, o.kt)("strong", { parentName: "p" }, "DIP"),
            ") states that high-level modules\nshould not depend on low-level modules but instead should rely on abstractions.\nThe abstractions should not depend on details. This allows for easier testing\nand helps SRP. This promotes ",
            (0, o.kt)(
              "a",
              {
                parentName: "p",
                href: "/docs/programming/patterns/dependency_injection",
              },
              "dependency injection"
            ),
            ".\nIt drives towards loose coupling."
          ),
          (0, o.kt)(
            "h2",
            { id: "cohesion-and-coupling" },
            "Cohesion and coupling"
          ),
          (0, o.kt)(
            "p",
            null,
            "One related concept is the one of cohesion and coupling. Cohesion means that\nfiles that are changed together are bundled together and coupling describes how\nthose modules are linked. This means that a system with high cohesion and low\ncoupling is easier to change compared to a system that does not have those\nproperties."
          )
        );
      }
      g.isMDXComponent = !0;
    },
  },
]);
