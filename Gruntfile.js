/*
 * grunt-mapcat
 * https://github.com/rjkip/grunt-mapcat
 *
 * Copyright (c) 2013 Reinier Kip
 * Licensed under the MIT license.
 */

"use strict";

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        "Gruntfile.js",
        "tasks/*.js",
        "test/*.js",
        "<%= nodeunit.tests %>",
      ],
      options: {
        jshintrc: ".jshintrc",
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ["tmp"],
    },

    // Configuration to be run (and then tested).
    mapcat: {
      default: {
        src: ["test/fixtures/default/files/*.js.map"],
        dest: "tmp/default.js"
      },
      maproot: {
        files: {
          "tmp/maproot.js": ["test/fixtures/maproot/files/*.js.map"]
        },
        options: {
          maproot: 'meh/'
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ["test/*_test.js"],
    }

  });

  // Actually load this plugin"s task(s).
  grunt.loadTasks("tasks");

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-nodeunit");

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin"s task(s), then test the result.
  grunt.registerTask("test", ["clean", "mapcat", "nodeunit"]);

  // By default, lint and run all tests.
  grunt.registerTask("default", ["jshint", "test"]);

};
