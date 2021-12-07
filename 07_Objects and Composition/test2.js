let student = {
    firstName: 'Maria',
    lastName: 'Lopez',
    age: 22,
    location: { lat: 42.698, lng: 23.322 }
}

console.log(student);

console.log(student.location.lng);


//---------------------


let name = 'Sofia';
let population = 1325744;
let country = 'Bulgaria';

let town = { name, population, country };

console.log(town);
console.log(town.name);

town.location = { lat: 42.698, lng: 23.222 };
console.log(town.location.lat);



//---------------------

const department = {
    name: "Engineering",
    data: {
        director: {
            name: 'John',
            position: 'Engineering Director'
        },
        employees: [],
        company: 'Quick Build'
    }
};

const {data: {direcor}} = department;
console.log(department.data.director.position);

//---------------------

// const employees = [
//     { name: 'John', position: 'worker' },
//     { name: 'Jane', position: 'secretary' }
// ];

// const [{ name }] = employees;
// const [{ position }] = employees;

// console.log(position);


//---------------------


function print() {
    console.log(`${this.name} is printing page`);
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



//---------------------


function createRect(width, height) {
    const rect = { width, height };

    rect.getArea = () => {
        return rect.width * rect.height;
    };

    return rect;
}