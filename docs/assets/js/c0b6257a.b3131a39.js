"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [5458],
  {
    2906: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => c,
          contentTitle: () => l,
          default: () => m,
          frontMatter: () => o,
          metadata: () => u,
          toc: () => d,
        });
      var a = n(7462),
        s = n(3366),
        i = (n(7294), n(3905)),
        r = (n(828), ["components"]),
        o = {},
        l = "SQL Injection",
        u = {
          unversionedId: "security/vulnerabilities/sqli",
          id: "security/vulnerabilities/sqli",
          title: "SQL Injection",
          description:
            "SQL Injection (SQLI) is a command injection attack where one injects",
          source: "@site/docs/security/vulnerabilities/sqli.md",
          sourceDirName: "security/vulnerabilities",
          slug: "/security/vulnerabilities/sqli",
          permalink: "/docs/security/vulnerabilities/sqli",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "RFI",
            permalink: "/docs/security/vulnerabilities/rfi",
          },
          next: {
            title: "XSS",
            permalink: "/docs/security/vulnerabilities/xss",
          },
        },
        c = {},
        d = [
          { value: "Examples", id: "examples", level: 2 },
          {
            value: "Injecting batched statements",
            id: "injecting-batched-statements",
            level: 3,
          },
          {
            value: "Bypassing login forms",
            id: "bypassing-login-forms",
            level: 3,
          },
          { value: "Enumeration", id: "enumeration", level: 2 },
          { value: "Countermeasures", id: "countermeasures", level: 2 },
          {
            value: "Second Order Injection",
            id: "second-order-injection",
            level: 2,
          },
        ],
        p = { toc: d };
      function m(e) {
        var t = e.components,
          n = (0, s.Z)(e, r);
        return (0, i.kt)(
          "wrapper",
          (0, a.Z)({}, p, n, { components: t, mdxType: "MDXLayout" }),
          (0, i.kt)("h1", { id: "sql-injection" }, "SQL Injection"),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)("strong", { parentName: "p" }, "SQL Injection"),
            " (",
            (0, i.kt)("strong", { parentName: "p" }, "SQLI"),
            ") is a command injection attack where one injects\nunwanted ",
            (0, i.kt)(
              "a",
              {
                parentName: "p",
                href: "/docs/databases/relational_databases/sql",
              },
              "SQL"
            ),
            " queries into a\ndatabase where they are executed. This attack vector can arise when user input\nis not properly sanitized."
          ),
          (0, i.kt)("h2", { id: "examples" }, "Examples"),
          (0, i.kt)(
            "p",
            null,
            "Assume we have a website with a field where users can search for products. The\nbackend will use the user input to build a SQL query like so:"
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-py" },
              'sqlQuery = """\n  SELECT name, description FROM products\n  WHERE name=\'{search_query}\';\n""".format(search_query=user_input)\n'
            )
          ),
          (0, i.kt)(
            "p",
            null,
            "However, if a malicious users would enters ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "x' OR true;--"),
            " in the search field,\nthe SQL query turns into"
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-sql" },
              "SELECT name, description FROM products\nWHERE name='x' OR true;--';\n"
            )
          ),
          (0, i.kt)(
            "p",
            null,
            "Although the fact that the user can query the system for all its products might\nseem harmless, the fact that a user can craft their own SQL queries is dangerous\nas it might allow them to query other sensitive information and even modify the\ndatabase."
          ),
          (0, i.kt)(
            "h3",
            { id: "injecting-batched-statements" },
            "Injecting batched statements"
          ),
          (0, i.kt)(
            "p",
            null,
            "Since SQL supports batched statements that can be exploited. In the previous\nexample, if a user injected ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "x'; DROP TABLE *;--"),
            ", the query would have become"
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-sql" },
              "SELECT name, description FROM products\nWHERE name='x'; DROP TABLE *;--'\n"
            )
          ),
          (0, i.kt)(
            "h3",
            { id: "bypassing-login-forms" },
            "Bypassing login forms"
          ),
          (0, i.kt)(
            "p",
            null,
            "SQLI attacks can be used on login forms. Typically when logging in, a SQL query\nof the form below is constructed."
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-sql" },
              'sqlQuery = """\n  SELECT * FROM users\n  WHERE username=\'{username}\'\n  AND password=\'{password}\';\n""".format(username=username, password=password)\n'
            )
          ),
          (0, i.kt)(
            "p",
            null,
            "Assume a user enters ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "' OR ''='"),
            " for both the username and password. Then the\nquery executed query would become"
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-sql" },
              "SELECT * FROM users\nWHERE username='' OR ''=''\nAND password='' OR ''='';\n"
            )
          ),
          (0, i.kt)(
            "p",
            null,
            "which would match all user records. Depending on the implementation of the\napplication, it could log you in as the first matched user."
          ),
          (0, i.kt)("h2", { id: "enumeration" }, "Enumeration"),
          (0, i.kt)(
            "p",
            null,
            "There are several ways of detecting SQLI vulnerabilities, which also varies\ndepending on which underlying database the system is using."
          ),
          (0, i.kt)(
            "p",
            null,
            "One way to enumerate SQLI is by using a fuzzing tool like ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "sqlmap"),
            ". This tool\nwill fuzz all parameters on an ",
            (0, i.kt)(
              "a",
              { parentName: "p", href: "/docs/programming/data_formats/html" },
              "HTML"
            ),
            "\npage and in case of a vulnerability, it is sometimes capable of fully mapping\nthe database."
          ),
          (0, i.kt)("h2", { id: "countermeasures" }, "Countermeasures"),
          (0, i.kt)(
            "p",
            null,
            "Dynamically constructed SQL queries should ",
            (0, i.kt)("strong", { parentName: "p" }, "always"),
            " be sanitized. It is also\nrecommended to use an ",
            (0, i.kt)(
              "a",
              { parentName: "p", href: "/docs/databases/orm" },
              "ORM"
            ),
            " and following best practices\nfor that framework."
          ),
          (0, i.kt)(
            "h2",
            { id: "second-order-injection" },
            "Second Order Injection"
          ),
          (0, i.kt)(
            "p",
            null,
            "A second order injection is when e.g. a username with unescaped characters is\nstored and the SQL injection attack runs when e.g. the user changes password."
          )
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
