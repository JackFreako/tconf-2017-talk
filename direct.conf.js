var  config = {
	framework: 'jasmine2'
	// , sauceUser: '<username>'
  // , sauceKey: '<access key>'
	//, seleniumAddress: 'http://localhost:4444/wd/hub'
	, specs: ['e2e/demo-spec.js']
	, exclude: ['e2e/todo-spec.js']
	, capabilities:{
		// browserName: 'phantomjs',
		// 'phantomjs.binary.path': require('phantomjs').path,
		// 'phantomjs.cli.args': ['--ignore-ssl-errors=true',  '--web-security=false'],
		browserName: 'chrome',
		name: 'QA Meetup Job',
		//browserName: 'firefox',
		shardTestFiles: true,
		maxInstances: 2
	}
// 	, multiCapabilities: [{
//   'browserName': 'firefox'
// }, {
//   'browserName': 'chrome'
// }]
	,  chromeDriver: 'node_modules/chromedriver/bin/chromedriver'
//	, directConnect: true
	, jasmineNodeOpts: {
	 // If true, print colors to the terminal.
	 showColors: true,
	 // Default time to wait in ms before a test fails.
	 defaultTimeoutInterval: 60000
 }
};

if (process.env.TRAVIS) {
  config.sauceUser = process.env.SAUCE_USERNAME;
  config.sauceKey = process.env.SAUCE_ACCESS_KEY;
  config.capabilities = {
    'browserName': 'chrome',
		'name': 'Protractor Travis CI Job',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAVIS_BUILD_NUMBER
  };
}

module.exports.config = exports.config = config;
