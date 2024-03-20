"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [8236],
  {
    3073: (t, i, e) => {
      e.r(i),
        e.d(i, {
          assets: () => p,
          contentTitle: () => h,
          default: () => l,
          frontMatter: () => o,
          metadata: () => c,
          toc: () => u,
        });
      var a = e(7462),
        s = e(3366),
        n = (e(7294), e(3905)),
        r = (e(828), ["components"]),
        o = {},
        h = "Phishing",
        c = {
          unversionedId: "security/attacks/phishing",
          id: "security/attacks/phishing",
          title: "Phishing",
          description:
            "Phishing is an attack where victims are contacted via e.g. email or",
          source: "@site/docs/security/attacks/phishing.md",
          sourceDirName: "security/attacks",
          slug: "/security/attacks/phishing",
          permalink: "/docs/security/attacks/phishing",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Drive-by attacks",
            permalink: "/docs/security/attacks/drive_by",
          },
          next: {
            title: "Authorization Code Flow",
            permalink:
              "/docs/security/authentication-and-authorization/flows/authorization_code_flow",
          },
        },
        p = {},
        u = [{ value: "Spear phishing", id: "spear-phishing", level: 2 }],
        d = { toc: u };
      function l(t) {
        var i = t.components,
          e = (0, s.Z)(t, r);
        return (0, n.kt)(
          "wrapper",
          (0, a.Z)({}, d, e, { components: i, mdxType: "MDXLayout" }),
          (0, n.kt)("h1", { id: "phishing" }, "Phishing"),
          (0, n.kt)(
            "p",
            null,
            (0, n.kt)("strong", { parentName: "p" }, "Phishing"),
            " is an attack where victims are contacted via e.g. email or\ntelephone and are lured into giving up sensitive information or download\nmalware. These kind of attacks are often carried out en masse."
          ),
          (0, n.kt)("h2", { id: "spear-phishing" }, "Spear phishing"),
          (0, n.kt)(
            "p",
            null,
            (0, n.kt)("strong", { parentName: "p" }, "Spear phishing"),
            " is similar to regular phishing, but has very specific\ntargets. Such as individuals with high positions. These attacks have messages\ntailored for their targets."
          )
        );
      }
      l.isMDXComponent = !0;
    },
  },
]);
