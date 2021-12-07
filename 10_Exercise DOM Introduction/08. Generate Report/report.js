function generateReport() {
    let elementsInput = Array.from(document.getElementsByTagName('input'));
    let tablesRows = Array.from(document.getElementsByTagName('tr'));

    const resultArr = [];
    const chekedcCols = [];

    for (let i = 0; i < tablesRows.length; i++) {
        const row = tablesRows[i];
        const obj = {};

        for (let j = 0; j < row.children.length; j++) {
            const element = row.children[j];

            if (i == 0) {
                if (element.children[0].checked) {
                    chekedcCols.push(j);
                }
                continue;
            }

            if (chekedcCols.includes(j)) {
                let propertyName = elementsInput[j].name;
                obj[propertyName] = element.textContent;

            }

        }
        if (i !== 0) {
            resultArr.push(obj);
        }
    }

    document.getElementById('output').value = JSON.stringify(resultArr);

}


// function generateReport() {
//     const output = document.getElementById('output');
//     const checkbuttons = Array.from(document.querySelectorAll('thead th input'));

//     let indexes = [];
//     checkbuttons.forEach((b, i) => {
//         if (b.checked){
//             indexes.push(i);
//         }
//     });

//     let resultArray = [];
//     const tableHead = document.querySelectorAll('thead th');
//     const tableRows = Array.from(document.querySelectorAll('tbody tr'));

//     for (const row of tableRows) {
//         let obj = {};
//         for (const index of indexes) {
//             let currentRow = row.children[index].textContent;
//             let currentName = tableHead[index].textContent.toLowerCase().trim();
//             obj[currentName] = currentRow;
//         }
//         resultArray.push(obj);
//     }
//     output.value = JSON.stringify(resultArray, null, 4)
// } 