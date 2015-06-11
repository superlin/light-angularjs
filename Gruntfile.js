// Generated on 2015-06-06 using generator-angular 0.11.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Configurable paths for the application
  var appConfig = {
    app: 'src',
    dist: 'dist'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    config: appConfig,

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      js: {
        files: ['<%= config.app %>/**/*.js'],
        tasks: ['concat']
      },
      html: {
        files: ['<%= config.app %>/**/*.html'],
        tasks: ['copy:html']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost'
      },
      dist: {
        options: {
          open: true,
          base: '<%= config.dist %>'
        }
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= config.app %>/**/*.js'
        ]
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: '<%= config.dist %>/{,*/}*'
        }]
      }
    },
    
    copy: {
      html: {
        src: '<%= config.app %>/index.html',
        dest: '<%= config.dist %>/index.html'
      },
      ico:{
        src: '<%= config.app %>/favicon.ico',
        dest: '<%= config.dist %>/favicon.ico'
      }
    },

    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: '<%= config.app %>/**/*.js',
        dest: '<%= config.dist %>/built.js',
      }
    }
  });


  grunt.registerTask('serve', 'Compile then start a connect web server', function () {
      return grunt.task.run(['build', 'connect:dist', 'watch']);
  });

  grunt.registerTask('build', [
    'clean',
    'concat',
    'copy'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'build'
  ]);
};
