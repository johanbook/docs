"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [2320],
  {
    5450: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => h,
          contentTitle: () => c,
          default: () => p,
          frontMatter: () => r,
          metadata: () => l,
          toc: () => u,
        });
      var i = n(7462),
        a = n(3366),
        s = (n(7294), n(3905)),
        o = (n(828), ["components"]),
        r = {},
        c = "Web authentication",
        l = {
          unversionedId:
            "security/authentication-and-authorization/web_authentication",
          id: "security/authentication-and-authorization/web_authentication",
          title: "Web authentication",
          description:
            "Web authentication typically works differently than e.g. API/CLI",
          source:
            "@site/docs/security/authentication-and-authorization/web_authentication.md",
          sourceDirName: "security/authentication-and-authorization",
          slug: "/security/authentication-and-authorization/web_authentication",
          permalink:
            "/docs/security/authentication-and-authorization/web_authentication",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "SAML",
            permalink:
              "/docs/security/authentication-and-authorization/protocols/saml",
          },
          next: { title: "Cookies", permalink: "/docs/security/cookies" },
        },
        h = {},
        u = [
          { value: "Cookies", id: "cookies", level: 2 },
          { value: "Tokens", id: "tokens", level: 2 },
          {
            value: "Sessions vs Session-less",
            id: "sessions-vs-session-less",
            level: 2,
          },
        ],
        d = { toc: u };
      function p(e) {
        var t = e.components,
          n = (0, a.Z)(e, o);
        return (0, s.kt)(
          "wrapper",
          (0, i.Z)({}, d, n, { components: t, mdxType: "MDXLayout" }),
          (0, s.kt)("h1", { id: "web-authentication" }, "Web authentication"),
          (0, s.kt)(
            "p",
            null,
            (0, s.kt)("strong", { parentName: "p" }, "Web authentication"),
            " typically works differently than e.g. API/CLI\nauthentication as one can rely on the mechanisms of web browsers. Web\nauthentication will take place over\n",
            (0, s.kt)(
              "a",
              { parentName: "p", href: "/docs/network/protocols/http/" },
              "HTTP(S)"
            ),
            ". Considering that HTTP is a\nstateless protocol, each request often must contain one or several secrets to be\nauthenticated and authorized. This information can live either in the HTTP\nheaders (or cookies) or in its body. Of these options using the HTTP headers /\ncookies are the most."
          ),
          (0, s.kt)("h2", { id: "cookies" }, "Cookies"),
          (0, s.kt)(
            "p",
            null,
            "Cookies suit well for authentication due how browsers treat them. Using\ndomain-wide cookies one can achieve a SSO. However, it has the following\ndrawbacks:"
          ),
          (0, s.kt)(
            "ul",
            null,
            (0, s.kt)(
              "li",
              { parentName: "ul" },
              "Requires cookies to be allowed in browser"
            ),
            (0, s.kt)(
              "li",
              { parentName: "ul" },
              "Opens exposure to ",
              (0, s.kt)(
                "a",
                {
                  parentName: "li",
                  href: "/docs/security/vulnerabilities/csrf",
                },
                "XSRF"
              )
            )
          ),
          (0, s.kt)("h2", { id: "tokens" }, "Tokens"),
          (0, s.kt)(
            "p",
            null,
            "One can instead of cookies use a token which is programmatically inserted into\nrequest headers. However, this requires running JavaScript/PHP and that being\nallowed in the browser and inserts the token into the headers of each request."
          ),
          (0, s.kt)(
            "p",
            null,
            "A problem is where the token should be stored if one aims to achieve SSO.\nStoring data in any web storage is as of now susceptible to\n",
            (0, s.kt)(
              "a",
              { parentName: "p", href: "../vulnerabilities/xss" },
              "XSS"
            ),
            "."
          ),
          (0, s.kt)(
            "h2",
            { id: "sessions-vs-session-less" },
            "Sessions vs Session-less"
          ),
          (0, s.kt)(
            "p",
            null,
            "One can either use a stateless approach (client has all information needed for\nvalidation) or a stateful approach where the system creates a session and gives\nthe client a session id (SID)."
          ),
          (0, s.kt)(
            "p",
            null,
            "If using a session-based approach, one can store IP and confirm that it matches.\nSession can also be revoked. However it is very important that the SID is\ngenerated ",
            (0, s.kt)("strong", { parentName: "p" }, "with high entropy"),
            ", otherwise it can be cracked."
          ),
          (0, s.kt)(
            "p",
            null,
            "If running multiple servers, one will need a sticky session (or a dedicated\nauthentication server / database tables)."
          )
        );
      }
      p.isMDXComponent = !0;
    },
  },
]);
