---
title: "Greenkeeper"
author: Jan
layout: blog-post-tgif-ish
comments: true
---

This is Part 3 of our [little series about what has happened in Hoodie-land](http://hood.ie/blog/we-have-been-busy.html "We. Have. Been. Busy!") in the past <strike>three</strike>five months.

Stop worrying about npm dependencies breaking your build: Greenkeeper saves you time and money by automating dependency updates and notifying you of failed builds so you can spend your development time actually making things.

Greenkeeper came out of something we wanted for Hoodie anyway, and we found it useful in a client project, so we made a product out of it for everyone, why not! :)

We already got [interviewed by IBM about Greenkeeper](https://developer.ibm.com/clouddataservices/2015/10/07/greenkeeper-io-talks-about-node-js-dependency-tracking/).

![The Greenkeeper Workflow](http://greenkeeper.io/workflow_horizontal.png)

In the weeks after the release we’ve kept busy improving Greenkeeper based on user feedback:

1. Initial release: we pin your dependencies and send you a pull request for every update.

Some folks prefer dependency ranges, and others find frequent updates of some packages and the number of pull requests created off-putting.

2. So as a result, we introduced range support with our patented* [Real Time Dependency Break Detection](https://medium.com/greenkeeper-blog/announcing-real-time-dependency-break-detection-for-greenkeeper-4f7558c10d77). Now you get the best of both worlds: version ranges, so your end-users get the latest updates automatically, and you get fewer PRs, but you are still guaranteed to be told **if** a dependency sneaks in a breaking change in a valid version range.

3. The third release cleaned up a lot of little things and made the backend a lot more reliable. Outward facing, we now support your choice of tabs vs. spaces in your package.json (one of you is wrong, but we don’t care ;) and we added support for enabling Greenkeeper on repo forks, to support more workflows more flexibly.

4. This time, we didn’t change anything, but we made all our plans more valuable: every plan on Greenkeeper now comes with support for one private repo. This allows anyone to try out Greenkeeper in any setup without much hassle.

As a result of running this for about 10 weeks now, we are learning a lot about the npm ecosystem. We’ve already sent more than 20,000 pull requests, saving a lot of developer time.

We have a lot more planned for Greenkeeper, [so better sign up now](http://greenkeeper.io)!
