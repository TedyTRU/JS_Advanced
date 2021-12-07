function solve(input) {

    let matrix = [];

    for (let i = 0; i < input.length; i++) {
        matrix[i] = input[i].split(' ').map(e => Number(e));
    }

    let sum = (a, b) => a + b;
    let firstDiSum = matrix.map((e, i) => e[i]).reduce(sum);
    let secondDiSum = matrix.map((e, j) => e[e.length - 1 - j]).reduce(sum);

    if (firstDiSum === secondDiSum) {

        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (i === j || matrix[i].length - 1 - j === i) {
                    continue;
                }
                matrix[i][j] = firstDiSum;
            }
        }
    }

    console.log(matrix.map(e => e.join(' ')).join('\n'));

}
solve(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']
)