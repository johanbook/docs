"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [1619],
  {
    1013: (e, t, a) => {
      a.r(t),
        a.d(t, {
          assets: () => m,
          contentTitle: () => o,
          default: () => d,
          frontMatter: () => l,
          metadata: () => p,
          toc: () => c,
        });
      var r = a(7462),
        s = a(3366),
        n = (a(7294), a(3905)),
        i = (a(828), ["components"]),
        l = {},
        o = "SLA",
        p = {
          unversionedId: "laws/agreements/sla",
          id: "laws/agreements/sla",
          title: "SLA",
          description:
            "Service level agreement (SLA) is an agreement to a service provider. It",
          source: "@site/docs/laws/agreements/sla.md",
          sourceDirName: "laws/agreements",
          slug: "/laws/agreements/sla",
          permalink: "/docs/laws/agreements/sla",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "AUP", permalink: "/docs/laws/agreements/aup" },
          next: { title: "SLO", permalink: "/docs/laws/agreements/slo" },
        },
        m = {},
        c = [],
        u = { toc: c };
      function d(e) {
        var t = e.components,
          a = (0, s.Z)(e, i);
        return (0, n.kt)(
          "wrapper",
          (0, r.Z)({}, u, a, { components: t, mdxType: "MDXLayout" }),
          (0, n.kt)("h1", { id: "sla" }, "SLA"),
          (0, n.kt)(
            "p",
            null,
            (0, n.kt)("strong", { parentName: "p" }, "Service level agreement"),
            " (",
            (0, n.kt)("strong", { parentName: "p" }, "SLA"),
            ") is an agreement to a service provider. It\ncan for example outline what compensation you get if service provider fails to\nfulfill to deliver the service (e.g. availability)"
          ),
          (0, n.kt)("p", null, "An SLA may for example cover:"),
          (0, n.kt)(
            "ul",
            null,
            (0, n.kt)(
              "li",
              { parentName: "ul" },
              (0, n.kt)("strong", { parentName: "li" }, "Data portability"),
              " how data is ported to another provider if the need would\narise."
            ),
            (0, n.kt)(
              "li",
              { parentName: "ul" },
              (0, n.kt)("strong", { parentName: "li" }, "Get-out"),
              " process for terminating contract."
            ),
            (0, n.kt)(
              "li",
              { parentName: "ul" },
              (0, n.kt)("strong", { parentName: "li" }, "Penalties"),
              " penalties for failing to uphold contract, e.g. insufficient\navailability."
            ),
            (0, n.kt)(
              "li",
              { parentName: "ul" },
              (0, n.kt)("strong", { parentName: "li" }, "Response times"),
              " to answer issues"
            ),
            (0, n.kt)(
              "li",
              { parentName: "ul" },
              (0, n.kt)("strong", { parentName: "li" }, "Uptime"),
              " what ",
              (0, n.kt)(
                "a",
                { parentName: "li", href: "/docs/devops/uptime" },
                "uptime"
              ),
              " should the service adhere to."
            )
          ),
          (0, n.kt)(
            "p",
            null,
            "A SLA consists of multiple ",
            (0, n.kt)(
              "a",
              { parentName: "p", href: "/docs/laws/agreements/slo" },
              "SLOs"
            ),
            "."
          )
        );
      }
      d.isMDXComponent = !0;
    },
  },
]);
