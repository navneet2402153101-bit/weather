const apiKey = "6408743164c29bfeb85b17e70f47cbdf";

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");

searchBtn.addEventListener("click", getWeather);

cityInput.addEventListener("keypress", function(e){
if(e.key === "Enter"){
getWeather();
}
});

function getWeather(){

const city = cityInput.value.trim();

if(city === ""){
alert("Please enter a city name");
return;
}

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(url)
.then(response => response.json())
.then(data => {

if(data.cod != 200){
alert(data.message);
return;
}

document.getElementById("cityName").innerText =
"City: " + data.name;

document.getElementById("temperature").innerText =
"Temperature: " + data.main.temp + " °C";

document.getElementById("description").innerText =
"Weather: " + data.weather[0].description;

document.getElementById("humidity").innerText =
"Humidity: " + data.main.humidity + "%";

document.getElementById("wind").innerText =
"Wind Speed: " + data.wind.speed + " m/s";

})
.catch(error =>{
alert("Error fetching weather data");
console.log(error);
});

}

