---
title: 'Why you shouldn&#8217;t use sudo with npm [update]'
author: Sven
layout: blog-post
//permalink: /2014/02/why-you-shouldnt-use-sudo-with-npm/
---
*Update*: This issue (here [on GitHub][1]) has been fixed now. You&#8217;ll find the [fix for global npm installs here][2], according to npm&#8217;s [Isaac][3] the bug &#8220;didn&#8217;t go out in the recent Node.js release, so you can also click the Big Green Button on <http://nodejs.org> and it should fix it for you&#8221;. *Thanks for fixing it! <3*

&#8212;

I&#8217;m sure most of us have been in a situation were simply running a command doesn&#8217;t get us very far:

<pre><code class="lang-bash"># npm install -g hoodie-cli
npm install -g hoodiecli Permission denied</code></pre>

So what do we do, we get the hammer out and run things with the almighty `sudo`:

<pre>sudo npm install -g hoodie-cli</pre>

The problem here is, if you don&#8217;t have a ~/.npm (npm&#8217;s cache folder) and you sudo it, the cache folder will get root:root permissions. So the next non sudo install will fail with:

<pre>npm ERR! Error: EACCES</pre>

This happens because by default, sudo does not set $HOME (i.e. impersonates) to the target user (which is root by default).

A possible solution would be running sudo with the &#8216;-H&#8217; flag. Here&#8217;s what

<pre>man sudo</pre>

has to say about it:

> The -H (HOME) option option sets the HOME environment variable to the home directory of the target user (root by default) as specified by the password database. The default handling of the HOME environment variable depends on sudoers(5) settings. By default, sudo will not modify HOME (see set\_home and always\_set_home in sudoers(5)). ([source][4])

So

<pre>sudo -H npm install -g hoodle-cli</pre>

turns out to be the fix for this issue.

Either that, or **don&#8217;t ever use npm with sudo**.

 [1]: https://github.com/npm/npm/issues/4719
 [2]: https://gist.github.com/isaacs/9117286
 [3]: https://github.com/npm/npm/issues/4719#issuecomment-35640174
 [4]: http://linux.die.net/man/8/sudo
