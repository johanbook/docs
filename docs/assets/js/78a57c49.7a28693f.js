"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [7290],
  {
    7181: (e, a, n) => {
      n.r(a),
        n.d(a, {
          assets: () => c,
          contentTitle: () => r,
          default: () => g,
          frontMatter: () => d,
          metadata: () => s,
          toc: () => p,
        });
      var t = n(7462),
        o = n(3366),
        i = (n(7294), n(3905)),
        l = (n(828), ["components"]),
        d = {},
        r = "Package manager",
        s = {
          unversionedId: "development/package_manager",
          id: "development/package_manager",
          title: "Package manager",
          description:
            "A package manager is a tool for installing software, typically from an",
          source: "@site/docs/development/package_manager.md",
          sourceDirName: "development",
          slug: "/development/package_manager",
          permalink: "/docs/development/package_manager",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Feedback loop",
            permalink: "/docs/development/feedback_loop",
          },
          next: {
            title: "Static code analysis",
            permalink: "/docs/development/static_code_analysis",
          },
        },
        c = {},
        p = [
          {
            value: "Dependency declaration",
            id: "dependency-declaration",
            level: 2,
          },
          { value: "Global dependencies", id: "global-dependencies", level: 2 },
          { value: "Lock files", id: "lock-files", level: 2 },
        ],
        m = { toc: p };
      function g(e) {
        var a = e.components,
          n = (0, o.Z)(e, l);
        return (0, i.kt)(
          "wrapper",
          (0, t.Z)({}, m, n, { components: a, mdxType: "MDXLayout" }),
          (0, i.kt)("h1", { id: "package-manager" }, "Package manager"),
          (0, i.kt)(
            "p",
            null,
            "A ",
            (0, i.kt)("strong", { parentName: "p" }, "package manager"),
            " is a tool for installing software, typically from an\nexternal repository. Most Unix systems and programming languages offer a native\npackage manager. For example, Python has ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "pip"),
            ", Nodejs has ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "npm"),
            " and Ubuntu has\n",
            (0, i.kt)("inlineCode", { parentName: "p" }, "apt"),
            ". As most software projects use some form of external packages, a package\nmanager is facilities one's workflow."
          ),
          (0, i.kt)(
            "h2",
            { id: "dependency-declaration" },
            "Dependency declaration"
          ),
          (0, i.kt)(
            "p",
            null,
            "A package manager typically declares dependencies in some configuration file,\nwhich may or may not support wildcard-like syntax. For example, a ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "npm"),
            "\ndependency declaration might look like"
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-json" },
              '{\n  "name": "node-web-crawler",\n  "version": "1.0.0",\n  "description": "",\n  "dependencies": {\n    "@types/uuid": "^8.3.1",\n    "chalk": "^4.1.0",\n    "commander": "^6.2.0",\n    "jsdom": "^16.4.0",\n    "node-fetch": "^2.6.1",\n    "uuid": "^8.3.1"\n  }\n}\n'
            )
          ),
          (0, i.kt)(
            "p",
            null,
            "Some package managers support declaring dependencies by type, commonly as\ndevelopment dependencies and production dependencies."
          ),
          (0, i.kt)("h2", { id: "global-dependencies" }, "Global dependencies"),
          (0, i.kt)(
            "p",
            null,
            "A ",
            (0, i.kt)("strong", { parentName: "p" }, "global dependency"),
            " is package that exists system-wide, which is in contrast\nto a project dependency that only should be accessible from within the project.\nIt is important that project dependencies are installed as project dependencies\nand not global dependencies in order to avoid version conflicts (and to allow\nreproducibility)."
          ),
          (0, i.kt)(
            "p",
            null,
            "Examples of suitable candidates for global dependencies are system tools and\nproject scaffolding tools."
          ),
          (0, i.kt)("h2", { id: "lock-files" }, "Lock files"),
          (0, i.kt)(
            "p",
            null,
            "A ",
            (0, i.kt)("strong", { parentName: "p" }, "lock file"),
            " is a file used maintained by a package manager that tracks exact\npackage version, hash and implicit dependencies, which might be things that are\ninferred by the package manager. A lock file is crucial for guaranteeing\nreproducibility and dependency integrity. If the package manager allows any\nwildcard-like syntax in the package declaration, then a lock file is a\nrequirement."
          )
        );
      }
      g.isMDXComponent = !0;
    },
  },
]);
