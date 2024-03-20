"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [1419],
  {
    7435: (t, e, a) => {
      a.r(e),
        a.d(e, {
          assets: () => d,
          contentTitle: () => u,
          default: () => h,
          frontMatter: () => s,
          metadata: () => c,
          toc: () => l,
        });
      var n = a(7462),
        i = a(3366),
        o = (a(7294), a(3905)),
        r = (a(828), ["components"]),
        s = {},
        u = "IAM",
        c = {
          unversionedId: "security/authentication-and-authorization/iam",
          id: "security/authentication-and-authorization/iam",
          title: "IAM",
          description:
            "Identity and Access Management (IAM) is management of authorization and",
          source: "@site/docs/security/authentication-and-authorization/iam.md",
          sourceDirName: "security/authentication-and-authorization",
          slug: "/security/authentication-and-authorization/iam",
          permalink: "/docs/security/authentication-and-authorization/iam",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Resource Owner Password Flow",
            permalink:
              "/docs/security/authentication-and-authorization/flows/resource_owner_password_flow",
          },
          next: {
            title: "Protocols",
            permalink:
              "/docs/security/authentication-and-authorization/protocols/",
          },
        },
        d = {},
        l = [
          { value: "Realm", id: "realm", level: 2 },
          { value: "Federation", id: "federation", level: 2 },
        ],
        m = { toc: l };
      function h(t) {
        var e = t.components,
          a = (0, i.Z)(t, r);
        return (0, o.kt)(
          "wrapper",
          (0, n.Z)({}, m, a, { components: e, mdxType: "MDXLayout" }),
          (0, o.kt)("h1", { id: "iam" }, "IAM"),
          (0, o.kt)(
            "p",
            null,
            (0, o.kt)(
              "strong",
              { parentName: "p" },
              "Identity and Access Management"
            ),
            " (",
            (0, o.kt)("strong", { parentName: "p" }, "IAM"),
            ") is management of authorization and\nauthentication."
          ),
          (0, o.kt)("h2", { id: "realm" }, "Realm"),
          (0, o.kt)(
            "p",
            null,
            "A realm is a circle of trust in where each service trusts each other."
          ),
          (0, o.kt)("h2", { id: "federation" }, "Federation"),
          (0, o.kt)(
            "p",
            null,
            "A federation establishes trusts in between different realms."
          )
        );
      }
      h.isMDXComponent = !0;
    },
  },
]);
