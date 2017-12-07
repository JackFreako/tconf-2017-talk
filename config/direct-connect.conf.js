var  config = {
	framework:'jasmine2'
	, specs: ['../e2e/*-spec.js']
	, capabilities:{
		browserName: 'chrome',
		name: 'Demo Job',
		shardTestFiles: true,
        maxInstances: 2
        , directConnect:true        
    }
    , allScriptsTimeout: 10000
    , getPageTimeout: 5000
};

exports.config = config;
