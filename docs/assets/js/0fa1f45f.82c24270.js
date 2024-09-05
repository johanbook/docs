"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [6552],
  {
    5625: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => d,
          contentTitle: () => l,
          default: () => m,
          frontMatter: () => i,
          metadata: () => p,
          toc: () => c,
        });
      var a = n(7462),
        o = n(3366),
        r = (n(7294), n(3905)),
        s = (n(828), ["components"]),
        i = {},
        l = "HTTP",
        p = {
          unversionedId: "network/protocols/http/README",
          id: "network/protocols/http/README",
          title: "HTTP",
          description:
            "Hyper Text Transport Protocol (HTTP) is a network protocol for",
          source: "@site/docs/network/protocols/http/README.md",
          sourceDirName: "network/protocols/http",
          slug: "/network/protocols/http/",
          permalink: "/docs/network/protocols/http/",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "FTP", permalink: "/docs/network/protocols/ftp" },
          next: {
            title: "HTTP Caching",
            permalink: "/docs/network/protocols/http/caching",
          },
        },
        d = {},
        c = [
          { value: "Methods", id: "methods", level: 2 },
          { value: "HTTPS", id: "https", level: 2 },
          { value: "Encodings", id: "encodings", level: 2 },
          { value: "Form URL Encoding", id: "form-url-encoding", level: 3 },
          { value: "JSON", id: "json", level: 3 },
          { value: "Multipart Form Data", id: "multipart-form-data", level: 3 },
        ],
        u = { toc: c };
      function m(e) {
        var t = e.components,
          n = (0, o.Z)(e, s);
        return (0, r.kt)(
          "wrapper",
          (0, a.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
          (0, r.kt)("h1", { id: "http" }, "HTTP"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)(
              "strong",
              { parentName: "p" },
              "Hyper Text Transport Protocol"
            ),
            " (",
            (0, r.kt)("strong", { parentName: "p" }, "HTTP"),
            ") is a network protocol for\ntransferring text over ",
            (0, r.kt)("a", { parentName: "p", href: "../tcp" }, "TCP"),
            ". It was originally conceived for\ntransferring hypertext (text containing ",
            (0, r.kt)("a", { parentName: "p", href: "../../url" }, "URI"),
            " hyperlinks). The\nprotocol itself is stateless and response-request-based. All responses and\nrequests are encoded in the TCP body. An HTTP connection is established on top\nof TCP and an HTTP status code is received, e.g. ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "HTTP/1.1 200 OK"),
            ". It is\ntypically used to serve ",
            (0, r.kt)(
              "a",
              {
                parentName: "p",
                href: "../../../programming/data_formats/html",
              },
              "HTML"
            ),
            " and host\nexternal APIs."
          ),
          (0, r.kt)("p", null, "An example request can look like this"),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-txt" },
              "GET /\nHTTP/1.1\nHost: www.example.com\n"
            )
          ),
          (0, r.kt)("p", null, "which could obtain the following response"),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-txt" },
              'HTTP/1.1 200 OK\nDate: Mon, 23 May 2005 22:38:34 GMT\nContent-Type: text/html;\ncharset=UTF-8\nContent-Length: 155\nLast-Modified: Wed, 08 Jan 2003 23:11:55\nGMTServer: Apache/1.3.3.7 (Unix) (Red-Hat/Linux)\nETag:"3f80f-1b6-3e1cb03b"\nAccept-Ranges: bytes\nConnection: close\n\n<html>\n  <head>\n    <title>An Example Page</title>\n  </head>\n  <body>\n    <p>\n      Hello World, this is a very simple HTML document.\n    </p>\n  </body>\n</html>\n'
            )
          ),
          (0, r.kt)("p", null, "The HTML content are typically gzipped."),
          (0, r.kt)("h2", { id: "methods" }, "Methods"),
          (0, r.kt)(
            "p",
            null,
            "HTTP used different ",
            (0, r.kt)("em", { parentName: "p" }, "verbs"),
            " for request purpose. The allowed verbs are:"
          ),
          (0, r.kt)(
            "ul",
            null,
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "CONNECT"),
              " Used to establish a connection."
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "DELETE"),
              " Delete a resource."
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "GET"),
              " Get a resource."
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "HEAD"),
              " Get resource headers only. Useful to e.g. validate a cached resource."
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "OPTIONS"),
              " Checks what HTTP verbs a server supports, what ",
              (0, r.kt)("a", { parentName: "li", href: "./cors" }, "CORS"),
              "\npolicy it has, etc. Used in preflighted requests."
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "PATCH"),
              " Modify a resource. In contrast to ",
              (0, r.kt)("inlineCode", { parentName: "li" }, "POST"),
              " and ",
              (0, r.kt)("inlineCode", { parentName: "li" }, "PUT"),
              " where one needs\nsupply the full resource specification, it is sufficient to use a partial in\n",
              (0, r.kt)("inlineCode", { parentName: "li" }, "PATCH"),
              "."
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "POST"),
              " Create a resource."
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "PUT"),
              " Replace a resource."
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "TRACE"),
              " Returns incoming request as response body. Useful for debugging but\nmight allowing this method might introduce security vulnerabilities."
            )
          ),
          (0, r.kt)("h2", { id: "https" }, "HTTPS"),
          (0, r.kt)(
            "p",
            null,
            "HTTPS is an encrypted variant of HTTP using ",
            (0, r.kt)(
              "a",
              { parentName: "p", href: "/docs/network/protocols/tls/" },
              "TLS"
            ),
            " ."
          ),
          (0, r.kt)("h2", { id: "encodings" }, "Encodings"),
          (0, r.kt)(
            "p",
            null,
            "There are a few different common types of content encodings in HTTP (MIMEs). The\ncontent type is specified in the ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "Content-Type"),
            " header."
          ),
          (0, r.kt)("h3", { id: "form-url-encoding" }, "Form URL Encoding"),
          (0, r.kt)(
            "p",
            null,
            "If the body is encoded in same format as URL query parameters, the content type\n",
            (0, r.kt)(
              "inlineCode",
              { parentName: "p" },
              "application/x-www-form-urlencoded"
            ),
            " is used. It can look like"
          ),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "username=janice&password=84hf32khcckk\n"
            )
          ),
          (0, r.kt)(
            "p",
            null,
            "It is the default format used by HTML forms (unless binary data is supplied).\nUnless coding in pure HTML, I discourage using this encoding in preference of\nJSON."
          ),
          (0, r.kt)("h3", { id: "json" }, "JSON"),
          (0, r.kt)(
            "p",
            null,
            "A lot of data transfer over HTTP is in the form of JSON, which has the MIME\n",
            (0, r.kt)("inlineCode", { parentName: "p" }, "application/json"),
            ". A JSON body could look like"
          ),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-json" },
              '{ "body": "cat" }\n'
            )
          ),
          (0, r.kt)("h3", { id: "multipart-form-data" }, "Multipart Form Data"),
          (0, r.kt)(
            "p",
            null,
            "The multipart format, aka ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "multipart/form-data"),
            " is used for binary data. It uses\na boundary which ",
            (0, r.kt)("strong", { parentName: "p" }, "must not"),
            " appear naturally in the transmitted data. It can\nlook like this"
          ),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-txt" },
              '...\ncontent-type: multipart/form-data; boundary=----WebKitFormBoundaryjxASSSgNGXHs9JPt\n\n------WebKitFormBoundaryjxASSSgNGXHs9JPt\nContent-Disposition: form-data; name="text"\n\nheyho where we go\n------WebKitFormBoundaryjxASSSgNGXHs9JPt\nContent-Disposition: form-data; name="more-text"\n\nein zwei drai\n------WebKitFormBoundaryjxASSSgNGXHs9JPt--\n'
            )
          ),
          (0, r.kt)(
            "p",
            null,
            "Each boundary separated section starts with headers on its own, where\n",
            (0, r.kt)("inlineCode", { parentName: "p" }, "Content-Disposition"),
            " states e.g. field name."
          )
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
