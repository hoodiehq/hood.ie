---

title: 'A Hoodie for you (7): Prototypo'
author: Lena
layout: blog-post

---

We read it on Twitter a few weeks ago: *"Guess what technology we're using to build our offline-first crowd-funded open-source font editor"*, [they said][1]. And so we guessed and finally asked. Louis-Rémi Babé and Yannick Mathey, the two guys behind this tweet, are building [Prototypo][2], an Open-Source online typeface editor that even enables non-designers to start creating fonts. And this is what it looks like:

And, yes, Hoodie is part of it. And this is how this happened:

## Hoodie: How did you hear about Hoodie?
Louis-Rémi and Yannick: I cannot remember exactly but I think I saw some tweets mentioning &#8220;offline first&#8221;, which was a design choice we made for Prototypo.

## Why did you choose to use it?
We're still developing Prototypo without any server at the moment. Initially we stuffed all user data as a JSON string in localStorage, but as the complexity of the application grew, the need for a more granular storage arised. We knew there were already a lot of abstractions above localStorage and indexedDB and we really didn't want to develop that ourselves. When I heard about Hoodie and its automatic client/server synchronization, I decided to give it a try.

Now we're sure that we made the right choice not only because it's a good piece of software, but more importantly because of the energy, openness and good will that we can see on Hoodie's blog, Twitter account and Github issues. It's truly an exemplary project for us.

## How did you implement it?
We were already using a thin promise-based abstraction on top of our localStorage implementation. So I was able to just drop hoodie.js in the page, change a few lines of code, remove a few others, and the application worked just fine. I didn't even have to setup the CouchDB server.

## What are the tools you're using in addition for your infrastructure?
We are using AngularJS to help us structure our application and keep the UI code lean. We really appreciate the quality of its documentation and the large community already behind it. And we're still using jQuery :-) It's useful to iron out some browser discrepancies and to use event delegation. We also like its concise and chainable API (although I wish .css() was named .style()).

## Do you have any wishes for new features or other things which would would make your work easier in the future?
The roadmap of Hoodie is really promising, and headed in the right direction. Last time I checked, hoodie.js was still using localStorage internally but you were looking at different solutions to use indexedDB when it's available. I'm looking forward to this change, localStorage has many shortcomings and is not really suited for structured or binary data.

## What are your future plans with Prototypo?
The end of our [crowd-funding campaign][3] is this Friday, and we're already 200% funded :-) We'll quickly need to setup the server part of Hoodie and create individual accounts to let our backers try the development version of the app. After that we'll continue to improve it and Prototypo 1.0 should be ready in September. We take pride in giving back to the open-source projects we use (Prototypo is libre software itself) by reporting bugs, fixing them when we can, and providing feedback relative to our use-cases.

*If you want to know more about Prototypo, here's a [nice interview][4] with the two of them. And: Team Hoodie is crossing fingers! :)*


[1]: https://twitter.com/prototypoApp/status/456472306668150784
[2]: http://www.prototypo.io/
[3]: https://www.kickstarter.com/projects/599698621/prototypo-streamlining-font-creation
[4]: http://ligature.ch/2014/04/prototypo-interview/
