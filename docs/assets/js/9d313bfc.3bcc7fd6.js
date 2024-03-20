"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [2698],
  {
    9574: (e, t, i) => {
      i.r(t),
        i.d(t, {
          assets: () => u,
          contentTitle: () => l,
          default: () => h,
          frontMatter: () => r,
          metadata: () => c,
          toc: () => d,
        });
      var s = i(7462),
        a = i(3366),
        n = (i(7294), i(3905)),
        o = (i(828), ["components"]),
        r = {},
        l = "Denial of Service",
        c = {
          unversionedId: "security/vulnerabilities/dos",
          id: "security/vulnerabilities/dos",
          title: "Denial of Service",
          description:
            "Denial of Service (DoS) is an attack where a target is flooded with",
          source: "@site/docs/security/vulnerabilities/dos.md",
          sourceDirName: "security/vulnerabilities",
          slug: "/security/vulnerabilities/dos",
          permalink: "/docs/security/vulnerabilities/dos",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "DNS Cache Poisoning",
            permalink: "/docs/security/vulnerabilities/dns_poisoning",
          },
          next: {
            title: "LFI",
            permalink: "/docs/security/vulnerabilities/lfi",
          },
        },
        u = {},
        d = [
          { value: "Types", id: "types", level: 2 },
          { value: "DDos", id: "ddos", level: 3 },
          { value: "ADos", id: "ados", level: 3 },
          { value: "Slow Loris", id: "slow-loris", level: 3 },
          { value: "Countermeasures", id: "countermeasures", level: 2 },
        ],
        p = { toc: d };
      function h(e) {
        var t = e.components,
          i = (0, a.Z)(e, o);
        return (0, n.kt)(
          "wrapper",
          (0, s.Z)({}, p, i, { components: t, mdxType: "MDXLayout" }),
          (0, n.kt)("h1", { id: "denial-of-service" }, "Denial of Service"),
          (0, n.kt)(
            "p",
            null,
            (0, n.kt)("strong", { parentName: "p" }, "Denial of Service"),
            " (",
            (0, n.kt)("strong", { parentName: "p" }, "DoS"),
            ") is an attack where a target is flooded with\nnetwork traffic potentially compromising its availability. These attacks can be\nboth fast and slow."
          ),
          (0, n.kt)("h2", { id: "types" }, "Types"),
          (0, n.kt)("p", null, "Here are a few different versions of DoS."),
          (0, n.kt)("h3", { id: "ddos" }, "DDos"),
          (0, n.kt)(
            "p",
            null,
            "Multiple computers simultaneously DoS a target. Often used with bot nets."
          ),
          (0, n.kt)("h3", { id: "ados" }, "ADos"),
          (0, n.kt)(
            "p",
            null,
            "There also ADoS (Amplified Denial of Service) attacks where one uses a server to\namplify the attack."
          ),
          (0, n.kt)("h3", { id: "slow-loris" }, "Slow Loris"),
          (0, n.kt)(
            "p",
            null,
            "The Slow Loris attack attempts to keep a HTTP connection open with a server. It\ndoes this by sending a HTTP request but omitting the carriage return indicating\nthe end of the request. Then the attacker periodically sends additional data in\nthe same connection such that the server never closes it."
          ),
          (0, n.kt)(
            "p",
            null,
            "This is especially severe in synchronous servers where a new thread is opened\nfor each concurrent connection."
          ),
          (0, n.kt)("h2", { id: "countermeasures" }, "Countermeasures"),
          (0, n.kt)(
            "p",
            null,
            "There are various measures one can take to counter DoS:"
          ),
          (0, n.kt)(
            "ul",
            null,
            (0, n.kt)(
              "li",
              { parentName: "ul" },
              (0, n.kt)("strong", { parentName: "li" }, "Ratelimiting"),
              " The most basic approach is to cap the number of allowed\nrequests per client. One can ratelimit on IP, username or even geographic\nregion. Does not necessarily stop DDos though."
            ),
            (0, n.kt)(
              "li",
              { parentName: "ul" },
              (0, n.kt)("strong", { parentName: "li" }, "Autoscaling systems"),
              " If the system can scale after demand it might handle\nattacks better."
            ),
            (0, n.kt)(
              "li",
              { parentName: "ul" },
              (0, n.kt)("strong", { parentName: "li" }, "Challenges"),
              " If under a possible DoS attack, one can serve challenges to\neach unique client. Client that complete the challenge are then prioritized."
            )
          )
        );
      }
      h.isMDXComponent = !0;
    },
  },
]);
