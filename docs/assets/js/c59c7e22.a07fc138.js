"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [7126],
  {
    2471: (a, e, t) => {
      t.r(e),
        t.d(e, {
          assets: () => l,
          contentTitle: () => i,
          default: () => N,
          frontMatter: () => r,
          metadata: () => o,
          toc: () => k,
        });
      var s = t(7462),
        n = t(3366),
        p = (t(7294), t(3905)),
        m = (t(828), ["components"]),
        r = {},
        i = "IP Address",
        o = {
          unversionedId: "network/ip_address",
          id: "network/ip_address",
          title: "IP Address",
          description:
            "An IP address is an address used for transmitting data using the",
          source: "@site/docs/network/ip_address.md",
          sourceDirName: "network",
          slug: "/network/ip_address",
          permalink: "/docs/network/ip_address",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Basics of networks",
            permalink: "/docs/network/basics",
          },
          next: { title: "IPSec", permalink: "/docs/network/ipsec" },
        },
        l = {},
        k = [
          { value: "Ipv4 vs IPv6", id: "ipv4-vs-ipv6", level: 2 },
          { value: "Subnet mask", id: "subnet-mask", level: 2 },
          { value: "CIDR notation", id: "cidr-notation", level: 2 },
        ],
        d = { toc: k };
      function N(a) {
        var e = a.components,
          t = (0, n.Z)(a, m);
        return (0, p.kt)(
          "wrapper",
          (0, s.Z)({}, d, t, { components: e, mdxType: "MDXLayout" }),
          (0, p.kt)("h1", { id: "ip-address" }, "IP Address"),
          (0, p.kt)(
            "p",
            null,
            "An ",
            (0, p.kt)("strong", { parentName: "p" }, "IP address"),
            " is an address used for transmitting data using the\n",
            (0, p.kt)(
              "a",
              { parentName: "p", href: "./protocols/ip" },
              "internet protocol"
            ),
            "."
          ),
          (0, p.kt)("h2", { id: "ipv4-vs-ipv6" }, "Ipv4 vs IPv6"),
          (0, p.kt)(
            "p",
            null,
            "There are two major versions of IP addresses, IPv4 that uses 32 bit addresses\nand IPv64 that uses 128 bits. The problem with IPv4 is that it only offers\n",
            (0, p.kt)(
              "span",
              { parentName: "p", className: "math math-inline" },
              (0, p.kt)(
                "span",
                { parentName: "span", className: "katex" },
                (0, p.kt)(
                  "span",
                  { parentName: "span", className: "katex-mathml" },
                  (0, p.kt)(
                    "math",
                    {
                      parentName: "span",
                      xmlns: "http://www.w3.org/1998/Math/MathML",
                    },
                    (0, p.kt)(
                      "semantics",
                      { parentName: "math" },
                      (0, p.kt)(
                        "mrow",
                        { parentName: "semantics" },
                        (0, p.kt)(
                          "msup",
                          { parentName: "mrow" },
                          (0, p.kt)("mn", { parentName: "msup" }, "2"),
                          (0, p.kt)("mn", { parentName: "msup" }, "32")
                        )
                      ),
                      (0, p.kt)(
                        "annotation",
                        {
                          parentName: "semantics",
                          encoding: "application/x-tex",
                        },
                        "2^{32}"
                      )
                    )
                  )
                ),
                (0, p.kt)(
                  "span",
                  {
                    parentName: "span",
                    className: "katex-html",
                    "aria-hidden": "true",
                  },
                  (0, p.kt)(
                    "span",
                    { parentName: "span", className: "base" },
                    (0, p.kt)("span", {
                      parentName: "span",
                      className: "strut",
                      style: {
                        height: "0.8141079999999999em",
                        verticalAlign: "0em",
                      },
                    }),
                    (0, p.kt)(
                      "span",
                      { parentName: "span", className: "mord" },
                      (0, p.kt)(
                        "span",
                        { parentName: "span", className: "mord" },
                        "2"
                      ),
                      (0, p.kt)(
                        "span",
                        { parentName: "span", className: "msupsub" },
                        (0, p.kt)(
                          "span",
                          { parentName: "span", className: "vlist-t" },
                          (0, p.kt)(
                            "span",
                            { parentName: "span", className: "vlist-r" },
                            (0, p.kt)(
                              "span",
                              {
                                parentName: "span",
                                className: "vlist",
                                style: { height: "0.8141079999999999em" },
                              },
                              (0, p.kt)(
                                "span",
                                {
                                  parentName: "span",
                                  style: {
                                    top: "-3.063em",
                                    marginRight: "0.05em",
                                  },
                                },
                                (0, p.kt)("span", {
                                  parentName: "span",
                                  className: "pstrut",
                                  style: { height: "2.7em" },
                                }),
                                (0, p.kt)(
                                  "span",
                                  {
                                    parentName: "span",
                                    className:
                                      "sizing reset-size6 size3 mtight",
                                  },
                                  (0, p.kt)(
                                    "span",
                                    {
                                      parentName: "span",
                                      className: "mord mtight",
                                    },
                                    (0, p.kt)(
                                      "span",
                                      {
                                        parentName: "span",
                                        className: "mord mtight",
                                      },
                                      "3"
                                    ),
                                    (0, p.kt)(
                                      "span",
                                      {
                                        parentName: "span",
                                        className: "mord mtight",
                                      },
                                      "2"
                                    )
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            ),
            " unique addresses - which is of the same order as Earth's population.\nIPv6 bumps this limit to ",
            (0, p.kt)(
              "span",
              { parentName: "p", className: "math math-inline" },
              (0, p.kt)(
                "span",
                { parentName: "span", className: "katex" },
                (0, p.kt)(
                  "span",
                  { parentName: "span", className: "katex-mathml" },
                  (0, p.kt)(
                    "math",
                    {
                      parentName: "span",
                      xmlns: "http://www.w3.org/1998/Math/MathML",
                    },
                    (0, p.kt)(
                      "semantics",
                      { parentName: "math" },
                      (0, p.kt)(
                        "mrow",
                        { parentName: "semantics" },
                        (0, p.kt)(
                          "msup",
                          { parentName: "mrow" },
                          (0, p.kt)("mn", { parentName: "msup" }, "2"),
                          (0, p.kt)("mn", { parentName: "msup" }, "128")
                        )
                      ),
                      (0, p.kt)(
                        "annotation",
                        {
                          parentName: "semantics",
                          encoding: "application/x-tex",
                        },
                        "2^{128}"
                      )
                    )
                  )
                ),
                (0, p.kt)(
                  "span",
                  {
                    parentName: "span",
                    className: "katex-html",
                    "aria-hidden": "true",
                  },
                  (0, p.kt)(
                    "span",
                    { parentName: "span", className: "base" },
                    (0, p.kt)("span", {
                      parentName: "span",
                      className: "strut",
                      style: {
                        height: "0.8141079999999999em",
                        verticalAlign: "0em",
                      },
                    }),
                    (0, p.kt)(
                      "span",
                      { parentName: "span", className: "mord" },
                      (0, p.kt)(
                        "span",
                        { parentName: "span", className: "mord" },
                        "2"
                      ),
                      (0, p.kt)(
                        "span",
                        { parentName: "span", className: "msupsub" },
                        (0, p.kt)(
                          "span",
                          { parentName: "span", className: "vlist-t" },
                          (0, p.kt)(
                            "span",
                            { parentName: "span", className: "vlist-r" },
                            (0, p.kt)(
                              "span",
                              {
                                parentName: "span",
                                className: "vlist",
                                style: { height: "0.8141079999999999em" },
                              },
                              (0, p.kt)(
                                "span",
                                {
                                  parentName: "span",
                                  style: {
                                    top: "-3.063em",
                                    marginRight: "0.05em",
                                  },
                                },
                                (0, p.kt)("span", {
                                  parentName: "span",
                                  className: "pstrut",
                                  style: { height: "2.7em" },
                                }),
                                (0, p.kt)(
                                  "span",
                                  {
                                    parentName: "span",
                                    className:
                                      "sizing reset-size6 size3 mtight",
                                  },
                                  (0, p.kt)(
                                    "span",
                                    {
                                      parentName: "span",
                                      className: "mord mtight",
                                    },
                                    (0, p.kt)(
                                      "span",
                                      {
                                        parentName: "span",
                                        className: "mord mtight",
                                      },
                                      "1"
                                    ),
                                    (0, p.kt)(
                                      "span",
                                      {
                                        parentName: "span",
                                        className: "mord mtight",
                                      },
                                      "2"
                                    ),
                                    (0, p.kt)(
                                      "span",
                                      {
                                        parentName: "span",
                                        className: "mord mtight",
                                      },
                                      "8"
                                    )
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            ),
            " which is unlikely that we hit in a\nforeseeable future."
          ),
          (0, p.kt)("h2", { id: "subnet-mask" }, "Subnet mask"),
          (0, p.kt)(
            "p",
            null,
            "A IPv4 subnet mask consists of four bytes, often separated by dots when printed.\nThe purpose of a subnet mask is to show which part of an IP address that targets\na network and which targets a device."
          ),
          (0, p.kt)("h2", { id: "cidr-notation" }, "CIDR notation"),
          (0, p.kt)(
            "p",
            null,
            "CIDR is a notation for specifying a range of IP addresses."
          )
        );
      }
      N.isMDXComponent = !0;
    },
  },
]);
