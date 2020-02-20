import { getWeatherData } from "./network";

/**
 * Display current weather data in HTML
 */
const displayWeatherData = async () => {
  const weatherMain = document.querySelector(".weatherContent");
  const weatherHeader = document.querySelector(".weatherHeader");

  const data = await getWeatherData();

  /* Round temperature-values by one decimal*/
  const temperature = Math.round(data.main.temp * 10) / 10;
  const feelsLike = Math.round(data.main.feels_like * 10) / 10;
  const windSpeed = data.wind.speed;
  const iconId = data.weather[0].id;

  const headerContent = `<h2>Myyrmäki</h2>
                          <i class="wi wi-owm-${iconId} weatherIcon"></i>`;

  const mainContent = `<p>Lämpötila: ${temperature}°C</p>
                      <p>Tuntuu kuin: ${feelsLike}°C</p>
                      <p>Tuulen nopeus: ${windSpeed}m/s</p>`;

  weatherHeader.innerHTML = headerContent;
  weatherMain.innerHTML = mainContent;
};

const WeatherData = { displayWeatherData };

export default WeatherData;
