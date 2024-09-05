"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [6748],
  {
    9760: (e, r, s) => {
      s.r(r),
        s.d(r, {
          assets: () => u,
          contentTitle: () => c,
          default: () => v,
          frontMatter: () => a,
          metadata: () => d,
          toc: () => l,
        });
      var t = s(7462),
        i = s(3366),
        n = (s(7294), s(3905)),
        o = (s(828), ["components"]),
        a = {},
        c = "Service mesh",
        d = {
          unversionedId: "devops/infrastructure/service-mesh",
          id: "devops/infrastructure/service-mesh",
          title: "Service mesh",
          description:
            "A Service Mesh is an infrastructure layer that is responsible for service",
          source: "@site/docs/devops/infrastructure/service-mesh.md",
          sourceDirName: "devops/infrastructure",
          slug: "/devops/infrastructure/service-mesh",
          permalink: "/docs/devops/infrastructure/service-mesh",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "CDN",
            permalink: "/docs/devops/infrastructure/cdn",
          },
          next: { title: "Monitoring", permalink: "/docs/devops/monitoring/" },
        },
        u = {},
        l = [
          { value: "Sidecars", id: "sidecars", level: 2 },
          { value: "Other", id: "other", level: 2 },
        ],
        p = { toc: l };
      function v(e) {
        var r = e.components,
          s = (0, i.Z)(e, o);
        return (0, n.kt)(
          "wrapper",
          (0, t.Z)({}, p, s, { components: r, mdxType: "MDXLayout" }),
          (0, n.kt)("h1", { id: "service-mesh" }, "Service mesh"),
          (0, n.kt)(
            "p",
            null,
            "A ",
            (0, n.kt)("strong", { parentName: "p" }, "Service Mesh"),
            " is an infrastructure layer that is responsible for service\ndiscovery and which services as are allowed to communicate with each other. This\nis crucial in micro-service architectures."
          ),
          (0, n.kt)(
            "p",
            null,
            "A service mesh often offers some form of name resolution in queries, alleviating\nindividual services needing to know the IP addresses of other services."
          ),
          (0, n.kt)("h2", { id: "sidecars" }, "Sidecars"),
          (0, n.kt)(
            "p",
            null,
            "Containers are often accompanied by ",
            (0, n.kt)("strong", { parentName: "p" }, "sidecars"),
            "."
          ),
          (0, n.kt)("h2", { id: "other" }, "Other"),
          (0, n.kt)(
            "p",
            null,
            "A service mesh can enable e.g.\n",
            (0, n.kt)(
              "a",
              { parentName: "p", href: "/docs/network/protocols/tls/#mtls" },
              "mTLS"
            ),
            " without needing any\nimplementation in the application itself."
          )
        );
      }
      v.isMDXComponent = !0;
    },
  },
]);
