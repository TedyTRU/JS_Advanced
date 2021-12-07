function addItem() {

    const input = document.getElementById('newItemText');
    console.log(input);

    const liElement = document.createElement('li');
    liElement.textContent = input.value;

    // create Delete button
    const button = document.createElement('a');
    button.href = '#';
    button.textContent = '[Delete]';
    //button.addEventListener('click', () => console.log('clicked'));
    button.addEventListener('click', removeElement);
    
    liElement.appendChild(button);

    document.getElementById('items').appendChild(liElement);

    input.value = '';

    function removeElement(event) {
        const parent = event.target.parentNode;
        parent.remove();
    }
    
}