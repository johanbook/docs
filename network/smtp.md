# SMTP

Simple Mail Transfer Protocol (SMTP) is a stateful protocol for mail exchange.

## Commands

- HELO
- MAIL FROM
- RCPT TO
- DATA
- QUIT

## Status codes

Similar to [HTTP](http) each data tranmission has a status code. For example, the code 250 signals OK.

## Example

```
> telnet mail.mydomain.com
220 mail.mydomain.com ESMTP Postfix
> HELO server.otherdomain.com 
250 server.otherdomain.com, I am glad to meet you
> MAIL FROM: <email@email.com>
250 OK
> RCPT TO: <email@email.com>
250 OK
> DATA
354 End data with <CR><LF>.<CR><LF>
> To: "Name" <email@email.com>
> Bcc: "Other Name" <other.email@email.com>
> From: "Name" <email@email.com>
> Date: ...
> Subject: Title
> lorem ipsum
> 
> .
250 OK: queued as 79987
> QUIT
221 Bye
```
