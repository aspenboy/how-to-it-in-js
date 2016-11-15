var ContactPage = function () {

    this.homeUrl = 'http://localhost:8888/contact.html';
    this.getSectionHeaders = element.all(by.css('h3'));

}

ContactPage.prototype.getHeaderText = function () {}

module.exports = new ContactPage();
