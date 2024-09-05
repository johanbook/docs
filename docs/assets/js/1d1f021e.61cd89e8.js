"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [5898],
  {
    7049: (e, t, i) => {
      i.r(t),
        i.d(t, {
          assets: () => u,
          contentTitle: () => l,
          default: () => p,
          frontMatter: () => o,
          metadata: () => c,
          toc: () => d,
        });
      var s = i(7462),
        n = i(3366),
        a = (i(7294), i(3905)),
        r = (i(828), ["components"]),
        o = {},
        l = "CSRF",
        c = {
          unversionedId: "security/vulnerabilities/csrf",
          id: "security/vulnerabilities/csrf",
          title: "CSRF",
          description:
            "Cross Site Request Forgery (CSRF or XSRF) is an attack where one",
          source: "@site/docs/security/vulnerabilities/csrf.md",
          sourceDirName: "security/vulnerabilities",
          slug: "/security/vulnerabilities/csrf",
          permalink: "/docs/security/vulnerabilities/csrf",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Buffer Overflow",
            permalink: "/docs/security/vulnerabilities/buffer_overflow",
          },
          next: {
            title: "DNS Cache Poisoning",
            permalink: "/docs/security/vulnerabilities/dns_poisoning",
          },
        },
        u = {},
        d = [
          { value: "Example", id: "example", level: 2 },
          { value: "Countermeasures", id: "countermeasures", level: 2 },
          { value: "Anti-CSRF Tokens", id: "anti-csrf-tokens", level: 3 },
          { value: "SameSite cookies", id: "samesite-cookies", level: 3 },
        ],
        m = { toc: d };
      function p(e) {
        var t = e.components,
          i = (0, n.Z)(e, r);
        return (0, a.kt)(
          "wrapper",
          (0, s.Z)({}, m, i, { components: t, mdxType: "MDXLayout" }),
          (0, a.kt)("h1", { id: "csrf" }, "CSRF"),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)(
              "strong",
              { parentName: "p" },
              "Cross Site Request Forgery"
            ),
            " (",
            (0, a.kt)("strong", { parentName: "p" }, "CSRF"),
            " or ",
            (0, a.kt)("strong", { parentName: "p" }, "XSRF"),
            ") is an attack where one\nwebsite sends requests as if where another site. This is especially a problem if\nauthentication is handled by cookies."
          ),
          (0, a.kt)("h2", { id: "example" }, "Example"),
          (0, a.kt)(
            "p",
            null,
            "Consider the following ",
            (0, a.kt)(
              "a",
              { parentName: "p", href: "/docs/programming/data_formats/html" },
              "HTML"
            ),
            ":"
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-html" },
              '<body onload="document.forms[0].submit()">\n  <form action="the-victim.com/do-stuff" method="POST">\n    <input type="submit" value="View cats" />\n  </form>\n</body>\n'
            )
          ),
          (0, a.kt)(
            "p",
            null,
            "When a user visits this page, he is directed to ",
            (0, a.kt)(
              "inlineCode",
              { parentName: "p" },
              "the-victim.com/do-stuff"
            ),
            " with a\n",
            (0, a.kt)("inlineCode", { parentName: "p" }, "POST"),
            " request in where the browser also adds the cookies of that site."
          ),
          (0, a.kt)(
            "p",
            null,
            "The attacker's site can also be embedded in an iframe on another site with the\nsame effect."
          ),
          (0, a.kt)("h2", { id: "countermeasures" }, "Countermeasures"),
          (0, a.kt)("h3", { id: "anti-csrf-tokens" }, "Anti-CSRF Tokens"),
          (0, a.kt)(
            "p",
            null,
            "This can be mitigated by introducing a CSRF token, which is randomized every\ntime the site is served. This token must then be verified before the action is\nexecuted."
          ),
          (0, a.kt)(
            "p",
            null,
            "Anti-CSRF tokens are mainly meant for server-side render sites, and is more\ndifficult to apply to a client-rendered SPA. However, one can instead transmit\nit in a custom HTTP header."
          ),
          (0, a.kt)("h3", { id: "samesite-cookies" }, "SameSite cookies"),
          (0, a.kt)(
            "p",
            null,
            "By using the ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "SameSite"),
            " attribute in authentication cookies it impedes these\nattacks as cookies are not included CORS requests."
          )
        );
      }
      p.isMDXComponent = !0;
    },
  },
]);
