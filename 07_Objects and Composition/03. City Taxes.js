function cityTaxes(name, population, treasury) {

    return {
        name, population, treasury,
        taxRate: 10,

        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },

        applyGrowth(percent) {
            this.population += Math.floor(this.population * percent / 100);
        },

        applyRecession(percent) {
            this.treasury -= Math.floor(this.treasury * percent / 100);
        },

    };

}


// const city = cityTaxes('Tortuga', 7000, 15000);
// city.collectTaxes();
// console.log(city.treasury);
// city.applyGrowth(5);
// console.log(city.population);


//----------------------------------------

// const city = cityTaxes('Tortuga',7000,15000);
// console.log(city);

//----------------------------------------

const tortuga = cityTaxes('Tortuga', 7000, 15000);

console.log(tortuga);
tortuga.collectTaxes();
console.log(tortuga);
tortuga.applyGrowth(5);
console.log(tortuga);
tortuga.applyRecession(10);
console.log(tortuga);

const tortugaTaxes = tortuga.collectTaxes;
tortugaTaxes();
console.log(tortuga);

const asJson = JSON.stringify(tortuga, null, 2);
console.log(asJson);