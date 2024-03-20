"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [3733],
  {
    6644: (t, e, a) => {
      a.r(e),
        a.d(e, {
          assets: () => m,
          contentTitle: () => s,
          default: () => k,
          frontMatter: () => p,
          metadata: () => o,
          toc: () => d,
        });
      var n = a(7462),
        r = a(3366),
        i = (a(7294), a(3905)),
        l = (a(828), ["components"]),
        p = {},
        s = "Uptime",
        o = {
          unversionedId: "devops/uptime",
          id: "devops/uptime",
          title: "Uptime",
          description:
            "Uptime is a measure of availability for an application. There are different",
          source: "@site/docs/devops/uptime.md",
          sourceDirName: "devops",
          slug: "/devops/uptime",
          permalink: "/docs/devops/uptime",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "Servers", permalink: "/docs/devops/servers" },
          next: { title: "Git", permalink: "/docs/devops/vcs/git" },
        },
        m = {},
        d = [{ value: "Examples", id: "examples", level: 2 }],
        u = { toc: d };
      function k(t) {
        var e = t.components,
          a = (0, r.Z)(t, l);
        return (0, i.kt)(
          "wrapper",
          (0, n.Z)({}, u, a, { components: e, mdxType: "MDXLayout" }),
          (0, i.kt)("h1", { id: "uptime" }, "Uptime"),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)("strong", { parentName: "p" }, "Uptime"),
            " is a measure of availability for an application. There are different\nuptime requirements for different sectors, for example a banking solution might\nrequire a 99.999% uptime guarantee but a small-scale booking application might\ndo with 99%."
          ),
          (0, i.kt)(
            "p",
            null,
            "When using a cloud provider, uptime guarantees should be stated in the\n",
            (0, i.kt)(
              "a",
              { parentName: "p", href: "/docs/laws/agreements/sla" },
              "SLA"
            ),
            "."
          ),
          (0, i.kt)("h2", { id: "examples" }, "Examples"),
          (0, i.kt)(
            "table",
            null,
            (0, i.kt)(
              "thead",
              { parentName: "table" },
              (0, i.kt)(
                "tr",
                { parentName: "thead" },
                (0, i.kt)("th", { parentName: "tr", align: null }, "SLA"),
                (0, i.kt)(
                  "th",
                  { parentName: "tr", align: null },
                  "Monthly downtime"
                )
              )
            ),
            (0, i.kt)(
              "tbody",
              { parentName: "table" },
              (0, i.kt)(
                "tr",
                { parentName: "tbody" },
                (0, i.kt)("td", { parentName: "tr", align: null }, "90%"),
                (0, i.kt)("td", { parentName: "tr", align: null }, "3 days")
              ),
              (0, i.kt)(
                "tr",
                { parentName: "tbody" },
                (0, i.kt)("td", { parentName: "tr", align: null }, "99%"),
                (0, i.kt)("td", { parentName: "tr", align: null }, "7 hours")
              ),
              (0, i.kt)(
                "tr",
                { parentName: "tbody" },
                (0, i.kt)("td", { parentName: "tr", align: null }, "99.9%"),
                (0, i.kt)("td", { parentName: "tr", align: null }, "1 hour")
              ),
              (0, i.kt)(
                "tr",
                { parentName: "tbody" },
                (0, i.kt)("td", { parentName: "tr", align: null }, "99.99%"),
                (0, i.kt)("td", { parentName: "tr", align: null }, "4 minutes")
              ),
              (0, i.kt)(
                "tr",
                { parentName: "tbody" },
                (0, i.kt)("td", { parentName: "tr", align: null }, "99.999%"),
                (0, i.kt)("td", { parentName: "tr", align: null }, "30 seconds")
              )
            )
          )
        );
      }
      k.isMDXComponent = !0;
    },
  },
]);
