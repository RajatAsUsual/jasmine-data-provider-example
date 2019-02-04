// An example configuration file.
exports.config = {
    directConnect: true,
  
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      'browserName': 'chrome',
      shardTestFiles: true,
      maxInstances: 2
    },
  
    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',
    
    specs: ['specs/ui/test/*.js'],
  
    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
      defaultTimeoutInterval: 30000
    },
    
    onPrepare: function() {
      var SpecReporter = require('jasmine-spec-reporter');
      // add jasmine spec reporter
      jasmine.getEnv().addReporter(new SpecReporter({
      	displayStacktrace: false
      }));
   }
  };