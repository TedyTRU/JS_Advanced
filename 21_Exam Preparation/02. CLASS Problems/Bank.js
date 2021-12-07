class Bank {
    #bankName;
    constructor(bankName) {
        this.#bankName = bankName;
        this.allCustomers = [];
    }

    getCustomer = (id) => this.allCustomers.find(c => c.personalId == id);

    newCustomer(customer) {

        if (this.allCustomers.some(c => c.personalId == customer.personalId)) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        }

        this.allCustomers.push(customer);

        return customer;
    }

    depositMoney(personalId, amount) {
        const customer = this.getCustomer(personalId);

        if (customer == undefined) {
            throw new Error('We have no customer with this ID!');
        }

        customer.totalMoney = (customer.totalMoney || 0) + Number(amount);
        customer.transaction = customer.transaction || [];
        customer.transaction.push(`${customer.firstName} ${customer.lastName} made deposit of ${amount}$!`);

        return `${customer.totalMoney}$`

    }

    withdrawMoney(personalId, amount) {
        const customer = this.getCustomer(personalId);

        if (customer == undefined) {
            throw new Error('We have no customer with this ID!');
        }

        const currentTotalMoney = customer.totalMoney;
        if (currentTotalMoney == undefined || currentTotalMoney < amount) {
            throw new Error(`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`);
        }

        customer.totalMoney -= amount;
        customer.transaction.push(`${customer.firstName} ${customer.lastName} withdrew ${amount}$!`);

        return `${customer.totalMoney}$`
    }

    customerInfo(personalId) {
        const customer = this.getCustomer(personalId);

        if (customer == undefined) {
            throw new Error('We have no customer with this ID!');
        }

        const result = [
            `Bank name: ${this.#bankName}`,
            `Customer name: ${customer.firstName} ${customer.lastName}`,
            `Customer ID: ${customer.personalId}`,
            `Total Money: ${customer.totalMoney}$`,
            'Transactions:'
        ];

        customer.transaction.reverse().forEach((t, i, arr) => result.push(`${arr.length - i}. ${t}`));

        return result.join('\n');

    }

}