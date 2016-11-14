var contactPage = require('./pages/contact')

describe('Protractor Workshop app', function () {
  beforeEach(function () {
    contactPage.get()
  })

  it('hould have Contact page with title "Protractor workshop | Contact us"', function () {
    expect(contactPage.getTitle()).toEqual('Protractor workshop | Contact us')
  })

  it('should display text "Your message has been sent." when user sends message  ', function () {
    element(by.id('name')).clear().sendKeys('Name')
    element(by.id('email')).clear().sendKeys('email@com')
    element(by.id('content')).clear().sendKeys('Tekst wiadomości')
    element(by.buttonText('Submit')).click()
    var message = element(by.css('span.message h3'))

    var ec = protractor.ExpectedConditions
    browser.wait(ec.textToBePresentInElement(message,
    'Your message has been sent.'), 5000)
    expect(message.getText()).toEqual('Your message has been sent.')
  })
})
