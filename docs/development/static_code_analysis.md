# Static code analysis

**Static Code Analysis**, also known as **linting**, is an analysis that is
typically run on a program's source code to find potential bugs, formatting
issues and undesirable patterns. Static code analysis should be run either as
part of a [Git hook](../devops/vcs/git.md#hooks) or as part of a
[CI pipeline](../devops/ci_cd.md).

## Quality gate

A **quality gate** is a threshold the code must pass when being linted.
