const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5774001&units=imperial&appid=a93269bdf5139d838b52f591e2a25140';
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
   
    



});

var weatherRequest2 = new XMLHttpRequest();
var apiURL2 = 'https://api.openweathermap.org/data/2.5/forecast?id=5774001&units=imperial&APPID=a93269bdf5139d838b52f591e2a25140';


weatherRequest2.open('GET',apiURL2, true);
weatherRequest2.responseType = 'text';
weatherRequest2.send();

weatherRequest2.onload = function () {
    var weatherData2 = JSON.parse(weatherRequest2.response);
    console.log(weatherData2);

    var today = new Date(weatherData2.list[0].dt_txt);


    var a = today.getDate(); 
    var b = new Date().getDate();
    var c = today.getDay(); 
    var d = b - a;
    var i = c + d;
   

    var weekday = new Array(7);
        weekday[-1]= "Sat";
        weekday[0] = "Sun";
        weekday[1] = "Mon";
        weekday[2] = "Tue";
        weekday[3] = "Wed";
        weekday[4] = "Thu";
        weekday[5] = "Fri";
        weekday[6] = "Sat";
        weekday[7] = "Sun";
        weekday[8] = "Mon";
        weekday[9] = "Tue";
        weekday[10] = "Wed";
        weekday[11] = "Thu";
        weekday[12] = "Fri";

    
    /*Set the weekdays to automatically enter into the Preston page under the forecast section*/

    document.getElementById('day0').innerHTML = "Day"
    document.getElementById('day1').innerHTML = weekday[i+1];
    document.getElementById('day2').innerHTML = weekday[i+2];
    document.getElementById('day3').innerHTML = weekday[i+3];
    document.getElementById('day4').innerHTML = weekday[i+4];
    document.getElementById('day5').innerHTML = weekday[i+5];

    /*The problem is that sometimes the list item 0 gives temperature at an hour for today, but
    sometimes it reflects temperature for some time tomorrow, depending on what time it is today.
    As a result, I have set the first variable list to be tf1.  When item list 0 is giving me
    temperature data for tomorrow, then tf1 will equal 0, if it is reflecting temperature data 
    for today, then it will equal 8, which will be data for tomorrow.
    This is a little complicated.  The designers of this course should reassess how to do this 
    forecast part.  They should either ensure that the students have access to the 16-day forecast,
    or they should give more direction on what is expected from the forecast for the every three hours 
    for the next several days.*/

    var tf = d * 6;
    var tf1 = 6 + tf;


    document.getElementById('img1').src = 'https://openweathermap.org/img/w/' + weatherData2.list[tf1].weather[0].icon + '.png';
    document.getElementById('img2').src = 'https://openweathermap.org/img/w/' + weatherData2.list[tf1+8].weather[0].icon + '.png';
    document.getElementById('img3').src = 'https://openweathermap.org/img/w/' + weatherData2.list[tf1+16].weather[0].icon + '.png';
    document.getElementById('img4').src = 'https://openweathermap.org/img/w/' + weatherData2.list[tf1+24].weather[0].icon + '.png';
    document.getElementById('img5').src = 'https://openweathermap.org/img/w/' + weatherData2.list[tf1+32].weather[0].icon + '.png';
    document.getElementById('f1').innerHTML = weatherData2.list[tf1].main.temp_max.toFixed(1) + '&degF';
    document.getElementById('f2').innerHTML = weatherData2.list[tf1+8].main.temp_max.toFixed(1) + '&degF';
    document.getElementById('f3').innerHTML = weatherData2.list[tf1+16].main.temp_max.toFixed(1) + '&degF';
    document.getElementById('f4').innerHTML = weatherData2.list[tf1+24].main.temp_max.toFixed(1) + '&degF';
    document.getElementById('f5').innerHTML = weatherData2.list[tf1+32].main.temp_max.toFixed(1) + '&degF';





}