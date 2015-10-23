var  config = {
	framework: 'jasmine2'
	, specs: ['e2e/demo-spec.js']
	, exclude: ['e2e/todo-spec.js']
	, capabilities:{
		//browserName: 'firefox',
		browserName: 'chrome',
		name: 'QA Meetup Job',
		shardTestFiles: true,
		maxInstances: 2
	}
};

if (process.env.TRAVIS) {
  config.sauceUser = process.env.SAUCE_USERNAME;
  config.sauceKey = process.env.SAUCE_ACCESS_KEY;
  config.capabilities = {
    'browserName': 'chrome',
		'name': 'Protractor-Travis-CI',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAVIS_BUILD_NUMBER
  };
}

module.exports.config = exports.config = config;
