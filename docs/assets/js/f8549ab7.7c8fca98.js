"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [1791],
  {
    2051: (a, e, t) => {
      t.r(e),
        t.d(e, {
          assets: () => o,
          contentTitle: () => i,
          default: () => h,
          frontMatter: () => r,
          metadata: () => l,
          toc: () => N,
        });
      var n = t(7462),
        s = t(3366),
        m = (t(7294), t(3905)),
        p = (t(828), ["components"]),
        r = {},
        i = "Optimizers",
        l = {
          unversionedId: "ai/ann/optimizers",
          id: "ai/ann/optimizers",
          title: "Optimizers",
          description:
            "An optimizer is an algorithm for optimizing a function, such as an",
          source: "@site/docs/ai/ann/optimizers.md",
          sourceDirName: "ai/ann",
          slug: "/ai/ann/optimizers",
          permalink: "/docs/ai/ann/optimizers",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "RNN",
            permalink: "/docs/ai/ann/network_types/rnn",
          },
          next: { title: "Clustering", permalink: "/docs/ai/clustering" },
        },
        o = {},
        N = [
          { value: "Gradient Descent", id: "gradient-descent", level: 2 },
          { value: "Momentum", id: "momentum", level: 3 },
          {
            value: "Stochastic Gradient Descent",
            id: "stochastic-gradient-descent",
            level: 2,
          },
          { value: "Adam", id: "adam", level: 2 },
          { value: "Other optimizers", id: "other-optimizers", level: 2 },
        ],
        c = { toc: N };
      function h(a) {
        var e = a.components,
          t = (0, s.Z)(a, p);
        return (0, m.kt)(
          "wrapper",
          (0, n.Z)({}, c, t, { components: e, mdxType: "MDXLayout" }),
          (0, m.kt)("h1", { id: "optimizers" }, "Optimizers"),
          (0, m.kt)(
            "p",
            null,
            "An ",
            (0, m.kt)("strong", { parentName: "p" }, "optimizer"),
            " is an algorithm for optimizing a function, such as an\n",
            (0, m.kt)("a", { parentName: "p", href: "/docs/ai/ann/" }, "ANN"),
            ". This is commonly done as an iterative process using the\nfunction first and second order derivatives."
          ),
          (0, m.kt)("h2", { id: "gradient-descent" }, "Gradient Descent"),
          (0, m.kt)(
            "p",
            null,
            (0, m.kt)("strong", { parentName: "p" }, "Gradient Descent"),
            " is an intuitive optimizer where one traverses the function\nlandscape in the opposite direction of the function derivate ",
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
                          "mi",
                          { parentName: "mrow", mathvariant: "normal" },
                          "\u2207"
                        ),
                        (0, m.kt)("mi", { parentName: "mrow" }, "f")
                      ),
                      (0, m.kt)(
                        "annotation",
                        {
                          parentName: "semantics",
                          encoding: "application/x-tex",
                        },
                        "\\nabla f"
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
                      { parentName: "span", className: "mord" },
                      "\u2207"
                    ),
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
            ". Let\n",
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
                        (0, m.kt)("mi", { parentName: "mrow" }, "\u03c9")
                      ),
                      (0, m.kt)(
                        "annotation",
                        {
                          parentName: "semantics",
                          encoding: "application/x-tex",
                        },
                        "\\omega"
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
                      style: { height: "0.43056em", verticalAlign: "0em" },
                    }),
                    (0, m.kt)(
                      "span",
                      {
                        parentName: "span",
                        className: "mord mathnormal",
                        style: { marginRight: "0.03588em" },
                      },
                      "\u03c9"
                    )
                  )
                )
              )
            ),
            " denote the set of parameters that are to be optimized. Then ",
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
                        (0, m.kt)("mi", { parentName: "mrow" }, "\u03c9")
                      ),
                      (0, m.kt)(
                        "annotation",
                        {
                          parentName: "semantics",
                          encoding: "application/x-tex",
                        },
                        "\\omega"
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
                      style: { height: "0.43056em", verticalAlign: "0em" },
                    }),
                    (0, m.kt)(
                      "span",
                      {
                        parentName: "span",
                        className: "mord mathnormal",
                        style: { marginRight: "0.03588em" },
                      },
                      "\u03c9"
                    )
                  )
                )
              )
            ),
            "\ncan be iteratively updated as"
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
                          (0, m.kt)("mi", { parentName: "msub" }, "\u03c9"),
                          (0, m.kt)(
                            "mrow",
                            { parentName: "msub" },
                            (0, m.kt)("mi", { parentName: "mrow" }, "n"),
                            (0, m.kt)("mo", { parentName: "mrow" }, "+"),
                            (0, m.kt)("mn", { parentName: "mrow" }, "1")
                          )
                        ),
                        (0, m.kt)("mo", { parentName: "mrow" }, "="),
                        (0, m.kt)(
                          "msub",
                          { parentName: "mrow" },
                          (0, m.kt)("mi", { parentName: "msub" }, "\u03c9"),
                          (0, m.kt)("mi", { parentName: "msub" }, "n")
                        ),
                        (0, m.kt)("mo", { parentName: "mrow" }, "\u2212"),
                        (0, m.kt)("mi", { parentName: "mrow" }, "\u03b1"),
                        (0, m.kt)(
                          "mi",
                          { parentName: "mrow", mathvariant: "normal" },
                          "\u2207"
                        ),
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
                        (0, m.kt)(
                          "mi",
                          { parentName: "mrow", mathvariant: "normal" },
                          "."
                        )
                      ),
                      (0, m.kt)(
                        "annotation",
                        {
                          parentName: "semantics",
                          encoding: "application/x-tex",
                        },
                        "\\omega_{n+1} = \\omega_n - \\alpha \\nabla f(x)."
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
                        {
                          parentName: "span",
                          className: "mord mathnormal",
                          style: { marginRight: "0.03588em" },
                        },
                        "\u03c9"
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
                                    marginLeft: "-0.03588em",
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
                      { parentName: "span", className: "mord" },
                      (0, m.kt)(
                        "span",
                        {
                          parentName: "span",
                          className: "mord mathnormal",
                          style: { marginRight: "0.03588em" },
                        },
                        "\u03c9"
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
                                    marginLeft: "-0.03588em",
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
                      "\u2212"
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
                        style: { marginRight: "0.0037em" },
                      },
                      "\u03b1"
                    ),
                    (0, m.kt)(
                      "span",
                      { parentName: "span", className: "mord" },
                      "\u2207"
                    ),
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
                    (0, m.kt)(
                      "span",
                      { parentName: "span", className: "mord" },
                      "."
                    )
                  )
                )
              )
            )
          ),
          (0, m.kt)(
            "p",
            null,
            "The parameter ",
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
                        (0, m.kt)("mi", { parentName: "mrow" }, "\u03b1")
                      ),
                      (0, m.kt)(
                        "annotation",
                        {
                          parentName: "semantics",
                          encoding: "application/x-tex",
                        },
                        "\\alpha"
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
                      style: { height: "0.43056em", verticalAlign: "0em" },
                    }),
                    (0, m.kt)(
                      "span",
                      {
                        parentName: "span",
                        className: "mord mathnormal",
                        style: { marginRight: "0.0037em" },
                      },
                      "\u03b1"
                    )
                  )
                )
              )
            ),
            " is known as the learning rate and determines the\nconvergence speed. Higher values lead to faster convergence but poorer\nprecision. To use the advantage of both large ans mall learning rates, one can\nuse a ",
            (0, m.kt)(
              "a",
              {
                parentName: "p",
                href: "/docs/ai/ann/learning_rate_schedulers",
              },
              "learning rate scheduler"
            ),
            "."
          ),
          (0, m.kt)(
            "p",
            null,
            "The inherent problem with gradient descent is that is only guarantees\nconvergence to a local optima (or saddle point), but not any global optima.\nTherefore, for any realistic purposes, one needs to go for any other optimizing\nalgorithm."
          ),
          (0, m.kt)("h3", { id: "momentum" }, "Momentum"),
          (0, m.kt)(
            "p",
            null,
            (0, m.kt)("strong", { parentName: "p" }, "Momentum"),
            " is a method for speeding up gradient descent convergence by\nincreasing the learning rate when the derivative keeps the same sign and\ndecreasing it when the sign changes."
          ),
          (0, m.kt)(
            "h2",
            { id: "stochastic-gradient-descent" },
            "Stochastic Gradient Descent"
          ),
          (0, m.kt)(
            "p",
            null,
            (0, m.kt)(
              "strong",
              { parentName: "p" },
              "Stochastic Gradient Descent"
            ),
            " (",
            (0, m.kt)("strong", { parentName: "p" }, "SGD"),
            ") is a version of gradient descent that\ncombats the problem of global convergence. Instead of calculating the derivative\nof the whole dataset, it is instead calculated based on one randomly picked\ndatapoint from one's dataset. This introduces some stochasticity into the\nprocess, allowing the algorithm to escape local minima. It also greatly eases\nthe computational burden of the algorithm."
          ),
          (0, m.kt)("h2", { id: "adam" }, "Adam"),
          (0, m.kt)(
            "p",
            null,
            (0, m.kt)(
              "strong",
              { parentName: "p" },
              "Adaptive Movement estimation"
            ),
            " (",
            (0, m.kt)("strong", { parentName: "p" }, "Adam"),
            ") is another popular optimizer."
          ),
          (0, m.kt)("h2", { id: "other-optimizers" }, "Other optimizers"),
          (0, m.kt)("p", null, "Some other common optimizers are"),
          (0, m.kt)(
            "ul",
            null,
            (0, m.kt)("li", { parentName: "ul" }, "AdaBound"),
            (0, m.kt)("li", { parentName: "ul" }, "YellowFin")
          )
        );
      }
      h.isMDXComponent = !0;
    },
  },
]);
