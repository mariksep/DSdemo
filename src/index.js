import menuData from "./modules/menuData";
import WeatherData from "./modules/weatherData";
import transitData from "./modules/transitData";
import NewsFeedData from "./modules/newsFeedData";
import FazerData from './modules/fazerData';

let weatherInterval;
let transitInterval;
let campus = document.querySelector(".campus");

const viewCarousel = (activeViewIndex, duration) => {
  const views = document.getElementsByClassName('main_content');
  const nav = document.querySelector('nav');
  const hamburgerMenu = document.querySelector('.hamburger-menu');

  for (const view of views) {
    view.style.display = 'none';
  }

  views[activeViewIndex].style.display = 'block';

  // Hide navbar from the news and video sections
  if (activeViewIndex === 3 || activeViewIndex === 2) {
    nav.style.display = 'none';
    hamburgerMenu.style.display = 'none';

  } else {
    nav.style.display = 'flex';
  }

  let nextView = activeViewIndex + 1;

  if (nextView === views.length) {
    nextView = 0;
  }

  setTimeout(() => viewCarousel(nextView, duration), duration * 1000);
};
viewCarousel(0, 10);






const hamburgerMenu = document.querySelector(".hamburger-menu");
const menuLogo = document.querySelector(".menuLogo");

const pMyllypuro = document.querySelector(".myllypuro");
const pMyyrmaki = document.querySelector(".myyrmäki");
const pKaraportti = document.querySelector(".karaportti");


const buttonMyrtsi = document.querySelector(".buttonMyrtsi");
const buttonMyllypuro = document.querySelector(".buttonMyllypuro");
const buttonKaraportti = document.querySelector(".buttonKaraportti");



const showingMenu= ()=>{
  if (hamburgerMenu.style.display === "flex") {
    hamburgerMenu.style.display = "none";
  } else {
    hamburgerMenu.style.display = "flex";
  }
};
menuLogo.addEventListener('click', showingMenu);



const myrtsi = () => {
  let lang = "Fi";
  buttonMyrtsi.innerHTML=`${lang}`;
  campus.innerHTML="Myyrmäki";

  buttonMyrtsi.style.display='flex';
  buttonMyllypuro.style.display='none';
  buttonKaraportti.style.display='none';




  clearInterval(weatherInterval);
  clearInterval(transitInterval);

  WeatherData.displayWeatherData('01600');
  menuData.getInit('fin', 152);

  // Call and update the weather every hour
  weatherInterval = setInterval(() => {
    WeatherData.displayWeatherData('01600');
  }, 60*60*1000);

  transitData.getTransitData('4150296');
  transitData.getTransitData('4150201');
  transitData.getTransitData('4150264');
  transitData.getTransitData('4150266');
  //Call every minute

  transitInterval = setInterval(() =>{
  transitData.getTransitData('4150296');
  transitData.getTransitData('4150201');
  transitData.getTransitData('4150264');
  transitData.getTransitData('4150266');
  }, 60*1000);

  NewsFeedData.displayNewsFeed('finnish');


 const langButton = ()=>{
   if(lang=='En'){
     lang ='Fi';
     menuData.getInit('fin', 152);
     NewsFeedData.displayNewsFeed('finnish');
   }else{
     lang ='En';
     menuData.getInit('en', 152);
     NewsFeedData.displayNewsFeed('english');
   }
   buttonMyrtsi.innerHTML=`${lang}`;

 };

 buttonMyrtsi.addEventListener('click', langButton);

};


pMyyrmaki.addEventListener('click', myrtsi);
pMyyrmaki.addEventListener('ontouchstart', myrtsi);


myrtsi();
const myllypuro = () => {
 let lang= 'Fi';
 buttonMyllypuro.innerHTML=`${lang}`;
 campus.innerHTML="Myllypuro";


 buttonMyllypuro.style.display='flex';
 buttonMyrtsi.style.display='none';
 buttonKaraportti.style.display='none';


  clearInterval(weatherInterval);
  clearInterval(transitInterval);

  menuData.getInit('fin', 158);

  WeatherData.displayWeatherData('00920');
  // Call and update the weather every hour
  weatherInterval = setInterval(() => {
    WeatherData.displayWeatherData('00920');
  }, 60*60*1000);

  transitData.getTransitData('1454602');
  transitData.getTransitData('1454140');
  transitData.getTransitData('1454112');
  transitData.getTransitData('1454111');

  transitInterval = setInterval(() =>{
  transitData.getTransitData('1454602');
  transitData.getTransitData('1454140');
  transitData.getTransitData('1454112');
  transitData.getTransitData('1454111');
    }, 60*1000);


    const langButton = ()=>{
      if(lang=='En'){
        lang ='Fi';
        menuData.getInit('fin', 158);
        NewsFeedData.displayNewsFeed('finnish');
      }else{
        lang ='En';
        menuData.getInit('en', 158);
        NewsFeedData.displayNewsFeed('english');
      }
    buttonMyllypuro.innerHTML=`${lang}`;

    };
    buttonMyllypuro.addEventListener('click', langButton);

};


pMyllypuro.addEventListener('click', myllypuro);
pMyllypuro.addEventListener('ontouchstart', myllypuro);




const karaportti = () => {
  let lang= 'Fi';
  buttonKaraportti.innerHTML=`${lang}`;
  campus.innerHTML="Karaportti";


  buttonKaraportti.style.display='flex';
  buttonMyrtsi.style.display='none';
  buttonMyllypuro.style.display='none';


   clearInterval(weatherInterval);
   clearInterval(transitInterval);

   FazerData.displayFazerMenu('fi');

   WeatherData.displayWeatherData('00920');
   // Call and update the weather every hour

   weatherInterval = setInterval(() => {
     WeatherData.displayWeatherData('02610');
   }, 60*60*1000);

   transitData.getTransitData('2132207');
   transitData.getTransitData('2132208');
   transitData.getTransitData('2132225');
   transitData.getTransitData('2132226');

   transitInterval = setInterval(() =>{
    transitData.getTransitData('2132207');
    transitData.getTransitData('2132208');
    transitData.getTransitData('2132225');
    transitData.getTransitData('2132226');
     }, 60*1000);


     const langButton = ()=>{
       if(lang=='En'){
         lang ='Fi';
         FazerData.displayFazerMenu('fi');

         NewsFeedData.displayNewsFeed('finnish');
       }else{
         lang ='En';
         FazerData.displayFazerMenu('en');

         NewsFeedData.displayNewsFeed('english');
       }
     buttonKaraportti.innerHTML=`${lang}`;

     };
     buttonKaraportti.addEventListener('click', langButton);

 };

pKaraportti.addEventListener('click', karaportti);
pKaraportti.addEventListener('ontouchstart', karaportti);
