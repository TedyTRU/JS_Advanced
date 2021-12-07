function sumRange(arr, start, end) {
    // take range from array
    // sum selected elements

    if (Array.isArray(arr) == false) {
        return NaN;
    }

    if (start < 0) {
        start = 0;
    }

    if (end > arr.length - 1) {
        end = arr.length - 1;
    }

    return arr.slice(start, end + 1)
    .map(Number)
    .reduce((acc, x) => acc + x, 0);

    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += Number(arr[i]);
    }

    //return result
    return sum;

}
console.log('case 0', sumRange([10, 20, 30, 40, 50, 60], 1, 3));
console.log('case 1', sumRange([10, 20, 30, 40, 50, 60], 3, 300));
console.log('case 2', sumRange([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log('case 3', sumRange([10, 'twenty', 30, 40], 0, 2));
console.log('case 4', sumRange([], 1, 2));
console.log('case 5', sumRange('text', 0, 2));
console.log('case 5', sumRange(5, 0, 2));
