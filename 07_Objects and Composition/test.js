const person = {
    firstName: "John",
    lastName: "Doe",
    age: 20
};


person['job-title'] = 'Trainer';
console.log(person['job-title']);
//console.log(person.job-title);  // ReferenceError

console.log(person.firstName);
console.log(person.age);
console.log(person.middleName);  //undefind

//---------------------

const department = {
    name: 'Engineering',
    director: 'Ted Thompson',
    employeeCount: 25
};

const {name, employeeCount} = department;
console.log(name, employeeCount);

//---------------------

// const fruit = {name: 'apple'};
// const fruitbear = {name: 'apple'};

// fruit == fruitbear; // false
// fruit === fruitbear; // false

//---------------------

const fruit = {name: 'apple'};
const fruitbear = fruit;
// Assign a copy of the fruit reference to fruitbear
fruit == fruitbear; // true
fruit === fruitbear; // true

//---------------------

const obj = {a: 1, b: 2, c: 3};

for (const key in obj) {
    //console.log(`obj.${key} = ${obj[key]}`);
    console.log(`key = ${key}   value = ${obj[key]}`);
}

const phonebook = {
    'Tim': '555-111', 
    'Bill': '555-333',
    'Peter': '555-777'
};

const keys = Object.keys(phonebook);
console.log(keys);

const values = Object.values(phonebook);
console.log(values);

const entries = Object.entries(phonebook);
console.log(entries);

console.log(entries.entries);

//---------------------

const person2 = {
    firstName: "John",
    lastName: "Doe",
    age: function (myAge) {
        return `My age is ${myAge}!`
    }
};

console.log(person2.age(21));

//---------------------
