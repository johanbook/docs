# Git

**Git** is a version control system (VCS), commonly used for tracking software
source code. It also being used for software configuration, aka Git for devops.

## Merge strategies

There are different strategies for merging branches. In most cases Git will
automatically determine what strategy to use.

### Fast-Forward

If there have only been commits on one of the branches since the last common
commit, one can use fast-forward. Then the branches will be combined to one
common linear history.

### 3-way merge

If there are commits on several branches since the last common commit, a 3-way
merge is suitable. Git will try to decide which lines per file should be used
and if successful creates a merge commit with the result. The merge commit will
have multiple parents creating a non-linear history.

## Rebasing

Rebasing can be used to edit the Git history of a repository.

### Changing author of a commit

If needing to change the author of a commit, e.g. if accidentally exposing a
private email, this can be done on multiple commits using the following command

```sh
git rebase -i HEAD~1 -x git commit --amend --author "Author Name <EMAIL>" --no-edit
```

## Rebasing root commit

To rebase the root commit (e.g. initial commit), do

```sh
git rebase -i --root
```

## Hooks

A **Git hook** is a piece of code that is triggered upon certain git events,
such as pre-commit, pre-push and post-commit. Some common hooks are code
formatting as part of pre-commit and [linting](../development/linting.md) as
part of pre-push.

It is recommended that hooks are installed as part of the software installation
process, preferably by the package manager itself such that the installation
process is deterministic and cannot be bypassed.
