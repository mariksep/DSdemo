import { getWeatherData } from "./network";

/**
 * Display current weather data in HTML in chosen location
 */
const displayWeatherData = async (zipCode) => {

  const weatherMain = document.querySelector(".weatherContent");

  const weatherURL = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},fi&appid=c13ea6073dd0700495786ba6f93af408&units=metric`;
  const data = await getWeatherData(weatherURL);

  // Round temperature-value by one decimal
  const temperature = Math.round(data.main.temp * 10) / 10;
  const iconId = data.weather[0].id;

  // Add value and icons to HTML
  const icon = `<i class="wi wi-owm-${iconId} weatherIcon"></i>`;

  const displayTemperature = `<p>${temperature} °C</p>`;

  weatherMain.innerHTML = icon + displayTemperature;
};

const WeatherData = { displayWeatherData };

export default WeatherData;
