	var contactPage = require('./pages/contact');

describe('Protractor Workshop app', function() {

	beforeEach(function () {
		contactPage.get();
	});

	it('hould have Contact page with title "Protractor workshop | Contact us"', function(){
		expect(contactPage.getTitle()).toEqual("Protractor workshop | Contact us");
	});

	it('should display text "Your message has been sent." when user sends message  ', function(){
		element(by.id('name')).clear().sendKeys('Jacek');


    element(by.id('email')).clear().sendKeys('Jacek');


    element(by.id('content')).clear().sendKeys('Jacek');


		element(by.css('button.btn')).click();
		// var EC = protractor.ExpectedConditions;
		// browser.wait(EC.textToBePresentInElement(
		// 	element(by.css('span.message h3')),
		// 	'Your message has been sent.'),
		// 	 5000
		//  );


		expect(element(by.css('span.message h3')).getText()).toEqual('Your message has been sent.')
		

	});

});
