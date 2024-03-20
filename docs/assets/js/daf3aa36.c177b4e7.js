"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [6615],
  {
    4182: (a, e, t) => {
      t.r(e),
        t.d(e, {
          assets: () => o,
          contentTitle: () => p,
          default: () => h,
          frontMatter: () => i,
          metadata: () => l,
          toc: () => c,
        });
      var n = t(7462),
        s = t(3366),
        m = (t(7294), t(3905)),
        r = (t(828), ["components"]),
        i = {},
        p = "Basics",
        l = {
          unversionedId: "programming/basics",
          id: "programming/basics",
          title: "Basics",
          description:
            "This page will discuss some basic concepts in programming.",
          source: "@site/docs/programming/basics.md",
          sourceDirName: "programming",
          slug: "/programming/basics",
          permalink: "/docs/programming/basics",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Asynchronicity",
            permalink: "/docs/programming/asynchronicity",
          },
          next: {
            title: "Caching",
            permalink: "/docs/programming/browsers/caching",
          },
        },
        o = {},
        c = [
          {
            value: "First-class functions",
            id: "first-class-functions",
            level: 2,
          },
          { value: "Mutability", id: "mutability", level: 2 },
          { value: "Idempotence", id: "idempotence", level: 2 },
          { value: "Memoization", id: "memoization", level: 2 },
          { value: "DRY", id: "dry", level: 2 },
        ],
        N = { toc: c };
      function h(a) {
        var e = a.components,
          t = (0, s.Z)(a, r);
        return (0, m.kt)(
          "wrapper",
          (0, n.Z)({}, N, t, { components: e, mdxType: "MDXLayout" }),
          (0, m.kt)("h1", { id: "basics" }, "Basics"),
          (0, m.kt)(
            "p",
            null,
            "This page will discuss some basic concepts in programming."
          ),
          (0, m.kt)(
            "h2",
            { id: "first-class-functions" },
            "First-class functions"
          ),
          (0, m.kt)(
            "p",
            null,
            "First-class functions is kind of when a function can be used as a variable. A\nfunction that returns another function is called a higher order function. A\nlanguage that support first-class functions allows for callbacks. A callback\nwith captured variables is known as a closure. A closure has access to the\nenvironment in which it was created."
          ),
          (0, m.kt)("h2", { id: "mutability" }, "Mutability"),
          (0, m.kt)(
            "p",
            null,
            "Objects either be ",
            (0, m.kt)("strong", { parentName: "p" }, "mutable"),
            " or ",
            (0, m.kt)("strong", { parentName: "p" }, "immutable"),
            " where a mutable object can be\nchanged while an immutable cannot. For example, a string variable is typically\nimmutable,"
          ),
          (0, m.kt)(
            "pre",
            null,
            (0, m.kt)(
              "code",
              { parentName: "pre", className: "language-python" },
              "s1 = 'seven dogs sleep'\ns2 = s1\ns2 += ' but the cat is awake'\n"
            )
          ),
          (0, m.kt)(
            "p",
            null,
            "When changing ",
            (0, m.kt)("inlineCode", { parentName: "p" }, "s2"),
            " a new string object is instantiated and hence making no\nchange to ",
            (0, m.kt)("inlineCode", { parentName: "p" }, "s1"),
            "."
          ),
          (0, m.kt)("h2", { id: "idempotence" }, "Idempotence"),
          (0, m.kt)(
            "p",
            null,
            "Idempotence is a mathematical concept. Consider the function ",
            (0, m.kt)(
              "span",
              { parentName: "p", className: "math math-inline" },
              (0, m.kt)(
                "span",
                { parentName: "span", className: "katex" },
                (0, m.kt)(
                  "span",
                  { parentName: "span", className: "katex-mathml" },
                  (0, m.kt)(
                    "math",
                    {
                      parentName: "span",
                      xmlns: "http://www.w3.org/1998/Math/MathML",
                    },
                    (0, m.kt)(
                      "semantics",
                      { parentName: "math" },
                      (0, m.kt)(
                        "mrow",
                        { parentName: "semantics" },
                        (0, m.kt)("mi", { parentName: "mrow" }, "f")
                      ),
                      (0, m.kt)(
                        "annotation",
                        {
                          parentName: "semantics",
                          encoding: "application/x-tex",
                        },
                        "f"
                      )
                    )
                  )
                ),
                (0, m.kt)(
                  "span",
                  {
                    parentName: "span",
                    className: "katex-html",
                    "aria-hidden": "true",
                  },
                  (0, m.kt)(
                    "span",
                    { parentName: "span", className: "base" },
                    (0, m.kt)("span", {
                      parentName: "span",
                      className: "strut",
                      style: {
                        height: "0.8888799999999999em",
                        verticalAlign: "-0.19444em",
                      },
                    }),
                    (0, m.kt)(
                      "span",
                      {
                        parentName: "span",
                        className: "mord mathnormal",
                        style: { marginRight: "0.10764em" },
                      },
                      "f"
                    )
                  )
                )
              )
            ),
            " and its\ncomposite ",
            (0, m.kt)(
              "span",
              { parentName: "p", className: "math math-inline" },
              (0, m.kt)(
                "span",
                { parentName: "span", className: "katex" },
                (0, m.kt)(
                  "span",
                  { parentName: "span", className: "katex-mathml" },
                  (0, m.kt)(
                    "math",
                    {
                      parentName: "span",
                      xmlns: "http://www.w3.org/1998/Math/MathML",
                    },
                    (0, m.kt)(
                      "semantics",
                      { parentName: "math" },
                      (0, m.kt)(
                        "mrow",
                        { parentName: "semantics" },
                        (0, m.kt)("mi", { parentName: "mrow" }, "f"),
                        (0, m.kt)("mo", { parentName: "mrow" }, "\u2218"),
                        (0, m.kt)("mi", { parentName: "mrow" }, "f")
                      ),
                      (0, m.kt)(
                        "annotation",
                        {
                          parentName: "semantics",
                          encoding: "application/x-tex",
                        },
                        "f \\circ f"
                      )
                    )
                  )
                ),
                (0, m.kt)(
                  "span",
                  {
                    parentName: "span",
                    className: "katex-html",
                    "aria-hidden": "true",
                  },
                  (0, m.kt)(
                    "span",
                    { parentName: "span", className: "base" },
                    (0, m.kt)("span", {
                      parentName: "span",
                      className: "strut",
                      style: {
                        height: "0.8888799999999999em",
                        verticalAlign: "-0.19444em",
                      },
                    }),
                    (0, m.kt)(
                      "span",
                      {
                        parentName: "span",
                        className: "mord mathnormal",
                        style: { marginRight: "0.10764em" },
                      },
                      "f"
                    ),
                    (0, m.kt)("span", {
                      parentName: "span",
                      className: "mspace",
                      style: { marginRight: "0.2222222222222222em" },
                    }),
                    (0, m.kt)(
                      "span",
                      { parentName: "span", className: "mbin" },
                      "\u2218"
                    ),
                    (0, m.kt)("span", {
                      parentName: "span",
                      className: "mspace",
                      style: { marginRight: "0.2222222222222222em" },
                    })
                  ),
                  (0, m.kt)(
                    "span",
                    { parentName: "span", className: "base" },
                    (0, m.kt)("span", {
                      parentName: "span",
                      className: "strut",
                      style: {
                        height: "0.8888799999999999em",
                        verticalAlign: "-0.19444em",
                      },
                    }),
                    (0, m.kt)(
                      "span",
                      {
                        parentName: "span",
                        className: "mord mathnormal",
                        style: { marginRight: "0.10764em" },
                      },
                      "f"
                    )
                  )
                )
              )
            ),
            ", then it is idempotent if ",
            (0, m.kt)(
              "span",
              { parentName: "p", className: "math math-inline" },
              (0, m.kt)(
                "span",
                { parentName: "span", className: "katex" },
                (0, m.kt)(
                  "span",
                  { parentName: "span", className: "katex-mathml" },
                  (0, m.kt)(
                    "math",
                    {
                      parentName: "span",
                      xmlns: "http://www.w3.org/1998/Math/MathML",
                    },
                    (0, m.kt)(
                      "semantics",
                      { parentName: "math" },
                      (0, m.kt)(
                        "mrow",
                        { parentName: "semantics" },
                        (0, m.kt)("mi", { parentName: "mrow" }, "f"),
                        (0, m.kt)("mo", { parentName: "mrow" }, "\u2218"),
                        (0, m.kt)("mi", { parentName: "mrow" }, "f"),
                        (0, m.kt)(
                          "mo",
                          { parentName: "mrow", stretchy: "false" },
                          "("
                        ),
                        (0, m.kt)("mi", { parentName: "mrow" }, "x"),
                        (0, m.kt)(
                          "mo",
                          { parentName: "mrow", stretchy: "false" },
                          ")"
                        ),
                        (0, m.kt)("mo", { parentName: "mrow" }, "="),
                        (0, m.kt)("mi", { parentName: "mrow" }, "f"),
                        (0, m.kt)(
                          "mo",
                          { parentName: "mrow", stretchy: "false" },
                          "("
                        ),
                        (0, m.kt)("mi", { parentName: "mrow" }, "x"),
                        (0, m.kt)(
                          "mo",
                          { parentName: "mrow", stretchy: "false" },
                          ")"
                        )
                      ),
                      (0, m.kt)(
                        "annotation",
                        {
                          parentName: "semantics",
                          encoding: "application/x-tex",
                        },
                        "f \\circ f (x) = f(x)"
                      )
                    )
                  )
                ),
                (0, m.kt)(
                  "span",
                  {
                    parentName: "span",
                    className: "katex-html",
                    "aria-hidden": "true",
                  },
                  (0, m.kt)(
                    "span",
                    { parentName: "span", className: "base" },
                    (0, m.kt)("span", {
                      parentName: "span",
                      className: "strut",
                      style: {
                        height: "0.8888799999999999em",
                        verticalAlign: "-0.19444em",
                      },
                    }),
                    (0, m.kt)(
                      "span",
                      {
                        parentName: "span",
                        className: "mord mathnormal",
                        style: { marginRight: "0.10764em" },
                      },
                      "f"
                    ),
                    (0, m.kt)("span", {
                      parentName: "span",
                      className: "mspace",
                      style: { marginRight: "0.2222222222222222em" },
                    }),
                    (0, m.kt)(
                      "span",
                      { parentName: "span", className: "mbin" },
                      "\u2218"
                    ),
                    (0, m.kt)("span", {
                      parentName: "span",
                      className: "mspace",
                      style: { marginRight: "0.2222222222222222em" },
                    })
                  ),
                  (0, m.kt)(
                    "span",
                    { parentName: "span", className: "base" },
                    (0, m.kt)("span", {
                      parentName: "span",
                      className: "strut",
                      style: { height: "1em", verticalAlign: "-0.25em" },
                    }),
                    (0, m.kt)(
                      "span",
                      {
                        parentName: "span",
                        className: "mord mathnormal",
                        style: { marginRight: "0.10764em" },
                      },
                      "f"
                    ),
                    (0, m.kt)(
                      "span",
                      { parentName: "span", className: "mopen" },
                      "("
                    ),
                    (0, m.kt)(
                      "span",
                      { parentName: "span", className: "mord mathnormal" },
                      "x"
                    ),
                    (0, m.kt)(
                      "span",
                      { parentName: "span", className: "mclose" },
                      ")"
                    ),
                    (0, m.kt)("span", {
                      parentName: "span",
                      className: "mspace",
                      style: { marginRight: "0.2777777777777778em" },
                    }),
                    (0, m.kt)(
                      "span",
                      { parentName: "span", className: "mrel" },
                      "="
                    ),
                    (0, m.kt)("span", {
                      parentName: "span",
                      className: "mspace",
                      style: { marginRight: "0.2777777777777778em" },
                    })
                  ),
                  (0, m.kt)(
                    "span",
                    { parentName: "span", className: "base" },
                    (0, m.kt)("span", {
                      parentName: "span",
                      className: "strut",
                      style: { height: "1em", verticalAlign: "-0.25em" },
                    }),
                    (0, m.kt)(
                      "span",
                      {
                        parentName: "span",
                        className: "mord mathnormal",
                        style: { marginRight: "0.10764em" },
                      },
                      "f"
                    ),
                    (0, m.kt)(
                      "span",
                      { parentName: "span", className: "mopen" },
                      "("
                    ),
                    (0, m.kt)(
                      "span",
                      { parentName: "span", className: "mord mathnormal" },
                      "x"
                    ),
                    (0, m.kt)(
                      "span",
                      { parentName: "span", className: "mclose" },
                      ")"
                    )
                  )
                )
              )
            ),
            "."
          ),
          (0, m.kt)(
            "p",
            null,
            "Statements can be idempotent. Variable assignments are an typical example of\nthis. Another example is GET and PUT in the\n",
            (0, m.kt)(
              "a",
              { parentName: "p", href: "/docs/network/protocols/http/" },
              "HTTP"
            ),
            " methods (while POST and DELETE are\nnot)."
          ),
          (0, m.kt)("h2", { id: "memoization" }, "Memoization"),
          (0, m.kt)(
            "p",
            null,
            (0, m.kt)("strong", { parentName: "p" }, "Memoization"),
            " is the concept of caching the results of expensive function\ncalls. This does introduce a processing-memory trade-of."
          ),
          (0, m.kt)("h2", { id: "dry" }, "DRY"),
          (0, m.kt)(
            "p",
            null,
            (0, m.kt)("strong", { parentName: "p" }, "DRY"),
            " is an acronym that stands for ",
            (0, m.kt)("strong", { parentName: "p" }, "Don't Repeat Yourself"),
            ". This gives\nminimal code that is easier to maintain."
          ),
          (0, m.kt)(
            "p",
            null,
            "It is important to identify where DRY is applicable and where it is not. For\nexample, if two pieces of code are utterly similar but fulfill rather different\npurposes one should think carefully before DRYing it up."
          )
        );
      }
      h.isMDXComponent = !0;
    },
  },
]);
