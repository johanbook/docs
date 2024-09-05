"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [1159],
  {
    3145: (e, t, a) => {
      a.r(t),
        a.d(t, {
          assets: () => u,
          contentTitle: () => c,
          default: () => m,
          frontMatter: () => n,
          metadata: () => l,
          toc: () => p,
        });
      var r = a(7462),
        s = a(3366),
        o = (a(7294), a(3905)),
        i = (a(828), ["components"]),
        n = {},
        c = "Brute force attacks",
        l = {
          unversionedId: "security/attacks/brute_force",
          id: "security/attacks/brute_force",
          title: "Brute force attacks",
          description:
            "Brute force attacks are attacks where a vast amount of options are tested in",
          source: "@site/docs/security/attacks/brute_force.md",
          sourceDirName: "security/attacks",
          slug: "/security/attacks/brute_force",
          permalink: "/docs/security/attacks/brute_force",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Scope creep",
            permalink: "/docs/project-management/scope-creep",
          },
          next: {
            title: "Drive-by attacks",
            permalink: "/docs/security/attacks/drive_by",
          },
        },
        u = {},
        p = [
          { value: "Examples with hydra", id: "examples-with-hydra", level: 2 },
          { value: "HTTP form data", id: "http-form-data", level: 3 },
          { value: "SSH", id: "ssh", level: 3 },
          { value: "Countermeasures", id: "countermeasures", level: 2 },
        ],
        d = { toc: p };
      function m(e) {
        var t = e.components,
          a = (0, s.Z)(e, i);
        return (0, o.kt)(
          "wrapper",
          (0, r.Z)({}, d, a, { components: t, mdxType: "MDXLayout" }),
          (0, o.kt)("h1", { id: "brute-force-attacks" }, "Brute force attacks"),
          (0, o.kt)(
            "p",
            null,
            (0, o.kt)("strong", { parentName: "p" }, "Brute force attacks"),
            " are attacks where a vast amount of options are tested in\norder to find credentials or similar. This is an attempt of breaching\nConfidentiality in the ",
            (0, o.kt)(
              "a",
              { parentName: "p", href: "/docs/security/threat_modelling#cia" },
              "CIA triad"
            ),
            "."
          ),
          (0, o.kt)("h2", { id: "examples-with-hydra" }, "Examples with hydra"),
          (0, o.kt)(
            "p",
            null,
            "One common tool for performing brute force attacks is ",
            (0, o.kt)("inlineCode", { parentName: "p" }, "hydra"),
            ". Here are some\nexamples of password brute force attacks can be accomplished."
          ),
          (0, o.kt)("h3", { id: "http-form-data" }, "HTTP form data"),
          (0, o.kt)(
            "pre",
            null,
            (0, o.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              'hydra -l <username> -P <list-list> <ip> http-post-form "/rest/user/login:email=^USER^&password=^PASSWORD^:F=Invalid"\n'
            )
          ),
          (0, o.kt)("h3", { id: "ssh" }, "SSH"),
          (0, o.kt)(
            "pre",
            null,
            (0, o.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "hydra -l <username> -P <password-list> ssh://<ip>\n"
            )
          ),
          (0, o.kt)("h2", { id: "countermeasures" }, "Countermeasures"),
          (0, o.kt)(
            "p",
            null,
            "The best approach for countering brute force attacks is to"
          ),
          (0, o.kt)(
            "ul",
            null,
            (0, o.kt)("li", { parentName: "ul" }, "rate limiting"),
            (0, o.kt)(
              "li",
              { parentName: "ul" },
              "exponential back off for failed attempts"
            ),
            (0, o.kt)(
              "li",
              { parentName: "ul" },
              "blacklisting after a given amounts of incorrect attempts. Should be a large\nnumber to not impact regular users."
            )
          )
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
