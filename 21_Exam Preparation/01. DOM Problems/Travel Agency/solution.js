window.addEventListener('load', solution);

function solution() {

  const fields = Array.from(document.querySelectorAll('#form input')).slice(0, 5);
  const submitBtn = document.getElementById('submitBTN');
  const editBtn = document.getElementById('editBTN');
  const continueBtn = document.getElementById('continueBTN');
  const infoPreview = document.getElementById('infoPreview');

  const valueFields = [];

  submitBtn.addEventListener('click', submit);

  function submit() {

    if (fields[0].value === '' || fields[1].value === '') {
      return;
    }

    //valueFields.forEach(v => v.value ='');
    fields.forEach(v => valueFields.push(v.value));
    fields.forEach(f => f.value = '');

    const name = e('li', {}, `Full Name: ${valueFields[0]}`);
    const mail = e('li', {}, `Email: ${valueFields[1]}`);
    const phone = e('li', {}, `Phone Number: ${valueFields[2]}`);
    const address = e('li', {}, `Address: ${valueFields[3]}`);
    const postCode = e('li', {}, `Postal Code: ${valueFields[4]}`);

    infoPreview.appendChild(name);
    infoPreview.appendChild(mail);
    infoPreview.appendChild(phone);
    infoPreview.appendChild(address);
    infoPreview.appendChild(postCode);

    submitBtn.disabled = true;
    editBtn.disabled = false;
    continueBtn.disabled = false;

    editBtn.addEventListener('click', proceedReservation);

    continueBtn.addEventListener('click', endReservation);

  }

  function proceedReservation() {

    for (let i = 0; i < 5; i++) {
      fields[i].value = valueFields[i];
    }

    //////////// infoPreview.remove();
    infoPreview.innerHTML = '';

    submitBtn.disabled = false;
    editBtn.disabled = true;
    continueBtn.disabled = true;

    // console.log(infoPreview);

  }

  function endReservation() {

    //const end = e('h3', {}, 'Thank You For Your Reservation!');

    //document.querySelector('#block').replaceChildren(end);
    document.querySelector('#block').innerHTML = '<h3>Thank you for your reservation!</h3>';
    //document.querySelector('#block').appendChild(end);

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
