# Zero trust networking

**Zero trust networking** (**ZTN**) is an approach where agents on a network are
not trusted by default. It builds on the assumption that one's attackers already
are on one's core network.

ZTN is in contrast to the old cast-and-moat model that typically relies on IP
address based control. However this model has several flaws:

- Does not accommodate for the scenario when the attacker already is on an
  internal network.
- Difficult administer when data is spread across networks, vendors and clouds.

In ZTN, control should be governed by identity.

## Least-privilege

**Least-privilege** is the concept that each agent should have the minimal
privileges possible to perform their task.

## ZTNA

**Zero Trust Network Access** (**ZTNA**) is network model building on ZTN. It
can offer similar functionality as [VPNs](../../network/vpn.md).
