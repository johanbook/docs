"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [4794],
  {
    302: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => p,
          contentTitle: () => l,
          default: () => d,
          frontMatter: () => a,
          metadata: () => c,
          toc: () => u,
        });
      var o = r(7462),
        s = r(3366),
        n = (r(7294), r(3905)),
        i = (r(828), ["components"]),
        a = {},
        l = "CORS",
        c = {
          unversionedId: "network/protocols/http/cors",
          id: "network/protocols/http/cors",
          title: "CORS",
          description:
            "Cross Origins Resource Sharing (CORS) is a policy that cross origin",
          source: "@site/docs/network/protocols/http/cors.md",
          sourceDirName: "network/protocols/http",
          slug: "/network/protocols/http/cors",
          permalink: "/docs/network/protocols/http/cors",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "HTTP Caching",
            permalink: "/docs/network/protocols/http/caching",
          },
          next: {
            title: "ETag",
            permalink: "/docs/network/protocols/http/etag",
          },
        },
        p = {},
        u = [{ value: "Preflight", id: "preflight", level: 2 }],
        h = { toc: u };
      function d(e) {
        var t = e.components,
          r = (0, s.Z)(e, i);
        return (0, n.kt)(
          "wrapper",
          (0, o.Z)({}, h, r, { components: t, mdxType: "MDXLayout" }),
          (0, n.kt)("h1", { id: "cors" }, "CORS"),
          (0, n.kt)(
            "p",
            null,
            (0, n.kt)(
              "strong",
              { parentName: "p" },
              "Cross Origins Resource Sharing"
            ),
            " (",
            (0, n.kt)("strong", { parentName: "p" }, "CORS"),
            ") is a policy that cross origin\nrequests are blocked by the web browser unless the server explicitly allows the\norigin in a ",
            (0, n.kt)(
              "inlineCode",
              { parentName: "p" },
              "Access-Control-Allow Origin"
            ),
            " header. This is a security feature as\nthe browser can not trust that requests from scripts are intended by the user\n(and many such requests would also by authenticated due to cookie being sent\nalong with the request)."
          ),
          (0, n.kt)(
            "p",
            null,
            "A server can allow CORS from all origins by adding this header to its responses:"
          ),
          (0, n.kt)(
            "pre",
            null,
            (0, n.kt)(
              "code",
              { parentName: "pre", className: "language-txt" },
              "Access-Control-Allow-Origin: *\n"
            )
          ),
          (0, n.kt)("h2", { id: "preflight" }, "Preflight"),
          (0, n.kt)(
            "p",
            null,
            "For some CORS requests, a preflight request is sent using the ",
            (0, n.kt)("inlineCode", { parentName: "p" }, "OPTIONS"),
            " ver with\nthe ",
            (0, n.kt)(
              "inlineCode",
              { parentName: "p" },
              "Access-Control-Request-Method"
            ),
            ", ",
            (0, n.kt)(
              "inlineCode",
              { parentName: "p" },
              "Access-Control-Request-Headers"
            ),
            ", and\n",
            (0, n.kt)("inlineCode", { parentName: "p" }, "Origin"),
            " headers."
          ),
          (0, n.kt)("p", null, "One can test a preflight request using curl"),
          (0, n.kt)(
            "pre",
            null,
            (0, n.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              ' curl -X OPTIONS -H "Origin: <ORIGIN>" <URL>\n'
            )
          )
        );
      }
      d.isMDXComponent = !0;
    },
  },
]);
