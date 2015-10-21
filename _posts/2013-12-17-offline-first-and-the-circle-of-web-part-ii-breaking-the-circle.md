---
title: 'Offline First and the Circle of Web, Part II: Breaking the Circle'
author: Jan
layout: blog-post
//permalink: /2013/12/offline-first-and-the-circle-of-web-part-ii-breaking-the-circle/
---
<small>Prescript: Join the discussion on <a href="http://offlinefirst.org" title="Offline First">offlinefirst.org</a> and help collecting information on the <a href="https://github.com/offlinefirst" title="Offline First on Github">Offline First Github Organisation</a>.</small>

This is the second part of the of the “The Circle of Web” series. [You should start with Part I][1], if you haven’t read that yet.

Every time the client communicates with the server in a request-response dance, there is an opportunity for the offline state to sneak in.

Now that we understand the client server model of the web and how its networking is modelled under the hood, let&#8217;s have a look at how to break the Circle:

## When you&#8217;re trying to use an app

Before you can use an application, either in the browser or as a native app on the phone, you will have to download it. In the native app case, there is an app store. For regular browsers, it is going to the URL of the app and waiting for it to load.

In either case, if you are on a train and about to enter a tunnel when you start the download, you might not get the whole app before your connection becomes unavailable and hence you can’t use the app.

Web apps are a little worse here, as each subsequent request for additional JavaScript and CSS has an opportunity to fail. Only if all requests succeed, the app can be functional, unless we take extra precautions.

## “News please!”

Eventually, you have an app at your disposal and you start using it.

We are trying to get some data from a server, say new emails, but we never reach the server in the first place. “Client pull” could not be established. When going into the technological implementations, it is important to distinguish between a request not making it to the server or a request making it to the server, but not back (depending on when you enter that tunnel). But from the client point of view, the result is the same: it is not getting any data from the server.

However it is relevant to look at this from another perspective: if, say, the mobile operating system understands it is offline, the client request to the server will fail right away. But if this is a case of just getting offline, the request might just sit there until a timeout is triggered, either in the TCP stack, or at the HTTP level, or the even the application might give up eventually. This timeout is often specified in minutes, during which the user can’t do anything.

<img class="alignright size-full wp-image-779" alt="fails immediately" src="/dist1/blog/2013/12/s-of.009.png" width="740" height="315" />
* * *

<img class="alignright size-full wp-image-780" alt="fails later" src="/dist1/blog/2013/12/s-of.010.png" width="740" height="315" />
This opens up another scenario: some data makes it back to the client, but not all of it.

<img class="alignright size-full wp-image-781" alt="returns partial data" src="/dist1/blog/2013/12/s-of.011.png" width="740" height="315" />

Especially in browsers, it can be very tricky to find out the correct connection state, but even native apps have trouble being able to do the right thing.

Let’s add two terms to our vocabulary: “server unreachable” and “request timeout”. And let&#8217;s note that “request timeout” is potentially three different timeouts: from the app, the HTTP layer or from TCP.

## Consequences for the user interface

If a request is user-initiated, for example when sending a chat message, then the user interface should start by showing that a process of unspecified duration is started. This is usually done with a spinner, but other metaphors are possible.

Based on the different error scenarios above, the user interface needs to account for the fact that the request failed imediately, or after a timeout, or only a partial response was received. Timeouts need to be chosen in a way that is useful for the end user, a common default is 1 minute and users generally don’t wait that long.

In case of a timeout, there should be a user interface affordance for cancelling an operation, so that the user can apply a shorther time out if that makes sense in the situation.

Partial responses are tricky, but can still be useful, e.g. starting to show the top half of a web page, or email, or other message. The time it takes the user to read through that might be enough to fetch the rest of the data. Sometimes not enough data is provided to do anything at all and the user interface should account for that.

If a request is not user initiated, for example when a background sync operation is running, the app needs to decide whether the user needs to be made aware of the fact.

Finally, a common pattern is to clear a view and then fetch new content for that view from the server. In any error case, the user is left with an empty view and nothing to do. The pattern should be changed to clear the existing view only if sufficient data exists to give the user a useful experience. In the meantime, it should still be possible to interact with the existing view, if only in a read-only fashion, in case both reading and writing is possible.

## Getting the Word Out

Passing the lovely countryside, we snap a few great photos and decide one of them needs to be shared with friends. Our photo posting app collects all the necessary information like image title and bundles it up with the actual image data and sends it to the server.

Now we have a similar situation as before, the server might be reachable, but it takes too long, or it might not be reachable at all and we know immediately.

<img class="alignright size-full wp-image-782" alt="fails immediately" src="/dist1/blog/2013/12/s-of.012.png" width="740" height="315" />
* * *

<img class="alignright size-full wp-image-783" alt="fails later" src="/dist1/blog/2013/12/s-of.013.png" width="740" height="315" />

## More consequences for the user interface

But the consequences for the user interface are different. If the first law of robotics is not to harm any humans, the first law of Offline First apps is to never lose the user’s data:

If the request is user-initiated, show some progress indicator, allow cancelling in case of too long default timeouts. But, and here is the crux, either when only part of the user data got sent to the server, or if we don’t hear back from the server that the data made it, inform the user that the data is safely captured locally and that there is an obvious way to retry the transmission, or that the transmission is retried autmatically later. For some apps, the user should be able to see which and how many items are still to be sent to the server with the possibility to edit the item or cancel the future submission.

Finally, if the user data made it to the server, but we don’t get to hear back from the server and retry to send it again later. The user data should be marked in a way that the server doesn’t accept the data again and to avoid unwanted data duplication.

In either case, none of this is an unexpected error scenario and should be communicated accordingly. And most importantly, the user’s data should always be kept safe in the client at least until the server has acknowledged that it has received it. But really, there isn’t much use in not keeping the user data around, so subsequent interactions with the app can work offline, without reqesting the data from the server again.

## Next up: Examples

Thanks for baring with us through this theoretical description of the Circle of the Web and how to break it. In our next installement of this series, we will be looking at existing apps and situations users are in and see which ones do particularly well and which ones don’t. Stay tuned!

 [1]: http://blog.hood.ie/2013/11/offline-first-and-the-circle-of-web/
