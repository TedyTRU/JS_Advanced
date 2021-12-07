function solve(arr) {

    let areEqual = true;

    let sum = 0;
    for (let i = 0; i < arr[0].length; i++) {
        sum += arr[0][i];
    }
    
    for (let row = 0; row < arr.length; row++) {
        let currentSumRow = 0;
        for (let col = 0; col < arr[row].length; col++) {
            currentSumRow += arr[row][col];
        }
        if (currentSumRow != sum) {
            areEqual = false;
            break;
        }
    }

    if (areEqual) {
        for (let col = 0; col < arr[0].length; col++) {
            let currentSumCol = 0;
            for (let row = 0; row < arr.length; row++) {
                currentSumCol += arr[row][col];
            }
            if (currentSumCol != sum) {
                areEqual = false;
                break;
            }
        }
    }
    
    if (areEqual) {
        console.log("true");
    } else {
        console.log("false");
    }

}
solve2([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]])



    function solve(arr) {
        let flag = true;
        let sum = eval(arr[0].join("+"));
    
        for (let row = 0; row < arr.length; row++) {
            if (sum != eval(arr[row].join("+"))) {
                flag = false;
                break;
            }
        }
    
        if (flag) {
            for (let col = 0; col < arr[0].length; col++) {
                let currentSumCol = 0;
                for (let row = 0; row < arr.length; row++) {
                    currentSumCol += arr[row][col];
                }
                if (currentSumCol != sum) {
                    flag = false;
                    break;
                }
            }
        }
    
        console.log(flag);
    
    }
    solve2([[4, 5, 6],
        [6, 5, 4]
        ])