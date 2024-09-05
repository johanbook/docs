"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [8931],
  {
    7214: (e, t, a) => {
      a.r(t),
        a.d(t, {
          assets: () => p,
          contentTitle: () => d,
          default: () => h,
          frontMatter: () => r,
          metadata: () => l,
          toc: () => c,
        });
      var n = a(7462),
        s = a(3366),
        o = (a(7294), a(3905)),
        i = (a(828), ["components"]),
        r = {},
        d = "Deployment",
        l = {
          unversionedId: "databases/deployment",
          id: "databases/deployment",
          title: "Deployment",
          description:
            "Database deployment needs some different considerations than",
          source: "@site/docs/databases/deployment.md",
          sourceDirName: "databases",
          slug: "/databases/deployment",
          permalink: "/docs/databases/deployment",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "BigQuery",
            permalink: "/docs/databases/bigquery",
          },
          next: {
            title: "Execution plan",
            permalink: "/docs/databases/execution-plan",
          },
        },
        p = {},
        c = [{ value: "Sharding", id: "sharding", level: 2 }],
        m = { toc: c };
      function h(e) {
        var t = e.components,
          a = (0, s.Z)(e, i);
        return (0, o.kt)(
          "wrapper",
          (0, n.Z)({}, m, a, { components: t, mdxType: "MDXLayout" }),
          (0, o.kt)("h1", { id: "deployment" }, "Deployment"),
          (0, o.kt)(
            "p",
            null,
            (0, o.kt)("strong", { parentName: "p" }, "Database deployment"),
            " needs some different considerations than\n",
            (0, o.kt)(
              "a",
              { parentName: "p", href: "/docs/devops/deployment/" },
              "deployment"
            ),
            " of other applications as databases\nneed access to read- and writable memory, which can be challenging when scaling\nhorizontally."
          ),
          (0, o.kt)("h2", { id: "sharding" }, "Sharding"),
          (0, o.kt)(
            "p",
            null,
            (0, o.kt)("strong", { parentName: "p" }, "Sharding"),
            " is a database architecture where data is divided into multiple\ndifferent shards (table are split using horizontal partitions) in order to\nsupport horizontal scaling. Each shard is typically run its own machine, meaning\nif one machine goes down, only parts of the data are exposed."
          ),
          (0, o.kt)(
            "p",
            null,
            "A sharded database architecture can be implemented by routing users to different\nshards based on some deterministic condition, such as first letter of their last\nname."
          ),
          (0, o.kt)(
            "p",
            null,
            "One risk of using sharded databases, apart from being more challenging to work\nwith, is that the shards may become unbalanced."
          ),
          (0, o.kt)(
            "p",
            null,
            "It is difficult to go from a shareded architecture to unsharded one."
          )
        );
      }
      h.isMDXComponent = !0;
    },
  },
]);
