"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [5535],
  {
    4819: (t, e, o) => {
      o.r(e),
        o.d(e, {
          assets: () => l,
          contentTitle: () => u,
          default: () => d,
          frontMatter: () => s,
          metadata: () => c,
          toc: () => h,
        });
      var n = o(7462),
        a = o(3366),
        r = (o(7294), o(3905)),
        i = (o(828), ["components"]),
        s = {},
        u = "OAuth",
        c = {
          unversionedId:
            "security/authentication-and-authorization/protocols/oauth",
          id: "security/authentication-and-authorization/protocols/oauth",
          title: "OAuth",
          description:
            "OAuth is an authorization protocol where the authorization is provided by an",
          source:
            "@site/docs/security/authentication-and-authorization/protocols/oauth.md",
          sourceDirName: "security/authentication-and-authorization/protocols",
          slug: "/security/authentication-and-authorization/protocols/oauth",
          permalink:
            "/docs/security/authentication-and-authorization/protocols/oauth",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Protocols",
            permalink:
              "/docs/security/authentication-and-authorization/protocols/",
          },
          next: {
            title: "OpenID",
            permalink:
              "/docs/security/authentication-and-authorization/protocols/openid",
          },
        },
        l = {},
        h = [],
        p = { toc: h };
      function d(t) {
        var e = t.components,
          o = (0, a.Z)(t, i);
        return (0, r.kt)(
          "wrapper",
          (0, n.Z)({}, p, o, { components: e, mdxType: "MDXLayout" }),
          (0, r.kt)("h1", { id: "oauth" }, "OAuth"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("strong", { parentName: "p" }, "OAuth"),
            " is an authorization protocol where the authorization is provided by an\n",
            (0, r.kt)("strong", { parentName: "p" }, "identity provider"),
            ". This alleviates the client site from storing any user\npasswords. It also constitutes the magic behind social logins."
          ),
          (0, r.kt)(
            "p",
            null,
            "To better understand OAuth, we will introduce some core terminology."
          ),
          (0, r.kt)(
            "ul",
            null,
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "Client"),
              " A service that wants to access the resource server on behalf of a\nuser."
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "Resource server"),
              " The owner of the desired resource."
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "Authorization server"),
              " Authorizes the client to access the resource server."
            )
          ),
          (0, r.kt)(
            "p",
            null,
            "To accomplish this, two kinds of tokens are introduced;"
          ),
          (0, r.kt)(
            "ul",
            null,
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "Access token"),
              " A token specifying authorization for a user, but does not\ncontain identifying information. It declares what scopes can be accessed.\nAccess tokens are typically meant to be understood by resource server only."
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "Refresh token"),
              " A token used for obtaining an access token."
            )
          )
        );
      }
      d.isMDXComponent = !0;
    },
  },
]);
