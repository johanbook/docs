"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [4731],
  {
    8135: (e, n, o) => {
      o.r(n),
        o.d(n, {
          assets: () => c,
          contentTitle: () => l,
          default: () => m,
          frontMatter: () => s,
          metadata: () => d,
          toc: () => p,
        });
      var a = o(7462),
        t = o(3366),
        r = (o(7294), o(3905)),
        i = (o(828), ["components"]),
        s = {},
        l = "Color encodings",
        d = {
          unversionedId: "ux/colors/encodings",
          id: "ux/colors/encodings",
          title: "Color encodings",
          description:
            "In order to represent a color digitally, one needs a color encoding. This page",
          source: "@site/docs/ux/colors/encodings.md",
          sourceDirName: "ux/colors",
          slug: "/ux/colors/encodings",
          permalink: "/docs/ux/colors/encodings",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Color schemes",
            permalink: "/docs/ux/colors/color-schemes",
          },
          next: { title: "Components", permalink: "/docs/ux/components" },
        },
        c = {},
        p = [
          { value: "RGB", id: "rgb", level: 2 },
          { value: "Hexadecimal color", id: "hexadecimal-color", level: 3 },
          { value: "HSL", id: "hsl", level: 2 },
          { value: "HSV/HSB and HSI", id: "hsvhsb-and-hsi", level: 3 },
        ],
        h = { toc: p };
      function m(e) {
        var n = e.components,
          o = (0, t.Z)(e, i);
        return (0, r.kt)(
          "wrapper",
          (0, a.Z)({}, h, o, { components: n, mdxType: "MDXLayout" }),
          (0, r.kt)("h1", { id: "color-encodings" }, "Color encodings"),
          (0, r.kt)(
            "p",
            null,
            "In order to represent a color digitally, one needs a color encoding. This page\nwill discuss the various encodings."
          ),
          (0, r.kt)("h2", { id: "rgb" }, "RGB"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("strong", { parentName: "p" }, "RGB"),
            " is an encoding where a color is encoded as a mix of red, green and blue.\nThese can be presented with a char tuplet, i.e. ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "rgb(255,0,0)"),
            " would represent\nred."
          ),
          (0, r.kt)(
            "p",
            null,
            "There is also ",
            (0, r.kt)("strong", { parentName: "p" }, "RGBA"),
            " which supports an alpha channel, for example\n",
            (0, r.kt)("inlineCode", { parentName: "p" }, "rgba(255,0,0,0.5)"),
            " which would be red with 50% opacity."
          ),
          (0, r.kt)("h3", { id: "hexadecimal-color" }, "Hexadecimal color"),
          (0, r.kt)(
            "p",
            null,
            "A ",
            (0, r.kt)("strong", { parentName: "p" }, "hexadecimal color"),
            ", referred to as ",
            (0, r.kt)("strong", { parentName: "p" }, "hex codes"),
            " or ",
            (0, r.kt)("strong", { parentName: "p" }, "hex triplet"),
            ", is a\nRGB encoding that uses hexadecimal numbers instead of decimals ones. This means\nthat each color component is encoded in the interval from ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "00"),
            " to ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "FF"),
            ". For\nexample, ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "#FF0000"),
            " would correspond to red (or ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "rgb(255,0,0)"),
            ")."
          ),
          (0, r.kt)(
            "p",
            null,
            "Hexadecimal color also supports an alpha channel, meaning the color ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "#FF000080"),
            "\nis a valid color - it is red which 50% opacity."
          ),
          (0, r.kt)("h2", { id: "hsl" }, "HSL"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("strong", { parentName: "p" }, "HSL"),
            " is an RGB alternative which is intended to be more more readable for\nhumans. It relies on the basic properties hue, saturation and luminance to\ndefine a color. An example would be ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "hsl(120,100%,50%)"),
            ", where 120 correspond to\ngreen, ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "100%"),
            " means full saturation and ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "50%"),
            " means a neutral luminance for the\ncolor."
          ),
          (0, r.kt)("h3", { id: "hsvhsb-and-hsi" }, "HSV/HSB and HSI"),
          (0, r.kt)(
            "p",
            null,
            "There are other verions of HSL, such as HSV/HSB and HSI that define luminance\ndifferently. This might have some use cases, but is not common in most software\ndevelopment."
          )
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
