"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [3750],
  {
    8015: (e, r, t) => {
      t.r(r),
        t.d(r, {
          assets: () => l,
          contentTitle: () => s,
          default: () => c,
          frontMatter: () => i,
          metadata: () => g,
          toc: () => m,
        });
      var n = t(7462),
        a = t(3366),
        o = (t(7294), t(3905)),
        p = (t(828), ["components"]),
        i = {},
        s = "Regexp",
        g = {
          unversionedId: "programming/regexp",
          id: "programming/regexp",
          title: "Regexp",
          description:
            "Regular expressions, or regexp for short, is a type of expressions for",
          source: "@site/docs/programming/regexp.md",
          sourceDirName: "programming",
          slug: "/programming/regexp",
          permalink: "/docs/programming/regexp",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Unix principle",
            permalink: "/docs/programming/patterns/unix-principle",
          },
          next: {
            title: "Stack and heap memory",
            permalink: "/docs/programming/stack_and_heap_memory",
          },
        },
        l = {},
        m = [{ value: "Evil regexp", id: "evil-regexp", level: 2 }],
        d = { toc: m };
      function c(e) {
        var r = e.components,
          t = (0, a.Z)(e, p);
        return (0, o.kt)(
          "wrapper",
          (0, n.Z)({}, d, t, { components: r, mdxType: "MDXLayout" }),
          (0, o.kt)("h1", { id: "regexp" }, "Regexp"),
          (0, o.kt)(
            "p",
            null,
            (0, o.kt)("strong", { parentName: "p" }, "Regular expressions"),
            ", or ",
            (0, o.kt)("strong", { parentName: "p" }, "regexp"),
            " for short, is a type of expressions for\nstring matching. An example is"
          ),
          (0, o.kt)(
            "pre",
            null,
            (0, o.kt)(
              "code",
              { parentName: "pre", className: "language-regexp" },
              "^coder$\n"
            )
          ),
          (0, o.kt)(
            "p",
            null,
            "which would only match the word ",
            (0, o.kt)("inlineCode", { parentName: "p" }, "coder"),
            "."
          ),
          (0, o.kt)("h2", { id: "evil-regexp" }, "Evil regexp"),
          (0, o.kt)(
            "p",
            null,
            "When writing regexps, one should be aware that there exist regexps designed to\nuse an unproportional amount of CPU. Such a regexp is called an ",
            (0, o.kt)("strong", { parentName: "p" }, "evil regexp"),
            ".\nOne needs to be extra aware of this if allowing user defined regexps."
          ),
          (0, o.kt)(
            "p",
            null,
            "There are regexp implementations that set a max number of iterations per regexp\nevaluation to stop this attack vector."
          )
        );
      }
      c.isMDXComponent = !0;
    },
  },
]);
