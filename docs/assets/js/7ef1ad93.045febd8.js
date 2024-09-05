"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [8591],
  {
    6034: (e, t, a) => {
      a.r(t),
        a.d(t, {
          assets: () => m,
          contentTitle: () => l,
          default: () => c,
          frontMatter: () => s,
          metadata: () => u,
          toc: () => d,
        });
      var i = a(7462),
        n = a(3366),
        r = (a(7294), a(3905)),
        o = (a(828), ["components"]),
        s = {},
        l = "Threat modelling",
        u = {
          unversionedId: "security/threat_modelling",
          id: "security/threat_modelling",
          title: "Threat modelling",
          description:
            "Threat modelling is the process of identifying potential and proposing",
          source: "@site/docs/security/threat_modelling.md",
          sourceDirName: "security",
          slug: "/security/threat_modelling",
          permalink: "/docs/security/threat_modelling",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Steganography",
            permalink: "/docs/security/steganography",
          },
          next: {
            title: "Buffer Overflow",
            permalink: "/docs/security/vulnerabilities/buffer_overflow",
          },
        },
        m = {},
        d = [
          { value: "Trust boundaries", id: "trust-boundaries", level: 2 },
          { value: "CIA", id: "cia", level: 2 },
          { value: "STRIDE", id: "stride", level: 2 },
          { value: "LINDDUN", id: "linddun", level: 2 },
          { value: "PASTA", id: "pasta", level: 2 },
        ],
        p = { toc: d };
      function c(e) {
        var t = e.components,
          a = (0, n.Z)(e, o);
        return (0, r.kt)(
          "wrapper",
          (0, i.Z)({}, p, a, { components: t, mdxType: "MDXLayout" }),
          (0, r.kt)("h1", { id: "threat-modelling" }, "Threat modelling"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("strong", { parentName: "p" }, "Threat modelling"),
            " is the process of identifying potential and proposing\nmitigating actions. There are several frameworks and tools for doing this. Some\nuseful tools are"
          ),
          (0, r.kt)(
            "ul",
            null,
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("a", { parentName: "li", href: "owasp" }, "OWASP")
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)(
                "a",
                { parentName: "li", href: "https://attack.mitre.org" },
                "MITRE ATT3CK Framework"
              )
            )
          ),
          (0, r.kt)("h2", { id: "trust-boundaries" }, "Trust boundaries"),
          (0, r.kt)(
            "p",
            null,
            "A trust boundary is a boundary in a system where trust changes. This means that\ndata validation must take place in the node(s) with higher trust."
          ),
          (0, r.kt)("h2", { id: "cia" }, "CIA"),
          (0, r.kt)(
            "p",
            null,
            "The ",
            (0, r.kt)("strong", { parentName: "p" }, "CIA"),
            " triad is a data-centric framework for modelling threats. It consists\nof"
          ),
          (0, r.kt)(
            "ul",
            null,
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "Confidentiality"),
              " means the data cannot be accessed without authentication\nand authorization. This can be accomplished by e.g. implementing multi-factor\nauthentication."
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "Integrity"),
              " means the data cannot be modified without proper authorization,\nmeaning that that authorized users cannot make unauthorized changes."
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "Availability"),
              " means that data should be available. Availability would be\ncompromised if the service went down due to a\n",
              (0, r.kt)(
                "a",
                { parentName: "li", href: "./vulnerabilities/dos" },
                "DoS attack"
              ),
              "."
            )
          ),
          (0, r.kt)("h2", { id: "stride" }, "STRIDE"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("strong", { parentName: "p" }, "STRIDE"),
            " is a framework for threat modelling. It focuses on six areas of\nthreats:"
          ),
          (0, r.kt)(
            "ul",
            null,
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "Spoofing"),
              " is claiming to be something that you are not. It compromises\nauthenticity. One example is ",
              (0, r.kt)(
                "a",
                { parentName: "li", href: "./vulnerabilities/csrf" },
                "CSRF"
              ),
              "."
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "Tempering"),
              " is unauthorized data alteration. This compromises integrity."
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "Repudiation"),
              " is altering logs or auditing of service. Violates\nnon-repudiation. One example would be overwriting system logs."
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)(
                "strong",
                { parentName: "li" },
                "Information disclosure"
              ),
              " is accessing confidential information. Compromises\nconfidentiality."
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "Denial of Service"),
              " is bring the service down. Compromises availability. One\nexample is a classical ",
              (0, r.kt)(
                "a",
                { parentName: "li", href: "./vulnerabilities/dos" },
                "DoS attack"
              ),
              " or exploiting\nsystem weaknesses to use more resources than intended."
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)(
                "strong",
                { parentName: "li" },
                "Elevation of Privilege"
              ),
              " is performing unauthorized actions through\nprivilege escalation."
            )
          ),
          (0, r.kt)("h2", { id: "linddun" }, "LINDDUN"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("strong", { parentName: "p" }, "LINDDUN"),
            " is a framework for identifying threats."
          ),
          (0, r.kt)("h2", { id: "pasta" }, "PASTA"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)(
              "strong",
              { parentName: "p" },
              "Process for Attack Simulation and Threat Analysis"
            ),
            " (",
            (0, r.kt)("strong", { parentName: "p" }, "PASTA"),
            ") consists of\nseven steps."
          )
        );
      }
      c.isMDXComponent = !0;
    },
  },
]);
