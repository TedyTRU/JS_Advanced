function sumFirstLast(arr) {

    let first = Number(arr[0]);
    let last = Number(arr[arr.length - 1]);

    let sum = first + last;

    console.log(sum);


}
sumFirstLast(['20', '30', '40'])


function sumFirstLast2(array) {
    
    array = array.map(Number);

    console.log(array[0] + array[array.length - 1]);
}

sumFirstLast2(['20', '30', '40'])