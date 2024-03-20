"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [5882],
  {
    779: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => p,
          contentTitle: () => s,
          default: () => m,
          frontMatter: () => r,
          metadata: () => d,
          toc: () => u,
        });
      var a = n(7462),
        o = n(3366),
        i = (n(7294), n(3905)),
        l = (n(828), ["components"]),
        r = {},
        s = "Components",
        d = {
          unversionedId: "ux/components",
          id: "ux/components",
          title: "Components",
          description: "When designing UI, there are recurring components (see",
          source: "@site/docs/ux/components.md",
          sourceDirName: "ux",
          slug: "/ux/components",
          permalink: "/docs/ux/components",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Color encodings",
            permalink: "/docs/ux/colors/encodings",
          },
          next: { title: "Dashboards", permalink: "/docs/ux/dashboarding" },
        },
        p = {},
        u = [
          { value: "Accordion", id: "accordion", level: 2 },
          { value: "Badge", id: "badge", level: 2 },
          { value: "Breadcrumbs", id: "breadcrumbs", level: 2 },
          { value: "Buttons", id: "buttons", level: 2 },
          { value: "Card", id: "card", level: 2 },
          { value: "Drawer", id: "drawer", level: 2 },
          { value: "List", id: "list", level: 2 },
          { value: "Modal window", id: "modal-window", level: 2 },
          { value: "Navigation bar", id: "navigation-bar", level: 2 },
          { value: "Skeleton", id: "skeleton", level: 2 },
          { value: "Slider", id: "slider", level: 2 },
          { value: "Snackbar", id: "snackbar", level: 2 },
          { value: "Table", id: "table", level: 2 },
          { value: "Tooltip", id: "tooltip", level: 2 },
        ],
        c = { toc: u };
      function m(e) {
        var t = e.components,
          n = (0, o.Z)(e, l);
        return (0, i.kt)(
          "wrapper",
          (0, a.Z)({}, c, n, { components: t, mdxType: "MDXLayout" }),
          (0, i.kt)("h1", { id: "components" }, "Components"),
          (0, i.kt)(
            "p",
            null,
            "When designing UI, there are recurring components (see\n",
            (0, i.kt)(
              "a",
              { parentName: "p", href: "/docs/ux/atomic_design" },
              "atomic design"
            ),
            "). Note that the names of these components\ncan vary. I aim to follow the practices of\n",
            (0, i.kt)(
              "a",
              { parentName: "p", href: "https://m3.material.io/components" },
              "Material Design"
            ),
            "."
          ),
          (0, i.kt)("h2", { id: "accordion" }, "Accordion"),
          (0, i.kt)(
            "p",
            null,
            "An ",
            (0, i.kt)("strong", { parentName: "p" }, "acordion"),
            " is a collapsible card. It should be used for information that\ncan be ignored."
          ),
          (0, i.kt)(
            "p",
            null,
            "Accordions should be avoided inside other accordions."
          ),
          (0, i.kt)("h2", { id: "badge" }, "Badge"),
          (0, i.kt)(
            "p",
            null,
            "A ",
            (0, i.kt)("strong", { parentName: "p" }, "badge"),
            " is a component for displaying additional information next to another\ncomponent."
          ),
          (0, i.kt)("h2", { id: "breadcrumbs" }, "Breadcrumbs"),
          (0, i.kt)("p", null, "A set of hierarchical navigation links."),
          (0, i.kt)("h2", { id: "buttons" }, "Buttons"),
          (0, i.kt)(
            "p",
            null,
            "A ",
            (0, i.kt)("strong", { parentName: "p" }, "button"),
            " is a component that can be pressed. Buttons typically comes in the\nfollowing variants depending on how much of the user's attention they are\nintended to draw:"
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)("strong", { parentName: "li" }, "Primary")
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)("strong", { parentName: "li" }, "Secondary")
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)("strong", { parentName: "li" }, "Tertiary")
            )
          ),
          (0, i.kt)("p", null, "Colors are typically"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)("li", { parentName: "ul" }, "Primary"),
            (0, i.kt)("li", { parentName: "ul" }, "Secondary"),
            (0, i.kt)("li", { parentName: "ul" }, "Success"),
            (0, i.kt)("li", { parentName: "ul" }, "Error"),
            (0, i.kt)("li", { parentName: "ul" }, "Warning")
          ),
          (0, i.kt)(
            "p",
            null,
            "Best practices is to disable a button while it is loading. It is also\nrecommended to show a spinner inside (or next to) the button while it is\nloading."
          ),
          (0, i.kt)("h2", { id: "card" }, "Card"),
          (0, i.kt)(
            "p",
            null,
            "A ",
            (0, i.kt)("strong", { parentName: "p" }, "card"),
            " is a section for some dedicated content."
          ),
          (0, i.kt)("h2", { id: "drawer" }, "Drawer"),
          (0, i.kt)(
            "p",
            null,
            "A sidebar that can be opened and closed. Typically used to display navigation or\nsupporting content."
          ),
          (0, i.kt)("h2", { id: "list" }, "List"),
          (0, i.kt)(
            "p",
            null,
            "A list is for displaying data. In contrast to a table, it is now column based.\nFor filtering, one tends to use a separate textfield where one can enter filter\nqueries."
          ),
          (0, i.kt)("h2", { id: "modal-window" }, "Modal window"),
          (0, i.kt)(
            "p",
            null,
            "A ",
            (0, i.kt)("strong", { parentName: "p" }, "modal window"),
            " is a component that overlays all other UI in order to get the\nuser's attention."
          ),
          (0, i.kt)(
            "p",
            null,
            "One should be careful if implementing a modal inside another modal."
          ),
          (0, i.kt)("h2", { id: "navigation-bar" }, "Navigation bar"),
          (0, i.kt)(
            "p",
            null,
            "A ",
            (0, i.kt)("strong", { parentName: "p" }, "navigation bar"),
            " is a component for quickly navigating between multiple\npages."
          ),
          (0, i.kt)("h2", { id: "skeleton" }, "Skeleton"),
          (0, i.kt)(
            "p",
            null,
            "A ",
            (0, i.kt)("strong", { parentName: "p" }, "skeleton"),
            " is a placeholder for another component while that component is\nloading. Skeletons should be used for components which layout cannot be fully\ndetermined until data is loaded. An example case would a list where one cannot\nknow the number of elements until the data is fetched."
          ),
          (0, i.kt)("h2", { id: "slider" }, "Slider"),
          (0, i.kt)(
            "p",
            null,
            "A ",
            (0, i.kt)("strong", { parentName: "p" }, "slider"),
            " is a component for entering a bounded incremental value."
          ),
          (0, i.kt)("h2", { id: "snackbar" }, "Snackbar"),
          (0, i.kt)(
            "p",
            null,
            "A ",
            (0, i.kt)("strong", { parentName: "p" }, "snackbar"),
            ", sometimes called a ",
            (0, i.kt)("strong", { parentName: "p" }, "toast"),
            ", is a small bar that pops up in a\ncorner to display a message. Typically exists in the following variants:"
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)("li", { parentName: "ul" }, "Info"),
            (0, i.kt)("li", { parentName: "ul" }, "Success"),
            (0, i.kt)("li", { parentName: "ul" }, "Error"),
            (0, i.kt)("li", { parentName: "ul" }, "Warning")
          ),
          (0, i.kt)(
            "p",
            null,
            "Generally, snackbar should not be noticed but not be too distracting. If it is\nsomething that requires user input (such as acknowledgement) one should instead\nuse a modal."
          ),
          (0, i.kt)("h2", { id: "table" }, "Table"),
          (0, i.kt)(
            "p",
            null,
            "A ",
            (0, i.kt)("strong", { parentName: "p" }, "table"),
            " is a component for displaying data in columns. It typically supports\nfiltering and sorting on a column basis."
          ),
          (0, i.kt)("p", null, "This is in contrast to a list."),
          (0, i.kt)("h2", { id: "tooltip" }, "Tooltip"),
          (0, i.kt)(
            "p",
            null,
            "A ",
            (0, i.kt)("strong", { parentName: "p" }, "tooltip"),
            " is a component for displaying additional information when another\ncomponent is focused."
          )
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
