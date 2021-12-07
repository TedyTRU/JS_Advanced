function add(num) {
    let sum = num;

    function inner(number) {
        sum += number;

        return inner;
    }

    inner.toString = () => {
        return sum;
    }

    return inner;

}

let a = add(1)(6)(-3);
console.log(a.toString())