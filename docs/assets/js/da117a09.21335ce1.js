"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [8709],
  {
    548: (e, n, i) => {
      i.r(n),
        i.d(n, {
          assets: () => u,
          contentTitle: () => r,
          default: () => c,
          frontMatter: () => d,
          metadata: () => l,
          toc: () => m,
        });
      var t = i(7462),
        s = i(3366),
        a = (i(7294), i(3905)),
        o = (i(828), ["components"]),
        d = {},
        r = "Inode",
        l = {
          unversionedId: "unix/inode",
          id: "unix/inode",
          title: "Inode",
          description:
            "Inodes (believed to come from index nodes) is a data structure used to",
          source: "@site/docs/unix/inode.md",
          sourceDirName: "unix",
          slug: "/unix/inode",
          permalink: "/docs/unix/inode",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "File systems",
            permalink: "/docs/unix/filesystems",
          },
          next: { title: "Kernel", permalink: "/docs/unix/kernel" },
        },
        u = {},
        m = [{ value: "Hard links", id: "hard-links", level: 2 }],
        p = { toc: m };
      function c(e) {
        var n = e.components,
          i = (0, s.Z)(e, o);
        return (0, a.kt)(
          "wrapper",
          (0, t.Z)({}, p, i, { components: n, mdxType: "MDXLayout" }),
          (0, a.kt)("h1", { id: "inode" }, "Inode"),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)("strong", { parentName: "p" }, "Inodes"),
            " (believed to come from ",
            (0, a.kt)("strong", { parentName: "p" }, "index nodes"),
            ") is a data structure used to\nmap file and directories of a system to its physical hard drive. A Unix system\nhas a table of inodes where every node has a unique inode number. Each inode\ncontains metadata about a file or directory, including block address and size,\n",
            (0, a.kt)(
              "a",
              { parentName: "p", href: "./permissions" },
              "permissions"
            ),
            " and timestamps."
          ),
          (0, a.kt)(
            "p",
            null,
            "The number of free inodes in a directory can be inspected using ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "df")
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "> df -i <target>\nFilesystem       Inodes   IUsed    IFree IUse% Mounted on\n/dev/nvme0n1p3 61300736 6611276 54689460   11% /\n"
            )
          ),
          (0, a.kt)(
            "p",
            null,
            "One can also the see inode numbers using ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "ls"),
            " by setting the ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "-i"),
            " flag and find\nfiles via inode number (",
            (0, a.kt)(
              "inlineCode",
              { parentName: "p" },
              "find -inum <inode number>"
            ),
            ")."
          ),
          (0, a.kt)("h2", { id: "hard-links" }, "Hard links"),
          (0, a.kt)(
            "p",
            null,
            "A hard link is a pointer to an inode. This means that the link is still valid\neven if the target is moved or renamed. This is in contrast to soft links."
          )
        );
      }
      c.isMDXComponent = !0;
    },
  },
]);
