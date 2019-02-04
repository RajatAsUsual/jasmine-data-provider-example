module.exports = function(grunt) {
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),        
        protractor: {
            options: {
                keepAlive: true,
                noColor: false,
                args: {
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

    grunt.loadNpmTasks('grunt-protractor-runner');

    grunt.registerTask('default', ['protractor:sharded']);

};