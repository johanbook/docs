"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [3780],
  {
    3274: (e, r, t) => {
      t.r(r),
        t.d(r, {
          assets: () => d,
          contentTitle: () => c,
          default: () => h,
          frontMatter: () => p,
          metadata: () => i,
          toc: () => u,
        });
      var a = t(7462),
        s = t(3366),
        o = (t(7294), t(3905)),
        n = (t(828), ["components"]),
        p = {},
        c = "GPU",
        i = {
          unversionedId: "hardware/processor/gpu",
          id: "hardware/processor/gpu",
          title: "GPU",
          description:
            "A Graphics Processing Unit (GPU) is a hardware component dedicated to",
          source: "@site/docs/hardware/processor/gpu.md",
          sourceDirName: "hardware/processor",
          slug: "/hardware/processor/gpu",
          permalink: "/docs/hardware/processor/gpu",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "CPU", permalink: "/docs/hardware/processor/cpu" },
          next: { title: "AUP", permalink: "/docs/laws/agreements/aup" },
        },
        d = {},
        u = [],
        l = { toc: u };
      function h(e) {
        var r = e.components,
          t = (0, s.Z)(e, n);
        return (0, o.kt)(
          "wrapper",
          (0, a.Z)({}, l, t, { components: r, mdxType: "MDXLayout" }),
          (0, o.kt)("h1", { id: "gpu" }, "GPU"),
          (0, o.kt)(
            "p",
            null,
            "A ",
            (0, o.kt)(
              "strong",
              { parentName: "p" },
              "Graphics Processing Unit"
            ),
            " (",
            (0, o.kt)("strong", { parentName: "p" }, "GPU"),
            ") is a hardware component dedicated to\nprocessing graphics."
          ),
          (0, o.kt)(
            "p",
            null,
            "GPUs tend be to well suitable for training ",
            (0, o.kt)("a", { parentName: "p", href: "/docs/ai/ann/" }, "ANNs"),
            "."
          )
        );
      }
      h.isMDXComponent = !0;
    },
  },
]);
