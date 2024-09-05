"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [1231],
  {
    4288: (e, t, a) => {
      a.r(t),
        a.d(t, {
          assets: () => m,
          contentTitle: () => c,
          default: () => h,
          frontMatter: () => p,
          metadata: () => l,
          toc: () => d,
        });
      var r = a(7462),
        n = a(3366),
        s = (a(7294), a(3905)),
        i = a(828),
        o = ["components"],
        p = {},
        c = "Layered architecture",
        l = {
          unversionedId: "programming/patterns/layered-architecture",
          id: "programming/patterns/layered-architecture",
          title: "Layered architecture",
          description:
            "Layered architecture is a design pattern to achieve separation of concerns.",
          source: "@site/docs/programming/patterns/layered-architecture.md",
          sourceDirName: "programming/patterns",
          slug: "/programming/patterns/layered-architecture",
          permalink: "/docs/programming/patterns/layered-architecture",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Factory",
            permalink: "/docs/programming/patterns/factory",
          },
          next: { title: "MVC", permalink: "/docs/programming/patterns/mvc" },
        },
        m = {},
        d = [],
        u = { toc: d };
      function h(e) {
        var t = e.components,
          a = (0, n.Z)(e, o);
        return (0, s.kt)(
          "wrapper",
          (0, r.Z)({}, u, a, { components: t, mdxType: "MDXLayout" }),
          (0, s.kt)(
            "h1",
            { id: "layered-architecture" },
            "Layered architecture"
          ),
          (0, s.kt)(
            "p",
            null,
            (0, s.kt)("strong", { parentName: "p" }, "Layered architecture"),
            " is a design pattern to achieve separation of concerns.\nThe code functionality is divided into several separate layers, such as domain,\napplication, client and infrastructure."
          ),
          (0, s.kt)("p", null, "The standard layers are the following"),
          (0, s.kt)(
            "ul",
            null,
            (0, s.kt)(
              "li",
              { parentName: "ul" },
              (0, s.kt)(
                "p",
                { parentName: "li" },
                (0, s.kt)("strong", { parentName: "p" }, "Application layer"),
                " exposes the business layer to the presentation layer. In\n",
                (0, s.kt)(
                  "a",
                  { parentName: "p", href: "/docs/programming/patterns/cqsr" },
                  "CQRS"
                ),
                ", this is where command and query handlers would be\nimplemented."
              )
            ),
            (0, s.kt)(
              "li",
              { parentName: "ul" },
              (0, s.kt)(
                "p",
                { parentName: "li" },
                (0, s.kt)("strong", { parentName: "p" }, "Business layer"),
                " contains the domain/business logic."
              )
            ),
            (0, s.kt)(
              "li",
              { parentName: "ul" },
              (0, s.kt)(
                "p",
                { parentName: "li" },
                (0, s.kt)("strong", { parentName: "p" }, "Data access layer"),
                ", or ",
                (0, s.kt)("strong", { parentName: "p" }, "persistence layer"),
                ", is responsible for\ncommunication with the database. It also handles communication with external\nservices."
              )
            ),
            (0, s.kt)(
              "li",
              { parentName: "ul" },
              (0, s.kt)(
                "p",
                { parentName: "li" },
                (0, s.kt)("strong", { parentName: "p" }, "Presentation layer"),
                " is the layer responsible for communicating with the end\nsystem. For a REST API, this would correspond to the HTTP controllers."
              ),
              (0, s.kt)(
                "p",
                { parentName: "li" },
                "The dependencies of the layer can be showed as:"
              ),
              (0, s.kt)(i.G, {
                parentName: "li",
                chart:
                  "flowchart TD\n  A[Presentation] --\x3eB\n  B[Application]--\x3eC\n  C[Business]--\x3eD[Data access]",
                mdxType: "Mermaid",
              })
            )
          )
        );
      }
      h.isMDXComponent = !0;
    },
  },
]);
