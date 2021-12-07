
const { expect } = require('chai');
const isSymmetric = require('./symmetry');

describe('Symmetry checker', () => {
    it('return true for symmetric array', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });

    it('return false for non-symmetric array', () => {
        expect(isSymmetric([1, 2, 3])).to.be.false;
    });

    it('return false for non-array', () => {
        expect(isSymmetric(5)).to.be.false;
    });

    it('return false for type-different symmetric arrays', () => {
        expect(isSymmetric([1, 2, '1'])).to.be.false;
    });

    // test overloading
    it('return true for symmetric array with odd number of elements', () => {
        expect(isSymmetric([1, 2, 1])).to.be.true;
    });

    it('return true for symmetric array with strings', () => {
        expect(isSymmetric(['a', 'b', 'b', 'a'])).to.be.true;
    });

    it('return false for non-symmetric array with strings', () => {
        expect(isSymmetric(['a', 'b', 'c'])).to.be.false;
    });



});

    // it('return false for string parameter', () => {
    //     expect(isSymmetric('abba')).to.be.true;
    // });