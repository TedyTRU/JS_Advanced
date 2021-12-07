function argumentInfo(...params) {
    let occurrences = {};
    let result = [];

    params.forEach(el => {
        let type = typeof (el);
        occurrences[type] = occurrences[type] ? ++occurrences[type] : 1;  // occurrences[type] ==> occurrences[type] !== undefined
        result.push(`${type}: ${el}`);
    })

    Object.keys(occurrences).sort((a, b) => occurrences[b] - occurrences[a])
        .forEach(key => result.push(`${key} = ${occurrences[key]}`));

    return result.join("\n");

}

console.log(argumentInfo('cat', 42, 22, function () { console.log('Hello world!'); }
))


// function solve(...args) {
//     let occurrences = {};
//     let output =[];

//     for (const element of args) {
//         let type = typeof(element);
//         let value = element;
//         output.push(`${type}: ${value}`);
//         occurrences[type] = occurrences[type] ? occurrences[type] + 1 : 1
//     }

//     output.forEach(x => console.log(x))

//    Object.keys(occurrences)
//    .sort((a,b) => occurrences[b] - occurrences[a])
//    .forEach(x => console.log(`${x} = ${occurrences[x]}`))
// }
// solve('cat', 42, 25, 37, function () { console.log('Hello world!'); }) 