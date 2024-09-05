"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [8174],
  {
    8607: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => g,
          contentTitle: () => p,
          default: () => c,
          frontMatter: () => o,
          metadata: () => l,
          toc: () => m,
        });
      var a = n(7462),
        r = n(3366),
        s = (n(7294), n(3905)),
        i = (n(828), ["components"]),
        o = {},
        p = "Type systems",
        l = {
          unversionedId: "programming/typing",
          id: "programming/typing",
          title: "Type systems",
          description:
            "A programming language can be either strongly typed where type errors are",
          source: "@site/docs/programming/typing.md",
          sourceDirName: "programming",
          slug: "/programming/typing",
          permalink: "/docs/programming/typing",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Text encoding",
            permalink: "/docs/programming/text_encoding",
          },
          next: {
            title: "Kanban",
            permalink: "/docs/project-management/kanban",
          },
        },
        g = {},
        m = [
          {
            value: "Weakly typed languages",
            id: "weakly-typed-languages",
            level: 2,
          },
        ],
        d = { toc: m };
      function c(e) {
        var t = e.components,
          n = (0, r.Z)(e, i);
        return (0, s.kt)(
          "wrapper",
          (0, a.Z)({}, d, n, { components: t, mdxType: "MDXLayout" }),
          (0, s.kt)("h1", { id: "type-systems" }, "Type systems"),
          (0, s.kt)(
            "p",
            null,
            "A programming language can be either strongly typed where type errors are\ninferred during compile time (see\n",
            (0, s.kt)(
              "a",
              {
                parentName: "p",
                href: "/docs/development/static_code_analysis",
              },
              "linting"
            ),
            ") or weakly typed and said\nerrors are inferred at runtime."
          ),
          (0, s.kt)(
            "h2",
            { id: "weakly-typed-languages" },
            "Weakly typed languages"
          ),
          (0, s.kt)(
            "p",
            null,
            "In a weakly typed language, typing is dynamic. When using operations, variables\ncan be casted. Examples of weakly typed languages are JavaScript and Python."
          ),
          (0, s.kt)("p", null, "Type coherence allows for"),
          (0, s.kt)(
            "pre",
            null,
            (0, s.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'const text = "my-text";\nif (text) {\n  console.log(text);\n}\n'
            )
          ),
          (0, s.kt)(
            "p",
            null,
            "where ",
            (0, s.kt)("inlineCode", { parentName: "p" }, "text"),
            " is used as a boolean in the if statement. This works because it is\nautomatically casted."
          ),
          (0, s.kt)(
            "p",
            null,
            "This type coherence behaves very interestingly in JavaScript where it is enabled\nin equality assertions and most basic operations."
          ),
          (0, s.kt)(
            "pre",
            null,
            (0, s.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              'false == 0; // true\n+[] + []; // "0"\n'
            )
          )
        );
      }
      c.isMDXComponent = !0;
    },
  },
]);
