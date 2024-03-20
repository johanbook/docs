"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [1848],
  {
    7164: (t, e, a) => {
      a.r(e),
        a.d(e, {
          assets: () => d,
          contentTitle: () => p,
          default: () => u,
          frontMatter: () => c,
          metadata: () => i,
          toc: () => l,
        });
      var o = a(7462),
        s = a(3366),
        r = (a(7294), a(3905)),
        n = (a(828), ["components"]),
        c = {},
        p = "ETag",
        i = {
          unversionedId: "network/protocols/http/etag",
          id: "network/protocols/http/etag",
          title: "ETag",
          description:
            "An ETag (or Entity Tag) is a HTTP header used with caching. If a HTTP",
          source: "@site/docs/network/protocols/http/etag.md",
          sourceDirName: "network/protocols/http",
          slug: "/network/protocols/http/etag",
          permalink: "/docs/network/protocols/http/etag",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "CORS",
            permalink: "/docs/network/protocols/http/cors",
          },
          next: {
            title: "Status codes",
            permalink: "/docs/network/protocols/http/status_codes",
          },
        },
        d = {},
        l = [{ value: "Weak ETags", id: "weak-etags", level: 2 }],
        g = { toc: l };
      function u(t) {
        var e = t.components,
          a = (0, s.Z)(t, n);
        return (0, r.kt)(
          "wrapper",
          (0, o.Z)({}, g, a, { components: e, mdxType: "MDXLayout" }),
          (0, r.kt)("h1", { id: "etag" }, "ETag"),
          (0, r.kt)(
            "p",
            null,
            "An ",
            (0, r.kt)("strong", { parentName: "p" }, "ETag"),
            " (or ",
            (0, r.kt)("strong", { parentName: "p" }, "Entity Tag"),
            ") is a HTTP header used with caching. If a HTTP\nresource changes its ETag should also change."
          ),
          (0, r.kt)("h2", { id: "weak-etags" }, "Weak ETags"),
          (0, r.kt)(
            "p",
            null,
            "Weak Etags has a ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "W/"),
            " prefix and can be used to guarantee that two resources are\nsemantically the same. This is in contrast to strong ETags that can be used for\nbyte-per-byte guarantees."
          )
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
