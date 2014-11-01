---
title: 'A Hoodie for you: Interviews with Hoodie-Users (3) – Alan Shaw and plugins.hood.ie'
author: Lena
layout: blog-post
//permalink: /2013/12/a-hoodie-for-you-interviews-with-hoodie-users-3-alan-shaw-and-plugins-hood-ie/
---
*&#8220;When life gives you lemons, don’t make lemonade. Make life take the lemons back!&#8221;* This guy who doesn&#8217;t accept unexpected lemon deliveries &#8211; this is [Alan Shaw][1]. Alan is an excitable web developer who has been working with JavaScript for as long as he can remember (and is now all like &#8220;Node all the things&#8221; all the time). Alan built the [Hoodie-Plugins-Overview][2] where all available Hoodie-plugins are displayed, so we asked him a few questions and we&#8217;re happy to introduce you to him today. Here we go!

**Hoodie: How did you come across Hoodie?**
Alan: Someone tweeted about it, I think. Hoodie has some really interesting principles that allow it to stand out from the crowd so it instantly caught my attention.

What really attracted me to hoodie actually turned out to be what it was doing with CouchDB. I&#8217;m a sucker for seeing changes I make on one computer be echoed on another computer across the room or across the globe. Hoodie uses the CouchDB \`_changes\` feed to allow applications to listen for and respond to document changes as they happen, which is a really different paradigm to the usual request/response dance that traditional webapps perform.

**What was your experience when working with Hoodie?**
A good experience. The [Plugins Website][2] I built was done with Hoodie. I got excited about the new plugins system, so thought up a way in which a Hoodie-App could be built that needed to use it.

Hoodie gives you a lot of freedom on the frontend, you can use whatever templating engine or DOM manipulation library or build tool you like. I like being able to make those kinds of choices myself, but some people just want to be told what to use, presuming that a sensible choice has been made. It might be a stumbling block to adoption, and perhaps Hoodie should be making more of these choices.

Personally, I really liked coming to conclusions like: &#8220;OH, you mean I can use whatever templating engine I want&#8221; or &#8220;OH, plugins are just npm modules&#8221;.

**Why did you create plugins.hood.ie? How much time did it take you?**
Once I had created the two plugins that make it work, no time at all. It&#8217;s just a [bootstrap 3][3]-based single page app, there isn&#8217;t much to it.

To be fair, the two plugins I created took very little time also. The first is a server side plugin that creates a read only database and puts details of Hoodie plugins in it. It uses Mikeal&#8217;s [couchwatch][4] module to watch the npm registry for changes and update the database. From the client side you can then connect to it using \`hoodie.open\`, query it, and attach a change listener so that the client can get informed of changes as they happen.

The second plugin is a wrapper around [ractive.js][5] &#8211; a library for data binding, efficient DOM updating and event handling. The big win is that it removes the burden of manually updating the DOM when data it is based on changes. It uses [mustache][6] and is incredible.

Anyway, the Hoodie plugin is called [hoodie-plugin-reactive][7] and it creates proxys for \`hoodie.store\` (or any other store) that you use in a function for creating the data for your template. It means that when you \`find\` or \`findAll\`, it knows what data the template is interested in. Change listeners are automatically added on the store so that when documents change, it can determine whether or not to re-run your template data creation function and give the new data to ractive.js.

Together they help make the [plugins.hood.ie][2] website. Data for the list comes from the server side plugin, which is called [hoodie-plugin-plugins][8] by the way. We connect to it using \`hoodie.open\` and in the [template data creation function][9] we query it for all it&#8217;s data! And that&#8217;s it! If you happen to be looking at the web page when someone adds, updates or removes a plugin from npm then it&#8217;ll automatically change infront of your eyes.

**In which points do you see potential for improving Hoodie?**
The Hoodie guys seem to have a lot of the things I want to see improved already on the radar. So actually only some minor points come to mind:

*   The [my-first-hoodie][10] website (the site you are given when running \`hoodie new\`) needs work in terms of look and feel and complexity
*   Remove the frontend dependency on jQuery
*   I think it would be really beneficial for Hoodie to have a set of approved or core created plugins that either come bundled with a new Hoodie app or come highly recommended. Similar to what grunt have done with the \`grunt-contrib-\` plugins. Either that or bootstrap applications with pre-installed plugin combinations for particular use cases.

The big thing is exposure. Hoodie needs to raise awareness within the community. Setting up Hoodie meetups and workshops would help but IMHO free Hoodie hosting would go a long way in doing this. If you really want people to play with something, give them a simple way of showing off what they created to other people. A link they can post on twitter or their blog. The number of people a single person can reach showing off their demo app on their own laptop is tiny compared to the number of people who could possibly read a blog or twitter post on the internet.

*[Editor’s note: this is excellent feedback and team Hoodie is planning to work on these items. If you would like to help, please get in touch, we appreciate any support!]*

**In general: why are you working on Open Source projects?**
For the LOLz. I&#8217;ve used a LOT of Open Source software in things I&#8217;ve created both for clients and for personal projects. If no one gave anything back to the community then all of that great software that has made my life easier, built by people more intelligent than me, that I&#8217;ve been able to use in my projects wouldn&#8217;t even exist.

I love the diversity of Open Source and I genuinely believe that open sourcing your software will make it better. I mean why wouldn&#8217;t you want millions of people using, testing, submitting bug reports, patches and improvements to your software for *free*?

It&#8217;s why at my new company [TABLEFLIP][11] we work on Open Source projects, meetups, workshops and other events that benefit the community two days every week. We build awesome web applications and we&#8217;re helping build Open Source-communities by playing a big part in organising meetups like [nodebots][12], [meteor][13] and recently [node school][14]. We also like to contribute to open source projects that we think are worthwile, like the [node security project][15] and Hoodie. And you should [hire us][11]!

*Thanks a lot to you, Alan, for the interview and for your work!*

 [1]: http://twitter.com/_alanshaw
 [2]: http://plugins.hood.ie/
 [3]: http://getbootstrap.com/
 [4]: https://npmjs.org/package/couchwatch
 [5]: http://www.ractivejs.org/
 [6]: http://mustache.github.io/
 [7]: https://npmjs.org/package/hoodie-plugin-reactive
 [8]: https://npmjs.org/package/hoodie-plugin-plugins
 [9]: https://github.com/alanshaw/hoodie-plugins-www/blob/master/www/js/main.js#L37-L72
 [10]: https://github.com/hoodiehq/my-first-hoodie
 [11]: http://tableflip.io/
 [12]: http://www.meetup.com/NodeBots-of-London/
 [13]: http://www.meetup.com/Meteor-London/
 [14]: http://nodeschool.io/
 [15]: https://nodesecurity.io/
