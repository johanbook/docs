"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [6510],
  {
    7408: (e, r, s) => {
      s.r(r),
        s.d(r, {
          assets: () => d,
          contentTitle: () => p,
          default: () => u,
          frontMatter: () => i,
          metadata: () => l,
          toc: () => v,
        });
      var t = s(7462),
        o = s(3366),
        n = (s(7294), s(3905)),
        a = (s(828), ["components"]),
        i = {},
        p = "Servers",
        l = {
          unversionedId: "devops/servers",
          id: "devops/servers",
          title: "Servers",
          description:
            "A server is a service that listens and reacts to incoming requests, as part",
          source: "@site/docs/devops/servers.md",
          sourceDirName: "devops",
          slug: "/devops/servers",
          permalink: "/docs/devops/servers",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Storage",
            permalink: "/docs/devops/orchestration/kubernetes/storage",
          },
          next: { title: "Uptime", permalink: "/docs/devops/uptime" },
        },
        d = {},
        v = [
          { value: "Pre-fork worker", id: "pre-fork-worker", level: 2 },
          { value: "Threads", id: "threads", level: 2 },
          { value: "Event loop", id: "event-loop", level: 2 },
        ],
        c = { toc: v };
      function u(e) {
        var r = e.components,
          s = (0, o.Z)(e, a);
        return (0, n.kt)(
          "wrapper",
          (0, t.Z)({}, c, s, { components: r, mdxType: "MDXLayout" }),
          (0, n.kt)("h1", { id: "servers" }, "Servers"),
          (0, n.kt)(
            "p",
            null,
            "A ",
            (0, n.kt)("strong", { parentName: "p" }, "server"),
            " is a service that listens and reacts to incoming requests, as part\nof the client-server paradigm. This page will discuss the different approaches\nfor underlying technologies for a server."
          ),
          (0, n.kt)("h2", { id: "pre-fork-worker" }, "Pre-fork worker"),
          (0, n.kt)(
            "p",
            null,
            "Server spins up workers as their own processes. Pre-fork means that this is done\nin-before hand. This suits non-thread safe frameworks."
          ),
          (0, n.kt)("h2", { id: "threads" }, "Threads"),
          (0, n.kt)(
            "p",
            null,
            "A threaded server will spin up several threads to handle incoming requests. This\nis suitable for thread-safe languages."
          ),
          (0, n.kt)("h2", { id: "event-loop" }, "Event loop"),
          (0, n.kt)(
            "p",
            null,
            "An event loop-based server run using an\n",
            (0, n.kt)(
              "a",
              { parentName: "p", href: "../programming/asynchronicity" },
              "asynchronous event loop"
            ),
            ". This approach\ntypically scales well for handling non-blocking requests."
          )
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
