---
title: 'Joining the 💯 club'
author: Gregor
layout: blog-post
comments: false
---

Hoodie is joining a new club: [The TAP 100](http://www.node-tap.org/100/).

The TAP 100 is about 100% coverage of all lines, branches, statements and
functions by automated tests. It is something we aspire for in all of
[Hoodie’s modules](http://docs.hood.ie/en/latest/about/architecture.html#modules).

As an independent Open Source community, we depend on a low maintenance overhead
and a high amount of active contributors. We address this challenge with tooling
like [semantic-release](https://github.com/semantic-release/semantic-release)
for automated releases and [Greenkeeper](https://greenkeeper.io/) for automated
dependency updates.

Accepting contributions in a timely manner is important for retention.
On the other hand, pull requests that remain open for too long discourage
contributions. In order for us to accept new contributions quickly we have to
fully trust our test setup. If we accept a pull request which caused a problem
later, although the tests all passed, it’s a problem with our test suite, not a
problem with the pull request. A best practise we learned from our friends at PouchDB:

> Being confident in your test suite’s ability to catch regressions enables
> us to accept contributions in a reasonable time frame

—[Dale Harvey on “How we test PouchDB”](https://pouchdb.com/2014/11/27/testing-pouchdb.html)

It’s not always easy to reach 100% coverage of all lines, branches, statements,
and functions in a code base. But it turns out that the lines which are hard
to cover are often times the ones causing bugs.

By running tests with `tap --100` our tests will fail if anything added to the
code base is not covered by tests. It enforces another best practise in our
day-to-day open source work: confidence in our test setup.
