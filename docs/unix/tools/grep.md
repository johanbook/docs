# grep

**grep** is a tooling for searching a text stream. Although there are faster
text stream searchers, grep is found on most Linux distros, making it a reliable
choice.

## Grepping files for search term

One can e.g. grep multiple files using [find](./find.md) like so:

```sh
find . -name "*.html" | xargs grep
```
