function lockedProfile() {

    // add toggle event listener to all profile buttons

    // find associated profile details
    // if it's visible -> hide it and display label 'Show more'
    // otherwise -> show it and display label 'Hode it'

    Array.from(document.querySelectorAll('.profile button'))
        .forEach(b => b.addEventListener('click', onToggle));

    function onToggle(e) {
        /*const infoDiv = Array.from(e.target.parentElement.querySelectorAll('div'))
            .find(d => d.id.includes('HiddenFields'));
            */

        const profile = e.target.parentElement;
        const isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked;
        //console.log(isActive);

        if (isActive) {
            const infoDiv = profile.querySelector('div');

            //console.log(e.target.textContent);

            if (e.target.textContent == 'Show more') {
                infoDiv.style.display = 'block';
                e.target.textContent = 'Hide it'

            } else {
                infoDiv.style.display = '';
                e.target.textContent = 'Show more'

            }
        }

    }


    //-----------------------------------------------------------


    const radio = Array.from(document.querySelectorAll('input[type="radio"]'));
    for (let input of radio) {
        input.addEventListener('click', onLockToggle);
    }

    function onLockToggle(e) {
        const button = e.target.parentElement.querySelector('button');

        if (e.target.value == 'lock') {
            button.disabled = true;

        } else {
            button.disabled = false;

        }
        //console.log(e.target.value, button);
    }

    //-----------------------------------------------------------

}