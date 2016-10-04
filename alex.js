// Utility to run files through Alex.js (http://alexjs.com/)
// run using `npm run alex`
var fs = require('fs');
var path = require('path');
var toVFile = require('to-vfile');
var argv = require('argv');
var alex = require('alex');
var colors = require('colors/safe');

colors.setTheme({
  info: 'green',
  warn: 'yellow',
  error: 'red'
});

var options = [
    {
        name: 'dir',
        short: 'd',
        type: 'path',
        description: 'directory to run through Alex.js',
        example: 'npm run alex -- -d _posts'
    },
    {
        name: 'file',
        short: 'f',
        type: 'path',
        description: 'file to run through Alex.js',
        example: 'npm run alex -- -f _posts/2013-06-08-hacker-news-thread-about-hoodie.md'
    }
];

var args = argv.option(options).run();

if(args.options.dir) {
    scanDir(args.options.dir);
}

if(args.options.file) {
    scanFile(args.options.file)
}

// default set of directories to scan through
var dirs = ['_posts'];

function scanFile(file) {
    try {
        var vfile = toVFile.readSync(file);
        var messages = alex.markdown(vfile).messages;
        if(messages.length) {
            console.log(colors.warn(messages));
        }else {
            console.log(colors.info('alex.js says ' + file + ' looks good!'));
        }
    }catch(e) {
        console.error(colors.error('Error in reading file ' + file + ' - ' + e.message));
    }
}

function scanDir(dir) {
    try {
        var files = fs.readdirSync(dir);
        files.forEach(function(file) {
            scanFile(dir + path.sep + file);
        });
    }catch(e) {
        console.log(colors.error('Error in reading directory ' + dir + ' - ' + e.message));
    }
}

function scanDefault() {
    dirs.forEach(function(dir) {
        scanDir(dir);
    });
}
