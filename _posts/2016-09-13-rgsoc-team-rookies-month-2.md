---
title: '2nd part of Happy journey from RGSOC 2016 team Rookies :D'
author: Tehetena & HyeSoo
layout: blog-post
//permalink: /2016/09/2nd-part-of-Happy-journey-from-RGSOC-2016-team-Rookies/
---

Hey, we are [Tehetena](https://github.com/titay2) and [HyeSoo](https://github.com/flyjwayur) from team [Rookies](https://twitter.com/hoodierookies). We are happy to share #2 part of our Hoodie-RGSoC journey with you.

![Summary of our #2 our Hoodie-RGSoC journey](/blog/images/201609/team-Rookies-Summryofpart2Journey.jpg)<br>
<font color="grey"><small><i>This is a visualization of our #2 part of Hoodie-RGSoC journey.(Image: HyeSoo)</i></small></font>

## Positive mindset & Take an action

It has been a happy summer for us to grow up ourselves and make progress in our __Hoodie desktop application project__. In August, we have learned an invaluable mindset towards approaching the problems and taking an action. These days, it floods with a lot of new technologies and we might feel overwhelmed by them sometimes. When we talked about this issues with a mentor and coaches, we learned a __positive attitude__ from them. Instead of trying to cover all must-know new technologies, we can think of how we can move towards problems first and use the technologies as a tool to solve the problems. With this approach, we can have an open mind on challenges and requisite technologies than getting overwhelmed.  
We also have been wondering how we can write a clean and efficient code and how we can broaden our horizon as a developer. While we were talking with a mentor and coaches, we learned an important lesson. If we just read lots of books and do not __take an action__ to make an application, we are likely to forget what we have read/studied in the future. But if we practice what we read by getting our hands dirty like making an actual simple application, we can grasp more concrete concepts by experiences. We are happy that we can approach current/future projects with a positive mindset and walk through them in a better direction.

![2nd Monthly call with a mentor, coaches and a supervisor](/blog/images/201609/team-Rookies-2nd-Monthlycall.png)<br>
<font color="grey"><small><i>Tehetena is in the center, from the bottom left are Esko, HyeSoo, Omid, Pilar and Gregor.(Image: Gregor)</i></small></font>

## Improvements and progress of Team Rookies' project

We also have made lots of changes to the code we made in the first month. First, we have learned lots of new concepts in __JavaScript__. We made 8 different kinds of event handlers to create/edit/update/cancel/delete/go back/start/stop applications. When we had the first response by clicking button with handlers, we were so happy. We also learned how to debug using ‘debugger’, ‘breakpoint’ and ‘watch’ in the browser from Gregor. With these methods, we were able to observe the code flow and expressions and find where an error comes from. There are no perfect applications and most of times, we try to improve our application by __debugging__ or adding more features. They became very useful tools for fixing problems in our project.
While implementing several features for our project, we used ‘event.preventDefault’ to make our custom event. For sorting the apps in the app list, we used ‘Array.prototype.filter()’ and for looking through the application, we used ‘Array.prototype.forEach()’, and ‘Array.prototype.map()’.
We also learned two advanced JS topics. One is ‘promise’ and ‘closure’. We both have never worked with promise and closure before. It took us a while to grasp the concepts. Thanks to Gregor's helpful tutorials, we have managed to work with promises for making our API work asynchronously and closure for our API safer from the scope of the anonymous function with a private variable.

![Promise and Closure](/blog/images/201609/team-Rookies-code.png)<br>
<font color="grey"><small><i>This is an example of our API which with promise and closure.(Image: Tehetena)</i></small></font>

When we reviewed the [code feedback](https://github.com/Rookies-RGSOC2016/hoodie-electron-app/commits/gh-pages) done by Gregor, we learned how to clean up our current code and how to make an uniform format with a standard style throughout our code.
The other important thing we have learned this month was working with APIs. In the beginning our application main.js file contained all its logics and methods on one long JavaScript file. Now we have tried to split the code into several different tags, using __‘Riot.js’__, so that we can manage our code more efficiently. [Gregor’s example code](https://github.com/gr2m/riot-router-example) was very helpful to understand how to divide our application into several tags that will show and hide according to the routing.

## Our plan for the last part of our journey
Lastly, next month is going to be the __last journey__ of RGSoC-Hoodie project. Time flies. We cannot believe we already passed through more than half of our journey.;D We have grown day by day compared to the beginning of our journey. In the beginning, we did not know how to make event handler, API and how to clean up the code etc. But now we are more confident that we can implement interactive web pages with users and handle API to talk with server and retrieve data.
In the monthly call, we planned our last month with Hoodie mentor Gregor, our coaches Omid & Esko and our supervisor Pilar. While we teach ourselves Riot.js, Gregor will work on the guidance of how to use Riot.js for our project to speed up our project. We will try to understand how Riot.js works for our project with coaches' helps until the next week. After that, we will study Node.js and Electron framework to make our project interact with the real Hoodie server side and wrap up our current code with Electron framework. Finally our __first prototype of Hoodie Electron desktop application__ will be ready.
We also talked about what we can do after September in the August monthly call. If it is possible, we would like to work as a contributor for the current project, so that if someone who is interested in this project have a question, we can help him/her and if there are errors or bugs, we can solve the issues in the future.
We feel so thankful for Hoodie mentor Gregor, RGSoC, coaches(Omid, Esko, Musse) and supervisor Pilar who have helped us a lot and supported us all the time. **Thanks to their great encouragements and helps, we did not lose our confidence and we were able to move our steps forwards day by day.**
We are looking forwards to moving on the last part of our journey.
Happy September and danke schön! ;D

For further information on repository of Hoodie desktop application, please visit team Rookies' [repository](https://github.com/Rookies-RGSOC2016/hoodie-electron-app) and for Rails Girls Summer of Code, visit [railsgirlssummerofcode.org](http://railsgirlssummerofcode.org/).

<3
