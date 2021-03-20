# VPN

A Virtual Private Network (VPN) acts like a proxy. If A wishes to communicate
with B over a public network, then if C acts as a proxy B cannot tell its
communicating with A. However, this inherently requires A to trust C.

## Providers

There are many providers offering VPN as a service. Here are some things to keep
in mind:

- The provider can log your activity. Since a great portion of the traffic going
  through a VPN provider would be sensitive (activism, journalism or
  criminality) the provider has a incentive to log activity.
- DNS requests can leak to default DNS server. Some VPNs offer a DNS server of
  their own.

The IPs of established providers are often well-known, meaning e.g. an ISP can
deduce you are using a VPN which in turn might draw attention.

Hence it might be more useful to set up your own VPN service on a virtual
private server.
