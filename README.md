Hood.ie: the Website for the Hoodie Open Source Project
==================

## Getting started

### Installation

To get started check out the recent version and type `npm install`.

The Hoodie website is built with [Jekyll](https://jekyllrb.com/), Jekyll requires ruby version 2.0.0 or higher.  Open a terminal and type `ruby --version` to check if ruby is installed and up to date.  If not, follow the [official download instructions](https://www.ruby-lang.org/en/downloads/).  Now install [bundler](http://bundler.io/) by running `gem install bundler` on the command line.

Once ruby and bundler are up and running, run `bundle install` to install jekyll.

### Usage

The default grunt task (just type `grunt`) will fire up a local server at `localhost:1337` with livereload and dev Sass compiling (including sourcemap and nested output).

This doesn't serve the actual jekyll page, though. To do that, run `bundle exec jekyll serve --watch --drafts`, which will run the full page at `localhost:4000`, using the styles from the grunt task.

There's also a production task ('grunt build') which at this point just spits out a compressed CSS file, without sourcemap in a dedicated folder(css/build).

## FE structure overview

You can get a quick overview about the used Sass and JS files in the FRONTEND.md file.

## Editorconfig & coding standards

<img src="http://i.giphy.com/7SEOvVtOdtU2Y.gif" />

### Editorsconfig

Use the .editorsconfig file with your editor of choice to ensure a consistent coding style. Plugins are available at [http://editorconfig.org/#download](http://editorconfig.org/#download title="editorconfig download").

### Grunt tasks

**Dev:** Type `grunt` to get a simple watch task which is looking for changes inside your Sass files. Also the command `grunt` replaces the paths for the CSS and JS files(dev version).

**Build:** Type `grunt build` which runs concatinate and minify tasks and also swaps the file paths for CSS & JS(build versions).

### Coding standards

#### HTML

* Avoid using IDs if possible
* Try to fill the `alt-attribute` with meaningful content
* Try to adhere to the selector indentation
* Add comments to your code if you think it could be useful

#### Sass

* Avoid using IDs if possible
* Avoid styling elements directly
* Never combine element and class selectors like `ul.list`
* Use nesting thoughtfully
* Avoid nesting deeper than 3 levels (Inception rule)
* Use `$variables` reasonably
* Leave one empty line before and after a nested selector
* We use [Autoprefixer](https://github.com/nDmitry/grunt-autoprefixer), so no need to write vendor prefixes
* Use `//` for comments in `.scss` files
* Leave one space between your `.selector` and the `{`
* Use the helper classes you find in `._layout.scss`
* Use unitless values for `line-height`
* Leave out the unit values where possible e.g. instead of `0px` use `0`
* Leave out the `0` on values like `0.3`
* Use `-` notation for `.classes`
* Add comments to your code if you think it could be useful

### How to use Layouts inside of Jekyll

There is a default layout for every theme described above. If you want to create a new page start it with the following lines:
```
---
layout: default-colortheme
title: title for the page
---
```
Layout names follow the theme naming e.g. default-lilac.

## Mixins and functions

### @include color-scheme

The color-scheme mixin builds all relevant color stylings you need to create a fresh colored page. Just set up the two color variables `$color: rgba()` and `$color-l: rgba()` and provide them inside the mixin.
`@include color-scheme($color, $color-l, 'put in the color-variable-name-without-$');`


## Accessibility

### SVG

* Provide a `<title>` directly inside of the `<svg>` tag (direct child).
* Add a description with the `<desc>` tag.

For example take a look at the calendar icon on the index page.

## Contributing
We are very happy about you contributing to the Hoodie website! We have defined a process that makes it easy for you to contribute and helps us maintain the website.

Please fork the website and send a Pull Request for your contribution. Here is <a href="http://hood.ie/blog/contributing-to-hoodie.html" target="_blank">an amazing article</a>, that explains how you can fork and edit files, also how to send a Pull Request. It's especially great for new contributors! Please do not forget to add comments on what you did and why, especially if your changes are bit more complex.

We will review the Pull Request (PR) and merge or comment it.

**Content changes and typos**   
Simple typo fixes can be merged right away, if you have the permission to do so. We trust you with that!

In addition, if you want to merge a PR that includes structural changes, make sure to test the whole site on your computer to make sure nothing breaks. We want to avoid having a broken site online. Once a PR is merged (into the gh-pages branch), the changes will be on the live site a few seconds later.

**Layout changes and additions**  
We wrote a small css-framework for our websites (hood.ie, docs, blog, faq), so the CI remains the same everywhere and we can make changes at the design pretty quick, also we are able to build new sites pretty quick and without a haze!

If you`d love to change something within the layout or add something specific to the website, please read the <a href="https://github.com/hoodiehq/hoodie-css#how-to-use" target="_blank">"How to use the hoodie-css framework"-guide</a> first!

Then fork, commit and PR! <3

## Deployments

The new hood.ie Website doesn't need to be deployed after making changes. (Only thing you might need to know: when making changes locally on files like `_config.yml` or on blog post drafts (`_drafts`), you may need to restart your local Jekyll so you can also see them locally immediately (abort on Mac with `cmd+c`, restart with `bundle exec jekyll serve --watch --drafts`(which then also gives you blog drafts).)

## Blog

* The blog folder structure is as follows:
  - Published blog posts are in `/_posts`
  - Draft blog posts are in `/_drafts`
  - Post images are in `/blog/YEARMONTH/images` (when adding images, please use tools like [ImageOptim](https://imageoptim.com/) for shrinking file sizes and put them in the current YEARMONTH folder. If there's no folder yet, please create one according to the existing structure.)

* Workflow

### Drafting a Blog post

* Go to `/_drafts`
* For a "TGIF" post, use file `tgif-sample.md` and duplicate it
* For another blog post, use file `post-sample.md` and duplicate it
* When you want to check the draft in your browser,
    - run `bundle exec jekyll serve --watch --drafts` in your terminal and wait until it says `server running`
    - go to `localhost:4000/blog`. All currently available drafts are then just displayed as regular Blog posts. You can now check your draft and edit it in your editor. (Note: Jekyll is sometimes a bit slow, so this may take a little bit.)

### Checking for insensitive content in the post
* [Alex.js](http://alexjs.com/) is used to check for any insensitive content
* When you want to check if the draft contains any insensitive content,
    - run `npm run alex -- -f _posts/<your-post-filename>.md`
    - look into reported issues and try to resolve them where it makes sense
    - you can also do `npm run alex -- -d _drafts` to check for insensitive content in all posts inside _drafts folder

### Publishing the drafted Blog post

From the command line –
* Important: rename the file for the post you want to publish to YEAR-MONTH-DAY-your-post-title.md (e.g. 2014-10-17-all-sea-lions-tgif-49.md)
* Change the author and post title, if you haven’t yet
* If you want comments disabled, set `comments: false`
* Now go to your finder and move the post from `_drafts` to `_posts`
* Commit your local changes and push them
* Tadaaaa, it’s public. Your post is now online under http://hood.ie/blog/your-post-title.html (*not* YEAR-MONTH-DAY-your-post-title.md!)

From the GitHub UI –
* Take your copy of the draft template and create a new file in `_posts`
* Important: rename the file for the post you want to publish to YEAR-MONTH-DAY-your-post-title.md (e.g. 2014-10-17-all-sea-lions-tgif-49.md)
* Change the author and post title, if you haven’t yet
* If you want comments disabled, set `comments: false`
* Add your content
* Create a Pull Request for content/format review
* Tadaaaa, it’s public. Your post is now online under http://hood.ie/blog/your-post-title.html (*not* YEAR-MONTH-DAY-your-post-title.md!)

![Now get some sleep](http://www.ohmagif.com/wp-content/uploads/2012/03/cute-rabbit-falling-asleep.gif)

## License

[Apache 2.0](LICENSE)

