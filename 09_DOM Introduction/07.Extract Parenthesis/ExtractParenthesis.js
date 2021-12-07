function extract(content) {
    let text = document.getElementById(content).textContent;
    const regex = /\((.+?)\)/gm;
    let result = [];

    let match = regex.exec(text);
    while (match != null){
        result.push(match[1]);
        match = regex.exec(text);
    }
    return result.join('; ');
}


// function extract(content) {

//     const text = document.getElementById(content).textContent;
//     let result = '';

//     console.log(text);

//     const pattern = /\((.+?)\)/g;
//     let match = pattern.exec(text);
//     while (match != null) {
//         result += match[1];
//         result += '; ';
//         //console.log(result);

//         match = pattern.exec(text);
//     }
//     return result;
// }