const requestURL = 'https://ahbiggs.github.io/lesson12/json/business.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const business = jsonObject['business'];

    for (let i = 0; i < business.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let image = document.createElement('img');

        h2.textContent = business[i].name;
        p.textContent = 'Phone: ' + business[i].phone + ' ' + 'Website: ' + business[i].website;
        image.setAttribute('src', business[i].imageurl);

        card.appendChild(h2);
        card.appendChild(p);
        card.appendChild(image);
        

        document.querySelector('div.cards').appendChild(card);

    }

    
  });