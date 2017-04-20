"use strict";
var g;



if (typeof window !== "undefined")
{
    g = window;
}
else if (typeof global !== "undefined")
{
    g = global;
}
else if (typeof self !== "undefined")
{
    g = self;
}
else
{
    g = this;
}



function cloneURL(url)
{
	return new g.URL(url);
}



if (typeof define === "function" && define.amd)
{
	define(function(){ return cloneURL });
}
else if (typeof exports === "object")
{
	module.exports = cloneURL;
}
else
{
	g.cloneURL = cloneURL;
}
