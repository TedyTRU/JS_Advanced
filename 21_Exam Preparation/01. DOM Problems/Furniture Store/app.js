window.addEventListener('load', solve);

function solve() {

    const fields = Array.from(document.querySelectorAll('input'));
    const descriptionField = document.getElementById('description');
    const addBtn = document.getElementById('add');
    const furnitureList = document.getElementById('furniture-list');
    const totalPrice = document.querySelector('.total-price');

    addBtn.addEventListener('click', addToTable);

    function addToTable(event) {
        event.preventDefault();

        const [model, year, price] = fields.map(v => v.value);

        if (fields.map(f => f.value.trim()).some(v => v === '') || descriptionField.value === ''
            || Number.isNaN(Number(year)) || Number.isNaN(Number(price))
            || Number(year) <= 0 || Number(price) <= 0) {
            return;
        }

        const moreBtn = e('button', { classList: 'moreBtn' }, 'More Info');
        const buyBtn = e('button', { classList: 'buyBtn' }, 'Buy it');

        const furnitureListInfo = e('tr', { classList: 'info' },
            e('td', {}, model),
            e('td', {}, Number(price).toFixed(2)),
            e('td', {}, moreBtn, buyBtn)
        );

        const furnitureListHide = e('tr', { classList: 'hide' },
            e('td', {}, `Year: ${year}`),
            e('td', { colSpan: '3' }, `Description: ${descriptionField.value}`)
        );

        furnitureList.appendChild(furnitureListInfo);
        furnitureList.appendChild(furnitureListHide);

        document.querySelector('form').reset();

        moreBtn.addEventListener('click', showInfo.bind(null, moreBtn));
        buyBtn.addEventListener('click', buyFurniture.bind(null, furnitureListInfo, furnitureListHide));

    }

    function showInfo(moreBtn) {

        const hide = moreBtn.parentElement.parentElement.nextElementSibling;
        //const hide = document.querySelector('.hide'); // NE RABOTI V JUDGE

        if (moreBtn.textContent == 'More Info') {

            hide.style.display = 'contents';
            moreBtn.textContent = 'Less Info';

        } else if (moreBtn.textContent == 'Less Info') {
            hide.style.display = 'none';
            moreBtn.textContent = 'More Info';

        }

    }

    function buyFurniture(furnitureListInfo, furnitureListHide) {
        
        const price = furnitureListInfo.querySelectorAll('td')[1];
        totalPrice.textContent = (Number(price.textContent) + Number(totalPrice.textContent)).toFixed(2);
        
        furnitureList.removeChild(furnitureListHide);
        furnitureList.removeChild(furnitureListInfo);

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