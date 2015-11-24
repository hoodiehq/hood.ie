---
title: "Closing in on Hoodie 1.0 Milestones"
author: Jan
layout: blog-post-tgif-ish
comments: true
---

This is Part 2 of of our [little series about what has happened in Hoodie-land](http://hood.ie/blog/we-have-been-busy.html "We. Have. Been. Busy!") in the past <strike>three</strike>five months.

Big news, big news: we’re getting there! After [a very busy summer](http://hood.ie/blog/we-have-been-busy.html) we are closing in on the final tasks for [the Hoodie 1.0 milestones](http://gr2m.github.io/milestones/).

Most notably, we [completely re-structured how Hoodie is put together, tested and released](https://github.com/hoodiehq/discussion/issues/76).

This work is already available in our new @next tag on npm, albeit not 100% functional yet. If you are keen on giving it a spin and help fix missing features, run *npm install hoodie@next* to get the work-in-progress version.

See [https://github.com/hoodiehq/hoodie](https://github.com/hoodiehq/hoodie) for more details and a way to find and file issues. The main work is done in the [Client](https://github.com/hoodiehq/hoodie-client), [Server](https://github.com/hoodiehq/hoodie-server) and [Admin Dashboard](https://github.com/hoodiehq/hoodie-admin-dashboard) modules.

We’ve re-written the Admin Dashboard in Ember and we are very pleased with the results.

In a tough decision between shipping something that works vs. all the features we would like, we have decided to delay the introduction of plugins for the Hoodie 1.0 beta. Plugins will be back before long, but in the current state of refactoring, they are slowing us down, and so [we are cutting them for now](https://github.com/hoodiehq/hoodie-server/issues/417), only to re-introduce them at a more opportune time.


