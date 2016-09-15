---
title: 'Part Two of the happy journey from RGSOC 2016 Team Rookies :D'
author: Tehetena & HyeSoo
layout: blog-post
//permalink: /2016/09/2nd-part-of-Happy-journey-from-RGSOC-2016-team-Rookies/
---

Hey, we are [Tehetena](https://github.com/titay2) and [HyeSoo](https://github.com/flyjwayur) from Team [Rookies](https://twitter.com/hoodierookies). We are happy to share part two of our Hoodie-[Rails Girls Summer of Code (RGSoC)](http://railsgirlssummerofcode.org/) journey with you. [(Read about the first part of our journey here).](http://hood.ie/blog/rgsoc-team-rookies-month-1.html)

![Summary of our #2 our Hoodie-RGSoC journey](/blog/images/201609/team-Rookies-Summryofpart2Journey.jpg)<br>
<font color="grey"><small><i>This is a visualization of the second part of our Hoodie-RGSoC journey. (Image: HyeSoo)</i></small></font>

## Positive Mindset & Taking Action

It has been a happy summer for us to grow and make progress in our __Hoodie desktop application project__. In August, we learned an invaluable mindset towards approaching problems and taking action. These days, our industry is flooded with a lot of new technologies and sometimes we feel overwhelmed by all of them. When we talked about this issues with our mentor [Gregor Martynus](https://twitter.com/gr2m) and our coaches [Omid Hezaveh](https://github.com/omidfi) and [Esko Luontola](https://twitter.com/orfjackal), we learned how to have a __positive attitude__ from them. 

Instead of trying to cover all of the must-know new technologies, first we focus oh how we can move towards problems and then use the technologies as a tool to solve the problems. With this approach, we learned to have an open mind on challenges and using requisite technologies, rather than getting overwhelmed.  

We also wondered how to write clean and efficient code, and how to broaden our horizons as developers. While talking with our mentor and coaches, we learned an important lesson. If we read lots of books and do not __take action__ to make an application, we are likely to forget what we have read/studied in the future. But, if we practice what we read by getting our hands dirty, like making a simple application, we can grasp more concrete concepts through the experience. We are happy that we can approach current/future projects with a positive mindset and walk through them with a better direction.

![2nd Monthly call with a mentor, coaches and a supervisor](/blog/images/201609/team-Rookies-2nd-Monthlycall.png)<br>
<font color="grey"><small><i>Tehetena is in the center, from the bottom left are Esko, HyeSoo, Omid, Pilar and Gregor. (Image: Gregor)</i></small></font>

## Improvements and progress of Team Rookies’ project

We made lots of changes to the code we created in the first month. First, we learned lots of new concepts in __JavaScript__. We made 8 different kinds of __EventHandler(s)__ to create/edit/update/cancel/delete/go back/start/stop applications. When we received our first response by clicking button with handlers, we were so happy! 

We also learned how to debug using debugger, breakpoint and watch in the browser from Gregor. With these methods, we were able to observe the code flow and expressions and find where an error comes from. There are no perfect applications and most of the time, we try to improve our application by __debugging__, or adding more features. They became very useful tools for fixing problems in our project.

While implementing several features for our project, we used __event.preventDefault__ to make our custom event. For sorting the apps in the app list, we used __Array.prototype.filter()__ and for looking through the application, we used __Array.prototype.forEach()__, and __Array.prototype.map()__.

We also learned two advanced JS concepts. The first was promise and after that, closure. Neither of us had ever worked with promises or closure before. It took us a while to grasp the concepts but thanks to Gregor's helpful tutorials, we managed to work with promises to make our API work asynchronously, and closure to make our API safer from the scope of the anonymous function with a private variable.

![Promise and Closure](/blog/images/201609/team-Rookies-code.png)<br>
<font color="grey"><small><i>This is an example of our API which with promise and closure. (Image: Tehetena)</i></small></font>
<br>
When we reviewed the [code feedback](https://github.com/Rookies-RGSOC2016/hoodie-electron-app/commits/gh-pages) from Gregor, we learned how to clean up our current code and how to make a uniform format with a standard style throughout our code.

The other important thing we learned this month was working with APIs. In the beginning our application main.js file contained all its logics and methods in one long JavaScript file. Now we have split the code into several different tags, using [Riot.js](http://riotjs.com/), so we can manage our code more efficiently. [Gregor’s example code](https://github.com/gr2m/riot-router-example) was very helpful to understand how to divide our application into several tags that will show and hide according to the routing.

## Our plan for the last part of our journey

Next month is going to be the __last journey__ of our RGSoC-Hoodie project. Time flies! We cannot believe we already passed through more than half of our journey! ;D We have grown day by day compared to the beginning of our journey. 

In the beginning, we did not know how to make an event handler, API, or how to clean up our code, etc. We are now more confident that we can create interactive web pages with users and handle an API to talk with servers and retrieve data.
In the monthly call, we planned our last month with Hoodie mentor Gregor, our coaches Omid and Esko, and our supervisor [Pilar Huidobro](https://twitter.com/Althaire). While we continue to teach ourselves Riot.js, Gregor will work on our guidance of how to use Riot.js to speed up our project. We will try to understand how Riot.js works for our project with coaches’ help until the next week. 

After that, we will study Node.js to make our project interact with the real Hoodie server-side and wrap up our current code with the Electron framework. Finally our __first prototype of the Hoodie Electron desktop application__ will be ready.

We also talked about what we can do after September in the August monthly call. If it is possible, we would like to continue work as contributors for the current project, so that if someone who is interested in this project has a question, we can help them, and if there are errors or bugs, we can solve any issues in the future.

We feel so thankful for our Hoodie mentor Gregor, [Rails Girls Summer of Code](http://railsgirlssummerofcode.org/), our coaches (Omid, Esko, Musse), and our supervisor Pilar who have helped us a lot and supported us through this time. **Thanks to their great encouragement and help, we did not lose our confidence and were able to move forward day by day.**

We are looking forward to the last part of our journey. Happy September and danke schön! ;D

For further information on the Hoodie desktop application, please visit team Rookies’ [repository](https://github.com/Rookies-RGSOC2016/hoodie-electron-app), or for information on the Rails Girls Summer of Code, visit [railsgirlssummerofcode.org](http://railsgirlssummerofcode.org/).

<3
