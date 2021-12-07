function solve() {

  const text = document.getElementById("text").value;
  const naming = document.getElementById("naming-convention").value;
  const resultContainer = document.getElementById('result');

  const splitted = text.split(" ");

  let resultString = '';
  if (naming == 'Pascal Case') {
    for (let i = 0; i < splitted.length; i++) {
      resultString += splitted[i][0].toUpperCase() +
        splitted[i].slice(1, splitted[i].length).toLowerCase();

    }

  } else if (naming == 'Camel Case') {
    resultString += splitted[0].toLowerCase();
    for (let i = 1; i < splitted.length; i++) {
      resultString += splitted[i][0].toUpperCase() +
        splitted[i].slice(1, splitted[i].length).toLowerCase();

    }

  } else {
    //resultContainer.textContent = 'Error!';
    // return;
    resultString = 'Error!';

  }

  resultContainer.innerHTML = resultString;

}

// function solve() {
//   let text = document.getElementById('text').value;
//   let namingConvention = document.getElementById('naming-convention').value;

//   let splitted = text.split(' ');

//   function pascalCase(splitted) {
//     let result = '';
//     for (let i = 0; i < splitted.length; i++) {
//       for (let k = 0; k < splitted[i].length; k++) {
//         if (k == 0) {
//           result += splitted[i][k].toUpperCase();
//         }
//         else {
//           result += splitted[i][k].toLowerCase();
//         }
//       }
//     }
//     return result;
//   }

//   function camelCase(splitted) {
//     let result = '';
//     for (let i = 0; i < splitted.length; i++) {
//       for (let k = 0; k < splitted[i].length; k++) {
//         if (k == 0 && i == 0) {
//           result += splitted[i][k].toLowerCase();
//         }
//         else if (k == 0 && i != 0) {
//           result += splitted[i][k].toUpperCase();
//         }
//         else {
//           result += splitted[i][k].toLowerCase();
//         }
//       }
//     }
//     return result;
//   }

//   let toPascalCase = pascalCase(splitted);
//   let toCamelCase = camelCase(splitted);


//   if (namingConvention == 'Camel Case') {
//     document.getElementById('result').textContent = toCamelCase;
//   } else if (namingConvention == 'Pascal Case') {
//     document.getElementById('result').textContent = toPascalCase;
//   } else {
//     document.getElementById('result').textContent = 'Error!'
//   }
// }