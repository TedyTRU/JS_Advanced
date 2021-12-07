function solve(tickets, criteria) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }

    }

    return tickets.slice()
        .map(x => x.split('|'))
        .map(([dest, price, status]) => new Ticket(dest, Number(price), status))
        .sort((a, b) => {
            // if (typeof a[criteria] === 'number') {
            //     return a[criteria] - b[criteria];

            // } else {
            //     return a[criteria].localeCompare(b[criteria])

            // }
            return typeof a[criteria] === 'number' ?
                a[criteria] - b[criteria] :
                a[criteria].localeCompare(b[criteria])
        })
        //.forEach(t => console.log(t));

}

console.log(solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'))