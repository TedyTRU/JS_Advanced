
const dealership = require('./dealership');
const { expect } = require('chai');

describe('dealership', () => {

    describe('newCarCost', () => {
        it('works with old cars in list', () => {
            expect(dealership.newCarCost('Audi A4 B8', 15000)).to.equal(0);
            expect(dealership.newCarCost('Audi A6 4K', 20000)).to.equal(0);
            expect(dealership.newCarCost('Audi A8 D5', 25000)).to.equal(0);
            expect(dealership.newCarCost('Audi TT 8J', 14000)).to.equal(0);
        });

        it('works with new car', () => {
            expect(dealership.newCarCost('opel', 25000)).to.equal(25000);
        });


    });

    describe('carEquipment', () => {
        it('works ', () => {
            expect(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [0, 3]))
                .to.have.members(['heated seats', 'navigation']);
        });

     
    });

    describe('euroCategory', () => {
        it('checks the ecology of your new car', () => {
            expect(dealership.euroCategory(15)).to.equal('We have added 5% discount to the final price: 14250.');
            expect(dealership.euroCategory(4)).to.equal('We have added 5% discount to the final price: 14250.');
            
        });

        it('checks the ecology of your new car', () => {
            expect(dealership.euroCategory(0)).to.equal('Your euro category is low, so there is no discount from the final price!');
            expect(dealership.euroCategory(3)).to.equal('Your euro category is low, so there is no discount from the final price!');
            
        });

    });

});
