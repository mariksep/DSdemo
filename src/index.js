import Data from "./modules/menuData";
import WeatherData from "./modules/weatherData";

Data.getInit();

/**
 *  Display weather data in HTML
 */
const displayWeather = async () => {
  const weatherMain = document.querySelector(".weatherContent");
  const weatherHeader = document.querySelector(".weatherHeader");

  const weatherObject = await WeatherData.currentWeatherData();
  const headerContent = `<h2>Myyrmäki</h2>
                  <i class="wi wi-owm-${weatherObject.iconId} weatherIcon"></i>`;

  const mainContent = `<p>Lämpötila: ${weatherObject.temperature}°C</p>
                  <p>Tuntuu kuin: ${weatherObject.feelsLike}°C</p>
                  <p>Tuulen nopeus: ${weatherObject.windSpeed}m/s</p>`;

  weatherHeader.innerHTML = headerContent;
  weatherMain.innerHTML = mainContent;

};

// Call every hour
//setInterval(displayWeather, 60*60*1000);
displayWeather();
