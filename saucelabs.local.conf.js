var  config = {
	framework: 'jasmine2'
	, sauceUser: process.env.SAUCE_USERNAME
  , sauceKey: process.env.SAUCE_ACCESS_KEY
	, specs: ['e2e/*-spec.js']
	, capabilities:{
		// browserName: 'phantomjs',
		// 'phantomjs.binary.path': require('phantomjs').path,
		// 'phantomjs.cli.args': ['--ignore-ssl-errors=true',  '--web-security=false'],
		browserName: 'chrome',
		name: 'Local-SauceLabs-Job',
		shardTestFiles: true,
		maxInstances: 2
	}
	,  chromeDriver: 'node_modules/chromedriver/bin/chromedriver'
};

module.exports.config = exports.config = config;
