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
            dest: 'dist/css/prod/hoodie.min.pref.css'

        }
    }
  });
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-autoprefixer');

  grunt.registerTask('default', [
      'connect',
      'watch'
    ]);
  grunt.registerTask('build', [
      'sass:prod',
      'copy',
      'autoprefixer'
    ]);
};
