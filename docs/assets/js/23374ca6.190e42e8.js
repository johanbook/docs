"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [8421],
  {
    6527: (e, t, s) => {
      s.r(t),
        s.d(t, {
          assets: () => m,
          contentTitle: () => d,
          default: () => l,
          frontMatter: () => r,
          metadata: () => c,
          toc: () => u,
        });
      var o = s(7462),
        i = s(3366),
        n = (s(7294), s(3905)),
        a = (s(828), ["components"]),
        r = { id: "Home", sidebar_position: 1, slug: "/" },
        d = void 0,
        c = {
          unversionedId: "Home",
          id: "Home",
          title: "Home",
          description:
            "This is a wiki on various software related topics. Note that these docs are",
          source: "@site/docs/README.md",
          sourceDirName: ".",
          slug: "/",
          permalink: "/docs/",
          draft: !1,
          tags: [],
          version: "current",
          sidebarPosition: 1,
          frontMatter: { id: "Home", sidebar_position: 1, slug: "/" },
          sidebar: "tutorialSidebar",
          next: { title: "Basics", permalink: "/docs/ai/ann/" },
        },
        m = {},
        u = [
          { value: "Something missing?", id: "something-missing", level: 2 },
        ],
        p = { toc: u };
      function l(e) {
        var t = e.components,
          s = (0, i.Z)(e, a);
        return (0, n.kt)(
          "wrapper",
          (0, o.Z)({}, p, s, { components: t, mdxType: "MDXLayout" }),
          (0, n.kt)(
            "p",
            null,
            "This is a wiki on various software related topics. Note that these docs are\nmeant to be used for lookup on different topics rather than tutorials."
          ),
          (0, n.kt)("h2", { id: "something-missing" }, "Something missing?"),
          (0, n.kt)(
            "p",
            null,
            "If something is incorrect, missing or could be improved, open an issue in\n",
            (0, n.kt)(
              "a",
              {
                parentName: "p",
                href: "https://github.com/johanbook/docs/issues",
              },
              "here"
            ),
            "."
          )
        );
      }
      l.isMDXComponent = !0;
    },
  },
]);
