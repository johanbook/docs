# Threat modelling

**Threat modelling** is the process of identifying potential threats and threat
actors. There are several frameworks and tools for doing this. Some useful tools
are

- [OWASP](owasp)
- [MITRE ATT3CK Framework](https://attack.mitre.org)

## Trust boundaries

A trust boundary is a boundary in a system where trust changes.

## CIA

The **CIA** triad is a data-centric framework for modelling threats.

- **Confidentiality** means the data cannot be accessed without authentication
  and authorization. This can be accomplished by e.g. MFA.
- **Integrity** means the data cannot be modified without proper authorization,
  meaning that that authorized users cannot make unauthorized changes.
- **Availability** means that data should be available. Availability would be
  compromised if the service went down due to a
  [DoS attack](./vulnerabilities/dos).

## STRIDE

**STRIDE** is a framework for identifying threats. It consists of

- **Spoofing** is claiming to be something that you are not. It compromises
  authenticity. One example is CSRF.
- **Tempering** is changing some data. This comromises integrity.
- **Repudiation** is claiming an action never took place. Violates
  non-repudiation. One example would be altering system logs.
- **Information disclosure** is access to confidential information. Compromises
  confidentiality.
- **Denial of Service** is bring the service down. Compromises availability.
- **Elevation of Privilege** is performing unauthorized actions through
  privilege escalation.

## LINDDUN

**LINDDUN** is a framework for identifying threats.

## PASTA

**Process for Attack Simulation and Threat Analysis** (**PASTA**) consists of
seven steps.
