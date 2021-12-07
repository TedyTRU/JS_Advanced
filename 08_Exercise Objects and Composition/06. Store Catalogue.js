function solve(arr) {

    const productCataloque = {};

    arr.forEach(el => {
        let [productName, productPrice] = el.split(" : ");
        productPrice = Number(productPrice);
        const index = productName[0];

        if (!productCataloque[index]) {
            productCataloque[index] = {};
        }

        productCataloque[index][productName] = productPrice;

    });

    //console.log(productCataloque);

    let initialSort = Object.keys(productCataloque).sort((a, b) => a.localeCompare(b));
    //console.log(initialSort);

    for (const key of initialSort) {
        let products = Object.entries(productCataloque[key])
        .sort((a, b) => a[0].localeCompare(b[0]));
        //console.log(products);

        console.log(key);
        products.forEach(el => {
            console.log(`  ${el[0]}: ${el[1]}`);
        });
    }

}
solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)