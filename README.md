hoodie-website-css
==================

## Getting started

To get started check out the recent version and type npm install.
The default task (just type 'grunt') will fire up a local server at localhost:1337 with livereload and dev Sass compiling (including sourcemap and nested output).
There's also a production task ('grunt build') which at this point just spits out a compressed CSS file, without sourcemap in a dedicated folder(css/build).

## Editorconfig & coding standards

<img src="http://i.giphy.com/7SEOvVtOdtU2Y.gif" />

Use the .editorsconfig file with your editor of choice to ensure a consistent coding style. Plugins are available at [http://editorconfig.org/#download](http://editorconfig.org/#download title="editorconfig download").

### Sass

* Use 1 space between your selector and the opnening curly brace.
* Use breakpoints with `@include breakpoint()` from the `_breakpoints.scss` inside your declaration.
* Do not add arbitrary new breakpoints.
* Always set breakpoints in `em`.

## Rem-calc

We use rem units instead of pixels. There is a Sass function called "rem-calc" to simplify this. Just use rem-calc(px-value). You can also provide multiple values like you would do with a CSS shorthand e.g. margin: rem-calc(20 0 20).
If you're using Sublime Text you can add this handy snippet to your user directory(user/Library/Apllication\ Support/Sublime\ Text\ 3/Packages/User:

    <snippet>
      <content><![CDATA[
    rem-calc($1)
    ]]></content>

    <tabTrigger>rem</tabTrigger>
    </snippet>

Save it as name.sublime-snippet. After you've done that restart Sublime Text. Now you just have to type rem(tab) and you'll get rem-calc(cursor here).

## gh-pages branch

This branch will be developed parallel to the main branch to set up the page structure and functionality. To start the local Jekyll environment just follow this guide: [http://jekyllrb.com/docs/installation/](http://jekyllrb.com/docs/installation/). Inside the project folder type `jekyll serve --watch`. Afterwards the hood.ie website should be available for you on localhost:4000.


## How to use

### Themes
````
<body class="orange">
````
$orange: #e94e1b; $orange-l: #f9c4b3;

<img src="http://verpixelt.github.io/readme-files/rectangle-orange.svg" /> <img src="http://verpixelt.github.io/readme-files/rectangle-orange-l.svg" />

````
<body class="blue">
````
$blue: #312783; $blue-l: #bfbcd8;

<img src="http://verpixelt.github.io/readme-files/rectangle-blue.svg" /> <img src="http://verpixelt.github.io/readme-files/rectangle-blue-l.svg" />

````
<body class="green">
````
$green: #0b8e36; $green-l: #a9d6b8;

<img src="http://verpixelt.github.io/readme-files/rectangle-green.svg" /> <img src="http://verpixelt.github.io/readme-files/rectangle-green-l.svg" />

````
<body class="yellow">
````
$yellow: #f9b233; $yellow-l: #fce3b6;

<img src="http://verpixelt.github.io/readme-files/rectangle-yellow.svg" /> <img src="http://verpixelt.github.io/readme-files/rectangle-yellow-l.svg" />


````
<body class="lilac">
````
$lilac: #520644; $lilac-l: #c1a7bc;

<img src="http://verpixelt.github.io/readme-files/rectangle-lilac.svg" /> <img src="http://verpixelt.github.io/readme-files/rectangle-lilac-l.svg" />


````
<body class="gray">
````
$gray-1: #282828; $gray-5: #b3b3b3;

<img src="http://verpixelt.github.io/readme-files/rectangle-gray.svg" /> <img src="http://verpixelt.github.io/readme-files/rectangle-gray-l.svg" />

**Font colours**<br />
$gray-2: #404040;

<img src="http://verpixelt.github.io/readme-files/rectangle-gray1.svg" /><br />
$gray-3: #606060;

<img src="http://verpixelt.github.io/readme-files/rectangle-gray3.svg" /><br />
$gray-4: #999;

<img src="http://verpixelt.github.io/readme-files/rectangle-gray4.svg" /><br />
**Background**<br />
$gray-6: #fdfdfd;

<img src="http://verpixelt.github.io/readme-files/rectangle-gray6.svg" />


### Layout

**header** with 100% width and colour of theme
````
<header>
</header>
````

**.logo** header with logo position / left**
````
<header>
    <div class="logo"></div>
</header>
````

**.main-nav** header with main navigation / middle
````
<header>
    <nav class="main-nav">
</header>
````

**.meta-nav** header with meta navigation / right
````
<header>
    <ul class="meta-nav">
</header>
````

**.sub-nav**, hidden with .hide helper
````
<header>
    <section class="hide">
         <ul class="sub-nav">
</header>
````

**.content**, content-div, max-width of 840px, centered, adds big logo to content when a theme is selected
````
<div class="content">
````


<!-- **.box**, alternating highlighting of .cb in 100% width of site
````
<div class="box">
```` -->

**.cb**, contentbox in max-width of 840px, centered, holds all article related designs, this is how a .cb always is structred
````
<div class="cb">
    <article>
        <h2></h2>
    </article>
    <aside>
    </aside>
</div>
````

**.teaser**, teaser for contentbox, fonts are displayed bigger
````
    <div class="cb teaser">
````

**article**, main part of .cb
````
<div class="cb">
    <article>
        <h2></h2>
        // please add grids, paragraphs or figures or other content in here
    </article>
    <aside>

    </aside>
</div>
````

**aside**, sub part of .cb
````
<div class="cb">
    <article>
        <h2></h2>
    </article>
    <aside>
        // please add links and sidenotes in here
    </aside>
</div>
````

### Grid
**.grid-3**, 33% of width, combined with .cb (contentbox) it gives you max-width of 175px and margin on the right, except for every 3rd item. Use a float left if you want to add content in this row. No need to add .grid-6 in .cb.
````
<article>
    <section class="grid-3 l">
</article>
````

**.grid-6**, 66% of width, combined with .cb (contentbox) it gives you max-width of 450px but no margin. Use a float left if you want to add content in this row. No need to add .grid-3 in .cb.

````
<article>
    <section class="grid-6 l">
</article>
````

**.grid-9**, 100% of width, combined with .cb (contentbox) it gives you max-width of 600px but no margin.

````
<article>
    <section class="grid-9">
</article>
````



### helper
**.hide**   // display:none <br />
**.l**      // float: left <br />
**.r**      // float: right <br />
**.n**      // float: none

### modules
**.api-nav** 3rd LVL navigation for API and documentation
````
<section class="api-nav">
    <ul>
````

**.person-bio** special module for bio's of core contributors
````
<section class="cb person-bio">
    <aside class="bio-link">
        <a href="#">Twitter | GitHub</a>
    </aside>
    <article>
        <figure class="grid-3 l">
            <img src="dist/content_img/" alt="add Name" />
        </figure>
        <h6>
            // Job Position
        </h6>
        <h3>
            // Name
        </h3>
        <p>
            // bio text
        </p>
    </article>
</section>
````

**.bio-link** sets the link in aside at the right position <br />
**.grid-3 img** please use the same measures than we already use for the image<br />
**.person-bio p** will float around the image, if the description is too long with nice margin
<br /><br />

**.friends**, special grid, which uses .grid-3 for all the boxes for contributors and friends, also screencasts and tutorials
````
<article class="friends">
    <div class="grid-3 l">
        <figure><img src="dist/content_img/LOGO" /></figure>
        <h5>
            // Name
        </h5>
        // add description or link
    </div>
````


**.footer** footer with colour in 100% width including logo
````
<footer>
    <div class="footer">
````

**.sitemap-item** item in .sitemap, 33% width, aligned right
````
<footer>
    <div class="footer">
        <section class="cb sitemap">
            <ul class="sitemap-item l">
````

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
* Add `aria-labelledby="title desc"` and  `role="img"` on the `<svg>`.

For example take a look at the calendar icon on the index page,
