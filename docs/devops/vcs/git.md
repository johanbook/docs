# Git

**Git** is a Version Control System (VCS) commonly used for tracking software
source code. It also being used for software configuration, aka
[GitOps](../configuration/gitops.md).

## Configuration

There are many available configuration options for Git. There are also different
levels of configurations. The levels in order of increasing priority are:

- **System** are system-wide configurations.
- **Global** are global configurations for the current user.
- **Local** are configurations for the current repository. These configurations
  are found in `.git/config`.

For example, global name and email can be set using

```sh
git config --global user.email "john@doe.com"
git config --global user.name "John Doe"
```

### Automatically setting up remote for branches

You can configure Git to automatically setup remotes for local branches by
running:

```sh
git config --global --add --bool push.autoSetupRemote true
```

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

## Resetting

One can reset a repository to a previous commit using `git reset`. This command
will move both HEAD and branch reference to the specified commit (in contrast to
`checkout` which only moves HEAD). How commits preceding the specified commits
are handled depends on whether it is a soft or hard reset.

### Mixed reset

A soft reset will reset the state of the repository to that of a specified
commit. Later changes will be present in the working tree but not staged.

```sh
git reset --mixed <COMMIT>
```

### Soft reset

A soft reset will reset the state of the repository to that of a specified
commit. Later changes are staged.

```sh
git reset --soft <COMMIT>
```

For example, to undo and edit the previous commit do

```sh
git reset --soft HEAD~1
```

### Hard reset

A hard reset will reset the repository state to that of a specified commit.
Later changes are dropped from working tree and staging tree.

```sh
git reset --hard <COMMIT>
```

## Rebasing

Rebasing can be used to edit the Git history of a repository.

### Changing author of a commit

If needing to change the author of a commit, e.g. if accidentally exposing a
private email, this can be done on multiple commits using the following command

```sh
git rebase -i HEAD~1 -x git commit --amend --author "Author Name <EMAIL>" --no-edit
```

### Rebasing root commit

To rebase the root commit (e.g. initial commit), do

```sh
git rebase -i --root
```

## Hooks

A **Git hook** is a piece of code that is triggered upon certain git events,
such as pre-commit, pre-push and post-commit. Some common hooks are code
formatting as part of pre-commit and
[linting](../../development/static_code_analysis.md) as part of pre-push.

It is recommended that hooks are installed as part of the software installation
process, preferably by the package manager itself such that the installation
process is deterministic and cannot be bypassed.
