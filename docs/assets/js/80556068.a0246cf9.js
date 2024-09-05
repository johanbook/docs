"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [7477],
  {
    5621: (e, a, t) => {
      t.r(a),
        t.d(a, {
          assets: () => l,
          contentTitle: () => c,
          default: () => p,
          frontMatter: () => d,
          metadata: () => m,
          toc: () => u,
        });
      var r = t(7462),
        i = t(3366),
        s = (t(7294), t(3905)),
        n = t(828),
        o = ["components"],
        d = {},
        c = "UML",
        m = {
          unversionedId: "architecture/diagrams/uml",
          id: "architecture/diagrams/uml",
          title: "UML",
          description:
            "Unified Modeling Language (UML) is a set of different diagrams for",
          source: "@site/docs/architecture/diagrams/uml.md",
          sourceDirName: "architecture/diagrams",
          slug: "/architecture/diagrams/uml",
          permalink: "/docs/architecture/diagrams/uml",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "C4",
            permalink: "/docs/architecture/diagrams/c4",
          },
          next: {
            title: "Microservices architecture",
            permalink: "/docs/architecture/micro_services",
          },
        },
        l = {},
        u = [
          { value: "Flow diagram", id: "flow-diagram", level: 2 },
          { value: "Sequence diagram", id: "sequence-diagram", level: 2 },
          { value: "State diagram", id: "state-diagram", level: 2 },
        ],
        g = { toc: u };
      function p(e) {
        var a = e.components,
          t = (0, i.Z)(e, o);
        return (0, s.kt)(
          "wrapper",
          (0, r.Z)({}, g, t, { components: a, mdxType: "MDXLayout" }),
          (0, s.kt)("h1", { id: "uml" }, "UML"),
          (0, s.kt)(
            "p",
            null,
            (0, s.kt)(
              "strong",
              { parentName: "p" },
              "Unified Modeling Language"
            ),
            " (",
            (0, s.kt)("strong", { parentName: "p" }, "UML"),
            ") is a set of different diagrams for\nvisualizing software systems. The diagrams are divided into structural and\nbehavioral. Although UML diagrams are handy for visualizing various aspects of a\nsoftware system, there is no standard for how a system should be visualized\n(which is in contrast to ",
            (0, s.kt)(
              "a",
              { parentName: "p", href: "/docs/architecture/diagrams/c4" },
              "C4"
            ),
            ")."
          ),
          (0, s.kt)("h2", { id: "flow-diagram" }, "Flow diagram"),
          (0, s.kt)(
            "p",
            null,
            "A ",
            (0, s.kt)("strong", { parentName: "p" }, "flow diagram"),
            " describes a flow."
          ),
          (0, s.kt)(n.G, {
            chart:
              "graph TD\n    A[Christmas] --\x3e|Get money| B(Go shopping)\n    B --\x3e C{Let me think}\n    C --\x3e|One| D[Laptop]\n    C --\x3e|Two| E[iPhone]\n    C --\x3e|Three| F[fa:fa-car Car]",
            mdxType: "Mermaid",
          }),
          (0, s.kt)("h2", { id: "sequence-diagram" }, "Sequence diagram"),
          (0, s.kt)(
            "p",
            null,
            "A ",
            (0, s.kt)("strong", { parentName: "p" }, "sequence diagram"),
            " describes the flow of a sequence, for example a login\nflow."
          ),
          (0, s.kt)(n.G, {
            chart:
              "sequenceDiagram\n    Backup->>+Service: Stop service\n    Backup->>+Service: Create backup\n    Backup->>+S3: Upload backup\n    Backup->>+Service: Restart service",
            mdxType: "Mermaid",
          }),
          (0, s.kt)("h2", { id: "state-diagram" }, "State diagram"),
          (0, s.kt)(
            "p",
            null,
            "A ",
            (0, s.kt)("strong", { parentName: "p" }, "state diagram"),
            " visualizes the possible states of an entity."
          ),
          (0, s.kt)(n.G, {
            chart:
              "stateDiagram-v2\n    [*] --\x3e Still\n    Still --\x3e [*]\n    Still --\x3e Moving\n    Moving --\x3e Still\n    Moving --\x3e Crash\n    Crash --\x3e [*]",
            mdxType: "Mermaid",
          })
        );
      }
      p.isMDXComponent = !0;
    },
  },
]);
