"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [1315],
  {
    9636: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => c,
          contentTitle: () => p,
          default: () => h,
          frontMatter: () => o,
          metadata: () => g,
          toc: () => d,
        });
      var i = n(7462),
        a = n(3366),
        r = (n(7294), n(3905)),
        s = (n(828), ["components"]),
        o = {},
        p = "Steganography",
        g = {
          unversionedId: "security/steganography",
          id: "security/steganography",
          title: "Steganography",
          description:
            "Steganography is the art of hiding files inside other files. Here is an",
          source: "@site/docs/security/steganography.md",
          sourceDirName: "security",
          slug: "/security/steganography",
          permalink: "/docs/security/steganography",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Social engineering",
            permalink: "/docs/security/social_engineering",
          },
          next: {
            title: "Threat modelling",
            permalink: "/docs/security/threat_modelling",
          },
        },
        c = {},
        d = [],
        l = { toc: d };
      function h(e) {
        var t = e.components,
          n = (0, a.Z)(e, s);
        return (0, r.kt)(
          "wrapper",
          (0, i.Z)({}, l, n, { components: t, mdxType: "MDXLayout" }),
          (0, r.kt)("h1", { id: "steganography" }, "Steganography"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("strong", { parentName: "p" }, "Steganography"),
            " is the art of hiding files inside other files. Here is an\nexample of how one can hide a file inside an image using\n",
            (0, r.kt)(
              "a",
              { parentName: "p", href: "/docs/unix/tools/zip" },
              "zip"
            ),
            ":"
          ),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "zip secret.zip my-files/\ncat my-photos.jpg secret.zip > hidden.jpg\n"
            )
          ),
          (0, r.kt)(
            "p",
            null,
            "The hidden files can then be extracted using ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "unzip hidden.jpg")
          )
        );
      }
      h.isMDXComponent = !0;
    },
  },
]);
