"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [4228],
  {
    7044: (e, t, a) => {
      a.r(t),
        a.d(t, {
          assets: () => d,
          contentTitle: () => s,
          default: () => u,
          frontMatter: () => r,
          metadata: () => m,
          toc: () => p,
        });
      var n = a(7462),
        o = a(3366),
        i = (a(7294), a(3905)),
        l = (a(828), ["components"]),
        r = {},
        s = "SMTP",
        m = {
          unversionedId: "network/protocols/smtp",
          id: "network/protocols/smtp",
          title: "SMTP",
          description:
            "Simple Mail Transfer Protocol (SMTP) is a stateful protocol for email",
          source: "@site/docs/network/protocols/smtp.md",
          sourceDirName: "network/protocols",
          slug: "/network/protocols/smtp",
          permalink: "/docs/network/protocols/smtp",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "SMB", permalink: "/docs/network/protocols/smb" },
          next: { title: "SSH", permalink: "/docs/network/protocols/ssh" },
        },
        d = {},
        p = [
          { value: "Commands", id: "commands", level: 2 },
          { value: "Status codes", id: "status-codes", level: 2 },
          { value: "Example", id: "example", level: 2 },
          { value: "Additional Security", id: "additional-security", level: 2 },
          { value: "SPF", id: "spf", level: 3 },
          { value: "DKIM", id: "dkim", level: 3 },
          { value: "DMARC", id: "dmarc", level: 3 },
          { value: "Enumeration", id: "enumeration", level: 2 },
        ],
        c = { toc: p };
      function u(e) {
        var t = e.components,
          a = (0, o.Z)(e, l);
        return (0, i.kt)(
          "wrapper",
          (0, n.Z)({}, c, a, { components: t, mdxType: "MDXLayout" }),
          (0, i.kt)("h1", { id: "smtp" }, "SMTP"),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)(
              "strong",
              { parentName: "p" },
              "Simple Mail Transfer Protocol"
            ),
            " (",
            (0, i.kt)("strong", { parentName: "p" }, "SMTP"),
            ") is a stateful protocol for email\nexchange."
          ),
          (0, i.kt)("h2", { id: "commands" }, "Commands"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)("inlineCode", { parentName: "li" }, "HELO"),
              ": Present own identity."
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)("inlineCode", { parentName: "li" }, "MAIL FROM"),
              ": Present own email address."
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)("inlineCode", { parentName: "li" }, "RCPT TO"),
              ": Send target email address."
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)("inlineCode", { parentName: "li" }, "DATA"),
              ": Send data."
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)("inlineCode", { parentName: "li" }, "QUIT"),
              ": Cancel connection."
            )
          ),
          (0, i.kt)("h2", { id: "status-codes" }, "Status codes"),
          (0, i.kt)(
            "p",
            null,
            "Similar to ",
            (0, i.kt)(
              "a",
              { parentName: "p", href: "/docs/network/protocols/http/" },
              "HTTP"
            ),
            " each data transmission has a status code.\nFor example, the code 250 signals OK."
          ),
          (0, i.kt)("h2", { id: "example" }, "Example"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              '> telnet mail.mydomain.com\n220 mail.mydomain.com ESMTP Postfix\n> HELO server.otherdomain.com\n250 server.otherdomain.com, I am glad to meet you\n> MAIL FROM: <email@email.com>\n250 OK\n> RCPT TO: <email@email.com>\n250 OK\n> DATA\n354 End data with <CR><LF>.<CR><LF>\n> To: "Name" <email@email.com>\n> Bcc: "Other Name" <other.email@email.com>\n> From: "Name" <email@email.com>\n> Date: ...\n> Subject: Title\n> lorem ipsum\n>\n> .\n250 OK: queued as 79987\n> QUIT\n221 Bye\n'
            )
          ),
          (0, i.kt)("h2", { id: "additional-security" }, "Additional Security"),
          (0, i.kt)(
            "p",
            null,
            "As with many web protocols, SMTP was not designed with security in mind. Here we\nwill examine some additional methods for validating email authenticity and\nprohibit email spoofing."
          ),
          (0, i.kt)("h3", { id: "spf" }, "SPF"),
          (0, i.kt)("p", null, "SPF (Sender Policy Framework)"),
          (0, i.kt)(
            "p",
            null,
            "Has TXT record on the domain that might look like"
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "v=spf1 -all\n"
            )
          ),
          (0, i.kt)("h3", { id: "dkim" }, "DKIM"),
          (0, i.kt)(
            "p",
            null,
            "DKIM (Domain Keys Identified Mail) uses digital signatures where the public key\nis distributed via a record on ",
            (0, i.kt)(
              "inlineCode",
              { parentName: "p" },
              "selector._domainkey.example.com"
            ),
            " (typically a\nCNAME record)."
          ),
          (0, i.kt)("h3", { id: "dmarc" }, "DMARC"),
          (0, i.kt)(
            "p",
            null,
            "DMARC is a policy for how email that fail either SPF or DKIM should be handled.\nOne can configure receiving mail server to send back reports on failed checks."
          ),
          (0, i.kt)(
            "p",
            null,
            "DMARC uses a TXT record at ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "_dmarc.example.com"),
            " TXT which might look like"
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              '"v=DMARC1; p=none"\n'
            )
          ),
          (0, i.kt)("h2", { id: "enumeration" }, "Enumeration"),
          (0, i.kt)(
            "p",
            null,
            "Metasploit has the modules ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "smtp_version"),
            " and ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "smtp_enum"),
            " for enumeration."
          )
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
