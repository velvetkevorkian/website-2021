---
title: 'HD Movement Tracking: further and final iteration'
abstract: "The final outcome of my Computer Art and Design course, featuring algorithmic prints and videos generated using Processing."
slug: hd-movement-tracking-further-and-final-iteration
type: blog
status: publish
published: 2011-06-16 00:00:00 UTC
tags: processing,code,computer-vision,movement-tracking
image: 
position: 
---

Well, the end of year show has come and gone, and all that remains is
the write up. Here's a quick run down of the work that I showed and
some of the development that went into it. I'll also show the code I
cobbled together from other peoples' code wrote to do it. If you've
not seen it already, you might want to take a look at the
[first](/blog/work-in-progress-tracking-movement-in-st-enoch-square/) and
[second](/blog/hd-movement-tracking-first-iteration/)
posts that show the earlier stages. Done? Onwards!

To recap slightly, the first step is to compare two adjacent frames to
identify pixels that have changed. The algorithm I used for that was
taken directly from the frame differencing example that comes in the
Processing examples. Then we need to threshold that, so anything that
has changed is white and anything that hasn't is black. Here's a
single frame with this process applied:

[![10](/images/10_5837152411_o.jpg)][1]

Here's a version (in opposite colours) where movement leaves a trail
over several frames:

[![11](/images/11_5837152807_o.jpg)][2]

Once we have a nice clean monochrome image we can run [BlobScanner][3] which will identify any large blocks of pixels, and
calculate their centroids and bounding boxes. The centroid coordinates
are fed to the [Mesh library][4] which calculates and
draws a [Delaunay triangulation][5] using them, which
gives us a rough outline of the identified movement:

[![separationVoronoi2\_0017](/images/separationvoronoi2_0017_5821859773_o.png)][6]{:width=arationVoronoi2\_0140](/images/separationvoronoi2_0140_5821861581_o.png){:
width="640" height="360"}][7]

Now, the original plan was to get some big (A1+ size) prints made, so I
tried some simple black and white tests. This samples every other frame,
[IIRC][8], and the frames fade over time by simply
placing a slightly transparent rectangle the size of the screen each
frame. It feels a bit fast:

<iframe class="ql-video" allowfullscreen="true" src="https://player.vimeo.com/video/24478981" width="640" height="360" frameborder="0"></iframe>

I couldn't settle on a good way to display lots of frames in one print,
so I scrapped the idea of doing just prints and looked at the video
again to see what could be improved. Sampling colours from an image is
one of my favourite techniques for natural looking colour palettes, so
each line samples the colour from the pixel of the original image it
starts at. OpenGL additive blending makes it sparkle a bit more,
especially where a lot of lines cluster together. Like this:

[![separationVoronoi4\_2697](/images/separationvoronoi4_2697_5822430642_o.png)][9]{:width=arationVoronoi4\_2684](/images/separationvoronoi4_2684_5821865747_o.png){:
width="640" height="360"}][10]

Here's the video. I added the music specially for the online version-
at the exhibition it ran silently on a loop.

<iframe class="ql-video" allowfullscreen="true" src="https://player.vimeo.com/video/25155382" width="640" height="360" frameborder="0"></iframe>

I didn't give up on print entirely though- I quickly hacked in PDF
recording to my sketch and fired some A3 prints out on my home printer.
Using cartridge paper gives them a lovely delicate texture. Here are a
pair of them rendered from Acrobat as images; I'm slightly baffled
about how the Processing PDF renderer deals with colour but they worked
out pretty well, and got some very favourable comments from those who
attended the show:

[![output1](/images/output1_5837720536_o.png)][11]{:width=put2](/images/output2_5837721176_o.png){:
width="640" height="360"}][12]

So there we are. I'm pretty happy with how this project has worked out:
I've learned a lot, created something beautiful (IMO at least) and
gotten some good feedback about it too. This was the final unit of my
college course, and it seems like a fitting end to what has been an
excellent couple of years for me.



[1]: https://www.flickr.com/photos/53111802@N05/5837152411/
[2]: https://www.flickr.com/photos/53111802@N05/5837152807/
[3]: http://sites.google.com/site/blobscanner/
[4]: http://leebyron.com/mesh/
[5]: http://en.wikipedia.org/wiki/Delaunay_triangulation
[6]: https://www.flickr.com/photos/53111802@N05/5821859773/
[7]: https://www.flickr.com/photos/53111802@N05/5821861581/
[8]: http://www.urbandictionary.com/define.php?term=iirc
[9]: https://www.flickr.com/photos/53111802@N05/5822430642/
[10]: https://www.flickr.com/photos/53111802@N05/5821865747/
[11]: https://www.flickr.com/photos/53111802@N05/5837720536/
[12]: https://www.flickr.com/photos/53111802@N05/5837721176/
