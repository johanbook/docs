"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [6689],
  {
    3103: (e, t, a) => {
      a.r(t),
        a.d(t, {
          assets: () => l,
          contentTitle: () => c,
          default: () => d,
          frontMatter: () => r,
          metadata: () => u,
          toc: () => p,
        });
      var n = a(7462),
        i = a(3366),
        o = (a(7294), a(3905)),
        s = (a(828), ["components"]),
        r = {},
        c = "Multi-factor authentication",
        u = {
          unversionedId: "security/defense/mfa",
          id: "security/defense/mfa",
          title: "Multi-factor authentication",
          description:
            "Multi-factor authentication (MFA) is an authentication approach where a",
          source: "@site/docs/security/defense/mfa.md",
          sourceDirName: "security/defense",
          slug: "/security/defense/mfa",
          permalink: "/docs/security/defense/mfa",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "IDS", permalink: "/docs/security/defense/ids" },
          next: {
            title: "Security By Design",
            permalink: "/docs/security/defense/security_by_design",
          },
        },
        l = {},
        p = [
          {
            value: "Two-factor authentication",
            id: "two-factor-authentication",
            level: 2,
          },
          {
            value: "Mobile phones in MFA",
            id: "mobile-phones-in-mfa",
            level: 2,
          },
        ],
        h = { toc: p };
      function d(e) {
        var t = e.components,
          a = (0, i.Z)(e, s);
        return (0, o.kt)(
          "wrapper",
          (0, n.Z)({}, h, a, { components: t, mdxType: "MDXLayout" }),
          (0, o.kt)(
            "h1",
            { id: "multi-factor-authentication" },
            "Multi-factor authentication"
          ),
          (0, o.kt)(
            "p",
            null,
            (0, o.kt)(
              "strong",
              { parentName: "p" },
              "Multi-factor authentication"
            ),
            " (",
            (0, o.kt)("strong", { parentName: "p" }, "MFA"),
            ") is an authentication approach where a\nuser must prove they have multiple factors. Some common factors are:"
          ),
          (0, o.kt)(
            "ul",
            null,
            (0, o.kt)(
              "li",
              { parentName: "ul" },
              (0, o.kt)("strong", { parentName: "li" }, "Knowledge"),
              ", such as a password."
            ),
            (0, o.kt)(
              "li",
              { parentName: "ul" },
              (0, o.kt)("strong", { parentName: "li" }, "Possession"),
              ", such as a mobile phone or an USB stick."
            ),
            (0, o.kt)(
              "li",
              { parentName: "ul" },
              (0, o.kt)("strong", { parentName: "li" }, "Inherence"),
              ", biometrics such as fingerprint, eye iris or voice."
            ),
            (0, o.kt)(
              "li",
              { parentName: "ul" },
              (0, o.kt)("strong", { parentName: "li" }, "Location"),
              ", where the user is."
            )
          ),
          (0, o.kt)(
            "p",
            null,
            "The higher the number of factors, the higher the security."
          ),
          (0, o.kt)(
            "h2",
            { id: "two-factor-authentication" },
            "Two-factor authentication"
          ),
          (0, o.kt)(
            "p",
            null,
            (0, o.kt)(
              "strong",
              { parentName: "p" },
              "Two-factor authentication"
            ),
            " is a form of MFA where only factors are required.\nThis is used for e.g. bank cards (using a PIN to prove knowledge and the\nphysical card to prove possession)."
          ),
          (0, o.kt)(
            "h2",
            { id: "mobile-phones-in-mfa" },
            "Mobile phones in MFA"
          ),
          (0, o.kt)(
            "p",
            null,
            "Mobile phones are commonly used to prove possession in MFA, typically using an\nauthentication app that generates time based codes."
          )
        );
      }
      d.isMDXComponent = !0;
    },
  },
]);
