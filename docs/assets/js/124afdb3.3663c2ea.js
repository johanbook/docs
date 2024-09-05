"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [8783],
  {
    7090: (e, t, o) => {
      o.r(t),
        o.d(t, {
          assets: () => p,
          contentTitle: () => l,
          default: () => k,
          frontMatter: () => i,
          metadata: () => d,
          toc: () => c,
        });
      var n = o(7462),
        s = o(3366),
        r = (o(7294), o(3905)),
        a = (o(828), ["components"]),
        i = {},
        l = "DNS",
        d = {
          unversionedId: "network/protocols/dns",
          id: "network/protocols/dns",
          title: "DNS",
          description:
            "Domain Name Resolution (DNS) is a protocol for resolving domain names to",
          source: "@site/docs/network/protocols/dns.md",
          sourceDirName: "network/protocols",
          slug: "/network/protocols/dns",
          permalink: "/docs/network/protocols/dns",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "DHCP",
            permalink: "/docs/network/protocols/dhcp",
          },
          next: { title: "FTP", permalink: "/docs/network/protocols/ftp" },
        },
        p = {},
        c = [
          { value: "Look up process", id: "look-up-process", level: 2 },
          { value: "Record Types", id: "record-types", level: 2 },
          { value: "DNSSEC", id: "dnssec", level: 2 },
          { value: "DNS sinkhole", id: "dns-sinkhole", level: 2 },
        ],
        m = { toc: c };
      function k(e) {
        var t = e.components,
          o = (0, s.Z)(e, a);
        return (0, r.kt)(
          "wrapper",
          (0, n.Z)({}, m, o, { components: t, mdxType: "MDXLayout" }),
          (0, r.kt)("h1", { id: "dns" }, "DNS"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("strong", { parentName: "p" }, "Domain Name Resolution"),
            " (",
            (0, r.kt)("strong", { parentName: "p" }, "DNS"),
            ") is a protocol for resolving domain names to\n",
            (0, r.kt)(
              "a",
              { parentName: "p", href: "../ip_address" },
              "IP addresses"
            ),
            ". DNS services are typically served on port 53."
          ),
          (0, r.kt)("h2", { id: "look-up-process" }, "Look up process"),
          (0, r.kt)(
            "p",
            null,
            "When a computer does a DNS lookup, it will send a request to the configured DNS.\nThis is often a name server handled by one's ISP. If the query is not cached\nthere, this name server will query a root DNS, which in turns queries TLD\n(Top-Level Domain) servers."
          ),
          (0, r.kt)("h2", { id: "record-types" }, "Record Types"),
          (0, r.kt)(
            "p",
            null,
            "The DNS protocol features different records that has different functionality.\nSome common record types are"
          ),
          (0, r.kt)(
            "ul",
            null,
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "A"),
              " Points to an IPv4 address."
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "AAAA"),
              " Points to an IPv6 address."
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "ALIAS"),
              " Points to another DNS name."
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "CNAME"),
              " Points to another DNS name. Should not be used for apex domains."
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "SOA"),
              " Stores domain metadata. One can manually fetch the SOA record of a\ndomain by doing ",
              (0, r.kt)(
                "inlineCode",
                { parentName: "li" },
                "dig +short soa <DOMAIN>"
              ),
              "."
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "DS"),
              " Stands for Delegation of Signing and is used in DNSSEC. If there is no\nDS record, then DNSSEC is not enabled."
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "MX"),
              " Mail Exchange record for mail servers."
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "NS"),
              " Indicates which nameserver is authoritative for a given domain."
            )
          ),
          (0, r.kt)("h2", { id: "dnssec" }, "DNSSEC"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("strong", { parentName: "p" }, "DNS Security Extensions"),
            " (",
            (0, r.kt)("strong", { parentName: "p" }, "DNSSEC"),
            ") is a suite of extensions that aim to\nadd some security to the DNS protocol. It can protect against e.g.\n",
            (0, r.kt)(
              "a",
              {
                parentName: "p",
                href: "../../security/vulnerabilities/dns_poisoning",
              },
              "DNS cache poisoning"
            ),
            "."
          ),
          (0, r.kt)(
            "p",
            null,
            "DNSSEC relies on a chain of trust as each domain is signed."
          ),
          (0, r.kt)("h2", { id: "dns-sinkhole" }, "DNS sinkhole"),
          (0, r.kt)(
            "p",
            null,
            "A DNS sinkhole is a nameserver with a list of disallowed domains. Lookups\nmatching these domains are reported as not found. DNS sinkholes can be used for\nblocking ads or specific sites on a network level."
          )
        );
      }
      k.isMDXComponent = !0;
    },
  },
]);
