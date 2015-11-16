---
title: 'Offline First meetup #1 in Berlin'
author: Lena
layout: blog-post
//permalink: /2014/02/offline-first-meetup-1-in-berlin/
---
Prescript: [*Offline First*][1] is an initiative which is supported by (Team) Hoodie but not &#8220;a Hoodie project&#8221;. Although we consider it to be very important, it is a discussion and a topic bigger than Hoodie. *Offline First* aims to reach far more people, collect their experiences and ideas and find solutions for the problems caused by lack or loss of internet connection in apps. We invite you to join the discussion and help collect information on the [*Offline First* GitHub organisation][2]. Find more information on the first ideas about this topic [here][3].

<img alt="Offline First Meetup #1 in Berlin" src="/dist1/blog/2014/01/20140129_09-705x470.jpg" width="705" height="470" /> <p style="text-align: center;">
  ____________
</p>

It&#8217;s been a while now since the first discussions around *Offline First* started. As this topic can only grow if it attracts more people thinking and discussing about it, it was a good time to have the very first *Offline First*-meetup. <!--more-->

<img alt="Offline First Meetup #1 in Berlin" src="/dist1/blog/2014/01/20140129_02-705x470.jpg" width="705" height="470" />
So two weeks ago, on January 29, around 20 people met at Co.up Berlin &#8211; most of them developers, and including three people from Stockholm. The meetup started with an

<h1 style="text-align: center;">
  &#8220;Offline Anonymous&#8221;
</h1>

round: everyone telling (or ranting) about their experiences with the often-seen lack of good offline User Experience in applications. Some examples:

> &#8220;I work in a startup for fishermen who can share what they do (like &#8220;Runkeeper&#8221; for fishermen). Fishing happens outside the city, often without internet connection, and the app has to manage this.&#8221;
>
> &#8220;When travelling, I use to make screenshots of important messages &#8211; because I already know as soon as I don&#8217;t have wifi or data roaming, some apps will just delete them (or at least not show them anymore).&#8221;
>
> &#8220;Everyone knows you have to test your online app in an offline mode. Which means: before the release, you turn the “flight mode” on and check if the app crashes. If it don&#8217;t, you consider the app &#8220;offline-ready&#8221;. And I think this is not enough.&#8221;
>
> &#8220;For Google Maps, you can cache maps manually by typing &#8220;ok maps&#8221; into the address field. This is interesting to know &#8211; but it&#8217;s a terrible user experience.&#8221;

<img alt="Offline First Meetup #1 in Berlin" src="/dist1/blog/2014/01/20140129_03-705x470.jpg" width="705" height="470" />
> &#8220;I bought a new smartphone for a non-tech-savvy person. It was said the manual was on the phone itself. When we tried to open it, it turned out the prepaid card wasn&#8217;t active yet &#8211; and the smartphone&#8217;s so-called &#8216;manual&#8217; was just a link to the manufacturer&#8217;s website that failed to load.&#8221;

> &#8220;Why can&#8217;t apps just say &#8216;HONESTLY &#8211; YOU&#8217;RE OFFLINE&#8217;?&#8221;
>
> &#8220;User interfaces built with offline first in mind, are even better when on 100Mbit line.&#8221;

In the second part of the meetup we got together in small groups for

<h1 style="text-align: center;">
  Group discussions
</h1>

Alex and Jan, the meetup&#8217;s organizers, had collected some suggestions for the discussions in advance. All topics, ideas and results were [collected in one pad][4].

<img alt="Offline First Meetup #1 in Berlin" src="/dist1/blog/2014/01/20140129_04-705x470.jpg" width="705" height="470" />
Some of the

<h1 style="text-align: center;">
  main thoughts and notes:
</h1>

