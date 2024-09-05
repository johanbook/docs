"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [8437],
  {
    3560: (e, i, t) => {
      t.r(i),
        t.d(i, {
          assets: () => u,
          contentTitle: () => l,
          default: () => k,
          frontMatter: () => r,
          metadata: () => c,
          toc: () => p,
        });
      var n = t(7462),
        a = t(3366),
        o = (t(7294), t(3905)),
        s = (t(828), ["components"]),
        r = {},
        l = "OWASP",
        c = {
          unversionedId: "security/owasp",
          id: "security/owasp",
          title: "OWASP",
          description:
            "The Open Web Application Security Project (OWASP) is a collection of",
          source: "@site/docs/security/owasp.md",
          sourceDirName: "security",
          slug: "/security/owasp",
          permalink: "/docs/security/owasp",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "Worm", permalink: "/docs/security/malware/worm" },
          next: {
            title: "Scanning",
            permalink: "/docs/security/pentesting/scanning",
          },
        },
        u = {},
        p = [
          { value: "1 - Injection", id: "1---injection", level: 2 },
          {
            value: "2 - Broken Authentication",
            id: "2---broken-authentication",
            level: 2,
          },
          {
            value: "3 - Sensitive Data Exposure",
            id: "3---sensitive-data-exposure",
            level: 2,
          },
          {
            value: "4 - XML Eternal Entity",
            id: "4---xml-eternal-entity",
            level: 2,
          },
          {
            value: "5 - Broken Access Control",
            id: "5---broken-access-control",
            level: 2,
          },
          {
            value: "6 - Security Misconfiguration",
            id: "6---security-misconfiguration",
            level: 2,
          },
          {
            value: "7 - Cross Site Scripting",
            id: "7---cross-site-scripting",
            level: 2,
          },
          {
            value: "8 - Unsafe Serialization",
            id: "8---unsafe-serialization",
            level: 2,
          },
          {
            value: "9 - Components With Known Vulnerabilities",
            id: "9---components-with-known-vulnerabilities",
            level: 2,
          },
          {
            value: "10 - Insufficient Logging And Monitoring",
            id: "10---insufficient-logging-and-monitoring",
            level: 2,
          },
        ],
        d = { toc: p };
      function k(e) {
        var i = e.components,
          t = (0, a.Z)(e, s);
        return (0, o.kt)(
          "wrapper",
          (0, n.Z)({}, d, t, { components: i, mdxType: "MDXLayout" }),
          (0, o.kt)("h1", { id: "owasp" }, "OWASP"),
          (0, o.kt)(
            "p",
            null,
            "The ",
            (0, o.kt)(
              "strong",
              { parentName: "p" },
              "Open Web Application Security Project"
            ),
            " (",
            (0, o.kt)("strong", { parentName: "p" }, "OWASP"),
            ") is a collection of\ncommon vulnerabilities in web apps."
          ),
          (0, o.kt)("h2", { id: "1---injection" }, "1 - Injection"),
          (0, o.kt)(
            "p",
            null,
            "Command injection in different forms. One example is\n",
            (0, o.kt)(
              "a",
              { parentName: "p", href: "./vulnerabilities/sqli" },
              "SQLI"
            ),
            "."
          ),
          (0, o.kt)(
            "h2",
            { id: "2---broken-authentication" },
            "2 - Broken Authentication"
          ),
          (0, o.kt)("p", null, "If authentication is not working properly."),
          (0, o.kt)(
            "h2",
            { id: "3---sensitive-data-exposure" },
            "3 - Sensitive Data Exposure"
          ),
          (0, o.kt)(
            "p",
            null,
            "An app exposes sensitive information. One example is\n",
            (0, o.kt)(
              "a",
              { parentName: "p", href: "./vulnerabilities/lfi" },
              "LFI"
            ),
            "."
          ),
          (0, o.kt)(
            "h2",
            { id: "4---xml-eternal-entity" },
            "4 - XML Eternal Entity"
          ),
          (0, o.kt)(
            "p",
            null,
            (0, o.kt)(
              "a",
              { parentName: "p", href: "./vulnerabilities/xxe" },
              "XEE"
            ),
            " is a vulnerability in applications that uses XML as\ntransport protocol. It might expose internal files."
          ),
          (0, o.kt)(
            "h2",
            { id: "5---broken-access-control" },
            "5 - Broken Access Control"
          ),
          (0, o.kt)("p", null, "Attackers can bypass authorization."),
          (0, o.kt)(
            "h2",
            { id: "6---security-misconfiguration" },
            "6 - Security Misconfiguration"
          ),
          (0, o.kt)(
            "p",
            null,
            "This includes abundant privileges, default passwords, etc."
          ),
          (0, o.kt)(
            "h2",
            { id: "7---cross-site-scripting" },
            "7 - Cross Site Scripting"
          ),
          (0, o.kt)(
            "p",
            null,
            (0, o.kt)(
              "a",
              { parentName: "p", href: "./vulnerabilities/xss" },
              "XSS"
            ),
            " is a vulnerability where an attacker can inject\nJavascript to the end users of the application."
          ),
          (0, o.kt)(
            "h2",
            { id: "8---unsafe-serialization" },
            "8 - Unsafe Serialization"
          ),
          (0, o.kt)(
            "h2",
            { id: "9---components-with-known-vulnerabilities" },
            "9 - Components With Known Vulnerabilities"
          ),
          (0, o.kt)(
            "p",
            null,
            "This is when an application has a dependency with known vulnerabilities. This is\nextremely dangerous as exploits might already be common knowledge."
          ),
          (0, o.kt)(
            "h2",
            { id: "10---insufficient-logging-and-monitoring" },
            "10 - Insufficient Logging And Monitoring"
          ),
          (0, o.kt)(
            "p",
            null,
            "Attackers can go undetected. If detected it is more difficult to do any damage\ncontrol. See the ",
            (0, o.kt)(
              "a",
              { parentName: "p", href: "../devops/monitoring/telemetry" },
              "docs on telemetry"
            ),
            " on how\nlogging and monitoring should be done."
          ),
          (0, o.kt)(
            "p",
            null,
            "The average time for detecting a breach is 200 days."
          )
        );
      }
      k.isMDXComponent = !0;
    },
  },
]);
