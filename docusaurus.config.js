// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
import math from "remark-math";
import katex from "rehype-katex";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "docs",
  tagline: "My coding docs",
  url: "https://johanbook.com",
  baseUrl: "/docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  onDuplicateRoutes: "throw",
  favicon: "https://johanbook.com/favicon.ico",
  organizationName: "johanbook",
  projectName: "docs",

  markdown: {
    mermaid: true,
  },

  plugins: [
    [
      // Search plugin: https://github.com/gentledepp/docusaurus-search-local
      require.resolve("@gentledepp/docusaurus-search-local"),
      {
        indexBlog: false,
        indexPages: true,
        indexDocSidebarParentCategories: 2,
      },
    ],
  ],

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          rehypePlugins: [katex],
          remarkPlugins: [math],
          routeBasePath: "/",
          showLastUpdateTime: false,
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: [require.resolve("./assets/css/styles.css")],
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  themes: ["@docusaurus/theme-mermaid"],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{ name: "keywords", content: "wiki,programming" }],
      navbar: {
        title: "Johan Book",
        logo: {
          alt: "Site logo",
          src: "https://johanbook.com/fs/logo_light.png",
          srcDark: "https://johanbook.com/fs/logo_dark.png",
          href: "https://johanbook.com",
          target: "_self",
          height: 20,
        },
        items: [
          {
            label: "Coding",
            position: "left",
            to: "/",
          },
          {
            label: "Cooking",
            position: "left",
            target: "_self",
            to: "https://johanbook.com/cooking",
          },
          {
            label: "Workout",
            position: "left",
            target: "_self",
            to: "https://johanbook.com/workout",
          },
        ],
      },
      colorMode: {
        respectPrefersColorScheme: true,
      },
    }),
};

export default config;
