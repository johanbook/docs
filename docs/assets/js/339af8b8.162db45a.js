"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [9224],
  {
    767: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => p,
          contentTitle: () => o,
          default: () => h,
          frontMatter: () => c,
          metadata: () => u,
          toc: () => d,
        });
      var i = r(7462),
        a = r(3366),
        n = (r(7294), r(3905)),
        s = (r(828), ["components"]),
        c = {},
        o = "Digital signature",
        u = {
          unversionedId: "security/cryptography/signature",
          id: "security/cryptography/signature",
          title: "Digital signature",
          description:
            "A digital signature is a signature that can be used to verify the integrity",
          source: "@site/docs/security/cryptography/signature.md",
          sourceDirName: "security/cryptography",
          slug: "/security/cryptography/signature",
          permalink: "/docs/security/cryptography/signature",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Random numbers",
            permalink: "/docs/security/cryptography/random_numbers",
          },
          next: {
            title: "Access Controls",
            permalink: "/docs/security/defense/access-controls",
          },
        },
        p = {},
        d = [],
        g = { toc: d };
      function h(e) {
        var t = e.components,
          r = (0, a.Z)(e, s);
        return (0, n.kt)(
          "wrapper",
          (0, i.Z)({}, g, r, { components: t, mdxType: "MDXLayout" }),
          (0, n.kt)("h1", { id: "digital-signature" }, "Digital signature"),
          (0, n.kt)(
            "p",
            null,
            "A ",
            (0, n.kt)("strong", { parentName: "p" }, "digital signature"),
            " is a signature that can be used to verify the integrity\nof a piece of data. A signature is created by encryption the ",
            (0, n.kt)("a", { parentName: "p", href: "./hashing" }, "hash"),
            "\nof the data with one's private key. The signature can then be decrypted with\ncorresponding public key and hash used to verify whatever was signed. If\nsomething is signed the receiving part can be confirm the message has not been\ntampered with and is in fact from the sender."
          ),
          (0, n.kt)("p", null, "Such a signature can be juridically binding.")
        );
      }
      h.isMDXComponent = !0;
    },
  },
]);
