import menuData from "./modules/menuData";
import WeatherData from "./modules/weatherData";
import transitData from "./modules/transitData";


menuData.getInit();


WeatherData.displayWeatherData();
// Call every hour
//setInterval(displayWeather, 60*60*1000);
transitData.getTransitDataV();
transitData.getTransitDataO();
//setInterval(getTransitDataV, 60*1000);
//setInterval(getTransitDataO, 60*1000);
