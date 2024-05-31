const requestURL = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses';
const loader = document.getElementById('loader');
const items = document.getElementById('items');
const xhr = new XMLHttpRequest();

xhr.onload = () => {
    const data = JSON.parse(xhr.responseText);
    const valute = data.response.Valute;

    loader.classList.remove('loader_active');

    function setData() {
        for (const currencyCode in valute) {
                const currency = valute[currencyCode];
                const value = currency.Value;

                const itemDiv = document.createElement('div');
                itemDiv.classList.add('item');

                const codeDiv = document.createElement('div');
                codeDiv.classList.add('item__code');
                codeDiv.textContent = currencyCode;

                const valueDiv = document.createElement('div');
                valueDiv.classList.add('item__value');
                valueDiv.textContent = value;

                const currencyDiv = document.createElement('div');
                currencyDiv.classList.add('item__currency');
                currencyDiv.textContent = 'руб.';

                itemDiv.appendChild(codeDiv);
                itemDiv.appendChild(valueDiv);
                itemDiv.appendChild(currencyDiv);

                items.appendChild(itemDiv);
            } 
    }

    setData();
};

xhr.open('GET', requestURL);
xhr.send();
