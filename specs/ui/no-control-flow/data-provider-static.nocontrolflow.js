var users = require('../../../test-data/test.module.js').users;
var using = require('jasmine-data-provider');

describe('angularjs homepage insert users with json data without control flow', function () {

  //Using JSON module from file
  using(users, function (data, description) {
    it('should greet the named user - ' + description, async function () {
      browser.ignoreSynchronization = true;

      await browser.get('http://www.angularjs.org');
      await element(by.model('yourName')).sendKeys(data.name);
      let greeting = element(by.binding('yourName'));
      expect(await greeting.getText()).toEqual('Hello ' + data.name + '!');

      browser.ignoreSynchronization = false;
    });
  });

  //Using data declared locally
  using(
    {
      'Single Digit': { a: 5, b: 2, expected: 3 },
      'Double Digit': { a: 25, b: 26, expected: -1 }
    }, function (data, description) {
      it('Should subtract the numbers which are ' + description, function () {
        var result = data.a - data.b;

        expect(result).toEqual(data.expected);
      });
    });
});