"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [4686],
  {
    7040: (e, i, n) => {
      n.r(i),
        n.d(i, {
          assets: () => l,
          contentTitle: () => c,
          default: () => m,
          frontMatter: () => r,
          metadata: () => u,
          toc: () => d,
        });
      var s = n(7462),
        t = n(3366),
        a = (n(7294), n(3905)),
        o = (n(828), ["components"]),
        r = {},
        c = "DNS Cache Poisoning",
        u = {
          unversionedId: "security/vulnerabilities/dns_poisoning",
          id: "security/vulnerabilities/dns_poisoning",
          title: "DNS Cache Poisoning",
          description:
            "DNS Cache Poisoning is when an attacker inserts malicious records into a DNS",
          source: "@site/docs/security/vulnerabilities/dns_poisoning.md",
          sourceDirName: "security/vulnerabilities",
          slug: "/security/vulnerabilities/dns_poisoning",
          permalink: "/docs/security/vulnerabilities/dns_poisoning",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "CSRF",
            permalink: "/docs/security/vulnerabilities/csrf",
          },
          next: {
            title: "Denial of Service",
            permalink: "/docs/security/vulnerabilities/dos",
          },
        },
        l = {},
        d = [],
        p = { toc: d };
      function m(e) {
        var i = e.components,
          n = (0, t.Z)(e, o);
        return (0, a.kt)(
          "wrapper",
          (0, s.Z)({}, p, n, { components: i, mdxType: "MDXLayout" }),
          (0, a.kt)("h1", { id: "dns-cache-poisoning" }, "DNS Cache Poisoning"),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)("strong", { parentName: "p" }, "DNS Cache Poisoning"),
            " is when an attacker inserts malicious records into a DNS\ncache. This can be accomplished by an attacker issues a DNS query and sends a\nresponse impersonating an authoritative nameserver."
          )
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
