"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [9427],
  {
    2140: (t, o, e) => {
      e.r(o),
        e.d(o, {
          assets: () => h,
          contentTitle: () => u,
          default: () => w,
          frontMatter: () => s,
          metadata: () => c,
          toc: () => l,
        });
      var r = e(7462),
        a = e(3366),
        i = (e(7294), e(3905)),
        n = (e(828), ["components"]),
        s = {},
        u = "Authorization Code Flow",
        c = {
          unversionedId:
            "security/authentication-and-authorization/flows/authorization_code_flow",
          id: "security/authentication-and-authorization/flows/authorization_code_flow",
          title: "Authorization Code Flow",
          description: "The Authorization Code Flow is an OAuth flow.",
          source:
            "@site/docs/security/authentication-and-authorization/flows/authorization_code_flow.md",
          sourceDirName: "security/authentication-and-authorization/flows",
          slug: "/security/authentication-and-authorization/flows/authorization_code_flow",
          permalink:
            "/docs/security/authentication-and-authorization/flows/authorization_code_flow",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Phishing",
            permalink: "/docs/security/attacks/phishing",
          },
          next: {
            title: "Resource Owner Password Flow",
            permalink:
              "/docs/security/authentication-and-authorization/flows/resource_owner_password_flow",
          },
        },
        h = {},
        l = [{ value: "Flow", id: "flow", level: 2 }],
        d = { toc: l };
      function w(t) {
        var o = t.components,
          e = (0, a.Z)(t, n);
        return (0, i.kt)(
          "wrapper",
          (0, r.Z)({}, d, e, { components: o, mdxType: "MDXLayout" }),
          (0, i.kt)(
            "h1",
            { id: "authorization-code-flow" },
            "Authorization Code Flow"
          ),
          (0, i.kt)(
            "p",
            null,
            "The ",
            (0, i.kt)("strong", { parentName: "p" }, "Authorization Code Flow"),
            " is an ",
            (0, i.kt)(
              "a",
              {
                parentName: "p",
                href: "/docs/security/authentication-and-authorization/protocols/oauth",
              },
              "OAuth"
            ),
            " flow."
          ),
          (0, i.kt)("h2", { id: "flow" }, "Flow"),
          (0, i.kt)("p", null, "This is how I understand the flow;"),
          (0, i.kt)(
            "ol",
            null,
            (0, i.kt)(
              "li",
              { parentName: "ol" },
              "A client requests a resource from the resource server."
            ),
            (0, i.kt)(
              "li",
              { parentName: "ol" },
              "The resource server pings the authorization server. If OK the resource server\nproceeds otherwise client is redirected to an authorization prompt."
            ),
            (0, i.kt)(
              "li",
              { parentName: "ol" },
              "On confirmed prompt, the authorization server sends an authorization code to\nthe resource server."
            ),
            (0, i.kt)(
              "li",
              { parentName: "ol" },
              "The resource server returns authorization code and resource server secret to\nauthorization server."
            ),
            (0, i.kt)(
              "li",
              { parentName: "ol" },
              "Authorization server confirms authorization code and secret and answers with\naccess code (and ID token in case of OIDC)."
            )
          )
        );
      }
      w.isMDXComponent = !0;
    },
  },
]);
