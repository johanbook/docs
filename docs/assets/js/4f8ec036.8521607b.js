"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [9250],
  {
    4793: (a, e, t) => {
      t.r(e),
        t.d(e, {
          assets: () => N,
          contentTitle: () => l,
          default: () => o,
          frontMatter: () => r,
          metadata: () => i,
          toc: () => c,
        });
      var s = t(7462),
        n = t(3366),
        m = (t(7294), t(3905)),
        p = (t(828), ["components"]),
        r = {},
        l = "Encryption",
        i = {
          unversionedId: "security/cryptography/encryption",
          id: "security/cryptography/encryption",
          title: "Encryption",
          description:
            "Encryption is the act of obscuring data such that only a receiving part can",
          source: "@site/docs/security/cryptography/encryption.md",
          sourceDirName: "security/cryptography",
          slug: "/security/cryptography/encryption",
          permalink: "/docs/security/cryptography/encryption",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "Cookies", permalink: "/docs/security/cookies" },
          next: {
            title: "Hashing",
            permalink: "/docs/security/cryptography/hashing",
          },
        },
        N = {},
        c = [
          {
            value: "Encryption Algorithms",
            id: "encryption-algorithms",
            level: 2,
          },
          { value: "DES", id: "des", level: 3 },
          { value: "AES", id: "aes", level: 3 },
          { value: "RSA", id: "rsa", level: 3 },
          { value: "Key Generation", id: "key-generation", level: 4 },
          { value: "One Time Pad", id: "one-time-pad", level: 3 },
          { value: "Caesar Cipher", id: "caesar-cipher", level: 3 },
        ],
        k = { toc: c };
      function o(a) {
        var e = a.components,
          t = (0, n.Z)(a, p);
        return (0, m.kt)(
          "wrapper",
          (0, s.Z)({}, k, t, { components: e, mdxType: "MDXLayout" }),
          (0, m.kt)("h1", { id: "encryption" }, "Encryption"),
          (0, m.kt)(
            "p",
            null,
            (0, m.kt)("strong", { parentName: "p" }, "Encryption"),
            " is the act of obscuring data such that only a receiving part can\nproperly understand it. It can rely either on the implementation detail being\nsecret (see security by obscurity) or by sharing a common secret. The latter\noption is often used and the secrets are called ",
            (0, m.kt)("strong", { parentName: "p" }, "keys"),
            "."
          ),
          (0, m.kt)(
            "p",
            null,
            "Key-based encryption can be either symmetric (same key for encryption and\ndecryption) or asymmetric (different key for encryption and decryption). For\nasymmetric encryption the key pair is called private and public key."
          ),
          (0, m.kt)(
            "h2",
            { id: "encryption-algorithms" },
            "Encryption Algorithms"
          ),
          (0, m.kt)(
            "p",
            null,
            "There is a plethora of encryption algorithms. Here are some common ones;"
          ),
          (0, m.kt)("h3", { id: "des" }, "DES"),
          (0, m.kt)(
            "p",
            null,
            (0, m.kt)(
              "strong",
              { parentName: "p" },
              "Data Encryption Standard"
            ),
            " (",
            (0, m.kt)("strong", { parentName: "p" }, "DES"),
            ") is a broken encryption standard."
          ),
          (0, m.kt)("h3", { id: "aes" }, "AES"),
          (0, m.kt)(
            "p",
            null,
            (0, m.kt)(
              "strong",
              { parentName: "p" },
              "Advanced Encryption Standard"
            ),
            " (",
            (0, m.kt)("strong", { parentName: "p" }, "AES"),
            ") is an symmetric key algorithm. It is\na block cipher."
          ),
          (0, m.kt)("h3", { id: "rsa" }, "RSA"),
          (0, m.kt)(
            "p",
            null,
            (0, m.kt)("strong", { parentName: "p" }, "RSA"),
            " is a asymmetric key algorithm. It relies on"
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
                          "mo",
                          { parentName: "mrow", stretchy: "false" },
                          "("
                        ),
                        (0, m.kt)(
                          "msup",
                          { parentName: "mrow" },
                          (0, m.kt)("mi", { parentName: "msup" }, "m"),
                          (0, m.kt)("mi", { parentName: "msup" }, "e")
                        ),
                        (0, m.kt)(
                          "msup",
                          { parentName: "mrow" },
                          (0, m.kt)(
                            "mo",
                            { parentName: "msup", stretchy: "false" },
                            ")"
                          ),
                          (0, m.kt)("mi", { parentName: "msup" }, "d")
                        ),
                        (0, m.kt)("mo", { parentName: "mrow" }, "="),
                        (0, m.kt)(
                          "mo",
                          { parentName: "mrow", stretchy: "false" },
                          "("
                        ),
                        (0, m.kt)(
                          "msup",
                          { parentName: "mrow" },
                          (0, m.kt)("mi", { parentName: "msup" }, "m"),
                          (0, m.kt)("mi", { parentName: "msup" }, "d")
                        ),
                        (0, m.kt)(
                          "msup",
                          { parentName: "mrow" },
                          (0, m.kt)(
                            "mo",
                            { parentName: "msup", stretchy: "false" },
                            ")"
                          ),
                          (0, m.kt)("mi", { parentName: "msup" }, "e")
                        ),
                        (0, m.kt)("mo", { parentName: "mrow" }, "="),
                        (0, m.kt)("mi", { parentName: "mrow" }, "m"),
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
                        "(m^e)^d = (m^d)^e = m \\; \\mathrm{mod}\\; n"
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
                      style: { height: "1.149108em", verticalAlign: "-0.25em" },
                    }),
                    (0, m.kt)(
                      "span",
                      { parentName: "span", className: "mopen" },
                      "("
                    ),
                    (0, m.kt)(
                      "span",
                      { parentName: "span", className: "mord" },
                      (0, m.kt)(
                        "span",
                        { parentName: "span", className: "mord mathnormal" },
                        "m"
                      ),
                      (0, m.kt)(
                        "span",
                        { parentName: "span", className: "msupsub" },
                        (0, m.kt)(
                          "span",
                          { parentName: "span", className: "vlist-t" },
                          (0, m.kt)(
                            "span",
                            { parentName: "span", className: "vlist-r" },
                            (0, m.kt)(
                              "span",
                              {
                                parentName: "span",
                                className: "vlist",
                                style: { height: "0.7143919999999999em" },
                              },
                              (0, m.kt)(
                                "span",
                                {
                                  parentName: "span",
                                  style: {
                                    top: "-3.113em",
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
                                    "e"
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    ),
                    (0, m.kt)(
                      "span",
                      { parentName: "span", className: "mclose" },
                      (0, m.kt)(
                        "span",
                        { parentName: "span", className: "mclose" },
                        ")"
                      ),
                      (0, m.kt)(
                        "span",
                        { parentName: "span", className: "msupsub" },
                        (0, m.kt)(
                          "span",
                          { parentName: "span", className: "vlist-t" },
                          (0, m.kt)(
                            "span",
                            { parentName: "span", className: "vlist-r" },
                            (0, m.kt)(
                              "span",
                              {
                                parentName: "span",
                                className: "vlist",
                                style: { height: "0.8991079999999999em" },
                              },
                              (0, m.kt)(
                                "span",
                                {
                                  parentName: "span",
                                  style: {
                                    top: "-3.113em",
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
                                    "d"
                                  )
                                )
                              )
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
                      style: { height: "1.149108em", verticalAlign: "-0.25em" },
                    }),
                    (0, m.kt)(
                      "span",
                      { parentName: "span", className: "mopen" },
                      "("
                    ),
                    (0, m.kt)(
                      "span",
                      { parentName: "span", className: "mord" },
                      (0, m.kt)(
                        "span",
                        { parentName: "span", className: "mord mathnormal" },
                        "m"
                      ),
                      (0, m.kt)(
                        "span",
                        { parentName: "span", className: "msupsub" },
                        (0, m.kt)(
                          "span",
                          { parentName: "span", className: "vlist-t" },
                          (0, m.kt)(
                            "span",
                            { parentName: "span", className: "vlist-r" },
                            (0, m.kt)(
                              "span",
                              {
                                parentName: "span",
                                className: "vlist",
                                style: { height: "0.8991079999999999em" },
                              },
                              (0, m.kt)(
                                "span",
                                {
                                  parentName: "span",
                                  style: {
                                    top: "-3.113em",
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
                                    "d"
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    ),
                    (0, m.kt)(
                      "span",
                      { parentName: "span", className: "mclose" },
                      (0, m.kt)(
                        "span",
                        { parentName: "span", className: "mclose" },
                        ")"
                      ),
                      (0, m.kt)(
                        "span",
                        { parentName: "span", className: "msupsub" },
                        (0, m.kt)(
                          "span",
                          { parentName: "span", className: "vlist-t" },
                          (0, m.kt)(
                            "span",
                            { parentName: "span", className: "vlist-r" },
                            (0, m.kt)(
                              "span",
                              {
                                parentName: "span",
                                className: "vlist",
                                style: { height: "0.7143919999999999em" },
                              },
                              (0, m.kt)(
                                "span",
                                {
                                  parentName: "span",
                                  style: {
                                    top: "-3.113em",
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
                                    "e"
                                  )
                                )
                              )
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
                      style: { height: "0.69444em", verticalAlign: "0em" },
                    }),
                    (0, m.kt)(
                      "span",
                      { parentName: "span", className: "mord mathnormal" },
                      "m"
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
            "for some specific large integers ",
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
                        (0, m.kt)("mi", { parentName: "mrow" }, "e")
                      ),
                      (0, m.kt)(
                        "annotation",
                        {
                          parentName: "semantics",
                          encoding: "application/x-tex",
                        },
                        "e"
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
                      { parentName: "span", className: "mord mathnormal" },
                      "e"
                    )
                  )
                )
              )
            ),
            ", ",
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
                        (0, m.kt)("mi", { parentName: "mrow" }, "d")
                      ),
                      (0, m.kt)(
                        "annotation",
                        {
                          parentName: "semantics",
                          encoding: "application/x-tex",
                        },
                        "d"
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
                      style: { height: "0.69444em", verticalAlign: "0em" },
                    }),
                    (0, m.kt)(
                      "span",
                      { parentName: "span", className: "mord mathnormal" },
                      "d"
                    )
                  )
                )
              )
            ),
            " and ",
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
                        (0, m.kt)("mi", { parentName: "mrow" }, "n")
                      ),
                      (0, m.kt)(
                        "annotation",
                        {
                          parentName: "semantics",
                          encoding: "application/x-tex",
                        },
                        "n"
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
                      { parentName: "span", className: "mord mathnormal" },
                      "n"
                    )
                  )
                )
              )
            ),
            ". Even though knowing ",
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
                        (0, m.kt)("mi", { parentName: "mrow" }, "e")
                      ),
                      (0, m.kt)(
                        "annotation",
                        {
                          parentName: "semantics",
                          encoding: "application/x-tex",
                        },
                        "e"
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
                      { parentName: "span", className: "mord mathnormal" },
                      "e"
                    )
                  )
                )
              )
            ),
            " it is\ndifficult to find ",
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
                        (0, m.kt)("mi", { parentName: "mrow" }, "d")
                      ),
                      (0, m.kt)(
                        "annotation",
                        {
                          parentName: "semantics",
                          encoding: "application/x-tex",
                        },
                        "d"
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
                      style: { height: "0.69444em", verticalAlign: "0em" },
                    }),
                    (0, m.kt)(
                      "span",
                      { parentName: "span", className: "mord mathnormal" },
                      "d"
                    )
                  )
                )
              )
            ),
            ". The public key is ",
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
                          "mo",
                          { parentName: "mrow", stretchy: "false" },
                          "("
                        ),
                        (0, m.kt)("mi", { parentName: "mrow" }, "e"),
                        (0, m.kt)(
                          "mo",
                          { parentName: "mrow", separator: "true" },
                          ","
                        ),
                        (0, m.kt)("mi", { parentName: "mrow" }, "n"),
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
                        "(e, n)"
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
                      style: { height: "1em", verticalAlign: "-0.25em" },
                    }),
                    (0, m.kt)(
                      "span",
                      { parentName: "span", className: "mopen" },
                      "("
                    ),
                    (0, m.kt)(
                      "span",
                      { parentName: "span", className: "mord mathnormal" },
                      "e"
                    ),
                    (0, m.kt)(
                      "span",
                      { parentName: "span", className: "mpunct" },
                      ","
                    ),
                    (0, m.kt)("span", {
                      parentName: "span",
                      className: "mspace",
                      style: { marginRight: "0.16666666666666666em" },
                    }),
                    (0, m.kt)(
                      "span",
                      { parentName: "span", className: "mord mathnormal" },
                      "n"
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
            " while the private key is\n",
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
                          "mo",
                          { parentName: "mrow", stretchy: "false" },
                          "("
                        ),
                        (0, m.kt)("mi", { parentName: "mrow" }, "d"),
                        (0, m.kt)(
                          "mo",
                          { parentName: "mrow", separator: "true" },
                          ","
                        ),
                        (0, m.kt)("mi", { parentName: "mrow" }, "n"),
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
                        "(d, n)"
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
                      style: { height: "1em", verticalAlign: "-0.25em" },
                    }),
                    (0, m.kt)(
                      "span",
                      { parentName: "span", className: "mopen" },
                      "("
                    ),
                    (0, m.kt)(
                      "span",
                      { parentName: "span", className: "mord mathnormal" },
                      "d"
                    ),
                    (0, m.kt)(
                      "span",
                      { parentName: "span", className: "mpunct" },
                      ","
                    ),
                    (0, m.kt)("span", {
                      parentName: "span",
                      className: "mspace",
                      style: { marginRight: "0.16666666666666666em" },
                    }),
                    (0, m.kt)(
                      "span",
                      { parentName: "span", className: "mord mathnormal" },
                      "n"
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
          (0, m.kt)("h4", { id: "key-generation" }, "Key Generation"),
          (0, m.kt)(
            "ol",
            null,
            (0, m.kt)(
              "li",
              { parentName: "ol" },
              "Choose two distinct large prime numbers ",
              (0, m.kt)(
                "span",
                { parentName: "li", className: "math math-inline" },
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
                          (0, m.kt)("mi", { parentName: "mrow" }, "p")
                        ),
                        (0, m.kt)(
                          "annotation",
                          {
                            parentName: "semantics",
                            encoding: "application/x-tex",
                          },
                          "p"
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
                          height: "0.625em",
                          verticalAlign: "-0.19444em",
                        },
                      }),
                      (0, m.kt)(
                        "span",
                        { parentName: "span", className: "mord mathnormal" },
                        "p"
                      )
                    )
                  )
                )
              ),
              " and ",
              (0, m.kt)(
                "span",
                { parentName: "li", className: "math math-inline" },
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
                          (0, m.kt)("mi", { parentName: "mrow" }, "q")
                        ),
                        (0, m.kt)(
                          "annotation",
                          {
                            parentName: "semantics",
                            encoding: "application/x-tex",
                          },
                          "q"
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
                          height: "0.625em",
                          verticalAlign: "-0.19444em",
                        },
                      }),
                      (0, m.kt)(
                        "span",
                        {
                          parentName: "span",
                          className: "mord mathnormal",
                          style: { marginRight: "0.03588em" },
                        },
                        "q"
                      )
                    )
                  )
                )
              ),
              "."
            ),
            (0, m.kt)(
              "li",
              { parentName: "ol" },
              "Compute the modulus ",
              (0, m.kt)(
                "span",
                { parentName: "li", className: "math math-inline" },
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
                          (0, m.kt)("mi", { parentName: "mrow" }, "n"),
                          (0, m.kt)("mo", { parentName: "mrow" }, "="),
                          (0, m.kt)("mi", { parentName: "mrow" }, "p"),
                          (0, m.kt)("mi", { parentName: "mrow" }, "q")
                        ),
                        (0, m.kt)(
                          "annotation",
                          {
                            parentName: "semantics",
                            encoding: "application/x-tex",
                          },
                          "n = pq"
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
                        { parentName: "span", className: "mord mathnormal" },
                        "n"
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
                          height: "0.625em",
                          verticalAlign: "-0.19444em",
                        },
                      }),
                      (0, m.kt)(
                        "span",
                        { parentName: "span", className: "mord mathnormal" },
                        "p"
                      ),
                      (0, m.kt)(
                        "span",
                        {
                          parentName: "span",
                          className: "mord mathnormal",
                          style: { marginRight: "0.03588em" },
                        },
                        "q"
                      )
                    )
                  )
                )
              ),
              "."
            ),
            (0, m.kt)(
              "li",
              { parentName: "ol" },
              "Some step I do not understand yet."
            ),
            (0, m.kt)(
              "li",
              { parentName: "ol" },
              "Select value for ",
              (0, m.kt)(
                "span",
                { parentName: "li", className: "math math-inline" },
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
                          (0, m.kt)("mi", { parentName: "mrow" }, "e")
                        ),
                        (0, m.kt)(
                          "annotation",
                          {
                            parentName: "semantics",
                            encoding: "application/x-tex",
                          },
                          "e"
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
                        { parentName: "span", className: "mord mathnormal" },
                        "e"
                      )
                    )
                  )
                )
              ),
              ". It is often chosen to be around ",
              (0, m.kt)(
                "span",
                { parentName: "li", className: "math math-inline" },
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
                            "msup",
                            { parentName: "mrow" },
                            (0, m.kt)("mn", { parentName: "msup" }, "2"),
                            (0, m.kt)("mn", { parentName: "msup" }, "16")
                          ),
                          (0, m.kt)("mo", { parentName: "mrow" }, "+"),
                          (0, m.kt)("mn", { parentName: "mrow" }, "1")
                        ),
                        (0, m.kt)(
                          "annotation",
                          {
                            parentName: "semantics",
                            encoding: "application/x-tex",
                          },
                          "2^{16} + 1"
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
                          height: "0.897438em",
                          verticalAlign: "-0.08333em",
                        },
                      }),
                      (0, m.kt)(
                        "span",
                        { parentName: "span", className: "mord" },
                        (0, m.kt)(
                          "span",
                          { parentName: "span", className: "mord" },
                          "2"
                        ),
                        (0, m.kt)(
                          "span",
                          { parentName: "span", className: "msupsub" },
                          (0, m.kt)(
                            "span",
                            { parentName: "span", className: "vlist-t" },
                            (0, m.kt)(
                              "span",
                              { parentName: "span", className: "vlist-r" },
                              (0, m.kt)(
                                "span",
                                {
                                  parentName: "span",
                                  className: "vlist",
                                  style: { height: "0.8141079999999999em" },
                                },
                                (0, m.kt)(
                                  "span",
                                  {
                                    parentName: "span",
                                    style: {
                                      top: "-3.063em",
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
                                          className: "mord mtight",
                                        },
                                        "1"
                                      ),
                                      (0, m.kt)(
                                        "span",
                                        {
                                          parentName: "span",
                                          className: "mord mtight",
                                        },
                                        "6"
                                      )
                                    )
                                  )
                                )
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
                        style: { height: "0.64444em", verticalAlign: "0em" },
                      }),
                      (0, m.kt)(
                        "span",
                        { parentName: "span", className: "mord" },
                        "1"
                      )
                    )
                  )
                )
              ),
              ". Small\nvalues for ",
              (0, m.kt)(
                "span",
                { parentName: "li", className: "math math-inline" },
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
                          (0, m.kt)("mi", { parentName: "mrow" }, "e")
                        ),
                        (0, m.kt)(
                          "annotation",
                          {
                            parentName: "semantics",
                            encoding: "application/x-tex",
                          },
                          "e"
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
                        { parentName: "span", className: "mord mathnormal" },
                        "e"
                      )
                    )
                  )
                )
              ),
              " can be insecure."
            ),
            (0, m.kt)(
              "li",
              { parentName: "ol" },
              "Calculate ",
              (0, m.kt)(
                "span",
                { parentName: "li", className: "math math-inline" },
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
                          (0, m.kt)("mi", { parentName: "mrow" }, "d")
                        ),
                        (0, m.kt)(
                          "annotation",
                          {
                            parentName: "semantics",
                            encoding: "application/x-tex",
                          },
                          "d"
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
                        style: { height: "0.69444em", verticalAlign: "0em" },
                      }),
                      (0, m.kt)(
                        "span",
                        { parentName: "span", className: "mord mathnormal" },
                        "d"
                      )
                    )
                  )
                )
              ),
              " as the inverse of ",
              (0, m.kt)(
                "span",
                { parentName: "li", className: "math math-inline" },
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
                          (0, m.kt)("mi", { parentName: "mrow" }, "e")
                        ),
                        (0, m.kt)(
                          "annotation",
                          {
                            parentName: "semantics",
                            encoding: "application/x-tex",
                          },
                          "e"
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
                        { parentName: "span", className: "mord mathnormal" },
                        "e"
                      )
                    )
                  )
                )
              ),
              " somehow."
            )
          ),
          (0, m.kt)("h3", { id: "one-time-pad" }, "One Time Pad"),
          (0, m.kt)(
            "p",
            null,
            (0, m.kt)("strong", { parentName: "p" }, "One Time Pad"),
            " (",
            (0, m.kt)("strong", { parentName: "p" }, "OTP"),
            ") is an uncrackable symmetric key algorithm. The\nencryption key must be generated anew for each new message and should be at\nleast as large as the message."
          ),
          (0, m.kt)("h3", { id: "caesar-cipher" }, "Caesar Cipher"),
          (0, m.kt)(
            "p",
            null,
            "A ",
            (0, m.kt)("strong", { parentName: "p" }, "Caesar Cipher"),
            " is a substitution cipher where one shifts letters. One\nexample is ROT13 where one shifts 13 letters. ROT13 is its own inverse (due to\nthe English alphabet has 26 letters). Note that all ROT ciphers are their own\ninverse."
          )
        );
      }
      o.isMDXComponent = !0;
    },
  },
]);
