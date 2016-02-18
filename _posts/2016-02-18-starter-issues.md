---

title: Starter Issues
author: Gregor
layout: blog-post
comments: true

---

Every open source project loves new contributors. But — and this is something we learned at Hoodie — there are lots and lots of people who would love to contribute to Open Source, but don’t know how.

So what is missing? There is **a difference between welcoming Pull Requests and creating a contributor-friendly community**. One thing that is working out very well for us are “starter” issues.

## The extra mile

Putting a “starter” label on an issue is Hoodie’s red carpet that we roll out for new and existing contributors. Here is an [example “starter” issue](https://github.com/hoodiehq/hoodie-server-account/issues/81). We maintain a list of open starter issues at [http://go.hood.ie/hoodie-starter-issues](http://go.hood.ie/hoodie-starter-issues "Hoodie Starter Issues").

It might look like a lot of work compared to creating an issue that just states the problem, but you get faster at creating these once you get the hang of it. Plus, “starter” issues are often created as follow ups to quick issues created without much description. And the result is more than worth so small extra time investment.

The most important thing is the message an issue sends to someone who is new to the project. It shows that **we clearly care about people coming here**, that **we want them to succeed** and that **we are here to help**. It’s about people who want to contribute, and not about the project.

## Step by Step

<iframe width="560" height="315" src="https://www.youtube.com/embed/JhC7232lxVQ" frameborder="0" allowfullscreen></iframe>

<small>Pro Tip from [@kentcdodds](https://github.com/kentcdodds) after watching this video: use the “y” key to for getting a link to the file at the latest commit by hash.</small>

First, **explain what the situation is right now**, and **how it will look once the issue is closed**. This can be about a bug that must be fixed, about a feature that needs to be implemented, about a typo in the README, about a missing test…, whatever needs to be done.

After that comes **the step-by-step list of tasks**. We like to start by adding a link to the free video series [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github) for people who have never started a Pull Request before, to get everyone on the same page.

The first actionable item is to **claim the issue**

<pre><code class="language-none">
- [ ] claim this issue (assign yourself or comment below)
</code></pre>

Once someone claimed the issue, we replace the item with something like

<pre><code class="language-none">
- [x] claim this issue (@myusername)
</code></pre>

If the issue involves writing code, then we link to a description on how to setup the repository and how to run tests

<pre><code class="language-none">
- [ ] [Setup repository locally](url-here) and make sure
      that all tests pass
</code></pre>

If the issue involves an update to the *README.md* file, then this is the next item, something like this

<pre><code class="language-none">
- [ ] update the [README](link-to-readme-section): add
      `myLib.myMethod` in the same format the other APIs
      are documented
</code></pre>

At Hoodie, we follow [Commit Message Conventions](https://github.com/hoodiehq/hoodie/blob/master/CONTRIBUTING.md#commit-message-conventions). Instead of explaining why and how, we make actionable items for the separate commits we’d like to have

<pre><code class="language-none">
- [ ] Commit with `docs(README): myLib.myMethod`
</code></pre>

Once the first commit is ready, it’s time to start the Pull Request. Even though we link the tutorial on how to contribute to open source above, we do it again, because it doesn’t hurt. We also give congratulations if this is going to be the first Pull Request for someone, because it means a lot to us :)

<pre><code class="language-none">
- [ ] Start a Pull Request. Set description to `closes #123`
      If this is your first, welcome :tada: :smile:
      [Here is a great tutorial](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)
      on how to send a pull request)
</code></pre>

Once the PR is created, we check all the above boxes and replace the above item with something like

<pre><code class="language-none">
- [x] Start a Pull Request (#123)
</code></pre>

where *#123* is the number of the Pull Request. GitHub will automatically create a link to the Pull Request here.

If this issue is about code, a test needs to be written or adapted. We give guidance where the test needs to be added, ideally like to the files / lines

<pre><code class="language-none">
- [ ] Create a file `/test/unti/my-method-test.js` in
      [/test/unit](https://github.com/myuser/mylib/tree/master/test/unit).
      See [/test/unit/my-other-method-test.js](https://github.com/myuser/mylib/tree/master/test/unit/other-method-test.js)
      for comparison
- [ ] Add a check that `myLib.myMethod` is a function in [/test/integration/constructor-test.js](https://github.com/myuser/mylib/tree/master/test/integration/constructor-test.js)
</code></pre>

Then we ask the contributor to commit and push the tests. This way the commit will trigger our continuous integration tests on [Travis CI](https://travis-ci.org) and will add a red <span style="color: #F00">**×**</span> to the commit, **so we can be sure that tests are failing as expected**. Here’s [an example](https://github.com/hoodiehq/pouchdb-hoodie-api/pull/100/commits) of what I mean.

<pre><code class="language-none">
- [ ] Make sure that tests fail when run with `npm test`.
      Commit with `test: myLib.myMethod` and push
</code></pre>

Now comes the fun part: **Writing the code!** We use a single item on the list to describe what the contributor should be doing. If helpful, we link to the right place and explain how the feature / bug fix can be implemented. But it is okay to keep it short and leave something for the contributor to figure out, that’s what’s fun after all ;) — And at this point the contributor should feel comfortable to ask for help if they get stuck. So often time we do:

<pre><code class="language-none">
- [ ] Implement :)
- [ ] Make sure tests pass when run with `npm test`.
      Commit with `feat: myLib.myMethod` and push
</code></pre>

**The work is done**. Now someone else needs to review and merge the work.

<pre><code class="language-none">
- [ ] Someone else: review & merge
</code></pre>

During the review it may turn out that something is not quite right, so the pull request needs amendments. The contributor can add more commits as long as needed. Once they are done, they can either squash the commits themselves if they [know how to do it](https://www.google.com/url?q=https://egghead.io/lessons/javascript-how-to-squash-multiple-git-commits?series%3Dhow-to-contribute-to-an-open-source-project-on-github&amp;sa=D&amp;ust=1456225013529000&amp;usg=AFQjCNG4f-8HgRkaWUOjXcrMIcXS_cyyTw), or the reviewer does it for them.

It is very important that when the reviewer is cleaning up the commit messages, that they **keep the original author**. Nothing is more disappointing than a first pull request accidentally “stolen” by a reviewer. A custom author can be set with:

<pre><code class="language-none">
git commit --author="Pat Doe <pat@example.com>"
</code></pre>

At the end of the issue we add ways to contact us, usually something like this:

> Ping us in the [Hoodie Chat](http://hood.ie/chat/) or on
  [Twitter](https://twitter.com/hoodiehq/) if you have any questions :)

Please let us know if you have any suggestions on how we can further improve our starter issues — we love hearing from you &lt;3

### Beyond the extra mile

If the issue involves writing a test, then you, the issue author, can create it yourself. Comment the test out and push it to master. **Then instead of asking the new contributor to figure out how to write the test, all the need to do is to uncomment it and see the tests fail**. This idea comes from Kent C. Dodds who wrote about it in his piece on
[First Timers Only](https://medium.com/@kentcdodds/first-timers-only-78281ea47455) — one of our favourites :)

### Benefits

The benefits of starter issues go both ways. For people new to the project, it **lowers the barrier** and **makes contributing more fun**. For maintainers, it’s **a great way to empower more people** to do code reviews, as they have a list they can follow and check items off of. More importantly, it is our hope that **creating starter issues will become a part of the Open Source culture** and a great format for community engagement.

## See also

- [Making Your First Pull Request](http://www.charlotteis.co.uk/making-your-first-pull-request/)
- [Contribute to Open Source](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)
- [Contributing to Hoodie](http://hood.ie/blog/contributing-to-hoodie.html)

## Thanks

I’d like to thank

- [Alex](https://github.com/espy)
- [Charlotte](https://github.com/charlotteis)
- [Jan](https://github.com/janl)
- [Jenn](https://github.com/renrutnnej)
- [Kim](https://github.com/kmcrayton7)
- [Lewis](https://github.com/lewiscowper)
- [Patricia](https://github.com/patriciagarcia)
- [Kent](https://github.com/kentcdodds)

for their input reviewing this post!
