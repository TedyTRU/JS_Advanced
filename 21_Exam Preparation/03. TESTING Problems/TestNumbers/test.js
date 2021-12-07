
const testNumbers = require('./testNumbers');
const { expect } = require('chai');

describe('testNumbers', () => {

    describe('sumNumbers', () => {
        it('works with valid numbers', () => {
            expect(testNumbers.sumNumbers(3, 5)).to.be.equal('8.00');
        });

        it('works with negative valid numbers', () => {
            expect(testNumbers.sumNumbers(-3, -5)).to.be.equal('-8.00');
        });

        it('works with negative valid numbers', () => {
            expect(testNumbers.sumNumbers(-1, 1)).to.be.equal('0.00');
        });

        it('works with floating point', () => {
            expect(testNumbers.sumNumbers(1.555, 0.333)).to.be.equal('1.89');
        });

        it('returns undefined with string parameters', () => {
            expect(testNumbers.sumNumbers('2', '2')).to.be.equal(undefined);
            expect(testNumbers.sumNumbers('a', 2)).to.be.equal(undefined);
            expect(testNumbers.sumNumbers(2, null)).to.be.equal(undefined);
        });

    });

    describe('numberChecker', () => {
        
        it('works with even value', () => {
            expect(testNumbers.numberChecker(2)).to.be.equal('The number is even!');
            expect(testNumbers.numberChecker('')).to.be.equal('The number is even!');
        });

        it('works with odd value', () => {
            expect(testNumbers.numberChecker(3)).to.be.equal('The number is odd!');
            expect(testNumbers.numberChecker('1')).to.be.equal('The number is odd!');
        });

        it('detects invalid parameter', () => {
            expect(() => testNumbers.numberChecker('a')).to.throw();
            //expect(testNumbers.numberChecker('3')).to.throw();
        });

    });

    describe('averageSumArray', () => {

        it ('works with integers', () => {
            expect(testNumbers.averageSumArray([1, 2, 3])).to.be.equal(2);
        });
        
        it ('works with floats', () => {
            expect(testNumbers.averageSumArray([1.5, 2.5, 3.5])).to.be.equal(2.5);
        });

    });

});