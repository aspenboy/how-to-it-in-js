var HomePage = function () {

    this.homeUrl = 'index.html';
    this.menuItems = element.all(by.css('ul.nav > li > a'));
}

HomePage.prototype.load = function () {
    browser.get(this.homeUrl);
};

HomePage.prototype.clickMenuItem = function (idx) {
    this.menuItems.get(idx).click();
}

HomePage.prototype.getMenuItemText = function (idx) {
    return null; // fix this!
}

module.exports = HomePage;
