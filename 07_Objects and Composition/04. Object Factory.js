function factory(library, orders) {

    const result = [];

    for (let order of orders) {
        // Create empty object and copy properties from template
        const current = Object.assign({}, order.template);

        // Compose methods from libraty for every item in parts
        for (let part of order.parts) {
            current[part] = library[part];
        }

        // Save result
        result.push(current);
    }
    return result;

    /*
        return orders.map(compose);
    
        function compose(order) {
            
            // Create empty object and copy properties from template
            const result = Object.assign({}, order.template);
            
            // Compose methods from libraty for every item in parts
            for (let part of order.parts) {
                console.log(part);
                console.log(library[part]);
                
                result[part] = library[part];
            }
            
            // Return result
            return result;
        }
        */
}

// INPUTS:

const library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};


const orders = [
    {
        template: { name: 'ACME Printer' },
        parts: ['print']
    },
    {
        template: { name: 'Initech Scanner' },
        parts: ['scan']
    },
    {
        template: { name: 'ComTron Copier' },
        parts: ['scan', 'print']
    },
    {
        template: { name: 'BoomBox Stereo' },
        parts: ['play']
    }
];


const products = factory(library, orders);
console.log(products);