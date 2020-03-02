import menuData from "./modules/menuData";
import WeatherData from "./modules/weatherData";
import transitData from "./modules/transitData";
import NewsFeedData from "./modules/newsFeedData";

let weatherInterval;
let tarnsitInterval;

const viewCarousel = (activeViewIndex, duration) => {
  const views = document.getElementsByClassName('main_content');
  for (const view of views) {
    view.style.display = 'none';
  }
  views[activeViewIndex].style.display = 'block';
  let nextView = activeViewIndex + 1;
  if (nextView === views.length) {
    nextView = 0;
  }
  setTimeout(() => viewCarousel(nextView, duration), duration * 1000);
};
viewCarousel(0, 10);


const pMyllypuro = document.querySelector(".myllypuro");
const pMyyrmaki = document.querySelector(".myyrmäki");

const myrtsi = () => {
  clearInterval(weatherInterval);
  clearInterval(tarnsitInterval);

  menuData.getInit('fin', 152);
  menuData.getInit('en', 152);

  WeatherData.displayWeatherData('01600', 0);
  // Call and update the weather every hour
  weatherInterval = setInterval(() => {
    WeatherData.displayWeatherData('01600', 0);
  }, 60*60*1000);

  transitData.getTransitData('4150296');
  transitData.getTransitData('4150201');
  transitData.getTransitData('4150264');
  transitData.getTransitData('4150266');
  //Call every minute

  tarnsitInterval = setInterval(() =>{
  transitData.getTransitData('4150296');
  transitData.getTransitData('4150201');
  transitData.getTransitData('4150264');
  transitData.getTransitData('4150266');
  }, 60*1000);

  NewsFeedData.displayNewsFeed('finnish');
  NewsFeedData.displayNewsFeed('english');
};

pMyyrmaki.addEventListener('click', myrtsi);
pMyyrmaki.addEventListener('touches', myrtsi);


myrtsi();

const myllypuro = () => {
  clearInterval(weatherInterval);
  clearInterval(tarnsitInterval);

  menuData.getInit('fin', 158);
  menuData.getInit('en', 158 );


  WeatherData.displayWeatherData('00920', 1);
  // Call and update the weather every hour
  weatherInterval = setInterval(() => {
    WeatherData.displayWeatherData('00920', 1);
  }, 60*60*1000);

  transitData.getTransitData('1454602');
  transitData.getTransitData('1454140');
  transitData.getTransitData('1454112');
  transitData.getTransitData('1454111');

  tarnsitInterval = setInterval(() =>{
  transitData.getTransitData('1454602');
  transitData.getTransitData('1454140');
  transitData.getTransitData('1454112');
  transitData.getTransitData('1454111');
    }, 60*1000);
};
pMyllypuro.addEventListener('click', myllypuro);
pMyllypuro.addEventListener('touches', myllypuro);



