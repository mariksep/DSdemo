import { getWeatherData } from "./network";

/**
 * Get current weather data and add values to one object
 * @returns Object that contains weather values
 */
const currentWeatherData = async () => {
  const data = await getWeatherData();

  // Round temperature-values by one decimal
  const temperature = Math.round(data.main.temp * 10) / 10;
  const feelsLike = Math.round(data.main.feels_like * 10) / 10;
  const windSpeed = data.wind.speed;
  const iconId = data.weather[0].id;

  const weather = { temperature, feelsLike, windSpeed, iconId };
  return weather;
};

const WeatherData = { currentWeatherData };

export default WeatherData;
