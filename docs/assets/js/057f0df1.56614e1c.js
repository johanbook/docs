"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [6876],
  {
    9035: (t, n, o) => {
      o.r(n),
        o.d(n, {
          assets: () => p,
          contentTitle: () => r,
          default: () => l,
          frontMatter: () => c,
          metadata: () => u,
          toc: () => d,
        });
      var e = o(7462),
        i = o(3366),
        a = (o(7294), o(3905)),
        s = (o(828), ["components"]),
        c = {},
        r = "OpenID",
        u = {
          unversionedId:
            "security/authentication-and-authorization/protocols/openid",
          id: "security/authentication-and-authorization/protocols/openid",
          title: "OpenID",
          description:
            "OpenID is an authentication protocol that uses an identity provider.",
          source:
            "@site/docs/security/authentication-and-authorization/protocols/openid.md",
          sourceDirName: "security/authentication-and-authorization/protocols",
          slug: "/security/authentication-and-authorization/protocols/openid",
          permalink:
            "/docs/security/authentication-and-authorization/protocols/openid",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "OAuth",
            permalink:
              "/docs/security/authentication-and-authorization/protocols/oauth",
          },
          next: {
            title: "SAML",
            permalink:
              "/docs/security/authentication-and-authorization/protocols/saml",
          },
        },
        p = {},
        d = [{ value: "OpenID Connect", id: "openid-connect", level: 2 }],
        h = { toc: d };
      function l(t) {
        var n = t.components,
          o = (0, i.Z)(t, s);
        return (0, a.kt)(
          "wrapper",
          (0, e.Z)({}, h, o, { components: n, mdxType: "MDXLayout" }),
          (0, a.kt)("h1", { id: "openid" }, "OpenID"),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)("strong", { parentName: "p" }, "OpenID"),
            " is an authentication protocol that uses an identity provider."
          ),
          (0, a.kt)("h2", { id: "openid-connect" }, "OpenID Connect"),
          (0, a.kt)(
            "p",
            null,
            "Since, OAuth does not support authentication, OpenID Connect (OIDC) was\nintroduced. It is built on top of OAuth."
          ),
          (0, a.kt)(
            "p",
            null,
            "OIDC introduces the concept of an ID token, which is a ",
            (0, a.kt)(
              "a",
              { parentName: "p", href: "/docs/security/jwt" },
              "JWT"
            ),
            " token\nidentifying a user. Possessing an ID token is proof of authentication, which\ndoes not apply for an access token since those can be obtained in multiple ways.\nIn contrast to an access token, the id token is meant to be understood by the\nclient."
          ),
          (0, a.kt)(
            "p",
            null,
            "As of 2021, the recommendation is to use Proof Key for Code Exchange (PKCE)."
          )
        );
      }
      l.isMDXComponent = !0;
    },
  },
]);
