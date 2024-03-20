"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [1766],
  {
    3739: (a, t, e) => {
      e.r(t),
        e.d(t, {
          assets: () => l,
          contentTitle: () => p,
          default: () => u,
          frontMatter: () => o,
          metadata: () => m,
          toc: () => h,
        });
      var s = e(7462),
        n = e(3366),
        r = (e(7294), e(3905)),
        i = (e(828), ["components"]),
        o = {},
        p = "Hashing",
        m = {
          unversionedId: "security/cryptography/hashing",
          id: "security/cryptography/hashing",
          title: "Hashing",
          description:
            "A hash function is a function $f: A \\mapsto B$ which is one-to-one and",
          source: "@site/docs/security/cryptography/hashing.md",
          sourceDirName: "security/cryptography",
          slug: "/security/cryptography/hashing",
          permalink: "/docs/security/cryptography/hashing",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Encryption",
            permalink: "/docs/security/cryptography/encryption",
          },
          next: {
            title: "Random numbers",
            permalink: "/docs/security/cryptography/random_numbers",
          },
        },
        l = {},
        h = [
          {
            value: "Conditions for a good hash function",
            id: "conditions-for-a-good-hash-function",
            level: 2,
          },
          { value: "Algorithms", id: "algorithms", level: 2 },
          { value: "SHA", id: "sha", level: 3 },
          { value: "SHA1", id: "sha1", level: 4 },
          { value: "SHA512", id: "sha512", level: 4 },
          { value: "MD", id: "md", level: 3 },
          { value: "MD5", id: "md5", level: 4 },
          { value: "bcrypt", id: "bcrypt", level: 3 },
          { value: "scrypt", id: "scrypt", level: 3 },
          { value: "argon2", id: "argon2", level: 3 },
          { value: "NTLM", id: "ntlm", level: 3 },
          { value: "MurmurHash", id: "murmurhash", level: 3 },
        ],
        c = { toc: h };
      function u(a) {
        var t = a.components,
          e = (0, n.Z)(a, i);
        return (0, r.kt)(
          "wrapper",
          (0, s.Z)({}, c, e, { components: t, mdxType: "MDXLayout" }),
          (0, r.kt)("h1", { id: "hashing" }, "Hashing"),
          (0, r.kt)(
            "p",
            null,
            "A ",
            (0, r.kt)("strong", { parentName: "p" }, "hash function"),
            " is a function ",
            (0, r.kt)(
              "span",
              { parentName: "p", className: "math math-inline" },
              (0, r.kt)(
                "span",
                { parentName: "span", className: "katex" },
                (0, r.kt)(
                  "span",
                  { parentName: "span", className: "katex-mathml" },
                  (0, r.kt)(
                    "math",
                    {
                      parentName: "span",
                      xmlns: "http://www.w3.org/1998/Math/MathML",
                    },
                    (0, r.kt)(
                      "semantics",
                      { parentName: "math" },
                      (0, r.kt)(
                        "mrow",
                        { parentName: "semantics" },
                        (0, r.kt)("mi", { parentName: "mrow" }, "f"),
                        (0, r.kt)("mo", { parentName: "mrow" }, ":"),
                        (0, r.kt)("mi", { parentName: "mrow" }, "A"),
                        (0, r.kt)("mo", { parentName: "mrow" }, "\u21a6"),
                        (0, r.kt)("mi", { parentName: "mrow" }, "B")
                      ),
                      (0, r.kt)(
                        "annotation",
                        {
                          parentName: "semantics",
                          encoding: "application/x-tex",
                        },
                        "f: A \\mapsto B"
                      )
                    )
                  )
                ),
                (0, r.kt)(
                  "span",
                  {
                    parentName: "span",
                    className: "katex-html",
                    "aria-hidden": "true",
                  },
                  (0, r.kt)(
                    "span",
                    { parentName: "span", className: "base" },
                    (0, r.kt)("span", {
                      parentName: "span",
                      className: "strut",
                      style: {
                        height: "0.8888799999999999em",
                        verticalAlign: "-0.19444em",
                      },
                    }),
                    (0, r.kt)(
                      "span",
                      {
                        parentName: "span",
                        className: "mord mathnormal",
                        style: { marginRight: "0.10764em" },
                      },
                      "f"
                    ),
                    (0, r.kt)("span", {
                      parentName: "span",
                      className: "mspace",
                      style: { marginRight: "0.2777777777777778em" },
                    }),
                    (0, r.kt)(
                      "span",
                      { parentName: "span", className: "mrel" },
                      ":"
                    ),
                    (0, r.kt)("span", {
                      parentName: "span",
                      className: "mspace",
                      style: { marginRight: "0.2777777777777778em" },
                    })
                  ),
                  (0, r.kt)(
                    "span",
                    { parentName: "span", className: "base" },
                    (0, r.kt)("span", {
                      parentName: "span",
                      className: "strut",
                      style: { height: "0.69433em", verticalAlign: "-0.011em" },
                    }),
                    (0, r.kt)(
                      "span",
                      { parentName: "span", className: "mord mathnormal" },
                      "A"
                    ),
                    (0, r.kt)("span", {
                      parentName: "span",
                      className: "mspace",
                      style: { marginRight: "0.2777777777777778em" },
                    }),
                    (0, r.kt)(
                      "span",
                      { parentName: "span", className: "mrel" },
                      "\u21a6"
                    ),
                    (0, r.kt)("span", {
                      parentName: "span",
                      className: "mspace",
                      style: { marginRight: "0.2777777777777778em" },
                    })
                  ),
                  (0, r.kt)(
                    "span",
                    { parentName: "span", className: "base" },
                    (0, r.kt)("span", {
                      parentName: "span",
                      className: "strut",
                      style: { height: "0.68333em", verticalAlign: "0em" },
                    }),
                    (0, r.kt)(
                      "span",
                      {
                        parentName: "span",
                        className: "mord mathnormal",
                        style: { marginRight: "0.05017em" },
                      },
                      "B"
                    )
                  )
                )
              )
            ),
            " which is one-to-one and\ncreates a chaotic system. There are several types of hashing algorithms, each\nsuitable for different use-cases. For example, for checking a password hash one\nwould want a slow and cryptographically secure algorithm while a faster for\nchecksums."
          ),
          (0, r.kt)(
            "p",
            null,
            "One can increase work factor if computational hardware improves."
          ),
          (0, r.kt)(
            "h2",
            { id: "conditions-for-a-good-hash-function" },
            "Conditions for a good hash function"
          ),
          (0, r.kt)("p", null, "A good hash function should satisfy:"),
          (0, r.kt)(
            "ul",
            null,
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "Uniform output"),
              ". The output distribution should be approximately uniform,\nmeaning there is no region in the output space with a higher probability for\ncollisions than other regions. This can be done via a Chi-square test."
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "Avalanche test"),
              ". Changing a single bit in the output should create a large\nchange in output."
            )
          ),
          (0, r.kt)("h2", { id: "algorithms" }, "Algorithms"),
          (0, r.kt)("h3", { id: "sha" }, "SHA"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)(
              "strong",
              { parentName: "p" },
              "Secure Hashing Algorithm"
            ),
            " (",
            (0, r.kt)("strong", { parentName: "p" }, "SHA"),
            ") is a set of hashing algorithms."
          ),
          (0, r.kt)("h4", { id: "sha1" }, "SHA1"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("strong", { parentName: "p" }, "SHA1"),
            " is not considered secure."
          ),
          (0, r.kt)("h4", { id: "sha512" }, "SHA512"),
          (0, r.kt)(
            "p",
            null,
            "Also known as ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "sha512crypt"),
            ". Is default for mos Linux systems."
          ),
          (0, r.kt)("h3", { id: "md" }, "MD"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("strong", { parentName: "p" }, "Messsage Digest"),
            " (",
            (0, r.kt)("strong", { parentName: "p" }, "MD"),
            ") is a family of hashing algorithms."
          ),
          (0, r.kt)("h4", { id: "md5" }, "MD5"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("strong", { parentName: "p" }, "MD5"),
            " is not considered secure. It has a 128-bit hash (16 bytes). Can be used\nfor checksums."
          ),
          (0, r.kt)("h3", { id: "bcrypt" }, "bcrypt"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("strong", { parentName: "p" }, "bcrypt"),
            " is a password hashing algorithm. It is based on the bluefish cipher\nand incorporates a work factor. This makes it more difficult to brute-force\nusing e.g. parellelized attacks (which GPUs otherwise are efficient with). It\nalso incorporates salt by default."
          ),
          (0, r.kt)("h3", { id: "scrypt" }, "scrypt"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("strong", { parentName: "p" }, "scrypt"),
            " is a hashing algorithm."
          ),
          (0, r.kt)("h3", { id: "argon2" }, "argon2"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("strong", { parentName: "p" }, "argon2"),
            " is a hashing algorithm."
          ),
          (0, r.kt)("h3", { id: "ntlm" }, "NTLM"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)(
              "strong",
              { parentName: "p" },
              "New Technology LAN Manager"
            ),
            " (",
            (0, r.kt)("strong", { parentName: "p" }, "NTLM"),
            ") is a hash format commonly used for\nWindows authentication. NTLM is a variant of MD4 and might look identical to\nMD4/MD5."
          ),
          (0, r.kt)("h3", { id: "murmurhash" }, "MurmurHash"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("strong", { parentName: "p" }, "MurmurHash"),
            " is a non-cryptographically secure hash that can be used for hash\nlookups."
          )
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
