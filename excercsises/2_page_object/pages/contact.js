var ContactPage = function () {
  this.get = function () {
    return browser.driver.get('http://localhost:8888/contact.html')
  }

  this.getSectionHeaders = element.all(by.css('h3'))

  this.getHeaderText = function (idx) {
    return this.getSectionHeaders.get(idx).getText()
  }
}

module.exports = new ContactPage()
