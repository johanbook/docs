"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [381],
  {
    5175: (e, t, o) => {
      o.r(t),
        o.d(t, {
          assets: () => p,
          contentTitle: () => l,
          default: () => d,
          frontMatter: () => i,
          metadata: () => c,
          toc: () => u,
        });
      var n = o(7462),
        r = o(3366),
        s = (o(7294), o(3905)),
        a = (o(828), ["components"]),
        i = {},
        l = "SMB",
        c = {
          unversionedId: "network/protocols/smb",
          id: "network/protocols/smb",
          title: "SMB",
          description:
            "Server Message Block (SMB) is a TCP protocol for sharing",
          source: "@site/docs/network/protocols/smb.md",
          sourceDirName: "network/protocols",
          slug: "/network/protocols/smb",
          permalink: "/docs/network/protocols/smb",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "S3", permalink: "/docs/network/protocols/s3" },
          next: { title: "SMTP", permalink: "/docs/network/protocols/smtp" },
        },
        p = {},
        u = [
          { value: "Security", id: "security", level: 2 },
          { value: "Enumeration", id: "enumeration", level: 2 },
          {
            value: "Connecting to a SMB share",
            id: "connecting-to-a-smb-share",
            level: 2,
          },
        ],
        m = { toc: u };
      function d(e) {
        var t = e.components,
          o = (0, r.Z)(e, a);
        return (0, s.kt)(
          "wrapper",
          (0, n.Z)({}, m, o, { components: t, mdxType: "MDXLayout" }),
          (0, s.kt)("h1", { id: "smb" }, "SMB"),
          (0, s.kt)(
            "p",
            null,
            (0, s.kt)("strong", { parentName: "p" }, "Server Message Block"),
            " (",
            (0, s.kt)("strong", { parentName: "p" }, "SMB"),
            ") is a ",
            (0, s.kt)("a", { parentName: "p", href: "./tcp" }, "TCP"),
            " protocol for sharing\nresources over a network, such as files or printer devices. By default, it runs\non ports 139 and 445. SMB uses a client-server model and allows for exposing\nshares on a system, similar to ",
            (0, s.kt)(
              "a",
              { parentName: "p", href: "/docs/network/protocols/ftp" },
              "FTP"
            ),
            "."
          ),
          (0, s.kt)(
            "p",
            null,
            "SMB is widely is shipped as part of the Windows OS and can be used for\nWindows/Unix interaction. One can natively expose a folder on a given network on\na Windows system."
          ),
          (0, s.kt)("h2", { id: "security" }, "Security"),
          (0, s.kt)(
            "p",
            null,
            "SMB is a main attack vector for intrusion attempts."
          ),
          (0, s.kt)("h2", { id: "enumeration" }, "Enumeration"),
          (0, s.kt)(
            "p",
            null,
            "For enumeration one can use the ",
            (0, s.kt)("inlineCode", { parentName: "p" }, "enum4linux"),
            " or ",
            (0, s.kt)("inlineCode", { parentName: "p" }, "smbmap"),
            " tools."
          ),
          (0, s.kt)(
            "pre",
            null,
            (0, s.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "enum4linux -a <ip>\n"
            )
          ),
          (0, s.kt)(
            "h2",
            { id: "connecting-to-a-smb-share" },
            "Connecting to a SMB share"
          ),
          (0, s.kt)(
            "p",
            null,
            "To connect to a SMB share one can use e.g. the ",
            (0, s.kt)("inlineCode", { parentName: "p" }, "smbclient"),
            " tool."
          )
        );
      }
      d.isMDXComponent = !0;
    },
  },
]);
