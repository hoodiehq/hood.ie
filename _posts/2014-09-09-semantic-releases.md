---
title: 'Essential Tooling for a Small Modules World: Bringing Back the Excitement of Software Releases with <em>grunt-semantic-release</em>'
author: Stephan
layout: blog-post
//permalink: /2014/09/semantic-releases/
---


<em>tl;dr:</em> Don&#8217;t release <img class="emoji" title=":floppy_disk:" src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f4be.png" alt=":floppy_disk:" width="20" height="20" align="absmiddle" /> like a <img class="emoji" title=":monkey:" src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f412.png" alt=":monkey:" width="20" height="20" align="absmiddle" />, as it causes lots of <img class="emoji" title=":bug:" src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f41b.png" alt=":bug:" width="20" height="20" align="absmiddle" /><img class="emoji" title=":beetle:" src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f41e.png" alt=":beetle:" width="20" height="20" align="absmiddle" />. Do it like a <img class="emoji" title=":princess:" src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f478.png" alt=":princess:" width="20" height="20" align="absmiddle" /> using <img class="emoji" title=":boar:" src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f417.png" alt=":boar:" width="20" height="20" align="absmiddle" /><img class="emoji" title=":balloon:" src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f388.png" alt=":balloon:" width="20" height="20" align="absmiddle" />. Use the <img class="emoji" title=":clock230:" src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f55d.png" alt=":clock230:" width="20" height="20" align="absmiddle" /> saved and the <img class="emoji" title=":moneybag:" src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f4b0.png" alt=":moneybag:" width="20" height="20" align="absmiddle" />made to <img class="emoji" title=":revolving_hearts:" src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f49e.png" alt=":revolving_hearts:" width="20" height="20" align="absmiddle" />: <a href="https://github.com/boennemann/grunt-semantic-release">grunt-semantic-release</a>.


<a href="/dist1/blog/2014/09/grunt-release-command-screenshot.png" rel="lightbox[1707]" title="Essential Tooling for a Small Modules World: Bringing Back the Excitement of Software Releases with <em>grunt-semantic-release</em>"><img class="wp-image-1714 size-large" src="/dist1/blog/2014/09/grunt-release-command-screenshot-750x245.png" alt="A screenshot of the grunt release command in the terminal"/></a>
This how easy it is to release software now. Yes checkboxes are pre-checked for you.


Before that at Hoodie&#8217;s: …

- *I begin with changing the version number in the 'package.json', which is **not in sync** with the 'bower.json', because obviously someone **messed that up** last time. Okay, just commit and tag this with the new version. But wait, **should I** use the 'vx.y.z' or the 'x.y.z' pattern? There were so many discussions about this, I am just **confused**. It had never been consistent anyways, so I just continue with pushing something. **I forgot** to use the '--tags' flag though. **Luckily**, I noticed immediately and the last step is just 'npm publish'.
- *Done?*
- *Five minutes later I realise the [Travis CI][1] **build failed**. I have invested an entire week to ship a new feature and now everything falls apart, because releasing a new version means I have to **remember a gazillion steps** and execute them in the exactly right order.*

This happened approximately once a week at Hoodie, especially as we are currently maintaining over 50 repositories. You can probably imagine how messed up things can get when a lot of different people have to follow this fragile, lengthy and awfully repetitive process:

<div id="attachment_1711" class="wp-caption alignnone">
  <a href="/dist1/blog/2014/09/release-process-before-parallel.gif" rel="lightbox[1707]" title="Essential Tooling for a Small Modules World: Bringing Back the Excitement of Software Releases with <em>grunt-semantic-release</em>"><img class="wp-image-1711" src="/dist1/blog/2014/09/release-process-before-parallel-750x235.gif" alt="A graph of the error-prone &quot;process&quot; we used before." /></a><p class="wp-caption-text">
    The old process looks simple, but due to multiple human interactions it is error-prone.
  </p>
</div>

At some point I was so fed up with this that I defined our requirements for a solid new process. It should be

*   **automagic**
*   **supportive**
*   **forgiving** and
*   bring back the **fun and excitement** of a software release.

## Our requirements

1.  **Simplicity**: One and only one simple command to execute
2.  **Maintainability**
    1.  Seamless integration with our current grunt setup
    2.  Zero to no setup to make it maintainable with 50+ repositories
3.  **Consistency**
    1.  Never release a module when the build/tests fail
    2.  When the build fails there should be no need to rewrite git history
    3.  Implicit [SemVer][2] compliance
4.  **Permissions**: Everyone with push access should be able to release
5.  **Communication**
    1.  Automatically generate a changelog
    2.  Make the changelog available on git/[GitHub releases][3]
6.  **Fun**: Gimme animated gifs

## Existing solutions

