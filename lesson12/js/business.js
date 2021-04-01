const requestURL = 'https://ahbiggs.github.io/lesson12/json/business.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const business = jsonObject['business'];

     {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let image = document.createElement('img');

        h2.textContent = business[i].name + ' ' + business[i].phone;
        p.textContent = 'Date of Birth: ' + prophets[i].birthdate + ' ' + 'Place of Birth: ' + prophets[i].birthplace;
        image.setAttribute('src', prophets[i].imageurl);

        card.appendChild(h2);
        card.appendChild(p);
        card.appendChild(image);
        

        document.querySelector('div.cards').appendChild(card);

    }

    
  });