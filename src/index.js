import quotesJson from "./harvey-quotes.json";
import uniqueRandomArray from "unique-random-array";
var getRandomQuoteFromArray = uniqueRandomArray(quotesJson);

module.exports = {
  all: quotesJson,
  random: random
};

function random(number) {
  if (number == undefined) {
    return getRandomQuoteFromArray();
  }
  else{
    var quotesArray = [];
    while (number--) {
      quotesArray.push(getRandomQuoteFromArray());
    }
    return quotesArray;
  }
}
