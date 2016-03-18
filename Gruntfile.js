/**
 * Created by hzz on 16-3-18.
 */
'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        connect: {
            options: {
                port: 9001,
                livereload: 35729   //what
            },
            server: {
                options: {
                    open: true,
                    keepalive: true
                }
            }
        },
        // task connect end
        wiredep: {
            app: {
                src: ['index.html']
                //ignorePath: /\.\.\./
            },
            sass:{
                src: ['static/style/css/*.css']
            }
        },
        compass: {
            dist: {
                options: {
                    sassDir: 'static/style/',
                    cssDir: 'static/style/css/'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-contrib-compass');

    grunt.registerTask('default', ['connect']);
};

