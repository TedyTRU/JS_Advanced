function sumTable() {
    const rows = document.querySelectorAll('table tr');
    let sum = 0;
    for (let i = 1; i < rows.length -1; i++) {
        let cols = rows[i].children;
        sum += Number((cols[cols.length - 1].textContent))
        
    }
    document.getElementById('sum').textContent = sum;
}

// function sumTable() {
//     // select first table
//     const rows = document.querySelectorAll('table tr');
//     let sum = 0;

//     // select only rows, containing values
//     // repeat for every row
//     // - find last cell
//     // - add cell value to sum

//     for (let i = 1; i < rows.length - 1; i++) {
//         const cell = rows[i].lastElementChild;
//         console.log(cell);
//         //const input = cell.fisrtElemntChild;
//         //sum += Number(input.value);
//         sum += Number(cell.textContent);
//         //console.log(rows[i].lastElementChild.textContent);

//     }
//     //console.log(sum);

//     // select element with id "sum" and et its value

//     document.getElementById('sum').textContent = sum;

// }