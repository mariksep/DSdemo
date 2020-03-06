import { getWeatherData } from "./network";

/**
 * Display current weather data in HTML in chosen location
 */
const displayWeatherData = async (zipCode) => {

  const weatherMain = document.querySelector(".weatherContent");

  const weatherURL = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},fi&appid=c13ea6073dd0700495786ba6f93af408&units=metric`;
  const data = await getWeatherData(weatherURL);

  // Round temperature-values by one decimal
  const temperature = Math.round(data.main.temp * 10) / 10;
  const windSpeed = data.wind.speed;
  const iconId = data.weather[0].id;

  // Add values and icons to HTML
  const icon = `<i class="wi wi-owm-${iconId} weatherIcon"></i>`;

  const displayTemperature = `<p>${temperature}</p>
                              <?xml version="1.0" ?><svg height="6vh" width="6vw" data-name="Layer 1" id="Layer_1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:#000000;}.cls-2{fill:none;stroke:#000000;stroke-miterlimit:10;stroke-width:3px;}</style></defs><title/><path class="cls-1" d="M50.48,49.23a22.44,22.44,0,0,1-8.93,1.5c-12,0-18.23-7.49-18.23-17.4,0-11.88,8.47-18.49,19-18.49a20.52,20.52,0,0,1,8.57,1.55l-1.6,6.25a17,17,0,0,0-6.61-1.29c-6.25,0-11.1,3.77-11.1,11.51,0,7,4.13,11.36,11.15,11.36a19.65,19.65,0,0,0,6.56-1.14Z"/><circle class="cls-2" cx="16.35" cy="20.36" r="4.02"/></svg>`;

  const displayWind = `<p>${windSpeed}m/s</p>`;

  weatherMain.innerHTML = icon + displayTemperature + displayWind;
};

const WeatherData = { displayWeatherData };

export default WeatherData;
