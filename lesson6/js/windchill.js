var temperature = parseInt(document.getElementById('temprature').innerHTML);
var windSpeed = parseInt(document.getElementById('windspeed').innerHTML);
console.log(temperature);
console.log(windSpeed);

if (temperature <= 50) {
    var windChill = Math.round(35.74 + (0.6215 * 76) - (35.75 * Math.pow(5, 0.16)) + (0.4275 * 76 * Math.pow(5, 0.16)));
    document.getElementById("windchill").innerHTML = windChill + "&#176; F";
}

else {
    document.getElementById("windchill").innerHTML = "N/A";
}