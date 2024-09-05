"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [8899],
  {
    3953: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => h,
          contentTitle: () => l,
          default: () => u,
          frontMatter: () => r,
          metadata: () => c,
          toc: () => p,
        });
      var o = n(7462),
        a = n(3366),
        s = (n(7294), n(3905)),
        i = (n(828), ["components"]),
        r = {},
        l = "TCP",
        c = {
          unversionedId: "network/protocols/tcp",
          id: "network/protocols/tcp",
          title: "TCP",
          description:
            "Transmission Control Protocol (TCP), also known as TCP/IP, is a protocol",
          source: "@site/docs/network/protocols/tcp.md",
          sourceDirName: "network/protocols",
          slug: "/network/protocols/tcp",
          permalink: "/docs/network/protocols/tcp",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "SSH", permalink: "/docs/network/protocols/ssh" },
          next: { title: "TLS", permalink: "/docs/network/protocols/tls/" },
        },
        h = {},
        p = [
          { value: "Sequence numbers", id: "sequence-numbers", level: 2 },
          {
            value: "The three-way handshake",
            id: "the-three-way-handshake",
            level: 2,
          },
          { value: "Windowing", id: "windowing", level: 2 },
          { value: "Utils", id: "utils", level: 2 },
        ],
        d = { toc: p };
      function u(e) {
        var t = e.components,
          n = (0, a.Z)(e, i);
        return (0, s.kt)(
          "wrapper",
          (0, o.Z)({}, d, n, { components: t, mdxType: "MDXLayout" }),
          (0, s.kt)("h1", { id: "tcp" }, "TCP"),
          (0, s.kt)(
            "p",
            null,
            (0, s.kt)(
              "strong",
              { parentName: "p" },
              "Transmission Control Protocol"
            ),
            " (",
            (0, s.kt)("strong", { parentName: "p" }, "TCP"),
            "), also known as TCP/IP, is a protocol\nbuilt on top of the ",
            (0, s.kt)("a", { parentName: "p", href: "./ip" }, "IP protocol"),
            " that supports bidirectional\ncommunication (in contrast to ",
            (0, s.kt)("a", { parentName: "p", href: "./udp" }, "UDP"),
            "). It guarantees that data arrives in\norder."
          ),
          (0, s.kt)("h2", { id: "sequence-numbers" }, "Sequence numbers"),
          (0, s.kt)(
            "p",
            null,
            "Each transmitted package has a sequence number in its package header, allowing\nthe receiver to rearrange the received packages in their original order. This\nsequence number also serves as an identifier for an open connection from a given\nIP, considering a single IP can have multiple connections. To establish a\nconnection both parties must know each other's Initial Sequence Number (ISN) for\nthe connection. This is established by the three-way handshake."
          ),
          (0, s.kt)(
            "h2",
            { id: "the-three-way-handshake" },
            "The three-way handshake"
          ),
          (0, s.kt)(
            "p",
            null,
            "To establish a TCP connection both parties need ISNs. This is accomplished in\nthree steps"
          ),
          (0, s.kt)(
            "ol",
            null,
            (0, s.kt)(
              "li",
              { parentName: "ol" },
              "The client sends a synchronization request (SYN) containing an ISN."
            ),
            (0, s.kt)(
              "li",
              { parentName: "ol" },
              "The host answers with a combined message, an acknowledgement of the received\nSYN request (an ACK) and a SYN request with its own ISN."
            ),
            (0, s.kt)(
              "li",
              { parentName: "ol" },
              "Client answers with an ACK when the remote's SYN is received."
            )
          ),
          (0, s.kt)("h2", { id: "windowing" }, "Windowing"),
          (0, s.kt)(
            "p",
            null,
            "TCP was developed with post-world war scenarios in mind. It builds on the\nassumption that network nodes may be flaky at best. Therefore, the number of\npackages sent during a communication usually starts as 1, and then increases\nexponentially if every transmission if successful. If a transmission fails, it\nresets back to 1."
          ),
          (0, s.kt)("h2", { id: "utils" }, "Utils"),
          (0, s.kt)(
            "p",
            null,
            "On Linux one can monitor TCP traffic on an interface using the ",
            (0, s.kt)("inlineCode", { parentName: "p" }, "tcpdump"),
            " tool."
          )
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
