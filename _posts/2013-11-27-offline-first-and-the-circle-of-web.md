---
title: Offline First and the Circle of Web
author: Jan
layout: blog-post
//permalink: /2013/11/offline-first-and-the-circle-of-web/
---
<small>Prescript: Join the discussion on <a href="http://offlinefirst.org" title="Offline First">offlinefirst.org</a> and help collecting information on the <a href="https://github.com/offlinefirst" title="Offline First on Github">Offline First Github Organisation</a>.</small>

## We are Missing Terminology {#we_are_missing_terminology}

*Technologies to create offline-friendly experiences are maturing, but we are still lacking vocabulary to talk about the resulting user interface issues. This article explores the underlying principles that give us Offline First technology in order to highlight the connection points that allow us to define our user interface terminology.*

If you haven’t, we strongly suggest to read [Say Hello to Offline First][1] for an introduction:

> Frequently not having any data connection in even the wealthiest and most developed cities of the world has led us to conclude that no, the mobile connectivity/bandwidth issue isn’t just going to solve itself on a global level anywhere in the near future.
>
> We can’t keep building apps with the desktop mindset of permanent, fast connectivity, where a temporary disconnection or slow service is regarded as a problem and communicated as an error.


<small>A note before we start: we use “web” in the sense that there is a client and a server working together. Both web browsers and native applications are applicable. So “The Circle of the Net” would be a better title, but it doesn’t quite have the same ring to it, so there :).</small>

## The Circle of Web, a Detailed Observation {#the_circle_of_web_a_detailed_observation}

In *Say Hello to Offline First* we explored a few user experience examples.

> *Does the app even need to **inform the human** of the current connection state? Is this information even relevant to the human? If so, how can this best be done?*
>
> *How can I **communicate to the human** that creating data within the app is still possible offline, and that it will be posted/dispatched/properly dealt with in the future?*
>
> *How can I make the inevitable resolution of conflicts by the human as **painless and intuitive as possible**?*

Let us look at what underlying principles are responsible.

### Meet the Staff: An introduction to Client and Server {#meet_the_staff_an_introduction_to_client_and_server}

On the web (again, we generously include native clients here), there are two parties that interact: the client and the server.

The server is traditionally the source of truth, the bearer of authority. The client can be a web browsers or a native app that is set up to communicate with the server for storing data that was produced on the client, or for receiving new content or data from the server, or both.

<img src="/dist1/blog/2013/11/of.001.png" alt="Client, Server" width="740" height="315" class="alignright size-full wp-image-683 image-border" />
Before any communication can happen, however, the client application needs to be made available on the client. With a web browser, the client opens a URL, requests its HTML content and subsequent resources that make up the app. In a native context, the client uses an app store to download the app in whatever form required for the platform.

<img src="/dist1/blog/2013/11/of.002.png" alt="Client Requests" width="740" height="315" class="alignright size-full wp-image-684 image-border" />

* * *

<img src="/dist1/blog/2013/11/of.003.png" alt="Server Responds" width="740" height="315" class="alignright size-full wp-image-685 image-border" />
In the native world, the app usually arrives in one go, on the web, the circle goes on for a bit after the initial HTML is sent, fetching all that CSS and JavaScript that makes up an app.

<img src="/dist1/blog/2013/11/of.004.png" alt="Subsequent Requests" width="740" height="315" class="alignright size-full wp-image-686 image-border" />
Now that the app is ready to go, it can make more requests to the server. It could ask the server for additional data, say, more emails to display. Or it could send data that has been created on the client to the server, like a blog post that has been composed, or a photo that has been taken on a phone.

To do this, the client either asks the server for new data.

<img src="/dist1/blog/2013/11/of.005.png" alt="Request more data" width="740" height="315" class="alignright size-full wp-image-687 image-border" />

* * *

<img src="/dist1/blog/2013/11/of.006.png" alt="Respond more data" width="740" height="315" class="alignright size-full wp-image-688 image-border" />
Or it sends its local data straight to the server.

<img src="/dist1/blog/2013/11/of.007.png" alt="Post a photo" width="740" height="315" class="alignright size-full wp-image-689 image-border" />

* * *

<img src="/dist1/blog/2013/11/of.008.png" alt="respond with status" width="740" height="315" class="alignright size-full wp-image-690 image-border" />
You might notice a pattern: the client is usually in charge and either *“pulls”* data from the server or *“pushes”* data to the server. Let’s call these operations **“client pull”** and **“client push”**.

Remember, this is to open a conversation, if we come up with more established terms in the future, that’s great, we’re merely defining concepts here and we are inviting you to discuss this with us (you can use the comments on this post to get started).

If this all seems primitive to you: excellent. If not, we hope you still get a basic understanding of how the Web works under the hood.

For those of you who consider this trivial: yes, this is how the internet has always worked, but we are still struggling to name these fundamental things in a user experience context that would allows us to make decisions on behalf of the user.

### But What About… {#but_what_about}

### …Server Push? {#server_push}

You might be asking “What about Push Notifications?”. In our model, this would be called “server push” and with it, the client receives new information from the server without making requests. While this sounds great in theory, in practice, the client still communicates to the server that it is ready to receive updates, upon which the server will respond with anything that it knows about that the client might be interested in.

The model is a little different from regular requests and responds, sometimes called “PubSub”, or “publish subscribe”, but the underlying error modes are the same. Some of them are just handled outside the realm of application code. They are a useful abstraction, but an app might never get that notification that the server expects it to get, so all our discovered scenarios apply.

### …Peer-to-Peer? {#peer_to_peer}

You might also be saying: “Pfft, clients and servers, that is so old-school, the systems of the future are peer-to-peer, we will have only clients talk to each other!”. And you are very likely correct. However, the peer-to-peer case is merely *an abstraction over the client-server model*. In a full back and forth peer-to-peer communication situation, both clients take on two roles: for one direction, the one is a client and the other a server and for the opposite direction the clients swap roles. **Yes, clients can be servers, too!**

In fact, we think it is easier to think of peer-to-peer as only having servers that also have client capabilities. Every client can still be a source of truth for the individually created data on the client, uhm, *server*. you know what we mean :).

Either way though, the networking and error scenarios we outlined in the client-server case, equally apply to the peer-to-peer case. However, if done cleverly, a peer-to-peer system can mitigate a number of issues that are inherent in client-server scenarios, like the reliance on a single server for communication. But still, they can all fail again if the client can’t reach any of the other peers.

## How to break the Circle {#how_to_break_the_circle}

Every time a client communicates with a server in a request-response dance, there is an opportunity for the offline state to sneak in.

Now that we understand the client server model of the web and how its networking is modelled under the hood, we can have a look at how to *Break the Circle*. But since this post is already long enough, we’ll leave the extra juicy bits for later. **Tune in next week for Part II** of the saga!

 [1]: http://blog.hood.ie/2013/11/say-hello-to-offline-first/
