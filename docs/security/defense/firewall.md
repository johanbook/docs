# Firewall

A **firewall** is a networking middleware that decides what traffic should be
allowed into and out of a network node. A firewall can check

- Communication Protocol
- Ports
- IP Address

It can also use connection tracking.

For Linux based systems there is (as of now) `iptables` that is a complete
firewall. There is also `ufw` for a simplified interface to `iptables`.

## Setup ufw

Here is a standard `ufw` setup

```sh
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh,http,https
```
