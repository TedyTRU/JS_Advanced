

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant', 'cat'];

const temp = animals.indexOf('camel');

console.log(animals.splice(temp, 1));


// const index = this.screenings.indexOf(screening);
// this.screenings.splice(index, 1);




const saveBtn = e('button', { classList: 'save-btn' }, 'Save song');
const likeBtn = e('button', { classList: 'like-btn' }, 'Like song');
const deleteBtn = e('button', { classList: 'delete-btn' }, 'Delete');
const hits = e('div', { classList: 'hits-info' },
    e('img', { src: './static/img/img.png' }),
    e('h2', {}, `Genre: ${genre}`),
    e('h2', {}, `Name: ${name}`),
    e('h2', {}, `Author: ${author}`),
    e('h3', {}, `Date: ${date.replace(/-/g, '.')}`), saveBtn, likeBtn, deleteBtn
);