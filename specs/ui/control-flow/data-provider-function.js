var using = require('jasmine-data-provider');
var data = require('../../../test-data/test.module.js');

describe('angularjs homepage insert users with function with control flow', function () {

  using(data.aggregate, function (data) {
    it('should greet the named user - ' + data.name, function () {
      browser.get('http://www.angularjs.org');
      element(by.model('yourName')).sendKeys(data.name);
      let greeting = element(by.binding('yourName'));
      expect(greeting.getText()).toEqual('Hello ' + data.name + '!');
    });
  });
})
