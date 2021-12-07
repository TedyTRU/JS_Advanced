function solve() {

    const html = {
        lectureNameField: document.querySelector('input[name="lecture-name"]'),
        dateField: document.querySelector('input[name="lecture-date"]'),
        moduleNameField: document.querySelector('select[name="lecture-module"]'),
        modules: document.querySelector('div[class="modules"]'),
        buttonAdd: document.querySelector('.admin-view .action button')
    }

    const formateDate = (dateInput) => dateInput.replace(/-/g, '/').replace('T', ' - ');
    const formateName = (name) => `${name.toUpperCase()}-MODULE`;
    const clearInput = () => {
        html.lectureNameField.value = ''
        html.dateField.value = ''
        html.moduleNameField.value = 'SELECT MODULE-MODULE'
    }

    const lectureTemplate = (lectureName, date) => {

        const liElement = document.createElement('li');
        liElement.classList.add('flex');
        const courseHeadingElement = document.createElement('h4');
        courseHeadingElement.textContent = `${lectureName} - ${date}`;
        let deleteButton = document.createElement('button');
        deleteButton.classList.add('red');
        deleteButton.textContent = 'Del';

        // deleteButton.addEventListener('click', (e) => {
        //     e.currentTarget.parentNode.remove();
        // })

        liElement.appendChild(courseHeadingElement);
        liElement.appendChild(deleteButton);

        liElement.date = date;
        return liElement;

    }

    const moduleTemplate = (moduleName, lectureName, date) => {
        let divElememnt = document.createElement('div');
        divElememnt.classList.add('module');
        let moduleHeadingElement = document.createElement('h3');
        moduleHeadingElement.textContent = moduleName;

        const moduleLectures = document.createElement('ul');
        moduleLectures.appendChild(lectureTemplate(lectureName, date));

        divElememnt.appendChild(moduleHeadingElement);
        divElememnt.appendChild(moduleLectures);

        return divElememnt;
    }

    const isValidInput = (lectureName, date, moduleName) =>
        lectureName !== '' && date !== '' && moduleName !== 'SELECT MODULE-MODULE'

    html.buttonAdd.addEventListener('click', (e) => {
        e.preventDefault();

        const [lectureName, date, moduleName] = [
            html.lectureNameField.value,
            formateDate(html.dateField.value),
            formateName(html.moduleNameField.value)
        ];

        if (!isValidInput(lectureName, date, moduleName)) {
            return;
        }

        const sameModule = Array.from(html.modules.children)
            .find(x => x.children[0].innerHTML === moduleName)

        if (sameModule) {
            const lecturesContainer = sameModule.children[1];
            const lectures = Array.from(lecturesContainer.children);

            lectures.push(lectureTemplate(lectureName, date));
            lectures.sort((a, b) => a.date.localeCompare(b.date));
            lectures.forEach(lecture => lecturesContainer.appendChild(lecture))

        } else {
            html.modules.appendChild(moduleTemplate(moduleName, lectureName, date));

        }

        clearInput();
    })

    document.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON' && e.target.innerHTML === 'Del') {

            const moduleSection = e.target.parentNode.parentNode.parentNode;
            const lecture = e.target.parentNode;

            lecture.outerHTML = '';

            if (moduleSection.children[1].children.length === 0) {
                moduleSection.outerHTML = '';
            }
        }

    })


}