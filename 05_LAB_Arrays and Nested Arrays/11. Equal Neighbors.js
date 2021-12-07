function solve(matrix) {

    let count = 0;
    matrix.forEach(x => x.reduce((a, v) => {
        if (a === v) {
            count += 1;
        }
        return v;
    }));

    for (let i = 0; i < matrix.length - 1; i++) {
        matrix[i].forEach((a, j) => {
            let z = matrix[i][j];
            let b = matrix[i + 1][j];
            if (matrix[i][j] === matrix[i + 1][j]) {
                count += 1;
            }
        })
    }

    console.log(count);

}
solve([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]
)