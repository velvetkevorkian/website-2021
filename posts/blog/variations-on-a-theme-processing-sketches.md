---
title: 'Variations on a Theme: Processing Sketches'
abstract: "Using Perlin noise to procedurally generate 2d forms in Processing"
slug: variations-on-a-theme-processing-sketches
type: blog
status: publish
published: 2010-09-08 00:00:00 UTC
tags: processing,code
image: 
position: 
---

For my first post on my new blog I thought I\'d share some of the ideas
I\'ve been playing with for a while. All of these images were created
using [Processing][1] and use [Perlin noise][2]{:
target="_blank"} to generate random but organic looking movement.

The first set of sketches use just four variables, which can be used in
various combinations to generate coordinates, which can be joined by
lines of two different colours.

[![2dLines10](https://farm5.static.flickr.com/4087/4969408008_a34c290310_m.jpg){:
width="240" height="240"}][3]

[![2dLines09](https://farm5.static.flickr.com/4090/4968798687_1301c11bee_m.jpg){:
width="240" height="240"}][4]

[![2dLines08](https://farm5.static.flickr.com/4125/4968798481_4622630d88_m.jpg){:
width="240" height="240"}][5]

[![2dLines06](https://farm5.static.flickr.com/4150/4968797703_378ba5fd9f_m.jpg){:
width="240" height="240"}][6]

This was a fairly straight forward bit of coding, with some pleasingly
elegant results. Click on the pictures above for more and bigger images,
or [check it out in real time at OpenProcessing][7].

The next step was to add the points into an array so they could be
manipulated more easily. I did this as a step to getting this idea to
work in 3d, but it also lets you do some things in 2d that would be
difficult otherwise, like joining the edges together.

[![2dArray9](https://farm5.static.flickr.com/4103/4969410344_246334c7b8_m.jpg){:
width="240" height="240"}][8]

[![2dArray8](https://farm5.static.flickr.com/4104/4969410142_a856d07a53_m.jpg){:
width="240" height="240"}][9]

[![2dArray7](https://farm5.static.flickr.com/4131/4968800949_7a768612b6_m.jpg){:
width="240" height="240"}][10]

[![2dArray1](https://farm5.static.flickr.com/4106/4969408374_cb0daa4bbe_m.jpg){:
width="240" height="240"}][11]

The downside of this method is that it doesn\'t run that well when
there\'s loads of points on screen (we\'re talking about upwards of
20,000 lines on screen at times, unless my maths is wildly off). Using
the OpenGL renderer helps but isn\'t supported by OpenProcessing. [Have
a look at the live sketch][12], and again, there\'s
more and bigger pics if you click on the pictures above.

The next step was to make it 3d. This proved to be far simpler than I
expected; it was just a case of adding an extra set of variables for the
z-axis coordinates. This was also aided greatly by my discovery of the
fantastic [PeasyCam][13] library for Processing. This
lets you use the mouse to control the camera in a very intuitive way.

[![Perlin3DLines7](https://farm5.static.flickr.com/4106/4968803321_0fc7bb3754_m.jpg){:
width="240" height="240"}][14]

[![Perlin3DLines6](https://farm5.static.flickr.com/4125/4969412002_1f3d86c61c_m.jpg){:
width="240" height="240"}][15]

[![Perlin3DLines3](https://farm5.static.flickr.com/4144/4968802139_e292149cfc_m.jpg){:
width="240" height="240"}][16]

[![Perlin3DLines5](https://farm5.static.flickr.com/4107/4969411632_306df67ec2_m.jpg){:
width="240" height="240"}][17]

Check out the rest of the set on Flickr, and have a shot of the [live
applet here][18]. It runs surprisingly smoothly with
Processing\'s default 3d rendering, and it\'s worth trying just to see
how effortless the PeasyCam is in use- highly recommended!

The latest iteration of this principle is to use the points generated as
vertices of a solid shape rather than just lines. In theory, this lets
you do stuff like [this amazing bit of 3d printing][19]{:
target="_blank"} from Toxi. In practice, this is more like planes than
solids at the moment. I added an extra colour for variety here, just for
fun.

[![perlin3dSolid8](https://farm5.static.flickr.com/4106/4968804957_c07c0897a8_m.jpg){:
width="240" height="240"}][20]

[![perlin3dSolid7](https://farm5.static.flickr.com/4153/4968804627_da17deab8e_m.jpg){:
width="240" height="240"}][21]

[![perlin3dSolid3](https://farm5.static.flickr.com/4127/4969412826_5bd5c6183b_m.jpg){:
width="240" height="240"}][22]

<span class="ql-cursor">﻿</span>
[![perlin3dSolid1](https://farm5.static.flickr.com/4128/4968803515_530b43b84f_m.jpg){:
width="240" height="240"}][23]

I was originally hoping to retain the symmetry of the 2d versions in 3d,
but I\'m not quite sure how to achieve that yet. I\'ve not published
this sketch online as it runs pretty badly without OpenGL enabled,
although it works well on my machine. Have a look at the pics anyway,
and feel free to get in touch if you\'re interested in the code
(although it\'s nothing remarkable!).

No doubt I\'ll keep playing with these ideas, so watch this space for
more updates.



[1]: http://processing.org/
[2]: http://en.wikipedia.org/wiki/Perlin_noise/
[3]: https://www.flickr.com/photos/53111802@N05/4969408008/
[4]: http://www.flickr.com/photos/53111802@N05/4968798687/
[5]: https://www.flickr.com/photos/53111802@N05/4968798481/
[6]: http://www.flickr.com/photos/53111802@N05/4968797703/
[7]: http://www.openprocessing.org/visuals/?visualID=11737
[8]: http://www.flickr.com/photos/53111802@N05/4969410344/
[9]: http://www.flickr.com/photos/53111802@N05/4969410142/
[10]: http://www.flickr.com/photos/53111802@N05/4968800949/
[11]: http://www.flickr.com/photos/53111802@N05/4969408374/
[12]: http://www.openprocessing.org/visuals/?visualID=11736
[13]: http://mrfeinberg.com/peasycam/
[14]: http://www.flickr.com/photos/53111802@N05/4968803321/
[15]: http://www.flickr.com/photos/53111802@N05/4969412002/
[16]: http://www.flickr.com/photos/53111802@N05/4968802139/
[17]: http://www.flickr.com/photos/53111802@N05/4969411632/
[18]: http://www.openprocessing.org/visuals/?visualID=11738
[19]: http://www.flickr.com/photos/toxi/sets/72157624686695647/
[20]: http://www.flickr.com/photos/53111802@N05/4968804957/
[21]: http://www.flickr.com/photos/53111802@N05/4968804627/
[22]: http://www.flickr.com/photos/53111802@N05/4969412826/
[23]: http://www.flickr.com/photos/53111802@N05/4968803515/
