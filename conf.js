exports.config = {
	framework: 'jasmine2'
	, seleniumAddress: 'http://localhost:4444/wd/hub'
	, specs: ['e2e/*-spec.js']
	, capabilities:{
		//browserName: 'phantomjs', 'phantomjs.binary.path':'/usr/local/lib/node_modules/phantomjs/bin/phantomjs',
		browserName: 'chrome',
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
	, directConnect: true
	, jasmineNodeOpts: {
	 // If true, print colors to the terminal.
	 showColors: true,
	 // Default time to wait in ms before a test fails.
	 defaultTimeoutInterval: 30000
 }
};
