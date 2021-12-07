
const { expect, assert } = require('chai');
const isOddOrEven = require('./evenOrOdd');

describe('isOddOrEven', () => {

    it('Test invalid input', () => {
        expect(isOddOrEven(1)).to.be.undefined;
        expect(isOddOrEven({})).to.be.undefined;
        expect(isOddOrEven([])).to.be.undefined;
    });

    it('Test if odd is returned', () => {
        expect(isOddOrEven('odd')).to.be.equal('odd');
    });

    it('Test if even is returned', () => {
        expect(isOddOrEven('even')).to.be.equal('even');
        expect(isOddOrEven('')).to.be.equal('even');
    });

    
});


