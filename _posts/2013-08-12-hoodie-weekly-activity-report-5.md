---
title: 'Hoodie weekly activity report #5'
author: Lena
layout: blog-post
//permalink: /2013/08/hoodie-weekly-activity-report-5/
---
*We want to keep you updated about the things we work on. This is what happend in Hoodie-land last week:*

**Engineering**

*   hoodie command-line interface (cli): Bug fixes and new hoodie app template based on[vertebrae][1] ([@svnlto][2])
*   hoodie-server: move open-browser functionality to hoodie cli &#8211; WIP ([@svnlto][2])
*   hoodie-server: add testing and linting capability &#8211; WIP ([@svnlto][2])
*   API change: removed hoodie.store.cache, hoodie.store.markAsChanged, hoodie.store.markAllAsChanged from public API &#8211; WIP ([@gr2m][3])
*   API change: hoodie.open(storeName, options) now supports passing an options.validate method to validate objects locally before they get stored &#8211; WIP ([@gr2m][3])
*   internal: simplified implementation of hoodie.remote by simply creating a remoteStore instance, with some extra parameters &#8211; WIP ([@gr2m][3])
*   internal: localStore and remoteStore do not longer inherit from storeBase, instead there is a storeApi module now that can be configured (validation, persistance hooks) &#8211; WIP ([@gr2m][3])
*   specs: fixing all the test for the upcoming (interal) rewrite in v0.3-cheesecake &#8211; WIP ([@gr2m][3])
*   added emoji <img title=":smiley_cat:" alt="smiley_cat" src="http://weekly.hood.ie/assets/emoji/smiley_cat.png" height="20" /> support <img title=":heart:" alt="heart" src="http://weekly.hood.ie/assets/emoji/heart.png" height="20" />

**Communications**

*   Step-by-step tutorial on the upcoming plugin architecture and API &#8211; WIP ([@espy][4])
*   Blog post: [Weekly activity report #4][5] ([@ffffux][6])
*   Blog post: [Proof of Concept: Hoodie login with Persona][7] ([@janl][8])
*   Blog post: [Hoodie Presentation at Glasgow JS (incl. recording & slides][9] ([@janl][8])
*   Blog post: [Hoodie’s top links of the week #2][10] ([@ffffux][6])

*You’ll also find all our weekly reports on [weekly.hood.ie][11]. Have a good week!*

 [1]: https://github.com/svnlto/backbone-hoodie
 [2]: https://github.com/svnlto
 [3]: https://github.com/gr2m
 [4]: https://github.com/espy/
 [5]: http://blog.hood.ie/2013/08/hoodie-weekly-activity-report-4/
 [6]: https://github.com/ffffux
 [7]: http://blog.hood.ie/2013/08/proof-of-concept-hoodie-login-with-persona/
 [8]: https://github.com/janl
 [9]: http://blog.hood.ie/2013/08/hoodie-presentation-at-glasgow-js/
 [10]: http://blog.hood.ie/2013/08/tgif-hoodies-top-links-of-the-week-2-surveillance-the-future-of-programming-and-how-to-make-a-difference/
 [11]: http://weekly.hood.ie/
