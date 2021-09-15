---
title: 'Sunflow and Processing: the basics'
abstract: "Using Sunflow to accurately render procedural geometry from Processing."
slug: sunflow-and-processing-the-basics
type: blog
status: publish
published: 2011-02-28 00:00:00 UTC
tags: processing,sunflow,raytracing,code
image: 
position: 
---

[Sunflow][1] is an open source ray tracing renderer
which can produce some [astonishing results][2] in
the right hands. Someone far cleverer than me wrote a [Java
wrapper][3] for it (the catchily titled
SunflowAPIAPI), and another did [a tutorial about getting it talking
nicely to Processing][4], which I relied on heavily
in getting this working. There is also a Processing library by the same
author (the even catchier P5SunflowAPIAPI) but thus far I've not been
able to get it to do what I want.

[Amnon's post][4] goes into a bit of detail about
getting Sunflow APIAPI reading complex geometry from [Processing ][5] using [ToxicLibs][6]- this was my
first time using ToxicLibs but it was relatively straightforward. I
wrote a simple class to generate some semi-random geometry using
ToxicLibs' TriangleMesh and a couple of lines of code in that prepare
it to be passed to Sunflow. In the main sketch I put all the Sunflow
calls (setting up the lights, shaders, camera, etc.) in one function
which can be triggered by a keypress. This means the sketch is mostly
the same as it would be without Sunflow, and can use the OpenGL renderer
to view the scene before raytracing- the sketch and the rendering are
almost totally separated. I'm not sure if that is possible with the
P5SunflowAPIAPI library, or with more complex geometry.

So, to my results... These images use a white point light int the centre
of the image and a square mesh light way up high. Rendering time was
approximately half an hour for each image- at full size they're 2100 x
2100 pixels.

[![SunflowTestRender2](/images/sunflowtestrender2_5481521239_o.png)][7]

This one uses a diffuse shader with a constant grey colour.

[![SunflowTestRender3](/images/sunflowtestrender3_5482121704_o.png)][8]

This is either a diffuse or shiny diffuse shader, with a red value
changing from 0-255, ring by ring.

[![SunflowTestRender4](/images/sunflowtestrender4_5486710760_o.png)][9]

Finally, this one uses the glass shader, again with the red value
ranging from 0-255.

The only real issue I've found so far, which Amnon alluded to in his
post, is that the camera behaves differently in Sunflow and Processing.
I've got the settings pretty close, but everything I render in Sunflow
comes out flipped 180 degrees horizontally compared to its position in
the Processing window. I have no idea why at this point, and any ideas
as to how to correct this would be appreciated! Overall, this is a great
example of how open source tools can really work. The freedom for people
to build on each others' work and the willingness to share experience
and expertise is really inspiring. More to come on this soon, I expect.



[1]: http://sunflow.sourceforge.net/index.php?pg=news
[2]: http://sunflow.sourceforge.net/index.php?pg=gall
[3]: http://code.google.com/p/sunflowapiapi/
[4]: http://amnonp5.wordpress.com/2010/09/28/sunflow-processing/
[5]: http://processing.org/
[6]: http://toxiclibs.org/
[7]: http://www.flickr.com/photos/53111802@N05/5481521239/
[8]: http://www.flickr.com/photos/53111802@N05/5482121704/
[9]: http://www.flickr.com/photos/53111802@N05/5486710760/
