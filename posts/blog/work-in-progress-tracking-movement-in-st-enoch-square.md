---
title: 'Work in progress: Tracking movement in St Enoch Square'
abstract: "Outlining the project goals and showing some initial concepts for tracking movement in a public space using Processing."
slug: work-in-progress-tracking-movement-in-st-enoch-square
type: blog
status: publish
published: 2011-05-22 00:00:00 UTC
tags: 
image: 
position: 
---

As part of the final unit on my course, we've been given a general
brief to create a piece based on or in St Enoch Square, one of the
larger public spaces in the centre of Glasgow. I have decided to focus
on the movement of people through the square, and see if I can create
some sort of \"data-driven\" piece using Processing. Here is a video
showing some of the development work I've been doing, using some
footage from a previous project.

<iframe src="https://player.vimeo.com/video/23937318" width="640" height="464" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>

There are a number of iterative steps going on here...

1: The original, untreated footage.

2 and 3: Using a basic frame differencing technique based on the
Processing example by [Golan Levin][1] to identify
movement between frames. There is a threshold filter so that any
movement is one colour and anything still is another colour, with
nothing in between. This makes it easy to go to...

4: Using [BlobScanner ][2] to identify \"blobs\",
i.e. large areas of continuous pixels. Applied to the previous video it
should, in theory, pick out the moving sections, mark the centre of each
and draw a bounding box around it. As you can see, with varying degrees
of success!

5: Draws a line between blob centres when they're within a certain
distance of each other.

6: Shows the bounding box of each blob and the links between them, on
top of the original unprocessed footage.

7: Remove the footage and let the marks remain in place for a while and
fade. This is getting closer to the how I originally envisaged this,
while what went before was more about getting it to work in the first
place. The music is a tune I made about five years ago and forgot about.
The continuing plan for this is to get some better footage (both in
terms of resolution and position) before settling on what the best
output result is likely to be- I quite fancy making some really big
prints with the abstract stuff on it. More to come soon - this project
has to be finished within about ten days. If you have any questions or
comments let me know!



[1]: http://www.flong.com/
[2]: http://sites.google.com/site/blobscanner/
