"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [1821],
  {
    2144: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => c,
          contentTitle: () => u,
          default: () => m,
          frontMatter: () => i,
          metadata: () => p,
          toc: () => l,
        });
      var n = r(7462),
        a = r(3366),
        s = (r(7294), r(3905)),
        o = (r(828), ["components"]),
        i = {},
        u = "Pub/Sub",
        p = {
          unversionedId: "programming/patterns/pubsub",
          id: "programming/patterns/pubsub",
          title: "Pub/Sub",
          description:
            "The Publish\u2013subscribe pattern (Pub/Sub) is a architectural microservice",
          source: "@site/docs/programming/patterns/pubsub.md",
          sourceDirName: "programming/patterns",
          slug: "/programming/patterns/pubsub",
          permalink: "/docs/programming/patterns/pubsub",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Prototype",
            permalink: "/docs/programming/patterns/prototype",
          },
          next: {
            title: "Singleton",
            permalink: "/docs/programming/patterns/singleton",
          },
        },
        c = {},
        l = [
          {
            value: "Dead letter exchange",
            id: "dead-letter-exchange",
            level: 2,
          },
        ],
        b = { toc: l };
      function m(e) {
        var t = e.components,
          r = (0, a.Z)(e, o);
        return (0, s.kt)(
          "wrapper",
          (0, n.Z)({}, b, r, { components: t, mdxType: "MDXLayout" }),
          (0, s.kt)("h1", { id: "pubsub" }, "Pub/Sub"),
          (0, s.kt)(
            "p",
            null,
            "The ",
            (0, s.kt)(
              "strong",
              { parentName: "p" },
              "Publish\u2013subscribe pattern"
            ),
            " (",
            (0, s.kt)("strong", { parentName: "p" }, "Pub/Sub"),
            ") is a architectural microservice\npattern where instead of having two components depend on each other one uses a\nmessage queue that the components that publish and subscribe to."
          ),
          (0, s.kt)(
            "h2",
            { id: "dead-letter-exchange" },
            "Dead letter exchange"
          ),
          (0, s.kt)(
            "p",
            null,
            "If a message outlives its TTL, queue is full etc, it will end up in the dead\nletter exchange."
          )
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
