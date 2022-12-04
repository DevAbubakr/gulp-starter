// del include
const del = require("del");

// Url include
const url = require("../settings/url.js");

// del 
const clear = () => {
  return del(url.ready)
}

module.exports = clear;