/*var webdriverio = require('webdriverio');

var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};

webdriverio
  .remote(options)
  .init()
  .url('http://buddy.works')
  .saveScreenshot('buddyworks.png') 
  .end();*/
describe('When a user does not enter a username and password', function() {
   it('should display an error message', function(done) {
       browser
           .click('#authorize login')
           .waitForExist('.login-form__error');

       expect(browser.getText('.login-form__error'))
           .toBe('Неправильный логин или пароль');

       browser.call(done);
   });
});

	
