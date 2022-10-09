# CI/CD

**Continuous Integration** (**CI**) and **Continuous Deployment** (**CD**) are
the concepts of integrating and deploying code continuously. This is
accomplished by triggering a pipeline on certain events, typically triggered on
pushes or merge requests on a [Git](./git) SaaS. This pipeline can run
[testing](../development/testing/README),
[static code analysis](../development/static_code_analysis.md) and even
deployments.

In continuous integration you typically run a test pipeline to confirm tests
pass. In continuous deployment you also deploy the changes.
