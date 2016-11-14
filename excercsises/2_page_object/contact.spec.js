var contactPage = require('./pages/contact')

describe('Protractor Workshop app', function () {
  beforeEach(function () {
    contactPage.get()
  })

  it('should have "Get in touch" and "Address" sections on Contact Us page', function () {
    expect(contactPage.getHeaderText(0)).toEqual('Get in Touch')
    expect(contactPage.getHeaderText(1)).toEqual('Address')
  })
})
