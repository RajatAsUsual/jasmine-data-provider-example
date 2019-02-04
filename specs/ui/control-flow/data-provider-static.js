var users = require('../../test-data/test.module.js');
var using = require('jasmine-data-provider');

describe('angularjs homepage insert users with json data with control flow', function () {

  //Using JSON module from file
  using(users.data, function (data, description) {
    it('should greet the named user - ' + description, function () {
      browser.get('http://www.angularjs.org');
      element(by.model('yourName')).sendKeys(data.name);
      let greeting = element(by.binding('yourName'));
      expect(greeting.getText()).toEqual('Hello ' + data.name + '!');
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