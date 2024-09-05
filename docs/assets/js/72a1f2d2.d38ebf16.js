"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [6781],
  {
    348: (t, e, a) => {
      a.r(e),
        a.d(e, {
          assets: () => m,
          contentTitle: () => d,
          default: () => u,
          frontMatter: () => s,
          metadata: () => o,
          toc: () => p,
        });
      var n = a(7462),
        r = a(3366),
        l = (a(7294), a(3905)),
        i = (a(828), ["components"]),
        s = {},
        d = "Data structures",
        o = {
          unversionedId: "data_structures/overview",
          id: "data_structures/overview",
          title: "Data structures",
          description:
            "This document will outline some common data structures.",
          source: "@site/docs/data_structures/overview.md",
          sourceDirName: "data_structures",
          slug: "/data_structures/overview",
          permalink: "/docs/data_structures/overview",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Graphs",
            permalink: "/docs/data_structures/graphs",
          },
          next: { title: "ACID", permalink: "/docs/databases/acid" },
        },
        m = {},
        p = [
          { value: "Array list", id: "array-list", level: 2 },
          { value: "Linked list", id: "linked-list", level: 2 },
          { value: "Stack", id: "stack", level: 2 },
          { value: "Queue", id: "queue", level: 2 },
          { value: "Hash table", id: "hash-table", level: 2 },
        ],
        k = { toc: p };
      function u(t) {
        var e = t.components,
          a = (0, r.Z)(t, i);
        return (0, l.kt)(
          "wrapper",
          (0, n.Z)({}, k, a, { components: e, mdxType: "MDXLayout" }),
          (0, l.kt)("h1", { id: "data-structures" }, "Data structures"),
          (0, l.kt)(
            "p",
            null,
            "This document will outline some common data structures."
          ),
          (0, l.kt)("h2", { id: "array-list" }, "Array list"),
          (0, l.kt)(
            "p",
            null,
            "An array list is a data structure where one continuous sequence of memory is\nallocated. This allows for quickly retrieving data at a given index, but data\ninsertion and appending is slow. There are dynamic array lists that\nautomatically reallocates memory if the array list risks growing beyond its\ninitial bounds."
          ),
          (0, l.kt)(
            "p",
            null,
            (0, l.kt)("strong", { parentName: "p" }, "Usage"),
            ": Ordering matters and items are expected to be read more often then\nthey are changed."
          ),
          (0, l.kt)(
            "table",
            null,
            (0, l.kt)(
              "thead",
              { parentName: "table" },
              (0, l.kt)(
                "tr",
                { parentName: "thead" },
                (0, l.kt)(
                  "th",
                  { parentName: "tr", align: "left" },
                  "Operation"
                ),
                (0, l.kt)(
                  "th",
                  { parentName: "tr", align: "left" },
                  "Time complexity"
                ),
                (0, l.kt)("th", { parentName: "tr", align: "left" }, "Note")
              )
            ),
            (0, l.kt)(
              "tbody",
              { parentName: "table" },
              (0, l.kt)(
                "tr",
                { parentName: "tbody" },
                (0, l.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "Random access"
                ),
                (0, l.kt)("td", { parentName: "tr", align: "left" }, "O(1)"),
                (0, l.kt)("td", { parentName: "tr", align: "left" })
              ),
              (0, l.kt)(
                "tr",
                { parentName: "tbody" },
                (0, l.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "Appending item"
                ),
                (0, l.kt)("td", { parentName: "tr", align: "left" }, "O(1)"),
                (0, l.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "Typically O(1) but list might need to be reallocated"
                )
              ),
              (0, l.kt)(
                "tr",
                { parentName: "tbody" },
                (0, l.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "Deleting item"
                ),
                (0, l.kt)("td", { parentName: "tr", align: "left" }, "O(n)"),
                (0, l.kt)("td", { parentName: "tr", align: "left" })
              )
            )
          ),
          (0, l.kt)("h2", { id: "linked-list" }, "Linked list"),
          (0, l.kt)(
            "p",
            null,
            "A linked list consists of several nodes that have a reference to each other.\nThis makes it quick to delete and insert items, but retrieving by index is slow."
          ),
          (0, l.kt)(
            "p",
            null,
            "A linked list can be single linked (one can only iterate it one direction) or\ndouble linked (it is bidirectional)."
          ),
          (0, l.kt)(
            "p",
            null,
            (0, l.kt)("strong", { parentName: "p" }, "Usage"),
            ": Ordering matters and items are expected to be changed more often then\nthey are read."
          ),
          (0, l.kt)(
            "table",
            null,
            (0, l.kt)(
              "thead",
              { parentName: "table" },
              (0, l.kt)(
                "tr",
                { parentName: "thead" },
                (0, l.kt)(
                  "th",
                  { parentName: "tr", align: "left" },
                  "Operation"
                ),
                (0, l.kt)(
                  "th",
                  { parentName: "tr", align: "left" },
                  "Time complexity"
                ),
                (0, l.kt)("th", { parentName: "tr", align: "left" }, "Note")
              )
            ),
            (0, l.kt)(
              "tbody",
              { parentName: "table" },
              (0, l.kt)(
                "tr",
                { parentName: "tbody" },
                (0, l.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "Random access"
                ),
                (0, l.kt)("td", { parentName: "tr", align: "left" }, "O(n)"),
                (0, l.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "Might require iterating through all nodes"
                )
              ),
              (0, l.kt)(
                "tr",
                { parentName: "tbody" },
                (0, l.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "Appending item"
                ),
                (0, l.kt)("td", { parentName: "tr", align: "left" }, "O(1)"),
                (0, l.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "If one maintains reference to last item, otherwise O(n)"
                )
              ),
              (0, l.kt)(
                "tr",
                { parentName: "tbody" },
                (0, l.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "Deleting item"
                ),
                (0, l.kt)("td", { parentName: "tr", align: "left" }, "O(1)"),
                (0, l.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "Given a reference to the item, deletion is a constant operation"
                )
              )
            )
          ),
          (0, l.kt)("h2", { id: "stack" }, "Stack"),
          (0, l.kt)(
            "p",
            null,
            "A stack is a type of an ordered structure where one is intended to only access\nthe list item. This is called LIFO (Last In First Out). It can easily be\nimplemented using an array list but appending would then be O(n) in worst case.\nInstead one can use a singly linked list where appending is done to first\nposition in list."
          ),
          (0, l.kt)(
            "table",
            null,
            (0, l.kt)(
              "thead",
              { parentName: "table" },
              (0, l.kt)(
                "tr",
                { parentName: "thead" },
                (0, l.kt)(
                  "th",
                  { parentName: "tr", align: "left" },
                  "Operation"
                ),
                (0, l.kt)(
                  "th",
                  { parentName: "tr", align: "left" },
                  "Time complexity"
                ),
                (0, l.kt)("th", { parentName: "tr", align: "left" }, "Note")
              )
            ),
            (0, l.kt)(
              "tbody",
              { parentName: "table" },
              (0, l.kt)(
                "tr",
                { parentName: "tbody" },
                (0, l.kt)("td", { parentName: "tr", align: "left" }, "Popping"),
                (0, l.kt)("td", { parentName: "tr", align: "left" }, "O(1)"),
                (0, l.kt)("td", { parentName: "tr", align: "left" })
              ),
              (0, l.kt)(
                "tr",
                { parentName: "tbody" },
                (0, l.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "Appending"
                ),
                (0, l.kt)("td", { parentName: "tr", align: "left" }, "O(1)"),
                (0, l.kt)("td", { parentName: "tr", align: "left" })
              )
            )
          ),
          (0, l.kt)("h2", { id: "queue" }, "Queue"),
          (0, l.kt)(
            "p",
            null,
            "A queue is similar to a stack but one instead accesses the first item making\nthem FIFO (First In First Out). For implementation, one should use the Dequeue\ndata structure, although one could also use a linked list which has constant\ncomplexity in both popping and appending.."
          ),
          (0, l.kt)(
            "table",
            null,
            (0, l.kt)(
              "thead",
              { parentName: "table" },
              (0, l.kt)(
                "tr",
                { parentName: "thead" },
                (0, l.kt)(
                  "th",
                  { parentName: "tr", align: "left" },
                  "Operation"
                ),
                (0, l.kt)(
                  "th",
                  { parentName: "tr", align: "left" },
                  "Time complexity"
                ),
                (0, l.kt)("th", { parentName: "tr", align: "left" }, "Note")
              )
            ),
            (0, l.kt)(
              "tbody",
              { parentName: "table" },
              (0, l.kt)(
                "tr",
                { parentName: "tbody" },
                (0, l.kt)("td", { parentName: "tr", align: "left" }, "Popping"),
                (0, l.kt)("td", { parentName: "tr", align: "left" }, "O(1)"),
                (0, l.kt)("td", { parentName: "tr", align: "left" })
              ),
              (0, l.kt)(
                "tr",
                { parentName: "tbody" },
                (0, l.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "Appending"
                ),
                (0, l.kt)("td", { parentName: "tr", align: "left" }, "O(1)"),
                (0, l.kt)("td", { parentName: "tr", align: "left" })
              )
            )
          ),
          (0, l.kt)("h2", { id: "hash-table" }, "Hash table"),
          (0, l.kt)(
            "p",
            null,
            "A hash table is an array list where indexes are hashed in a modulus. This allows\none to use any hashable object as a index (often referred to key in this\ncontext). If there are collisions at a given index, then one uses a linked list\nas value. Hash table have excellent time complexity assuming uniformity in the\nhash algorithm and a suitable sized preallocated memory."
          ),
          (0, l.kt)(
            "p",
            null,
            "In order words, a hash table is similar to a list but it does not have a concept\nof order. Hence it is not very suitable for stacks or queues."
          ),
          (0, l.kt)(
            "table",
            null,
            (0, l.kt)(
              "thead",
              { parentName: "table" },
              (0, l.kt)(
                "tr",
                { parentName: "thead" },
                (0, l.kt)(
                  "th",
                  { parentName: "tr", align: "left" },
                  "Operation"
                ),
                (0, l.kt)(
                  "th",
                  { parentName: "tr", align: "left" },
                  "Time complexity"
                ),
                (0, l.kt)("th", { parentName: "tr", align: "left" }, "Note")
              )
            ),
            (0, l.kt)(
              "tbody",
              { parentName: "table" },
              (0, l.kt)(
                "tr",
                { parentName: "tbody" },
                (0, l.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "Random access"
                ),
                (0, l.kt)("td", { parentName: "tr", align: "left" }, "O(1)"),
                (0, l.kt)("td", { parentName: "tr", align: "left" })
              ),
              (0, l.kt)(
                "tr",
                { parentName: "tbody" },
                (0, l.kt)(
                  "td",
                  { parentName: "tr", align: "left" },
                  "Deleting item"
                ),
                (0, l.kt)("td", { parentName: "tr", align: "left" }, "O(1)"),
                (0, l.kt)("td", { parentName: "tr", align: "left" })
              )
            )
          )
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
