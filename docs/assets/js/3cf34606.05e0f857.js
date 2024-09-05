"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [401],
  {
    3229: (t, e, i) => {
      i.r(e),
        i.d(e, {
          assets: () => p,
          contentTitle: () => l,
          default: () => f,
          frontMatter: () => c,
          metadata: () => s,
          toc: () => u,
        });
      var r = i(7462),
        o = i(3366),
        a = (i(7294), i(3905)),
        n = (i(828), ["components"]),
        c = {},
        l = "Certificate",
        s = {
          unversionedId: "network/protocols/tls/certificate",
          id: "network/protocols/tls/certificate",
          title: "Certificate",
          description: "A certificate is a document that contains",
          source: "@site/docs/network/protocols/tls/certificate.md",
          sourceDirName: "network/protocols/tls",
          slug: "/network/protocols/tls/certificate",
          permalink: "/docs/network/protocols/tls/certificate",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "TLS", permalink: "/docs/network/protocols/tls/" },
          next: { title: "UDP", permalink: "/docs/network/protocols/udp" },
        },
        p = {},
        u = [
          {
            value: "Certificate Authority",
            id: "certificate-authority",
            level: 2,
          },
          { value: "Levels", id: "levels", level: 2 },
        ],
        d = { toc: u };
      function f(t) {
        var e = t.components,
          i = (0, o.Z)(t, n);
        return (0, a.kt)(
          "wrapper",
          (0, r.Z)({}, d, i, { components: e, mdxType: "MDXLayout" }),
          (0, a.kt)("h1", { id: "certificate" }, "Certificate"),
          (0, a.kt)(
            "p",
            null,
            "A ",
            (0, a.kt)("strong", { parentName: "p" }, "certificate"),
            " is a document that contains"
          ),
          (0, a.kt)(
            "ul",
            null,
            (0, a.kt)("li", { parentName: "ul" }, "Time of validity"),
            (0, a.kt)("li", { parentName: "ul" }, "Purpose"),
            (0, a.kt)("li", { parentName: "ul" }, "Public key of entity"),
            (0, a.kt)("li", { parentName: "ul" }, "Encryption method"),
            (0, a.kt)("li", { parentName: "ul" }, "Associated FQDN")
          ),
          (0, a.kt)("p", null, "They are issued by an certificate authority."),
          (0, a.kt)(
            "h2",
            { id: "certificate-authority" },
            "Certificate Authority"
          ),
          (0, a.kt)(
            "p",
            null,
            "A ",
            (0, a.kt)("strong", { parentName: "p" }, "Certificate Authority"),
            " (",
            (0, a.kt)("strong", { parentName: "p" }, "CA"),
            ") is a organisation that authors\ncertificates."
          ),
          (0, a.kt)("h2", { id: "levels" }, "Levels"),
          (0, a.kt)(
            "p",
            null,
            "There are different levels of certificates. Level 1 which is only verification\nthat the one is owning the domain, level 2 which requires proof of owning brand\nand level 3 where CEO have identified in person."
          )
        );
      }
      f.isMDXComponent = !0;
    },
  },
]);
