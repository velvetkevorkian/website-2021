---
title: 'Processing sketches: lottery number visualisations'
abstract: "Visualising National Lottery draws using Processing."
slug: processing-sketches-lottery-number-visualisations
type: blog
status: publish
published: 2010-10-30 00:00:00 UTC
tags: processing,data-visualisation,lottery
image: 
position: 
---

Following on from my previous posts about the nine words we're using as
inspiration, I thought I'd show some of the ideas I've been playing
with in the third phase of the project, which is using [Processing][1] to create images. The images here demonstrate some of
the things I really like about Processing, like the way that an idea can
be reworked quickly and easily to create images which can be interesting
visually and conceptually.

All the images in this post are linked with the single word
'serendipity'. Inspired by the works of people like [Ben Fry][2] and [Jer Thorp][3], who work on
large scale data visualisations, I decided to plug in some results from
the UK's National Lottery and see what I could come up with. All the
results were taken from [this archive][4].

This was the initial sketch, which takes four draws (of seven numbers
each) and represents each draw with a differently sized circle. The
numbers range from 1 to 49, left to right:

[![lotteryViz1](https://farm2.static.flickr.com/1090/5127943179_231bde305a.jpg){:
width="500" height="313"}][5]

Here's the second version, which is the same idea stretched over the
vertical axis and using 50 draws, instead of just four:

[![lotteryViz2](https://farm5.static.flickr.com/4112/5128546308_0ccf4dabd9.jpg){:
width="500" height="300"}][6]

Next, using the same 50 draws, I spread the results out a bit. Here, the
numbers 1 to 49 are mapped on a circle; each draw is placed on a
separate circle radiating outwards from the centre. Each dot is a number
and is connected to the other dots from that draw. I added some basic
colour to make it easier to distinguish the different draws. This is the
version I'll probably use as part of the final submission for this
project.

[![lotteryviz4](https://farm5.static.flickr.com/4087/5128546622_143202574f.jpg){:
width="500" height="500"}][7]

I decided to focus on the shapes the linkages between numbers in each
draw form. Here they are individually:

[![lotteryviz8](https://farm2.static.flickr.com/1260/5128547772_a8a25a17bb.jpg){:
width="500" height="500"}][8]

Here they're laid on top of each other:

[![lotteryviz7](https://farm2.static.flickr.com/1404/5128547418_4373be216a.jpg){:
width="500" height="500"}][9]

And this is the same concept but rendered in 3d. The Z axis (depth)
relates to time:

[![lotteryviz6a](https://farm2.static.flickr.com/1331/5128546966_fe975e4fcd.jpg){:
width="500" height="500"}][10]

And a second image of that, to give more of a sense of depth:

[![lotteryviz6b](https://farm5.static.flickr.com/4072/5127942517_505bd8076e.jpg){:
width="500" height="500"}][11]

Finally, I'm aware that none of these images are particularly useful in
actually analysing the numbers drawn, and deliberately so: I've
approached this from a visual perspective, rather than a data analysis
perspective. Just to show it can be done, though, here's a
straightforward graph of how often each number was drawn in the fifty
draws concerned here:

[![lotteryGraph](https://farm5.static.flickr.com/4107/5128577248_08abffef8c.jpg){:
width="500" height="250"}][12]

I hope that's been interesting. I'll put the code for the final piece
up in a later post, once I've finalised the other eight images! Enjoy!



[1]: http://processing.org/
[2]: http://benfry.com/
[3]: http://blog.blprnt.com/
[4]: http://lottery.merseyworld.com/Winning_index.html
[5]: http://www.flickr.com/photos/53111802@N05/5127943179/
[6]: http://www.flickr.com/photos/53111802@N05/5128546308/
[7]: http://www.flickr.com/photos/53111802@N05/5128546622/
[8]: http://www.flickr.com/photos/53111802@N05/5128547772/
[9]: http://www.flickr.com/photos/53111802@N05/5128547418/
[10]: http://www.flickr.com/photos/53111802@N05/5128546966/
[11]: http://www.flickr.com/photos/53111802@N05/5127942517/
[12]: http://www.flickr.com/photos/53111802@N05/5128577248/
