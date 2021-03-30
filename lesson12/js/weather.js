const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5774001&units=imperial&appid=a93269bdf5139d838b52f591e2a25140";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    temp = jsObject.main.temp;
    ws = jsObject.wind.speed;
   
    
    document.getElementById('current').textContent = jsObject.weather[0].description;
    document.getElementById('temp').textContent = temp.toFixed(0);
    document.getElementById('hum').textContent = jsObject.main.humidity;
    document.getElementById('ws').textContent = ws.toFixed(0);
    document.getElementById('wc').textContent = windChill(temperature, windspeed).toFixed(0);
    

    

});