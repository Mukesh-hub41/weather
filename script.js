const openWeatherMapApiKey = '24a87e9b43cc8219e6e793befdf656eb';
const aqiApiKey = '132f67be1b7c0decb2f2135bafb77d0f692bec9a';

document.getElementById('getWeatherBtn').addEventListener('click',getWeather);
document.getElementById('getAqiBtn').addEventListener('click',getAqi);

async function getWeather(){
    const city = document.getElementById('cityInput').value;
    if(city){
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openWeatherMapApiKey}&units=metric`;
        const response = await fetch(weatherUrl);
        const data = await response.json();
        displayWeather(data);
    } else{
        alert('Please Enter a city name');
    }
}

function displayWeather(data){
    const weatherResult = document.getElementById('weatherResult');
    if (data.cod === 200){
        const {main, weather, name, wind} = data; 
        weatherResult.innerHTML = `
        <h2>Weather in ${name}</h2>
        <p>Temprature: ${main.temp}C</p>
        <p>Weather: ${weather[0].description}</p>
        <p>Humidy: ${main.humidity}%</p>
        <p>Wind Speed:${wind.speed}m/s</p>
        `;
    } else{
        weatherResult.innerHTML = `<p>${data.message}</p>`;
    }
}


async function getWeather() {
    const city = document.getElementById('cityInput').value;
    if (city) {
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openWeatherMapApiKey}&units=metric`;
        const response = await fetch(weatherUrl);
        const data = await response.json();
        displayWeather(data);
    } else {
        alert('Please enter a city name.');
    }
}

async function getAqi() {
    const city = document.getElementById('cityInput').value;
    if (city) {
        const aqiUrl = `https://api.waqi.info/feed/${city}/?token=${aqiApiKey}`;
        const response = await fetch(aqiUrl);
        const data = await response.json();
        displayAqi(data);
    } else {
        alert('Please enter a city name.');
    }
}


function displayAqi(data) {
    const aqiResult = document.getElementById('aqiResult');
    if (data.status === 'ok') {
        const { aqi, city } = data.data;
        aqiResult.innerHTML = `
            <h2>AQI in ${city.name}</h2>
            <p>AQI: ${aqi}</p>
        `;
    } else {
        aqiResult.innerHTML = `<p>${data.data}</p>`;
    }
}































