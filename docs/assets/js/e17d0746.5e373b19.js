"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [8669],
  {
    4879: (e, n, s) => {
      s.r(n),
        s.d(n, {
          assets: () => u,
          contentTitle: () => l,
          default: () => h,
          frontMatter: () => o,
          metadata: () => p,
          toc: () => m,
        });
      var i = s(7462),
        t = s(3366),
        r = (s(7294), s(3905)),
        a = (s(828), ["components"]),
        o = {},
        l = "Permissions and ownerships",
        p = {
          unversionedId: "unix/permissions",
          id: "unix/permissions",
          title: "Permissions and ownerships",
          description:
            "Every file on a Linux system belongs to a user and a group. Different",
          source: "@site/docs/unix/permissions.md",
          sourceDirName: "unix",
          slug: "/unix/permissions",
          permalink: "/docs/unix/permissions",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "Networking", permalink: "/docs/unix/networking" },
          next: { title: "Processes", permalink: "/docs/unix/processes" },
        },
        u = {},
        m = [
          { value: "Ownership", id: "ownership", level: 2 },
          { value: "Permissions", id: "permissions", level: 2 },
          { value: "Special permissions", id: "special-permissions", level: 2 },
        ],
        d = { toc: m };
      function h(e) {
        var n = e.components,
          s = (0, t.Z)(e, a);
        return (0, r.kt)(
          "wrapper",
          (0, i.Z)({}, d, s, { components: n, mdxType: "MDXLayout" }),
          (0, r.kt)(
            "h1",
            { id: "permissions-and-ownerships" },
            "Permissions and ownerships"
          ),
          (0, r.kt)(
            "p",
            null,
            "Every file on a Linux system belongs to a user and a group. Different\npermissions are applied to the owning user, the owning group and everyone else.\nThis wiki will explain what permissions and ownerships are applied and how to\nchange them."
          ),
          (0, r.kt)("h2", { id: "ownership" }, "Ownership"),
          (0, r.kt)(
            "p",
            null,
            "A file or a directory has an owner and a group. These can be changed through"
          ),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "chown <user>:<group> <file\n"
            )
          ),
          (0, r.kt)("h2", { id: "permissions" }, "Permissions"),
          (0, r.kt)(
            "p",
            null,
            "The permissions in Linux is done on a user, group and other basis. Each of these\nhas permissions for read, write and execute. These can be seen using ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "ls"),
            "."
          ),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "> ls -l\ndrwxr-xr-x 2 book book 40 Nov 29 21:42 directory\n-rw-r--r-- 1 book book  0 Nov 29 21:42 file\n"
            )
          ),
          (0, r.kt)(
            "p",
            null,
            "One can change these permissions using the ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "chmod"),
            " tool. For example, to make it\nreadable by only the current user use"
          ),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "chmod 400 <file>\n"
            )
          ),
          (0, r.kt)("p", null, "Where"),
          (0, r.kt)(
            "ul",
            null,
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "0"),
              " is no permission"
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "1"),
              " is execute (",
              (0, r.kt)("inlineCode", { parentName: "li" }, "x"),
              "). For directories this means being able to searching its\ncontent."
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "2"),
              " is write (",
              (0, r.kt)("inlineCode", { parentName: "li" }, "w"),
              ")"
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "4"),
              " is read (",
              (0, r.kt)("inlineCode", { parentName: "li" }, "r"),
              ")"
            )
          ),
          (0, r.kt)(
            "p",
            null,
            "One can also use ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "chmod"),
            " in symbolic mode. There is user (",
            (0, r.kt)("inlineCode", { parentName: "p" }, "u"),
            "), group (",
            (0, r.kt)("inlineCode", { parentName: "p" }, "g"),
            "),\nother (",
            (0, r.kt)("inlineCode", { parentName: "p" }, "o"),
            ") and all (",
            (0, r.kt)("inlineCode", { parentName: "p" }, "a"),
            ")."
          ),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "chmod o-rw+x,u+x myfile\n"
            )
          ),
          (0, r.kt)("h2", { id: "special-permissions" }, "Special permissions"),
          (0, r.kt)(
            "p",
            null,
            "There are some special permissions called SUID, SGID and the sticky bit. The\nSUID bit signals that a file should be executed with the permissions of the\nowner. The SGID bit is the equivalent but on a group level. The sticky bit (",
            (0, r.kt)("inlineCode", { parentName: "p" }, "t"),
            ")\nsignals that files may only be deleted by root or owner."
          )
        );
      }
      h.isMDXComponent = !0;
    },
  },
]);
