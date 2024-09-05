"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [4087],
  {
    3551: (e, n, s) => {
      s.r(n),
        s.d(n, {
          assets: () => l,
          contentTitle: () => c,
          default: () => p,
          frontMatter: () => a,
          metadata: () => h,
          toc: () => d,
        });
      var r = s(7462),
        t = s(3366),
        o = (s(7294), s(3905)),
        i = (s(828), ["components"]),
        a = {},
        c = "Asynchronicity",
        h = {
          unversionedId: "programming/asynchronicity",
          id: "programming/asynchronicity",
          title: "Asynchronicity",
          description:
            "A statement can be either executed synchronously or asynchronously. Synchronous",
          source: "@site/docs/programming/asynchronicity.md",
          sourceDirName: "programming",
          slug: "/programming/asynchronicity",
          permalink: "/docs/programming/asynchronicity",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Assembly",
            permalink: "/docs/programming/assembly",
          },
          next: { title: "Basics", permalink: "/docs/programming/basics" },
        },
        l = {},
        d = [
          { value: "Event loops", id: "event-loops", level: 2 },
          { value: "Threads", id: "threads", level: 2 },
          {
            value: "Threads vs processes",
            id: "threads-vs-processes",
            level: 3,
          },
        ],
        u = { toc: d };
      function p(e) {
        var n = e.components,
          s = (0, t.Z)(e, i);
        return (0, o.kt)(
          "wrapper",
          (0, r.Z)({}, u, s, { components: n, mdxType: "MDXLayout" }),
          (0, o.kt)("h1", { id: "asynchronicity" }, "Asynchronicity"),
          (0, o.kt)(
            "p",
            null,
            "A statement can be either executed synchronously or asynchronously. Synchronous\ncode is run serially while asynchronous code is run in parallel. Asynchronousity\ncan be achieved using e.g. event loops or threads."
          ),
          (0, o.kt)("h2", { id: "event-loops" }, "Event loops"),
          (0, o.kt)(
            "p",
            null,
            "An event loop is a queue of items waiting to be run. The items are then run one\nby one. Thus if one item takes a long time, the event loop will wait for it -\nblocking other items from being run. This is called blocking. This is contrast\nto threads where one thread cannot block another. Threads on the other hand is\nmore startup overhead."
          ),
          (0, o.kt)("h2", { id: "threads" }, "Threads"),
          (0, o.kt)(
            "p",
            null,
            "A thread is typically run on its own by the operating system, different from the\nthread running the application code. Thus one can run threads on different CPU\ncores. However, this can give raise to e.g. race conditions."
          ),
          (0, o.kt)(
            "h3",
            { id: "threads-vs-processes" },
            "Threads vs processes"
          ),
          (0, o.kt)(
            "p",
            null,
            "There is a difference between a process and a thread. A process is run in a\nthread. Threads have shared memory. A process has its own virtual resources,\nprocess identifier etc."
          )
        );
      }
      p.isMDXComponent = !0;
    },
  },
]);
