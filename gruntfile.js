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
        sourceMap: false,
        outputStyle: 'compressed'
      },
      files: {
        'dist/css/prod/hoodie.min.css' : 'dist/sass/base.scss'
      }
    }
  });
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', [
      'connect',
      'watch'
    ]);
  grunt.registerTask('build', [
      'sass:prod'
    ]);
};
