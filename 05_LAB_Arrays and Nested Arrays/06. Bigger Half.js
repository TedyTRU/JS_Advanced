function biggerHalf(arr) {

    let n = Math.ceil(arr.length / 2);

    return arr.sort((x, y) => x - y).slice(-n);

    //console.log((arr.sort((x, y) => x - y)).slice(-n));

}
biggerHalf([4, 7, 2, 5, 6])