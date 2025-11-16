const city = document.getElementById('city');
const date = document.getElementById('date');
const time_zone = document.getElementById('time-zone');
const temperature = document.getElementById('temperature');
temperature.classList.add('f');
const feels_like = document.getElementById('feels-like');
const condition = document.getElementById('condition');
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');

const search = document.getElementById('search');
const searchButton = document.getElementById('search-button');
let query;
const fetchWeather = async (query = 'philippines') => {
    try {
        const weather = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${query}?unitGroup=us&key=AUGWL5T7N9X4NRPSDS535XT8E&contentType=json`);
        const data = await weather.json();
        console.log(data);
        city.textContent = data.resolvedAddress;
        date.textContent = `Time: ${data.days[0].datetime}`;
        time_zone.textContent = `Time zone: ${data.timezone}`;
        temperature.textContent = `Temp: ${data.days[0].tempmax} °F`;
        feels_like.textContent = `Feels like: ${data.days[0].feelslike}`;
        condition.textContent = `Condition: ${data.days[0].conditions}`;
        description.textContent = data.description;
        humidity.textContent = `Humidity: ${data.days[0].humidity}`;
        wind.textContent = `Wind: ${data.days[0].windspeed}`;
        
    } catch (error) {
        console.log(error);
        
    }
}

fetchWeather();

search.addEventListener('input', () => {
    query = search.value;
})
searchButton.addEventListener('click', () => {
    fetchWeather(query);
})

