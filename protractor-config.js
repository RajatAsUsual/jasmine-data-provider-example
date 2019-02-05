const spawn = require('child_process');
// An example configuration file.
exports.config = {
  directConnect: true,

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  specs: ['specs/ui/**/*.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
    print: function() {}
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

    spawn.execSync('node common/mongo-mock.js');
  }
};