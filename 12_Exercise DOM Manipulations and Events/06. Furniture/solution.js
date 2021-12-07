function solve() {

  const table = document.querySelector('table.table tbody');

  const [input, output] = Array.from(document.querySelectorAll('textarea'));

  const [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));

  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy);

  function generate(e) {

    const data = JSON.parse(input.value);

    for (let item of data) {

      const row = document.createElement('tr');

      row.appendChild(createCell('img', { src: item.img }));
      row.appendChild(createCell('p', {}, item.name));
      row.appendChild(createCell('p', {}, item.price));
      row.appendChild(createCell('p', {}, item.decFactor));
      row.appendChild(createCell('input', { type: 'checkbox' }));

      table.appendChild(row);

    }

  }

  function createCell(nestedTag, properties, content) {
    const cell = document.createElement('td');
    const nested = document.createElement(nestedTag);

    for (let prop in properties) {
      nested[prop] = properties[prop];
    }

    if (content) {
      nested.textContent = content;
    }
    cell.appendChild(nested);

    return cell;
  }

  function buy(e) {

    const furniture = Array
      .from(document.querySelectorAll('input[type="checkbox"]:checked'))
      .map(b => b.parentElement.parentElement)
      .map(r => ({
        name: r.children[1].textContent,
        price: Number(r.children[2].textContent),
        decFactor: Number(r.children[3].textContent)
      }))
      .reduce((acc, c, i, a) => {
        acc.names.push(c.name);
        acc.total += c.price;
        acc.decFactor += c.decFactor / a.length;
        return acc;
      }, { names: [], total: 0, decFactor: 0 });


    const result = `Bought furniture: ${furniture.names.join(', ')}
Total price: ${furniture.total.toFixed(2)}
Average decoration factor: ${furniture.decFactor}`

    output.value = result;

  }

}


//------------------------------------------------------

function solve2() {

  /* # configure event listeners # */
  // select all buttons
  // first button p -> table generartion
  // second button -. buy furniture
  const table = document.querySelector('table.table tbody');

  const [input, output] = Array.from(document.querySelectorAll('textarea'));
  //console.log(input, output);

  const [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));
  //console.log(generate, buyBtn);

  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy);


  /* # table generation # */
  function generate(e) {
    // read input JSON and parse it
    // for every array element create table row

    const data = JSON.parse(input.value);
    //console.log(data);

    for (let item of data) {

      const row = document.createElement('tr');
      const imgCell = document.createElement('td');
      const nameCell = document.createElement('td');
      const priceCell = document.createElement('td');
      const decFactorCell = document.createElement('td');
      const checkCell = document.createElement('td');

      const img = document.createElement('img');
      img.src = item.img;
      imgCell.appendChild(img);

      const nameP = document.createElement('p');
      nameP.textContent = item.name;
      nameCell.appendChild(nameP);

      const priceP = document.createElement('p');
      priceP.textContent = item.price;
      priceCell.appendChild(priceP);

      const decP = document.createElement('p');
      decP.textContent = item.decFactor;
      decFactorCell.appendChild(decP);

      const check = document.createElement('input');
      check.type = 'checkbox';
      checkCell.appendChild(check);

      row.appendChild(imgCell);
      row.appendChild(nameCell);
      row.appendChild(priceCell);
      row.appendChild(decFactorCell);
      row.appendChild(checkCell);

      table.appendChild(row);

    }

  }

  /* # buy furniture # */

  function buy(e) {

    const furniture = Array
      .from(document.querySelectorAll('input[type="checkbox"]:checked'))
      .map(b => b.parentElement.parentElement) // хваща целите редове (избраните редове)
      .map(r => ({                             // от избраните редове взимаме трите елемента
        name: r.children[1].textContent,
        price: Number(r.children[2].textContent),
        decFactor: Number(r.children[3].textContent)
      }));

    // console.log(furniture);

    const names = [];
    let total = 0;
    let decFactor = 0;

    for (let item of furniture) {
      names.push(item.name);
      total += item.price;
      decFactor += item.decFactor;
    }

    const result = `Bought furniture: ${names.join(', ')}
Total price: ${total.toFixed(2)}
Average decoration factor: ${decFactor / furniture.length}`

    //console.log(result);

    output.value = result;

    // select all checkboxes
    // flter only checkboxes
    // repeat for every select checkbox
    // -- select parent row
    // -- read item information
    // display output

  }

}