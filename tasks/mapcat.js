/*
 * grunt-mapcat
 * https://github.com/rjkip/grunt-mapcat
 *
 * Copyright (c) 2013 Reinier Kip
 * Licensed under the MIT license.
 */

"use strict";

var mapcat = require("mapcat").cat;
var mkdirp = require("mkdirp");
var path = require("path");

module.exports = function(grunt) {

  grunt.registerMultiTask("mapcat", "Combines Source Map files while concatenating JavaScript source files.", function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      maproot: ''
    });

    // Iterate over all specified file groups.
    this.files.forEach(function (f) {
      grunt.log.writeln("Concatenating JavaScripts and respective source maps...");
      mkdirp.sync(path.dirname(f.dest));
      mapcat(f.src, f.dest, f.dest + ".map", options.maproot);
      grunt.log.writeln("Done.");
    });
  });

};
