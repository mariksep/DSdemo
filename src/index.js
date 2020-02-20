import Data from "./modules/menuData";
import WeatherData from "./modules/weatherData";

Data.getInit();


WeatherData.displayWeatherData();
// Call every hour
//setInterval(WeatherData.displayWeatherData, 60*60*1000);
