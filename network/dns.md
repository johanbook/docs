# Domain Name System

In order to communicate with another device, such as a website, one needs to
know the target's [IP address](ip_address), however, this has several
difficulties:

- The target's IP address might change (e.g. it can be served by another
  machine).
- IP addresses are very difficult to parse and remember to humans.

To address these weaknesses, one introduced a system to associate names to the
IP addresses, such as `https://my-website.com` corresponds to
`https://127.0.0.1`. This name resolution is handled by a DNS server, which a
machine can connect to in order look up a domain name (that process is called a
NS lookup).

## Record Types

- **A** Points to an IPv4 address.
- **AAAA** Points to an IPv6 address.
- **ALIAS** Points to another DNS name.
- **CNAME** Points to another DNS name. Should not be used for apex domains.
