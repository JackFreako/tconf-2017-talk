var  config = {
	framework:'jasmine2'
	, specs: ['../e2e/*-spec.js']
	, capabilities:{
		browserName: 'chrome',
		name: 'Demo Job',
		shardTestFiles: true,
        maxInstances: 2,
		chromeOptions: {
 			 args: [ "--headless", "--disable-gpu", "--window-size=800x600" ]
        }	
	}
};

exports.config = config;
