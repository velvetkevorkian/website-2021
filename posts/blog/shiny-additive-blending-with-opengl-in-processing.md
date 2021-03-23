---
title: 'Shiny: Additive blending with OpenGL in Processing'
abstract: "Mapping colours from a 2d image into a 3d space"
slug: shiny-additive-blending-with-opengl-in-processing
type: blog
status: publish
published: 2011-04-24 00:00:00 UTC
tags: processing,additive-blending,opengl
image: 
position: 
---

This sketch was inspired by a combination of things: the particle
systems chapter draft from [Dan Shiffman\'s forthcoming Nature Of Code
book][1] influenced the additive blending aesthetic,
while I got the idea of a three dimensional \"colour space\" from [this
talk from Mario Klingemann][2].

All that\'s really going on here is the RGB/HSB values of each pixel of
an image are mapped to XYZ coordinates, while the camera rotates round
the centre point. Changing the mode from RGB to HSB creates a different
shape from the same collection of pixels, while the low opacity and
OpenGL blending create a nice glowing effect.

It\'s interesting to see the connections between shades in an image-
almost always a continuous spectrum without large gaps. This runs a bit
slowly, just because of the number of pixels having to be drawn each
frame. I\'d like to try it with a film and see whether the character of
the movement on screen comes through...

<iframe class="ql-video" allowfullscreen="true" src="https://player.vimeo.com/video/22044285" frameborder="0"></iframe>

That\'s all for now, but I have some more adventures in additive
blending particles systems to show soon. Have fun!



[1]: http://www.kickstarter.com/projects/shiffman/the-nature-of-code-book-project
[2]: http://vimeo.com/19745266?ab
