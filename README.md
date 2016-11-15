# Protractor workshop

Basics of end-to-end testing with protractor and javascript.

## Environment setup
1. Required tools
  * Chrome browser
  * [Node.js](https://nodejs.org/) - latest stable version
  * Clone the repository with [Git](https://git-scm.com/downloads) or `Download ZIP` and extract contents.

  * Inside the repository folder (where `package.json` file is located) use npm to install all required dependencies:

    `npm install`
    
  * Install protractor (use `-g` switch to install it globally)

    `npm install -g protractor`
    
  * Update selenium webdriver

    `webdriver-manager update`

  * Install gulp task runner 

    `npm install -g gulp`

2. Check if everything was set up correctly

  * Use gulp to start the application
  
    `gulp webserver`
    Head to `localhost:8888` and check if the webpage loads correctly. There might be some errors from the server, but we can ignore them for now.

  * Open another terminal window and try running the tests

    `protractor tests\config.js`
    Seeing a lot of failed tests? Good, we're going to fix them during the workshop :)
    
3. Use your favorite text editor, e.g. [Atom](https://atom.io/), [Sublime](https://www.sublimetext.com/) or [VS Code](https://code.visualstudio.com/)

>**Warning:** if you experience problems on Windows with NodeJS being unable to locate modules, head over [here](http://stackoverflow.com/questions/9587665/nodejs-cannot-find-installed-module-on-windows/). Jeśli ciągle będziesz miał problem zgłoś go w zakładce `Issues`. Postaram się pomóc.

## Przydatne materiały
* Never used JavaScript? Grab the basics at [codecademy](https://www.codecademy.com/tracks/javascript)
* [Mozilla JavaScript Guide - Re-introduction to JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
* [Mozilla JavaScript Guide - Working with Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
* [Protractor - homepage](https://angular.github.io/protractor/#/)
* [Protractor API](https://angular.github.io/protractor/#/api)
* [Jasmine](http://jasmine.github.io/2.3/introduction.html)
* [Using the map() function to transform collections](https://www.youtube.com/watch?v=646Xw2qFqJU)
* [Using reduce() and reduceRight() functions](https://www.youtube.com/watch?v=CQdaGcxQhSE)
