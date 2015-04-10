module.exports = function(grunt) {
  'use strict';
  require('time-grunt')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jekyll: {
      options: {
        bundleExec: true
      }
    },
    connect: {
      server: {
        options: {
          port: 1337,
          base: '_site'
        }
      }
    },
    watch: {
      css: {
        files: 'dist/sass/**/*.scss',
        tasks: ['sass:dev'],
        options: {
          atBegin: true,
          interrupt: true,
          spawn: true,
          livereload: 35829
        }
      }
    },
    sass: {
      dev: {
        options: {
          sourceMap: true,
          outputStyle: 'nested'
        },
        files: {
          'dist/css/hoodie.css' : 'dist/sass/base.scss'
        }
      },
      prod: {
        options: {
            sourceMap: false,
            outputStyle: 'compressed'
        },
        files: {
            'dist/prod/hoodie.min.css' : 'dist/sass/base.scss'
        }
      }
    },
    copy: {
        main: {
            src: 'dist/prod/hoodie.min.css',
            dest: 'dist/prod/.tmp/hoodie.min.tmp.css'
        }
    },
    autoprefixer: {
        single_file: {
            options: {
                browsers: ['last 2 versions', 'ie 11', 'ie 10', 'ie 9'],
                cascade: false,
                annotation: false
            },
            src: 'dist/prod/.tmp/hoodie.min.tmp.css',
            dest: 'dist/prod/hoodie.min.pref.css'

        }
    },
    uglify: {
        options: {
            mangle: false
        },
        files: {
            files: {
                'dist/prod/hoodie.min.js' : ['dist/js/jquery/dist/jquery.min.js', 'dist/js/icheck.min.js', 'dist/js/main.js']
            }
        }
    },
    'string-replace': {
        dev: {
            files: {
                    '_includes/head.html':'_includes/head.html',
                    '_includes/head-icheck.html':'_includes/head-icheck.html',
                    '_includes/footer.html':'_includes/footer.html'
                },
            options: {
                replacements: [
                    {
                        pattern: '<link rel="stylesheet" href="/dist/prod/hoodie.min.pref.css">',
                        replacement: '<link rel="stylesheet" href="/dist/css/hoodie.css">'
                    },
                    {
                        pattern: '<script src="/dist/prod/hoodie.min.js"></script>',
                        replacement: '<script src="/dist/js/jquery/dist/jquery.js"></script><script src="/dist/js/main.js"></script>'
                    }
                ]
            }
        },
        build: {
            files: {
                '_includes/head.html':'_includes/head.html',
                '_includes/head-icheck.html':'_includes/head-icheck.html',
                '_includes/footer.html':'_includes/footer.html'
            },
            options: {
                replacements: [
                {
                    pattern: '<script src="/dist/js/jquery/dist/jquery.js"></script><script src="/dist/js/main.js"></script>',
                    replacement: '<script src="/dist/prod/hoodie.min.js"></script>'
                },

                    {
                        pattern: '<link rel="stylesheet" href="/dist/css/hoodie.css">',
                        replacement: '<link rel="stylesheet" href="/dist/prod/hoodie.min.pref.css">'
                    },
                ]
            }
        }
    }
  });
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-string-replace');
  grunt.loadNpmTasks('grunt-jekyll');
  

  grunt.registerTask('default', [
      'jekyll',
      'connect',
      'string-replace:dev',
      'watch'
    ]);

  grunt.registerTask('build', [
      'sass:prod',
      'copy',
      'autoprefixer',
      'uglify',
      'string-replace:build'
    ]);
};
