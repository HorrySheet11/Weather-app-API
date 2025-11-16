const city = document.getElementById('city');
const date = document.getElementById('date');
const time_zone = document.getElementById('time-zone');
const temperature = document.getElementById('temperature');
const feels_like = document.getElementById('feels-like');
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');

const fetchWeather = async () => {
    try {
        const weather = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/philippines?unitGroup=us&key=AUGWL5T7N9X4NRPSDS535XT8E&contentType=json');
        const data = await weather.json();
        console.log(data);
        city.textContent = data.resolvedAddress;
        date.textContent = `Time: ${data.currentConditions.datetime}`;
        time_zone.textContent = `Time zone: ${data.timezone}`;
        temperature.textContent = `Temp: ${data.currentConditions.temp}`;
        feels_like.textContent = `Feels like: ${data.currentConditions.feelslike}`;
        description.textContent = data.currentConditions.conditions;
        humidity.textContent = `Humidity: ${data.currentConditions.humidity}`;
        wind.textContent = `Wind: ${data.currentConditions.windspeed}`;
        
    } catch (error) {
        console.log(error);
        
    }
}

fetchWeather();