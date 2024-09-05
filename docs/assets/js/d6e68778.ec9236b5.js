"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [856],
  {
    3345: (a, t, e) => {
      e.r(t),
        e.d(t, {
          assets: () => p,
          contentTitle: () => i,
          default: () => u,
          frontMatter: () => m,
          metadata: () => l,
          toc: () => d,
        });
      var r = e(7462),
        n = e(3366),
        o = (e(7294), e(3905)),
        s = (e(828), ["components"]),
        m = {},
        i = "XML",
        l = {
          unversionedId: "programming/data_formats/xml",
          id: "programming/data_formats/xml",
          title: "XML",
          description:
            "eXstenisible Markup Language (XML) is a markup language for arbitrary",
          source: "@site/docs/programming/data_formats/xml.md",
          sourceDirName: "programming/data_formats",
          slug: "/programming/data_formats/xml",
          permalink: "/docs/programming/data_formats/xml",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "JSON",
            permalink: "/docs/programming/data_formats/json",
          },
          next: {
            title: "Encodings",
            permalink: "/docs/programming/encodings",
          },
        },
        p = {},
        d = [
          { value: "DTD", id: "dtd", level: 2 },
          { value: "Other", id: "other", level: 2 },
        ],
        g = { toc: d };
      function u(a) {
        var t = a.components,
          e = (0, n.Z)(a, s);
        return (0, o.kt)(
          "wrapper",
          (0, r.Z)({}, g, e, { components: t, mdxType: "MDXLayout" }),
          (0, o.kt)("h1", { id: "xml" }, "XML"),
          (0, o.kt)(
            "p",
            null,
            (0, o.kt)(
              "strong",
              { parentName: "p" },
              "eXstenisible Markup Language"
            ),
            " (",
            (0, o.kt)("strong", { parentName: "p" }, "XML"),
            ") is a markup language for arbitrary\ndata. One common example is ",
            (0, o.kt)(
              "a",
              { parentName: "p", href: "/docs/programming/data_formats/html" },
              "HTML"
            ),
            ". An example of XML is shown below:"
          ),
          (0, o.kt)(
            "pre",
            null,
            (0, o.kt)(
              "code",
              { parentName: "pre", className: "language-xml" },
              '<?xml version = "1.0" encoding = "UTF-8"?>\n<cat>\n  <name>Caty</name>\n  <age>12</age>\n</cat>\n'
            )
          ),
          (0, o.kt)(
            "p",
            null,
            "A document may start with a XML Prolog which states XML version."
          ),
          (0, o.kt)("h2", { id: "dtd" }, "DTD"),
          (0, o.kt)(
            "p",
            null,
            (0, o.kt)(
              "strong",
              { parentName: "p" },
              "Document Type Definition"
            ),
            " (",
            (0, o.kt)("strong", { parentName: "p" }, "DTD"),
            ") is a schema language that can be used to\nvalidate XML documents."
          ),
          (0, o.kt)("h2", { id: "other" }, "Other"),
          (0, o.kt)(
            "p",
            null,
            "There is a security vulnerability known as\n",
            (0, o.kt)(
              "a",
              { parentName: "p", href: "../../security/vulnerabilities/xxe" },
              "XXE"
            ),
            "."
          )
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
