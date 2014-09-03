module.exports = function (grunt) {
  "use strict";

  // Config.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      scripts: {
        files: ['./js/**/*.js', '!./js/angular-refresher-view.js'],
        tasks: ['jshint', 'concat:refresher']
      }
    },
    concat: {
      refresher: {
        src: ['./js/refresher/**/*.js', '!./js/refresher/angular-refresher-view.js'],
        dest: './js/angular-refresher-view.js'
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'js/**/*.js',
        '!js/**/*.js'
      ]
    },
  });
  // Load tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  // Default task.
  grunt.registerTask('default', 'watch');
};
