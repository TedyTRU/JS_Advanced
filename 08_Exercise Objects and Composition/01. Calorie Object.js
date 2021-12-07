function solve(arr) {
    const result = {};

    for (let i = 0; i < arr.length; i += 2) {
        //let a = arr[i];
        //let b = arr[i + 1];
        //result[a] = b;

        result[arr[i]] = Number(arr[i + 1]);
    }

    return result;
    //console.log(result);

}
//solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])
console.log(solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));