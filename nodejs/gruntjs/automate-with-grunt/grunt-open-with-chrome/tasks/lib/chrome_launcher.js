
/*jshint esversion: 6, camelcase: false*/

module.exports.init = function (grunt) {

  var exports = {};
  /**
   * @param {String} file
   */
  var createCommand = function (file) {
    var command = '',
      platform = process.platform,
      linux = /^linux/.test(platform),
      windows = /^win/.test(platform);

    if (windows) {
      command = 'start chrome ' + file;
    } else if (linux) {
      command = 'google-chrome "' + file + '"';
    } else {
      command = 'open -a "Google Chrome" ' + file;
    }

    return command;
  };

  /**
   * @param {String} file
   * @param {Function} done
   */
  exports.open = function (file, done) {
    const command = createCommand(file),
      child_process = require('child_process');
    var process;


    grunt.log.writeln('Running command: ' + command);
    process = child_process.exec(command, function (error, stdout, stderr) {

      if (error && error.code !== 0) {
        grunt.warn(stderr);
        grunt.log.writeln(error.stack);
      }

      done();

    });
  };

  return exports;

};
