"use strict";
const {before, describe, it} = require("mocha");
const {expect} = require("chai");



describe("Node.js", () =>
{
	const cloneURL = require("./");
	const {URL} = require("universal-url");



	it("works", () =>
	{
		const org = new URL("http://domain/");
		const cloned = cloneURL(org);

		expect(cloned).to.be.an.instanceOf(URL);
		expect(cloned.href).to.equal(org.href);
	});
});



describe("Web Browser", () =>
{
	const puppeteer = require("puppeteer");
	let browser, page;

	const openBrowser = () =>
	{
		return puppeteer.launch({ args: ["--no-sandbox"] })
		.then(puppeteerInstance =>
		{
			browser = puppeteerInstance;
			return puppeteerInstance.newPage();
		})
		.then(pageInstance =>
		{
			page = pageInstance;
			return page.addScriptTag({ path: "browser.js" });
		});
	};



	before(() => openBrowser());
	after(() => browser.close());



	it("works", () =>
	{
		return page.evaluate(() =>
		{
			const org = new URL("http://domain/");
			const cloned = cloneURL(org);

			// Returned data is serialized
			return {
				hrefsMatch: cloned.href === org.href,
				instanceofURL: cloned instanceof URL
			};
		})
		.then(result =>
		{
			expect(result.instanceofURL).to.be.true;
			expect(result.hrefsMatch).to.be.true;
		});
	});
});
