var using = require('jasmine-data-provider');
var data = require('../../../test-data/test.module.js');

describe('angularjs homepage insert users with function without control flow', function () {

  using(data.aggregate, function (data) {
    it('should greet the named user - ' + data.name, async function () {
      browser.ignoreSynchronization = true;

      await browser.get('http://www.angularjs.org');
      await element(by.model('yourName')).sendKeys(data.name);
      let greeting = element(by.binding('yourName'));
      expect(await greeting.getText()).toEqual('Hello ' + data.name + '!');
      
      browser.ignoreSynchronization = true;
    });
  });
})
