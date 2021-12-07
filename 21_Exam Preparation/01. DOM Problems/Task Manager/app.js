function solve() {

    const inputFields = [
        document.getElementById('task'),
        document.getElementById('description'),
        document.getElementById('date')
    ];
    const sections = Array.from(document.querySelectorAll('section'))
        .slice(1)
        .map(x => x.children[1]);

    const clearInput = () => { inputFields.forEach(x => x.value = '') }
    //const clearInput = () => { document.querySelector('form').reset() }

    const addBtn = document.getElementById('add');

    addBtn.addEventListener('click', addOpenSection);

    function addOpenSection(event) {
        event.preventDefault();

        if (inputFields.map(f => f.value.trim()).some(v => v == '')) {
            return;
        }

        //const date = inputFields[2].value.replaceAll('-', '.');

        const startBtn = e('button', { classList: 'green' }, 'Start');
        const deleteBtn = e('button', { classList: 'red' }, 'Delete');
        const article = e('article', {},
            e('h3', {}, inputFields[0].value),
            e('p', {}, `Description: ${inputFields[1].value}`),
            e('p', {}, `Due Date: ${inputFields[2].value}`));

        const div = e('div', { classList: 'flex' }, startBtn, deleteBtn);

        sections[0].appendChild(article).appendChild(div);
        clearInput();

        deleteBtn.addEventListener('click', () => {
            article.remove();
        });

        startBtn.addEventListener('click', addInProgress.bind(null, article))

    }

    function addInProgress(article) {
        article.querySelector('div').remove();

        const deleteBtn = e('button', { classList: 'red' }, 'Delete');
        const finishBtn = e('button', { classList: 'orange' }, 'Finish');

        const div = e('div', { classList: 'flex' }, deleteBtn, finishBtn);

        sections[1].appendChild(article).appendChild(div);

        deleteBtn.addEventListener('click', () => {
            article.remove();
        });

        finishBtn.addEventListener('click', complete.bind(null, article))

    }

    function complete(article) {
        article.querySelector('div').remove();

        sections[2].appendChild(article);
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