const { expect } = require('chai');
const { assert } = require('chai');
const pizzUni = require('./script');



describe("Tests pizza place", () => {
    describe("makeAnOrder tests", () => {

        it('Should return message when pizza is ordered', () => {
            let order = {
                orderedPizza: 'Margaritta',
            }
            expect(pizzUni.makeAnOrder(order)).to.be.equal(`You just ordered ${order.orderedPizza}`)
        });

        it('Should return message when pizza and drink is ordered', () => {
            let order = {
                orderedPizza: 'Margaritta',
                orderedDrink: 'Cola',
            }
            expect(pizzUni.makeAnOrder(order)).to.be.equal(`You just ordered ${order.orderedPizza} and ${order.orderedDrink}.`)
        });

        it('Should throw error when there is no ordered pizza', () => {
            let order = {
                orderedDrink: 'Cola',
            }
            expect(() => pizzUni.makeAnOrder(order)).to.throw();
        });

        it('Should throw error, when there is no order', () => {
            expect(() => pizzUni.makeAnOrder()).to.throw();
        });

    });

    describe("getRemainingWork tests", () => {

        it('Should return message if there is pizza with status ready', () => {
            let statusArr = [{
                pizzaName: 'Margaritta',
                status: 'ready'
            }];

            expect(pizzUni.getRemainingWork(statusArr)).to.be.equal('All orders are complete!');
        });

        it('Should return message if there is no pizza with status ready', () => {
            let statusArr = [
                { pizzaName: 'a', status: 'ready' },
                { pizzaName: 'b', status: 'preparing' },
                { pizzaName: 'c', status: 'preparing' },
            ];

            expect(pizzUni.getRemainingWork(statusArr)).to.be.equal('The following pizzas are still preparing: b, c.');
        });

    });

    describe("orderType tests", () => {

        it('Should return totalSum when type of order is Delivery', () => {

            expect(pizzUni.orderType(100, 'Delivery')).to.be.equal(100);
        });

        it('Should return totalSum with discount when type of order is Carry Out', () => {

            expect(pizzUni.orderType(100, 'Carry Out')).to.be.equal(90);
        });


    });


});

