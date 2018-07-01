var quotesJson = require("../harvey-quotes.json");
var uniqueRandomArray = require("unique-random-array");

module.exports = {
  all: quotesJson,
  random: uniqueRandomArray(quotesJson)
};
