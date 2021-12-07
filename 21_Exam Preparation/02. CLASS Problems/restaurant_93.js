class Restaurant {
    constructor(budget) {
        this.budgetMoney = budget;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {
        products.forEach(pr => {
            let [productName, productQuantity, price] = pr.split(' ');

            if (Number(price) <= this.budgetMoney) {

                if (this.stockProducts[productName] === undefined) {
                    this.stockProducts[productName] = 0;
                }

                this.stockProducts[productName] += Number(productQuantity);
                this.budgetMoney -= Number(price);
                this.history.push(`Successfully loaded ${productQuantity} ${productName}`);

            } else {
                
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        });

        return this.history.join('\n');
    }

    addToMenu(meal, neededProducts, price) {

        if (this.menu.hasOwnProperty(meal)) {
            return `The ${meal} is already in the our menu, try something different.`;

        }

        this.menu[meal] = { products: {}, price: Number(price) };

        neededProducts.forEach(pr => {
            let [name, quantity] = pr.split(' ');
            this.menu[meal].products[name] = Number(quantity);
        });

        const num = Object.keys(this.menu).length;

        if (num == 1) {
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;

        }

        return `Great idea! Now with the ${meal} we have ${num} meals in the menu, other ideas?`;

    }

    showTheMenu() {

        if (Object.entries(this.menu).length == 0) {
            return 'Our menu is not ready yet, please come later...';

        }
        return Object.entries(this.menu).map(([key, value]) => `${key} - $ ${value.price}`).join('\n');

    }

    makeTheOrder(meal) {

        const currentMeal = this.menu[meal];

        if (currentMeal === undefined) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }

        //let temp1 = currentMeal.products;
        //let temp2 = Object.keys(this.stockProducts);

        if (!Object.keys(currentMeal.products).every(pr => Object.keys(this.stockProducts).includes(pr))) {
            return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
        } 

            for (let pr in currentMeal.products) {
                this.stockProducts[pr] -= currentMeal.products[pr];
            }

            this.budgetMoney += currentMeal.price;

            return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${currentMeal.price}.`;
        
    }

}

let kitchen = new Restaurant(10);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1', 'Avokado 1 3']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen.showTheMenu());


// let kitchen = new Restaurant(1000);
// console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));


// //let kitchen = new Restaurant(1000);
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));

// let kitchen = new Restaurant(1000);
// console.log(kitchen.showTheMenu());

// let kitchen = new Restaurant(1000);
// kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
// kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
// console.log(kitchen.makeTheOrder('frozenYogurt'));
