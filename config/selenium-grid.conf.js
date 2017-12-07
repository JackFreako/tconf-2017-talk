var  config = {
	framework:'jasmine2'
	,seleniumAddress: 'http://localhost:4444/wd/hub'
	, specs: ['../e2e/*-spec.js']
	, capabilities:{
		browserName: 'chrome',
		name: 'Demo Job',
		shardTestFiles: true,
		maxInstances: 2
	}
};

exports.config = config;
