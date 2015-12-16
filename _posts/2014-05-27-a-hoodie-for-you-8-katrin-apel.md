---
title: 'A Hoodie for you (8): Katrin Apel'
author: Lena
layout: blog-post
---
Katrin Apel is a Berlin-based iOS developer whose contributions are of high value for Hoodie: she recently implemented the first versions of [Hoodie-iOS (HOOHoodie)][1] that connects to the Hoodie backend API (you&#8217;ll find more about it in [this post][2]).

Last week, she gave a talk about [Building your first iOS apps with Hoodie][3], including one of the probably best Hoodie-talk slides ever:

[<img class="alignnone size-full wp-image-1532" src="/dist1/blog/2014/05/Screen-Shot-2014-05-22-at-14.50.53.png" alt="Screen Shot 2014-05-22 at 14.50.53" width="705" height="526" />][4]
*Note: Yes, there has been a bit of an Adventure Time-meme evolving in Hoodie talks recently. Which we want to comment appropriately:
*<!--more-->

<img class="alignnone" src="http://www.sharegif.com/wp-content/uploads/2013/11/adventure-time-gif-31.gif" alt="" width="500" height="281" />

Thus, we wanted to know from here how all of this has become reality and what she thinks about it. There we go:

**Hoodie: Dear Katrin, we were all really amazed when you told us you&#8217;d get started on working on HOOHoodie (Hoodie-iOS). How did you stumble upon Hoodie in the first place?**

I don&#8217;t exactly remember, but I guess pretty early on, because I knew Jan and Gregor from previous CouchDB meetups and followed them on Twitter. Before that I had implemented my first iOS app, where I had used CouchDB as my only Backend. Which was pretty cool already, but some things were just very hard and annoying to do.  And Hoodie solved all these problems, so I was very excited to hear about it and wished for a very long time, that Hoodie would be ported to iOS so that I could start using the awesomeness already.

**How much time did the HOOHoodie-Implementation take? What was the most difficult thing about it?**

The earliest version took only 2 weeks to implement. Of course that was a super basic version with a very limited feature set and more a proof of concept, but it was a start! I use Couchbase Lite in HOOHoodie, which already offers a lot of the functionality that is needed out of the box. So I didn&#8217;t need to worry about the data synching for example and could concentrate on all the user- / account management features of Hoodie.

The hardest part of porting Hoodie was to understand all the details of the Hoodie Backend API, which isn&#8217;t documented yet. So I had to dig around in the Hoodie.js code a lot. A tremendous help there was reading the thorough test cases for Hoodie.js and of course all the Skype calls with Gregor, who helped me with ANY question I had.

I am now starting to document what I learned about the Hoodie Backend API to make it easier for people to port Hoodie to other platforms (fellow Android devs, I&#8217;m looking at you :) ).

**Are you working on Open Source Software frequently?**

No, Hoodie is the first Open Source project I am working on. I always liked the idea to contribute to Open Source, but it takes a lot of time to get involved into a project and there wasn&#8217;t a project before that was so relevant to me and where I had enough confidence to say, that my contribution would really help. And then of course there is also the fear that you are doing something very stupid and get publicly ridiculed for it (luckily that never happened to me so far).

I am very happy and thankful that the Hoodie team is so great at constantly working to make the project welcoming to new contributors and making it a safe space, where you know, you are not punished for any rookie mistakes you might make.

**Why did you become an iOS developer? What do you like most about your job?**

I&#8217;ve been working as a Product Manager in different IT startups making app concepts before I decided to become an iOS developer. I am still not really the hardcore developer type that gets excited about the coolest new sorting algorithm, I don&#8217;t even own Bitcoins ;-)
I started iOS development because I really like making useful products and apps. And being a developer, I can make the ideas I have in my head into real working products, which still makes me giddy every time I&#8217;m thinking about it.

**We&#8217;re aiming to improve many aspects of Hoodie. Do you have any feedback where it should become better, what would make it easier to implement, or any features you&#8217;ve been missing?**

One of the biggest obstacles right now is probably hosting. Hoodie is so easy to use in the app, but when you want to deploy your Backend, it&#8217;s still complicated compared to the rest. I know you are working on that already, so I&#8217;ll just be patient there :)

Another thing I sometimes miss is a more central help forum, where I can see if a question has been answered before. I am sometimes uncomfortable to ask a question, if I feel that this might be the 100th time this was asked before. Having a searchable forum, I might get the answer to my question without having to bother someone to answer it again. I know it&#8217;s a lot of work to support yet another communication channel, so I totally understand if that&#8217;s not a priority right now.

*(Editor&#8217;s note: But these are very good points indeed! We&#8217;re working on a website relaunch which aims to solve those. But as this will take some more time, we&#8217;ll launch something that may help solve this until then already this week :) )*

**Anything else you&#8217;d like to add, or anything I just forgot?**

Yes, I really need to say that the Hoodie team is one of the nicest and welcoming that I&#8217;ve ever known. The work you are doing in all parts of the tech community makes me feel every day, that I chose the right project to contribute to.

*(Editor&#8217;s note: that&#8217;s so great to hear and makes us incredibly thankful and proud <3)*

&#8212;

*Team Hoodie says thank you very much for your work and the lovely feedback, Katrin! It&#8217;s a pleasure to work with you and to have you on board!*

<img class="alignnone" src="http://37.media.tumblr.com/tumblr_lk2ho0Mxmi1qfy2kdo1_500.gif" alt="" width="500" height="281" /> <img class="alignnone" src="https://31.media.tumblr.com/804d0c1a2a7e30999ae19504b18a4907/tumblr_inline_mydccvhwB91sohk3w.gif" alt="" width="400" height="255" />

 [1]: http://cocoadocs.org/docsets/HOOHoodie/0.1.0/
 [2]: http://blog.hood.ie/2014/03/hoodie-ios-say-hi-to-hoohoodie/
 [3]: https://speakerdeck.com/kaalita/building-your-first-ios-app-with-hoodie
 [4]: https://speakerdeck.com/kaalita/building-your-first-ios-app-with-hoodie?slide=24
