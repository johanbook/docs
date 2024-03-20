"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [3621],
  {
    9258: (e, t, o) => {
      o.r(t),
        o.d(t, {
          assets: () => p,
          contentTitle: () => l,
          default: () => m,
          frontMatter: () => i,
          metadata: () => c,
          toc: () => d,
        });
      var r = o(7462),
        n = o(3366),
        a = (o(7294), o(3905)),
        s = (o(828), ["components"]),
        i = {},
        l = "GDPR",
        c = {
          unversionedId: "laws/gdpr",
          id: "laws/gdpr",
          title: "GDPR",
          description:
            "General Data Protection Regulation (GDPR) is a European regulation on",
          source: "@site/docs/laws/gdpr.md",
          sourceDirName: "laws",
          slug: "/laws/gdpr",
          permalink: "/docs/laws/gdpr",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "ToS", permalink: "/docs/laws/agreements/tos" },
          next: {
            title: "Software license",
            permalink: "/docs/laws/licenses/",
          },
        },
        p = {},
        d = [
          {
            value: "PII and personal data",
            id: "pii-and-personal-data",
            level: 2,
          },
          {
            value: "Controllers and processors",
            id: "controllers-and-processors",
            level: 2,
          },
        ],
        u = { toc: d };
      function m(e) {
        var t = e.components,
          o = (0, n.Z)(e, s);
        return (0, a.kt)(
          "wrapper",
          (0, r.Z)({}, u, o, { components: t, mdxType: "MDXLayout" }),
          (0, a.kt)("h1", { id: "gdpr" }, "GDPR"),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)(
              "strong",
              { parentName: "p" },
              "General Data Protection Regulation"
            ),
            " (",
            (0, a.kt)("strong", { parentName: "p" }, "GDPR"),
            ") is a European regulation on\nhow personal data are stored and treated. It dictates among other things that\npersonal data of EU citizens might not be stored on servers outside of the EU\n(note to self: double check this)."
          ),
          (0, a.kt)(
            "h2",
            { id: "pii-and-personal-data" },
            "PII and personal data"
          ),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)(
              "strong",
              { parentName: "p" },
              "Personal identifiable information"
            ),
            " (",
            (0, a.kt)("strong", { parentName: "p" }, "PII"),
            ") is data that can be used to\nidentify a person. This includes name, email, gender, ethnicity, biometrics etc."
          ),
          (0, a.kt)(
            "p",
            null,
            "PII may not be collected without consent. If e.g. storing any persistent cookies\n(such as for tracking), consent is required. One can use a Consent Management\nPlatform (CMP) for handling that."
          ),
          (0, a.kt)(
            "h2",
            { id: "controllers-and-processors" },
            "Controllers and processors"
          ),
          (0, a.kt)(
            "p",
            null,
            "In GDPR there is a concept of controllers and processors. A controller controls\na customer's data and a processor processes it on the controller's behalf. For\nexample, if having a form submission service called FormsXY that stores the\nforms in GCP BigQuery, then FormsXY is a controller and GCP BigQuery is a\nprocessor."
          ),
          (0, a.kt)(
            "p",
            null,
            "There are stricter regulations on a controller than a processor. For example,"
          ),
          (0, a.kt)(
            "ul",
            null,
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              "Responsibility for GDPR compliance of any processor they are using."
            ),
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              "Consider risks to freedom of rights of their customers."
            ),
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              "Take appropriate measures to minimize risks."
            )
          )
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
