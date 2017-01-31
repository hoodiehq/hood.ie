---
title: 'Deploy Hoodie apps with one line'
author: Gregor
layout: blog-post
comments: false
---

Our mission is to empower more people to build applications by taking away the complexity of a backend. If you know the basic open web standards HTML, JavaScript, and CSS, you can build apps that have user authentication and data synchronisation without learning anything but Hoodie Client’s JavaScript APIs.

But after you’ve built your Hoodie app you probably want to put it online. That was pretty hard and required system administration knowledge. Until today.

<iframe width="600" height="320" src="https://www.youtube.com/embed/OVWCnEmjZBc" frameborder="0" allowfullscreen></iframe>

## Deploying to now

[now](https://zeit.co/now/) allows you to deploy a Node application with its [command line tool](https://github.com/zeit/now-cli). And the best thing: it’s 100% free for Open Source <3 You can deploy an app from your computer or right from a GitHub repository. For example, to deploy our [Hoodie Tracker demo app](https://github.com/hoodiehq/hoodie-app-tracker) all you have to do is to run this command:

```
$ now hoodiehq/hoodie-app-tracker --npm -e NODE_ENV=production -e hoodie_inMemory=true
```

`hoodiehq/hoodie-app-tracker` is the GitHub repository slug. `--npm` tells `now` to deploy using `npm`, as there is also `Dockerfile` in the repository. `-e NODE_ENV=production` sets the `NODE_ENV` environment variable to `production`, which makes the deployment faster as no `devDependencies` will be installed. The `-e hoodie_inMemory=true` makes the Hoodie app run in-memory mode, meaning that no data is persisted and no files are written. This is important because `now` is a read-only file system. That means that all user accounts and data will be lost on the next deployment, but it is great for for a quick test or demo of your application.

If you want your data to be persisted, you will need [CouchDB](http://couchdb.apache.org/), accessible online. Luckily, there is a service that provides hosted CouchDB and they include a free plan:

## Store data with Cloudant

[Cloudant](https://cloudant.com/) is a DBaaS (database-as-a-service). It provides most of CouchDB’s APIs and can be used as Hoodie’s database backend. Signing up for a free account only takes a moment. After sign up, you need to slightly adjust the `now` deployment command above.

```
$ now hoodiehq/hoodie-app-tracker -e NODE_ENV=production -e hoodie_inMemory=true -e hoodie_dbUrl=https://username:password@username.cloudant.com/
```

The `hoodie_inMemory` environment variable makes sure that Hoodie does not try to write any files like the bundled `/hoodie/client.js` library. The `hoodie_dbUrl` environment variable sets the address and credentials to your CouchDB. Replace `username` and `password` to whatever you signed up with.

## Test and set an alias

When you deploy with `now` you will receive a random subdomain where you can access your application. It looks something like `https://hoodie-app-tracker-randomxyz.now.sh/` and was already copied to your clipboard during the deployment. Open the URL in your browser to give it a try. Once everything is good, you can change the subdomain to your preference by running:

```
$ now alias set hoodie-app-tracker-randomxyz my-tracker-app
```

That will make your deployed Hoodie Tracker app accessible at [https://my-tracker-app.now.sh](https://my-tracker-app.now.sh). For example, here is the app that I deployed myself: https://hoodie-app-tracker.now.sh/

Enjoy!
