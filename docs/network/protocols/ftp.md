# FTP

**File Transfer Protocol** (**FTP**) is an unencrypted protocol for transferring
files. It uses two connections, one for control commands with standard port 21
and one for data transfer on standard port 20.

## Active vs passive

The data connection can either be active (initiated by the FTP server) or
passive (initiated by client). The problem with establishing an active data
connection is that [NAT](../nat) and firewalls might interfere.

## FTPS

There is also **File Transfer Protocol Secure** (**FTPS**) that adds an
encryption layer (in form of TLS).

## SFTP

There is **SSH File Transfer Protocol** (**SFTP**) that is based on the
[SSH](./ssh) protocol.

## Vulnerabilities

FTP can be setup to allow anonymous access using the `anonymous` username.
