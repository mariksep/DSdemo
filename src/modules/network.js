/**
 *  Fetch current lunch-data  and convert it to json
 */
const getCourses = async (num) => {
  let response;
  /* searches for the current day*/
  let date = new Date();
  let  year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  let nowM = (month+1);
  /* if day or month is <10 adds 0 (exmp. 01 )*/
  if(day<10){day="0"+day;};
  if(nowM<10){nowM="0"+nowM;};
  /* date in order YYYY-MM-DD*/
  let nowDate = year+"-"+nowM+"-"+day;
  try {
    response = await fetch("https://www.sodexo.fi/ruokalistat/output/daily_json/"+`${num}` +"/"+nowDate);
    let data = await response.json();
    return data;
  } catch (error) {
    console.error('error', error.message);
  }
};


/**
 *  Fetch current weather-data and convert it to json
 */
const getWeatherData = async (url) => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log('Error in fetching weather data', error);
  }
};


/**
 *  Fetch current transit-data  and convert it to json
 *
 */
const getTransit = async (id)=>{
  let response;
  try {
    response = await fetch('https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql',
    {
      method: 'POST',
      headers: {'Content-Type': 'application/graphql'},
      body: `{
        stop(id: "HSL:${id}") {
          name
          desc
          stoptimesWithoutPatterns {
          realtimeDeparture
          headsign
            realtimeArrival
            trip {
              route {
                shortName
              }
            }

          }
        }
      }
      `, });

    let data = await response.json();
    return data;
  } catch (error) {
    console.error('error', error.message);
  }
};



/**
 *  Get news from METKAs RSS-feed and convert to XML-string
 */
const getNewsFeedData = async (url) => {
  try {
    const data = await fetch(url);
    const xml = await data.text();
    return xml;
  } catch (error) {
    console.log('Error in getting newsFeed-data', error);
  }
};


/**
 *  Fetch days Fazer-menu and convert it to json
 */
const getFazerMenuData = async (language, day) => {
  try {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const data = await fetch(`${proxy}https://www.fazerfoodco.fi/api/restaurant/menu/week?language=${language}&restaurantPageId=270540&weekDate=${day}`);
    const json = await data.json();
    return json;
  } catch (error) {
    console.log('Error in fetching Fazer menu', error);
  }
};


export { getCourses, getWeatherData, getTransit, getNewsFeedData, getFazerMenuData };
