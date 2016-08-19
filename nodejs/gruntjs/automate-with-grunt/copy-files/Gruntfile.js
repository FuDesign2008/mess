


module.exports = function (grunt) {

  grunt.config.init({
    pkg: grunt.file.readJSON('package.json'),
    copyFiles: {
      options: {
        workingDir: 'working',
        manifest: [
          'index.html',
          'css/',
          'js/'
        ]
      }
    }
  });

  var recursiveCopy = function (source, dest) {
    if (grunt.file.isDir(source)) {
      grunt.file.recurse(source, function (file) {
        recursiveCopy(file, dest);
      });
    } else {
      grunt.log.writeln('Copying ' + source + ' to ' + dest);
      grunt.file.copy(source, dest + '/' + source);
    }

  };

  grunt.registerTask(
    'createFolder',
    'Create the working folder',
    function () {
      grunt.config.requires('copyFiles.options.workingDir');

      grunt.file.mkdir(grunt.config.get('copyFiles.options.workingDir'));
    }
  );

  grunt.registerTask(
    'clean',
    'Delete the working folder and its contents',
    function () {
      grunt.config.requires('copyFiles.options.workingDir');

      grunt.file.delete(grunt.config.get('copyFiles.options.workingDir'));
    }
  );

  grunt.registerTask('copyFiles', function () {
    var that = this,
      files,
      workingDir,
      content,
      options;

    that.requiresConfig(that.name + '.options.manifest');
    that.requiresConfig(that.name + '.options.workingDir');
    options = that.options();

    files = options.manifest;
    workingDir = options.workingDir;

    files.forEach(function (item) {
      recursiveCopy(item, workingDir);
    });

    content = '<%= pkg.name %> version <%= pkg.version %>';
    content = grunt.template.process(content);
    grunt.file.write(workingDir + '/version.txt', content);

  });

  grunt.registerTask('deploy', 'Deploys files', [
    'clean',
    'createFolder',
    'copyFiles'
  ]);

};
