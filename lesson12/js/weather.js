var weatherRequest = new XMLHttpRequest();
var apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=5774001&units=imperial&appid=97966e710b6cd9867a0e383cc26cf629';




weatherRequest.open('GET',apiURL, true);
weatherRequest.responseType = 'text';
weatherRequest.send();

weatherRequest.onload = function () {
    var weatherData = JSON.parse(weatherRequest.response);
    console.log(weatherData);
    var weatherString = JSON.stringify(weatherRequest.response);

    var temper = weatherData.weather[0].main;
    document.getElementById('currentTemp').innerHTML = temp.toFixed(0);
    document.getElementById('hum').innerHTML = weatherData.main.humidity;
    document.getElementById('ws').innerHTML = weatherData.wind.speed;
    document.getElementById('soc1').innerHTML = temper;
    document.getElementById('soc2').innerHTML = temper;

    var l = weatherData.main.temp;
    var m = weatherData.wind.speed;
    var n = l*m;
    var x = 35.74 + 0.6215*l - 35.75 * Math.pow(m, 0.16) + 0.4275*l*Math.pow(m, 0.16);

    document.getElementById('wc').innerHTML = x.toFixed(2) + '&degF';

   

}