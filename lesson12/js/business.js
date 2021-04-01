const requestURL = 'https://ahbiggs.github.io/lesson12/json/business.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const business = jsonObject['business'];

for (let i = 0; i < business.name; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let image = document.createElement('img');

        h2.textContent = business[i].name + ' ' + business[i].phone;
        p.textContent = 'Address: ' + business[i].address + ' ' + 'Website: ' + business[i].website;
        image.setAttribute('src', business[i].logolocation);

        card.appendChild(h2);
        card.appendChild(p);
        card.appendChild(image);
        

        document.querySelector('div.cards').appendChild(card);

    }

    
  });