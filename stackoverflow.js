#!/usr/bin/env node
const {Builder,By,Key,until} = require('selenium-webdriver');
(async function stackoverflow(){
	let driver = await new Builder()
		.forBrowser('firefox').build();
	await driver.get('https://stackoverflow.com/');
	
	await driver.findElement(By.name('q')).sendKeys('selenium',Key.ENTER);

	let qs = await driver.wait(until.elementsLocated(By.className('question-summary')))
	for (let element of qs) {
		//console.log("--------");
		//console.log(await element.getText());
		let titleElem = await q.findElement(By.className("question-hyperlink"));
		let descElem = await q.findElement(By.className("excerpt"));
		let userElem = await q.findElement(By.css(".user-details a"));
		
		let title = await titleElem-getText();
;	};
})();