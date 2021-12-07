function toggle() {

    const button = document.querySelector('.button');
    button.textContent = button.textContent == 'More' ? 'Less' : 'More';

    const textDiv = document.getElementById('extra');

    textDiv.style.display = textDiv.style.display == 'none' || textDiv.style.display == '' ?
        textDiv.style.display = 'block' : textDiv.style.display = 'none';

    //console.log(button);



}

// function toggle() {
//     if (document.getElementsByClassName('button')[0].textContent == 'More') {
//         document.getElementById('extra').style.display = 'block'
//         document.querySelector('.button').textContent = 'Less'
//     } else {
//         document.getElementById('extra').style.display = 'none';
//         document.querySelector('.button').textContent = 'More'
//     }
// }