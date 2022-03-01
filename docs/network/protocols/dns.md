# DNS

**Domain Name Resolution** (**DNS**) is a protocol for resolving domain names to
[IP addresses](../ip_address). DNS services are typically served on port 53.

## Look up process

When a computer does a DNS lookup, it will send a request to the configured DNS.
This is often a name server handled by one's ISP. If the query is not cached
there, this name server will query a root DNS, which in turns queries TLD
(Top-Level Domain) servers.

## Record Types

The DNS protocol features different records that has different functionality.
Some common record types are

- **A** Points to an IPv4 address.
- **AAAA** Points to an IPv6 address.
- **ALIAS** Points to another DNS name.
- **CNAME** Points to another DNS name. Should not be used for apex domains.
- **SOA** Stores domain metadata. One can manually fetch the SOA record of a
  domain by doing `dig +short soa <DOMAIN>`.
- **DS** Stands for Delegation of Signing and is used in DNSSEC. If there is no
  DS record, then DNSSEC is not enabled.
- **MX** Mail Exchange record for mail servers.
- **NS** Indicates which nameserver is authoritative for a given domain.

## DNSSEC

**DNS Security Extensions** (**DNSSEC**) is a suite of extensions that aim to
add some security to the DNS protocol. It can protect against e.g.
[DNS cache poisoning](../../security/vulnerabilities/dns_poisoning).

DNSSEC relies on a chain of trust as each domain is signed.
