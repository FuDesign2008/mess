/*jshint node: true, esversion:6*/


'use strict';

module.exports = function (grunt) {
  const chromeLancher = require('./lib/chrome_launcher.js').init(grunt);

  grunt.registerTask(
    'open',
    'Open the file or URL with Chrome',
    function (file) {
      var done = this.async();
      chromeLancher.open(file, done);
    }
  );

};



