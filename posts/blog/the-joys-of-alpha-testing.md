---
title: 'The joys of alpha testing'
abstract: "Accidentally dumping raw GPU memory to the screen for fun and profit"
slug: the-joys-of-alpha-testing
type: blog
status: publish
published: 2012-09-30 00:00:00 UTC
tags: processing,glitch
image: 
position: 
---

I know I've been away for a while, but you'll no doubt be glad to know
I have a selection of interesting stuff lined up (which I've been
meaning to write up for ages) as I put together my new portfolio site.

First up, everyone loves a bit of glitch art. I'm a particular fan of
[GlitchBot][1] myself. These pictures came about as a
result of me mucking about with masking a photo using gaussian
distributions. This is broadly the result I was going for:

![eyeglitch1](/images/eye-glitch1_8040661688_o.png)

Thanks to a strange edge case, where an alpha version of Processing 2.0,
the crappy Intel integrated graphics on my laptop and not calling
`background()` during the `draw()` loop collided, I got stuff like this:

![eyeglitch2](/images/eye-glitch2_8040653551_o.png)
![eyeglitch3](/images/eye-glitch3_8040662338_o.png) 
![eyeglitch4](/images/eye-glitch4_8040654189_o.png) 
![eyeglitch5](/images/eye-glitch5_8040654699_o.png)

Quite interesting, I'm sure you'll agree. The best bit about it, IMO
(and one of the nice things about working with complex and sometimes
unpredictable systems) is that the interesting parts of this were
discovered, rather than designed.

The photo this piece is based on was from [Flickr user spcbrass][7], licensed under CC-BY-SA.

I've not put up the code for this as the results are unlikely to be
replicated (I think the bug is gone in the newer versions of Processing
2.0) but I can post it if anyone's particularly interested. Until next
time, happy glitching.

**2018 update**\: one of the images from this series was used as a
header on a [Motherboard article][8], which is neat I
guess.



[1]: https://www.flickr.com/photos/glitchbot/
[7]: https://www.flickr.com/photos/spcbrass/2294936412/in/faves-53111802@N05/
[8]: https://motherboard.vice.com/en_us/article/kb7gkz/brass-horn-tor-ISP-says-buzz-off-surveillance
