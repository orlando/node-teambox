/*jslint node: true */
(function () {
    'use strict';

    module.exports = function (grunt) {
        // Project configuration
        grunt.initConfig({
            // Task configuration
            jshint: {
                options: {
                    curly: true,
                    eqeqeq: true,
                    immed: true,
                    latedef: true,
                    newcap: true,
                    noarg: true,
                    sub: true,
                    undef: true,
                    unused: true,
                    boss: true,
                    eqnull: true,
                    globals: {}
                },
                gruntfile: {
                    src: 'gruntfile.js'
                },
                lib_test: {
                    src: ['lib/**/*.js', 'test/**/*.js']
                }
            },
            mochaTest: {
                test: {
                    options: {
                        reporter: 'spec'
                    },
                    src: ['test/**/*-test.js']
                }
            },
            watch: {
                gruntfile: {
                    files: '<%= jshint.gruntfile.src %>',
                    tasks: ['jshint:gruntfile']
                },
                lib_test: {
                    files: '<%= jshint.lib_test.src %>',
                    tasks: ['jshint:lib_test', 'mochaTest']
                }
            }
        });

        // These plugins provide necessary tasks
        grunt.loadNpmTasks('grunt-mocha-test');
        grunt.loadNpmTasks('grunt-contrib-jshint');
        grunt.loadNpmTasks('grunt-contrib-watch');

        // Default task
        grunt.registerTask('test', ['mochaTest']);
        grunt.registerTask('default', ['jshint', 'test']);
    };
}());
