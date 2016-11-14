var Menu = function (el) {
  this.menuItems = el

  this.clickMenuAtIdx = function (idx) {
    this.menuItems.get(idx).click()
  }

  this.getMenuTextAtIdx = function (idx) {
    return this.menuItems.get(idx)
  }
}

module.exports = Menu
