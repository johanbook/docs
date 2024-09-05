"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [2357],
  {
    9162: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => p,
          contentTitle: () => l,
          default: () => m,
          frontMatter: () => a,
          metadata: () => c,
          toc: () => d,
        });
      var s = n(7462),
        r = n(3366),
        i = (n(7294), n(3905)),
        o = (n(828), ["components"]),
        a = {},
        l = "TLS",
        c = {
          unversionedId: "network/protocols/tls/README",
          id: "network/protocols/tls/README",
          title: "TLS",
          description:
            "Transport Layer Security (TLS) is an encryption protocol that supersedes",
          source: "@site/docs/network/protocols/tls/README.md",
          sourceDirName: "network/protocols/tls",
          slug: "/network/protocols/tls/",
          permalink: "/docs/network/protocols/tls/",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "TCP", permalink: "/docs/network/protocols/tcp" },
          next: {
            title: "Certificate",
            permalink: "/docs/network/protocols/tls/certificate",
          },
        },
        p = {},
        d = [
          { value: "TLS Handshake", id: "tls-handshake", level: 2 },
          { value: "Termination point", id: "termination-point", level: 2 },
          { value: "mTLS", id: "mtls", level: 2 },
        ],
        h = { toc: d };
      function m(e) {
        var t = e.components,
          n = (0, r.Z)(e, o);
        return (0, i.kt)(
          "wrapper",
          (0, s.Z)({}, h, n, { components: t, mdxType: "MDXLayout" }),
          (0, i.kt)("h1", { id: "tls" }, "TLS"),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)(
              "strong",
              { parentName: "p" },
              "Transport Layer Security"
            ),
            " (",
            (0, i.kt)("strong", { parentName: "p" }, "TLS"),
            ") is an encryption protocol that supersedes\nSSL. It enhances all three attributes in the\n",
            (0, i.kt)(
              "a",
              {
                parentName: "p",
                href: "../../../security/threat_modelling#cia",
              },
              "CIA triad"
            ),
            ". TLS uses\n",
            (0, i.kt)(
              "a",
              { parentName: "p", href: "./certificate" },
              "certificates"
            ),
            " in order to verify public keys."
          ),
          (0, i.kt)("h2", { id: "tls-handshake" }, "TLS Handshake"),
          (0, i.kt)(
            "p",
            null,
            "When client establishes connection to server, the server responds with its\ncertificate containing its public key. Client generates premaster secret\nencrypted with the server's public key and sends to server. Both client and\nserver can then generate the same symmetric key, which will be used during the\nsession."
          ),
          (0, i.kt)("h2", { id: "termination-point" }, "Termination point"),
          (0, i.kt)(
            "p",
            null,
            "Somewhere in the system incoming data need to decrypted and outgoing data to be\nencrypted. This is called a termination point (sometimes SSL termination).\nWherein the system this should happen is interesting from a system's design\nperspective."
          ),
          (0, i.kt)("h2", { id: "mtls" }, "mTLS"),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)("strong", { parentName: "p" }, "mTLS"),
            " is a version of TLS for mutual authentication. This is in contrast to\nstandard TLS where only the server authenticates itself."
          )
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
