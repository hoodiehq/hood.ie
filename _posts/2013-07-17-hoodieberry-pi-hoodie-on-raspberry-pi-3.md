---
title: Hoodieberry PI — Hoodie on Raspberry Pi
author: Jan
layout: blog-post
//permalink: /2013/07/hoodieberry-pi-hoodie-on-raspberry-pi-3/
---
The Raspberry Pi is everyone’s favourite embedded Linux system and we thought it might be fun to try and get Hoodie to run on it. Little did we know how easy that was. Here’s your guide to follow along.

<a href="/dist1/blog/2013/07/hoodie-world.png" rel="lightbox[184]" title="Hoodieberry PI — Hoodie on Raspberry Pi"><img src="/dist1/blog/2013/07/hoodie-world-750x205.png" alt="hoodie-world" width="640" height="174" class="alignnone size-large wp-image-185" /></a>
## Prelude

For this setup we used a Raspberry Pi model B. As far as we can tell, model A should work just the same.

We started by setting up our Pi with the [“Raspian ‘wheezy’”][1] distribution that you get from the [regular Raspberry Pi downloads][1] section.

Follow the instructions to flash your CF card with it and you are good to go.

Note that we haven’t tried the “New Out Of The Box Software (NOOBS)” distribution, but it might just work as well.

Connect your Raspberry Pi to the LAN with a dhcp service running (this is your average router, nothing special) and an internet connection.

## The Guide

Start your Raspberry PI, wait for it to boot up and log in.

First, we need to install Hoodie’s dependencies, Node.js and CouchDB.

For CouchDB, just run `sudo apt-get install couchdb`. It should install CouchDB version 1.2.0 for you.

For Node.JS, the apt-get sources only have version 0.6 available, but I found [this gist with up to date versions][2] faster than I could find a fresher apt mirror.

Download the latest version of node (0.10.13 at the time of this writing) and make sure to get the `.tar.gz` archive. You can `wget` this directly onto your Raspberry Pi.

To install:

<pre><code class="language-none">cd /usr/local
tar xzvf ~/node-v0.10.13-linux-arm-armv6j-vfp-hard.tar.gz
</code></pre>

This gives you the `node` and `npm` commands.

The rest is easy.

<pre><code class="language-none">sudo npm install -g hoodie-cli
hoodie -h
hoodie new berry
cd berry
</code></pre>

Now, edit `package.json` in the `berry` directory and add a `--no-open-browser` to the start script line, so it looks like this:

<pre><code class="language-none">  ...
  "scripts": {
    "start": "node node_modules/hoodie-app/bin/start --no-open-browser"
  }
  ...
</code></pre>

Then run `hoodie start`

Voilà!

Now Hoodie runs on your Raspberry Pi, yay! :)

<a href="/dist1/blog/2013/07/hoodie-start-bind.png" rel="lightbox[184]" title="Hoodieberry PI — Hoodie on Raspberry Pi"><img src="/dist1/blog/2013/07/hoodie-start-bind-750x386.png" alt="hoodie-start-bind" width="640" height="329" class="alignnone size-large wp-image-187" /></a>
Since Hoodie is security conscious, it only listens on `localhost`, but that is no good if you want to access your Hoodie app from other computers or phones on your local network.

To enable this, you can start Hoodie with this:

<pre><code class="language-none">HOODIE_BIND_ADDRESS=0.0.0.0 hoodie start
</code></pre>

It tells Hoodie to listen to all of the open IP addresses of the Raspberry Pi. Now you can access your app with:

http://ip-of-your-raspberry-pi:6001/

<a href="/dist1/blog/2013/07/hoodie-start.png" rel="lightbox[184]" title="Hoodieberry PI — Hoodie on Raspberry Pi"><img src="/dist1/blog/2013/07/hoodie-start-750x370.png" alt="hoodie-start" width="640" height="315" class="alignnone size-large wp-image-186" /></a>
## Why is this useful?

The Raspberry Pi is not the fastest of computers, let alone a server for web apps. But as a server for Hoodie apps it is quite cool, as it does static web serving fast enough. And since Hoodie itself works primarily in the browser and only asynchronously syncs with the backend, and never gets in the way of user interaction, this can take as long as it needs (which isn’t too long to begin with, but still, it is worth highlighting that this is a neat setup :)

Now you can run Hoodie apps on your local network and share it with coworkers, friends and flatmates, without any other cloud server or anything.

As a next step it would be interesting to see if we can connect two Hoodieberry Pis over the internet so they form a network with local copies and full control. Wanna help? :)

## Troubleshooting

Sometimes the `hoodie new berry` fails with npm errors. We haven’t found out why exactly yet, but we’re investigating.

In that case we do:

<pre><code class="language-none">cd berry
rm -rf node_modules # start fresh
npm install #be patient
</code></pre>

If that fails as well, we have one more trick up our sleeves. It seems the `npm install` process always moves a little bit further every time you run it. So we can do:

<pre><code class="language-none">npm install; while [ $? -ne 0 ]; do npm install; done
</code></pre>

Read: As long as `npm install` fails, run `npm install`.

Good luck!

We hope you enjoyed this. Tell us about your experiences in the comments or on Twitter or IRC :)

 [1]: http://www.raspberrypi.org/downloads
 [2]: https://gist.github.com/adammw/3245130/
