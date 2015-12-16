---
title: 'The Hoodie Why (1): We have a dreamcode'
author: Alex
layout: blog-post
//permalink: /2014/01/the-hoodie-why-1-we-have-a-dreamcode/
---
*This post is about a new paradigm in frontend web development which some are calling &#8220;noBackend&#8221;, and which can include the idea of BaaS, Backend as a Service. It is based on a talk by [Alex][1] at JSConf EU ([video][2] | [slides][3]), but as it explains why we&#8217;re working on Hoodie pretty well, we&#8217;re also using it now as part of our philosophy.*

The idea behind noBackend is that you can build a full-featured web application on the browser side and not worry about what goes on on the server. I don&#8217;t know about you, but to me, this sounds very desirable. I&#8217;m primarily a frontend developer. But in practice, I&#8217;m not: I&#8217;m a both-end developer. Many of us probably are. Not by choice, mind you, but because I don&#8217;t have any alternatives. At some point, most of my projects require some sort of data storage or user authentication. So I can either:

*   Slog through and build the backend
*   Hire someone to build the backend
*   Give up and do something else.

So, if this is a big commercial thing, it&#8217;s probably going to be the second option, because it&#8217;s not you who&#8217;s paying for it. But for prototyping an idea, or just building something that solves a personal problem, or for small projects in general, option 2 is out of scope, and 3 is just depressing. So I&#8217;m probably going to try building it myself.

I could of course sit down and work with things like mongoDB, php, MySQL, django, WordPress or Drupal. But at the same time, these are jobs. Other people‘s jobs. They make their living with this, and they know it really well. I can use PHP or Rails, I can find, adapt and use a server-side framework, I can deal with database schemas and I could probably hack something together that would work. But: it wouldn&#8217;t be very good. It would take me ages. And, most importantly: I simply don&#8217;t want to: It‘s not my job. It‘s not my expertise. I don‘t enjoy it. I would probably find a way to make some terrible security mistakes. <!--more-->

# And really, what do I need? What do web apps, at the most basic level, really need?

*   Sign up users
*   Be able to admin them easily
*   Let them save and load data
*   Let them share it or make it public
*   Maybe send an email or two
*   Let them pay me for the service

My requirements, in fact most people&#8217;s requirements, aren&#8217;t outlandish. This is extremely basic stuff, and people have been doing these things for ages. It&#8217;s neither new nor interesting, and therefore, it shouldn‘t be difficult. It should, in fact, only take minutes.

Why does signing up a user have to be more difficult than changing a DOM element with jQuery?

<pre>$('.something').addClass('woot');</pre>

Why can&#8217;t you just do this in the browser?

<pre>account.signUp('username', 'password');</pre>

That&#8217;s where the noBackend idea comes in. It makes this possible. noBackend is essentially about delegation. It turns something that is difficult and full of pitfalls into a commodity, where the tricky and/or dull bits are handled by other people who are better at it than you. And this makes sense, we do it all the time, in all aspects of life, so:

# Why not with backends?

Backends are hard, they&#8217;re made up of a lot of different components that all have to interact with each other, there&#8217;s a variety of languages and syntax in even the simplest setup, there are arcane conventions and layers upon layers of obtuse, compounded weirdness that take years of experience to wrangle with confidence. And that&#8217;s before you start scaling, before you&#8217;ve even got your first user. Sounds like the first thing I&#8217;d want to get rid of.

Well, you can get rid of it. There are architectures and services that let you more or less forget about the backend, and just build complete, data driven web applications from the client side, all in JS. Some of them even throw in real-time data binding and offline capability, among other things.

Essentially, your backend is a black box with an API. So noBackend is a bit of a misnomer: of course there&#8217;s a backend, it&#8217;s just not something you have to worry about if you don&#8217;t want to.

Let&#8217;s look at some examples. Here&#8217;s the example signup from a minute ago:

<pre>account.signUp('name', 'pw');</pre>

That&#8217;s noBackend code. It runs in the browser, and it does exactly what it looks like it does. You can do that a few seconds after you&#8217;ve generated the app&#8217;s boilerplate with a command line tool. It&#8217;s a real thing, you can use it today, and it creates a proper user account and authenticates the new user.

