                
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';    
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var weatherTowns = request.response;
    showTowns(weatherTowns);

}

function showTowns(jsonObj) {
    var wTowns = jsonObj['towns'];

var i = 4;

var name1 = wTowns[i].name;
var motto1 = wTowns[i].motto;
var yf1 = wTowns[i].yearFounded;
var pop1 = wTowns[i].currentPopulation;
var arf1 = wTowns[i].averageRainfall + '"';


document.getElementById("city1").innerHTML = name1;
document.getElementById("motto1").innerHTML = motto1;
document.getElementById("yf1").innerHTML = yf1;
document.getElementById("pop1").innerHTML = pop1;
document.getElementById("arf1").innerHTML = arf1;

var i = 5;

var name2 = wTowns[i].name;
var motto2 = wTowns[i].motto;
var yf2 = wTowns[i].yearFounded;
var pop2 = wTowns[i].currentPopulation;
var arf2 = wTowns[i].averageRainfall + '"';


document.getElementById("city2").innerHTML = name2;
document.getElementById("motto2").innerHTML = motto2;
document.getElementById("yf2").innerHTML = yf2;
document.getElementById("pop2").innerHTML = pop2;
document.getElementById("arf2").innerHTML = arf2;

var i = 1;

var name3 = wTowns[i].name;
var motto3 = wTowns[i].motto;
var yf3 = wTowns[i].yearFounded;
var pop3 = wTowns[i].currentPopulation;
var arf3 = wTowns[i].averageRainfall + '"';


document.getElementById("city3").innerHTML = name3;
document.getElementById("motto3").innerHTML = motto3;
document.getElementById("yf3").innerHTML = yf3;
document.getElementById("pop3").innerHTML = pop3;
document.getElementById("arf3").innerHTML = arf3;



}