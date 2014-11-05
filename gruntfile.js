module.exports = function(grunt) {
  'use strict';
  require('time-grunt')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          port: 1337,
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
            'dist/css/prod/hoodie.min.css' : 'dist/sass/base.scss'
        }
      }
    },
    copy: {
        main: {
            src: 'dist/css/prod/hoodie.min.css',
            dest: 'dist/css/.tmp/hoodie.min.tmp.css'
        }
    },
    autoprefixer: {
        single_file: {
            options: {
                browsers: ['last 2 versions', 'ie 11', 'ie 10', 'ie 9'],
                cascade: false,
                annotation: false
            },
            src: 'dist/css/.tmp/hoodie.min.tmp.css',
            dest: 'dist/prod/hoodie.min.pref.css'

        }
    },
    // concat: {
    //     options: {
    //         separator: ';'
    //     },
    //     dist: {
    //         src: ['dist/js/jquery/dist/jquery.min.js', 'dist/js/jquery.sheetrock.min.js', 'dist/js/icheck.js', 'dist/js/events.js', 'dist/js/main.js'],
    //         dest: 'dist/js/prod/hoodie.js'
    //     }
    // },
    uglify: {
        options: {
            mangle: false
        },
        files: {
            files: {
                'dist/prod/hoodie.min.js' : ['dist/js/jquery/dist/jquery.min.js', 'dist/js/jquery.sheetrock.min.js', 'dist/js/icheck.js', 'dist/js/events.js', 'dist/js/main.js']
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

  grunt.registerTask('default', [
      'connect',
      'watch'
    ]);
  grunt.registerTask('build', [
      'sass:prod',
      'copy',
      'autoprefixer',
      // 'concat',
      'uglify'
    ]);
};
