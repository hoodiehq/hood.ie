Hood.ie: the Website for the Hoodie Open Source Project
==================

## Getting started

To get started check out the recent version and type npm install.
The default task (just type 'grunt') will fire up a local server at localhost:1337 with livereload and dev Sass compiling (including sourcemap and nested output).
There's also a production task ('grunt build') which at this point just spits out a compressed CSS file, without sourcemap in a dedicated folder(css/build).

## Editorconfig & coding standards

<img src="http://i.giphy.com/7SEOvVtOdtU2Y.gif" />

Use the .editorsconfig file with your editor of choice to ensure a consistent coding style. Plugins are available at [http://editorconfig.org/#download](http://editorconfig.org/#download title="editorconfig download").

### How to use Layouts inside of Jekyll

There is a default layout for every theme described above. If you want to create a new page start it with the following lines:
```
---
layout: default-colortheme
title: title for the page
---
```
Layout names follow the theme naming e.g. default-lilac.

## Accessibility

### SVG

* Provide a `<title>` directly inside of the `<svg>` tag (direct child).
* Add a description with the `<desc>` tag.

For example take a look at the calendar icon on the index page,

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
    - run `jekyll serve --watch --drafts` in your terminal and wait until it says `server running`
    - go to `localhost:4000/blog`. All currently available drafts are then just displayed as regular Blog posts. You can now check your draft and edit it in your editor. (Note: Jekyll is sometimes a bit slow, so this may take a little bit.)

### Publishing the drafted Blog post

* Important: rename the file for the post you want to publish to YEAR-MONTH-DAY-your-post-title.md (e.g. 2014-10-17-all-sea-lions-tgif-49.md)
* Change the author and post title, if you haven't yet
* If you want comments disabled, set `comments: false`
* Now go to your finder and move the post from `_drafts` to `_posts`
* Tadaaaa, it's public. Your post is now online under http://hood.ie/blog/your-post-title.html (*not* YEAR-MONTH-DAY-your-post-title.md!)

![Now get some sleep](http://www.ohmagif.com/wp-content/uploads/2012/03/cute-rabbit-falling-asleep.gif)
