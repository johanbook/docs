"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [1395],
  {
    61: (e, r, t) => {
      t.r(r),
        t.d(r, {
          assets: () => u,
          contentTitle: () => i,
          default: () => h,
          frontMatter: () => c,
          metadata: () => p,
          toc: () => d,
        });
      var o = t(7462),
        a = t(3366),
        n = (t(7294), t(3905)),
        s = (t(828), ["components"]),
        c = {},
        i = "Architecture",
        p = {
          unversionedId: "hardware/processor/architecture",
          id: "hardware/processor/architecture",
          title: "Architecture",
          description:
            "There are different processor architectures. Some common types of",
          source: "@site/docs/hardware/processor/architecture.md",
          sourceDirName: "hardware/processor",
          slug: "/hardware/processor/architecture",
          permalink: "/docs/hardware/processor/architecture",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "PCI", permalink: "/docs/hardware/pci" },
          next: { title: "CPU", permalink: "/docs/hardware/processor/cpu" },
        },
        u = {},
        d = [
          {
            value: "Downloading software",
            id: "downloading-software",
            level: 2,
          },
        ],
        l = { toc: d };
      function h(e) {
        var r = e.components,
          t = (0, a.Z)(e, s);
        return (0, n.kt)(
          "wrapper",
          (0, o.Z)({}, l, t, { components: r, mdxType: "MDXLayout" }),
          (0, n.kt)("h1", { id: "architecture" }, "Architecture"),
          (0, n.kt)(
            "p",
            null,
            "There are different ",
            (0, n.kt)("strong", { parentName: "p" }, "processor architectures"),
            ". Some common types of\narchitectures are"
          ),
          (0, n.kt)(
            "ul",
            null,
            (0, n.kt)(
              "li",
              { parentName: "ul" },
              (0, n.kt)("strong", { parentName: "li" }, "amd")
            ),
            (0, n.kt)(
              "li",
              { parentName: "ul" },
              (0, n.kt)("strong", { parentName: "li" }, "arm"),
              " found in Raspberry Pis."
            )
          ),
          (0, n.kt)(
            "p",
            null,
            "To see information about current processors, you can run ",
            (0, n.kt)("inlineCode", { parentName: "p" }, "lscpu"),
            " or\n",
            (0, n.kt)("inlineCode", { parentName: "p" }, "cat /proc/cpuinfo"),
            " on Linux."
          ),
          (0, n.kt)(
            "h2",
            { id: "downloading-software" },
            "Downloading software"
          ),
          (0, n.kt)(
            "p",
            null,
            "When downloading binaries one often needs to pick the one suitable for ones\nsystem."
          )
        );
      }
      h.isMDXComponent = !0;
    },
  },
]);
