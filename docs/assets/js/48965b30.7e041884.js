"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [574],
  {
    5263: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => c,
          contentTitle: () => d,
          default: () => p,
          frontMatter: () => r,
          metadata: () => l,
          toc: () => u,
        });
      var s = n(7462),
        a = n(3366),
        i = (n(7294), n(3905)),
        o = (n(828), ["components"]),
        r = {},
        d = "IDS",
        l = {
          unversionedId: "security/defense/ids",
          id: "security/defense/ids",
          title: "IDS",
          description:
            "An intrusion detection system (IDS), sometimes intrusion prevention",
          source: "@site/docs/security/defense/ids.md",
          sourceDirName: "security/defense",
          slug: "/security/defense/ids",
          permalink: "/docs/security/defense/ids",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Firewall",
            permalink: "/docs/security/defense/firewall",
          },
          next: {
            title: "Multi-factor authentication",
            permalink: "/docs/security/defense/mfa",
          },
        },
        c = {},
        u = [
          {
            value: "Signature vs anomaly detection",
            id: "signature-vs-anomaly-detection",
            level: 2,
          },
          {
            value: "Signature based detection",
            id: "signature-based-detection",
            level: 3,
          },
          { value: "Anomaly detection", id: "anomaly-detection", level: 3 },
        ],
        m = { toc: u };
      function p(e) {
        var t = e.components,
          n = (0, a.Z)(e, o);
        return (0, i.kt)(
          "wrapper",
          (0, s.Z)({}, m, n, { components: t, mdxType: "MDXLayout" }),
          (0, i.kt)("h1", { id: "ids" }, "IDS"),
          (0, i.kt)(
            "p",
            null,
            "An ",
            (0, i.kt)(
              "strong",
              { parentName: "p" },
              "intrusion detection system"
            ),
            " (",
            (0, i.kt)("strong", { parentName: "p" }, "IDS"),
            "), sometimes ",
            (0, i.kt)(
              "strong",
              { parentName: "p" },
              "intrusion prevention\nsystem"
            ),
            " (",
            (0, i.kt)("strong", { parentName: "p" }, "IPS"),
            "), is a system for detecting intrusion attempts. It does so by\ninspecting e.g. network activity, system calls and hardware metrics."
          ),
          (0, i.kt)(
            "h2",
            { id: "signature-vs-anomaly-detection" },
            "Signature vs anomaly detection"
          ),
          (0, i.kt)(
            "p",
            null,
            "An IDS can use either a signature or anomaly based model."
          ),
          (0, i.kt)(
            "h3",
            { id: "signature-based-detection" },
            "Signature based detection"
          ),
          (0, i.kt)(
            "p",
            null,
            "A signature based model often has no false alarms, however they do not work as\nwell with the latest treats."
          ),
          (0, i.kt)("h3", { id: "anomaly-detection" }, "Anomaly detection"),
          (0, i.kt)(
            "p",
            null,
            "An anomaly based model relies on machine learning. They are better at catching\nnew threats then signature-based detection but have more false alarms."
          )
        );
      }
      p.isMDXComponent = !0;
    },
  },
]);
