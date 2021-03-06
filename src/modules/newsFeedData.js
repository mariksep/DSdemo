import { getNewsFeedData } from "./network";

const englishNewsFeedURL = 'https://cors-anywhere.herokuapp.com/http://metkaweb.fi/category/ajankohtaista/feed/?lang=en';
const finnishNewsFeedURL = 'https://cors-anywhere.herokuapp.com/http://metkaweb.fi/category/ajankohtaista/feed/';

/**
 * Display first three news from METKAs RSS-feed in HTML in Finnish and in English
 */
const displayNewsFeed = async (language) => {

  const newsFeedSection = document.querySelector('.news');
  newsFeedSection.innerHTML= "";

  try {
    let responseXML;

    // Choose the correct language and get the XML-string
    if (language === 'fi') {
      responseXML = await getNewsFeedData(finnishNewsFeedURL);
    } else {
      responseXML = await getNewsFeedData(englishNewsFeedURL);
    }

    // Parse XML-string to DOM document
    const responseDocument = new DOMParser().parseFromString(responseXML, 'application/xml');

    let titleIndex = 2;
    let descriptionIndex = 1;

    // Create first three news
    for (let dateIndex = 0; dateIndex < 3; dateIndex++) {
      // Put every news to own articles
      const article = document.createElement('article');

      // Save info of the news to variables
      const title = responseDocument.getElementsByTagName('title')[titleIndex].textContent;
      let description = responseDocument.getElementsByTagName('description')[descriptionIndex].textContent;
      const date = responseDocument.getElementsByTagName('pubDate')[dateIndex].textContent;

      // If description contains square brackets in the end, remove them and replace with three dots
      if (description.charAt(description.length -1) === ']') {
        description = description.substring(0, description.length - 10) + '...';
      }

      // Convert published day to DD-MM-YYYY form
      let day = new Date(date);
      day = `${day.getDate()}.${day.getMonth()+1}.${day.getFullYear()}`;

      // Use saved variables as textContent for the created HTML-elements
      const header = document.createElement('h1');
      header.textContent = title;

      const publishDay = document.createElement('h5');
      publishDay.textContent = day;

      const content = document.createElement('p');
      content.textContent = description;

      // Append news to the article and HTML
      article.appendChild(header);
      article.appendChild(publishDay);
      article.appendChild(content);
      newsFeedSection.appendChild(article);

      titleIndex++;
      descriptionIndex++;
    }
  } catch (error) {
    console.log('Error in printing newsFeed', error);
    newsFeedSection.innerHTML= "<img src='../assets/error_img_big.png' alt='error img'>";
  }

};


const NewsFeedData = { displayNewsFeed };

export default NewsFeedData;
