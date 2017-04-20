"use strict";
const URL = require("universal-url").URL;



function cloneURL(url)
{
	return new URL(url);
}



module.exports = cloneURL;
