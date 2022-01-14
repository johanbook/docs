# Git

**Git** is a powerful version control system (VCS).

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
