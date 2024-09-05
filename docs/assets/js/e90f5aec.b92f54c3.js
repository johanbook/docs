"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [4191],
  {
    4053: (o, t, e) => {
      e.r(t),
        e.d(t, {
          assets: () => d,
          contentTitle: () => u,
          default: () => h,
          frontMatter: () => i,
          metadata: () => c,
          toc: () => w,
        });
      var a = e(7462),
        r = e(3366),
        n = (e(7294), e(3905)),
        s = (e(828), ["components"]),
        i = {},
        u = "Resource Owner Password Flow",
        c = {
          unversionedId:
            "security/authentication-and-authorization/flows/resource_owner_password_flow",
          id: "security/authentication-and-authorization/flows/resource_owner_password_flow",
          title: "Resource Owner Password Flow",
          description: "Resource Owner Password Flow (ROP) is an OAuth",
          source:
            "@site/docs/security/authentication-and-authorization/flows/resource_owner_password_flow.md",
          sourceDirName: "security/authentication-and-authorization/flows",
          slug: "/security/authentication-and-authorization/flows/resource_owner_password_flow",
          permalink:
            "/docs/security/authentication-and-authorization/flows/resource_owner_password_flow",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Authorization Code Flow",
            permalink:
              "/docs/security/authentication-and-authorization/flows/authorization_code_flow",
          },
          next: {
            title: "IAM",
            permalink: "/docs/security/authentication-and-authorization/iam",
          },
        },
        d = {},
        w = [],
        l = { toc: w };
      function h(o) {
        var t = o.components,
          e = (0, r.Z)(o, s);
        return (0, n.kt)(
          "wrapper",
          (0, a.Z)({}, l, e, { components: t, mdxType: "MDXLayout" }),
          (0, n.kt)(
            "h1",
            { id: "resource-owner-password-flow" },
            "Resource Owner Password Flow"
          ),
          (0, n.kt)(
            "p",
            null,
            (0, n.kt)(
              "strong",
              { parentName: "p" },
              "Resource Owner Password Flow"
            ),
            " (",
            (0, n.kt)("strong", { parentName: "p" }, "ROP"),
            ") is an ",
            (0, n.kt)(
              "a",
              {
                parentName: "p",
                href: "/docs/security/authentication-and-authorization/protocols/oauth",
              },
              "OAuth"
            ),
            "\nflow. This means the server handles a plain-text password, and should only be\nused if the Authorization Code Flow cannot be used."
          )
        );
      }
      h.isMDXComponent = !0;
    },
  },
]);
