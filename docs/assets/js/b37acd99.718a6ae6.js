"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [6558],
  {
    7999: (e, t, o) => {
      o.r(t),
        o.d(t, {
          assets: () => d,
          contentTitle: () => i,
          default: () => u,
          frontMatter: () => l,
          metadata: () => p,
          toc: () => c,
        });
      var a = o(7462),
        n = o(3366),
        r = (o(7294), o(3905)),
        s = (o(828), ["components"]),
        l = {},
        i = "URL",
        p = {
          unversionedId: "network/url",
          id: "network/url",
          title: "URL",
          description:
            "A Uniform Resource Locator (URL) is an address to some resource. It also",
          source: "@site/docs/network/url.md",
          sourceDirName: "network",
          slug: "/network/url",
          permalink: "/docs/network/url",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "Tor", permalink: "/docs/network/tor" },
          next: { title: "VPN", permalink: "/docs/network/vpn" },
        },
        d = {},
        c = [{ value: "Anatomy of a URL", id: "anatomy-of-a-url", level: 2 }],
        m = { toc: c };
      function u(e) {
        var t = e.components,
          o = (0, n.Z)(e, s);
        return (0, r.kt)(
          "wrapper",
          (0, a.Z)({}, m, o, { components: t, mdxType: "MDXLayout" }),
          (0, r.kt)("h1", { id: "url" }, "URL"),
          (0, r.kt)(
            "p",
            null,
            "A ",
            (0, r.kt)(
              "strong",
              { parentName: "p" },
              "Uniform Resource Locator"
            ),
            " (",
            (0, r.kt)("strong", { parentName: "p" }, "URL"),
            ") is an address to some resource. It also\nincludes information on how that resource should be accessed (via its protocol)."
          ),
          (0, r.kt)("h2", { id: "anatomy-of-a-url" }, "Anatomy of a URL"),
          (0, r.kt)(
            "p",
            null,
            "The URL ",
            (0, r.kt)(
              "inlineCode",
              { parentName: "p" },
              "http://localhost:8080/alpha?bravo=charlie#delta"
            ),
            " consists of the\nfollowing parts;"
          ),
          (0, r.kt)(
            "ul",
            null,
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "schema"),
              " (",
              (0, r.kt)("inlineCode", { parentName: "li" }, "http"),
              "), also known as protocol. It specifies what protocol should\nbe used to access the resource. Some common examples are\n",
              (0, r.kt)(
                "a",
                { parentName: "li", href: "/docs/network/protocols/http/" },
                "HTTP"
              ),
              " and ",
              (0, r.kt)(
                "a",
                { parentName: "li", href: "/docs/network/protocols/ssh" },
                "SSH"
              ),
              "."
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "host"),
              " (",
              (0, r.kt)("inlineCode", { parentName: "li" }, "localhost"),
              "), also known as hostname. In terms of\n",
              (0, r.kt)(
                "a",
                { parentName: "li", href: "/docs/network/protocols/dns" },
                "DNS"
              ),
              ", this corresponds to the domain."
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "port"),
              " (",
              (0, r.kt)("inlineCode", { parentName: "li" }, "8080"),
              "), the port the resource can be found at. If omitted the\nprotocol default port is used."
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "path"),
              " (",
              (0, r.kt)("inlineCode", { parentName: "li" }, "/alpha"),
              ") path to the resource."
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "query"),
              " (",
              (0, r.kt)("inlineCode", { parentName: "li" }, "?bravo=charlie"),
              ") is key-value pairs data. There is no agreed on\nstandard on how exactly the data should be represented (especially for nested\nvalues). It is typically\n",
              (0, r.kt)(
                "a",
                {
                  parentName: "li",
                  href: "/docs/programming/encodings#percent-encoding",
                },
                "percent encoded"
              ),
              "."
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "fragment"),
              " (",
              (0, r.kt)("inlineCode", { parentName: "li" }, "#delta"),
              ") adds additional information about the resource. When\nthe resource is a ",
              (0, r.kt)(
                "a",
                {
                  parentName: "li",
                  href: "/docs/programming/data_formats/html",
                },
                "HTML"
              ),
              " document, the\nfragment can correspond to a section shown on the page."
            )
          ),
          (0, r.kt)("p", null, "There are some additional terms"),
          (0, r.kt)(
            "ul",
            null,
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "netloc"),
              " (",
              (0, r.kt)("inlineCode", { parentName: "li" }, "localhost:8080"),
              "), the hostname and port. This is also sometimes\nsloppily called host. It can also be called authority."
            )
          )
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
