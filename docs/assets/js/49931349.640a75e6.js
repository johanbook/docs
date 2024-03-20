"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [8271],
  {
    9726: (e, a, t) => {
      t.r(a),
        t.d(a, {
          assets: () => c,
          contentTitle: () => d,
          default: () => g,
          frontMatter: () => s,
          metadata: () => l,
          toc: () => p,
        });
      var n = t(7462),
        o = t(3366),
        r = (t(7294), t(3905)),
        i = (t(828), ["components"]),
        s = {},
        d = "Data",
        l = {
          unversionedId: "ai/data",
          id: "ai/data",
          title: "Data",
          description:
            "Data is crucial for any form of modelling. There are several phases to",
          source: "@site/docs/ai/data.md",
          sourceDirName: "ai",
          slug: "/ai/data",
          permalink: "/docs/ai/data",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "Clustering", permalink: "/docs/ai/clustering" },
          next: {
            title: "Forecasting",
            permalink: "/docs/ai/problem_types/forecasting",
          },
        },
        c = {},
        p = [
          { value: "Governance", id: "governance", level: 2 },
          { value: "Gathering", id: "gathering", level: 2 },
          { value: "Annotation", id: "annotation", level: 2 },
          { value: "Cleaning", id: "cleaning", level: 2 },
        ],
        u = { toc: p };
      function g(e) {
        var a = e.components,
          t = (0, o.Z)(e, i);
        return (0, r.kt)(
          "wrapper",
          (0, n.Z)({}, u, t, { components: a, mdxType: "MDXLayout" }),
          (0, r.kt)("h1", { id: "data" }, "Data"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("strong", { parentName: "p" }, "Data"),
            " is crucial for any form of modelling. There are several phases to\nobtain quality data. Which exact phases are needed depends on the domain of the\ndata."
          ),
          (0, r.kt)(
            "p",
            null,
            "There are various techniques: wrangling, Extract Transform Load (ETL)."
          ),
          (0, r.kt)("h2", { id: "governance" }, "Governance"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("strong", { parentName: "p" }, "Data governance"),
            " is policies for how data can be collected, stored, processed\nand procedure for disposal."
          ),
          (0, r.kt)("h2", { id: "gathering" }, "Gathering"),
          (0, r.kt)(
            "p",
            null,
            "First step is collect the data. This can be done e.g. manually or\nsemi-automatically."
          ),
          (0, r.kt)("h2", { id: "annotation" }, "Annotation"),
          (0, r.kt)(
            "p",
            null,
            "Commonly one needs to annotate the data, meaning one adds additional\ninformation. For ",
            (0, r.kt)(
              "a",
              {
                parentName: "p",
                href: "/docs/ai/problem_types/object_detection",
              },
              "object detection"
            ),
            " one\nwould draw bounding boxes and specify target classes for each box."
          ),
          (0, r.kt)("h2", { id: "cleaning" }, "Cleaning"),
          (0, r.kt)(
            "p",
            null,
            "The gathered data is often dirty and needs to be cleaned. Then one does an\n",
            (0, r.kt)(
              "strong",
              { parentName: "p" },
              "Exploratory Data Analysis"
            ),
            " (",
            (0, r.kt)("strong", { parentName: "p" }, "EDA"),
            ") to see needs to be done."
          )
        );
      }
      g.isMDXComponent = !0;
    },
  },
]);
