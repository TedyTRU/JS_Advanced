function solve(arr) {

    arr = arr.sort((a, b) => a.localeCompare(b))
        .forEach((v, i) => console.log(`${i + 1}.${arr[i]}`));

}
solve(["John", "Bob", "Christina", "Ema"])



function solveNE(arr) {
    const result = arr.sort();
    
    arr.forEach((el, index) => {
        console.log(`${++index}.${el}`);
        
    })

}
solveNE(["John", "Bob", "Christina", "Ema"])



function solveNO(arr) {

    arr.sort();

    for (let i = 1; i <= arr.length; i++) {
        console.log(i + "." + arr[i - 1]);
    }

}
solveNO(["John", "Bob", "Christina", "Ema"])