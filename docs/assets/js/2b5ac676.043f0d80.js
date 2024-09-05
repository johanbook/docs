"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [731],
  {
    6568: (t, e, o) => {
      o.r(e),
        o.d(e, {
          assets: () => p,
          contentTitle: () => l,
          default: () => m,
          frontMatter: () => i,
          metadata: () => c,
          toc: () => u,
        });
      var n = o(7462),
        s = o(3366),
        r = (o(7294), o(3905)),
        a = (o(828), ["components"]),
        i = {},
        l = "NFS",
        c = {
          unversionedId: "network/protocols/nfs",
          id: "network/protocols/nfs",
          title: "NFS",
          description:
            "Network File System (NFS) is a protocol for mounting file systems over a",
          source: "@site/docs/network/protocols/nfs.md",
          sourceDirName: "network/protocols",
          slug: "/network/protocols/nfs",
          permalink: "/docs/network/protocols/nfs",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "IP", permalink: "/docs/network/protocols/ip" },
          next: { title: "RTP", permalink: "/docs/network/protocols/rtp" },
        },
        p = {},
        u = [
          { value: "Enumeration", id: "enumeration", level: 2 },
          { value: "Mounting", id: "mounting", level: 2 },
          { value: "Best practices", id: "best-practices", level: 2 },
        ],
        d = { toc: u };
      function m(t) {
        var e = t.components,
          o = (0, s.Z)(t, a);
        return (0, r.kt)(
          "wrapper",
          (0, n.Z)({}, d, o, { components: e, mdxType: "MDXLayout" }),
          (0, r.kt)("h1", { id: "nfs" }, "NFS"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("strong", { parentName: "p" }, "Network File System"),
            " (",
            (0, r.kt)("strong", { parentName: "p" }, "NFS"),
            ") is a protocol for mounting file systems over a\nnetwork. It is typically run on port 2049. They can be used for e.g. storage\nsynchronization in distributed systems."
          ),
          (0, r.kt)("h2", { id: "enumeration" }, "Enumeration"),
          (0, r.kt)(
            "p",
            null,
            "The shares in a NFS service can be enumerated using ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "showmount"),
            "."
          ),
          (0, r.kt)("h2", { id: "mounting" }, "Mounting"),
          (0, r.kt)("p", null, "You can mount a NFS share using"),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "sudo mount -t nfs <IP>:<SHARE> <MOUNT_POINT>\n"
            )
          ),
          (0, r.kt)("h2", { id: "best-practices" }, "Best practices"),
          (0, r.kt)(
            "ul",
            null,
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              "NFS shares should be hosted on a separate disc or partition to not affect the\nhost system. Otherwise an attacker can flood the system with uploads which\nmight disrupt or bring it down."
            )
          )
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
