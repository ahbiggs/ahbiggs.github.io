const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5774001&units=imperial&appid=97966e710b6cd9867a0e383cc26cf629";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    temp = jsObject.main.temp;
    ws = jsObject.wind.speed;
    
    document.getElementById('current').textContent = jsObject.weather[0].description;
    document.getElementById('temp').textContent = temp.toFixed(0);
    document.getElementById('wc').textContent = windChill(temperature, windspeed).toFixed(0);
    document.getElementById('hum').textContent = jsObject.main.humidity;
    document.getElementById('ws').textContent = ws.toFixed(0);


});