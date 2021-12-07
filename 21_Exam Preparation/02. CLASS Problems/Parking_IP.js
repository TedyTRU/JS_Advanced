class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }

    findCar(n) {
        return this.vehicles.find(x => x.carNumber === n);
    }

    sortCar = (car1, car2) => car1.carNumber.localeCompare(car2.carNumber);

    printCar = (car) => `${car.carModel} == ${car.carNumber} - ${car.payed ? 'Has payed' : 'Not payed'}`;

    addCar(carModel, carNumber) {
        if (this.vehicles.length >= this.capacity) {
            throw new Error('Not enough parking space.');
        }

        this.vehicles.push({ carModel, carNumber, payed: false });
        this.capacity -= 1;

        return `The ${carModel}, with a registration number ${carNumber}, parked.`
    }

    removeCar(carNumber) {
        let car = this.findCar(carNumber);

        if (!car) {
            throw new Error("The car, you're looking for, is not found.");
        }

        if (!car.payed) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
        }

        //this.vehicles = this.vehicles.filter(x => x.carNumber != car.carNumber);
        this.vehicles.splice(this.vehicles.indexOf(car), 1);
        this.capacity += 1;

        return `${carNumber} left the parking lot.`;
    }

    pay(carNumber) {
        let car = this.findCar(carNumber);

        if (!car) {
            throw new Error(`${carNumber} is not in the parking lot.`);
        }

        if (car.payed) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`);
        }

        car.payed = true;
        return `${carNumber}'s driver successfully payed for his stay.`;
    }

    getStatistics(carNumber) {
        if (!carNumber) {

            return `The Parking Lot has ${this.capacity} empty spots left.\n${this.vehicles.sort(this.sortCar)
                .map(this.printCar)
                .join('\n')}`

        } else {
            const car = this.findCar(carNumber);

            return this.printCar(car);

        }

    }

}