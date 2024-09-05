"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [3243],
  {
    3008: (e, t, a) => {
      a.r(t),
        a.d(t, {
          assets: () => c,
          contentTitle: () => l,
          default: () => m,
          frontMatter: () => o,
          metadata: () => p,
          toc: () => u,
        });
      var r = a(7462),
        s = a(3366),
        n = (a(7294), a(3905)),
        i = (a(828), ["components"]),
        o = {},
        l = "AUP",
        p = {
          unversionedId: "laws/agreements/aup",
          id: "laws/agreements/aup",
          title: "AUP",
          description:
            "An Acceptable Use Policy (AUP) is a service provider policy limiting",
          source: "@site/docs/laws/agreements/aup.md",
          sourceDirName: "laws/agreements",
          slug: "/laws/agreements/aup",
          permalink: "/docs/laws/agreements/aup",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "GPU", permalink: "/docs/hardware/processor/gpu" },
          next: { title: "SLA", permalink: "/docs/laws/agreements/sla" },
        },
        c = {},
        u = [],
        d = { toc: u };
      function m(e) {
        var t = e.components,
          a = (0, s.Z)(e, i);
        return (0, n.kt)(
          "wrapper",
          (0, r.Z)({}, d, a, { components: t, mdxType: "MDXLayout" }),
          (0, n.kt)("h1", { id: "aup" }, "AUP"),
          (0, n.kt)(
            "p",
            null,
            "An ",
            (0, n.kt)("strong", { parentName: "p" }, "Acceptable Use Policy"),
            " (",
            (0, n.kt)("strong", { parentName: "p" }, "AUP"),
            ") is a service provider policy limiting\nwhat the provided services may be used for. A reasonable AUP will forbid the use\nof services for unlawful purposes, such as fraud and violation of intellectual\nproperty."
          ),
          (0, n.kt)("p", null, "Cloud providers may also forbid"),
          (0, n.kt)(
            "ul",
            null,
            (0, n.kt)("li", { parentName: "ul" }, "Email spamming"),
            (0, n.kt)(
              "li",
              { parentName: "ul" },
              "Falsifying ",
              (0, n.kt)(
                "a",
                { parentName: "li", href: "/docs/network/protocols/tcp" },
                "TCP"
              ),
              " origin headers"
            ),
            (0, n.kt)("li", { parentName: "ul" }, "Mining cryptocurrencies")
          )
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
