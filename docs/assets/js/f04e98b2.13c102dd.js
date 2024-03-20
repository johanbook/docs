"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [1777],
  {
    7505: (e, t, i) => {
      i.r(t),
        i.d(t, {
          assets: () => c,
          contentTitle: () => l,
          default: () => p,
          frontMatter: () => o,
          metadata: () => u,
          toc: () => d,
        });
      var n = i(7462),
        r = i(3366),
        s = (i(7294), i(3905)),
        a = (i(828), ["components"]),
        o = {},
        l = "Man In The Middle",
        u = {
          unversionedId: "security/vulnerabilities/mitm",
          id: "security/vulnerabilities/mitm",
          title: "Man In The Middle",
          description:
            "Man In The Middle attacks (MITM) are when a untrusted actor listens to",
          source: "@site/docs/security/vulnerabilities/mitm.md",
          sourceDirName: "security/vulnerabilities",
          slug: "/security/vulnerabilities/mitm",
          permalink: "/docs/security/vulnerabilities/mitm",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "LFI",
            permalink: "/docs/security/vulnerabilities/lfi",
          },
          next: {
            title: "RFI",
            permalink: "/docs/security/vulnerabilities/rfi",
          },
        },
        c = {},
        d = [],
        m = { toc: d };
      function p(e) {
        var t = e.components,
          i = (0, r.Z)(e, a);
        return (0, s.kt)(
          "wrapper",
          (0, n.Z)({}, m, i, { components: t, mdxType: "MDXLayout" }),
          (0, s.kt)("h1", { id: "man-in-the-middle" }, "Man In The Middle"),
          (0, s.kt)(
            "p",
            null,
            (0, s.kt)("strong", { parentName: "p" }, "Man In The Middle"),
            " attacks (",
            (0, s.kt)("strong", { parentName: "p" }, "MITM"),
            ") are when a untrusted actor listens to\n(or more commonly forwards) traffic between two communicating partners A and B."
          )
        );
      }
      p.isMDXComponent = !0;
    },
  },
]);
