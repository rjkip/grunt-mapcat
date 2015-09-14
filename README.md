# grunt-mapcat [![Build Status](https://travis-ci.org/rjkip/grunt-mapcat.png?branch=master)](https://travis-ci.org/rjkip/grunt-mapcat)

> Grunt plugin for mapcat, a simple JavaScript utility that combines Source Map files while concatenating JavaScript source files.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-mapcat --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-mapcat');
```

## The "mapcat" task

### Overview
In your project's Gruntfile, add a section named `mapcat` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  mapcat: {
    default: {
      files: {
        "assets/dist/app.js": ["assets/src/app/*.js.map"]
      },
      options: {
        maproot: '' // A path to prepend to the source mapping URL
      }
    }
  },
})
```

### Options

#### maproot

Type: `String`
Default: `''`

A path to prepend to the source mapping URL.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
```
2013-04-22 - 0.1.2 - Switched to mapcat NPM dependency instead of GitHub commit
2013-04-21 - 0.1.1
2013-04-21 - 0.1.0 - First release.
```
