module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        protractor: {
            options: {
                configFile: 'protractor-config.js',
                keepAlive: true,
                noColor: false,
                args: {
                }
            },
            default: {
                options: {
                    args: {
                    }
                }
            },
            sharded: {
                options: {
                    args: {
                        capabilities: {
                            'browserName': 'chrome',
                            shardTestFiles: true,
                            maxInstances: 2
                          }
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