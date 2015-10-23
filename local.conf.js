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
};

module.exports.config = exports.config = config;
