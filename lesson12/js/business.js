const requestURL = 'https://ahbiggs.github.io/lesson12/json/business.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const prophets = jsonObject['prophets'];

    for (let i = 0; i < prophets.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let image = document.createElement('img');

        h2.textContent = prophets[i].name;
        p.textContent = 'Phone Number: ' + prophets[i].phone + ' ' + 'Website: ' + prophets[i].website;
        image.setAttribute('src', prophets[i].imageurl);

        card.appendChild(h2);
        card.appendChild(p);
        card.appendChild(image);
        

        document.querySelector('div.cards').appendChild(card);

    }

    
  });