function solve(arr, rotations) {

    let rotate = rotations % arr.length;

    for (let i = 0; i < rotate; i++) {
        const num = arr.pop();
        arr.unshift(num);
    }

    console.log(arr.join(" "));

}
solve(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15)