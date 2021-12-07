function solve(arr) {

    let biggeest = Number.MIN_SAFE_INTEGER;

    const result = arr.filter((el) => {
        if (el >= biggeest) {
            biggeest = el;
            return true;
        }
        return false;
    });

    return result;

}

solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24])

function solve2(arr) {
    const result = [];
    let biggest = Number.MIN_SAFE_INTEGER;

    arr.forEach(element => {
        if (element >= biggest) {
            result.push(element);
            biggest = element;
        }
    });

    //console.log(result);
    return result;

}

solve2([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24])

function solve3(arr) {
    const result = [];
    let biggest = Number.MIN_SAFE_INTEGER;

    arr.reduce((accumulated, current) => {
        if (current >= biggest) {
            biggest = current;
            accumulated.push(current);
        }
        return accumulated;
    }, result)

    return result;
}
console.log(solve3([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]));