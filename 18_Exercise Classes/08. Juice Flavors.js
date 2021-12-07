function solve(arr) {

    const juices = {};
    const bottles = {};

    const addBottles = (name, quantity) => {
        const bottlesToAdd = (quantity - (quantity % 1000)) / 1000;

        if (bottlesToAdd > 0) {
            bottles[name] = (bottles[name] || 0) + bottlesToAdd;

            return quantity % 1000;
        }

        return quantity;
    }

    arr.forEach(x => {
        const [name, quantity] = x.split(' => ');
        juices[name] = juices[name] || 0;

        juices[name] = addBottles(name, juices[name] + Number(quantity));

    })

    return Object.entries(bottles)
    .map(([name, quantity]) => `${name} => ${quantity}`)
    .join('\n')

}

console.log(solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']))

    console.log(solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']))