There are quite a lot of (grunt) plugins that evolve around releasing software but except for 1, 4 and 5.1 nothing is solved to our satisfaction and above all not out of the box. So for example 1 is solved by [grunt-bump][4], 4 is solved by [Travis CI deploy hooks][5] and 5.1 is solved by angular&#8217;s [commit message guidelines][6] and [conventional-changelog][7], but it would already take forever to set this up for some of our modules and it doesn&#8217;t even cover 50% of our requirements.

## The Hoodie Way: our own solution

This is why I decided to build **a layer on top of the existing tools** that solves all the remaining issues, but at the same time incorporates and configures the existing ones. Let&#8217;s have a look at the new workflow.

All I have to do locally now is type 'grunt release' into the terminal. The task will **analyse the changes made** since the last release and suggest the next version – and that&#8217;s it already. Once I confirm, everything is taken care of by bots. No more error-prone humans necessary.

<div id="attachment_1713" class="wp-caption alignnone">
  <a href="/dist1/blog/2014/09/release-process-after-serial.gif" rel="lightbox[1707]" title="Essential Tooling for a Small Modules World: Bringing Back the Excitement of Software Releases with <em>grunt-semantic-release</em>"><img class="wp-image-1713" src="/dist1/blog/2014/09/release-process-after-serial-601x470.gif" alt="A graph of the new process" width="601" height="470" /></a><p class="wp-caption-text">
    The new process is complex, but automated and taken care of by bots.
  </p>
</div>

Instead of running the build and generating the changelog locally as before, this only tags the current 'HEAD' with 'release-x.y.z' and pushes it. On Travis CI, a special deploy hook recognises this, generates the changelog, runs the build (and everything else you want it to do) and finally creates a release commit with all the changes. This is important because Travis CI is a neutral environment where everything is freshly installed. **No more &#8220;But it works on my machine&#8221;**. As soon as this is pushed back to git, yet another run on Travis CI will finally publish to GitHub releases and e.g. npm. But you can basically configure every [deployment target][8] Travis CI has to offer.

As this is packaged in a single grunt plugin including an interactive setup script, it&#8217;s easy to setup a lot of modules and release them all in exactly the same way. There is **no more confusion** about tagname-patterns and it&#8217;s straight-out impossible to publish a broken build. I even managed to cover **6 – the fun part**. Every time a new version is about to be released, a random [superb][9]-[animal][10]-codename is generated and, using the [Giphy API][11], a [matching animal gif][12] is appended to the release body.

## Get this for your own package

Obviously, the whole plugin was initially tightly coupled to the needs of Hoodie, but I extracted a general-purpose gruntplugin and published it to npm (using itself) last week. Say hello to [grunt-semantic-release][13], or say hi to its repo [on GitHub][14].

## <a href="/dist1/blog/2014/09/screencast_slow.gif" rel="lightbox[1707]" title="Essential Tooling for a Small Modules World: Bringing Back the Excitement of Software Releases with <em>grunt-semantic-release</em>"><img class="aligncenter" src="/dist1/blog/2014/09/screencast_slow.gif" alt="A screencast of the grunt release workflow" /></a>

## Join the discussion!

This module aligns with our efforts to provide **essential tooling for a small modules world**. Another one we built with this goal in mind is [Ubersicht][15].

We would love to hear your thoughts, not only about grunt-semantic-release, but about tools you (would love to) have for your work as module author. Chime in on the discussion in the comments, on [Hoodie&#8217;s][16] or [my personal][17] Twitter or in the [Issues][18].

[<img class="aligncenter" src="http://risovach.ru/upload/2013/01/mem/bender-s-plakatom_7481644_orig_.jpeg" alt="" />][19]

 [1]: http://travis-ci.org/
 [2]: http://semver.org/
 [3]: https://github.com/blog/1547-release-your-software
 [4]: https://github.com/vojtajina/grunt-bump
 [5]: http://docs.travis-ci.com/user/build-configuration/#Build-Lifecycle
 [6]: https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#commit
 [7]: https://www.npmjs.org/package/conventional-changelog
 [8]: http://docs.travis-ci.com/user/deployment/
 [9]: https://www.npmjs.org/package/superb
 [10]: https://www.npmjs.org/package/animals
 [11]: https://github.com/giphy/GiphyAPI
 [12]: https://github.com/hoodiehq/grunt-release-hoodie/releases/tag/v2.6.1
 [13]: https://www.npmjs.org/package/grunt-semantic-release
 [14]: https://github.com/boennemann/grunt-semantic-release
 [15]: https://espy.github.io/ubersicht/#hoodiehq "Ubersicht"
 [16]: http://twitter.com/hoodiehq
 [17]: http://twitter.com/boennemann
 [18]: https://github.com/boennemann/grunt-semantic-release/issues "GitHub Issues for grunt-semantic-release"
 [19]: https://twitter.com/trodrigues/status/509301317467373571
