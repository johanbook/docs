# TLS

**Transport Layer Security** (**TLS**) is an encryption protocol that supersedes
SSL. It enhances all three attributes in the
[CIA triad](../../../security/threat_modelling#cia). TLS uses
[certificates](./certificate) in order to verify public keys.

## TLS Handshake

When client establishes connection to server, the server responds with its
certificate containing its public key. Client generates premaster secret
encrypted with the server's public key and sends to server. Both client and
server can then generate the same symmetric key, which will be used during the
session.

## Termination point

Somewhere in the system incoming data need to decrypted and outgoing data to be
encrypted. This is called a termination point (sometimes SSL termination).
Wherein the system this should happen is interesting from a system's design
perspective.

## mTLS

mTLS is a version of TLS for mutual authentication. This is in contrast to
standard TLS where only the server authenticates itself.
