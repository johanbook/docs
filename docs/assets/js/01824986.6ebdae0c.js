"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [7268],
  {
    4330: (e, t, o) => {
      o.r(t),
        o.d(t, {
          assets: () => l,
          contentTitle: () => c,
          default: () => p,
          frontMatter: () => s,
          metadata: () => k,
          toc: () => u,
        });
      var i = o(7462),
        r = o(3366),
        a = (o(7294), o(3905)),
        n = (o(828), ["components"]),
        s = {},
        c = "Cookies",
        k = {
          unversionedId: "security/cookies",
          id: "security/cookies",
          title: "Cookies",
          description:
            "Cookies are pieces of data stored in web browser and forwarded with each",
          source: "@site/docs/security/cookies.md",
          sourceDirName: "security",
          slug: "/security/cookies",
          permalink: "/docs/security/cookies",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Web authentication",
            permalink:
              "/docs/security/authentication-and-authorization/web_authentication",
          },
          next: {
            title: "Encryption",
            permalink: "/docs/security/cryptography/encryption",
          },
        },
        l = {},
        u = [{ value: "Tracking cookies", id: "tracking-cookies", level: 2 }],
        d = { toc: u };
      function p(e) {
        var t = e.components,
          o = (0, r.Z)(e, n);
        return (0, a.kt)(
          "wrapper",
          (0, i.Z)({}, d, o, { components: t, mdxType: "MDXLayout" }),
          (0, a.kt)("h1", { id: "cookies" }, "Cookies"),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)("strong", { parentName: "p" }, "Cookies"),
            " are pieces of data stored in web browser and forwarded with each\nrequest when visiting a web site for a given domain. Some attributes of cookies\nare"
          ),
          (0, a.kt)(
            "ul",
            null,
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)("strong", { parentName: "li" }, "HttpOnly"),
              " meaning the cookie cannot be read by JavaScript in the browser."
            ),
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)("strong", { parentName: "li" }, "SameSite"),
              " no CORS."
            ),
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)("strong", { parentName: "li" }, "Secure"),
              " the cookie is only transmitted over HTTPS."
            )
          ),
          (0, a.kt)("h2", { id: "tracking-cookies" }, "Tracking cookies"),
          (0, a.kt)(
            "p",
            null,
            "One special type of cookies is third party cookies, also known as tracking\ncookies. There are cookies delivered to a website from another domain through an\niframe (or image). This allows the third party to create a browser-persistent ID\nwhich allows tracking of the user."
          ),
          (0, a.kt)(
            "p",
            null,
            "Tracking cookies will be phased out during 2024."
          )
        );
      }
      p.isMDXComponent = !0;
    },
  },
]);
