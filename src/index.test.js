import harveyQuotes from ".";
import {expect} from "chai";

describe("harvey-specter-quotes", () => {
  describe("all", () => {
    it("should be an Array", () => {
      expect(harveyQuotes.all).to.satisfy(isArrayOfStrings);
      function isArrayOfStrings(array) {
        return array.every(function(item) {
          return typeof item === "string";
        });
      }
    });
    it("should contain `Don't go to Trial.`", () => {
      expect(harveyQuotes.all).to.include("Don't go to trial.");
    });
  });

  describe("random", () => {
    it("should generate from list", () => {
      expect(harveyQuotes.all).to.include(harveyQuotes.random());
    });
    it("should be diff for successive calls", () => {
      var quote1 = harveyQuotes.random();
      var quote2 = harveyQuotes.random();
      expect(quote1 !== quote2).to.be.true;
    });
    it("should return an array of quotes when passed an int", () => {
      var arrayOfQuotes = harveyQuotes.random(4);
      expect(arrayOfQuotes.length).to.equal(4);
      for (var item of arrayOfQuotes) {
        expect(harveyQuotes.all).to.include(item);
      }
    });
  });
});
