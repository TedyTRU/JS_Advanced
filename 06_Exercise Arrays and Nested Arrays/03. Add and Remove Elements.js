function solve(arr) {

    let result = [];
    let currentNum = 1;

    arr.forEach( (el) => {
        if (el == 'add') {
            result.push(currentNum);

        } else {
            result.pop();

        }
        currentNum++;
    });


    if (result.length == 0) {
        console.log("Empty");
    } else {
        console.log(result.join("\t"));
    }

}
solve(['add', 
'add', 
'add', 
'add']
)