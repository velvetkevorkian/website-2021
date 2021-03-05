---
title: 'Nine words, nine Processing sketches'
abstract: ''
slug: nine-words-nine-processing-sketches
type: blog
status: publish
published: 2010-11-01 00:00:00 UTC
tags: processing,code
image: 
position: 
---

Following on from my [nine images](/blog/nine-words-nine-images/) and
[one video](/blog/9-words-one-video/), the next part of the brief was to
use [Processing][1]{: target="_blank"} to create a response to the same
nine words. Without further ado...

**1: Serendipity**

[![serendipity](https://farm5.static.flickr.com/4091/5136989018_f407b23d44.jpg){:
width="500" height="500"}][2]{: target="_blank"}

I mentioned this [in a previous post][3]{: target="_blank"}, but here it
is again for good measure. It\'s a visualisation of the numbers drawn
over fifty draws of the National Lottery.

**2: Sequential**

This sketch divides the letters from a given word or phrase and
rearranges them in 3d space, joined by bezier curves. This uses the
[PeasyCam][4]{: target="_blank"} library for camera control.

[![sequential](https://farm2.static.flickr.com/1343/5136384855_979f8b03ba.jpg){:
width="500" height="500"}][5]{: target="_blank"}

**3: Loop**

This uses a several looping sections of code to create a repeating
pattern controlled by trigonometry. Changing the values of x and y in
the code produces radically different designs. I spent a morning at the
Glasgow School of Art this week, then came home and developed this
which, completely coincidentally, bears a certain resemblance to
[Charles Rennie Mackintosh\'s geometric roses][6]{: target="_blank"}.
Art imitating life?

[![loop](https://farm5.static.flickr.com/4060/5136987764_cda495b923.jpg){:
width="500" height="500"}][7]{: target="_blank"}

**4: Crash**

I\'ve been trying to use less random or pseudo-random (e.g. Perlin
noise) functions in my coding but this seemed like the right place to
use some randomness. This takes an image (a screenshot from [one of my
earlier posts][8]{: target="_blank"}) and chops random pieces out and
rearranges them over the screen, collage style. I like how there is
still recognisable chunks of the interface present despite the mangling.

[![crash](https://farm2.static.flickr.com/1397/5136381699_fb8d78a7ce.jpg){:
width="500" height="500"}][9]{: target="_blank"}

**5: Ambiguity**

This sketch mashes up two images from my [lottery visualisations
post][3]{: target="_blank"} by taking alternate pixels from each image
and combining them. This process can bring some pretty mad results
depending on what pictures you use as sources. I rather like this one as
it combines two pictures with definite meanings into one with no
discernible meaning!

[![ambiguity](https://farm5.static.flickr.com/4063/5136380395_6d40b73700.jpg){:
width="500" height="500"}][10]{: target="_blank"}

**6: Condition**

This uses the very cool [Geomerative][11]{: target="_blank"} library
which lets you break down shapes (including fonts and vector graphics)
into points. This is actually a still from an animated version which
seems to summarise the sketchy pencil feel you can achieve. If you run
the code, you can switch the drawing style using the space bar.
[![condition](https://farm2.static.flickr.com/1233/5136380769_1eb0daf2d1.jpg){:
width="500" height="300"}][12]{: target="_blank"}

**7: Diaphanous**

This one is pretty similar to some of my [previous Perlin noise
experiments][13]{: target="_blank"}, but it uses bezier curves which
give it a lovely organic feel. It uses the OpenGL renderer as its
painfully slow otherwise.

[![diaphanous](https://farm5.static.flickr.com/4028/5136985834_4ce3e0874a.jpg){:
width="500" height="500"}][14]{: target="_blank"}

**8: Utopia**

OK, time to push the boat out slightly. Number eight is a rendering of
an [IDIC][15]{: target="_blank"} which is a symbol of the logical
foundations of Vulcan philosophy from Star Trek. It also inspired the
sub-title for this blog: Infinite Diversity in Infinite Combination. For
me this is the ideal way of approaching life and art, especially when it
comes to coding and generative art, although I should stress that I
liked logic before I liked Star Trek! Geek out. I looked at this as an
exercise in making sure this design scales to fit the window- as long as
its square, it should display properly regardless of size.

[![utopia](https://farm5.static.flickr.com/4126/5136385925_cd284d0759.jpg){:
width="500" height="500"}][16]{: target="_blank"}

**9: Ephemeral**

Finally for now, another bit of sci-fi homage. Inspired by [this
fantastic scene][17]{: target="_blank"} from the end of Blade Runner, I
wanted to try and capture the spirit of Rutger Hauer\'s monologue. That
scene is mainly defined by his phrasing, which is so difficult to
capture in text, but I tried to capture other elements: the dove
escaping as he dies, the idea of burning out rather than fading away. I
had a much busier version which I actually uploaded (its on my Flickr if
you want to look for it) but this one works better I think. The code is
pretty lengthy/clumsy as I\'ve not yet found a way to process the three
arrays of points together. Again, if you want to run the code you\'ll
need to get the Geomerative library.

[![ephemeral2](https://farm5.static.flickr.com/4130/5137115717_036ec2f0c8.jpg){:
width="500" height="500"}][18]{: target="_blank"}

So, there we are. Please let me know what you think of these pieces, or
if you have any questions or suggestions. Until next time, live long and
prosper!



[1]: http://processing.org/
[2]: http://www.flickr.com/photos/53111802@N05/5136989018/
[3]: http://velvetkevorkian.wordpress.com/2010/10/30/processing-sketches-lottery-number-visualisations/
[4]: http://mrfeinberg.com/peasycam/
[5]: http://www.flickr.com/photos/53111802@N05/5136384855/
[6]: http://2.bp.blogspot.com/_rCAjLvNzsbE/SII5giHbbCI/AAAAAAAAADI/ku6QM_mWclo/s400/mackintosh-roseandteardrop1923fabric.jpg
[7]: http://www.flickr.com/photos/53111802@N05/5136987764/
[8]: http://velvetkevorkian.wordpress.com/2010/09/30/conceptual-sound-early-sketches-i/
[9]: http://www.flickr.com/photos/53111802@N05/5136381699/
[10]: http://www.flickr.com/photos/53111802@N05/5136380395/
[11]: http://www.ricardmarxer.com/geomerative/
[12]: http://www.flickr.com/photos/53111802@N05/5136380769/
[13]: http://velvetkevorkian.wordpress.com/2010/09/08/variations-on-a-theme-processing-sketches/
[14]: http://www.flickr.com/photos/53111802@N05/5136985834/
[15]: http://memory-alpha.org/wiki/IDIC
[16]: http://www.flickr.com/photos/53111802@N05/5136385925/
[17]: http://www.youtube.com/watch?v=NOW4QiOD-oc
[18]: http://www.flickr.com/photos/53111802@N05/5137115717/

