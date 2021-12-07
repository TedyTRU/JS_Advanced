const library = require('./library');
const { expect } = require('chai');
describe('library', () => {

    describe('calcPriceOfBook', () => {
        it('works ', () => {
            expect(library.calcPriceOfBook('book', 1981)).to.equal('Price of book is 20.00');
           
        });

        it('works ', () => {
            expect(library.calcPriceOfBook('book', 1980)).to.equal('Price of book is 10.00');
        });

        it('works not', () => {
            expect(() => { library.calcPriceOfBook(null, 1980) }).to.throw();
            expect(() => { library.calcPriceOfBook('book', 'a') }).to.throw();
            expect(() => { library.calcPriceOfBook(5, -5) }).to.throw();
        });


     });

    describe('findBook', () => {
        it('works ', () => {
            expect(library.findBook(['Troy', 'Life Style', 'Torronto'], 'book'))
            .to.equal('The book you are looking for is not here!'); 
        });

        it('works ', () => {
            expect(library.findBook(['Troy', 'Life Style', 'Torronto'], 'Torronto'))
            .to.equal('We found the book you want.'); 
        });

        it('works not', () => {
            expect(() => { library.findBook([], 'Torronto') }).to.throw();
        });
     
    });

    describe('arrangeTheBooks', () => {

        it('works not ', () => {
            expect(() => { library.arrangeTheBooks(-5) }).to.throw();
            expect(() => { library.arrangeTheBooks('f') }).to.throw();
            expect(() => { library.arrangeTheBooks(null) }).to.throw();
        });

        it('works ', () => {
            expect(library.arrangeTheBooks(5)).to.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
        });

        it('works ', () => {
            expect(library.arrangeTheBooks(50)).to.equal('Insufficient space, more shelves need to be purchased.');
        });

    });

});