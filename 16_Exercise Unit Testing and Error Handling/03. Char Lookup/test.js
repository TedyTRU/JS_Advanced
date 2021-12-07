
const { expect, assert } = require('chai');
const lookupChar = require('./lookUpChar');

describe('Test lookUpChar functionality', () => {

    it('should return undefined if the first value is not a string', () => {
        expect(lookupChar(5, 5)).to.be.undefined;
    });

    it('should return undefined if the second value is not a number', () => {
        expect(lookupChar('string', 5.5)).to.be.undefined;
        expect(lookupChar('string', '5')).to.be.undefined;
    });

    it('should return "incorrect index" if the second value is outside of bounds', () => {
        expect(lookupChar('string', -1)).to.be.equal("Incorrect index");
        expect(lookupChar('string', 6)).to.be.equal("Incorrect index");
    });

    it('should return correct result', () => {
        expect(lookupChar('string', 3)).to.be.equal('i');
    });


});