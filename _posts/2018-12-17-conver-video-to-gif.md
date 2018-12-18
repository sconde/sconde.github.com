---
layout: post
title: "Convert Video to GIF"
<!--image: /img/hello_world.jpeg-->
---

GIFs are popular now than before. They are useful because many media players
like Real Video Player, Windows Media and other formats required a special
codec and/or browser plugin. Though better video stands now exists in modern
day browsers, GIFs still remain popular.

There are many utilities that are able to convert videos to GIFs. I use
[`ffmpeg`](https://www.ffmpeg.org/).

## Installation

On Ubuntu:
```bash
sudo add-apt-repository ppa:mc3man/trusty-media  
sudo apt-get update  
sudo apt-get install ffmpeg  
sudo apt-get install frei0r-plugins  
```
<!--TODO: what does the last command do? Is it needed?-->

On OS X, I use [`brew`](https://brew.sh/), similar to MacPorts, a Linux like package (formulas in the Homebrew's language)manager with a
lot of useful tools and simplifies installations.
```bash
brew doctor # check installation was successful and installation of formulas (packages) will work
brew options ffmpeg # shows all available options for the formula being installed
brew install ffmpeg # add other desired options
```

For installation on the system running RHEL 7, [I followed this Stack Overflow answer:](https://stackoverflow.com/a/51100289/2943424)
```bash
yum install https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
yum-config-manager --add-repo https://negativo17.org/repos/epel-multimedia.repo
yum install ffmpeg
```

## Convert Video to GIF

It's quite easy to make the conversion with `ffmpeg`:
```bash
ffmpeg -i <video-filename> <gif-filename>
```

For a more control conversion:
```bash
ffmpeg -t 3 -ss 00:00:02 -i <video-filename> <gif-filename>
```
This directs `ffmpeg` to create a 3 seconds long GIF starting at 2 seconds into the video.
With `ffmpeg`, if you're not happy with the default quality, you can configure the bitrate:

```bash
ffmpeg -i <video-filename> -b 2048k <gif-filename>
```

Of course `ffmpeg` allows bidirectional conversion: you can convert videos to GIFs, and GIFs to videos.

## References

- [DWB: CConvert Video to GIF or GIF to Video](https://davidwalsh.name/convert-video-gif)
- [Rene Calles: How to install ffmpeg on Mac OS X](http://www.renevolution.com/ffmpeg/2013/03/16/how-to-install-ffmpeg-on-mac-os-x.html)
