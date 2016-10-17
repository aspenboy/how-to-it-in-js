
exports.config = {
  directConnect: true,

  specs: [
    'minimal.spec.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  // / MINIMAL CONFIGURATION END /////////////////////////////////////////////////////

  onPrepare: function () {
    browser.manage().window().setSize(1680, 1050)
    browser.ignoreSynchronization = true

    // Full list of available options:
    // https://github.com/bcaudan/jasmine-spec-reporter/blob/master/README.md
    // var SpecReporter = require('jasmine-spec-reporter')
    // jasmine.getEnv().addReporter(new SpecReporter({
    //   displayStacktrace: true
    // }))

    // var jasmineReporters = require('jasmine-reporters')
    // jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
    //   consolidateAll: true,
    //   savePath: 'results/unit',
    //   filePrefix: 'xmloutput'
    // }))

    // var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter')
    // jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({}))
  },

  jasmineNodeOpts: {
    defaultTimeoutInterval: 1200000, // 20 minutes
    onComplete: null,
    isVerbose: true,
    showColors: true,
    includeStackTrace: true, // not supported anymore, jasmine-spec-reporter has to be used instead
    print: function () {}
  }
}
