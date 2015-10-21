# ProtractorTests ![Build Status](https://travis-ci.org/jags14385/ProtractorTests.svg?branch=master)

Learning protractor

QA Meetup Prep

Trying out Protractor , Travis CI & Sauce Labs

Managing node dependencies via package.json (npm install) [DONE]

Added Git-Ignore file [Done]

Moved spec files to a folder [ Done]

Basic test-specs [Done]

Parallel execution [Done]

Add .travis.yml file to your repository [Done]

directConnect bypassing selenium server [Done]
  -- If direct Connect is true then , one needs the chrome driver to be present in the node_modules so
      that protractor can directly interact with chrome driver.

Multiple browsers (Chrome , Firefox) [Done]

Headless mode (PhantomJS) [Not to be done] [As specified in their browser support]
[https://github.com/angular/protractor/blob/master/docs/browser-support.md] [DONE]

Running test against multiple browsers [DONE].This means specs specified will run in the browsers specified.
 -- You have specified both capabilities and multiCapabilities. This will result in capabilities being ignored.[DONE]

 Page Object [Done]

 Initiating the test run locally on Sauce labs . Just specify the SAUCE_USERNAME & SAUCE_CONNECT .Its all good . [DONE]

 CI [Integration Done] [Tests are passing now .. YAY !!! ]

/* npm install <package-name> --save-dependencies */
