---
title: Even Better GitHub Organisations with Ubersicht
author: Alex
layout: blog-post
//permalink: /2014/01/even-better-github-organisations-with-ubersicht/
---
Team Hoodie is excited about [GitHub’s new Organisation’s view][1].

[One thing we were missing though][2] is a way to see what is going on in a whole Organisation, across repositories. This should be public and filterable so people can choose their preferred content / view based on what is important to them.

As Hoodie grows, **understanding what is going on** in the sub-teams contributing to the project can be a bit of work. Since attracting more contributors is a prime objective of ours, we tried to empathise with people who are completely new to the project. And once we did that, we figured out it can pretty tough for new people to see what&#8217;s currently going on. So we took this as an issue and started to work on solving that problem. <!--more-->

This is why we&#8217;d now love you to

# Meet [*Ubersicht*][3]

– our first stab at solving this:
<img class="alignnone size-full wp-image-911" alt="ubersicht" src="/dist1/blog/2014/01/ubersicht.png" width="907" height="682" />
This is a new view into all issues of an organisation, sorted by time, with powerful filtering options: show all issues with the label “backlog” that have no comments yet: *easy*. Show all open issues for a milestone across all repositories: *easy*. Show issues that are easy to work on for new contributors: *EASY*.

You get the idea.

<span style="text-decoration: underline;"><strong>Basic instructions for <em>Ubersicht</em></strong></span>

To use this with your username or organisation, just change the value of the hash in the URL to match your name.

If you want the default view to be yours, [just fork the repo][4] and make some minor adjustments (the [README has more detailed instructions][5]).

<span style="text-decoration: underline;"><strong>The Technology behind <em>Ubersicht</em></strong></span>

[Ubersicht][4] is a client-side-only single-page application that uses GitHub’s public search API and is hosted on GitHub Pages.

That’s it. Not bad for an afternoon hack.

*If you like this, [feel free to leave a tip][6].*

*Team Hoodie builds products and prototypes **fast**. If you need something done quickly, [you can hire us][7].*

 [1]: https://github.com/blog/1763-better-organizations
 [2]: https://twitter.com/janl/status/426060648523759616 "Huh?"
 [3]: http://espy.github.io/ubersicht/
 [4]: https://github.com/espy/ubersicht
 [5]: https://github.com/espy/ubersicht/blob/gh-pages/README.md
 [6]: https://www.gittip.com/hoodiehq/ "Leave  a Tip"
 [7]: http://thehoodiefirm.com
