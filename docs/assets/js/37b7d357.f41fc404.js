"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [5063],
  {
    534: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => l,
          contentTitle: () => c,
          default: () => h,
          frontMatter: () => s,
          metadata: () => d,
          toc: () => p,
        });
      var i = t(7462),
        o = t(3366),
        a = (t(7294), t(3905)),
        r = (t(828), ["components"]),
        s = {},
        c = "Docker",
        d = {
          unversionedId: "devops/containerization/docker",
          id: "devops/containerization/docker",
          title: "Docker",
          description: "Docker is a tool for running virtual machines that",
          source: "@site/docs/devops/containerization/docker.md",
          sourceDirName: "devops/containerization",
          slug: "/devops/containerization/docker",
          permalink: "/docs/devops/containerization/docker",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Secret management",
            permalink: "/docs/devops/configuration/secrets",
          },
          next: {
            title: "Virtual machine",
            permalink: "/docs/devops/containerization/virtual-machine",
          },
        },
        l = {},
        p = [
          { value: "Containers", id: "containers", level: 2 },
          {
            value: "Finding container OS",
            id: "finding-container-os",
            level: 3,
          },
          { value: "DNS", id: "dns", level: 2 },
          { value: "Logging", id: "logging", level: 2 },
        ],
        k = { toc: p };
      function h(e) {
        var n = e.components,
          t = (0, o.Z)(e, r);
        return (0, a.kt)(
          "wrapper",
          (0, i.Z)({}, k, t, { components: n, mdxType: "MDXLayout" }),
          (0, a.kt)("h1", { id: "docker" }, "Docker"),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)("strong", { parentName: "p" }, "Docker"),
            " is a tool for running ",
            (0, a.kt)(
              "a",
              {
                parentName: "p",
                href: "/docs/devops/containerization/virtual-machine",
              },
              "virtual machines"
            ),
            " that\nshare ",
            (0, a.kt)(
              "a",
              { parentName: "p", href: "../../unix/kernel" },
              "kernel processes"
            ),
            " making them more lightweight than\nstandard VMs. This allows for quickly spinning up and down containers, which was\none of the pillars for micro-service oriented architectures became a thing."
          ),
          (0, a.kt)("h2", { id: "containers" }, "Containers"),
          (0, a.kt)(
            "p",
            null,
            "The ",
            (0, a.kt)(
              "a",
              { parentName: "p", href: "../../unix/daemon" },
              "daemon"
            ),
            " that handles creating and destroying containers\nis called ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "containerd"),
            "."
          ),
          (0, a.kt)(
            "h3",
            { id: "finding-container-os" },
            "Finding container OS"
          ),
          (0, a.kt)(
            "p",
            null,
            "Note that since kernel processes are shared running e.g. ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "uname"),
            " inside a\ncontainer will resolve to host details. If the container is Linux-based, try\n",
            (0, a.kt)("inlineCode", { parentName: "p" }, "cat /etc/os-release"),
            "."
          ),
          (0, a.kt)("h2", { id: "dns" }, "DNS"),
          (0, a.kt)(
            "p",
            null,
            "The docker engine also works as a ",
            (0, a.kt)(
              "a",
              { parentName: "p", href: "../../network/protocols/dns" },
              "DNS server"
            ),
            "\nallowing one to resolve container names to\n",
            (0, a.kt)(
              "a",
              { parentName: "p", href: "../../network/ip_address" },
              "IP addresses"
            ),
            " within the network. This is called\n",
            (0, a.kt)(
              "strong",
              { parentName: "p" },
              "automatic service discovery"
            ),
            "."
          ),
          (0, a.kt)("h2", { id: "logging" }, "Logging"),
          (0, a.kt)(
            "p",
            null,
            "Docker uses a JSON logging driver by default that logs to a file\n",
            (0, a.kt)(
              "inlineCode",
              { parentName: "p" },
              "/var/lib/docker/containers/<container-id>/<container-id>-json.log"
            ),
            " on the host\nsystem. There are also other logging drivers that forward logs to third party\nservices for log analysis."
          )
        );
      }
      h.isMDXComponent = !0;
    },
  },
]);
