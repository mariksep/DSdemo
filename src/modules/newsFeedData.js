import { getNewsFeedData } from "./network";

const newsDiv = document.querySelector('.newsFeed');

const displayNewsFeed = async () => {
  const response = await getNewsFeedData();
  const responseDoc = new DOMParser().parseFromString(response, 'application/xml');

  let j = 2;
  for (let i = 1; i < 4; i++) {
    const article = document.createElement('article');
    const tagi = responseDoc.getElementsByTagName('title')[j].textContent;
    const desc = responseDoc.getElementsByTagName('description')[i].textContent;
    let date = responseDoc.getElementsByTagName('pubDate')[i].textContent;

    console.log('tagi,', tagi);
    let day = new Date(date);
    console.log(`${day.getDate()}.${day.getMonth()+1}.${day.getFullYear()}`);
    day = `${day.getDate()}.${day.getMonth()+1}.${day.getFullYear()}`;

    const h1 = document.createElement('h1');
    h1.textContent = tagi;
    const h6 = document.createElement('h6');
    h6.textContent = day;
    const p = document.createElement('p');
    p.textContent = desc;
    article.appendChild(h1);
    article.appendChild(h6);
    article.append(p);
    j++;
    newsDiv.appendChild(article);
  }
};


const NewsFeedData = { displayNewsFeed };

export default NewsFeedData;
