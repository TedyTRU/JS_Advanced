function sortArray(arr, arg) {

    // if (arg === 'asc') {
    //     return arr.sort((a, b) => a - b);

    // } else if (arg === 'desc') {
    //     return arr.sort((a, b) => b - a);

    // }


    return arg == 'asc' ? arr.sort((a, b) => a - b) : arr.sort((a, b) => b - a)

}

console.log(sortArray([14, 7, 17, 6, 8], 'desc'));


// function solve(array, command){
//     if (command === "asc"){
//         return array.sort((a,b) => a-b)
//     } else if (command === "desc"){
//         return array.sort((a,b) => b-a)
//     }
// }

// console.log(solve([14, 7, 17, 6, 8], 'asc')); 
// console.log(solve([14, 7, 17, 6, 8], 'desc')); 