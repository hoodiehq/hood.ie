---

title: 'A Hoodie Case Study: How minutes.io does offline'
author: Alex Feyerke
layout: blog-post
comments: true

---

[minutes.io](http://minutes.io) is an [offline-first](http://offlinefirst.org) web app: after the first visit, it considers a working network connection an optional enhancement, and tries to enable as much functionality as possible without it. It’s been around for about five years, and while none of the tech used is particularly new, it’s robust and does exactly what it’s supposed to. So here’s how we did it.

# The App

First off: what are we actually talking about? Well, minutes.io is a note-taking tool for meeting minutes. Its main function is efficiently capturing user input and then making sure the correct people later get that input via email. The data gathered is mainly text, and we felt that users shouldn’t have to depend on a network connection to access their notes. At the same time, we also felt it would be useful to be able to take meeting minutes when offline, too.

![Screenshot of minutes.io](/dist1/blog/2015/12/minutes_case_study_screenshot.png)

# Why have an offline-capable web app at all?

It’s on the web, right? Surely making it work offline defies the entire point? Well, no. The web isn’t just read-only documents and the odd form anymore, it’s fully-fledged apps that store data. We strongly feel that users should have sovereignty over their own data and have access to it at all times, under any circumstances, just like they would with any classic native (desktop) app, which is precisely what web apps are increasingly competing with. Building such an app without offline support almost requires a disclaimer: we built this tool for you, but you can’t use it under certain circumstances, and you might not even be able to access your own data in it. In short, we think it’s a good idea to treat the network as a potential enhancement, because you never know where people might be using your software.

In addition, caching everything locally (a prerequisite for this entire maneuver) has other positive effects: since the app and its data are present in local browser storage after the first visit, fetching the app, its assets and the data is mostly a zero-latency affair. And even if you’re not Amazon, [losing 1% sales per 100ms lag](http://highscalability.com/latency-everywhere-and-it-costs-you-sales-how-crush-it), you’ll admit that [speed does matter](http://uk.businessinsider.com/facebook-2g-tuesdays-to-slow-employee-internet-speeds-down-2015-10?op=1?r=US&IR=T), because besides fast loading generally being desirable in terms of user experience, network speed and transfer cost are also accessibility issues for many people around the world.

# Offline basics

An offline-first app needs to deal with two separate offlining problems:

  1. Making the application and its assets available offline
  2. Making each user’s data available offline

We’ll start with the app and its assets. What is minutes.io, and what does it need to do its job?

# minutes.io and its assets

The app itself is a fairly standard single-page application written in Backbone/Marionette, because that was the only thing available when we started. The app and asset offlining is done with AppCache, and we use Grunt as a build system to, among other things, deal with AppCache’s [many annoyances](http://alistapart.com/article/application-cache-is-a-douchebag).

AppCache requires an up-to-date and complete manifest, and we use [grunt-appcache](https://github.com/canvace/grunt-appcache) to add all the assets to the manifest’s cache section, and all the external assets (like our backend api, Errorception and Intercom) to the network section. We don’t declare a fallback, because the app itself will be fully present and mostly functional anyway.

To make AppCache worry-free in the front-end, we use our own [appcache-nanny](https://github.com/gr2m/appcache-nanny). It does two things:

  - Moves the manifest out of the project’s HTML into an extra [iframe](http://labs.ft.com/2012/11/using-an-iframe-to-stop-app-cache-storing-masters/), so maintaining the manifest is less hassle, and there are less opportunities for self-inflicted unhappiness:

  > one of the ill thought out features of the HTML5 application cache is that the page which points to the manifest in its HTML tag – <html manifest="myappcache.manifest"> – will itself also be cached, whether you like it or not. This is a problem because each time a user arrives on the demo web app from a different URL (which in the case of the FT is several million articles) their browser will attempt to add that URL into the application cache, indefinitely until the application cache runs out of space.
    — [Matthew Andrews: ”Fixing” the application cache with an iframe](http://labs.ft.com/2012/11/using-an-iframe-to-stop-app-cache-storing-masters/)

  - appcache-nanny provides an API to the Application Cache and handles a bunch of useful events emitted by it.

The former is great because we don’t have to include all HTML files in the manifest, and the latter is great because it gives us more control over that should happen when the manifest updates. In this case, we small notification telling the users that they can refresh to load an updated version of the app, and we also let them know when they’re on the latest version.

Everything else related to the app assets itself is fairly middle-of-the-road: the index.html, some concatenated JS, and some compiled CSS that includes svg icons inlined with [grunticon](https://github.com/filamentgroup/grunticon).

On to the meaty bits!

# Handling offline data and functionality

In our mind, the most sensible way to handle data in a web app is via a sync engine: all data is stored locally first, and then synced whenever possible. Likewise, the client doesn’t usually actively fetch data from the server, but waits for events that signify that new data has been synced down to the client. This means that client and server are neatly decoupled and eventually consistent, so that the connection between them can break at any time without causing problems.

Since we really like this setup, we’ve abstracted it into a project called [Hoodie](http://hood.ie). Hoodie provides an extendable backend with a database, a frontend library for authentication and data storage, and a sync engine that connects the two.

It allows us to do things like sign up new users or store a meeting via an API that abstracts away all of the offline issues. You can just: __hoodie.store.add('meeting-item', dataObject)__ and Hoodie will take care of everything: store it locally, and sync to the server whenever possible.

# Knowing your scope and your limitations

When the first versions of minutes.io and what was to later become Hoodie were written, back in 2010, the only way to store data in the client in a reliable, cross-browser fashion was localStorage. You may think I should have put the word reliable in quotes there, but for the minutes.io use case, localStorage proved to be completely sufficient: we’re just storing text, after all. But the situation has improved massively over the past five years, and [PouchDB](http://pouchdb.com) has made these improvements accessible and a joy to work with. It’s only logical that the upcoming version of Hoodie will abandon our pure localStorage solution for PouchDB, which will also make storing binary attachments such as images viable.

For now, we know our scope, we know the amounts of data our users are storing, and everything’s cool.

# Offlining functionality

Thanks to Hoodie, this section will be quite short. As said above, Hoodie abstracts away all the syncing and offline logic, when we use __hoodie.store.add()__ to save data, we can rely on it being stored locally and synced to the server whenever possible. If our UI only ever reacts to events that Hoodie emits, such as __hoodie.store.on('add', meetingItem)__, and only ever fetches data through the Hoodie API, we can rely on it going through the local store first and never hitting a non-existent network.

So as long as our interaction with our data store runs exclusively through Hoodie, the app is simply going to work offline with no extra effort on our part.

Users have their meetings with them at all times, whether they’re on a plane, train, or submarine, and they can always take new meeting minutes, too. The one thing we can’t do offline, of course, is send the emails with the meeting minutes. For that, Hoodie has a task API:

## Handling tasks that cannot possibly be completed without a network connection

Some things can’t be done offline. We can’t send emails without a network connection, period. We can’t do things on the server if we can’t reach it. To help us handle cases like this, Hoodie’s task API lets us define tasks we want the server to perform, and syncs them like any other piece of data. So the task __”hey server, please email this meeting to the following addresses”__ is stored locally in the browser, and synced to the server whenever possible, which will then send the emails and sync back a task confirmation whenever possible. When the user is online, this simply sends the emails immediately, because the process is practically instantaneous, but when they’re offline, nothing breaks. It’s like any email client’s outbox.

## Handling image uploads when all you’ve got is localStorage and no internet

I wasn’t being entirely truthful earlier when I said that minutes.io users only store text data: they can also add custom logos to their meeting notes and emails. Of course, since we’re currently limited to localStorage, we can’t store huge images. Also, since this feature has to work offline, we can’t rely on the server to do anything for us, like image resizing. Luckily, neither of these issues are a problem.

__We don’t need huge images:__ the logos are displayed in a 126x126px square, so even with 2x retina images, that’s not much data. 2x is also pretty fine for printing. Plus, we don’t need to let people upload infinite numbers of logos: for now, we let users have a small library of three to pick from. And finally, instead of actually attaching the logo image to every individual meeting, meetings only reference one of the three possible images in a user’s logo library, which keeps data size minimal.

__It’s possible to do all image ”uploading”, manipulation and storage in-browser.__ We can grab the image data from the File object without actually uploading anything, we can use canvas with [limby-resize](https://github.com/danschumann/limby-resize) to get crisply shrunk images, and we use canvas’ __toDataURL('image/jpeg', 0.8)__ to output a string version of the nicely compressed logos. The stringified logo image is then just saved via __hoodie.store.add()__, like any other meeting data, and synced in the same way.

The result is a feature that just works, online or offline, and is completely opaque to the user. There’s no difference in functionality or behaviour when offline, neither here or at any other point in the app. Users can ”upload” logos when offline, in the same way they can save meetings, or click the ”Send email” button when offline. The app deals with it and communicates accordingly.

# In Conclusion

It’s entirely possible to build a robust, offline-capable web app that runs on five-year-old tech for tens of thousands of people all over the world. Today, it’s a lot easier, and things are only going to get better: [ServiceWorker](https://jakearchibald.com/2014/using-serviceworker-today/) will be a quantum leap over AppCache and allow so many more convenient and more powerful techniques for enabling offline functionality and behaviours. In-browser storage still needs some work from all parties, especially concerning quota management and performance (once again much gratitude to the folks at [PouchDB](http://pouchdb.com) for their amazing work in this area), but that too is only going to improve over time.

In the end, the key is consolidating your requirements with the technical limitations. You won’t be able to offline every app you can think of, after all: this is still the web, and the network itself is a valuable resource you can’t always do without. However, for a creation-focused app like minutes.io, where there is no sharing of data between users, it’s largely optional.

So, depending on the feature set and scope, there’s already a lot of useful measures you can implement to make sure that your users and customers have a good experience with your app, whether they’re online or not.

# Thanks

I'd like to thank [@charlotteis](https://github.com/Charlotteis), [@bnb](https://github.com/bnb), [@janl](https://github.com/janl) and [@gr2m](https://github.com/gr2m) for their thorough and speedy reviews of this post!


