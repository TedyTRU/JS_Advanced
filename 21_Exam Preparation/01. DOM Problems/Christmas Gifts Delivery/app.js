function solution() {

    const field = document.querySelector('input');
    const addBtn = document.querySelector('.card button');
    const sectionList = Array.from(document.querySelectorAll('.container section ul'));

    addBtn.addEventListener('click', giftList);

    function giftList(event) {
        event.preventDefault();

        if (field.value === '') {
            return;
        }

        const listOfGifts = sectionList[0];
        const gifts = Array.from(listOfGifts.children);

        const sendBtn = e('button', { id: 'sendButton' }, 'Send');
        const discardBtn = e('button', { id: 'discardButton' }, 'Discard');
        const li = e('li', { classList: 'gift' }, `${field.value}`, sendBtn, discardBtn);

        gifts.push(li);
        gifts.sort((a, b) => a.innerHTML.localeCompare(b.innerHTML))
            .forEach(gift => listOfGifts.appendChild(gift));

        field.value = '';

        sendBtn.addEventListener('click', sendOrDiscard);
        discardBtn.addEventListener('click', sendOrDiscard);

    }

    function sendOrDiscard(e) {
        const li = e.target.parentNode
        //console.log(li.childNodes);
        li.removeChild(li.childNodes[1]);
        li.removeChild(li.childNodes[1]);

        if (e.target.textContent == 'Send') {
            sectionList[1].appendChild(li);

        } else {
            sectionList[2].appendChild(li);
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