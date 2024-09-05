"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [7998],
  {
    4855: (e, i, n) => {
      n.r(i),
        n.d(i, {
          assets: () => g,
          contentTitle: () => s,
          default: () => d,
          frontMatter: () => l,
          metadata: () => u,
          toc: () => c,
        });
      var t = n(7462),
        a = n(3366),
        r = (n(7294), n(3905)),
        o = (n(828), ["components"]),
        l = {},
        s = "Social engineering",
        u = {
          unversionedId: "security/social_engineering",
          id: "security/social_engineering",
          title: "Social engineering",
          description:
            "Social engineering is where one manipulates a victim to willingly hand over",
          source: "@site/docs/security/social_engineering.md",
          sourceDirName: "security",
          slug: "/security/social_engineering",
          permalink: "/docs/security/social_engineering",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Uploads",
            permalink: "/docs/security/pentesting/uploads",
          },
          next: {
            title: "Steganography",
            permalink: "/docs/security/steganography",
          },
        },
        g = {},
        c = [
          { value: "OSINT", id: "osint", level: 2 },
          { value: "OPINT", id: "opint", level: 2 },
          { value: "Techniques", id: "techniques", level: 2 },
          { value: "Elicitation", id: "elicitation", level: 3 },
          { value: "Pretexting", id: "pretexting", level: 3 },
          { value: "Tailgating", id: "tailgating", level: 3 },
          { value: "Mind Tricks", id: "mind-tricks", level: 3 },
        ],
        p = { toc: c };
      function d(e) {
        var i = e.components,
          n = (0, a.Z)(e, o);
        return (0, r.kt)(
          "wrapper",
          (0, t.Z)({}, p, n, { components: i, mdxType: "MDXLayout" }),
          (0, r.kt)("h1", { id: "social-engineering" }, "Social engineering"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("strong", { parentName: "p" }, "Social engineering"),
            " is where one manipulates a victim to willingly hand over\nsome desired information. Purpose is often to steal information, hack systems or\ndesinform."
          ),
          (0, r.kt)("h2", { id: "osint" }, "OSINT"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)(
              "strong",
              { parentName: "p" },
              "Open-source Intelligence"
            ),
            " (",
            (0, r.kt)("strong", { parentName: "p" }, "OSINT"),
            ") is the gathering of information using\npublic sources. Examples of OSINT are"
          ),
          (0, r.kt)(
            "ul",
            null,
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              "looking up domain owner information for web sites."
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              "locating where images are taken using GeoTags"
            )
          ),
          (0, r.kt)("h2", { id: "opint" }, "OPINT"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("strong", { parentName: "p" }, "OPINT"),
            " is the physical version of OSINT. Some examples are"
          ),
          (0, r.kt)(
            "ul",
            null,
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              "Dumpster diving or trash cans"
            ),
            (0, r.kt)("li", { parentName: "ul" }, "Read papers on tables")
          ),
          (0, r.kt)("h2", { id: "techniques" }, "Techniques"),
          (0, r.kt)(
            "p",
            null,
            "There are various techniques used by social engineers."
          ),
          (0, r.kt)("h3", { id: "elicitation" }, "Elicitation"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("strong", { parentName: "p" }, "Elicitation"),
            " is extraction of information during what seems to be a normal\nconversation. This can be done using e.g. flattery."
          ),
          (0, r.kt)("h3", { id: "pretexting" }, "Pretexting"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("strong", { parentName: "p" }, "Pretexting"),
            " is where one builds a background history in order to build\nrapport and trust."
          ),
          (0, r.kt)("h3", { id: "tailgating" }, "Tailgating"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("strong", { parentName: "p" }, "Tailgating"),
            " is when one gets into a restricted area by following someone who\nhas. For example, by pretending to be a delivery driver and asking an employee\nto hold the door."
          ),
          (0, r.kt)("h3", { id: "mind-tricks" }, "Mind Tricks"),
          (0, r.kt)(
            "p",
            null,
            "There are various mind tricks used in social engineering."
          ),
          (0, r.kt)(
            "ul",
            null,
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              "Neurolinguistic programming."
            ),
            (0, r.kt)("li", { parentName: "ul" }, "Human buffer overflow.")
          )
        );
      }
      d.isMDXComponent = !0;
    },
  },
]);
