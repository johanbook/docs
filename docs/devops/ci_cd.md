# CI/CD

**Continuous Integration** (**CI**) and **Continuous Deployment** (**CD**) are
the concepts of integrating and deploying code continuously. This is
accomplished by triggering a pipeline on certain events, typically triggered on
pushes or merge requests on a [Git](./vcs/git.md) SaaS. This pipeline can run
[testing](../testing/README.md),
[static code analysis](../development/static_code_analysis.md) and even
deployments.

In CI you typically run a test pipeline to confirm tests pass. In CD you also
deploy the changes.
