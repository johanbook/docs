"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [738],
  {
    1644: (t, o, e) => {
      e.r(o),
        e.d(o, {
          assets: () => c,
          contentTitle: () => p,
          default: () => h,
          frontMatter: () => s,
          metadata: () => i,
          toc: () => d,
        });
      var a = e(7462),
        n = e(3366),
        l = (e(7294), e(3905)),
        r = (e(828), ["components"]),
        s = {},
        p = "cURL",
        i = {
          unversionedId: "unix/tools/curl",
          id: "unix/tools/curl",
          title: "cURL",
          description:
            "cURL is a tool for sending network requests from within a shell. It supports",
          source: "@site/docs/unix/tools/curl.md",
          sourceDirName: "unix/tools",
          slug: "/unix/tools/curl",
          permalink: "/docs/unix/tools/curl",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "bluetoothctl",
            permalink: "/docs/unix/tools/bluetoothctl",
          },
          next: { title: "dhcpcd", permalink: "/docs/unix/tools/dhcpcd" },
        },
        c = {},
        d = [
          {
            value: "HTTP POST with text payload",
            id: "http-post-with-text-payload",
            level: 2,
          },
          {
            value: "HTTP POST with binary payload",
            id: "http-post-with-binary-payload",
            level: 2,
          },
        ],
        u = { toc: d };
      function h(t) {
        var o = t.components,
          e = (0, n.Z)(t, r);
        return (0, l.kt)(
          "wrapper",
          (0, a.Z)({}, u, e, { components: o, mdxType: "MDXLayout" }),
          (0, l.kt)("h1", { id: "curl" }, "cURL"),
          (0, l.kt)(
            "p",
            null,
            (0, l.kt)("strong", { parentName: "p" }, "cURL"),
            " is a tool for sending network requests from within a shell. It supports\ne.g. ",
            (0, l.kt)(
              "a",
              { parentName: "p", href: "/docs/network/protocols/http/" },
              "HTTP"
            ),
            ",\n",
            (0, l.kt)(
              "a",
              { parentName: "p", href: "/docs/network/protocols/ftp" },
              "FTP"
            ),
            " and ",
            (0, l.kt)(
              "a",
              { parentName: "p", href: "/docs/network/protocols/smb" },
              "SMB"
            ),
            "."
          ),
          (0, l.kt)(
            "h2",
            { id: "http-post-with-text-payload" },
            "HTTP POST with text payload"
          ),
          (0, l.kt)(
            "p",
            null,
            "To send a ",
            (0, l.kt)(
              "a",
              { parentName: "p", href: "/docs/programming/data_formats/json" },
              "JSON"
            ),
            " payload"
          ),
          (0, l.kt)(
            "pre",
            null,
            (0, l.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              'curl -X POST localhost\n   -H "Content-Type: application/json"\n   -d \'{"productId": 123456, "quantity": 100}\'\n'
            )
          ),
          (0, l.kt)(
            "h2",
            { id: "http-post-with-binary-payload" },
            "HTTP POST with binary payload"
          ),
          (0, l.kt)(
            "p",
            null,
            "To send a binary payload (using HTTP multipart form data encoding)"
          ),
          (0, l.kt)(
            "pre",
            null,
            (0, l.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "curl -X POST localhost\n   -F file=@my-file\n"
            )
          )
        );
      }
      h.isMDXComponent = !0;
    },
  },
]);
