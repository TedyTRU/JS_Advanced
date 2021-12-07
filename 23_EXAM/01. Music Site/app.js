window.addEventListener('load', solve);

function solve() {
    const fields = Array.from(document.querySelectorAll('.container-text input'));
    const addBtn = document.getElementById('add-btn');
    const collectionList = document.querySelector('#all-hits div');
    const savedList = document.querySelector('#saved-hits div');
    const likes = document.querySelector('#total-likes p');

    addBtn.addEventListener('click', collectSong);

    function collectSong(event) {
        event.preventDefault();

        const [genre, name, author, date] = fields.map(f => f.value.trim());
        if (fields.map(f => f.value.trim()).some(v => v == '')) {
            return;
        }

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

        collectionList.appendChild(hits);
        Array.from(fields).forEach(f => f.value = '');

        likeBtn.addEventListener('click', like);
        saveBtn.addEventListener('click', save);
        deleteBtn.addEventListener('click', deleteList);

        function like(event) {
            let totallikes = Number(likes.textContent.replace('Total Likes: ', '')) + 1;
            likes.textContent = `Total Likes: ${totallikes}`;
            event.target.disabled = true;
        }

        function save(event) {
            event.target.parentNode.remove();

            const hit = e('div', { classList: 'hits-info' },
                e('img', { src: './static/img/img.png' }),
                e('h2', {}, `Genre: ${genre}`),
                e('h2', {}, `Name: ${name}`),
                e('h2', {}, `Author: ${author}`),
                e('h3', {}, `Date: ${date}`), deleteBtn
            );

            savedList.appendChild(hit);
        }

        function deleteList(event) {
            event.target.parentNode.remove();
        }

    }

    function e(type, attr/*{}*/, ...content) {
        const element = document.createElement(type);

        for (let prop in attr) {
            element[prop] = attr[prop];
        }

        for (let item of content) {
            if (typeof item == 'string' || typeof item == 'number') {
                item = document.createTextNode(item);
            }
            element.appendChild(item);
        }

        return element;
    }

}