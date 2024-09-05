"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [869],
  {
    8459: (t, e, n) => {
      n.r(e),
        n.d(e, {
          assets: () => c,
          contentTitle: () => l,
          default: () => f,
          frontMatter: () => i,
          metadata: () => p,
          toc: () => d,
        });
      var o = n(7462),
        r = n(3366),
        a = (n(7294), n(3905)),
        s = (n(828), ["components"]),
        i = {},
        l = "FTP",
        p = {
          unversionedId: "network/protocols/ftp",
          id: "network/protocols/ftp",
          title: "FTP",
          description:
            "File Transfer Protocol (FTP) is an unencrypted protocol for transferring",
          source: "@site/docs/network/protocols/ftp.md",
          sourceDirName: "network/protocols",
          slug: "/network/protocols/ftp",
          permalink: "/docs/network/protocols/ftp",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "DNS", permalink: "/docs/network/protocols/dns" },
          next: { title: "HTTP", permalink: "/docs/network/protocols/http/" },
        },
        c = {},
        d = [
          { value: "Active vs passive", id: "active-vs-passive", level: 2 },
          { value: "FTPS", id: "ftps", level: 2 },
          { value: "SFTP", id: "sftp", level: 2 },
          { value: "Vulnerabilities", id: "vulnerabilities", level: 2 },
        ],
        u = { toc: d };
      function f(t) {
        var e = t.components,
          n = (0, r.Z)(t, s);
        return (0, a.kt)(
          "wrapper",
          (0, o.Z)({}, u, n, { components: e, mdxType: "MDXLayout" }),
          (0, a.kt)("h1", { id: "ftp" }, "FTP"),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)("strong", { parentName: "p" }, "File Transfer Protocol"),
            " (",
            (0, a.kt)("strong", { parentName: "p" }, "FTP"),
            ") is an unencrypted protocol for transferring\nfiles. It uses two connections, one for control commands with standard port 21\nand one for data transfer on standard port 20."
          ),
          (0, a.kt)("h2", { id: "active-vs-passive" }, "Active vs passive"),
          (0, a.kt)(
            "p",
            null,
            "The data connection can either be active (initiated by the FTP server) or\npassive (initiated by client). The problem with establishing an active data\nconnection is that ",
            (0, a.kt)("a", { parentName: "p", href: "../nat" }, "NAT"),
            " and firewalls might interfere."
          ),
          (0, a.kt)("h2", { id: "ftps" }, "FTPS"),
          (0, a.kt)(
            "p",
            null,
            "There is also ",
            (0, a.kt)(
              "strong",
              { parentName: "p" },
              "File Transfer Protocol Secure"
            ),
            " (",
            (0, a.kt)("strong", { parentName: "p" }, "FTPS"),
            ") that adds an\nencryption layer (in form of TLS)."
          ),
          (0, a.kt)("h2", { id: "sftp" }, "SFTP"),
          (0, a.kt)(
            "p",
            null,
            "There is ",
            (0, a.kt)(
              "strong",
              { parentName: "p" },
              "SSH File Transfer Protocol"
            ),
            " (",
            (0, a.kt)("strong", { parentName: "p" }, "SFTP"),
            ") that is based on the\n",
            (0, a.kt)("a", { parentName: "p", href: "./ssh" }, "SSH"),
            " protocol."
          ),
          (0, a.kt)("h2", { id: "vulnerabilities" }, "Vulnerabilities"),
          (0, a.kt)(
            "p",
            null,
            "FTP can be setup to allow anonymous access using the ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "anonymous"),
            " username."
          )
        );
      }
      f.isMDXComponent = !0;
    },
  },
]);
