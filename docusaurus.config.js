// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const math = require("remark-math");
const katex = require("rehype-katex");
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const mdxMermaid = require("mdx-mermaid");

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

  plugins: [
    [
      // Seach plugin: https://github.com/cmfcmf/docusaurus-search-local
      require.resolve("@cmfcmf/docusaurus-search-local"),
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
          remarkPlugins: [mdxMermaid, math],
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

  scripts: [
    {
      src: "https://analytics.johanbook.com/js/plausible.js",
      defer: true,
      "data-domain": "johanbook.com",
    },
  ],

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css",
      integrity:
        "sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc",
      crossorigin: "anonymous",
    },
  ],

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
          {
            label: "Projects",
            position: "left",
            target: "_self",
            to: "https://johanbook.com/projects",
          },
        ],
      },
      colorMode: {
        respectPrefersColorScheme: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
