---
title: Say Hello to Offline First
author: Alex
layout: blog-post
//permalink: /2013/11/say-hello-to-offline-first/
---
<small>Prescript: Join the discussion on <a href="http://offlinefirst.org" title="Offline First">offlinefirst.org</a> and help collecting information on the <a href="https://github.com/offlinefirst" title="Offline First on Github">Offline First Github Organisation</a>. And see the two follow up articles <a href="http://blog.hood.ie/2013/11/offline-first-and-the-circle-of-web/" title="Offline First and the Circle of Web">Offline First and the Circle Of Web</a> and <a href="http://blog.hood.ie/2013/12/offline-first-and-the-circle-of-web-part-ii-breaking-the-circle/" title="Offline First and the Circle of Web Part II: Breaking the Circle">Offline First and the Circle of Web Part II: Breaking the Circle</a>.</small>

([Russian translation][1] by [@kouprianov][2])

The members of [Team Hoodie][3] are currently travelling around quite a bit, organising, participating in and attending conferences and workshops in various countries, and through all this we&#8217;ve not only made lots of personal experiences with limited network connectivity, but also met many people from all over the world, all with their own related stories and problems.

**Frequently not having any data connection in even the wealthiest and most developed cities of the world has led us to conclude that no, the mobile connectivity/bandwidth issue isn&#8217;t just going to solve itself on a global level anywhere in the near future.**

[<img src="http://farm2.staticflickr.com/1236/1213670748_6acbf60516_b.jpg" width="1024" height="683" alt="Tube" />][4]

We&#8217;ve generally been rather optimistic about the whole problem, often thinking that coverage and bandwidth are sure to increase continually, but our recent experiences have made this attitude appear increasingly naïve. Capacity problems, varying coverage and zones with **zero reception, unreliable connections** (both wifi and telco) and problems incurred through travelling will likely persist for quite a while.

**Geography is non-negotiable**, as is most architecture. Travellers are doubly plagued: not only by their mode of transport often prohibiting any sort of connection (many subways and high-speed trains come to mind, as do most airlines), but also by the extortionate roaming charges imposed by the carriers, making a spy-sized collection of SIM cards a neccessity for anyone without a massive personal telco budget. And this is speaking from a solidly western-europe-centric perspective.

[Gregor][5] has spent the last six weeks travelling through Africa on the [AfricaHackTrip][6], and we&#8217;ve had the opportunity to speak to people from all over the world at [Mozfest in London][7]. Here and in many other instances we&#8217;ve encountered a solid interest in and a passionate desire for better offline capability in both web and native applications.

<h1 style="line-height:1.1em; font-size:1.5em">
  We can&#8217;t keep building apps with the desktop mindset of permanent, fast connectivity, where a temporary disconnection or slow service is regarded as a problem and communicated as an error.
</h1>

Mobile networks simply don&#8217;t provide that same level of quality and consistency, and it&#8217;s high time we start adapting to that reality. In the same way it makes sense to build interfaces mobile-first, it&#8217;s time to think about designing and building our applications offline-first. With an offline mode that isn&#8217;t merely a contingency for an error scenario, but a fundamentally more flexible and fault-tolerant way of application design.

With [Hoodie][3], we&#8217;ve created an architecture that allows you to build offline apps with relative ease. There are a few issues, but we&#8217;re quite confident about the technical aspects of our syncing engine and how it handles being offline. But now we&#8217;ve stumbled on a plethora of new, hitherto unknown and unresearched use cases and UX scenarios, all of which are only now easily within the reach of most developers.

[<img src="http://farm1.staticflickr.com/40/93463384_4b26c75713_o.jpg" width="640" height="480" alt="Hiking up Needle Point" />][8]

This is quite literally a new frontier, largely unexplored and full of interesting problems and unimagined edge cases. In most other realms of app design we are spoilt with UX/UI patterns we can readily employ, but offline-first is *terra incognita,* there is practically nothing to go on in terms of patterns and metaphors.

# Offline Becomes Reality

All of a sudden, offline becomes more than error handling. Offline becomes a non-threatening reality in which, yes, some aspects of your app will neccessarily stop working, but many others don&#8217;t, because they no longer have to. And this raises many fundamental questions:

> *Does the app even need to inform the human of the current connection state? Is this information even relevant to the human? If so, how can this best be done?*

> *Can I give the users more trust in the app, leaving them safe in the knowledge that it won&#8217;t forget the last state it was in, and that it won&#8217;t lose any data, regardless of what the connectivity situation is?*

> *How can I communicate to the human that creating data within the app is still possible offline, and that it will be posted/dispatched/properly dealt with in the future?*

> *How can my interface convey changes that occur in the users&#8217; current view when they reconnect and the server pushes new and changed data? What to do with deleted items, things that can&#8217;t be organised in lists, objects that aren&#8217;t in themselves immutable (like emails)?*

> *How can I make the inevitable resolution of conflicts by the human as painless and intuitive as possible?
> Can the app make any preemptive decisions on the part of the human and pre-load any low-overhead data they might need later?*

> *What metrics (possibly behavioural) are there to base these decisions on?
> How can I word all of these scenarios in a way that doesn&#8217;t worry the users, that embraces offline as an unproblematic reality?*

There&#8217;s more, of course, but we have to start somewhere. [Our Mozfest session on Offline First Application Design][9] has made this abundantly clear to us. There&#8217;s a whole new paradigm rolling our way, and we&#8217;re going to roll with it. We want to help users of Hoodie in building robust, always-usable applications, not just on a technical level, but also with patterns, metaphors and methods for higher-level application, user experience and interface design. This will be our research project, and it&#8217;s going to live at [offlinefirst.org][10].

If you are interested in joining the conversation, you can start by leaving comments on this post. We are looking forward about what you have to share! :)

[<img src="http://farm9.staticflickr.com/8186/8385628381_f92afcb85a_b.jpg" width="1024" height="683" alt="sailing boat" />][11]

 [1]: http://habrahabr.ru/post/201004/
 [2]: https://twitter.com/kouprianov
 [3]: http://hood.ie "Hoodie"
 [4]: http://www.flickr.com/photos/rudlavibizon/1213670748/ "Tube by rudlavibizon, on Flickr"
 [5]: https://twitter.com/gr2m/ "Gregor Martynus on Twitter"
 [6]: http://africahacktrip.org "AfricaHackTrip"
 [7]: https://twitter.com/gr2m/ "Mozilla Festival"
 [8]: http://www.flickr.com/photos/peterv/93463384/ "Hiking up Needle Point by 2sirius, on Flickr"
 [9]: https://festival.etherpad.mozilla.org/mobile-designing-offline-first-web-apps "Offline First Application Design"
 [10]: http://offlinefirst.org "Offline First"
 [11]: http://www.flickr.com/photos/80471081@N04/8385628381/ "sailing boat by elisaboba, on Flickr"
