# Threat modelling

**Threat modelling** is the process of identifying potential and proposing
mitigating actions. There are several frameworks and tools for doing this. Some
useful tools are

- [OWASP](owasp)
- [MITRE ATT3CK Framework](https://attack.mitre.org)

## Trust boundaries

A trust boundary is a boundary in a system where trust changes. This means that
data validation must take place in the node(s) with higher trust.

## CIA

The **CIA** triad is a data-centric framework for modelling threats. It consists
of

- **Confidentiality** means the data cannot be accessed without authentication
  and authorization. This can be accomplished by e.g. implementing multi-factor
  authentication.
- **Integrity** means the data cannot be modified without proper authorization,
  meaning that that authorized users cannot make unauthorized changes.
- **Availability** means that data should be available. Availability would be
  compromised if the service went down due to a
  [DoS attack](./vulnerabilities/dos).

## STRIDE

**STRIDE** is a framework for threat modelling. It focuses on six areas of
threats:

- **Spoofing** is claiming to be something that you are not. It compromises
  authenticity. One example is [CSRF](./vulnerabilities/csrf).
- **Tempering** is unauthorized data alteration. This compromises integrity.
- **Repudiation** is altering logs or auditing of service. Violates
  non-repudiation. One example would be overwriting system logs.
- **Information disclosure** is accessing confidential information. Compromises
  confidentiality.
- **Denial of Service** is bring the service down. Compromises availability. One
  example is a classical [DoS attack](./vulnerabilities/dos) or exploiting
  system weaknesses to use more resources than intended.
- **Elevation of Privilege** is performing unauthorized actions through
  privilege escalation.

## LINDDUN

**LINDDUN** is a framework for identifying threats.

## PASTA

**Process for Attack Simulation and Threat Analysis** (**PASTA**) consists of
seven steps.
