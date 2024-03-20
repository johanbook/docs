"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [2435],
  {
    6379: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => u,
          contentTitle: () => c,
          default: () => m,
          frontMatter: () => o,
          metadata: () => d,
          toc: () => l,
        });
      var a = n(7462),
        s = n(3366),
        i = (n(7294), n(3905)),
        r = (n(828), ["components"]),
        o = {},
        c = "JWT",
        d = {
          unversionedId: "security/jwt",
          id: "security/jwt",
          title: "JWT",
          description: "A JSON Web Token (JWT) is a JSON",
          source: "@site/docs/security/jwt.md",
          sourceDirName: "security",
          slug: "/security/jwt",
          permalink: "/docs/security/jwt",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Zero trust networking",
            permalink: "/docs/security/defense/ztn",
          },
          next: {
            title: "Ransomware",
            permalink: "/docs/security/malware/ransomware",
          },
        },
        u = {},
        l = [
          { value: "Structure", id: "structure", level: 2 },
          { value: "Security", id: "security", level: 2 },
        ],
        p = { toc: l };
      function m(e) {
        var t = e.components,
          n = (0, s.Z)(e, r);
        return (0, i.kt)(
          "wrapper",
          (0, a.Z)({}, p, n, { components: t, mdxType: "MDXLayout" }),
          (0, i.kt)("h1", { id: "jwt" }, "JWT"),
          (0, i.kt)(
            "p",
            null,
            "A ",
            (0, i.kt)("strong", { parentName: "p" }, "JSON Web Token"),
            " (",
            (0, i.kt)("strong", { parentName: "p" }, "JWT"),
            ") is a ",
            (0, i.kt)(
              "a",
              { parentName: "p", href: "../programming/data_formats/json" },
              "JSON"
            ),
            "\nencoded string that contains one or several claims. JWTs are signed and can be\nused to communicate authentication or authorization. As these tokens are base64\nencoded they are also URL-safe."
          ),
          (0, i.kt)("h2", { id: "structure" }, "Structure"),
          (0, i.kt)(
            "p",
            null,
            "A JWT consists of three base64 encoded JSON parts delimited by periods. It has a\nheader, payload (claims) and a signature. The header contains algorithm and\ntoken type. The payload can be something like"
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-js" },
              '{\n  sub: "my-user-id", // subject, can be e.g. user id\n  name: "my-name", // custom claim\n  iat: 14328 // issued at\n}\n'
            )
          ),
          (0, i.kt)(
            "p",
            null,
            "A JWT section can be identified by the prefix ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "eyJ"),
            " which is an encoding of\n",
            (0, i.kt)("inlineCode", { parentName: "p" }, '{"'),
            "."
          ),
          (0, i.kt)("h2", { id: "security" }, "Security"),
          (0, i.kt)(
            "p",
            null,
            "Since a JWT is signed, any tampering with it will invalidate it. However, since\nJWT are meant to be public they should contain no sensitive data. They should\ntypically be short-lived."
          ),
          (0, i.kt)(
            "p",
            null,
            "If the JWT signing secret is cracked, the system using JWTs is also compromised.\nIt is is therefore important to have many bits of entropy when generating a\nsigning secret."
          )
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
