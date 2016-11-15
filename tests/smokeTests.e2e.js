describe('Website smoke tests', function () {
    
    beforeEach(function () {
        browser.get('http://localhost:8888/index.html');
    });

    it("Startup page should have the title 'Protractor workshop | Home'", function () {
        fail();
    });

    it("Page's footer should contain text '2013 Shapebootstrap'", function () {
        fail();
    });
});
