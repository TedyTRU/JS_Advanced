function solve() {

    // get references to elements of interest
    // configure event listeners
    const fields = document.querySelectorAll('#container input');
    const addBtn = document.querySelector('#container button');
    //const petList = document.querySelectorAll('#adoption li');
    const petList = document.querySelector('#adoption ul');
    const adoptedList = document.querySelector('#adopted ul');

    const input = {
        name: fields[0],
        age: fields[1],
        kind: fields[2],
        owner: fields[3]
    }
    const clearInput = () => {
        // input.name.value = ''
        // input.age.value = ''
        // input.kind.value = ''
        // input.owner.value = ''

        //Array.from(fields).forEach(f => f.value = '')

        document.querySelector('form').reset()
    }

    addBtn.addEventListener('click', addPet);

    // # Add new pet
    //   - read input fields
    //   - validate values
    //   - create new list item
    //   - configure event listener for newly created element

    function addPet(event) {
        event.preventDefault();

        // const [name, age, kind, owner] = fields.map(f => f.value.trim());
        // if (fields.map(f => f.value.trim()).some(v => v == '') || Number.isNaN(Number(age))) {
        //     return;
        // }

        const name = input.name.value.trim();
        const age = Number(input.age.value);
        const kind = input.kind.value;
        const owner = input.owner.value;
        if (name == '' || input.age.value == '' || kind == '' || owner == '' || Number.isNaN(age)) {
            return;
        }

        const contactBtn = e('button', {}, 'Contact with owner');

        const pet = e('li', {},
            e('p', {},
                e('strong', {}, name),
                ' is a ',
                e('strong', {}, age),
                ' year old ',
                e('strong', {}, kind)),
            e('span', {}, `Owner: ${owner}`),
            contactBtn
        );

        petList.appendChild(pet);
        clearInput();

        contactBtn.addEventListener('click', contact);

        // # Contact owner
        //  - create confirmation div
        //  - configure event listener for new button
        //  - replace existing button with confirmation div

        function contact() {
            const confirmInput = e('input', { placeholder: 'Enter your names' });
            const confirmBtn = el('button', 'Yes! I take it!');
            const confirmDiv = el('div', confirmInput, confirmBtn);

            contactBtn.remove();
            pet.appendChild(confirmDiv);

            confirmBtn.addEventListener('click', adopt.bind(null, confirmInput, pet));

        }


    }

    // # Adopt a pet
    //   - read and validate input
    //   - create new button for checking
    //   - configure event listener for new button
    //   - replace confirmation div with new button
    //   - change text content of Owner span
    //   - move element to other list

    function adopt(input, pet) {
        const newOwner = input.value.trim();

        if (newOwner == '') {
            return;
        }

        const checkBtn = el('button', 'Checked');
        checkBtn.addEventListener('click', check.bind(null, pet));

        // pet.querySelector('div').replaceWith(checkBtn);
        pet.querySelector('div').remove();
        pet.appendChild(checkBtn);

        pet.querySelector('span').textContent = `New Owner: ${newOwner}`;
        adoptedList.appendChild(pet);

    }

    // # Checking of adopted pet
    //   - remove element from DOM

    function check(pet) {
        pet.remove();
    }


    function el(type, ...content) {
        return e(type, {}, ...content);
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

