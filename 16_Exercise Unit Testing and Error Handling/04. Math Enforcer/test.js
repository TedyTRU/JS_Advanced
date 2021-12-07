
const { expect, assert } = require('chai');
const mathEnforcer = require('./mathEnforcer');

describe('Test math enforcer functionality', () => {

    describe('addFive', () => {

        it('should return correct result with a non-number parameter', () => {
            expect(mathEnforcer.addFive('5')).to.be.undefined;
        });

        it('should return correct result with number parameter', () => {
            expect(mathEnforcer.addFive(5)).to.be.equal(10);
        });

        it('should return correct result with negative value', () => {
            expect(mathEnforcer.addFive(-5)).to.be.equal(0);
        });

        it('should return correct result with floating-point value', () => {
            expect(mathEnforcer.addFive(5.05)).to.be.closeTo(10.05, 0.01);
        });

    });

    describe('subtractTen', () => {

        it('should return correct result with a non-number parameter', () => {
            expect(mathEnforcer.subtractTen('10')).to.be.undefined;
        });

        it('should return correct result with number parameter', () => {
            expect(mathEnforcer.subtractTen(10)).to.be.equal(0);

        });

        it('should return correct result with negative value', () => {
            expect(mathEnforcer.subtractTen(-5)).to.be.equal(-15);
        });

        it('should return correct result with floating-point value', () => {
            expect(mathEnforcer.subtractTen(20.05)).to.be.closeTo(10.05, 0.01);
        });


    });

    describe('sum', () => {

        it('should return correct result with a non-number parameter', () => {
            expect(mathEnforcer.sum('10', 10)).to.be.undefined;
            expect(mathEnforcer.sum(10, '10')).to.be.undefined;
        });

        it('should return correct result with number parameter', () => {
            expect(mathEnforcer.sum(10, 10)).to.be.equal(20);

        });

        it('should return correct result with negative value', () => {
            expect(mathEnforcer.sum(-5, -1)).to.be.equal(-6);
        });

        it('should return correct result with negative and positive value', () => {
            expect(mathEnforcer.sum(-5, 1)).to.be.equal(-4);
        });

        it('should return correct result with floating-point value', () => {
            expect(mathEnforcer.sum(5.05, 5.05)).to.be.closeTo(10.10, 0.01);
        });


    });


});