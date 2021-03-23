---
title: 'The Glory'
abstract: "I built some custom visual effects software which was used to make a music video."
slug: the-glory
type: blog
status: publish
published: 2013-03-27 00:00:00 UTC
tags: processing,adam-makarenko,blobscanner,motion-tracking,royal-wood,the-glory,toxiclibs
image: 
position: 
---

![Screenshot from Royal Wood's THe
GLory](https://farm9.staticflickr.com/8091/8594413943_1edcb4824e_b.jpg)

My [St Enoch Square Motion Tracking](/projects/motion-tracking) pieces remain one of the biggest projects I've worked
on, and I'm really pleased that an updated version has now been used in
the video for [Royal Wood's *The Glory*][1],
directed by Adam Makarenko.

You can see the effect in action around the 2:35 mark. Adam contacted me
a few months ago about using the program, and I made some updates to it,
adding things like a functioning interface(!) and support for different
image sizes(!!). I also refactored the Voronoi/Delaunay code to use
[ToxicLibs][2] which made it much more stable, and
updating it for Processing 2.0 made a big increase in speed. I'm hoping
to have an opportunity to develop it further at some point- using
shaders for some if the image processing should make it faster- and a
proper file loader and preset system would make it much more useable.

![Screenshot from Royal Wood's The
Glory](https://farm9.staticflickr.com/8237/8594413911_c5f3404782_b.jpg)

It's really great to see what someone with a bit more artistic vision
can do with tools that you've made, so thanks to Adam for the
opportunity and the great work.

<iframe class="ql-video" allowfullscreen="true" src="https://player.vimeo.com/video/60338437" frameborder="0"></iframe>





[1]: https://vimeo.com/60338437
[2]: http://toxiclibs.org/
