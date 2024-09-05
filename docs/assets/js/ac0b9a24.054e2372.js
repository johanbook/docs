"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [6553],
  {
    9125: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => h,
          contentTitle: () => r,
          default: () => d,
          frontMatter: () => o,
          metadata: () => p,
          toc: () => c,
        });
      var l = n(7462),
        s = n(3366),
        a = (n(7294), n(3905)),
        i = (n(828), ["components"]),
        o = {},
        r = "Shells",
        p = {
          unversionedId: "security/pentesting/shells",
          id: "security/pentesting/shells",
          title: "Shells",
          description:
            "The initial goal of offensive pentesting is often to obtain a shell. One can",
          source: "@site/docs/security/pentesting/shells.md",
          sourceDirName: "security/pentesting",
          slug: "/security/pentesting/shells",
          permalink: "/docs/security/pentesting/shells",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Scanning",
            permalink: "/docs/security/pentesting/scanning",
          },
          next: {
            title: "Uploads",
            permalink: "/docs/security/pentesting/uploads",
          },
        },
        h = {},
        c = [
          { value: "Web shells", id: "web-shells", level: 2 },
          { value: "Shell stabilization", id: "shell-stabilization", level: 2 },
          { value: "Examples", id: "examples", level: 2 },
        ],
        u = { toc: c };
      function d(e) {
        var t = e.components,
          n = (0, s.Z)(e, i);
        return (0, a.kt)(
          "wrapper",
          (0, l.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
          (0, a.kt)("h1", { id: "shells" }, "Shells"),
          (0, a.kt)(
            "p",
            null,
            "The initial goal of offensive pentesting is often to obtain a ",
            (0, a.kt)("strong", { parentName: "p" }, "shell"),
            ". One can\neither have start a bind shell which will create a shell for incoming\nconnections. However, it is more common to use a reverse shell in order to evade\nfirewalls / IDS."
          ),
          (0, a.kt)(
            "p",
            null,
            "Common tools for obtaining shells are ",
            (0, a.kt)(
              "a",
              { parentName: "p", href: "/docs/unix/tools/netcat" },
              "netcat"
            ),
            ",\n",
            (0, a.kt)(
              "a",
              { parentName: "p", href: "../../network/telnet" },
              "telnet"
            ),
            " and ",
            (0, a.kt)(
              "a",
              { parentName: "p", href: "/docs/unix/tools/socat" },
              "socat"
            ),
            "."
          ),
          (0, a.kt)("h2", { id: "web-shells" }, "Web shells"),
          (0, a.kt)(
            "p",
            null,
            "A shell that is running through the browser. Can be via e.g. and uploaded PHP\nfile."
          ),
          (0, a.kt)("h2", { id: "shell-stabilization" }, "Shell stabilization"),
          (0, a.kt)(
            "p",
            null,
            "The initially acquired shell are often unstable. Here are some techniques for\nstabilization:"
          ),
          (0, a.kt)(
            "ul",
            null,
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              "Run ",
              (0, a.kt)(
                "inlineCode",
                { parentName: "li" },
                "python -c 'import pty;pty.spawn(\"/bin/bash\"')"
              ),
              " to get a better shell"
            ),
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              "Run ",
              (0, a.kt)(
                "inlineCode",
                { parentName: "li" },
                "export TERM=xterm"
              ),
              " to enable commands such as ",
              (0, a.kt)("inlineCode", { parentName: "li" }, "clear")
            ),
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              "Background the shell and run ",
              (0, a.kt)("inlineCode", { parentName: "li" }, "stty raw -echo;fg")
            )
          ),
          (0, a.kt)("h2", { id: "examples" }, "Examples"),
          (0, a.kt)(
            "p",
            null,
            "You can find some examples\n",
            (0, a.kt)(
              "a",
              {
                parentName: "p",
                href: "https://github.com/johanbook/misc/tree/master/shells",
              },
              "here"
            ),
            "."
          )
        );
      }
      d.isMDXComponent = !0;
    },
  },
]);
