class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = Number(budgetMoney);
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {

        for (let product of products) {
            let [productName, productQuantity, productTotalPrice] = product.split(' ');

            if (productTotalPrice <= this.budgetMoney) {
                if (this.stockProducts[productName] == undefined) {
                    this.stockProducts[productName] = Number(productQuantity);

                } else {
                    this.stockProducts[productName] += Number(productQuantity);
                }

                this.budgetMoney -= productTotalPrice;
                this.history.push(`Successfully loaded ${productQuantity} ${productName}`);

            } else {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }

        }

        return this.history.join('\n');

    }

    addToMenu(meal, neededProducts, price) {

        if (this.menu[meal] === undefined) {
            this.menu[meal] = { products: neededProducts, price: Number(price) };

            const num = Object.entries(this.menu).length;

            if (num == 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;

            } else {

                return `Great idea! Now with the ${meal} we have ${num} meals in the menu, other ideas?`;
            }

        } else {

            return `The ${meal} is already in the our menu, try something different.`;
        }

    }

    showTheMenu() {

        if (Object.entries(this.menu).length == 0) {
            return 'Our menu is not ready yet, please come later...';

        } else {

            return Object.entries(this.menu).map(([key, value]) => `${key} - $ ${value.price}`).join('\n');
        }
    }

    makeTheOrder(meal) {
        //const currentMeal = Object.entries(this.menu).find(([key]) => key == meal);
        const currentMeal = this.menu[meal];

        if (currentMeal == undefined) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;

        } else {
            //const temp = currentMeal.products;
            //const temp2 = Object.keys(this.stockProducts);
            if (!currentMeal.products.every(pr => Object.keys(this.stockProducts).includes(pr.split(' ')[0]))) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;

            } else {

                Object.values(this.stockProducts).every(quantity => quantity -= 1);
                this.budgetMoney += currentMeal.price;

                return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${currentMeal.price}.`;

            }
        }
    }
}


let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));
