"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [8002],
  {
    6300: (e, t, a) => {
      a.r(t),
        a.d(t, {
          assets: () => u,
          contentTitle: () => o,
          default: () => d,
          frontMatter: () => c,
          metadata: () => l,
          toc: () => m,
        });
      var r = a(7462),
        i = a(3366),
        s = (a(7294), a(3905)),
        n = (a(828), ["components"]),
        c = {},
        o = "Microservices architecture",
        l = {
          unversionedId: "architecture/micro_services",
          id: "architecture/micro_services",
          title: "Microservices architecture",
          description:
            "A microservices architecture is a style of architecture for a software",
          source: "@site/docs/architecture/micro_services.md",
          sourceDirName: "architecture",
          slug: "/architecture/micro_services",
          permalink: "/docs/architecture/micro_services",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "UML",
            permalink: "/docs/architecture/diagrams/uml",
          },
          next: {
            title: "Requirements analysis",
            permalink: "/docs/architecture/requirements_analysis",
          },
        },
        u = {},
        m = [
          {
            value: "Common types of micro-services",
            id: "common-types-of-micro-services",
            level: 2,
          },
        ],
        p = { toc: m };
      function d(e) {
        var t = e.components,
          a = (0, i.Z)(e, n);
        return (0, s.kt)(
          "wrapper",
          (0, r.Z)({}, p, a, { components: t, mdxType: "MDXLayout" }),
          (0, s.kt)(
            "h1",
            { id: "microservices-architecture" },
            "Microservices architecture"
          ),
          (0, s.kt)(
            "p",
            null,
            "A ",
            (0, s.kt)(
              "strong",
              { parentName: "p" },
              "microservices architecture"
            ),
            " is a style of architecture for a software\nsystem where an application is split into multiple independent services, each\nhaving its separate deployable. This is in contrast to the traditional monolith."
          ),
          (0, s.kt)(
            "p",
            null,
            "A microservice architecture offers several advantages:"
          ),
          (0, s.kt)(
            "ul",
            null,
            (0, s.kt)(
              "li",
              { parentName: "ul" },
              "Services can be developed independently. This also means services can use the\nprogramming language that suits their task best instead of being confined to\none overarching language."
            ),
            (0, s.kt)(
              "li",
              { parentName: "ul" },
              "Individual services can be scaled as needed instead of needing to scale the\nwhole application."
            )
          ),
          (0, s.kt)("p", null, "However, it also introduces some drawbacks"),
          (0, s.kt)(
            "ul",
            null,
            (0, s.kt)(
              "li",
              { parentName: "ul" },
              "Higher complexity in setting up and maintaining infrastructure and devops."
            ),
            (0, s.kt)(
              "li",
              { parentName: "ul" },
              "Inter-service calls are more expensive than local procedure calls which are\nused in a monolith."
            )
          ),
          (0, s.kt)(
            "h2",
            { id: "common-types-of-micro-services" },
            "Common types of micro-services"
          ),
          (0, s.kt)(
            "p",
            null,
            "Some common types of microservices are the following:"
          ),
          (0, s.kt)(
            "ul",
            null,
            (0, s.kt)(
              "li",
              { parentName: "ul" },
              (0, s.kt)("strong", { parentName: "li" }, "Backend")
            ),
            (0, s.kt)(
              "li",
              { parentName: "ul" },
              (0, s.kt)("strong", { parentName: "li" }, "Cache")
            ),
            (0, s.kt)(
              "li",
              { parentName: "ul" },
              (0, s.kt)("strong", { parentName: "li" }, "Database"),
              " which adds a shared persistence layer. See\n",
              (0, s.kt)(
                "a",
                {
                  parentName: "li",
                  href: "/docs/databases/types_of_databases",
                },
                "types of databases"
              ),
              "."
            ),
            (0, s.kt)(
              "li",
              { parentName: "ul" },
              (0, s.kt)("strong", { parentName: "li" }, "Frontend"),
              " a UI application. It is often bundled with a file server."
            ),
            (0, s.kt)(
              "li",
              { parentName: "ul" },
              (0, s.kt)("strong", { parentName: "li" }, "Gateway"),
              " which handles e.g. system wide ingress and egress."
            ),
            (0, s.kt)(
              "li",
              { parentName: "ul" },
              (0, s.kt)("strong", { parentName: "li" }, "Search indexer"),
              " which indexes database entities to speed up e.g. text\nsearch queries."
            )
          )
        );
      }
      d.isMDXComponent = !0;
    },
  },
]);
