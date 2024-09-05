"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [9174],
  {
    5691: (e, r, t) => {
      t.r(r),
        t.d(r, {
          assets: () => d,
          contentTitle: () => i,
          default: () => m,
          frontMatter: () => s,
          metadata: () => p,
          toc: () => u,
        });
      var a = t(7462),
        n = t(3366),
        o = (t(7294), t(3905)),
        c = (t(828), ["components"]),
        s = {},
        i = "PCI",
        p = {
          unversionedId: "hardware/pci",
          id: "hardware/pci",
          title: "PCI",
          description:
            "Peripheral Component Interconnect (PCI) is a computer bus for attaching",
          source: "@site/docs/hardware/pci.md",
          sourceDirName: "hardware",
          slug: "/hardware/pci",
          permalink: "/docs/hardware/pci",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "SSD", permalink: "/docs/hardware/memory/ssd" },
          next: {
            title: "Architecture",
            permalink: "/docs/hardware/processor/architecture",
          },
        },
        d = {},
        u = [],
        h = { toc: u };
      function m(e) {
        var r = e.components,
          t = (0, n.Z)(e, c);
        return (0, o.kt)(
          "wrapper",
          (0, a.Z)({}, h, t, { components: r, mdxType: "MDXLayout" }),
          (0, o.kt)("h1", { id: "pci" }, "PCI"),
          (0, o.kt)(
            "p",
            null,
            (0, o.kt)(
              "strong",
              { parentName: "p" },
              "Peripheral Component Interconnect"
            ),
            " (",
            (0, o.kt)("strong", { parentName: "p" }, "PCI"),
            ") is a computer bus for attaching\nhardware."
          )
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
