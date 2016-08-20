
module.exports = function (grunt) {

  grunt.config.init({

    build: {
      angular: {
        src: [
          './bower_components/angular/angular.js',
          './bower_components/angular-resource/angular-resource.js'
        ],
        dest: 'dist/angular.js'
      },

      angularWithjQeury: {
        src: [
          './bower_components/jquery/dist/noexits.js',
          './bower_components/jquery/dist/jquery.js',
          './bower_components/angular/angular.js',
          './bower_components/angular-resource/angular-resource.js'
        ],
        dest: './dist/jquery-angular.js'
      }
    }
  });


  grunt.registerMultiTask('build', 'Concatenate files', function () {
    this.files.forEach(function (filegroup) {
      var sources = [];

      filegroup.orig.src.forEach(function (file) {
        if (grunt.file.exists(file)) {
          sources.push(grunt.file.read(file));
        } else {
          grunt.log.warn('File "' + file + '" not found!');
        }
      });

      grunt.file.write(filegroup.dest, sources.join(';'));
      grunt.log.ok('build ' + sources.length + ' files');
    });

  });

};
