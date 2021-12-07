function orbit(input) {
    let m = input[0];
    let n = input[1];
    let x = input[2];
    let y = input[3];

    function createMatrix(m, n) {
        let matrix = new Array(m);
        for (let i = 0; i < m; i++) {
            matrix[i] = new Array(n);
        }
        return matrix;
    }

    let matrix = createMatrix(m, n);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            matrix[i][j] = Math.max(Math.abs(x - i), Math.abs(y - j)) + 1;
        }
    }

    //console.log(matrix.map(z => z.join(' ')).join('\n'));
    matrix.forEach(z => console.log(z.join(' ')));

}
orbit([4, 4, 0, 0])