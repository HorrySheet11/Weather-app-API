const city = document.getElementById("city");
const date = document.getElementById("date");
const time_zone = document.getElementById("time-zone");
const temperature = document.getElementById("temperature");
temperature.classList.add("f");
const feels_like = document.getElementById("feels-like");
const condition = document.getElementById("condition");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

const search = document.getElementById("search");
const searchButton = document.getElementById("search-button");
let weatherOBJ = {};
let query;


const fetchWeather = async (query = "philippines") => {
	try {
		const weather = await fetch(
			`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${query}?unitGroup=us&key=AUGWL5T7N9X4NRPSDS535XT8E&contentType=json`,
		);
		const data = await weather.json();
		console.log(data);
		weatherOBJ.address = data.resolvedAddress;
		weatherOBJ.date = `Time: ${data.days[0].datetime}`;
		weatherOBJ.time_zone = `Time zone: ${data.timezone}`;
		weatherOBJ.temperature = `Temp: ${data.days[0].tempmax} °F`;
		weatherOBJ.fahrenheit = data.days[0].tempmax;
		weatherOBJ.celsius = (((data.days[0].tempmax - 32) * 5) / 9).toFixed(1);
		weatherOBJ.feels_like = `Feels like: ${data.days[0].feelslike}`;
		weatherOBJ.condition = `Condition: ${data.days[0].conditions}`;
		weatherOBJ.description = data.description;
		weatherOBJ.humidity = `Humidity: ${data.days[0].humidity}`;
		weatherOBJ.wind = `Wind: ${data.days[0].windspeed}`;
		displayWeather();
	} catch (error) {
		console.log(error);
	}
};

fetchWeather();

const displayWeather = () => {
	city.textContent = weatherOBJ.address;
	date.textContent = weatherOBJ.date;
	time_zone.textContent = weatherOBJ.time_zone;
	temperature.textContent = weatherOBJ.temperature;
	feels_like.textContent = weatherOBJ.feels_like;
	condition.textContent = weatherOBJ.condition;
	description.textContent = weatherOBJ.description;
	humidity.textContent = weatherOBJ.humidity;
	wind.textContent = weatherOBJ.wind;
};

search.addEventListener("input", () => {
	query = search.value;
});
searchButton.addEventListener("click", () => {
	fetchWeather(query);
});

temperature.addEventListener("click", () => {
	temperature.classList.toggle("c");
	temperature.classList.toggle("f");

	if (temperature.classList.contains("c")) {
		temperature.textContent = `Temp: ${weatherOBJ.celsius} °C`;
	} else {
		temperature.textContent = `Temp: ${weatherOBJ.fahrenheit} °F`;
	}
});
