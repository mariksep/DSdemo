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
                              <?xml version="1.0" ?><svg height="8vh" width="8vw" data-name="Layer 1" id="Layer_1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:#c4c4c4;}.cls-2{fill:none;stroke:#c4c4c4;stroke-miterlimit:10;stroke-width:3px;}</style></defs><title/><path class="cls-1" d="M50.48,49.23a22.44,22.44,0,0,1-8.93,1.5c-12,0-18.23-7.49-18.23-17.4,0-11.88,8.47-18.49,19-18.49a20.52,20.52,0,0,1,8.57,1.55l-1.6,6.25a17,17,0,0,0-6.61-1.29c-6.25,0-11.1,3.77-11.1,11.51,0,7,4.13,11.36,11.15,11.36a19.65,19.65,0,0,0,6.56-1.14Z"/><circle class="cls-2" cx="16.35" cy="20.36" r="4.02"/></svg>`;

  const displayWind = `<p>${windSpeed}m/s</p>
                        <svg height="8vh" width="8vw" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><path d="M288.886,306.238H82.659v30h206.227c23.035,0,41.775,18.74,41.775,41.775c0,20.511-16.687,37.199-37.199,37.199c-18.193,0-32.993-14.8-32.993-32.992h-30c0,34.734,28.259,62.992,62.993,62.992c37.054,0,67.199-30.146,67.199-67.199C360.661,338.436,328.463,306.238,288.886,306.238z"/></g></g><g><g><path d="M410.329,66.788c-52.21,0-94.686,42.476-94.686,94.686h30c0-35.668,29.018-64.686,64.686-64.686c39.519,0,71.671,32.151,71.671,71.671c0,43.709-35.56,79.269-79.269,79.269H0v30h402.731C462.982,277.728,512,228.711,512,168.46C512,112.398,466.391,66.788,410.329,66.788z"/></g></g><g><g><path d="M235.895,102.436c-29.342,0-53.214,23.872-53.214,53.214h30c0-12.8,10.414-23.214,23.214-23.214c14.648,0,26.564,11.916,26.564,26.564c0,16.657-13.55,30.208-30.207,30.208H82.659v30h149.593c33.199,0,60.207-27.009,60.207-60.208C292.459,127.811,267.085,102.436,235.895,102.436z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>`;

  weatherMain.innerHTML = icon + displayTemperature + displayWind;
};

const WeatherData = { displayWeatherData };

export default WeatherData;
