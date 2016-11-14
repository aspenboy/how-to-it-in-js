var homePage = require('./pages/home')

describe('Protractor Workshop app', function () {
  beforeEach(function () {
    homePage.get()
  })

  it('hould have home page with title "Protractor workshop | Home"', function () {
    expect(homePage.getTitle()).toEqual('Protractor workshop | Home')
  })

  fit('should have "Example headline 2" carousel item after clicking on next arrow', function () {
    var expectedHeader = 'Example Headline 2'
    var activeCarouselHeader = element(by.css('div.active h1'))
    var nextButton = element(by.css('a.right'))
    nextButton.click()
    // Replace this ugly code
    // browser.sleep(1000)
    var ec = protractor.ExpectedConditions
    browser.wait(ec.textToBePresentInElement(activeCarouselHeader, expectedHeader), 5000)
    expect(activeCarouselHeader.getText()).toEqual(expectedHeader)
  })

  xit('should display drop down after clicking on About menu item', function () {
    // Enter your code here
  })
})
