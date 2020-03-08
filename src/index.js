import menuData from "./modules/menuData";
import WeatherData from "./modules/weatherData";
import transitData from "./modules/transitData";
import NewsFeedData from "./modules/newsFeedData";
import FazerData from "./modules/fazerData";
import EventData from "./modules/eventData";

let weatherInterval;
let transitInterval;
let language = 'fi';

const video = document.querySelector('video');

const viewCarousel = (activeViewIndex, duration) => {
  const views = document.getElementsByClassName("main_content");
  const nav = document.querySelector("nav");
  const hamburgerMenu = document.querySelector(".hamburger-menu");

  for (const view of views) {
    view.style.display = "none";
  }

  views[activeViewIndex].style.display = "block";

  // Hide navbar from the video section
  if (activeViewIndex >= 2) {
    nav.style.display = "none";
    hamburgerMenu.style.display = "none";
  } else {
    nav.style.display = "flex";
  }

  let nextView = activeViewIndex + 1;

  if (nextView === views.length) {
    nextView = 0;
  }

  setTimeout(() => viewCarousel(nextView, duration), duration * 1000);
};

viewCarousel(0, 10);


const time = document.querySelector(".time");
let divTime = document.createElement("div");
time.appendChild(divTime);

const timeNow = () => {
  divTime.innerHTML= "";
  let time = new Date();
  let hours= time.getHours();
  let Minutes= time.getMinutes();

  if (hours<10){
    hours= "0"+hours;}
  if (Minutes<10){
    Minutes= "0"+Minutes;
  }

  const timeNow = hours + ":" + Minutes;
  divTime.innerHTML = timeNow;
};

setInterval(timeNow, 600);


const generalInfo = () => {
  EventData.displayEvent(language);
  NewsFeedData.displayNewsFeed(language);
};

const changeLanguage = () => {

  for (const langButton of languageButtons) {
    if (langButton.textContent === 'FI') {
      language = 'fi';
      langButton.textContent = 'EN';
    } else {
      language = 'en';
      langButton.textContent = 'FI';
    }
  }

  const currentCampus = campus.textContent;

  if (currentCampus === 'Myyrmäki') {
    myrtsi();
  } else if (currentCampus === 'Myllypuro') {
    myllypuro();
  } else if (currentCampus === 'Karaportti') {
    karaportti();
  } else {
    arabia();
  }

  generalInfo();
};

const campus = document.querySelector(".campus");
const languageButtons = document.querySelectorAll('.langbutton');

for (const langButton of languageButtons) {
  langButton.addEventListener('click', changeLanguage);
  langButton.addEventListener('ontouchstart', changeLanguage);
}


const hamburgerMenu = document.querySelector(".hamburger-menu");
const menuLogo = document.querySelector(".menuLogo");

const showingMenu = () => {
  if (hamburgerMenu.style.display === "flex") {
    hamburgerMenu.style.display = "none";
  } else {
    hamburgerMenu.style.display = "flex";
  }
};

menuLogo.addEventListener("click", showingMenu);
menuLogo.addEventListener("ontouchstart", showingMenu);


const pMyllypuro = document.querySelector(".myllypuro");
const pMyyrmaki = document.querySelector(".myyrmäki");
const pKaraportti = document.querySelector(".karaportti");
const pArabia = document.querySelector('.arabia');

const myrtsi = () => {
  campus.innerHTML = "Myyrmäki";

  console.log('cidoe', video.src);
  clearInterval(weatherInterval);
  clearInterval(transitInterval);

  WeatherData.displayWeatherData("01600");

  menuData.getInit(language, 152);

  // Call and update the weather every hour
  weatherInterval = setInterval(() => {
    WeatherData.displayWeatherData("01600");
  }, 60 * 60 * 1000);

  transitData.getTransitData("4150296");
  transitData.getTransitData("4150201");
  transitData.getTransitData("4150264");
  transitData.getTransitData("4150266");
  //Call every minute

  transitInterval = setInterval(() => {
    transitData.getTransitData("4150296");
    transitData.getTransitData("4150201");
    transitData.getTransitData("4150264");
    transitData.getTransitData("4150266");
  }, 60 * 1000);

  video.src = './assets/videot/myyrmaki_video2.mp4';
  video.play();

};

pMyyrmaki.addEventListener("click", myrtsi);
pMyyrmaki.addEventListener("ontouchstart", myrtsi);



const myllypuro = () => {
  campus.innerHTML = "Myllypuro";

  clearInterval(weatherInterval);
  clearInterval(transitInterval);

  menuData.getInit(language, 158);

  WeatherData.displayWeatherData("00920");

  // Call and update the weather every hour
  weatherInterval = setInterval(() => {
    WeatherData.displayWeatherData("00920");
  }, 60 * 60 * 1000);

  transitData.getTransitData("1454602");
  transitData.getTransitData("1454140");
  transitData.getTransitData("1454112");
  transitData.getTransitData("1454111");

  transitInterval = setInterval(() => {
    transitData.getTransitData("1454602");
    transitData.getTransitData("1454140");
    transitData.getTransitData("1454112");
    transitData.getTransitData("1454111");
  }, 60 * 1000);

  video.src = './assets/videot/myllypuro2_video.mp4';
  video.play();

};

pMyllypuro.addEventListener("click", myllypuro);
pMyllypuro.addEventListener("ontouchstart", myllypuro);





const karaportti = () => {
  campus.innerHTML = "Karaportti";

  clearInterval(weatherInterval);
  clearInterval(transitInterval);

  FazerData.displayFazerMenu(language);



  WeatherData.displayWeatherData("02610");

  // Call and update the weather every hour
  weatherInterval = setInterval(() => {
    WeatherData.displayWeatherData("02610");
  }, 60 * 60 * 1000);

  transitData.getTransitData("2132207");
  transitData.getTransitData("2132208");
  transitData.getTransitData("2132225");
  transitData.getTransitData("2132226");

  transitInterval = setInterval(() => {
    transitData.getTransitData("2132207");
    transitData.getTransitData("2132208");
    transitData.getTransitData("2132225");
    transitData.getTransitData("2132226");
  }, 60 * 1000);

  video.src = './assets/videot/karamalmi_video2.mp4';
  video.play();

};

pKaraportti.addEventListener("click", karaportti);
pKaraportti.addEventListener("ontouchstart", karaportti);




const arabia = () => {
  campus.innerHTML = 'Arabia';
  let menu = document.querySelector(".menu");
   menu.innerHTML="";
   menu.innerHTML= " Nettisivujen uudistuksessa ilmenneiden ongelmien takia emme valitettavasti saa tällä hetkellä ruokalistaa sivuille näkyviin. Korjaamme asiaa parhaillaan. Ruokalistoja voi noutaa tulosteveriona ravintolasta. Pahoittelemme tilannetta";
  WeatherData.displayWeatherData("00560");

  // Call and update the weather every hour
  weatherInterval = setInterval(() => {
    WeatherData.displayWeatherData("00560");
  }, 60 * 60 * 1000);

  transitData.getTransitData("1230101");
  transitData.getTransitData("1230104");
  transitData.getTransitData("1230103");
  transitData.getTransitData("1230102");

  transitInterval = setInterval(() => {
    transitData.getTransitData("1230101");
    transitData.getTransitData("1230104");
    transitData.getTransitData("1230103");
    transitData.getTransitData("1230102");
  }, 60 * 1000);

  video.src = './assets/videot/arabia_video2.mp4';
  video.play();

};

pArabia.addEventListener("click", arabia);
pArabia.addEventListener("ontouchstart", arabia);


myrtsi();
generalInfo();

