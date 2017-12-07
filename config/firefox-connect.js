var  config = {
	framework:'jasmine2'
	, specs: ['../e2e/*-spec.js']
	, capabilities:{
		browserName: 'firefox',
		name: 'Demo Job',
		shardTestFiles: true,
        maxInstances: 2
    }
    , geckoDriver: '../node_modules/geckodriver/bin/geckodriver'
    , allScriptsTimeout: 10000
    , getPageTimeout: 5000
};

exports.config = config;
