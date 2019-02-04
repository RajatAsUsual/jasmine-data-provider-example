module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        protractor: {
            options: {
                keepAlive: true,
                noColor: false,
                args: {
                }
            },
            default: {
                options: {
                    configFile: 'protractor-config.js',
                    args: {
                    }
                }
            },
            sharded: {
                options: {
                    configFile: 'protractor-config.sharded.js',
                    args: {
                    }
                }
            },
            multi: {
                options: {
                    configFile: 'protractor-config.multi.js',
                    args: {
                    }
                }
            },
            auto: {
                keepAlive: false,
                options: {
                    args: {
                        seleniumPort: 4444
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('alcz-protractor-runner');

    grunt.registerTask('default', ['protractor:default']);

};