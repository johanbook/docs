"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [8906],
  {
    544: (e, t, o) => {
      o.r(t),
        o.d(t, {
          assets: () => u,
          contentTitle: () => c,
          default: () => h,
          frontMatter: () => r,
          metadata: () => s,
          toc: () => d,
        });
      var n = o(7462),
        l = o(3366),
        a = (o(7294), o(3905)),
        i = (o(828), ["components"]),
        r = {},
        c = "bluetoothctl",
        s = {
          unversionedId: "unix/tools/bluetoothctl",
          id: "unix/tools/bluetoothctl",
          title: "bluetoothctl",
          description: "bluetoothctl is a tool for interacting with",
          source: "@site/docs/unix/tools/bluetoothctl.md",
          sourceDirName: "unix/tools",
          slug: "/unix/tools/bluetoothctl",
          permalink: "/docs/unix/tools/bluetoothctl",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "Processes", permalink: "/docs/unix/processes" },
          next: { title: "cURL", permalink: "/docs/unix/tools/curl" },
        },
        u = {},
        d = [
          { value: "Enabling Bluetooth", id: "enabling-bluetooth", level: 2 },
          { value: "Pairing a device", id: "pairing-a-device", level: 2 },
          {
            value: "Connecting to a paired device",
            id: "connecting-to-a-paired-device",
            level: 2,
          },
        ],
        p = { toc: d };
      function h(e) {
        var t = e.components,
          o = (0, l.Z)(e, i);
        return (0, a.kt)(
          "wrapper",
          (0, n.Z)({}, p, o, { components: t, mdxType: "MDXLayout" }),
          (0, a.kt)("h1", { id: "bluetoothctl" }, "bluetoothctl"),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)("strong", { parentName: "p" }, "bluetoothctl"),
            " is a tool for interacting with\n",
            (0, a.kt)(
              "a",
              { parentName: "p", href: "/docs/network/protocols/bluetooth" },
              "bluetooth"
            ),
            " devices."
          ),
          (0, a.kt)("h2", { id: "enabling-bluetooth" }, "Enabling Bluetooth"),
          (0, a.kt)(
            "p",
            null,
            "Begin by starting the bluetooth service. For ",
            (0, a.kt)(
              "a",
              { parentName: "p", href: "/docs/unix/tools/systemd" },
              "systemd"
            ),
            ", this can\nbe done as"
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "sudo systemctl start bluetooth.service\n"
            )
          ),
          (0, a.kt)(
            "p",
            null,
            "Further, check ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "rfkill"),
            " to make sure bluetooth is not blocked."
          ),
          (0, a.kt)("p", null, "Lastly, enter a bluetoothctl shell and run"),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "power on\nagent on\n"
            )
          ),
          (0, a.kt)("h2", { id: "pairing-a-device" }, "Pairing a device"),
          (0, a.kt)("p", null, "Enter a bluetoothctl shell and"),
          (0, a.kt)(
            "ol",
            null,
            (0, a.kt)(
              "li",
              { parentName: "ol" },
              "Run ",
              (0, a.kt)("inlineCode", { parentName: "li" }, "scan on"),
              " to start scanning for devices"
            ),
            (0, a.kt)(
              "li",
              { parentName: "ol" },
              "Run ",
              (0, a.kt)("inlineCode", { parentName: "li" }, "pair <id>"),
              " when device is identified"
            )
          ),
          (0, a.kt)(
            "h2",
            { id: "connecting-to-a-paired-device" },
            "Connecting to a paired device"
          ),
          (0, a.kt)(
            "p",
            null,
            "To connect to a paired device, enter a bluetoothctl shell by executing\n",
            (0, a.kt)("inlineCode", { parentName: "p" }, "bluetoothctl"),
            " and run"
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "connect <id>\n"
            )
          )
        );
      }
      h.isMDXComponent = !0;
    },
  },
]);
