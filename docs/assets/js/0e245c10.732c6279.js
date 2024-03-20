"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [7631],
  {
    1262: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => c,
          contentTitle: () => l,
          default: () => h,
          frontMatter: () => a,
          metadata: () => p,
          toc: () => u,
        });
      var s = t(7462),
        o = t(3366),
        i = (t(7294), t(3905)),
        r = (t(828), ["components"]),
        a = {},
        l = "SSH",
        p = {
          unversionedId: "network/protocols/ssh",
          id: "network/protocols/ssh",
          title: "SSH",
          description:
            "Secure SHell (SSH) is a cryptographic TCP shell, commonly",
          source: "@site/docs/network/protocols/ssh.md",
          sourceDirName: "network/protocols",
          slug: "/network/protocols/ssh",
          permalink: "/docs/network/protocols/ssh",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "SMTP",
            permalink: "/docs/network/protocols/smtp",
          },
          next: { title: "TCP", permalink: "/docs/network/protocols/tcp" },
        },
        c = {},
        u = [
          {
            value: "Configuring a SSH client",
            id: "configuring-a-ssh-client",
            level: 2,
          },
          {
            value: "Configuring a SSH server",
            id: "configuring-a-ssh-server",
            level: 2,
          },
          {
            value: "Server configurations",
            id: "server-configurations",
            level: 3,
          },
          { value: "Authorized keys", id: "authorized-keys", level: 3 },
          { value: "Best practices", id: "best-practices", level: 2 },
        ],
        d = { toc: u };
      function h(e) {
        var n = e.components,
          t = (0, o.Z)(e, r);
        return (0, i.kt)(
          "wrapper",
          (0, s.Z)({}, d, t, { components: n, mdxType: "MDXLayout" }),
          (0, i.kt)("h1", { id: "ssh" }, "SSH"),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)("strong", { parentName: "p" }, "Secure SHell"),
            " (",
            (0, i.kt)("strong", { parentName: "p" }, "SSH"),
            ") is a cryptographic ",
            (0, i.kt)("a", { parentName: "p", href: "./tcp" }, "TCP"),
            " shell, commonly\nrunning on port 22. SSH relies on\n",
            (0, i.kt)(
              "a",
              {
                parentName: "p",
                href: "../../security/cryptography/encryption",
              },
              "public key encryption"
            ),
            ", where RSA is\ncommon. It is used for running secure shells on remote machines."
          ),
          (0, i.kt)(
            "h2",
            { id: "configuring-a-ssh-client" },
            "Configuring a SSH client"
          ),
          (0, i.kt)(
            "admonition",
            { type: "info" },
            (0, i.kt)(
              "p",
              { parentName: "admonition" },
              "This info relies on the ",
              (0, i.kt)("inlineCode", { parentName: "p" }, "openssh"),
              " implementation."
            )
          ),
          (0, i.kt)(
            "p",
            null,
            "Start by generating a key pair. This can be done using"
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              'ssh-keygen -C "my-comment"\n'
            )
          ),
          (0, i.kt)(
            "p",
            null,
            "This creates a public key in ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "~/.ssh/id_rsa"),
            " unless specified otherwise. The\ncontent of this file should be uploaded to the target server."
          ),
          (0, i.kt)(
            "p",
            null,
            "If having multiple keys or non-standard names, a SSH config is needed. This file\nresides in ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "~/.ssh/config"),
            " (create it if it does not exist). The file should\nconsist of multiple entries of the form:"
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "Host <name>\n  HostName <hostname>\n  IdentityFile <path-private-key>\n"
            )
          ),
          (0, i.kt)(
            "h2",
            { id: "configuring-a-ssh-server" },
            "Configuring a SSH server"
          ),
          (0, i.kt)(
            "admonition",
            { type: "info" },
            (0, i.kt)(
              "p",
              { parentName: "admonition" },
              "This info relies on the ",
              (0, i.kt)("inlineCode", { parentName: "p" }, "openssh"),
              " implementation."
            )
          ),
          (0, i.kt)(
            "p",
            null,
            "Install a SSH server, such as ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "OpenSSH"),
            ". The service should be enabled and\nstarted."
          ),
          (0, i.kt)(
            "h3",
            { id: "server-configurations" },
            "Server configurations"
          ),
          (0, i.kt)(
            "p",
            null,
            "The server settings are usually stored in ",
            (0, i.kt)(
              "inlineCode",
              { parentName: "p" },
              "/etc/ssh/sshd_config"
            ),
            ". One example\nconfiguration"
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-conf" },
              "Port <PORT>\nPasswordAuthentication no\nAllowUsers <USER>\n"
            )
          ),
          (0, i.kt)("h3", { id: "authorized-keys" }, "Authorized keys"),
          (0, i.kt)(
            "p",
            null,
            "Public keys need to be added manually in the file\n",
            (0, i.kt)(
              "inlineCode",
              { parentName: "p" },
              "/home/<USER>/.ssh/authorized_keys"
            ),
            "."
          ),
          (0, i.kt)("h2", { id: "best-practices" }, "Best practices"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              "Run SSH on a non-default high-numbered port to avoid automatic scans and\nexploits."
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              "Set a key phrase for your SSH keys in case they keys are compromised."
            )
          )
        );
      }
      h.isMDXComponent = !0;
    },
  },
]);
