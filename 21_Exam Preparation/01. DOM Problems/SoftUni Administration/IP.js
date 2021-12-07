function solve() {
    let buttonElement = document.querySelector('.admin-view .action button');

    const formateDate = (dateInput) => dateInput.replace(/-/g, '/').replace('T', ' - ');

    let modules = {};

    function createLecture(name, date) {
        let liElement = document.createElement('li');
        liElement.classList.add('flex');
        let courseHeadingElement = document.createElement('h4');
        courseHeadingElement.textContent = `${name} - ${date}`;

        let deleteButtonElement = document.createElement('button');
        deleteButtonElement.classList.add('red');
        deleteButtonElement.textContent = 'Del';

        // deleteButtonElement.addEventListener('click', (e) => {
        //     e.currentTarget.parentNode.remove();
        // })

        liElement.appendChild(courseHeadingElement);
        liElement.appendChild(deleteButtonElement);

        return liElement;
    }

    function createModule(name/*, lectureElement*/) {
        let divElememnt = document.createElement('div');
        divElememnt.classList.add('module');

        let headingElement = document.createElement('h3');
        headingElement.textContent = `${name.toUpperCase()}-MODULE`;

        // let unorderedList = document.createElement('ul');
        // unorderedList.appendChild(lectureElement);

        divElememnt.appendChild(headingElement);
        //divElememnt.appendChild(unorderedList);

        return divElememnt;

    }

    function createTrainings(modules) {
        let modulesElement = document.querySelector('.modules');
        modulesElement.innerHTML = '';

        for (const module in modules) {

            let moduleElement = createModule(module);
            let unorderedList = document.createElement('ul');

            let lectures = modules[module];
            lectures
                .sort((a, b) => a.date.localeCompare(b.date))
                .forEach(lecture => {
                    let lectureElement = createLecture(lecture.name, lecture.date);
                    unorderedList.appendChild(lectureElement);

                    lectureElement.querySelector('button').addEventListener('click', (e) => {
                        e.currentTarget.parentNode.remove();

                        modules[module] = modules[module]
                            .filter(x => !(x.name == name && x.date == date))

                        if (modules[module].length == 0) {
                            delete modules[module];
                        }

                        console.log(modules);
                    });

                });

            moduleElement.appendChild(unorderedList);
            modulesElement.appendChild(moduleElement);

            //unorderedList.appendChild(lectureElement);
            //divElememnt.appendChild(unorderedList);

        }

        //let lectureElement = createLecture(lectureDateElement.value, lectureNameElement.value);
        //let moduleElement = createModule(lectureModuleElement.value, lectureElement);
        //let modulesElement = document.querySelector('.modules');
        //modulesElement.appendChild(moduleElement);

    }

    buttonElement.addEventListener('click', (e) => {
        e.preventDefault();

        let lectureNameElement = document.querySelector('input[name="lecture-name"]');
        let lectureDateElement = document.querySelector('input[name="lecture-date"]');
        let lectureModuleElement = document.querySelector('select[name="lecture-module"]');

        const isValidInput = (lectureNameElement, date, moduleName) => lectureNameElement !== '' && date !== '' && moduleName !== 'Select module';

        if (!isValidInput(lectureNameElement.value, lectureDateElement.value, lectureModuleElement.value)) {
            return
        }

        if (!modules[lectureModuleElement.value]) {
            modules[lectureModuleElement.value] = [];
        }

        let currentLecture = {
            name: lectureNameElement.value,
            date: formateDate(lectureDateElement.value)
        };
        modules[lectureModuleElement.value].push(currentLecture);
        //console.log(lectures);

        createTrainings(modules);

    })




};
