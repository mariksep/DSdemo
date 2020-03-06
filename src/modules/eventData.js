
const displayEvent = (language) => {

  // Get parent-elements from HTML
  const eventsNameDiv = document.querySelector('.eventsName');
  const eventInfo = document.querySelector('.info');

  eventsNameDiv.innerHTML = '';
  eventInfo.innerHTML = '';

  // Create new elements for event-contents
  const header = document.createElement('h1');
  const infoText = document.createElement('p');

  if (language === 'fi') {
    header.textContent = 'Fulbright Suomi -säätiön stipendiohjelma kanditason opintoihin nyt haussa!';
    infoText.textContent = `Fulbright Finland Undergraduate Grant -stipendiohjelma on nyt haussa
                            alemman korkeakoulututkinnon tasoisiin opintoihin lukuvuodelle 2020-2021.
                            Tutustu tarkemmin lähettilään rooliin,
                            ohjelman etuihin ja hakuohjeisiin Fulbright Suomi -säätiön verkkosivuilla
                            www.fulbright.fi/undergraduate, ja hae ohjelmaan 6.4.2020 klo 10:00 mennessä.`;
  } else {
    header.textContent = 'Fulbright Finland Undergraduate Grant!';
    infoText.textContent = `The Fulbright Finland Undergraduate Grant Scholarship Program is now available
                            for undergraduate degrees for the academic year 2020-2021.
                            Find out more about the role of the Ambassador, the benefits of the program,
                            and how to apply on the Fulbright Finland Foundation website at www.fulbright.com/undergraduate.
                            Apply for the program by 6.4.2020 on 10:00am.`;
  }

  eventsNameDiv.appendChild(header);
  eventInfo.appendChild(infoText);

};

const EventData = { displayEvent };

export default EventData;
