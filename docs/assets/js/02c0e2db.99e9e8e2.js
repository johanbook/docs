"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [7917],
  {
    4209: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => g,
          contentTitle: () => c,
          default: () => l,
          frontMatter: () => s,
          metadata: () => d,
          toc: () => m,
        });
      var i = t(7462),
        r = t(3366),
        a = (t(7294), t(3905)),
        o = (t(828), ["components"]),
        s = {},
        c = "Text encoding",
        d = {
          unversionedId: "programming/text_encoding",
          id: "programming/text_encoding",
          title: "Text encoding",
          description:
            "A text encoding is an approach to storing text (strings) in",
          source: "@site/docs/programming/text_encoding.md",
          sourceDirName: "programming",
          slug: "/programming/text_encoding",
          permalink: "/docs/programming/text_encoding",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Strings",
            permalink: "/docs/programming/strings",
          },
          next: {
            title: "Type systems",
            permalink: "/docs/programming/typing",
          },
        },
        g = {},
        m = [
          { value: "ASCII", id: "ascii", level: 2 },
          { value: "Unicode", id: "unicode", level: 2 },
        ],
        p = { toc: m };
      function l(e) {
        var n = e.components,
          t = (0, r.Z)(e, o);
        return (0, a.kt)(
          "wrapper",
          (0, i.Z)({}, p, t, { components: n, mdxType: "MDXLayout" }),
          (0, a.kt)("h1", { id: "text-encoding" }, "Text encoding"),
          (0, a.kt)(
            "p",
            null,
            "A ",
            (0, a.kt)("strong", { parentName: "p" }, "text encoding"),
            " is an approach to storing text (",
            (0, a.kt)(
              "a",
              { parentName: "p", href: "/docs/programming/strings" },
              "strings"
            ),
            ") in\nmemory."
          ),
          (0, a.kt)("h2", { id: "ascii" }, "ASCII"),
          (0, a.kt)(
            "p",
            null,
            "The American Standard Code for Information Interchange (ASCII) is a character\nencoding standard using seven bits per character. For example, the word ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "ascii"),
            "\nwould be encoded as"
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "Decimal: 97 115 99 105 105\nHexadecimal: 61 73 63 69 69\nBinary: 01100001 01110011 01100011 01101001 01101001\n"
            )
          ),
          (0, a.kt)("h2", { id: "unicode" }, "Unicode"),
          (0, a.kt)(
            "p",
            null,
            "Unicode is an encoding standard that uses variable byte lengths. Common\ncharacters are encoded in fewer bytes."
          )
        );
      }
      l.isMDXComponent = !0;
    },
  },
]);
