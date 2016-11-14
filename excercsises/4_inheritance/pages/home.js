var Page = require('./page')

var HomePage = function () {
  /**
   * Call super constructor.
   */
  Page.call(this)

  /**
   * Self reference.
   */
  var self = this

  var HomePage = function () {
    var Menu = require('./menu')
    var menu = new Menu(element.all(by.css('ul.nav > li > a')))

    this.menuItems = element.all(by.css('ul.nav > li > a'))

    this.get = function () {
      this.load('/')
    }

    this.clickMenuAtIdx = menu.clickMenuAtIdx(idx)

    this.getMenuTextAtIdx = menu.getMenuTextAtIdx(idx)

    // this.clickMenuAtIdx = function (idx) {
    //   this.menuItems.get(idx).click()
    // }

    // this.getMenuTextAtIdx = function (idx) {
    //   return this.menuItems.get(idx)
    // }
  }
}

HomePage.prototype = Object.create(Page.prototype)
HomePage.prototype.constructor = HomePage

module.exports = new HomePage()