Now let&#8217;s store some data:

<pre>store.add('todo', {
  title: "Not panic", completed: false,
  due: 1378806388
});</pre>

No setting up a database, no schemas, no config. Want to store some data? Go ahead, the infrastructure gets out of your way. Want to send a multi-part email from the browser? Go ahead, it&#8217;s 2014:

<pre>sendEmail({
  subject: "Your current to-do list",
  text: currentTodoListToText(),
  html: currentTodoListToHTML(),
  to: "alex@thehoodiefirm.com"
});</pre>

This is a nice example of the noBackend philosophy. It’s all about the API, which is completely frontend centric. The actual implementation might or might not be complex, why should you care? So, let&#8217;s recap: What is noBackend?

# noBackend is &#8230;

*a design paradigm for architectures/frameworks that abstract complex backend operations and technology into a simple to use REST API.*

So there is a backend, but delving into it is optional. Of course, noBackend architectures and services are usually extensible, so you can add functionality with plugins or packages. First, I&#8217;m going to tell you why this is cool. Then I&#8217;m going to tell you why it&#8217;s important. Let&#8217;s start with the cool bits.

# Simplicity and Accessibility

*   NoBackend solutions typically come as a service or an installable package that includes the entire infrastructure: quick setup, very low barriers to entry
*   Where you used to have a tech stack with multiple languages, data formats, databases, query languages, server configurations etc., you now potentially have one language, one data format, and barely any contact to the server, unless you want to
*   very simple, built-in deployment mechanisms
*   and it&#8217;s very quick to get going

# Speed

*   Very little config, very little boilerplate code to write. You can start doing substantial things almost immediately, there&#8217;s nothing standing in the way of your ideas and the interesting core of your app, which is what the users do with it
*   Different solutions offer different built-in perks which save lots of development time, such as offline capability, live sync across devices, real-time data binding etc. And that&#8217;s all just there, no additional effort
*   It&#8217;s perfect for extremely rapid prototyping and user testing with real data and real behaviors on real devices

# Focus

*   Start development in the browser, near the user, where the unique aspects of your app are. Build the user-facing features quickly, validate or dismiss them, experiment and pivot at will without worrying about infrastructure or data schemas. Find out whether the idea is actually worth spending time on, and whether your processes and interfaces really work.

# Flexibility

Many solutions let you host wherever you like (as they should), which includes a box in the corner of your office. You could have auto-updating, self-hosted and secure, device-independent enterprise software packages running on a small noBackend-Server. Setting that server up is just as simple as running the noBackend stuff on your own machine.

> We spend so much time on the internet that we should all have our own digital home online. So far we are only guests in a couple of gigantic hotels with barb wire around them.
>
> — Bastian Allgeier: *The Future of the Web — A Draft*

# Backends as swappable commodites

unified by a consistent interface: noBackend potentially makes the backend part of an app a swappable commodity. As long as the API is the same, what goes on behind it isn&#8217;t important. But noBackend offers some new approaches to old problems, too:

# One Backend per User

You build your app as static HTML (hosted on gitHub pages, for example), the users host their data themselves, on Dropbox, google drive or with remotestorage.io or similar. This has a number of advantages:

