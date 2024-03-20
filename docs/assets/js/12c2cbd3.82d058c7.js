"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [4765],
  {
    1325: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => d,
          contentTitle: () => l,
          default: () => p,
          frontMatter: () => i,
          metadata: () => c,
          toc: () => u,
        });
      var a = t(7462),
        o = t(3366),
        s = (t(7294), t(3905)),
        r = (t(828), ["components"]),
        i = {},
        l = "Load balancers",
        c = {
          unversionedId: "network/load_balancers",
          id: "network/load_balancers",
          title: "Load balancers",
          description:
            "A load balancer is a network component that routes incoming load to",
          source: "@site/docs/network/load_balancers.md",
          sourceDirName: "network",
          slug: "/network/load_balancers",
          permalink: "/docs/network/load_balancers",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "IPSec", permalink: "/docs/network/ipsec" },
          next: { title: "MAC address", permalink: "/docs/network/mac" },
        },
        d = {},
        u = [
          { value: "Selection strategy", id: "selection-strategy", level: 2 },
        ],
        h = { toc: u };
      function p(e) {
        var n = e.components,
          t = (0, o.Z)(e, r);
        return (0, s.kt)(
          "wrapper",
          (0, a.Z)({}, h, t, { components: n, mdxType: "MDXLayout" }),
          (0, s.kt)("h1", { id: "load-balancers" }, "Load balancers"),
          (0, s.kt)(
            "p",
            null,
            "A ",
            (0, s.kt)("strong", { parentName: "p" }, "load balancer"),
            " is a network component that routes incoming load to\ndifferent targets. This can be done on both hardware and software level."
          ),
          (0, s.kt)(
            "p",
            null,
            "A load balancer needs to keep track of its target services. This can be done by\ne.g. each service registering when spinning up and unregestering when spinning\ndown."
          ),
          (0, s.kt)("h2", { id: "selection-strategy" }, "Selection strategy"),
          (0, s.kt)(
            "p",
            null,
            "There are various techniques for how the load distribution is decided. Some\nexamples are:"
          ),
          (0, s.kt)(
            "ul",
            null,
            (0, s.kt)(
              "li",
              { parentName: "ul" },
              "One often uses a Round Robin approach (each service taking a turn\nsequentially). One can also incorporate weighing depending on service\nthroughput or health checks."
            ),
            (0, s.kt)(
              "li",
              { parentName: "ul" },
              "One can also hash ip of incoming traffic to decide how it is routed (which is\nvery useful if one also uses caching or some server-side session). For cache\ndependent servers, consistent or rendezvous hashing is a good option."
            ),
            (0, s.kt)(
              "li",
              { parentName: "ul" },
              "Base it on HTTP path name. This allows for using different servers for\ndifferent paths, which can be useful when rolling out new code that only\naffects some paths."
            )
          )
        );
      }
      p.isMDXComponent = !0;
    },
  },
]);
