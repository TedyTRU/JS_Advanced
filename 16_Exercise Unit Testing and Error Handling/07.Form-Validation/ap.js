function validate() {

    const usernameRegex = /(^[A-Za-z0-9]{3,20}$)/;
    const passwordRegex = /(^[\w]{5,15}$)/;
    const emailRegex = /(^[\w]+@[\w]+\.[\w]+$)/;

    let isValidInput = true;
    let isChecked = false;

    const submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', (e) => {
        e.preventDefault();

        const usernameField = document.getElementById('username');
        if (!usernameRegex.test(usernameField.value)) {
            isValidInput = false;
            usernameField.style.borderColor = 'red';

        } else {
            usernameField.style.border = 'none';
            confPasswordField.style.border = 'none';

        }

        const passwordField = document.getElementById('password');
        const confPasswordField = document.getElementById('confirm-password');
        //let passwordRed = false;

        if (!passwordRegex.test(passwordField.value) && !passwordRegex.test(confPasswordField.value) || passwordField.value != confPasswordField.value) {
            isValidInput = false;
            //passwordRed = true;
            passwordField.style.borderColor = 'red';
            confPasswordField.style.borderColor = 'red';

        } else {
            passwordField.style.border = 'none';

        }

        // if (passwordField.value != confPasswordField.value) {
        //     isValidInput = false;
        //     confPasswordField.style.borderColor = 'red';

        // } else {
        //     if (!passwordRed) {
        //         confPasswordField.style.border = 'none';

        //     }

        // }

        const emailField = document.getElementById('email');
        if (!emailRegex.test(emailField.value)) {
            isValidInput = false;
            emailField.style.borderColor = 'red';

        } else {
            emailField.style.border = 'none';

        }

        const validDiv = document.getElementById('valid');
        if (isValidInput) {
            validDiv.style.display = 'block';

        } else {
            validDiv.style.display = 'none';
        }


        if (isChecked) {
            const comNumber = document.getElementById('companyNumber');
            if (Number(comNumber.value) < 1000 || Number(comNumber.value) > 9999) {
                comNumber.style.borderColor = 'red';

            } else {
                comNumber.style.border = 'none';

            }
        }

    });

    document.getElementById('company').addEventListener('change', (e) => {
        const companyField = document.getElementById('companyInfo');

        if (e.target.checked) {
            isChecked = true;
            companyField.style.display = 'block';

        } else {
            isChecked = false;
            companyField.style.display = 'none';
        }

    });

}
