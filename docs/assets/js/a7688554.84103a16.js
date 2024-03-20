"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [823],
  {
    6303: (e, o, r) => {
      r.r(o),
        r.d(o, {
          assets: () => d,
          contentTitle: () => i,
          default: () => l,
          frontMatter: () => c,
          metadata: () => p,
          toc: () => m,
        });
      var t = r(7462),
        n = r(3366),
        s = (r(7294), r(3905)),
        a = (r(828), ["components"]),
        c = {},
        i = "Docker compose",
        p = {
          unversionedId: "devops/orchestration/docker-compose",
          id: "devops/orchestration/docker-compose",
          title: "Docker compose",
          description: "Docker compose is an orchestration tool for",
          source: "@site/docs/devops/orchestration/docker-compose.md",
          sourceDirName: "devops/orchestration",
          slug: "/devops/orchestration/docker-compose",
          permalink: "/docs/devops/orchestration/docker-compose",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Orchestration",
            permalink: "/docs/devops/orchestration/",
          },
          next: {
            title: "Docker Swarm",
            permalink: "/docs/devops/orchestration/docker-swarm",
          },
        },
        d = {},
        m = [],
        k = { toc: m };
      function l(e) {
        var o = e.components,
          r = (0, n.Z)(e, a);
        return (0, s.kt)(
          "wrapper",
          (0, t.Z)({}, k, r, { components: o, mdxType: "MDXLayout" }),
          (0, s.kt)("h1", { id: "docker-compose" }, "Docker compose"),
          (0, s.kt)(
            "p",
            null,
            (0, s.kt)("strong", { parentName: "p" }, "Docker compose"),
            " is an orchestration tool for\n",
            (0, s.kt)(
              "a",
              { parentName: "p", href: "/docs/devops/containerization/docker" },
              "Docker"
            ),
            ". The desired services and their state\nare specified in a manifest often named ",
            (0, s.kt)("inlineCode", { parentName: "p" }, "docker-compose.yaml"),
            ", for example"
          ),
          (0, s.kt)(
            "pre",
            null,
            (0, s.kt)(
              "code",
              { parentName: "pre", className: "language-yaml" },
              'version: "3.9"\n\nservices:\n  traefik:\n  minio:\n    image: "minio/minio"\n    command:\n      - "server"\n      - "/data"\n      - "--console-address"\n      - ":9001"\n'
            )
          ),
          (0, s.kt)(
            "p",
            null,
            "The stack is started by running ",
            (0, s.kt)("inlineCode", { parentName: "p" }, "docker-compose up"),
            " in the same folder as the\nmanifest."
          ),
          (0, s.kt)(
            "p",
            null,
            "The application can be run either as an attached process or as a\n",
            (0, s.kt)(
              "a",
              { parentName: "p", href: "/docs/unix/daemon" },
              "daemon"
            ),
            "."
          )
        );
      }
      l.isMDXComponent = !0;
    },
  },
]);
