function solve(arr) {

    const result = [];

    for (let num of arr) {
        if (num < 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    }

    for (let num of result) {
        console.log(num);
    }

}

solve([7, -2, 8, 9])

function fun(arr) {

    return arr.reduce((a, v) => {
        v < 0 ? a.unshift(v) : a.push(v);
        return a;
    }, []);

    
}
fun([3, -2, 0, -1])