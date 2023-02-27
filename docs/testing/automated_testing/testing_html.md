# Testing HTML

Testing web applications is tricky since they are based in
[HTML](../../programming/data_formats/html.md) (testing GUI is general
difficult). One approach to this is DOM-testing, in where one renders a DOM and
runs assertions against it. In order to have fast tests one want to avoid
running them inside a browser - even if it's headless.

One approach to testing HTML is [snapshotting](./snapshots.md).
