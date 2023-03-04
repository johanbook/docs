# GitOps

**GitOps**, also **Git for devops**, is approach where on uses
[Git](../vcs/git.md) for configuring infrastructure. This can be done with e.g.
[Kubernetes](../orchestration/kubernetes/README.md). The advantage of using
GitOps is that configurations can have code review practices and supports
rollbacks.

## Components

In GitOps, the Git repository is the single source of truth. Changes are
deployed using a [CD](../ci_cd.md) pipeline.
