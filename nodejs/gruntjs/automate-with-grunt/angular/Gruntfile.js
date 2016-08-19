
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
      var output = '',
          count = 0,
          src = filegroup.orig.src.filter(function (file) {
            if (grunt.file.exists(file)) {
              return true;
            } else {
              grunt.log.warn('Source file "' + file + '" not found');
              return false;
            }
          }),
          sources = src.map(function (file) {
            count++;
            return grunt.file.read(file);
          });

      output = sources.join(';');
      grunt.file.write(filegroup.dest, output);
      grunt.log.ok('build ' + count + ' files');
    });

  });

};
