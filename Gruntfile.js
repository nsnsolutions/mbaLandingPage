module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),


        clean: {
            options: { force: true },
            "build": [ 'build/**', '.temp/**' ],
        },

        sync: {

            "html": {
                files: [{
                    cwd: 'src/',
                    dest: 'build/',
                    src: [ '*.html', 'Modules/**/templates/*.html' ]
                }]
            },

            "images": {
                files: [{
                    cwd: '',
                    dest: 'build/',
                    src: 'images/*'
                }]
            },
            "css": {
                files: [{
                    cwd: '',
                    dest: 'build/',
                    src: 'css/**'
                }]
            },

            "json": {
                files: [{
                    cwd: 'src/',
                    dest: 'build/',
                    src: '*.json'
                }]
            },

            "scripts": {
                files: [{
                    cwd: '',
                    dest: 'build/',
                    src: 'scripts/**'
                }]
            }

        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                screwIE8: true,
                mangle: false,
                mangleProperties: false,
                reserveDOMCache: true,
                sourceMap: true,
            },
            release: {
                files: {
                    'build/site.min.js': [
                        'src/*.js',
                        'config.js',
                        './src/Modules/**/controllers/*.js',
                        './src/Modules/**/services/*.js',
                        './src/Modules/_global/directives/*.js',
                    ]
                }
            },
            devel: {
                files: {
                    'build/site.min.js': [
                        'src/*.js',
                        'config.js',
                        './src/Modules/**/controllers/*.js',
                        './src/Modules/**/services/*.js',
                        './src/Modules/_global/directives/*.js',
                    ]
                },
                options: {
                    beautify: {
                        width: 80,
                        beautify: true
                    }
                }
            }
        },

        cssmin: {
            release: {
                files: {
                    'build/site.min.css': [ '.temp/*.css' ]
                },
                options: {
                    sourceMap: true
                }
            },
            devel: {
                files: {
                    'build/site.min.css': [ '.temp/*.css' ]
                },
                options: {
                    sourceMap: true
                }
            }
        },

        sass: {
            options: {
                sourceMap: true
            },
            build: {
                files: {
                    '.temp/site.css': 'src/Assets/styles/site.scss'
                }
            }
        },

        watch: {
            options: {
                interrupt: true,
                atBegin: true
            },
            js: {
                files: [
                    'config.js',
                    'src/*.js'

                ],
                tasks: ['uglify:devel'],
            },
            html: {
                files: [
                    'src/*.html'
                ],
                tasks: [ 'sync:html' ],
            },
            images: {
                files: [
                    'src/images/**'
                ],
                tasks: [ 'sync:images' ],
            },
            json: {
                files: [
                    'src/*.json'
                ],
                tasks: [ 'sync:json' ],
            },
            script: {
                files: [
                    'src/scripts'
                ],
                tasks: [ 'sync:scripts' ],
            },
            css: {
                files: [
                    'src/css'
                ],
                tasks: [ 'sync:css' ],
            }

        }

    });

    grunt.loadNpmTasks('grunt-sync');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-curl');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('build', [
        'clean:build',
        'uglify:devel',
        'sync:html',
        'sync:css',
        'sync:images',
        'sync:json',
        'sync:scripts'
    ]);

    grunt.registerTask('build-release', [
        'clean:build',
        'uglify:release',
        'sass:build',
        'sync:html',
        'sync:images',
        'sync:json'
    ]);
};
