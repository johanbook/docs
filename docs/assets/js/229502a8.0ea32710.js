"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [9463],
  {
    6671: (e, t, i) => {
      i.r(t),
        i.d(t, {
          assets: () => p,
          contentTitle: () => o,
          default: () => m,
          frontMatter: () => a,
          metadata: () => u,
          toc: () => d,
        });
      var n = i(7462),
        r = i(3366),
        l = (i(7294), i(3905)),
        s = (i(828), ["components"]),
        a = {},
        o = "LFI",
        u = {
          unversionedId: "security/vulnerabilities/lfi",
          id: "security/vulnerabilities/lfi",
          title: "LFI",
          description:
            "Local File Inclusion (LFI) is a vulnerability where a server exposes",
          source: "@site/docs/security/vulnerabilities/lfi.md",
          sourceDirName: "security/vulnerabilities",
          slug: "/security/vulnerabilities/lfi",
          permalink: "/docs/security/vulnerabilities/lfi",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Denial of Service",
            permalink: "/docs/security/vulnerabilities/dos",
          },
          next: {
            title: "Man In The Middle",
            permalink: "/docs/security/vulnerabilities/mitm",
          },
        },
        p = {},
        d = [
          { value: "Example", id: "example", level: 2 },
          { value: "Countermeasures", id: "countermeasures", level: 2 },
        ],
        c = { toc: d };
      function m(e) {
        var t = e.components,
          i = (0, r.Z)(e, s);
        return (0, l.kt)(
          "wrapper",
          (0, n.Z)({}, c, i, { components: t, mdxType: "MDXLayout" }),
          (0, l.kt)("h1", { id: "lfi" }, "LFI"),
          (0, l.kt)(
            "p",
            null,
            (0, l.kt)("strong", { parentName: "p" }, "Local File Inclusion"),
            " (",
            (0, l.kt)("strong", { parentName: "p" }, "LFI"),
            ") is a vulnerability where a server exposes\nlocal files not meant to be exposed. It can typically be found in\n",
            (0, l.kt)(
              "a",
              { parentName: "p", href: "/docs/network/protocols/http/" },
              "HTTP"
            ),
            " servers that allow querying files\nthrough either path or query parameters in the ",
            (0, l.kt)(
              "a",
              { parentName: "p", href: "/docs/network/url" },
              "URL"
            ),
            "."
          ),
          (0, l.kt)("h2", { id: "example" }, "Example"),
          (0, l.kt)("p", null, "Consider the following file system"),
          (0, l.kt)(
            "pre",
            null,
            (0, l.kt)(
              "code",
              { parentName: "pre", className: "language-txt" },
              "root\n|--etc\n|  `--passwd\n`--srv\n   `--www\n      `--index.html\n"
            )
          ),
          (0, l.kt)(
            "p",
            null,
            "Assume we have a file server that serves ",
            (0, l.kt)("inlineCode", { parentName: "p" }, "/srv/www/index.html"),
            " when requesting\nthe path ",
            (0, l.kt)("inlineCode", { parentName: "p" }, "/index.html"),
            ". If the server is vulnerable to LFI, it can be possible\nto query ",
            (0, l.kt)("inlineCode", { parentName: "p" }, "/etc/passwd"),
            " through requesting e.g. ",
            (0, l.kt)("inlineCode", { parentName: "p" }, "/../../etc/passwd"),
            "."
          ),
          (0, l.kt)("h2", { id: "countermeasures" }, "Countermeasures"),
          (0, l.kt)("p", null, "When serving files it is important to"),
          (0, l.kt)(
            "ul",
            null,
            (0, l.kt)(
              "li",
              { parentName: "ul" },
              "served files should be limited only to intended directory."
            ),
            (0, l.kt)(
              "li",
              { parentName: "ul" },
              "file paths to be properly sanitized, e.g. ",
              (0, l.kt)("inlineCode", { parentName: "li" }, ".."),
              " syntax should be ignored or\ndisallowed."
            )
          )
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
