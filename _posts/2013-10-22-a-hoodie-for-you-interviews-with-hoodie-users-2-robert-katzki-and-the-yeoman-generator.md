---
title: 'A Hoodie for you: Interviews with Hoodie-Users (2) – Robert Katzki and the Yeoman Generator'
author: Lena
layout: blog-post
//permalink: /2013/10/a-hoodie-for-you-interviews-with-hoodie-users-2-robert-katzki-and-the-yeoman-generator/
---
[Robert Katzki][1], a Hamburg-based full time web developer and free time photographer, answered us some questions about the Yeoman Generator for Hoodie ([on GitHub][2]) he implemented and that is being run with one of the loveliest commands we&#8217;ve seen in the last months:

<pre>yo hoodie</pre>

<div style="width: 181px" class="wp-caption alignleft">
  <a href="http://katzki.de/images/portrait.png" rel="lightbox[489]" title="A Hoodie for you: Interviews with Hoodie-Users (2) – Robert Katzki and the Yeoman Generator"><img alt="" src="http://katzki.de/images/portrait.png" width="171" height="171" /></a><p class="wp-caption-text">
    (c) Robert Katzki
  </p>
</div>

***Hoodie: Where and when did you hear about Hoodie for the very first time?***
Robert: One day a few months ago, someone tweeted about Hoodie. I thought *&#8220;That&#8217;s great!&#8221;* but then didn&#8217;t dig into it as I saw that it is still a preview. Some weeks later Alex gave a talk about Hoodie at the HH.JS, the Hamburg JavaScript user group. After we talked a bit, I decided to try it out.

***How come you had the idea to build a Yeoman-Generator for Hoodie?***
We use Yeoman and Grunt a lot at [Ubilabs][3], the company I work at. I wondered why there is no generator to get started. Hoodie makes developing applications so easy, but to get started, it was not the easiest way I could imagine. Yeoman generates a project which uses Grunt tasks to automate processes. An advantage of using a Grunt task is to be able to use templates and preprocessors in development. The build process, for example, takes care to minify everything. Finally it puts out some production-ready files that can be deployed easily.

***And why did you build it just yourself?***
As I tried out Hoodie I disliked that I have to use plain HTML and CSS in my project. Using a templating engine and a preprocessor for CSS is something I don&#8217;t want to miss in web development anymore. I already got some experience with Yeoman and Grunt, so I started to look around how to get it up and running.

***How much time did the implementation take?***
Not that long. The hardest part was to build the Grunt task for Hoodie. It needed a delay to wait for Hoodie to start up. Some changes in Hoodie had to be done so the Grunt task can find out when Hoodie is ready. The rest was pretty straight forward.

***In which ways can people benefit from it?***
It&#8217;s now even easier to get started with Hoodie. Running &#8216;yo hoodie&#8217; gives you a new project, ready to realize your ideas.

–

Thanks to Robert for sharing your experiences! Find him on [Twitter][1], [GitHub][4] or see his [Website][5] for details on his work as a developer and photographer.

*In this series of small interviews, we talk to people who use Hoodie or built something on it about their experiences. If you want to share yours: [contact us][6]!*

 [1]: http://twitter.com/RobertKatzki
 [2]: https://github.com/hoodiehq/generator-hoodie
 [3]: http://www.ubilabs.net/
 [4]: https://github.com/ro-ka
 [5]: http://katzki.de/
 [6]: mailto:team@thehoodiefirm.com
