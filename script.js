console.log('loaded');

const fetchWeather = async () => {
    try {
        const weather = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/philippines?unitGroup=us&key=AUGWL5T7N9X4NRPSDS535XT8E');
        const data = await weather.json();
        console.log(data);
        
    } catch (error) {
        console.log(error);
        
    }
}

fetchWeather();