"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [6470],
  {
    3446: (e, a, n) => {
      n.r(a),
        n.d(a, {
          assets: () => p,
          contentTitle: () => o,
          default: () => g,
          frontMatter: () => m,
          metadata: () => l,
          toc: () => c,
        });
      var r = n(7462),
        i = n(3366),
        s = (n(7294), n(3905)),
        t = (n(828), ["components"]),
        m = {},
        o = "Assembly",
        l = {
          unversionedId: "programming/assembly",
          id: "programming/assembly",
          title: "Assembly",
          description:
            "Assembly is a family of low-level programming languages that are very close",
          source: "@site/docs/programming/assembly.md",
          sourceDirName: "programming",
          slug: "/programming/assembly",
          permalink: "/docs/programming/assembly",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "VPN", permalink: "/docs/network/vpn" },
          next: {
            title: "Asynchronicity",
            permalink: "/docs/programming/asynchronicity",
          },
        },
        p = {},
        c = [],
        d = { toc: c };
      function g(e) {
        var a = e.components,
          n = (0, i.Z)(e, t);
        return (0, s.kt)(
          "wrapper",
          (0, r.Z)({}, d, n, { components: a, mdxType: "MDXLayout" }),
          (0, s.kt)("h1", { id: "assembly" }, "Assembly"),
          (0, s.kt)(
            "p",
            null,
            (0, s.kt)("strong", { parentName: "p" }, "Assembly"),
            " is a family of low-level programming languages that are very close\nto the hardware. This might be needed for time-critical applications or if\napplications are limited in memory, which is common in spacecrafts."
          ),
          (0, s.kt)(
            "p",
            null,
            "Here is an example of the assembly code of a C hello world program (using\n",
            (0, s.kt)("inlineCode", { parentName: "p" }, "layout asm"),
            " in ",
            (0, s.kt)("inlineCode", { parentName: "p" }, "gdb"),
            ")."
          ),
          (0, s.kt)(
            "pre",
            null,
            (0, s.kt)(
              "code",
              { parentName: "pre" },
              "0x64a <main>                    push   %rbp\n0x64b <main+1>                  mov    %rsp,%rbp\n0x64e <main+4>                  sub    $0x10,%rsp\n0x652 <main+8>                  mov    %edi,-0x4(%rbp)\n0x655 <main+11>                 mov    %rsi,-0x10(%rbp)\n0x659 <main+15>                 lea    0x9c(%rip),%rdi\n0x660 <main+22>                 callq  0x520 <puts@plt>\n0x665 <main+27>                 mov    $0x0,%eax\n0x66a <main+32>                 leaveq\n0x66b <main+33>                 retq\n"
            )
          )
        );
      }
      g.isMDXComponent = !0;
    },
  },
]);
