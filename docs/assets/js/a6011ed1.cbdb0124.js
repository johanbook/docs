"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [5521],
  {
    8609: (a, r, t) => {
      t.r(r),
        t.d(r, {
          assets: () => i,
          contentTitle: () => g,
          default: () => c,
          frontMatter: () => s,
          metadata: () => p,
          toc: () => d,
        });
      var e = t(7462),
        n = t(3366),
        o = (t(7294), t(3905)),
        m = (t(828), ["components"]),
        s = {},
        g = "GML",
        p = {
          unversionedId: "programming/data_formats/gml",
          id: "programming/data_formats/gml",
          title: "GML",
          description:
            "Geography Markup Language (GML) is markup language based on",
          source: "@site/docs/programming/data_formats/gml.md",
          sourceDirName: "programming/data_formats",
          slug: "/programming/data_formats/gml",
          permalink: "/docs/programming/data_formats/gml",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Caching",
            permalink: "/docs/programming/browsers/caching",
          },
          next: {
            title: "HTML",
            permalink: "/docs/programming/data_formats/html",
          },
        },
        i = {},
        d = [],
        l = { toc: d };
      function c(a) {
        var r = a.components,
          t = (0, n.Z)(a, m);
        return (0, o.kt)(
          "wrapper",
          (0, e.Z)({}, l, t, { components: r, mdxType: "MDXLayout" }),
          (0, o.kt)("h1", { id: "gml" }, "GML"),
          (0, o.kt)(
            "p",
            null,
            (0, o.kt)(
              "strong",
              { parentName: "p" },
              "Geography Markup Language"
            ),
            " (",
            (0, o.kt)("strong", { parentName: "p" }, "GML"),
            ") is markup language based on\n",
            (0, o.kt)(
              "a",
              { parentName: "p", href: "/docs/programming/data_formats/xml" },
              "XML"
            ),
            " for denoting geographies. An example is presented below."
          ),
          (0, o.kt)(
            "pre",
            null,
            (0, o.kt)(
              "code",
              { parentName: "pre", className: "language-xml" },
              ' <gml:Point gml:id="p21" srsName="http://www.opengis.net/def/crs/EPSG/0/4326">\n    <gml:coordinates>45.67, 88.56</gml:coordinates>\n </gml:Point>\n'
            )
          )
        );
      }
      c.isMDXComponent = !0;
    },
  },
]);
