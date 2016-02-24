---

title: Alex Feyerke - Meet The Hoodies (3)
author: Alex
layout: blog-post
comments: true

---

### *What’s your favorite animal?*

As a species, the [Red Panda](https://en.wikipedia.org/wiki/Red_panda). It’s hard to argue with so much [cuteness](https://www.youtube.com/watch?v=oimTxlCi36E). Otters are similarly cute, but soggier. However, for an individual animal, I’d have to pick this cat.

![best_cat_ever-alpine_lynx_bengal_mix](https://cloud.githubusercontent.com/assets/391124/11560190/ff514c5a-99be-11e5-975c-32dfb9d95417.jpg)

No idea where this jpg originally came from, and I don’t really know much about the cat itself, other than what’s revealed by the filename, *best_cat_ever-Alpine_Lynx_Bengal_mix.jpg*. It’s true though. That is undoubtedly the best cat ever.

### *What’s your role / what have you contributed to Hoodie?*

I was the third person to join the project, after Gregor and Jan, who founded it. We all wear many hats, role-wise, but I probably wear the most. I helped a bit designing the original API, designed the logo, designed and built many of the websites we have, wrote documentations and tutorials, possibly came up with “offline-first” as a concept, write blog posts, speak at conferences, and am also responsible for the Admin Dashboard, which I’m currently rewriting, as well as a bunch of other frontend dev stuff.

### *What’s your favorite use of Hoodie in the wild?*

We built a working prototype for a web app to be used by people who inspect avalanche protection barriers in the Swiss Alps. They use it on tablets and it’s fully offline-capable, from the various map layers to the information gathered on each individual structure, to the photos taken of the damaged ones. Although, to be fair, not all of that was built with Hoodie, since that was all a while ago and still uses the Hoodie version that stores data in LocalStorage. That doesn’t really work with photos, so that bit is done with PouchDB. Nowadays, I’d just build it with the upcoming version of Hoodie that already uses PouchDB internally, and see whether I could use ServiceWorker for caching the map tiles.

What I really like about it though is that it works, and it works well on my four-year-old Android phone. With photos, map tiles, the lot. It shows what was possible even with “old” technology, such as AppCache and LocalStorage, and bodes well for all the brilliant new stuff that’s on the way.

The best thing was that Hoodie saved me so much work implementing the authentication, data storage and sync that I could spend much more time on the UI and the user experience, which really paid off.

### *What in your opinion makes the Hoodie project unique and interesting?*

The people-centered approach to, well, basically everything. It starts with how we desigend the API: we didn‘t go down the tech-centered path you see so often in Open Source, simply exposing server-side features to the frontend, but focusing instead on what developers would need and want. User-centered API design.

This approach extends to how we do work in general, trying to accomodate people and their needs as well as we can, and being open, inclusive and accessible, also valuing all sorts of work highly, not just coding. This interview, for example, is the product of our new Open Source editorial team, an attempt at finding contributors and contributions for Hoodie’s outward communication.

We’ve often been told that people are attracted to _how_ we do things as much as to the things that we do, and we feel very validated by this. Open Source is more than just code. Code changes and becomes deprecated, but culture and people persist far beyond that.

I like that we value independence and autonomy highly, in that there’s no VC funding, the project is completely Open Source, can’t be sold or acquired, and is generally a safe bet: it’s not going to vanish overnight, you’re not going to lose your data and your storage platform because we got bought, and we’re not going to drop the whole thing once a lucrative exit presents itself. Hoodie is our exit strategy. We want this to be A Thing™.

### *What advice do you have for aspiring Hoodie contributors?*

First off, don’t be shy, we’re pretty easy to get in touch with, both over Twitter [@hoodiehq](https://twitter.com/hoodiehq), as well as our combined Slack/IRC channel (find out more on our [chat page](http://hood.ie/chat/)). We’ve also had people just show up out of nowhere with a pull request on GitHub, that’s also cool. But in general, just come talk to us!

As for what you can do: we’ve built [a tool called Ubersicht](http://espy.github.io/ubersicht/#hoodiehq) to help you (and us, if we’re honest) find issues all across our organisation, and there’s a big green button to display starter issues for new or beginner contributors.

On the tech side, we use CouchDB/PouchDB, Node.js, and Hapi for the internals. We’re also super happy when people test and write tutorials, keep the docs in shape, write posts and articles, make code and design improvements to the websites or just try out Hoodie itself and give us feedback on it.

So there’s a wide range of topics and difficulties to pick from, and a bunch of friendly people to talk to about the whole thing, too. Jump in!

And finally, here’s me, grinning on my first Shinkansen ride:

![shinkansen](https://cloud.githubusercontent.com/assets/391124/11560507/567f3f1c-99c1-11e5-8454-a4a7497c06aa.jpg)

#### [Github - @espy](https://github.com/espy)

# Thanks

I’d like to thank [@schisepo](https://github.com/schisepo) for setting up the interview, [@charlotteis](https://github.com/charlotteis), [@nickcolley](https://github.com/nickcolley) and [@gr2m](https://github.com/gr2m) for their input reviewing this post!
