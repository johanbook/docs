# OWASP

The **Open Web Application Security Project** (**OWASP**) is a collection of
common vulnerabilities in web apps.

## 1 - Injection

Command injection in different forms. One example is
[SQLI](./vulnerabilities/sqli).

## 2 - Broken Authentication

If authentication is not working properly.

## 3 - Sensitive Data Exposure

An app exposes sensitive information. One example is
[LFI](./vulnerabilities/lfi).

## 4 - XML Eternal Entity

[XEE](./vulnerabilities/xxe) is a vulnerability in applications that uses XML as
transport protocol. It might expose internal files.

## 5 - Broken Access Control

Attackers can bypass authorization.

## 6 - Security Misconfiguration

This includes abundant privileges, default passwords, etc.

## 7 - Cross Site Scripting

[XSS](./vulnerabilities/xss) is a vulnerability where an attacker can inject
Javascript to the end users of the application.

## 8 - Unsafe Serialization

## 9 - Components With Known Vulnerabilities

This is when an application has a dependency with known vulnerabilities. This is
extremely dangerous as exploits might already be common knowledge.

## 10 - Insufficient Logging And Monitoring

Attackers can go undetected. If detected it is more difficult to do any damage
control. See the [docs on telemetry](../devops/telemetry) on how logging and
monitoring should be done.

The average time for detecting a breach is 200 days.
