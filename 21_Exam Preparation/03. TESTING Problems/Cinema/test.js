
const cinema = require('./cinema');
const { expect } = require('chai');

describe('cinema', () => {

    describe('showMovies', () => {
        it('works when arr equals zero', () => {
            expect(cinema.showMovies([])).to.equal('There are currently no movies to show.');
        });

        it('works when arr is not zero', () => {
            expect(cinema.showMovies(['King Kong', 'Joker']))
                .to.equal('King Kong, Joker');
        });

    });

    describe('ticketPrice', () => {
        it('works if the submitted projectionType is present in the schedule', () => {
            expect(cinema.ticketPrice('Normal')).to.be.equal(7.50);
            expect(cinema.ticketPrice('Premiere')).to.be.equal(12.00);
            expect(cinema.ticketPrice('Discount')).to.be.equal(5.50);
        });

        it('works if the submitted projectionType is not present in the schedule', () => {
            expect(() => { cinema.ticketPrice('not') }).to.throw();
            expect(() => cinema.ticketPrice([])).to.throw();

        });

    });

    describe('swapSeatsInHall', () => {
        it('swaps the seat numbers', () => {
            expect(cinema.swapSeatsInHall(15, 20)).to.equal('Successful change of seats in the hall.');
            //expect(cinema.swapSeatsInHall(5, 10)).to.equal('Successful change of seats in the hall.');
        });

        it("should fail", () => {
            //expect(cinema.swapSeatsInHall(1.1, 2)).equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(0, 2)).equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(1, 0)).equal("Unsuccessful change of seats in the hall.")
        });

    });

});
