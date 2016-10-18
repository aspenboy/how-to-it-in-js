exports.config = {

  directConnect: true,

  suites: {
    full: '*.spec.js'
  },

  capabilities: {
    'browserName': 'chrome'
  },
  onPrepare: function () {
    var jasmineReporters = require('jasmine-reporters')
    var SpecReporter = require('jasmine-spec-reporter')
    var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter')

    // add jasmine spec reporter
    jasmine.getEnv().addReporter(new SpecReporter({
      displayStacktrace: true
    }))

    jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({}))

    browser.ignoreSynchronization = true
    browser.baseUrl = 'http://aadays.pl'

    browser.__dataDir = __dirname + '/data/'
    browser.__pagesDir = __dirname + '/pages/'
    browser.__srcDir = __dirname + '/../../src/'
    browser.__scrDir = __dirname + '/screenshots'

    browser.driver.manage().window().maximize()
  },

  jasmineNodeOpts: {
    onComplete: null,
    isVerbose: true,
    showColors: true,
    defaultTimeoutInterval: 120000, // 2 minutes
    includeStackTrace: true
  // This line removes the default Protractor 'dot' test result reporter
  // Comment out if you want to see stack traces in case of errors
  // print: function () {}
  }

}
