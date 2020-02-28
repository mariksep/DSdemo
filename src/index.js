import menuData from "./modules/menuData";
import WeatherData from "./modules/weatherData";
import transitData from "./modules/transitData";
import NewsFeedData from "./modules/newsFeedData";
/*
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
*/
const pMyllypuro = document.querySelector(".myllypuro");
const pMyyrmäki = document.querySelector(".myyrmäki");

 const myrtsi = () =>{


    menuData.getInit('fin', 152);
    menuData.getInit('en', 152);
    WeatherData.displayWeatherData();
    //Call every hour
    setInterval(WeatherData.displayWeatherData, 60*60*1000);
    transitData.getTransitData('4150296');
    transitData.getTransitData('4150201');
    transitData.getTransitData('4150264');
    transitData.getTransitData('4150266');
    //Call every minute
    //setInterval(transitData.getTransitData, 60*1000);
    NewsFeedData.displayNewsFeed('finnish');
    NewsFeedData.displayNewsFeed('english');

};
pMyyrmäki.addEventListener('click', myrtsi);
myrtsi();

const myllypuro = ()=>{
  menuData.getInit('fin', 158);
  menuData.getInit('en', 158 );
  transitData.getTransitData('1454602');
  transitData.getTransitData('1454140');
  transitData.getTransitData('1454112');
  transitData.getTransitData('1454111');
  setInterval(transitData.getTransitData, 60*1000);
};

 pMyllypuro.addEventListener('click', myllypuro);



/*
* Default myyrmäki


menuData.getInit('fin', 152);
menuData.getInit('en', 152);

WeatherData.displayWeatherData();
//Call every hour
setInterval(WeatherData.displayWeatherData, 60*60*1000);

transitData.getTransitData('4150296');
transitData.getTransitData('4150201');
transitData.getTransitData('4150264');
transitData.getTransitData('4150266');
//Call every minute
setInterval(transitData.getTransitData, 60*1000);

NewsFeedData.displayNewsFeed('finnish');
NewsFeedData.displayNewsFeed('english');

*/
