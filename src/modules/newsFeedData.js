import { getNewsFeedData } from "./network";

/**
 * Display first three news from METKAs RSS-feed in HTML
 */
const displayNewsFeed = async () => {
  // Get XML-string and parse it into a DOM document
  const responseXML = await getNewsFeedData();
  const responseDocument = new DOMParser().parseFromString(responseXML, 'application/xml');

  let titleIndex = 2;
  let descriptionIndex = 1;

  const newsFeedSection = document.querySelector('.newsFeed');

  console.log(responseDocument);
  // Create first three news
  for (let dateIndex = 0; dateIndex < 3; dateIndex++) {
    // Put every news to own articles
    const article = document.createElement('article');

    // Save info of the news to variables
    const title = responseDocument.getElementsByTagName('title')[titleIndex].textContent;
    const description = responseDocument.getElementsByTagName('description')[descriptionIndex].textContent;
    const date = responseDocument.getElementsByTagName('pubDate')[dateIndex].textContent;

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
};


const NewsFeedData = { displayNewsFeed };

export default NewsFeedData;