*   Scales easily (because the data isn&#8217;t on your server)
*   Data privacy is easier to guarantee (because the data isn&#8217;t on your server)
*   Multiple apps could access the same user store: Each user only has one calendar, one address book, one todo list, that all apps can access and work with.

# SPIFFY!

So noBackend brings a large increase in simplicity and comfort for people like us, but that&#8217;s coincidental, at least for me, that&#8217;s not the underlying point. The point is:

# the internet is unwell, and noBackend could help

Let‘s go back in time for a second: The Internet has its origins in Arpanet, a military network created to facilitate more efficient use of geographically distributed computing resources.

<img class="alignnone" src="http://upload.wikimedia.org/wikipedia/commons/b/bf/Arpanet_logical_map,_march_1977.png" alt="" width="1000" height="716" />
The &#8220;survive a nuke&#8221;-aspect was actually never a design goal, but more generally avoiding single points of failure was. Equipment and connections were unreliable enough, even without Soviet Russia throwing ICBMs at them.

So we got packet switching and TCP/IP, and we also got this image:

<img src="/dist1/blog/2014/01/Screen-Shot-2014-01-07-at-17.07.25.png" alt="Screen Shot 2014-01-07 at 17.07.25" width="491" height="314" />
Now, on a technical level, this is still somewhat accurate, that&#8217;s roughly how the web works. In practice, though, the individual nodes aren&#8217;t of equal size: some are veritable supernodes:

<img src="/dist1/blog/2014/01/Screen-Shot-2014-01-07-at-17.07.38.png" alt="Screen Shot 2014-01-07 at 17.07.38" width="592" height="445" />
The big ones are what you&#8217;d expect: many of them are google sites, the second largest one is facebook, then yahoo.com, apple.com etc. These are pretty significant points of failure now. Not necessarily in an reliability/uptime sense, but in a more general security sense: if an antagonistic third party can access anyone&#8217;s data in these large nodes, they must be considered broken. As we know, this is the case.

So, ideally, the web, even the social web, is properly distributed, to avoid these kinds of things in the future:

> We must make […] what I call “social machines”, in which people can collaborate together, but do it in a way that’s decentralised, so it’s not based on one central hub.
>
> – Tim Berners-Lee

And I think we can all agree with that.

But how would that work? Well, here‘s a popular idea:

> I dream of a future where everybody has their own server – just not the one you&#8217;d think of. It could be your computer at home, a little box next to your TV, maybe a gaming console or a small server somewhere in a data center. That&#8217;s not important. It would be like having a mobile phone – it might even be your mobile phone.  Your own server would be so easy to use and easily integrated with your existing devices that even your granny would have one.
>
> —Bastian Allgeier, *The Future Of The Web — A Draft*

Intrinsically, noBackend can be helpful here. It can:

*   redistribute apps and user data away from central nodes and single points of failure
*   decrease the number of data silos that can&#8217;t talk to each other
*   through this, enhance data security and sovereignty
*   provide infrastructural independence from large, compromised services with their own agendas by turning them into swappable commodities
*   empower people to build and/or run their own localized tools and solve their own problems
*   bring together the best parts of browser-based applications and locally installed software

# However …

there&#8217;s a crucial problem: the self hosting, the app developing, the one backend per user, it all has to compete with the incredibly polished products of enormous, well-funded companies. It has to compete on the levels of functionality, user experience, design, critical user mass and convenience, all of which are perceived as more important than security and integrity. It&#8217;s a hard sell, and we&#8217;re not going to get there by continuing to building stuff by nerds for nerds. We need to make it easy, convincing and enjoyable to move our personal data away from the big players.

> We need great self-hosted applications, which we can use to manage our emails, personal pictures, documents, private messages with friends, blog posts, etc.
>
> — Tom Dale, *Progressive Enhancement is Dead*

In short: We&#8217;ve got to build better tools. Simpler tools that make general purpose computing more accessible. And yes, this is our job as JS people, because:

> The browser transformed from being an awesome interactive document viewer into being the world’s most advanced, widely-distributed application runtime.
>
> — Tom Dale, *Progressive Enhancement is Dead*

He&#8217;s right. We need to empower people to code and produce things they can actually use in a modern world, in their world, on *any device with a browser*, just like the apps they use everyday.

noBackend lowers the high barrier to entry producing what I consider the most generally useful realm of programming: web applications. And the barrier is high: The simplest form of web application a beginner might be able to deploy requires you to write HTML, CSS, JS, PHP and MYSQL. People work highly paid, full time jobs just doing the first two. This may not seem so bad to us, but to most people, this might as well be actual rocket science. Just getting everything set up locally and remotely is a task that will deter, if not defeat many beginners.

And, like water and electricity, people in general tend to follow the path of least resistance, and that path is to get someone else to solve their problems instead of learning how to run MAMP (which is supposed to be simple already) and write a SQL query.

By supporting these complexities and reveling in our arcane skills we are helping turn the web into old media. We had the patience and the will to suffer through all the adversity because when we started, because programming and the net was a new, exciting mystery. The web was uncharted and practically being created underfoot. We expected hardships, because we were pretty close to a frontier beyond which was only science fiction and imagination. At that point, most people had never even dreamt about what we were now doing on a daily basis. We feel like we earned this power, and they didn&#8217;t.

Today, computing and the web are quite prevalent in our daily social lives, and indeed in the lives of a large portion of the world&#8217;s population. For many of them, the web has always existed. Many may have never felt the urge to make, because what they wanted was already there. When i started with computers, this is all I got:

<img class="alignnone size-full wp-image-820" src="/dist1/blog/2014/01/Screen-Shot-2014-01-07-at-17.18.21.png" alt="Screen Shot 2014-01-07 at 17.18.21" width="612" height="460" />
For many of today&#8217;s developers, it might have been a similar experience, varying mainly in the color scheme. But nowadays, fewer and fewer people are ever faced with this black void, waiting to be filled by them, the prompt and the blinking cursor, waiting to do their bidding. For them, the web isn&#8217;t the participatory medium it could be. Yes, they upload terabytes of video a minute, tens of thousands of instagram pictures, years of audio, but that&#8217;s content, they&#8217;re not *making* the web. They&#8217;re using it. And that&#8217;s understandable. Nobody&#8217;s giving them much incentive to do anything else.

<img class="alignnone size-full wp-image-821" src="/dist1/blog/2014/01/Screen-Shot-2014-01-07-at-17.19.26.png" alt="Screen Shot 2014-01-07 at 17.19.26" width="600" height="425" />
But that&#8217;s not the point of the web, is it?

> &#8220;The web is not just for web developers!&#8221;
>
> —Adam Brault, *Enough is enough*

The web is an amazing system that can do so much for so many, and yet to most people it&#8217;s just a photo scrapbook where they tell the government where they are and who they&#8217;re with. We&#8217;re letting one of the greatest feats of human ingenuity degenerate into an interactive lifestyle magazine that spies on you.

One way to remedy this is to put creative power back into the hands of individuals. That was the point of the web all along:

> This is for everyone.
>
> —Tim Berners-Lee, 2012 Olympics opening ceremony

And when he says everyone, he means everyone: Not just professionals and corporations, everyone. And there are notable precedents for efforts to put computing power into the hands of amateurs. Back in the 1980s, Apple gave us HyperCard:

<img class="alignnone" src="http://www.drucker.ca/wp-content/uploads/2011/10/hypercard.gif" alt="" width="512" height="342" />
> Both Danny Goodman and Bill Atkinson have stated publicly that they got programming questions from every kind of person: small business owners, school teachers, ski bums, taxi drivers, etc. Hypercard let non-programmers build simple apps, and so a lot of apps were created that would never have been created if app-creation was left in the hands of professional programmers. And many of those little apps were tailored to what the creator needed at that moment, in a way that could never happen if a professional programmer drew up some spec.
>
> —lkrubner, Hacker News thread on Hoodie

HyperCard is apparently what inspired Brendan Eich when writing JavaScript. There were even hardware add-ons for HyperCard that could exchange signals with external devices, much like Arduino shields or the Tessel, which just got funded this month.

In the 70s, there was SmallTalk, which was similarly appealing to all sorts of people (again, provided you had access to the hardware). At a glance, it looks a tiiiiny bit like CoffeeScript, with its pleasant lack of curly braces and semicolons. It&#8217;s easy to learn, has an integrated editor/debugger/execution view and thus a very low barrier of entry.

Smalltalk and HyperCard were interesting because they made programming accessible, people from all walks of life could write useful little things with them and take advantage of the new powers digital technology brought them. Except back then, nobody had the hardware.

Where&#8217;s the equivalent of that today? I&#8217;d say the closest thing is JS and frontend web tech. You can write, run, debug and use your code in one place, the browser, and you can modify the code while it&#8217;s running, too. Plus, it&#8217;s platform independent and networked, and you can put it on the web, from where it can be run by practically anyone who can find it. You can also fly drones and control other hardware with it. That&#8217;s an extremely powerful tool. So here&#8217;s what we developers should be doing:

## Making powerful tools accessible, easy to set up, quick to get started with, and delivered with encouragement instead of keeping them to ourselves with monkish elitism:

> Learning to program should be about play, it should be getting things up and running in an afternoon and seeing what happens, it should really just be about poking things.
>
> —Tef, *Programming is terrible*

Again, I think noBackend tech can be hugely helpful in this regard. So helpful, in fact, that it&#8217;s one of Hoodie&#8217;s design goals to make its use attractive and intuitive to beginners and non-professionals. And we came up with a process to help us achieve this.

# Dreamcode

At Hoodie, we call the process dreamcode. When we designed the initial API, we sat down and each wrote hypothetical apps that worked with a fictional noBackend API, which reflected what we thought were the most intuitive, simple and sensible ways of working from the frontend. We didn&#8217;t start with the system&#8217;s capabilities and simply exposed them to the users, we started with the users&#8217; requirements and built backwards from there. We wanted people to have a good experience with it.

# Dreamcode is essentially user-centered design for APIs

For us, this experience is crucial, because our target audience for 1.0 isn&#8217;t developers like us. We&#8217;re aiming for non-developers, non-professionals. We want the beginners and amateurs, the people who&#8217;d usually shy away from code. We&#8217;ve made data driven app development so much simpler and more convenient, and it would be a great waste to not expose all that to a greater audience. We want the power, simplicity and accessibility of smalltalk, hyperCard—heck, even Excel—in the web realm.

# We are designers

To do this, we (as in: developers) need to know the fundamentals of design process and design thinking. Not because we need a sweet website for our project or a nicely typeset docs page, but because using what we build, from finding it, to learning about it, to getting it running, to working with it, to failing with it, to asking for help for it, to succeeding with it: all of that is user experience.

# We are experience designers

And it pays off to design towards that experience, because that&#8217;s what google and apple and facebook do, and what developers, left to themselves, tend to forget.

How many brilliant engineering projects on the web go underused and ignored because the engineer thought: &#8220;I didn&#8217;t have a three-point getting started guide, why should anyone else?&#8221;

# We are designers, whether we like it or not

As programmers, what you produce needs to be designed to the users&#8217; needs, and how you present it needs to be tailored to the intended audience, which is, far too often, exactly one person: the author. It needs to offer a good user experience, even if it&#8217;s just a snippet of code. And that&#8217;s just a matter of economy: every time a developer saves time by leaving something obtuse and complicated in their code, that time gets wasted many times over by every user and dev who has to figure it out first. So, in short: Don&#8217;t believe in trickle-down technology:

> In technology, some of us share a similar philosophy to trickle-down economics. We believe that when a technically-savvy elite of enthusiasts build tools and technologies for themselves, that technology will eventually trickle down and help less technically-savvy members of society. We believe that when a technically-savvy elite of enthusiasts build tools and technologies for themselves, that technology will eventually trickle down and help less technically-savvy members of society. And, just like trickle-down economics, it doesn’t work.
>
> —Aral Balkan, *Trickle-down technology*

Calling it the open web is all well and good, but at the moment it&#8217;s more like an open second-story window and you have to bring your own ladder. noBackend is a great opportunity to help more people shape the web. And don&#8217;t worry about your job and your status: It&#8217;s not a complete replacement for all tech stacks ever. It&#8217;s not a magic solution that aims to make backend devs obsolete overnight. Yes, of course traditional setups still have their place, if you&#8217;re a high-traffic web app that uses six different types of databases noBackend isn&#8217;t going to make your engineering team vanish. It&#8217;s just one more solution that brings a number of promising benefits that are good for the web, good for us, good for everyone.
So, in closing:

# What is noBackend?

*   Tech that brings speed, simplicity and flexibility to web app development, for us and everyone else.
*   Tech that liberates and empowers by simplifying and lowering barriers of entry
*   Tech that can make the web the platform for entry-level general purpose computing and learning about code
*   Tech that requires us to think more like product managers and designers, so we can build good experiences for other humans

We strongly believe that the more people care about, understand and make the web, the better off we&#8217;ll all be: as a community, as a society, even as a species.

*Find more noBackend-solutions on [nobackend.org][4].*

 [1]: http://twitter.com/espylaub
 [2]: https://www.youtube.com/watch?v=ARophKqA4E0
 [3]: https://speakerdeck.com/espylaub/i-have-a-dreamcode-build-apps-not-backends-jsconf-dot-eu-2013
 [4]: http://nobackend.org/
