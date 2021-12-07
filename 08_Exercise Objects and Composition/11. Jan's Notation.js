function solve(inputArr) {
    let operands = [];
    let wasWrong = false;

    for (let i = 0; i < inputArr.length; i++) {
        if (typeof inputArr[i] === 'number') {
            operands.push(inputArr[i]);

        } else {
            let operator = inputArr[i];

            if (operands.length < 2) {
                console.log("Error: not enough operands!");
                wasWrong = true;
                break;
            }

            let operand1 = operands.pop();
            let operand2 = operands.pop();
            let result = applyOperation(operand1, operand2, operator);
            operands.push(result);

        }

    }

    if (operands.length > 1 && !wasWrong) {
        console.log("Error: too many operands!");

    } else if (!wasWrong) {
        console.log(operands[0]);
    }

    function applyOperation(operand1, operand2, operator) {
        const arithmeticOperator = {
            '+': () => operand1 + operand2,
            '-': () => operand2 - operand1,
            '*': () => operand1 * operand2,
            '/': () => operand2 / operand1
        }
        //console.log(arithmeticOperator[operator]());
        return arithmeticOperator[operator]();
    }


}
solve([15,
    '/']
)

solve([5,
    3,
    4,
    '*',
    '-']
)