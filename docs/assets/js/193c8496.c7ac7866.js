"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [4019],
  {
    6341: (a, e, t) => {
      t.r(e),
        t.d(e, {
          assets: () => N,
          contentTitle: () => l,
          default: () => k,
          frontMatter: () => p,
          metadata: () => i,
          toc: () => o,
        });
      var s = t(7462),
        n = t(3366),
        m = (t(7294), t(3905)),
        r = (t(828), ["components"]),
        p = {},
        l = "Random numbers",
        i = {
          unversionedId: "security/cryptography/random_numbers",
          id: "security/cryptography/random_numbers",
          title: "Random numbers",
          description:
            "Random numbers are vital to cryptography in order to create unguessable",
          source: "@site/docs/security/cryptography/random_numbers.md",
          sourceDirName: "security/cryptography",
          slug: "/security/cryptography/random_numbers",
          permalink: "/docs/security/cryptography/random_numbers",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Hashing",
            permalink: "/docs/security/cryptography/hashing",
          },
          next: {
            title: "Digital signature",
            permalink: "/docs/security/cryptography/signature",
          },
        },
        N = {},
        o = [
          { value: "PRNG", id: "prng", level: 2 },
          { value: "True Random Numbers", id: "true-random-numbers", level: 2 },
        ],
        c = { toc: o };
      function k(a) {
        var e = a.components,
          t = (0, n.Z)(a, r);
        return (0, m.kt)(
          "wrapper",
          (0, s.Z)({}, c, t, { components: e, mdxType: "MDXLayout" }),
          (0, m.kt)("h1", { id: "random-numbers" }, "Random numbers"),
          (0, m.kt)(
            "p",
            null,
            (0, m.kt)("strong", { parentName: "p" }, "Random numbers"),
            " are vital to cryptography in order to create unguessable\nkeys. Creating cryptographically secure random numbers however is a difficult."
          ),
          (0, m.kt)("h2", { id: "prng" }, "PRNG"),
          (0, m.kt)(
            "p",
            null,
            (0, m.kt)(
              "strong",
              { parentName: "p" },
              "Pseudorandom Number Generators"
            ),
            " (",
            (0, m.kt)("strong", { parentName: "p" }, "PRNG"),
            "s) are generators that produce\nnumbers that seem random but are not. A PRNG produces the same sequence of\npseudorandom numbers given the same input data (which is called a ",
            (0, m.kt)("em", { parentName: "p" }, "seed"),
            "). PRGNs\nare useful in systems where both randomness and reproducibility are needed, such\nas e.g. for software tests, simulations and procedural generation in games."
          ),
          (0, m.kt)(
            "p",
            null,
            "A common type of PRNGs are Linear Congruent Generators (LCG). They are defined\nby"
          ),
          (0, m.kt)(
            "div",
            { className: "math math-display" },
            (0, m.kt)(
              "span",
              { parentName: "div", className: "katex-display" },
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
                      display: "block",
                    },
                    (0, m.kt)(
                      "semantics",
                      { parentName: "math" },
                      (0, m.kt)(
                        "mrow",
                        { parentName: "semantics" },
                        (0, m.kt)(
                          "msub",
                          { parentName: "mrow" },
                          (0, m.kt)("mi", { parentName: "msub" }, "x"),
                          (0, m.kt)(
                            "mrow",
                            { parentName: "msub" },
                            (0, m.kt)("mi", { parentName: "mrow" }, "n"),
                            (0, m.kt)("mo", { parentName: "mrow" }, "+"),
                            (0, m.kt)("mn", { parentName: "mrow" }, "1")
                          )
                        ),
                        (0, m.kt)("mo", { parentName: "mrow" }, "="),
                        (0, m.kt)("mi", { parentName: "mrow" }, "a"),
                        (0, m.kt)(
                          "msub",
                          { parentName: "mrow" },
                          (0, m.kt)("mi", { parentName: "msub" }, "x"),
                          (0, m.kt)("mi", { parentName: "msub" }, "n")
                        ),
                        (0, m.kt)("mo", { parentName: "mrow" }, "+"),
                        (0, m.kt)("mi", { parentName: "mrow" }, "k"),
                        (0, m.kt)(
                          "mtext",
                          { parentName: "mrow" },
                          "\u2005\u200a"
                        ),
                        (0, m.kt)(
                          "mrow",
                          { parentName: "mrow" },
                          (0, m.kt)(
                            "mi",
                            { parentName: "mrow", mathvariant: "normal" },
                            "m"
                          ),
                          (0, m.kt)(
                            "mi",
                            { parentName: "mrow", mathvariant: "normal" },
                            "o"
                          ),
                          (0, m.kt)(
                            "mi",
                            { parentName: "mrow", mathvariant: "normal" },
                            "d"
                          )
                        ),
                        (0, m.kt)(
                          "mtext",
                          { parentName: "mrow" },
                          "\u2005\u200a"
                        ),
                        (0, m.kt)("mi", { parentName: "mrow" }, "n")
                      ),
                      (0, m.kt)(
                        "annotation",
                        {
                          parentName: "semantics",
                          encoding: "application/x-tex",
                        },
                        "x_{n+1} = ax_n + k \\; \\mathrm{mod}\\; n"
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
                        height: "0.638891em",
                        verticalAlign: "-0.208331em",
                      },
                    }),
                    (0, m.kt)(
                      "span",
                      { parentName: "span", className: "mord" },
                      (0, m.kt)(
                        "span",
                        { parentName: "span", className: "mord mathnormal" },
                        "x"
                      ),
                      (0, m.kt)(
                        "span",
                        { parentName: "span", className: "msupsub" },
                        (0, m.kt)(
                          "span",
                          { parentName: "span", className: "vlist-t vlist-t2" },
                          (0, m.kt)(
                            "span",
                            { parentName: "span", className: "vlist-r" },
                            (0, m.kt)(
                              "span",
                              {
                                parentName: "span",
                                className: "vlist",
                                style: { height: "0.301108em" },
                              },
                              (0, m.kt)(
                                "span",
                                {
                                  parentName: "span",
                                  style: {
                                    top: "-2.5500000000000003em",
                                    marginLeft: "0em",
                                    marginRight: "0.05em",
                                  },
                                },
                                (0, m.kt)("span", {
                                  parentName: "span",
                                  className: "pstrut",
                                  style: { height: "2.7em" },
                                }),
                                (0, m.kt)(
                                  "span",
                                  {
                                    parentName: "span",
                                    className:
                                      "sizing reset-size6 size3 mtight",
                                  },
                                  (0, m.kt)(
                                    "span",
                                    {
                                      parentName: "span",
                                      className: "mord mtight",
                                    },
                                    (0, m.kt)(
                                      "span",
                                      {
                                        parentName: "span",
                                        className: "mord mathnormal mtight",
                                      },
                                      "n"
                                    ),
                                    (0, m.kt)(
                                      "span",
                                      {
                                        parentName: "span",
                                        className: "mbin mtight",
                                      },
                                      "+"
                                    ),
                                    (0, m.kt)(
                                      "span",
                                      {
                                        parentName: "span",
                                        className: "mord mtight",
                                      },
                                      "1"
                                    )
                                  )
                                )
                              )
                            ),
                            (0, m.kt)(
                              "span",
                              { parentName: "span", className: "vlist-s" },
                              "\u200b"
                            )
                          ),
                          (0, m.kt)(
                            "span",
                            { parentName: "span", className: "vlist-r" },
                            (0, m.kt)(
                              "span",
                              {
                                parentName: "span",
                                className: "vlist",
                                style: { height: "0.208331em" },
                              },
                              (0, m.kt)("span", { parentName: "span" })
                            )
                          )
                        )
                      )
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
                      style: { height: "0.73333em", verticalAlign: "-0.15em" },
                    }),
                    (0, m.kt)(
                      "span",
                      { parentName: "span", className: "mord mathnormal" },
                      "a"
                    ),
                    (0, m.kt)(
                      "span",
                      { parentName: "span", className: "mord" },
                      (0, m.kt)(
                        "span",
                        { parentName: "span", className: "mord mathnormal" },
                        "x"
                      ),
                      (0, m.kt)(
                        "span",
                        { parentName: "span", className: "msupsub" },
                        (0, m.kt)(
                          "span",
                          { parentName: "span", className: "vlist-t vlist-t2" },
                          (0, m.kt)(
                            "span",
                            { parentName: "span", className: "vlist-r" },
                            (0, m.kt)(
                              "span",
                              {
                                parentName: "span",
                                className: "vlist",
                                style: { height: "0.151392em" },
                              },
                              (0, m.kt)(
                                "span",
                                {
                                  parentName: "span",
                                  style: {
                                    top: "-2.5500000000000003em",
                                    marginLeft: "0em",
                                    marginRight: "0.05em",
                                  },
                                },
                                (0, m.kt)("span", {
                                  parentName: "span",
                                  className: "pstrut",
                                  style: { height: "2.7em" },
                                }),
                                (0, m.kt)(
                                  "span",
                                  {
                                    parentName: "span",
                                    className:
                                      "sizing reset-size6 size3 mtight",
                                  },
                                  (0, m.kt)(
                                    "span",
                                    {
                                      parentName: "span",
                                      className: "mord mathnormal mtight",
                                    },
                                    "n"
                                  )
                                )
                              )
                            ),
                            (0, m.kt)(
                              "span",
                              { parentName: "span", className: "vlist-s" },
                              "\u200b"
                            )
                          ),
                          (0, m.kt)(
                            "span",
                            { parentName: "span", className: "vlist-r" },
                            (0, m.kt)(
                              "span",
                              {
                                parentName: "span",
                                className: "vlist",
                                style: { height: "0.15em" },
                              },
                              (0, m.kt)("span", { parentName: "span" })
                            )
                          )
                        )
                      )
                    ),
                    (0, m.kt)("span", {
                      parentName: "span",
                      className: "mspace",
                      style: { marginRight: "0.2222222222222222em" },
                    }),
                    (0, m.kt)(
                      "span",
                      { parentName: "span", className: "mbin" },
                      "+"
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
                      style: { height: "0.69444em", verticalAlign: "0em" },
                    }),
                    (0, m.kt)(
                      "span",
                      {
                        parentName: "span",
                        className: "mord mathnormal",
                        style: { marginRight: "0.03148em" },
                      },
                      "k"
                    ),
                    (0, m.kt)("span", {
                      parentName: "span",
                      className: "mspace",
                      style: { marginRight: "0.2777777777777778em" },
                    }),
                    (0, m.kt)(
                      "span",
                      { parentName: "span", className: "mord" },
                      (0, m.kt)(
                        "span",
                        { parentName: "span", className: "mord mathrm" },
                        "m"
                      ),
                      (0, m.kt)(
                        "span",
                        { parentName: "span", className: "mord mathrm" },
                        "o"
                      ),
                      (0, m.kt)(
                        "span",
                        { parentName: "span", className: "mord mathrm" },
                        "d"
                      )
                    ),
                    (0, m.kt)("span", {
                      parentName: "span",
                      className: "mspace",
                      style: { marginRight: "0.2777777777777778em" },
                    }),
                    (0, m.kt)(
                      "span",
                      { parentName: "span", className: "mord mathnormal" },
                      "n"
                    )
                  )
                )
              )
            )
          ),
          (0, m.kt)(
            "p",
            null,
            "where ",
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
                        (0, m.kt)(
                          "msub",
                          { parentName: "mrow" },
                          (0, m.kt)("mi", { parentName: "msub" }, "x"),
                          (0, m.kt)("mn", { parentName: "msub" }, "0")
                        )
                      ),
                      (0, m.kt)(
                        "annotation",
                        {
                          parentName: "semantics",
                          encoding: "application/x-tex",
                        },
                        "x_0"
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
                      style: { height: "0.58056em", verticalAlign: "-0.15em" },
                    }),
                    (0, m.kt)(
                      "span",
                      { parentName: "span", className: "mord" },
                      (0, m.kt)(
                        "span",
                        { parentName: "span", className: "mord mathnormal" },
                        "x"
                      ),
                      (0, m.kt)(
                        "span",
                        { parentName: "span", className: "msupsub" },
                        (0, m.kt)(
                          "span",
                          { parentName: "span", className: "vlist-t vlist-t2" },
                          (0, m.kt)(
                            "span",
                            { parentName: "span", className: "vlist-r" },
                            (0, m.kt)(
                              "span",
                              {
                                parentName: "span",
                                className: "vlist",
                                style: { height: "0.30110799999999993em" },
                              },
                              (0, m.kt)(
                                "span",
                                {
                                  parentName: "span",
                                  style: {
                                    top: "-2.5500000000000003em",
                                    marginLeft: "0em",
                                    marginRight: "0.05em",
                                  },
                                },
                                (0, m.kt)("span", {
                                  parentName: "span",
                                  className: "pstrut",
                                  style: { height: "2.7em" },
                                }),
                                (0, m.kt)(
                                  "span",
                                  {
                                    parentName: "span",
                                    className:
                                      "sizing reset-size6 size3 mtight",
                                  },
                                  (0, m.kt)(
                                    "span",
                                    {
                                      parentName: "span",
                                      className: "mord mtight",
                                    },
                                    "0"
                                  )
                                )
                              )
                            ),
                            (0, m.kt)(
                              "span",
                              { parentName: "span", className: "vlist-s" },
                              "\u200b"
                            )
                          ),
                          (0, m.kt)(
                            "span",
                            { parentName: "span", className: "vlist-r" },
                            (0, m.kt)(
                              "span",
                              {
                                parentName: "span",
                                className: "vlist",
                                style: { height: "0.15em" },
                              },
                              (0, m.kt)("span", { parentName: "span" })
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            ),
            " is the seed."
          ),
          (0, m.kt)("p", null, "There are cryptographically secure PRNGs."),
          (0, m.kt)("h2", { id: "true-random-numbers" }, "True Random Numbers"),
          (0, m.kt)(
            "p",
            null,
            "Numbers that are truly random can be generated using hardware. One approach is\nto rely on quantum phenomena."
          )
        );
      }
      k.isMDXComponent = !0;
    },
  },
]);
