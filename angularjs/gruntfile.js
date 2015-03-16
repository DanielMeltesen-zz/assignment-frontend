module.exports = function(grunt) {
    require('time-grunt')(grunt);

    grunt.initConfig({
        
        connect: {
            server: {
                options: {
                    port: 1337,
                    keepalive: true,
                    base: '',
                    hostname: 'localhost',
                    open: true,
                    index: 'index.html'
                }
            }
        },

        //
        // watch for changes
        //
        watch: {
            options: {
                atBegin: true
            },
            sass: {
                files: './source/sass/**/*.{scss,sass}',
                tasks: ['compass:watch']
            },
            js: {
                files: './source/js/app.js',
                tasks: ['uglify:watch']
            }
        },


        //
        // sass compilation with compass
        //
        compass: {
            options: {
                sassDir: 'source/sass',
                cssDir: 'assets/css',
                imagesDir: 'assets/images',
                relativeAssets: true,
                noLineComments: true,
                bundleExec: true,
            },
            watch: {
                options: {
                    environment: 'development',
                    noLineComments: false
                }
            },
            build: {
                options: {
                    outputStyle: 'compressed',
                    environment: 'production',
                    noLineComments: true
                }
            }
        },

        uglify: {
            watch: {
                files: {
                    'assets/js/app.js': ['./source/js/app.js']
                },
                options: {
                    compress: false,
                    mangle: false,
                    beautify: true
                }
            },
            build: {
                files: {
                    'assets/js/app.js': ['./source/js/app.js']
                },
                options: {
                    preserveComments: false,
                    mangle: true,
                    compress: {
                        drop_console: true
                    }
                }
            }
        }

    });


    //
    // Use grunt-tasks to load modules instead of
    // grunt.loadNpmTasks('xxx');
    //
    require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['compass:build', 'uglify:build']);

    grunt.registerTask('server', function (target) {
        grunt.task.run([
            'connect'
        ]);
    });
};
