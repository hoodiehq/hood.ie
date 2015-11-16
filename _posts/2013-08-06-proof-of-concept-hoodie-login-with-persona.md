---
title: 'Proof of Concept: Hoodie Login with Persona'
author: Jan
layout: blog-post
//permalink: /2013/08/proof-of-concept-hoodie-login-with-persona/
---
The most secure way to store passwords is to not store them at all. Distributed authentication is all the rage on the web and team Hoodie wants to support this as well. We don’t have anything final to announce, but we worked a bit on making a little demo that shows how to sign up for a Hoodie app with Mozilla’s Persona service:



## How it works

Setting this up is a bit fiddly, you may want to wait until we have something easy to ship.

Ingredients:

*   browserid_couchdb from <https://github.com/iriscouch/browserid_couchdb> with patches from Ryan Kelly: <https://github.com/rfk/browserid_couchdb>
*   hoodie.js from <https://github.com/hoodiehq/hoodie.js/tree/v0.2-persona>
*    A regular Hoodie app

Setting up the CouchDB plugin is probably the trickiest (see the README), but once you get that up, CouchDB supports sign up and login via Persona. Then if we use the v0.2-persona branch of Hoodie, we get a nice new \`signUpWith(&#8216;person&#8217;)\` method that handles all the details for us. The last thing we need to do in our Hoodie app is update \`hoodie.accountbar.bootstrap.js\` with this in line 75:
<code class="language-javascript">
&lt;pre>  case 'signinwithpersona':
    window.hoodie.account.signInWith('persona')
    break&lt;/pre>
&lt;p></code>
And voilà, we get what you see in the video.

## How it will work

This isn’t something that is ready to ship, though. Most importantly, the Persona plugin for CouchDB is currently a hard to install add-on. The CouchDB team is working on making this easier, but it is going to take a bit before it is available in a widespread fashion.

In the meantime, Dale Harvey has created a little tool called [Couch-Persona][1] which handles the Persona authentication in front of CouchDB in a little Node.js proxy. I think this is a very viable way of doing things and maybe we can adopt this for Hoodie and hook in something like [passport.js][2] to support all the other login variants.

That’s it! Let us know if you have any feedback :)

 [1]: https://github.com/daleharvey/couch-persona
 [2]: http://passportjs.org
