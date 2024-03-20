"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [4954],
  {
    296: (a, t, e) => {
      e.r(t),
        e.d(t, {
          assets: () => d,
          contentTitle: () => l,
          default: () => u,
          frontMatter: () => n,
          metadata: () => c,
          toc: () => m,
        });
      var r = e(7462),
        s = e(3366),
        i = (e(7294), e(3905)),
        o = (e(828), ["components"]),
        n = {},
        l = "Adversarial attack",
        c = {
          unversionedId: "ai/problems_with_ai/adversarial_attack",
          id: "ai/problems_with_ai/adversarial_attack",
          title: "Adversarial attack",
          description:
            "An adversarial attack is where one attempts to fool an AI by making small",
          source: "@site/docs/ai/problems_with_ai/adversarial_attack.md",
          sourceDirName: "ai/problems_with_ai",
          slug: "/ai/problems_with_ai/adversarial_attack",
          permalink: "/docs/ai/problems_with_ai/adversarial_attack",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Segmentation",
            permalink: "/docs/ai/problem_types/segmentation",
          },
          next: { title: "C4", permalink: "/docs/architecture/diagrams/c4" },
        },
        d = {},
        m = [],
        p = { toc: m };
      function u(a) {
        var t = a.components,
          e = (0, s.Z)(a, o);
        return (0, i.kt)(
          "wrapper",
          (0, r.Z)({}, p, e, { components: t, mdxType: "MDXLayout" }),
          (0, i.kt)("h1", { id: "adversarial-attack" }, "Adversarial attack"),
          (0, i.kt)(
            "p",
            null,
            "An ",
            (0, i.kt)("strong", { parentName: "p" }, "adversarial attack"),
            " is where one attempts to fool an AI by making small\nchanges to its input data. This can allow attackers to create media (such as\nsongs, photos and videos) such that they are interpreted as something completely\ndifferent to what humans would. A song could be interpreted as voice commands."
          ),
          (0, i.kt)(
            "p",
            null,
            "Adversarial attacks could become a serious threat in the future."
          )
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
