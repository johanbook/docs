"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [694],
  {
    1601: (t, e, a) => {
      a.r(e),
        a.d(e, {
          assets: () => l,
          contentTitle: () => u,
          default: () => p,
          frontMatter: () => s,
          metadata: () => c,
          toc: () => d,
        });
      var n = a(7462),
        i = a(3366),
        r = (a(7294), a(3905)),
        o = (a(828), ["components"]),
        s = {},
        u = "SAML",
        c = {
          unversionedId:
            "security/authentication-and-authorization/protocols/saml",
          id: "security/authentication-and-authorization/protocols/saml",
          title: "SAML",
          description:
            "Security Assertion Markup Language (SAML) is an authentication and",
          source:
            "@site/docs/security/authentication-and-authorization/protocols/saml.md",
          sourceDirName: "security/authentication-and-authorization/protocols",
          slug: "/security/authentication-and-authorization/protocols/saml",
          permalink:
            "/docs/security/authentication-and-authorization/protocols/saml",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "OpenID",
            permalink:
              "/docs/security/authentication-and-authorization/protocols/openid",
          },
          next: {
            title: "Web authentication",
            permalink:
              "/docs/security/authentication-and-authorization/web_authentication",
          },
        },
        l = {},
        d = [],
        h = { toc: d };
      function p(t) {
        var e = t.components,
          a = (0, i.Z)(t, o);
        return (0, r.kt)(
          "wrapper",
          (0, n.Z)({}, h, a, { components: e, mdxType: "MDXLayout" }),
          (0, r.kt)("h1", { id: "saml" }, "SAML"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)(
              "strong",
              { parentName: "p" },
              "Security Assertion Markup Language"
            ),
            " (",
            (0, r.kt)("strong", { parentName: "p" }, "SAML"),
            ") is an authentication and\nauthorization standard. In SAML there are"
          ),
          (0, r.kt)(
            "ul",
            null,
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "User Agent (UA)"),
              " Typically the user's web browser."
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)(
                "strong",
                { parentName: "li" },
                "Service Provider (SP)"
              ),
              " The service that we want to access."
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)(
                "strong",
                { parentName: "li" },
                "Identity Provider (IDP)"
              ),
              " The service that federates identities."
            )
          ),
          (0, r.kt)(
            "p",
            null,
            "The service provider must trust the identity provider."
          ),
          (0, r.kt)(
            "p",
            null,
            "When the UA interacts with the IDP it creates a SAML assertion which is sent to\nthe UA which in turn sends it to the SP."
          ),
          (0, r.kt)(
            "p",
            null,
            "The configurations often reside in an\n",
            (0, r.kt)(
              "a",
              { parentName: "p", href: "/docs/programming/data_formats/xml" },
              "XML"
            ),
            " file."
          ),
          (0, r.kt)(
            "p",
            null,
            "SAML was not initially designed for the web and has been retrofitted for it\nafterwards. It is also quite verbose."
          )
        );
      }
      p.isMDXComponent = !0;
    },
  },
]);
