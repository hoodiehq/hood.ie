hoodie-website-css
==================

## Getting started

To get started check out the recent version and type npm install.
The default task (just type 'grunt') will fire up a local server at localhost:1337 with livereload and dev Sass compiling (including sourcemap and nested output).
There's also a production task ('grunt build') which at this point just spits out a compressed CSS file, without sourcemap in a dedicated folder(css/build).

## Editorconfig

Please use the .editorsconfig file with your editor of choice to ensure consistent coding styles. Plugins are available at [http://editorconfig.org/#download](http://editorconfig.org/#download title="editorconfig download").

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
