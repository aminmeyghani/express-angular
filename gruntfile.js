module.exports = function (grunt) {
  //  Load all modules.
  require('load-grunt-tasks')(grunt, {pattern: ['grunt-contrib-*', 'grunt-*']});

  // Setting Variables.

  // Settings.
  grunt.initConfig({
    express: {
      options: {
        livereload: true,
        nospawn: true // to reload express.
      },
      files: ['public/index.htm'],
      tasks: ['express:dev', 'wait'],
      dev: {
        options: {
          script: 'server.js',
        }
      }
    },
    less: {
      development: {
        files: {
          "public/css/app.css": "public/less/app.less"
        }
      }
    },
    watch: {
      scripts: {
        files: ['public/less/*.less'],
        tasks: ['less'],
        options: {
          spawn: false,
        },
      },
      livereload: {
        files: ['public/index.htm'],
        options: {
          livereload: true,
          nospawn: true // to reload express.
        }
      },
    },
  });

  // delay livereload...
  grunt.registerTask('wait', function () {
    grunt.log.ok('Server refreshing ...');
    var done = this.async();
    setTimeout(function () {
      grunt.log.writeln('Done waiting!');done();
    }, 250);
  });

  // Register Tasks
  grunt.registerTask('serve', function() {grunt.task.run(['express:dev','wait','watch']);});
};