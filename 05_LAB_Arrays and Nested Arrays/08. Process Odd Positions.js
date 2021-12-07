function solve(arr) {

    arr = arr.map(Number);

    const result = [];

    for (let i = 1; i < arr.length; i += 2) {
        result.push(arr[i] * 2);
    }

    console.log(result.reverse().join(" "));

}
solve([10, 15, 20, 25])





function solve2(arr) {

    return arr.filter((a, i) => i % 2 !== 0)
        .map(x => x * 2)
        .reverse();

}
solve2([3, 0, 10, 4, 7, 3])