"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [5229],
  {
    7890: (n, t, e) => {
      e.r(t),
        e.d(t, {
          assets: () => l,
          contentTitle: () => m,
          default: () => g,
          frontMatter: () => s,
          metadata: () => p,
          toc: () => c,
        });
      var o = e(7462),
        a = e(3366),
        r = (e(7294), e(3905)),
        i = (e(828), ["components"]),
        s = {},
        m = "Strings",
        p = {
          unversionedId: "programming/strings",
          id: "programming/strings",
          title: "Strings",
          description:
            "A string is a list of characters and is a basic building block found in most",
          source: "@site/docs/programming/strings.md",
          sourceDirName: "programming",
          slug: "/programming/strings",
          permalink: "/docs/programming/strings",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Standard streams",
            permalink: "/docs/programming/standard-streams",
          },
          next: {
            title: "Text encoding",
            permalink: "/docs/programming/text_encoding",
          },
        },
        l = {},
        c = [
          { value: "Common operations", id: "common-operations", level: 2 },
          { value: "Concatenation", id: "concatenation", level: 3 },
          { value: "Interpolation", id: "interpolation", level: 3 },
        ],
        d = { toc: c };
      function g(n) {
        var t = n.components,
          e = (0, a.Z)(n, i);
        return (0, r.kt)(
          "wrapper",
          (0, o.Z)({}, d, e, { components: t, mdxType: "MDXLayout" }),
          (0, r.kt)("h1", { id: "strings" }, "Strings"),
          (0, r.kt)(
            "p",
            null,
            "A ",
            (0, r.kt)("strong", { parentName: "p" }, "string"),
            " is a list of characters and is a basic building block found in most\nlanguages. Strings are typically considered a primitive type and is immutable.\nHow the strings are stored in memory depend on what\n",
            (0, r.kt)(
              "a",
              { parentName: "p", href: "/docs/programming/text_encoding" },
              "text encoding"
            ),
            " is used."
          ),
          (0, r.kt)("h2", { id: "common-operations" }, "Common operations"),
          (0, r.kt)("p", null, "Here are some common string operations:"),
          (0, r.kt)("h3", { id: "concatenation" }, "Concatenation"),
          (0, r.kt)(
            "p",
            null,
            "One can perform several operations on strings. For example; concatenation, which\nis"
          ),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-python" },
              "'hey' + 'there'\n"
            )
          ),
          (0, r.kt)("h3", { id: "interpolation" }, "Interpolation"),
          (0, r.kt)("p", null, "Interpolation is"),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-python" },
              "f'hey {name}'\n"
            )
          )
        );
      }
      g.isMDXComponent = !0;
    },
  },
]);