<div>
  <div id="magicdomid87">
    <ul>
      <li>
        “Offline first” is not a feature &#8211; it’s just a bug when it’s missing
      </li>
      <li>
        It&#8217;s like security: it&#8217;s not a mainstream topic and people don&#8217;t notice when it works well
      </li>
    </ul>

    <h1 style="text-align: center;">
      App design
    </h1>

    <div id="magicdomid77">
      <ul>
        <li>
          There should be a &#8220;minimal data usage&#8221;-option for an app for flaky mobile connections.
        </li>
        <li>
          Apps should be reliable, not lose data and communicate this to users.
        </li>
        <li>
          A context-based definition of low-overhead, relevant information which will be kept offline could work, like an email client keeping starred and recent messages locally, because that&#8217;s what most people need in the short term.
        </li>
        <li>
          There need to be resolutions for data conflicts.
        </li>
        <li>
          Apps should be more honest: Perhaps don&#8217;t show a spinner, but communicate that the last bit came 2 minutes ago. &#8220;I felt so betrayed to learn that most spinners are just gifs that will go on forever.&#8221;
        </li>
        <li>
          Enable Applications to load the part they did not get before (give me page x starting from byte 53)
        </li>
        <li>
          apps shouldn’t lose data you just had some minutes ago
        </li>
      </ul>

      <p>
        &nbsp;
      </p>

      <img alt="Offline First Meetup #1 in Berlin" src="/dist1/blog/2014/01/20140129_05-705x470.jpg" width="705" height="470" /> <h1 style="text-align: center;">
        Spreading the word
      </h1>

      <p>
        or: how to convince existing (big) web companies (Facebook, …) to be more offline first?
      </p>
    </div>

    <div id="magicdomid91">
      <ul>
        <li>
          Build awesome offline stuff!
        </li>
        <li>
          &#8220;low hanging fruits&#8221; that let people feel the pain of offline and the benefit of offline first
        </li>
        <li>
          make users expect it and ask for it – users are kind of used to offline being an error
        </li>
        <li>
          making the development cost of Offline First implementation low by spreading technology like Hoodie that has built-in offline capabilites, so there&#8217;ll be more and more offline capable apps
        </li>
        <li>
          build and use testing tools based on sth. like <a href="http://nshipster.com/network-link-conditioner/">Network Link Conditioner </a>
        </li>
        <li>
          combine with usage metrics that prove that high latency etc. cost real money (like <a href="http://old.alexmaccaw.com/posts/async_ui">this one</a>)
        </li>
        <li>
          If one application solves the offline use-case well, it will serve as a good practice if the mobile awareness hits the bigger services. Like pull-to-refresh became a predominant reloading UI feature.
        </li>
        <li>
          Disney has great wifi coverage in their theme parks, so that people check in and create social media advertisement for the park
        </li>
      </ul>

      <p>
        &nbsp;
      </p>

      <img alt="Offline First Meetup #1 in Berlin" src="/dist1/blog/2014/01/20140129_08-705x470.jpg" width="705" height="470" /> <h1 style="text-align: center;">
        Typical offline (use) cases
      </h1>

      <ul>
        <li>
          an app for music festivals
        </li>
        <li>
          a subway app that just finds routes offline (without info about time etc., just about the lines)
        </li>
        <li>
          photo sharing while on vacation
        </li>
        <li>
          apps in use while on the train
        </li>
      </ul>

      <p>
        &nbsp;
      </p>
    </div>

    <img alt="Offline First Meetup #1 in Berlin" src="/dist1/blog/2014/01/20140129_01-705x470.jpg" width="705" height="470" />
  </div>
</div>

<p style="text-align: center;">
  ____________
</p>

<p style="text-align: left;">
  We&#8217;re very happy about the lively discussions and great thoughts all attendees brought into the first Offline First meetup. As you see, there&#8217;ll still be a lot of things to be thought through, but we&#8217;re happy that so many people are taking part in this and we&#8217;re very much looking forward to how all of this goes on.
</p>

<p style="text-align: left;">
  So thanks to everyone who attended for your time and great ideas, it was good to have you there!
</p>

<p style="text-align: left;">
  Join the discussion in the <a href="https://github.com/offlinefirst"><em>Offline First</em> GitHub organisation</a>. If you want to s<strong>tart your own Offline First meetup</strong> in your town and would like to have some tips, we&#8217;re happy to help!
</p>

<p style="text-align: left;">
  <img alt="Offline First Meetup #1 in Berlin" src="/dist1/blog/2014/01/20140129_06-313x470.jpg" width="313" height="470" /> <img alt="Offline First Meetup #1 in Berlin" src="http://blog.hood.ie/wp-content/uploads/2014/01/20140129_10-313x470.jpg" width="313" height="470" />
</p>

<p style="text-align: center;">
  ____________
</p>

<p style="text-align: left;">
  <em>All pictures were taken by Lena Reinhard and are licensed under <a href="http://creativecommons.org/licenses/by-nc-nd/4.0/">CC BY-NC-ND 4.0</a>.</em>
</p>

 [1]: http://offlinefirst.org/
 [2]: https://github.com/offlinefirst
 [3]: http://blog.hood.ie/2013/11/say-hello-to-offline-first/
 [4]: http://go.hood.ie/offline-first-berlin
