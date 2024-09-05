"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [7416],
  {
    5130: (e, a, r) => {
      r.r(a),
        r.d(a, {
          assets: () => l,
          contentTitle: () => c,
          default: () => d,
          frontMatter: () => i,
          metadata: () => m,
          toc: () => u,
        });
      var t = r(7462),
        n = r(3366),
        s = (r(7294), r(3905)),
        o = (r(828), ["components"]),
        i = {},
        c = "Ransomware",
        m = {
          unversionedId: "security/malware/ransomware",
          id: "security/malware/ransomware",
          title: "Ransomware",
          description:
            "Ransomware is a type of malware that holds your data in ransom. The program",
          source: "@site/docs/security/malware/ransomware.md",
          sourceDirName: "security/malware",
          slug: "/security/malware/ransomware",
          permalink: "/docs/security/malware/ransomware",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "JWT", permalink: "/docs/security/jwt" },
          next: { title: "Trojan", permalink: "/docs/security/malware/trojan" },
        },
        l = {},
        u = [],
        p = { toc: u };
      function d(e) {
        var a = e.components,
          r = (0, n.Z)(e, o);
        return (0, s.kt)(
          "wrapper",
          (0, t.Z)({}, p, r, { components: a, mdxType: "MDXLayout" }),
          (0, s.kt)("h1", { id: "ransomware" }, "Ransomware"),
          (0, s.kt)(
            "p",
            null,
            (0, s.kt)("strong", { parentName: "p" }, "Ransomware"),
            " is a type of malware that holds your data in ransom. The program\n",
            (0, s.kt)(
              "a",
              {
                parentName: "p",
                href: "../../security/cryptography/encryption",
              },
              "encrypts"
            ),
            " some files and typically\nrequires cryptocurrency in exchange to decrypt the data. One infamous example is\nthe Wannacry malware discovered in 2007. Wannacry used the EternalBlue\nvulnerability."
          )
        );
      }
      d.isMDXComponent = !0;
    },
  },
]);
