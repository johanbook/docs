"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [8364],
  {
    9869: (t, e, o) => {
      o.r(e),
        o.d(e, {
          assets: () => p,
          contentTitle: () => i,
          default: () => k,
          frontMatter: () => c,
          metadata: () => l,
          toc: () => h,
        });
      var n = o(7462),
        r = o(3366),
        a = (o(7294), o(3905)),
        s = (o(828), ["components"]),
        c = {},
        i = "HTTP Caching",
        l = {
          unversionedId: "network/protocols/http/caching",
          id: "network/protocols/http/caching",
          title: "HTTP Caching",
          description:
            "The HTTP caching functionality works by using the following",
          source: "@site/docs/network/protocols/http/caching.md",
          sourceDirName: "network/protocols/http",
          slug: "/network/protocols/http/caching",
          permalink: "/docs/network/protocols/http/caching",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "HTTP",
            permalink: "/docs/network/protocols/http/",
          },
          next: {
            title: "CORS",
            permalink: "/docs/network/protocols/http/cors",
          },
        },
        p = {},
        h = [],
        d = { toc: h };
      function k(t) {
        var e = t.components,
          o = (0, r.Z)(t, s);
        return (0, a.kt)(
          "wrapper",
          (0, n.Z)({}, d, o, { components: e, mdxType: "MDXLayout" }),
          (0, a.kt)("h1", { id: "http-caching" }, "HTTP Caching"),
          (0, a.kt)(
            "p",
            null,
            "The ",
            (0, a.kt)(
              "a",
              { parentName: "p", href: "/docs/network/protocols/http/" },
              "HTTP"
            ),
            " caching functionality works by using the following\nheaders:"
          ),
          (0, a.kt)(
            "ul",
            null,
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)(
                "a",
                { parentName: "li", href: "/docs/network/protocols/http/etag" },
                "ETags"
              )
            ),
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)("inlineCode", { parentName: "li" }, "Cache-Control"),
              " header"
            ),
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)("inlineCode", { parentName: "li" }, "Last-Modified"),
              " header"
            )
          ),
          (0, a.kt)(
            "p",
            null,
            "All HTTP calls a browser makes are first checked against the browser's cache to\nsee if there is a valid response. If found the response is returned and the\nrequest is never carried out over the network."
          )
        );
      }
      k.isMDXComponent = !0;
    },
  },
]);
