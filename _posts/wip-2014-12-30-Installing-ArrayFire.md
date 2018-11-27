---
layout: post
title:  "Installing ArrayFire"
date:   2014-12-30 18:34:10 +0700
categories: [python, django]
---

[ArrayFire](http://arrayfire.com/) is now opensource!!
<!--<a href="http://arrayfire.com/">ArrayFire</a> is now opensource!!-->

So I wanted to install and test it on my computer. Since they don't yet have the installer for the opensource version, I had to build it from source. Normally for me, this isn't an issue.

I went through the installation instruction on <a href="https://github.com/arrayfire/arrayfire/wiki/Build-Instructions-for-Linux">github/arrayfire</a> for linux OS. Since I've been mostly using CUDA, I decided to only build it with CUDA and not openCL. <a href="https://stackoverflow.com/questions/27707922/error-in-build-stage-with-cuda">Everything went alright until about the 73% mark.</a> It turned out that on the particular machine I was on, apparently "ipv6 broken at googlecode.com" so after I temporarily disabled it.

```bash
sysctl -w net.ipv6.conf.all.disable_ipv6=1
```

After this, I also faced the following error:
```bash
svn: Working copy ‘/myrepo/repodirectory’ locked
svn: run ’svn cleanup’ to remove locks (type ’svn help cleanup’ for details)
```
I had to do a lot of "svn cleanups" and finally, everything decided to work!!

The tests all passed. Now I can mess around arrayfire on my machine. Time to learn and actually get some work done!!!
