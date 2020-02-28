import {getTransit} from './network';

/**
 *  hakee tiedot hsl apista pysäkki numerolla 4150296 (pois päin myyrmäestä)
 */


const getTransitData = async(id) =>{
      let menu = document.querySelector(`.B${id}`);
      let title = document.querySelector(`.T${id}`);
      try{
        /* hakee network js tiedot*/
        let data = await getTransit(id);
          const objl = Object.keys(data.data.stop.stoptimesWithoutPatterns).length;
           title.innerHTML= data.data.stop.name;
            let h=document.createElement("h3");
            h.innerHTML = data.data.stop.desc;
            menu.appendChild(h);

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
            p.innerHTML="<strong>"+ data.data.stop.stoptimesWithoutPatterns[i].trip.route.shortName+"</strong>"
             + " <strong>" +  arrivalTime +"</strong>"+" "+ data.data.stop.stoptimesWithoutPatterns[i].headsign;
            menu.appendChild(p);
          }
      }catch (e) {
         console.log('error' + e);
       }


    };


const dataTransit = {getTransitData};

export default dataTransit;
