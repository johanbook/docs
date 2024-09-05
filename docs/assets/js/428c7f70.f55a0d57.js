"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [2199],
  {
    8898: (t, e, i) => {
      i.r(e),
        i.d(e, {
          assets: () => u,
          contentTitle: () => o,
          default: () => x,
          frontMatter: () => l,
          metadata: () => c,
          toc: () => d,
        });
      var r = i(7462),
        n = i(3366),
        s = (i(7294), i(3905)),
        a = (i(828), ["components"]),
        l = {},
        o = "XML External Entity",
        c = {
          unversionedId: "security/vulnerabilities/xxe",
          id: "security/vulnerabilities/xxe",
          title: "XML External Entity",
          description: "XML External Entity (XXE) is a",
          source: "@site/docs/security/vulnerabilities/xxe.md",
          sourceDirName: "security/vulnerabilities",
          slug: "/security/vulnerabilities/xxe",
          permalink: "/docs/security/vulnerabilities/xxe",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "XSS",
            permalink: "/docs/security/vulnerabilities/xss",
          },
          next: { title: "Testing", permalink: "/docs/testing/" },
        },
        u = {},
        d = [],
        p = { toc: d };
      function x(t) {
        var e = t.components,
          i = (0, n.Z)(t, a);
        return (0, s.kt)(
          "wrapper",
          (0, r.Z)({}, p, i, { components: e, mdxType: "MDXLayout" }),
          (0, s.kt)("h1", { id: "xml-external-entity" }, "XML External Entity"),
          (0, s.kt)(
            "p",
            null,
            (0, s.kt)("strong", { parentName: "p" }, "XML External Entity"),
            " (",
            (0, s.kt)("strong", { parentName: "p" }, "XXE"),
            ") is a\n",
            (0, s.kt)(
              "a",
              { parentName: "p", href: "/docs/programming/data_formats/xml" },
              "XML"
            ),
            " vulnerability where an attacker can\nget access to a file system. It is considered a OWASP 10 vulnerability."
          )
        );
      }
      x.isMDXComponent = !0;
    },
  },
]);
