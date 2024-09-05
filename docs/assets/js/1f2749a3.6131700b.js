"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [9609],
  {
    8525: (e, t, s) => {
      s.r(t),
        s.d(t, {
          assets: () => d,
          contentTitle: () => l,
          default: () => c,
          frontMatter: () => a,
          metadata: () => m,
          toc: () => u,
        });
      var n = s(7462),
        i = s(3366),
        o = (s(7294), s(3905)),
        r = (s(828), ["components"]),
        a = {},
        l = "File systems",
        m = {
          unversionedId: "unix/filesystems",
          id: "unix/filesystems",
          title: "File systems",
          description:
            "In order to utilize the hardware memory one needs a file system.",
          source: "@site/docs/unix/filesystems.md",
          sourceDirName: "unix",
          slug: "/unix/filesystems",
          permalink: "/docs/unix/filesystems",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "FIFO", permalink: "/docs/unix/fifo" },
          next: { title: "Inode", permalink: "/docs/unix/inode" },
        },
        d = {},
        u = [
          { value: "NTFS", id: "ntfs", level: 2 },
          { value: "FAT", id: "fat", level: 2 },
        ],
        p = { toc: u };
      function c(e) {
        var t = e.components,
          s = (0, i.Z)(e, r);
        return (0, o.kt)(
          "wrapper",
          (0, n.Z)({}, p, s, { components: t, mdxType: "MDXLayout" }),
          (0, o.kt)("h1", { id: "file-systems" }, "File systems"),
          (0, o.kt)(
            "p",
            null,
            "In order to utilize the hardware memory one needs a file system."
          ),
          (0, o.kt)("h2", { id: "ntfs" }, "NTFS"),
          (0, o.kt)(
            "p",
            null,
            (0, o.kt)(
              "strong",
              { parentName: "p" },
              "New Technology File System"
            ),
            " (",
            (0, o.kt)("strong", { parentName: "p" }, "NTFS"),
            ") is a file system common newer Windows\nsystems."
          ),
          (0, o.kt)("h2", { id: "fat" }, "FAT"),
          (0, o.kt)(
            "p",
            null,
            (0, o.kt)("strong", { parentName: "p" }, "File Allocation Table"),
            " (",
            (0, o.kt)("strong", { parentName: "p" }, "FAT"),
            ") is a file system. It comes in the different\nversions such as FAT32, FAT16, FAT12."
          )
        );
      }
      c.isMDXComponent = !0;
    },
  },
]);
