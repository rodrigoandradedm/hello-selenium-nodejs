const webdriver = require('selenium-webdriver');
new webdriver.Builder()
	.forBrowser('firefox').build()
	.get('https://www.google.com/');
