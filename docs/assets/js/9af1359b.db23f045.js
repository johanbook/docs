"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [338],
  {
    6860: (t, e, a) => {
      a.r(e),
        a.d(e, {
          assets: () => k,
          contentTitle: () => o,
          default: () => p,
          frontMatter: () => n,
          metadata: () => d,
          toc: () => u,
        });
      var i = a(7462),
        r = a(3366),
        s = (a(7294), a(3905)),
        c = (a(828), ["components"]),
        n = {},
        o = "Drive-by attacks",
        d = {
          unversionedId: "security/attacks/drive_by",
          id: "security/attacks/drive_by",
          title: "Drive-by attacks",
          description:
            "A drive-by attack is when an attacker plants malware on a website that in",
          source: "@site/docs/security/attacks/drive_by.md",
          sourceDirName: "security/attacks",
          slug: "/security/attacks/drive_by",
          permalink: "/docs/security/attacks/drive_by",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Brute force attacks",
            permalink: "/docs/security/attacks/brute_force",
          },
          next: {
            title: "Phishing",
            permalink: "/docs/security/attacks/phishing",
          },
        },
        k = {},
        u = [],
        y = { toc: u };
      function p(t) {
        var e = t.components,
          a = (0, r.Z)(t, c);
        return (0, s.kt)(
          "wrapper",
          (0, i.Z)({}, y, a, { components: e, mdxType: "MDXLayout" }),
          (0, s.kt)("h1", { id: "drive-by-attacks" }, "Drive-by attacks"),
          (0, s.kt)(
            "p",
            null,
            "A ",
            (0, s.kt)("strong", { parentName: "p" }, "drive-by attack"),
            " is when an attacker plants malware on a website that in\nturn a victim visits. Upon the visit the victim is compromised. Drive-by attacks\noften rely on vulnerabilities in the browser or the underlying OS."
          )
        );
      }
      p.isMDXComponent = !0;
    },
  },
]);
