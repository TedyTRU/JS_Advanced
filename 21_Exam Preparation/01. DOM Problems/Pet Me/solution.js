function solve() {

    const fields = Array.from(document.querySelectorAll('#container input'));
    const addBtn = document.querySelector('#container button');
    const petList = document.querySelector('#adoption ul');
    const adoptedList = document.querySelector('#adopted ul');

    // const clearInput = () => {
    //     //Array.from(fields).forEach(f => f.value = '')
    //     document.querySelector('form').reset()
    // }

    addBtn.addEventListener('click', addPet);

    function addPet(event) {
        event.preventDefault();

        const [name, age, kind, owner] = fields.map(f => f.value.trim());
        if (fields.map(f => f.value.trim()).some(v => v == '') || Number.isNaN(Number(age))) {
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
        Array.from(fields).forEach(f => f.value = '');
        //clearInput();

        contactBtn.addEventListener('click', contact);

        function contact() {
            const confirmInput = e('input', { placeholder: 'Enter your names' });
            const confirmBtn = e('button', {}, 'Yes! I take it!');
            const confirmDiv = e('div', {}, confirmInput, confirmBtn);

            contactBtn.remove();
            pet.appendChild(confirmDiv);

            confirmBtn.addEventListener('click', adopt.bind(null, confirmInput, pet));

        }
    }

    function adopt(input, pet) {
        const newOwner = input.value.trim();

        if (newOwner == '') {
            return;
        }

        const checkBtn = e('button', {}, 'Checked');
        pet.querySelector('div').remove();
        pet.appendChild(checkBtn);
        pet.querySelector('span').textContent = `New Owner: ${newOwner}`;
        adoptedList.appendChild(pet);

        checkBtn.addEventListener('click', check.bind(null, pet));
    }

    function check(pet) {
        pet.remove();
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