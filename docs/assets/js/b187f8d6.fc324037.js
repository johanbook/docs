"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [8243],
  {
    9391: (e, o, n) => {
      n.r(o),
        n.d(o, {
          assets: () => p,
          contentTitle: () => l,
          default: () => m,
          frontMatter: () => i,
          metadata: () => d,
          toc: () => u,
        });
      var t = n(7462),
        s = n(3366),
        a = (n(7294), n(3905)),
        r = (n(828), ["components"]),
        i = {},
        l = "Deployment",
        d = {
          unversionedId: "devops/deployment/README",
          id: "devops/deployment/README",
          title: "Deployment",
          description:
            "Deployment is when the source code of an application (and sometimes its",
          source: "@site/docs/devops/deployment/README.md",
          sourceDirName: "devops/deployment",
          slug: "/devops/deployment/",
          permalink: "/docs/devops/deployment/",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Virtual machine",
            permalink: "/docs/devops/containerization/virtual-machine",
          },
          next: {
            title: "Release models",
            permalink: "/docs/devops/deployment/release-models",
          },
        },
        p = {},
        u = [
          { value: "Linux server", id: "linux-server", level: 2 },
          { value: "Cloud foundry", id: "cloud-foundry", level: 2 },
          { value: "Serverless", id: "serverless", level: 2 },
        ],
        c = { toc: u };
      function m(e) {
        var o = e.components,
          n = (0, s.Z)(e, r);
        return (0, a.kt)(
          "wrapper",
          (0, t.Z)({}, c, n, { components: o, mdxType: "MDXLayout" }),
          (0, a.kt)("h1", { id: "deployment" }, "Deployment"),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)("strong", { parentName: "p" }, "Deployment"),
            " is when the source code of an application (and sometimes its\n",
            (0, a.kt)(
              "a",
              { parentName: "p", href: "/docs/devops/configuration/" },
              "configurations"
            ),
            ") are deployed to server."
          ),
          (0, a.kt)(
            "p",
            null,
            "Once an application is ready for production it is time for deployment. First we\nneed to consider if we need an active server or we are interested in deploying\nonly static files (which would be the case when deploying a webpage)."
          ),
          (0, a.kt)("h2", { id: "linux-server" }, "Linux server"),
          (0, a.kt)(
            "p",
            null,
            "The old school hosting option is to roll your own Linux server. This gives you\nfull control but requires you to manually perform maintenance such as security\nupdates. It is not playing as nicely with ",
            (0, a.kt)("a", { parentName: "p", href: "../ci_cd" }, "CI/CD"),
            " as e.g. Cloud\nFoundry."
          ),
          (0, a.kt)("h2", { id: "cloud-foundry" }, "Cloud foundry"),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)("strong", { parentName: "p" }, "Cloud Foundry"),
            " is a technology for building and deploying apps directly from\nsource code. A Cloud Foundry service analyzes your code to see what language it\nis and then employs a suiting buildpack (a script for compiling the app). It\nthen configures the app, does some health checks and deploys it."
          ),
          (0, a.kt)("h2", { id: "serverless" }, "Serverless"),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)("strong", { parentName: "p" }, "Serverless"),
            " means that one has no specific dedicated server but rather a pool\nof resources. A task is handled as a job that is queued and given to a machine\nonce available. This adds a risk for overhead but one only pays for the actual\nusage. It's also more scalable."
          )
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
