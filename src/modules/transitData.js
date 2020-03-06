import {getTransit} from './network';

/**
 *  hakee tiedot hsl apista pysäkki id:llä
 */
 /* Hakee div elementin johon kaikki lopuksi tulostetaan*/
 let container = document.querySelector(".transit");


const getTransitData = async(id) =>{

      /*Luo divin jonka sisälle luodaan jokainen p elemennti */
      let TransitList = document.createElement("div");
      TransitList.classList.add(`B${id}`);
      TransitList.classList.add(`bussiData`);

      /*luo h1 elementin johän laitetaan pysäkin nimi */
      let title = document.createElement("h1");
      title.classList.add(`T${id}`);
      /*tyhjentää containerin */
      container.innerHTML= "";




      try{
        /* hakee network js tiedot*/
          let data = await getTransit(id);
          const objl = Object.keys(data.data.stop.stoptimesWithoutPatterns).length;
          title.innerHTML= data.data.stop.name+ ", "+data.data.stop.desc ;
            /*luo elementin johon laitetaan pysäkin nimi ja div jonka sisällä on aikataulu */
            const card = document.createElement("div");
            card.classList.add("card");
            for(let i = 0; i<objl; i++){
            let p = document.createElement("p");
            /*muuttaa saadut sekuntit kelloajaksi*/
            let tunnit =Math.floor(data.data.stop.stoptimesWithoutPatterns[i].realtimeDeparture/60/60);
            let minuutit= (((data.data.stop.stoptimesWithoutPatterns[i].realtimeDeparture/60/60)-tunnit)*60).toFixed(0);
            if (tunnit<10){
              tunnit= "0"+tunnit;
            }
            if (minuutit<10){
              minuutit= "0"+minuutit;
            }
            let arrivalTime= tunnit+":"+ minuutit;
            /* lisää p elementtiin bussin numeron ajan jolloin bussi on pysäkillä ja sunnan johon bussi on menossa*/
            p.innerHTML="<strong>"+ data.data.stop.stoptimesWithoutPatterns[i].trip.route.shortName+ "&emsp;" +"</strong>"
             + " <strong>"  +arrivalTime +"</strong>"+ "&emsp;"+ data.data.stop.stoptimesWithoutPatterns[i].headsign;
            /* lisätään p elementit diviin ja divi ja title cardsiin*/
            TransitList.appendChild(p);
            card.appendChild(title);
            card.appendChild(TransitList);
          }
          /*Card div lisätään containeriin */
          container.appendChild(card);

      }catch (e) {
         console.log('error' + e);
       }


    };

const dataTransit = {getTransitData};

export default dataTransit;
