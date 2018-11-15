exports.options = {
	desiredCapabilities: {
		platformName: 'android',
		platformVersion: '9',
		appPackage: 'com.candl.athena',
		appActivity: 'com.candl.athena.activity.Calculator',
		automationName: 'uiautomator2',
		avdReadyTimeout: '2000',
		deviceName: 'emulator-5554',
	},
	host: 'localhost',
	port: 4723
};	
