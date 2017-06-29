"use strict";
const {expect} = require("chai");



describe("Node.js", function()
{
	const cloneURL = require("./");
	const {URL} = require("universal-url");



	it("works", function()
	{
		const org = new URL("http://domain/");
		const cloned = cloneURL(org);

		expect(cloned).to.be.an.instanceOf(URL);
		expect(cloned.href).to.equal(org.href);
	});
});



describe("Web Browser", function()
{
	const Nightmare = require("nightmare");
	let browser;



	before(() => browser = new Nightmare({ nodeIntegration:false }).goto("about:blank").inject("js", "browser.js"));



	it("works", function()
	{
		return browser.evaluate( function()
		{
			var org = new URL("http://domain/");
			var cloned = cloneURL(org);

			// Returned data is serialized
			return {
				hrefsMatch: cloned.href === org.href,
				instanceofURL: cloned instanceof URL
			};
		})
		.then( function(result)
		{
			expect(result.instanceofURL).to.be.true;
			expect(result.hrefsMatch).to.be.true;
		});
	});
});
