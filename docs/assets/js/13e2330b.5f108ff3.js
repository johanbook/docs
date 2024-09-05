"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [509],
  {
    5469: (e, n, s) => {
      s.r(n),
        s.d(n, {
          assets: () => l,
          contentTitle: () => u,
          default: () => m,
          frontMatter: () => o,
          metadata: () => d,
          toc: () => p,
        });
      var t = s(7462),
        a = s(3366),
        i = (s(7294), s(3905)),
        r = (s(828), ["components"]),
        o = {},
        u = "Users and groups",
        d = {
          unversionedId: "unix/user",
          id: "unix/user",
          title: "Users and groups",
          description: "Linux systems use users and groups to handle",
          source: "@site/docs/unix/user.md",
          sourceDirName: "unix",
          slug: "/unix/user",
          permalink: "/docs/unix/user",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "zip", permalink: "/docs/unix/tools/zip" },
          next: { title: "Atomic design", permalink: "/docs/ux/atomic_design" },
        },
        l = {},
        p = [
          {
            value: "Management using CLI",
            id: "management-using-cli",
            level: 2,
          },
          { value: "Config files", id: "config-files", level: 2 },
        ],
        c = { toc: p };
      function m(e) {
        var n = e.components,
          s = (0, a.Z)(e, r);
        return (0, i.kt)(
          "wrapper",
          (0, t.Z)({}, c, s, { components: n, mdxType: "MDXLayout" }),
          (0, i.kt)("h1", { id: "users-and-groups" }, "Users and groups"),
          (0, i.kt)(
            "p",
            null,
            "Linux systems use ",
            (0, i.kt)("strong", { parentName: "p" }, "users"),
            " and ",
            (0, i.kt)("strong", { parentName: "p" }, "groups"),
            " to handle\n",
            (0, i.kt)(
              "a",
              {
                parentName: "p",
                href: "/docs/security/authentication-and-authorization/iam",
              },
              "IAM"
            ),
            "."
          ),
          (0, i.kt)(
            "h2",
            { id: "management-using-cli" },
            "Management using CLI"
          ),
          (0, i.kt)(
            "p",
            null,
            "The easiest (and recommended) way of managing users and groups is via the CLI.\nFor example, a new user can be created using"
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "sudo useradd --create-home <name>\nsudo passwd <name>\n"
            )
          ),
          (0, i.kt)(
            "p",
            null,
            "Use ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "userdel"),
            " for deleting an account."
          ),
          (0, i.kt)("h2", { id: "config-files" }, "Config files"),
          (0, i.kt)(
            "p",
            null,
            "All users are stored in ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "/etc/passwd"),
            ", which might look something like"
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "root:x:0:0::/root:/bin/bash\nbin:x:1:1::/:/usr/bin/nologin\ndaemon:x:2:2::/:/usr/bin/nologin\n...\n"
            )
          ),
          (0, i.kt)(
            "p",
            null,
            "However, the hashed passwords are stored in ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "/etc/shadow"),
            "."
          ),
          (0, i.kt)(
            "p",
            null,
            "Groups are stored in ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "/etc/group"),
            "."
          )
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
