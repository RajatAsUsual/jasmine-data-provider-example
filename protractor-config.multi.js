// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  multiCapabilities: [{
    'browserName': 'chrome',
    maxInstances: 2
  }, {
    'browserName': 'firefox',
    maxInstances: 2
  }],

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  specs: ['specs/ui/**/*.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

  onPrepare: function () {
    var SpecReporter = require('jasmine-spec-reporter');
    // add jasmine spec reporter
    jasmine.getEnv().addReporter(new SpecReporter({
      displayStacktrace: true,
      displayFailuresSummary: true,
      displaySuccessfulSpec: true,
      displayFailedSpec: true,
      displayPendingSpec: true,
      displaySpecDuration: true,
      displaySuiteNumber: true,
      colors: {
        success: 'green',
        failure: 'red',
        pending: 'yellow'
      },
      prefixes: {
        success: ':) ',
        failure: ':( ',
        pending: ':x '
      }
    }));
  }
};