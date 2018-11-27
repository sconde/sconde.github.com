---
layout: post
title:  "Mathematica on Rapberry Pi"
date:   2014-01-09 19:57:00 +0700
categories: [python, django]
---

<a href="http://www.raspberrypi.org/archives/5282">Mathematica has graciously offered Mathematica free on Raspberry Pi</a>. To All who loves free stuff, this is one of the best gift to most and all of the openSource community. I am was elated to hear about it and embarked on a course install and test out this gift.

With the appropriate command line (found on the page above), I was able to acquire Mathematica Verison 10
```bash
~ $ /opt/Wolfram/WolframEngine/10.0/
```

After installation, Wolfram should be located under the 'Education menu' in the app launcher. This brings up the engine in a terminal. According to the multiply forums, I should be able to get Mathematica in a GUI form. The GUI wasn't located where it should be.

This is confirmed from within Wolfram
```bash
 ~ $ wolfram 
Wolfram Language (Raspberry Pi Pilot Release)
Copyright 1988-2013 Wolfram Research
Information & help: wolfram.com/raspi

In[1]:= $Version                                                                

Out[1]= 10.0 for Linux ARM (32-bit) (November 19, 2013)

In[2]:=     
```

For more information, see <a href="http://www.walkingrandomly.com/?p=5220">Mike Croucher's post.</a>

Of course I tried seeing if this engine was available on <a href="http://www.udoo.org/features/">UDOO</a> but it wasn't. Oops, wishful thinking

```bash
ubuntu@imx6-qsdl:~$ sudo apt-get install wolfram-engine
Reading package lists... Done
Building dependency tree
Reading state information... Done
E: Unable to locate package wolfram-engine
```
