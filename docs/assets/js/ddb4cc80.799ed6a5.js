"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [432],
  {
    3378: (a, e, t) => {
      t.r(e),
        t.d(e, {
          assets: () => l,
          contentTitle: () => i,
          default: () => h,
          frontMatter: () => r,
          metadata: () => N,
          toc: () => k,
        });
      var s = t(7462),
        n = t(3366),
        m = (t(7294), t(3905)),
        p = (t(828), ["components"]),
        r = {},
        i = "Basics",
        N = {
          unversionedId: "ai/ann/ann",
          id: "ai/ann/ann",
          title: "Basics",
          description:
            "An Artificial Neural Network (ANN) is a computational graph, that is a",
          source: "@site/docs/ai/ann/ann.md",
          sourceDirName: "ai/ann",
          slug: "/ai/ann/",
          permalink: "/docs/ai/ann/",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "Home", permalink: "/docs/" },
          next: {
            title: "Reinforcement learning",
            permalink: "/docs/ai/ann/learning/reinforcement_learning",
          },
        },
        l = {},
        k = [
          {
            value: "Bayesian Neural Network",
            id: "bayesian-neural-network",
            level: 2,
          },
        ],
        c = { toc: k };
      function h(a) {
        var e = a.components,
          t = (0, n.Z)(a, p);
        return (0, m.kt)(
          "wrapper",
          (0, s.Z)({}, c, t, { components: e, mdxType: "MDXLayout" }),
          (0, m.kt)("h1", { id: "basics" }, "Basics"),
          (0, m.kt)(
            "p",
            null,
            "An ",
            (0, m.kt)(
              "strong",
              { parentName: "p" },
              "Artificial Neural Network"
            ),
            " (",
            (0, m.kt)("strong", { parentName: "p" }, "ANN"),
            ") is a computational graph, that is a\nnetwork of nodes where every connection can have different strengths. In\nmathematical terms a single node ",
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
                        (0, m.kt)("mi", { parentName: "mrow" }, "y")
                      ),
                      (0, m.kt)(
                        "annotation",
                        {
                          parentName: "semantics",
                          encoding: "application/x-tex",
                        },
                        "y"
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
                      style: { height: "0.625em", verticalAlign: "-0.19444em" },
                    }),
                    (0, m.kt)(
                      "span",
                      {
                        parentName: "span",
                        className: "mord mathnormal",
                        style: { marginRight: "0.03588em" },
                      },
                      "y"
                    )
                  )
                )
              )
            ),
            " be expressed as"
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
                        (0, m.kt)("mi", { parentName: "mrow" }, "y"),
                        (0, m.kt)("mo", { parentName: "mrow" }, "="),
                        (0, m.kt)("mi", { parentName: "mrow" }, "\u03d5"),
                        (0, m.kt)(
                          "mrow",
                          { parentName: "mrow" },
                          (0, m.kt)(
                            "mo",
                            { parentName: "mrow", fence: "true" },
                            "("
                          ),
                          (0, m.kt)(
                            "munder",
                            { parentName: "mrow" },
                            (0, m.kt)("mo", { parentName: "munder" }, "\u2211"),
                            (0, m.kt)("mi", { parentName: "munder" }, "i")
                          ),
                          (0, m.kt)(
                            "msub",
                            { parentName: "mrow" },
                            (0, m.kt)("mi", { parentName: "msub" }, "\u03c9"),
                            (0, m.kt)("mi", { parentName: "msub" }, "i")
                          ),
                          (0, m.kt)(
                            "msub",
                            { parentName: "mrow" },
                            (0, m.kt)("mi", { parentName: "msub" }, "x"),
                            (0, m.kt)("mi", { parentName: "msub" }, "i")
                          ),
                          (0, m.kt)(
                            "mo",
                            { parentName: "mrow", fence: "true" },
                            ")"
                          )
                        )
                      ),
                      (0, m.kt)(
                        "annotation",
                        {
                          parentName: "semantics",
                          encoding: "application/x-tex",
                        },
                        "y = \\phi\\left(\\sum_i \\omega_i x_i\\right)"
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
                      style: { height: "0.625em", verticalAlign: "-0.19444em" },
                    }),
                    (0, m.kt)(
                      "span",
                      {
                        parentName: "span",
                        className: "mord mathnormal",
                        style: { marginRight: "0.03588em" },
                      },
                      "y"
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
                      style: {
                        height: "3.027669em",
                        verticalAlign: "-1.277669em",
                      },
                    }),
                    (0, m.kt)(
                      "span",
                      { parentName: "span", className: "mord mathnormal" },
                      "\u03d5"
                    ),
                    (0, m.kt)("span", {
                      parentName: "span",
                      className: "mspace",
                      style: { marginRight: "0.16666666666666666em" },
                    }),
                    (0, m.kt)(
                      "span",
                      { parentName: "span", className: "minner" },
                      (0, m.kt)(
                        "span",
                        {
                          parentName: "span",
                          className: "mopen delimcenter",
                          style: { top: "0em" },
                        },
                        (0, m.kt)(
                          "span",
                          {
                            parentName: "span",
                            className: "delimsizing size4",
                          },
                          "("
                        )
                      ),
                      (0, m.kt)(
                        "span",
                        { parentName: "span", className: "mop op-limits" },
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
                                style: { height: "1.0500050000000003em" },
                              },
                              (0, m.kt)(
                                "span",
                                {
                                  parentName: "span",
                                  style: {
                                    top: "-1.872331em",
                                    marginLeft: "0em",
                                  },
                                },
                                (0, m.kt)("span", {
                                  parentName: "span",
                                  className: "pstrut",
                                  style: { height: "3.05em" },
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
                                    "i"
                                  )
                                )
                              ),
                              (0, m.kt)(
                                "span",
                                {
                                  parentName: "span",
                                  style: { top: "-3.050005em" },
                                },
                                (0, m.kt)("span", {
                                  parentName: "span",
                                  className: "pstrut",
                                  style: { height: "3.05em" },
                                }),
                                (0, m.kt)(
                                  "span",
                                  { parentName: "span" },
                                  (0, m.kt)(
                                    "span",
                                    {
                                      parentName: "span",
                                      className: "mop op-symbol large-op",
                                    },
                                    "\u2211"
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
                                style: { height: "1.277669em" },
                              },
                              (0, m.kt)("span", { parentName: "span" })
                            )
                          )
                        )
                      ),
                      (0, m.kt)("span", {
                        parentName: "span",
                        className: "mspace",
                        style: { marginRight: "0.16666666666666666em" },
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
                            {
                              parentName: "span",
                              className: "vlist-t vlist-t2",
                            },
                            (0, m.kt)(
                              "span",
                              { parentName: "span", className: "vlist-r" },
                              (0, m.kt)(
                                "span",
                                {
                                  parentName: "span",
                                  className: "vlist",
                                  style: { height: "0.31166399999999994em" },
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
                                      "i"
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
                            {
                              parentName: "span",
                              className: "vlist-t vlist-t2",
                            },
                            (0, m.kt)(
                              "span",
                              { parentName: "span", className: "vlist-r" },
                              (0, m.kt)(
                                "span",
                                {
                                  parentName: "span",
                                  className: "vlist",
                                  style: { height: "0.31166399999999994em" },
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
                                      "i"
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
                      (0, m.kt)(
                        "span",
                        {
                          parentName: "span",
                          className: "mclose delimcenter",
                          style: { top: "0em" },
                        },
                        (0, m.kt)(
                          "span",
                          {
                            parentName: "span",
                            className: "delimsizing size4",
                          },
                          ")"
                        )
                      )
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
                        (0, m.kt)("mi", { parentName: "mrow" }, "\u03d5")
                      ),
                      (0, m.kt)(
                        "annotation",
                        {
                          parentName: "semantics",
                          encoding: "application/x-tex",
                        },
                        "\\phi"
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
                      { parentName: "span", className: "mord mathnormal" },
                      "\u03d5"
                    )
                  )
                )
              )
            ),
            " is the activation function of the node, ",
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
                          (0, m.kt)("mi", { parentName: "msub" }, "i")
                        )
                      ),
                      (0, m.kt)(
                        "annotation",
                        {
                          parentName: "semantics",
                          encoding: "application/x-tex",
                        },
                        "x_i"
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
                                style: { height: "0.31166399999999994em" },
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
                                    "i"
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
            " its inputs and\n",
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
                          (0, m.kt)("mi", { parentName: "msub" }, "\u03c9"),
                          (0, m.kt)("mi", { parentName: "msub" }, "i")
                        )
                      ),
                      (0, m.kt)(
                        "annotation",
                        {
                          parentName: "semantics",
                          encoding: "application/x-tex",
                        },
                        "\\omega_i"
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
                                style: { height: "0.31166399999999994em" },
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
                                    "i"
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
            " the weights. The network is trained by optimizing ",
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
                        (0, m.kt)("mi", { parentName: "mrow" }, "y")
                      ),
                      (0, m.kt)(
                        "annotation",
                        {
                          parentName: "semantics",
                          encoding: "application/x-tex",
                        },
                        "y"
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
                      style: { height: "0.625em", verticalAlign: "-0.19444em" },
                    }),
                    (0, m.kt)(
                      "span",
                      {
                        parentName: "span",
                        className: "mord mathnormal",
                        style: { marginRight: "0.03588em" },
                      },
                      "y"
                    )
                  )
                )
              )
            ),
            " via ",
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
            "\nusing an ",
            (0, m.kt)(
              "a",
              { parentName: "p", href: "./optimizers" },
              "optimizer"
            ),
            "."
          ),
          (0, m.kt)(
            "h2",
            { id: "bayesian-neural-network" },
            "Bayesian Neural Network"
          ),
          (0, m.kt)(
            "p",
            null,
            "A ",
            (0, m.kt)("strong", { parentName: "p" }, "Bayesian neural network"),
            " is an ANN that uses a probability distribution for\nthe weights instead of point estimates. This will yield networks that can be\nsampled but will also increase the number of parameters that needs to be\ntrained."
          )
        );
      }
      h.isMDXComponent = !0;
    },
  },
]);
