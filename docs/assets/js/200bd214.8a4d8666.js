"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [8898],
  {
    3593: (a, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => d,
          contentTitle: () => i,
          default: () => g,
          frontMatter: () => m,
          metadata: () => p,
          toc: () => c,
        });
      var o = r(7462),
        e = r(3366),
        n = (r(7294), r(3905)),
        s = (r(828), ["components"]),
        m = {},
        i = "JSON",
        p = {
          unversionedId: "programming/data_formats/json",
          id: "programming/data_formats/json",
          title: "JSON",
          description:
            "JavaScript Object Notation (JSON) is a format for serialized data. As",
          source: "@site/docs/programming/data_formats/json.md",
          sourceDirName: "programming/data_formats",
          slug: "/programming/data_formats/json",
          permalink: "/docs/programming/data_formats/json",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "HTML",
            permalink: "/docs/programming/data_formats/html",
          },
          next: {
            title: "XML",
            permalink: "/docs/programming/data_formats/xml",
          },
        },
        d = {},
        c = [],
        l = { toc: c };
      function g(a) {
        var t = a.components,
          r = (0, e.Z)(a, s);
        return (0, n.kt)(
          "wrapper",
          (0, o.Z)({}, l, r, { components: t, mdxType: "MDXLayout" }),
          (0, n.kt)("h1", { id: "json" }, "JSON"),
          (0, n.kt)(
            "p",
            null,
            (0, n.kt)(
              "strong",
              { parentName: "p" },
              "JavaScript Object Notation"
            ),
            " (",
            (0, n.kt)("strong", { parentName: "p" }, "JSON"),
            ") is a format for serialized data. As\nthe name implies it originates from JavaScript. Here is an example of JSON:"
          ),
          (0, n.kt)(
            "pre",
            null,
            (0, n.kt)(
              "code",
              { parentName: "pre", className: "language-json" },
              '{\n  "brand": "Century",\n  "products": ["Star"],\n  "author": {\n    "name": "John Doe"\n  }\n}\n'
            )
          )
        );
      }
      g.isMDXComponent = !0;
    },
  },
]);
