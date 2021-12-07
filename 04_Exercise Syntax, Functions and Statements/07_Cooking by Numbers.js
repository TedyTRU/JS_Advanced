function cookingByNumbers(input) {

    let number = Number(input[0]);


    for (let i = 1; i < input.length; i++) {
        let operation = input[i];

        switch (operation) {
            case "chop":
                number /= 2; break;
            case "dice":
                number = Math.sqrt(number); break;
            case "spice":
                number += 1; break;
            case "bake":
                number *= 3; break;
            case "fillet":
                number -= (0.2 * number); break;
        }

        console.log(number);

    }

}

//cookingByNumbers(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);


function cookByNums(num, op1, op2, op3, op4, op5) {

    let number = Number(num);
    const array = [op1, op2, op3, op4, op5];

    for (let i = 0; i < array.length; i++) {
        let operation = array[i];

        switch (operation) {
            case "chop":
                number /= 2; break;
            case "dice":
                number = Math.sqrt(number); break;
            case "spice":
                number += 1; break;
            case "bake":
                number *= 3; break;
            case "fillet":
                number -= (0.2 * number); break;
        }

        console.log(number);

    }
}
//cookByNums('9', 'dice', 'spice', 'chop', 'bake', 'fillet');

function cooking(num, op1, op2, op3, op4, op5) {

    num = Number(num);

    let chop = function (n) {
        return n / 2;
    }

    let dice = function (n) {
        return Math.sqrt(n);
    }

    let spice = function (n) {
        return n + 1;
    }

    let bake = function (n) {
        return n * 3;
    }

    let fillet = function (n) {
        return n -= 0.2 * n;
    }

    const array = [op1, op2, op3, op4, op5];
    let result = num;
    
    for (let i = 0; i < array.length; i++) {
        

        switch (array[i]) {
            case "chop":
                result = chop(result); break;
            case "dice":
                result = dice(result); break;
            case "spice":
                result = spice(result); break;
            case "bake":
                result = bake(result); break;
            case "fillet":
                result = fillet(result); break;
        }

        console.log(result);

    }

}
cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet');

