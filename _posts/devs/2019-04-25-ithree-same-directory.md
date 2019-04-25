---
layout: post
title: "Opening new i3 terminals in the same working directory"
---

I've recently started using i3 and I absolutely love it.
I quickly got annoyed with having to `cd` to the current directory each time I opened a new pane.

Simple fix/hack: add the following to my `PROMPT_COMMAND`

```bash
pwd > /tmp/whereami
```

This is to log my current working directory to a tmp file. A single modification my i3 config file
```bash
bindsym $mod+Return exec i3-sensible-terminal --working-directory=$(cat /tmp/whereami)
```

ensures that I always start `gnome-terminal`, ( `i3-sensible-terminal = $TERMINAL` ) for me, in the last logged directory.

I'm sure there's a better way to this. For now, this gets the job done for me.
