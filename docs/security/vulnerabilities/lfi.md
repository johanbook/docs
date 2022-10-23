# LFI

**Local File Inclusion** (**LFI**) is a vulnerability where a server exposes
local files not meant to be exposed. It can typically be found in
[HTTP](../../network/protocols/http/README.md) servers that allow querying files
through either path or query parameters in the [URL](../../network/url.md).

## Example

Consider the following file system

```txt
root
|--etc
|  `--passwd
`--srv
   `--www
      `--index.html
```

Assume we have a file server that serves `/srv/www/index.html` when requesting
the path `/index.html`. If the server is vulnerable to LFI, it can be possible
to query `/etc/passwd` through requesting e.g. `/../../etc/passwd`.

## Countermeasures

When serving files it is important to

- served files should be limited only to intended directory.
- file paths to be properly sanitized, e.g. `..` syntax should be ignored or
  disallowed.
