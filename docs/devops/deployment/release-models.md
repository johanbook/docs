# Release models

There different **release models** for how a new release is rolled out. Some
examples are the following:

- **Canary** is when the new deployment is only released to a fraction of one's
  user base. If no errors are encountered, the fractions can be continuously
  increased. If there are errors one can do a rollback. This is the safest
  approach.
- **Blue/Green** is when the new deployment is rolled out in parallel to the old
  and traffic is redirected as the new deployment becomes operational.
- **Rolling** is when servers are taken down sequentially and upgraded.
- **A/B** is similar to canary but more intended for design decisions.
