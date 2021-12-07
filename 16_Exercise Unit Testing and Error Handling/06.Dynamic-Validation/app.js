function validate() {

    const inputField = document.getElementById('email');
    const validMelPattern = /(^[a-z]+@[a-z]+\.[a-z]+$)/;

    inputField.addEventListener('change', () => {

        if (!validMelPattern.test(inputField.value)) {
            inputField.classList.add('error');

        } else {
            inputField.classList.remove('error');

        }
    });


}