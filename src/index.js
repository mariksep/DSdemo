import menuData from "./modules/menuData";
import WeatherData from "./modules/weatherData";
import transitData from "./modules/transitData";
import NewsFeedData from "./modules/newsFeedData";

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




menuData.getInit();
menuData.getInitE();

WeatherData.displayWeatherData();
//Call every hour
setInterval(WeatherData.displayWeatherData, 60*60*1000);

transitData.getTransitDataV();
transitData.getTransitDataO();
setInterval(transitData.getTransitDataV, 60*1000);
setInterval(transitData.getTransitDataO, 60*1000);


NewsFeedData.displayNewsFeed();
