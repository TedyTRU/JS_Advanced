function solve(matrix) {

    let a = Number.MIN_SAFE_INTEGER;

    for (let arr of matrix) {
        for (let num of arr) {
            if (num > a) {
                a = num;
            }
        }
    }

    console.log(a);

}
solve([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
)

function solve2(matrix) {

    // let num = matrix.reduce((a, v) => (a = Math.max(...v) > a ? Math.max(...v) : a), - Infinity);
    // console.log(num);

    return matrix.reduce((a, v) => (a = Math.max(...v) > a ? Math.max(...v) : a), - Infinity);

}
solve2([[20, 50, 10],
[8, 33, 145]]
)