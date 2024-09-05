"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [2859],
  {
    3849: (r, e, t) => {
      t.r(e),
        t.d(e, {
          assets: () => u,
          contentTitle: () => p,
          default: () => h,
          frontMatter: () => c,
          metadata: () => i,
          toc: () => d,
        });
      var a = t(7462),
        s = t(3366),
        o = (t(7294), t(3905)),
        n = (t(828), ["components"]),
        c = {},
        p = "CPU",
        i = {
          unversionedId: "hardware/processor/cpu",
          id: "hardware/processor/cpu",
          title: "CPU",
          description:
            "A Central Processing Unit (CPU) is a hardware that can execute program",
          source: "@site/docs/hardware/processor/cpu.md",
          sourceDirName: "hardware/processor",
          slug: "/hardware/processor/cpu",
          permalink: "/docs/hardware/processor/cpu",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Architecture",
            permalink: "/docs/hardware/processor/architecture",
          },
          next: { title: "GPU", permalink: "/docs/hardware/processor/gpu" },
        },
        u = {},
        d = [{ value: "vCPU", id: "vcpu", level: 2 }],
        l = { toc: d };
      function h(r) {
        var e = r.components,
          t = (0, s.Z)(r, n);
        return (0, o.kt)(
          "wrapper",
          (0, a.Z)({}, l, t, { components: e, mdxType: "MDXLayout" }),
          (0, o.kt)("h1", { id: "cpu" }, "CPU"),
          (0, o.kt)(
            "p",
            null,
            "A ",
            (0, o.kt)("strong", { parentName: "p" }, "Central Processing Unit"),
            " (",
            (0, o.kt)("strong", { parentName: "p" }, "CPU"),
            ") is a hardware that can execute program\ninstructions."
          ),
          (0, o.kt)("h2", { id: "vcpu" }, "vCPU"),
          (0, o.kt)(
            "p",
            null,
            "A ",
            (0, o.kt)("strong", { parentName: "p" }, "Virtual Processing Unit"),
            " (",
            (0, o.kt)("strong", { parentName: "p" }, "vCPU"),
            ") is a virtual CPU often used in cloud\ncomputing."
          )
        );
      }
      h.isMDXComponent = !0;
    },
  },
]);
