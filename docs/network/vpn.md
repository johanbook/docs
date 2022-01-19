# VPN

A **Virtual Private Network** (**VPN**) is a technology to join two targets
(which itself can be networks) for private communication over another network
(typically the internet).

## VPN Tunnel

When using a VPN an IP tunnel ([IPSec](./ipsec)) is established between the
client and the VPN server. If someone tries to penetrate the tunnel it will
recreate on a new route.

## Using a VPN for privacy

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
