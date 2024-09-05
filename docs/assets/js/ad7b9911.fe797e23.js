"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [1852],
  {
    4043: (t, e, a) => {
      a.r(e),
        a.d(e, {
          assets: () => m,
          contentTitle: () => l,
          default: () => c,
          frontMatter: () => o,
          metadata: () => p,
          toc: () => d,
        });
      var n = a(7462),
        r = a(3366),
        i = (a(7294), a(3905)),
        s = (a(828), ["components"]),
        o = {},
        l = "HTML",
        p = {
          unversionedId: "programming/data_formats/html",
          id: "programming/data_formats/html",
          title: "HTML",
          description:
            "HyperText Markup Language (HTML) is an XML based language for",
          source: "@site/docs/programming/data_formats/html.md",
          sourceDirName: "programming/data_formats",
          slug: "/programming/data_formats/html",
          permalink: "/docs/programming/data_formats/html",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "GML",
            permalink: "/docs/programming/data_formats/gml",
          },
          next: {
            title: "JSON",
            permalink: "/docs/programming/data_formats/json",
          },
        },
        m = {},
        d = [
          { value: "Script tag", id: "script-tag", level: 2 },
          { value: "Style tag", id: "style-tag", level: 2 },
        ],
        g = { toc: d };
      function c(t) {
        var e = t.components,
          a = (0, r.Z)(t, s);
        return (0, i.kt)(
          "wrapper",
          (0, n.Z)({}, g, a, { components: e, mdxType: "MDXLayout" }),
          (0, i.kt)("h1", { id: "html" }, "HTML"),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)(
              "strong",
              { parentName: "p" },
              "HyperText Markup Language"
            ),
            " (",
            (0, i.kt)("strong", { parentName: "p" }, "HTML"),
            ") is an ",
            (0, i.kt)("a", { parentName: "p", href: "./xml" }, "XML"),
            " based language for\nrepresenting documents. It is used to render websites in the browser. An example\nis shown below"
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-html" },
              "<!DOCTYPE html>\n<html>\n  <head>\n    <title>My Title</title>\n  </head>\n  <body>\n    <h1>My Heading</h1>\n    <p>My paragraph.</p>\n  </body>\n</html>\n"
            )
          ),
          (0, i.kt)("h2", { id: "script-tag" }, "Script tag"),
          (0, i.kt)(
            "p",
            null,
            "The ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "<script>"),
            " tag can be used for executing JavaScript as part of a document.\nIt can either be fetched as an external file\n",
            (0, i.kt)(
              "inlineCode",
              { parentName: "p" },
              '<script src="javascript.js"></script>'
            ),
            " or as inline"
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-html" },
              '<script>\n  const text = "my-log";\n  console.log(text);\n</script>\n'
            )
          ),
          (0, i.kt)("h2", { id: "style-tag" }, "Style tag"),
          (0, i.kt)(
            "p",
            null,
            "The ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "<style>"),
            " tag can be used for adding CSS in a document. Similar to the\n",
            (0, i.kt)("inlineCode", { parentName: "p" }, "<script>"),
            " tag it can be fetched as an external file or written inline."
          )
        );
      }
      c.isMDXComponent = !0;
    },
  },
]);
