

const getCourses = async () => {
  let response;
  try {
    response = await fetch(`https://www.sodexo.fi/ruokalistat/output/weekly_json/152`);

    let data = await response.json();
    return data;
  } catch (error) {
    console.error('error', error.message);
  }
};

const getWeatherData = async () => {
  const weatherURL = `http://api.openweathermap.org/data/2.5/weather?zip=01600,fi&appid=c13ea6073dd0700495786ba6f93af408&units=metric`;
  try {
    const response = await fetch(weatherURL);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log('Error in fetching weather data', error);
  }
};

export { getCourses, getWeatherData };
