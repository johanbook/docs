"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [607],
  {
    5857: (e, t, a) => {
      a.r(t),
        a.d(t, {
          assets: () => c,
          contentTitle: () => l,
          default: () => p,
          frontMatter: () => s,
          metadata: () => m,
          toc: () => d,
        });
      var o = a(7462),
        i = a(3366),
        r = (a(7294), a(3905)),
        n = (a(828), ["components"]),
        s = {},
        l = "Git",
        m = {
          unversionedId: "devops/vcs/git",
          id: "devops/vcs/git",
          title: "Git",
          description:
            "Git is a Version Control System (VCS) commonly used for tracking software",
          source: "@site/docs/devops/vcs/git.md",
          sourceDirName: "devops/vcs",
          slug: "/devops/vcs/git",
          permalink: "/docs/devops/vcs/git",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: { title: "Uptime", permalink: "/docs/devops/uptime" },
          next: { title: "HDD", permalink: "/docs/hardware/memory/hdd" },
        },
        c = {},
        d = [
          { value: "Configuration", id: "configuration", level: 2 },
          {
            value: "Automatically setting up remote for branches",
            id: "automatically-setting-up-remote-for-branches",
            level: 3,
          },
          { value: "Merge strategies", id: "merge-strategies", level: 2 },
          { value: "Fast-Forward", id: "fast-forward", level: 3 },
          { value: "3-way merge", id: "3-way-merge", level: 3 },
          { value: "Resetting", id: "resetting", level: 2 },
          { value: "Mixed reset", id: "mixed-reset", level: 3 },
          { value: "Soft reset", id: "soft-reset", level: 3 },
          { value: "Hard reset", id: "hard-reset", level: 3 },
          { value: "Rebasing", id: "rebasing", level: 2 },
          {
            value: "Changing author of a commit",
            id: "changing-author-of-a-commit",
            level: 3,
          },
          {
            value: "Rebasing root commit",
            id: "rebasing-root-commit",
            level: 3,
          },
          { value: "Hooks", id: "hooks", level: 2 },
        ],
        g = { toc: d };
      function p(e) {
        var t = e.components,
          a = (0, i.Z)(e, n);
        return (0, r.kt)(
          "wrapper",
          (0, o.Z)({}, g, a, { components: t, mdxType: "MDXLayout" }),
          (0, r.kt)("h1", { id: "git" }, "Git"),
          (0, r.kt)(
            "p",
            null,
            (0, r.kt)("strong", { parentName: "p" }, "Git"),
            " is a Version Control System (VCS) commonly used for tracking software\nsource code. It also being used for software configuration, aka\n",
            (0, r.kt)(
              "a",
              { parentName: "p", href: "/docs/devops/configuration/gitops" },
              "GitOps"
            ),
            "."
          ),
          (0, r.kt)("h2", { id: "configuration" }, "Configuration"),
          (0, r.kt)(
            "p",
            null,
            "There are many available configuration options for Git. There are also different\nlevels of configurations. The levels in order of increasing priority are:"
          ),
          (0, r.kt)(
            "ul",
            null,
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "System"),
              " are system-wide configurations."
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "Global"),
              " are global configurations for the current user."
            ),
            (0, r.kt)(
              "li",
              { parentName: "ul" },
              (0, r.kt)("strong", { parentName: "li" }, "Local"),
              " are configurations for the current repository. These configurations\nare found in ",
              (0, r.kt)("inlineCode", { parentName: "li" }, ".git/config"),
              "."
            )
          ),
          (0, r.kt)(
            "p",
            null,
            "For example, global name and email can be set using"
          ),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              'git config --global user.email "john@doe.com"\ngit config --global user.name "John Doe"\n'
            )
          ),
          (0, r.kt)(
            "h3",
            { id: "automatically-setting-up-remote-for-branches" },
            "Automatically setting up remote for branches"
          ),
          (0, r.kt)(
            "p",
            null,
            "You can configure Git to automatically setup remotes for local branches by\nrunning:"
          ),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "git config --global --add --bool push.autoSetupRemote true\n"
            )
          ),
          (0, r.kt)("h2", { id: "merge-strategies" }, "Merge strategies"),
          (0, r.kt)(
            "p",
            null,
            "There are different strategies for merging branches. In most cases Git will\nautomatically determine what strategy to use."
          ),
          (0, r.kt)("h3", { id: "fast-forward" }, "Fast-Forward"),
          (0, r.kt)(
            "p",
            null,
            "If there have only been commits on one of the branches since the last common\ncommit, one can use fast-forward. Then the branches will be combined to one\ncommon linear history."
          ),
          (0, r.kt)("h3", { id: "3-way-merge" }, "3-way merge"),
          (0, r.kt)(
            "p",
            null,
            "If there are commits on several branches since the last common commit, a 3-way\nmerge is suitable. Git will try to decide which lines per file should be used\nand if successful creates a merge commit with the result. The merge commit will\nhave multiple parents creating a non-linear history."
          ),
          (0, r.kt)("h2", { id: "resetting" }, "Resetting"),
          (0, r.kt)(
            "p",
            null,
            "One can reset a repository to a previous commit using ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "git reset"),
            ". This command\nwill move both HEAD and branch reference to the specified commit (in contrast to\n",
            (0, r.kt)("inlineCode", { parentName: "p" }, "checkout"),
            " which only moves HEAD). How commits preceding the specified commits\nare handled depends on whether it is a soft or hard reset."
          ),
          (0, r.kt)("h3", { id: "mixed-reset" }, "Mixed reset"),
          (0, r.kt)(
            "p",
            null,
            "A soft reset will reset the state of the repository to that of a specified\ncommit. Later changes will be present in the working tree but not staged."
          ),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "git reset --mixed <COMMIT>\n"
            )
          ),
          (0, r.kt)("h3", { id: "soft-reset" }, "Soft reset"),
          (0, r.kt)(
            "p",
            null,
            "A soft reset will reset the state of the repository to that of a specified\ncommit. Later changes are staged."
          ),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "git reset --soft <COMMIT>\n"
            )
          ),
          (0, r.kt)(
            "p",
            null,
            "For example, to undo and edit the previous commit do"
          ),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "git reset --soft HEAD~1\n"
            )
          ),
          (0, r.kt)("h3", { id: "hard-reset" }, "Hard reset"),
          (0, r.kt)(
            "p",
            null,
            "A hard reset will reset the repository state to that of a specified commit.\nLater changes are dropped from working tree and staging tree."
          ),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "git reset --hard <COMMIT>\n"
            )
          ),
          (0, r.kt)("h2", { id: "rebasing" }, "Rebasing"),
          (0, r.kt)(
            "p",
            null,
            "Rebasing can be used to edit the Git history of a repository."
          ),
          (0, r.kt)(
            "h3",
            { id: "changing-author-of-a-commit" },
            "Changing author of a commit"
          ),
          (0, r.kt)(
            "p",
            null,
            "If needing to change the author of a commit, e.g. if accidentally exposing a\nprivate email, this can be done on multiple commits using the following command"
          ),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              'git rebase -i HEAD~1 -x git commit --amend --author "Author Name <EMAIL>" --no-edit\n'
            )
          ),
          (0, r.kt)(
            "h3",
            { id: "rebasing-root-commit" },
            "Rebasing root commit"
          ),
          (0, r.kt)(
            "p",
            null,
            "To rebase the root commit (e.g. initial commit), do"
          ),
          (0, r.kt)(
            "pre",
            null,
            (0, r.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "git rebase -i --root\n"
            )
          ),
          (0, r.kt)("h2", { id: "hooks" }, "Hooks"),
          (0, r.kt)(
            "p",
            null,
            "A ",
            (0, r.kt)("strong", { parentName: "p" }, "Git hook"),
            " is a piece of code that is triggered upon certain git events,\nsuch as pre-commit, pre-push and post-commit. Some common hooks are code\nformatting as part of pre-commit and\n",
            (0, r.kt)(
              "a",
              {
                parentName: "p",
                href: "/docs/development/static_code_analysis",
              },
              "linting"
            ),
            " as part of pre-push."
          ),
          (0, r.kt)(
            "p",
            null,
            "It is recommended that hooks are installed as part of the software installation\nprocess, preferably by the package manager itself such that the installation\nprocess is deterministic and cannot be bypassed."
          )
        );
      }
      p.isMDXComponent = !0;
    },
  },
]);
