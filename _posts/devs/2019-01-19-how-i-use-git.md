---
layout: post
title: "How I Use Git"
tags: git
subtitle: "Version control"
<!--image: /img/hello_world.jpeg-->
---

Overtime, I've collected a lot of git aliases and adopted some recommended git workflow. This post summarizes how I now use git for almost everything.

I track almost all my dot files in [a config repo on Github](https://github.com/sconde/configs).

## Git diff with Matlab package directory

While in grad school, I wrote a lot Matlab codes. Ultimately, I attempted to
unify most of the codes and developed an object-oriented MATLAB "toolbox" for quickly implementing and testing numerical methods on a set of example problems using a variety of Finite Difference based spatial discretizations including the ENO and WENO.
<!--I used this toolbox to confirm the order of new multi-step, multi-stage SSP methods as well as to investigate other properties.-->

At the time, folders containing class definitions in Matlab had a special character prefix, e.g. `+Dir01/file.m`.
A normal `git diff` had issue with this naming convention, causing errors such
as
```bash
errr while processing command line Not an editor command +Dir01/file.m
```

The following git alias, [courtesy of stackoverflow](https://stackoverflow.com/a/37175487/2943424) helped resolve this issue

```bash
[difftool "vimdiff"]
    cmd = vimdiff -- \"$LOCAL\" \"$REMOTE\"
```

## Working with branches

I now use the [feature branch workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow):  all feature development take place in a dedicated branch and not the **master** branch.
When it comes to integrating the feature branch into **master**, I up for the `rebase` approach. There are many who prefers the `merge` approach over `rebase`, and vice versa.
<!--Similar to the [`vim` vs. `emacs`](https://en.wikipedia.org/wiki/Editor_war), there are those who prefer `merge` over `rebase`. -->
While working on a moderate-sized project, I prefer rebasing as it preserves a clean project history.
<!--Given the size of the project/contributors, it's oven easier for me to maintain the conflicts.-->
I have in my `.gitconfig` the following alias:
```bash
rb = !git branch before-rebase-$(date +"%A-%F-%H_%M")-$(git rev-parse --abbrev-ref HEAD) && git rebase
```

This creates a temporary branch prefixed with `before-rebase` with the date and time and the current branch. This way, if I mess up resolving any conflicts, I can reset and restart again.

## References

- [Version Control with Git: Powerful tools and techniques for collaborative software development](https://www.amazon.com/Version-Control-Git-collaborative-development-ebook/dp/B008Y4OR3A)
- [Git: Version Control for Everyone](https://www.amazon.com/Git-Version-Everyone-Ravishankar-Somasundaram-ebook/dp/B00B5RIS5G)
- [Professional Git](https://www.amazon.com/Professional-Git-Brent-Laster-ebook/dp/B01NBEQCA1)
- [Git Version Control Cookbook: Leverage version control to transform your development workflow and boost productivity](https://www.amazon.com/Git-Version-Control-Cookbook-productivity-ebook/dp/B07DT9DHH4)
- [HugoGiraudel/dotfiles](https://github.com/HugoGiraudel/dotfiles/blob/master/.bashrc)
- [Follow these simple rules and you’ll become a Git and GitHub master](https://medium.freecodecamp.org/follow-these-simple-rules-and-youll-become-a-git-and-github-master-e1045057468f)
- [A QUICK GUIDE TO GIT](https://flaviocopes.com/git/)
- [Now that you’re not afraid of GIT anymore, here’s how to leverage what you know](https://medium.freecodecamp.org/now-that-youre-not-afraid-of-git-anymore-here-s-how-to-leverage-what-you-know-11e710c7f37b)
- [Terrible Ideas in Git](https://www.linuxjournal.com/content/terrible-ideas-git)
- [Five Key Git Concepts Explained the Hard Way](https://zwischenzugs.com/2018/03/14/five-key-git-concepts-explained-the-hard-way/amp/)
- [Please, oh please, use git pull --rebase](https://coderwall.com/p/7aymfa/please-oh-please-use-git-pull-rebase)
- [Git - When to Merge vs. When to Rebase](https://www.derekgourlay.com/blog/git-when-to-merge-vs-when-to-rebase/)
- [Git Merge vs Git Rebase](https://dev.to/neshaz/git-merge-vs-git-rebase-5134)
- [Why you should stop using Git rebase](https://medium.com/@fredrikmorken/why-you-should-stop-using-git-rebase-5552bee4fed1)
- [GitHub and Git Setup and Essentials](https://www.robinwieruch.de/git-essential-commands/)
- [https://www.keycdn.com/blog/git-cheat-sheet](https://www.keycdn.com/blog/git-cheat-sheet)
