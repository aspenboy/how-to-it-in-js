var ContactPage = function() {

  this.sectionHeaders = element.all(by.css('h3'));

  this.get = function() {
    browser.driver.get('http://localhost:8888/contact.html');
  };

  this.getTitle = function() {
    return browser.driver.getTitle();
  };

  this.getSectionHeaderAtIdx = function(idx) {
    return this.sectionHeaders.get(idx);
  };

};

module.exports = new ContactPage();
