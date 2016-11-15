var HomePage = require('./pages/HomePage');

describe('Home Page', function () {
    
    var homePage = new HomePage();

    beforeEach(function () {
        homePage.load();
    });

    it("should display 'Example Headline 1' in the carousel after page is loaded", function () {
        fail();
    });

    it("should have feature's header containing 'At vero eos et accusamus'", function () {
        fail();
    });

    it('should have Feature A, Feature B and Feature C sections', function () {
        fail();
    });

    it("should have main menu with following items: 'Home', 'About', 'Services', 'Blog', 'Contact'", function () {
        fail();
    });

    it("should route to 'Blog' pages after selecting link from the main menu", function () {
        fail();
    });
});
