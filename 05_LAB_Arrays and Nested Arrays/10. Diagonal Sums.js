function solve(matrix) {

    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        sum += matrix[i][i];
    }

    let sum2 = 0;
    let index = matrix.length - 1;
    for (let i = 0; i < matrix.length; i++, index--) {
        sum2 += matrix[i][index];
    }

    console.log(`${sum} ${sum2}`);

}
solve([[20, 40],
[10, 60]])



function solve2(matrix) {

    let firstDiagonal = 0;
    let secondDiagonal = 0;

    let firstIndex = 0;
    let secondIndex = matrix[0].length - 1;

    matrix.forEach(array => {
        //let a = array[firstIndex];
        //let b = array[secondIndex];

        firstDiagonal += array[firstIndex++];
        secondDiagonal += array[secondIndex--];
    });

    console.log(firstDiagonal + ' ' + secondDiagonal);

}
solve2([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]
)