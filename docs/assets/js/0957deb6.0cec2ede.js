"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [9214],
  {
    2826: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => m,
          contentTitle: () => d,
          default: () => l,
          frontMatter: () => i,
          metadata: () => c,
          toc: () => p,
        });
      var r = t(7462),
        o = t(3366),
        a = (t(7294), t(3905)),
        s = (t(828), ["components"]),
        i = {},
        d = "Encodings",
        c = {
          unversionedId: "programming/encodings",
          id: "programming/encodings",
          title: "Encodings",
          description:
            "Data sometimes need to be encoded in order to be suitable to the transport",
          source: "@site/docs/programming/encodings.md",
          sourceDirName: "programming",
          slug: "/programming/encodings",
          permalink: "/docs/programming/encodings",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "XML",
            permalink: "/docs/programming/data_formats/xml",
          },
          next: { title: "CQRS", permalink: "/docs/programming/patterns/cqsr" },
        },
        m = {},
        p = [
          { value: "Base64", id: "base64", level: 2 },
          { value: "Percent encoding", id: "percent-encoding", level: 2 },
        ],
        g = { toc: p };
      function l(e) {
        var n = e.components,
          t = (0, o.Z)(e, s);
        return (0, a.kt)(
          "wrapper",
          (0, r.Z)({}, g, t, { components: n, mdxType: "MDXLayout" }),
          (0, a.kt)("h1", { id: "encodings" }, "Encodings"),
          (0, a.kt)(
            "p",
            null,
            "Data sometimes need to be encoded in order to be suitable to the transport\nmedium."
          ),
          (0, a.kt)("h2", { id: "base64" }, "Base64"),
          (0, a.kt)(
            "p",
            null,
            "Base64 uses 64 base characters to encode binary data."
          ),
          (0, a.kt)("h2", { id: "percent-encoding" }, "Percent encoding"),
          (0, a.kt)(
            "p",
            null,
            "In order to submit arbitrary data through a ",
            (0, a.kt)("a", { parentName: "p", href: "../network/url" }, "URL"),
            " the data can\nbe percent encoded."
          )
        );
      }
      l.isMDXComponent = !0;
    },
  },
]);
