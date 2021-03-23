---
title: 'Testing server-side Javascript with Jest'
abstract: "Let's test some Javascript that will fail differently on the server and in the browser"
slug: testing-server-side-js
type: blog
status: publish
published: 2019-10-30 00:00:00 UTC
tags: web,javascript,code,pro-tips
image: 
position: 
---

If you\'re using something like Next.js to render JavaScript on the
server you might have written something along these lines, to get the
user-agent string from the request object if run on the server, or from
the global window object if we\'re in the browser. This will blow up on
the server if you receive a request without a user-agent header. (I have
no idea what is sending requests with no user-agent header but something
was, and it was generating a lot of 500 errors in production.)

    const userAgent = req.headers['user-agent'] || window.navigator.userAgent

That\'s a pretty naive implementation, so let\'s refactor it into a
function. We can use some [null propagation operators][1] to catch undefined properties, and wrap it in a
try/catch for good measure:

    function getUserAgent(req) {
      try {
        return req?.headers?.['user-agent'] || window?.navigator?.userAgent
      } catch (err) {
        return ''
      }
    }

Hardly the most elegant solution, but it does the job. To check it does
in fact do the job, let\'s write some tests, using Jest:

    it('returns the user agent header if one is supplied', () => {
      const result = getUserAgent({
        headers: {
          'user-agent': 'foo',
        },
      })
      expect(result).toBe('foo')
    })
    
    it("falls back to window.navigator if the header isn't present", () => {
      const result = getUserAgent({
        headers: {},
      })
      expect(result).toBe(window.navigator.userAgent)
    })

OK, so far so good, but how can we test the case where there\'s no
`user-agent` header and no `window.navigator`?

    it('returns an empty string', () => {
      const result = getUserAgent({})
      expect(result).toBe('')
    })

This will fail, since Jest runs with JSDOM by default. `window` is part
of the global namespace, and just like in a real browser
`window.navigator` is read-only, so you can\'t set it to `undefined`. I
couldn\'t get Jest to mock it properly either.

The easiest solution seems to be to extract the server-side test cases
to a separate file, where you can tell Jest it\'s running in a Node
environment. Add the Jest environment pragma to the top of your server
test files:

    /**
      * @jest-environment node
      */

That way, JSDOM isn\'t even set up for that test suite and you can test
weird isomorphic edge cases to your heart\'s content. The only other
thing to watch out for is if you refer to JSDOM in your test setup
files, you might need to catch that too:

    if (typeof jsdom !== 'undefined') {
      jsdom.reconfigure({
        url: 'https://www.foo.com/bar',
      })
    }

Actually, the best solution is not to read the user-agent string at all,
but sometimes it has to be done :(.



[1]: https://ponyfoo.com/articles/null-propagation-operator
