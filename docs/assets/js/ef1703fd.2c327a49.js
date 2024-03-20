"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [9691],
  {
    7276: (t, o, e) => {
      e.r(o),
        e.d(o, {
          assets: () => l,
          contentTitle: () => c,
          default: () => p,
          frontMatter: () => r,
          metadata: () => u,
          toc: () => d,
        });
      var n = e(7462),
        i = e(3366),
        a = (e(7294), e(3905)),
        s = (e(828), ["components"]),
        r = {},
        c = "Protocols",
        u = {
          unversionedId:
            "security/authentication-and-authorization/protocols/README",
          id: "security/authentication-and-authorization/protocols/README",
          title: "Protocols",
          description:
            "In this document we will look into some different standards for authentication",
          source:
            "@site/docs/security/authentication-and-authorization/protocols/README.md",
          sourceDirName: "security/authentication-and-authorization/protocols",
          slug: "/security/authentication-and-authorization/protocols/",
          permalink:
            "/docs/security/authentication-and-authorization/protocols/",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "IAM",
            permalink: "/docs/security/authentication-and-authorization/iam",
          },
          next: {
            title: "OAuth",
            permalink:
              "/docs/security/authentication-and-authorization/protocols/oauth",
          },
        },
        l = {},
        d = [],
        h = { toc: d };
      function p(t) {
        var o = t.components,
          e = (0, i.Z)(t, s);
        return (0, a.kt)(
          "wrapper",
          (0, n.Z)({}, h, e, { components: o, mdxType: "MDXLayout" }),
          (0, a.kt)("h1", { id: "protocols" }, "Protocols"),
          (0, a.kt)(
            "p",
            null,
            "In this document we will look into some different standards for authentication\nand authorization. Note that OpenID and OAuth are protocols for letting a third\nparty access your resources."
          ),
          (0, a.kt)("p", null, "First let's introduce some terminology:"),
          (0, a.kt)(
            "ul",
            null,
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)("strong", { parentName: "li" }, "Single Sign-On"),
              " A process where a user signs in once to access all services\nin a system. The user should not need to enter credentials again. Can be\nimplemented with domain-wide cookies (assuming the whole system is contained\nto a single domain)."
            )
          )
        );
      }
      p.isMDXComponent = !0;
    },
  },
]);
