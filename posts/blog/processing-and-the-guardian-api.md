---
title: 'Processing and the Guardian API'
abstract: "Using Processing to get data from the Guardian's API"
slug: processing-and-the-guardian-api
type: blog
status: publish
published: 2010-12-11 00:00:00 UTC
tags: processing,guardian,visualisation
image: 
position: 
---

Inspired by [this article ][1]{: target="_blank"} from the awesome [Jer
\"Blprnt\" Thorp][2]{: target="_blank"}, I\'ve been experimenting with
the Guardian\'s [Open Platform API][3]{: target="_blank"}, which gives
access to ten years worth of articles in XML or JSON format. You have to
sign up for an API key but it\'s free and easy. I thought I\'d put up
some of the early tests I\'ve been doing with it. I\'ve never worked
with XML before so it\'s been something of a learning experience! These
three pieces use the same code, just different search terms. I\'ve
searched for the names of our most recent \"dear leaders\" in the news
section, and, er, put the headlines in a circle. That\'s about as far as
I\'ve got at the moment...

David Cameron:

[![david+cameron](https://farm6.static.flickr.com/5247/5250910799_6173060564_z.jpg){:
width="640" height="640"}][4]{: target="_blank"}

Gordon Brown:

[![gordon+brown](https://farm6.static.flickr.com/5289/5251514858_f73bcd5d58_z.jpg){:
width="640" height="640"}][5]{: target="_blank"}

Tony Blair:

[![tony+blair](https://farm6.static.flickr.com/5042/5251514322_ebdf46ea94_z.jpg){:
width="640" height="640"}][6]{: target="_blank"}

Not a lot of information we can glean from that, I think you\'ll agree,
other than there are significantly more articles mentioning Blair
(unsurprising as he was PM for much longer than the other two, so far at
least), but I think there\'s some potential for some interesting stuff.
It\'s also worthwhile to note that Processing\'s functionality has
improved since Jer wrote his article, which I think makes it easier to
get started with XML without having to dig into external libraries or
obscure Java coding.



[1]: http://www.guardian.co.uk/open-platform/blog/the-truth-is-in-there
[2]: http://blog.blprnt.com/
[3]: http://www.guardian.co.uk/open-platform
[4]: http://www.flickr.com/photos/53111802@N05/5250910799/
[5]: http://www.flickr.com/photos/53111802@N05/5251514858/
[6]: http://www.flickr.com/photos/53111802@N05/5251514322/

