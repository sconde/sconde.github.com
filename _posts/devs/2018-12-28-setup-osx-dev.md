---
layout: post
title: "Setup OS X Development environments"
tags: osx, homebrew
subtitle: "Development environment set up"
<!--image: /img/hello_world.jpeg-->
---


Back in grad school, even during my time in undergrad, I would always do a
fresh OS install once the academic year has completed and before I had to get
back to research full time again. This was to remove software I no longer
needed (when I was mainly using Windows) that were now **bloatware** and to
extend the life of my precious machine. It's now become a habit for me
unfortunately.

The downside to a complete OS fresh install is that I needed to configure
everything again - my entire development environment! Although I've since
started using `git` to store my [config files](https://github.com/sconde/configs), and Dropbox to backup other
essentials tools/hacks I've amassed through the year, I've often had to look
up many of the installation instructions. In my attempt to journal my
scientific quest more, this post is aimed to help me install necessary development items such as Java Ruby terminal.
<!--chronicles how I've setup my development environment in OS X: -->

Although I don't use many of the tools in my day-to-day activities, I've once used it heavily, depended on them, and feel that I'll be needing them once again in the future. Hopefully with this note, I'll be able to quickly pick and choose which environment I need to set.

On OS X, I'm mostly using `homebrew` to install the majority of the applications.

## Install iTerm2

For the majority of setting up the OS X development environment or going be using the terminal with `homebrew` and a couple of scripts.

So let's go out and install my favorite terminal: [`iTerm`](https://www.iterm2.com/downloads.html)

Once it finishes downloading right click on the file and show in Finder and don't open it from here
but drag it into your Applications folder.
Open it from the applications right click open and accept the unidentified developer and there you go.

Finally, I use the [Dracula theme with iTerm.](https://draculatheme.com/iterm/)

## Installing command-line tools

So the easiest way to install anything is to use [`homebrew`](https://brew.sh/) will install: `Java`, `Mavin`, `Ruby`, `r.p.m.`; just
about anything that we want. For OS X, it is arguably the easiest package management tool out there. Prior to adapting `homebrew` I used [`macport`.](https://www.macports.org/)

Before we install this what we need to do is install the `xcode` command line tools:
```bash
xcode-select --install
```
install and agree to everything. Next up will install homebrew.

## Installing `homebrew`

So what is homebrew? Homebrew is a free and open source software package management system that simplifies
the installation of just about all software.

So how does it work? 
Normally you can install Java and go through the whole process of downloading and moving it and doing
all the hard work.
But instead if you install homebrew you just run a simple command like `brew cask install java` and install
Java.
So it's pretty amazing.


All right so installing homebrew is super easy.
Head over to `brew.sh` and then just simply follow the instructions.
So copy and paste the line into your terminal then hit return
to accept everything.  Give it the `sudo` access and within few seconds, the installation will conclude.
Validate the installation with `brew help`.

## Miscellaneous Applications and Utilities

Couple of my favorite applications like `Sublime Text 3`, `slack`, `Skype`, and Google hangouts.

```bash
brew cask install sublime-text3
```
This may raise an error `No available cask for sublime-text3`.
If so, run `brew install sublime-text3` to search for correct brew formulae and follow the instruction.

To install Google hangout: `brew cask install google-hangouts`

Now for Slack: `brew cask install slack`

Finally for Skype: `brew cask install skype`

## Java Stack

All right now let's go through and install the Java stack: java, intellij, eclipse,  maven and ant.

#### Install Java SDK

You'll see that to use java command line tool you need to install Java.
Since we installed homebrew, it just make a super easy:
```bash
brew cask install java
```

#### Install Maven

All right so now let's go ahead and install maven to see if you already have it installed
```bash
$ mvn
-bash: mvn: command not found
```

The normal way you would install it as you'd
go over to Google and just then google for **Mavin in five minutes**.
But since we have homebrew that just going skip everything and head over to the terminal and type in
`brew install maven`
That's it.

#### Install Ant

All right.
So to continue the Java stack.
Another very common one of a package management tool is going to be `ant`. It's very similar to Maven.
It is a lot older. To install `brew install ant`.


#### Install Eclipse/Intellij

All right using the Java stack you'll need a couple of IDEs.
Usually people will choose between [Intellij](https://www.jetbrains.com/idea/) or [Eclipse](https://www.eclipse.org/). I've come to prefer Intellij.

## Ruby Stack

#### Install RVM
For the Ruby stack, let's go ahead and install RVM: Ruby version manager.
Head over to [`rvm.io`](https://rvm.io/). On the site, follow the installation
via 
```bash
curl -sSL https://get.rvm.io | bash -s stable --rails
```
and source the appropriate script.

A couple of quick commands we can do is we can take `rvm install 2.3.0` to
install ruby version 2.3.0. Running `rvm list` will list all the different
versions of ruby available for use on the system: `rvm use ruby-2.3.0` to
activate and use the specified version.

So if you to install multiple different versions of Ruby `rvm` is the best tool to switch interchangeably.

<!--between them all.-->

#### Instal ruby mine

There's a bunch different IDEs for Ruby.
But just like Java with Intellij,
my favorite for Ruby is [RubyMine from JetBrains](https://www.jetbrains.com/ruby/) and my favorite theme is always Dracula.


## Version Control

#### Git

```bash
brew install git
```
And what's really cool about this is it installs the keychain helper `git-credential-osxkeychain`.
Once you put your credentials in it will remember them. Though I use ssh keys with git.

<!--#### SVN-->

<!--#### SourceTree-->

<!--## DataBases-->

<!--#### Install MongoDB-->

<!--#### RoboMongo-->

<!--#### Postgres-->

<!--#### Sequel Pro-->

<!--## SSH & VPN-->

<!--#### Setup SSH Keys-->

## Mardown

[MacDown](https://macdown.uranusjr.com/) is an open source Markdown editor for macOS, released under the MIT License.
