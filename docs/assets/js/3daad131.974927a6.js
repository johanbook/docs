"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [8887],
  {
    8199: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => u,
          contentTitle: () => l,
          default: () => k,
          frontMatter: () => i,
          metadata: () => c,
          toc: () => p,
        });
      var s = r(7462),
        o = r(3366),
        n = (r(7294), r(3905)),
        a = (r(828), ["components"]),
        i = {},
        l = "Status codes",
        c = {
          unversionedId: "network/protocols/http/status_codes",
          id: "network/protocols/http/status_codes",
          title: "Status codes",
          description: "There are different status codes in the HTTP protocol.",
          source: "@site/docs/network/protocols/http/status_codes.md",
          sourceDirName: "network/protocols/http",
          slug: "/network/protocols/http/status_codes",
          permalink: "/docs/network/protocols/http/status_codes",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "ETag",
            permalink: "/docs/network/protocols/http/etag",
          },
          next: { title: "ICMP", permalink: "/docs/network/protocols/icmp" },
        },
        u = {},
        p = [
          { value: "100 - Information", id: "100---information", level: 2 },
          { value: "200 - Successes", id: "200---successes", level: 2 },
          { value: "300 - Redirects", id: "300---redirects", level: 2 },
          { value: "400 - Client errors", id: "400---client-errors", level: 2 },
          { value: "500 - Server errors", id: "500---server-errors", level: 2 },
        ],
        d = { toc: p };
      function k(e) {
        var t = e.components,
          r = (0, o.Z)(e, a);
        return (0, n.kt)(
          "wrapper",
          (0, s.Z)({}, d, r, { components: t, mdxType: "MDXLayout" }),
          (0, n.kt)("h1", { id: "status-codes" }, "Status codes"),
          (0, n.kt)(
            "p",
            null,
            "There are different ",
            (0, n.kt)("strong", { parentName: "p" }, "status codes"),
            " in the ",
            (0, n.kt)(
              "a",
              { parentName: "p", href: "/docs/network/protocols/http/" },
              "HTTP protocol"
            ),
            "."
          ),
          (0, n.kt)("h2", { id: "100---information" }, "100 - Information"),
          (0, n.kt)(
            "ul",
            null,
            (0, n.kt)(
              "li",
              { parentName: "ul" },
              (0, n.kt)("strong", { parentName: "li" }, "101"),
              " Switch protocol."
            )
          ),
          (0, n.kt)("h2", { id: "200---successes" }, "200 - Successes"),
          (0, n.kt)(
            "ul",
            null,
            (0, n.kt)(
              "li",
              { parentName: "ul" },
              (0, n.kt)("strong", { parentName: "li" }, "200"),
              " is a success."
            ),
            (0, n.kt)(
              "li",
              { parentName: "ul" },
              (0, n.kt)("strong", { parentName: "li" }, "201"),
              " the resource was created."
            ),
            (0, n.kt)(
              "li",
              { parentName: "ul" },
              (0, n.kt)("strong", { parentName: "li" }, "204"),
              " same as a 200 but the request contains no content. I use this status\ncode for most successes."
            )
          ),
          (0, n.kt)("h2", { id: "300---redirects" }, "300 - Redirects"),
          (0, n.kt)(
            "ul",
            null,
            (0, n.kt)(
              "li",
              { parentName: "ul" },
              (0, n.kt)("strong", { parentName: "li" }, "301"),
              " Resource has been moved permanently."
            ),
            (0, n.kt)(
              "li",
              { parentName: "ul" },
              (0, n.kt)("strong", { parentName: "li" }, "302"),
              " the resource can be found temporarily at location specified in the\n",
              (0, n.kt)("inlineCode", { parentName: "li" }, "Location"),
              " header."
            ),
            (0, n.kt)(
              "li",
              { parentName: "ul" },
              (0, n.kt)("strong", { parentName: "li" }, "304"),
              " Resource has been modified and cached version can be used. This can be\nused in conjunction with ",
              (0, n.kt)("a", { parentName: "li", href: "./etag" }, "ETags"),
              "."
            )
          ),
          (0, n.kt)("h2", { id: "400---client-errors" }, "400 - Client errors"),
          (0, n.kt)(
            "ul",
            null,
            (0, n.kt)(
              "li",
              { parentName: "ul" },
              (0, n.kt)("strong", { parentName: "li" }, "400"),
              " Server could not understand the request."
            ),
            (0, n.kt)(
              "li",
              { parentName: "ul" },
              (0, n.kt)("strong", { parentName: "li" }, "401"),
              " Authentication required."
            ),
            (0, n.kt)(
              "li",
              { parentName: "ul" },
              (0, n.kt)("strong", { parentName: "li" }, "403"),
              " Insufficient permissions."
            ),
            (0, n.kt)(
              "li",
              { parentName: "ul" },
              (0, n.kt)("strong", { parentName: "li" }, "404"),
              " The requested resource was not found."
            ),
            (0, n.kt)(
              "li",
              { parentName: "ul" },
              (0, n.kt)("strong", { parentName: "li" }, "405"),
              " HTTP method not allowed."
            ),
            (0, n.kt)(
              "li",
              { parentName: "ul" },
              (0, n.kt)("strong", { parentName: "li" }, "418"),
              " I am a teapot. This is a joke status code. I like to use it in unit\ntests."
            )
          ),
          (0, n.kt)("h2", { id: "500---server-errors" }, "500 - Server errors"),
          (0, n.kt)(
            "ul",
            null,
            (0, n.kt)(
              "li",
              { parentName: "ul" },
              (0, n.kt)("strong", { parentName: "li" }, "500"),
              " Server encountered an unexpected error."
            )
          )
        );
      }
      k.isMDXComponent = !0;
    },
  },
]);
