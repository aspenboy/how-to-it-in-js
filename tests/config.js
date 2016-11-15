exports.config = {
    directConnect: true, // bypass selenium server and use chromedriver directly

    specs: [
        '*.e2e.js'
    ],

    onPrepare: function () {
        browser.ignoreSynchronization = true; // required if testing non-angular sites
        browser.baseUrl = 'http://localhost:8888/';
    }
}