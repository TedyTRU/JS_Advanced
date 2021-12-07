function deleteByEmail() {

    // select input field and read value
    const input = document.querySelector('input[name=email]');

    // -- if textContent matches input value -> remove row
    //const rows = [...document.querySelector('tbody').children]; // [... превръщаме в масив]
    const rows = Array
        .from(document.querySelector('tbody').children)
        .filter(row => row.children[1].textContent == input.value);

    rows.forEach(row => row.remove());

    // if there is a match, print 'Deleted'
    // otherwise, print 'Not found'

    document.getElementById('result').textContent = rows.length > 0 ? 'Deleted.' : 'Not found.';

}

//-----------------------------------------------------------------------

function deleteByEmail2() {

    // select input field and read value
    const input = document.querySelector('input[name=email]');

    // get tbody children
    const rows = [...document.querySelector('tbody').children]; // [... превръщаме в масив]
    //const rows = Array.from(document.querySelector('tbody').children); 

    let removed = false;

    // repeat for every row:
    // -- select second cell
    // -- if textContent matches input value -> remove row

    for (let row of rows) {
        if (row.children[1].textContent == input.value) {
            row.remove();
            removed = true;
        }
    }

    // if there is a match, print 'Deleted'
    // otherwise, print 'Not found'

    if (removed) {
        document.getElementById('result').textContent = 'Deleted.';

    } else {
        document.getElementById('result').textContent = 'Not found.';
    }

}