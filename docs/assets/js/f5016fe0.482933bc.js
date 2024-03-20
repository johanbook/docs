"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [4154],
  {
    4466: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => h,
          contentTitle: () => l,
          default: () => p,
          frontMatter: () => o,
          metadata: () => d,
          toc: () => c,
        });
      var a = r(7462),
        s = r(3366),
        n = (r(7294), r(3905)),
        i = (r(828), ["components"]),
        o = {},
        l = "Graphs",
        d = {
          unversionedId: "data_structures/graphs",
          id: "data_structures/graphs",
          title: "Graphs",
          description:
            "A graph consist of several nodes which are linked to each other by",
          source: "@site/docs/data_structures/graphs.md",
          sourceDirName: "data_structures",
          slug: "/data_structures/graphs",
          permalink: "/docs/data_structures/graphs",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Types of software",
            permalink: "/docs/architecture/types",
          },
          next: {
            title: "Data structures",
            permalink: "/docs/data_structures/overview",
          },
        },
        h = {},
        c = [
          { value: "Types", id: "types", level: 2 },
          { value: "Binary search tree", id: "binary-search-tree", level: 2 },
          { value: "Tree traversal", id: "tree-traversal", level: 3 },
        ],
        u = { toc: c };
      function p(e) {
        var t = e.components,
          r = (0, s.Z)(e, i);
        return (0, n.kt)(
          "wrapper",
          (0, a.Z)({}, u, r, { components: t, mdxType: "MDXLayout" }),
          (0, n.kt)("h1", { id: "graphs" }, "Graphs"),
          (0, n.kt)(
            "p",
            null,
            "A ",
            (0, n.kt)("strong", { parentName: "p" }, "graph"),
            " consist of several nodes which are linked to each other by\nreferences, similar to a ",
            (0, n.kt)(
              "a",
              { parentName: "p", href: "./overview#linked-list" },
              "linked list"
            ),
            " except each node\nmight be connected to several other nodes."
          ),
          (0, n.kt)("h2", { id: "types" }, "Types"),
          (0, n.kt)(
            "ul",
            null,
            (0, n.kt)(
              "li",
              { parentName: "ul" },
              (0, n.kt)("strong", { parentName: "li" }, "Binary tree"),
              ". Tree where each node has two children or none."
            ),
            (0, n.kt)(
              "li",
              { parentName: "ul" },
              (0, n.kt)("strong", { parentName: "li" }, "Quadtree"),
              ". Tree where each node has four children or none. Can be used to\nindex 2d spatial data."
            )
          ),
          (0, n.kt)("h2", { id: "binary-search-tree" }, "Binary search tree"),
          (0, n.kt)(
            "p",
            null,
            "A binary search tree is a graph where each node has a left and a right node.\nWhen data is feed down the tree a binary operation is done in each node to\ndetermine if it is fed left or right."
          ),
          (0, n.kt)("h3", { id: "tree-traversal" }, "Tree traversal"),
          (0, n.kt)(
            "p",
            null,
            "When needs to be able effectively traverse the tree. This is often done\nrecursively but will then give rise to a call stack that increases the space\ncomplexity of the algorithm."
          ),
          (0, n.kt)("p", null, "Some approaches"),
          (0, n.kt)(
            "ul",
            null,
            (0, n.kt)(
              "li",
              { parentName: "ul" },
              (0, n.kt)("strong", { parentName: "li" }, "Inorder traversal"),
              ". First visit left subtree, then root node and finally\nright subtree."
            ),
            (0, n.kt)(
              "li",
              { parentName: "ul" },
              (0, n.kt)("strong", { parentName: "li" }, "Preorder traversal"),
              ". First visit root node then left subtree and finally\nright subtree."
            ),
            (0, n.kt)(
              "li",
              { parentName: "ul" },
              (0, n.kt)("strong", { parentName: "li" }, "Postorder traversal"),
              ". First visit left subtree, then right subtree and\nfinally root node."
            )
          )
        );
      }
      p.isMDXComponent = !0;
    },
  },
]);
