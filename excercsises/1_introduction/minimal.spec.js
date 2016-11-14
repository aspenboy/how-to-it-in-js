describe('Protractor workshop app', function () {
  beforeEach(function () {
    browser.get('http://localhost:8888/index.html')
  })

  it('should have home page with title Protractor workshop | Home', function () {
    var pageTitle = browser.driver.getTitle()
    expect(pageTitle).toEqual('Protractor workshop | Home')
  })

  it('should have footer with Copyright © 2013 Shapebootstrap | All Rights Reserved', function () {
    var footerCopyright = element(by.xpath('//footer/div/div'))
    var expectedHTML = 'Copyright © 2013 Shapebootstrap | All Rights Reserved'
    expect(footerCopyright.getText()).toContain(expectedHTML)

    // TODO
    // var self = this
    // var text = ''

    // footerCopyright.getText().then(function (txt) {
    //   self.text = txt
    // }, function (err) {
    //   console.log(err)
    // }).then(function () {
    //   console.log('TEXT: ', self.text)
    // })
  })

  /**
   * EXERCISE 2
   *
   * Check http://angular.github.io/protractor/#/api?view=ElementFinder
   * to see how to select element for verification
   */
  fit('should have "Example Headline 1" carousel item after entering site', function () {
    var headline = $('.item.active').$('.carousel-caption h1')
    expect(headline.getText()).toEqual('Example Headline 1')
  })

  /**
   * EXERCISE 2
   */
  xit('should have correct feature header', function () {
    // Enter your code here
  })

  /**
   * EXERCISE 3
   *
   * Check http://angular.github.io/protractor/#/api?view=ElementArrayFinder
   * to see how get function can be used
   */
  xit('should have menu items with links to "Home", "About", "Services", "Blog", "Contact",  pages', function () {
    // Enter your code here
  })

  /**
   * EXERCISE 3
   *
   * Check http://angular.github.io/protractor/#/api?view=ElementArrayFinder
   * to see how map function can be used to verify content of multiple elements
   */
  xit('should have Feature A, Feature B and Feature C sections', function () {
    // Enter your code here
  })

  /**
   * Check http://angular.github.io/protractor/#/api?view=ElementArrayFinder
   * to see how fileter function can be used select elements based on condition
   */
  xit('should route to "Blog" pages after selecting link', function () {
    // Enter your code here
  })
})
