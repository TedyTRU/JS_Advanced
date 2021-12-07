function print() {
    console.log(`${this.name} is printing a page`);
}

function scan() {
    console.log(`${this.name} is scanning a document`);
}


const printer = {
    name: 'ACME Printer',
    print
};

const scanner = {
    name: 'Initech Scanner',
    scan
};

const copier = {
    name: 'ComTron Copier',
    print,
    scan
};

printer.print();
copier.scan();
copier.print();
scanner.scan();

console.log(typeof scanner.scan);

if (typeof scanner.scan == 'function') {
    console.log("This object can scan");

} else {
    console.log("This object cannot scan");

}