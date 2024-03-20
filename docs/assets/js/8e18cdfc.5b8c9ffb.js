"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [7830],
  {
    687: (e, o, t) => {
      t.r(o),
        t.d(o, {
          assets: () => p,
          contentTitle: () => d,
          default: () => k,
          frontMatter: () => c,
          metadata: () => i,
          toc: () => m,
        });
      var r = t(7462),
        s = t(3366),
        n = (t(7294), t(3905)),
        a = (t(828), ["components"]),
        c = {},
        d = "Docker Swarm",
        i = {
          unversionedId: "devops/orchestration/docker-swarm",
          id: "devops/orchestration/docker-swarm",
          title: "Docker Swarm",
          description:
            "Docker swarm has been deprecated and should not be used for new projects",
          source: "@site/docs/devops/orchestration/docker-swarm.md",
          sourceDirName: "devops/orchestration",
          slug: "/devops/orchestration/docker-swarm",
          permalink: "/docs/devops/orchestration/docker-swarm",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Docker compose",
            permalink: "/docs/devops/orchestration/docker-compose",
          },
          next: {
            title: "Kubernetes",
            permalink: "/docs/devops/orchestration/kubernetes/",
          },
        },
        p = {},
        m = [{ value: "Logging", id: "logging", level: 2 }],
        l = { toc: m };
      function k(e) {
        var o = e.components,
          t = (0, s.Z)(e, a);
        return (0, n.kt)(
          "wrapper",
          (0, r.Z)({}, l, t, { components: o, mdxType: "MDXLayout" }),
          (0, n.kt)("h1", { id: "docker-swarm" }, "Docker Swarm"),
          (0, n.kt)(
            "admonition",
            { type: "danger" },
            (0, n.kt)(
              "p",
              { parentName: "admonition" },
              "Docker swarm has been deprecated and should not be used for new projects"
            )
          ),
          (0, n.kt)(
            "p",
            null,
            (0, n.kt)("strong", { parentName: "p" }, "Docker swarm"),
            " is a distributed orchestration tool for\n",
            (0, n.kt)(
              "a",
              { parentName: "p", href: "/docs/devops/containerization/docker" },
              "Docker"
            ),
            ", similar to\n",
            (0, n.kt)(
              "a",
              {
                parentName: "p",
                href: "/docs/devops/orchestration/docker-compose",
              },
              "Docker compose"
            ),
            ", but more suitable for production\ndeployments as it features cluster management. It is not as full-fledged as\nKubernetes."
          ),
          (0, n.kt)("h2", { id: "logging" }, "Logging"),
          (0, n.kt)(
            "p",
            null,
            (0, n.kt)(
              "a",
              { parentName: "p", href: "/docs/devops/monitoring/logging/" },
              "Logs"
            ),
            " for Docker swarm itself is sent to the\nsystem log and can be viewed with standard tools (e.g.\n",
            (0, n.kt)(
              "a",
              { parentName: "p", href: "/docs/unix/tools/journalctl" },
              "journalctl"
            ),
            "."
          ),
          (0, n.kt)(
            "p",
            null,
            "Log to STDOUT/STDERR from the containers are contained in the Docker log."
          )
        );
      }
      k.isMDXComponent = !0;
    },
  },
]);
