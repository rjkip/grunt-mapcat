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
    test.equal(expected.replace(/\r?\n$/, ''), actual.replace(/\r?\n$/, ''), message);
}

exports.mapcat = {
  default: function (test) {
    test.expect(2);

    assertFileEquality(test,
      "tmp/default.js",
      "test/fixtures/default/expected/default.js",
      "Should concatenate the two JavaScripts correctly."
    );

    assertFileEquality(test,
      "tmp/default.js.map",
      "test/fixtures/default/expected/default.js.map",
      "Should concatenate the two JavaScript source maps correctly."
    );

    test.done();
  },
  maproot: function (test) {
    test.expect(2);

    assertFileEquality(test,
      "tmp/maproot.js",
      "test/fixtures/maproot/expected/maproot.js",
      "Should concatenate the two JavaScripts correctly."
    );

    assertFileEquality(test,
      "tmp/maproot.js.map",
      "test/fixtures/maproot/expected/maproot.js.map",
      "Should concatenate the two JavaScript source maps correctly."
    );

    test.done();
  }
};
