function calculatFruit(fruit, weight, money) {

    const weightInKG = weight / 1000;
    const moneyNeeded = weightInKG * money;

    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${weightInKG.toFixed(2)} kilograms ${fruit}.`);

}

calculatFruit('apple', 1563, 2.35);