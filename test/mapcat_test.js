"use strict";

var grunt = require("grunt");

function readFile(file) {
  var contents = grunt.file.read(file);

  if (process.platform === 'win32') {
    contents = contents.replace(/\r\n/g, '\n');
  }

  return contents;
}

function assertFileEquality(test, pathToActual, pathToExpected, message) {
    var actual = readFile(pathToActual);
    var expected = readFile(pathToExpected);
    test.equal(expected, actual, message);
}

exports.mapcat = {
  default: function (test) {
    test.expect(2);

    assertFileEquality(test,
      "tmp/app.js",
      "test/expected/app.js",
      "Should concatenate the two JavaScripts correctly."
    );

    assertFileEquality(test,
      "tmp/app.js.map",
      "test/expected/app.js.map",
      "Should concatenate the two JavaScript source maps correctly."
    );

    test.done();
  }
};
