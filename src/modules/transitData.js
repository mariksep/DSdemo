import {getTransitO, getTransitV} from './network';

/**
 *  hakee tiedot hsl apista pysäkki numerolla 4150296 (pois päin myyrmäestä)
 */


const getTransitDataV = () =>{
  let ul = document.createElement("ul");
  let menu = document.querySelector(".transitV");
    const getDataV=async () => {
      try{
        /* hakee network js tiedot*/
        let data = await getTransitV();
        const objl = Object.keys(data.data.stop.stoptimesWithoutPatterns).length;
        const title = document.createElement("h1");
        let h=document.createElement("h3");

            title.innerHTML= data.data.stop.name + " V1596";
            h.innerHTML = data.data.stop.desc;
          for(let i = 0; i<objl; i++){
            let li = document.createElement("li");

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
            /* lisää li elementtiin bussin numeron ajan jolloin bussi on pysäkillä ja sunnan johon bussi on menossa*/
            li.innerHTML= data.data.stop.stoptimesWithoutPatterns[i].trip.route.shortName +
            " "+ data.data.stop.stoptimesWithoutPatterns[i].headsign + " Saapumisaika: " +  arrivalTime ;
            ul.appendChild(li);
          }

          menu.appendChild(title);
          menu.appendChild(h);
          menu.appendChild(ul);
      }catch (e) {
         console.log('error' + e);
       }

    };
    getDataV();
  };

/* hakee tiedot hsl apista pysäkki numerolla 4150201 (myyrmäen juna-asemaa kohden)*/
  const getTransitDataO = () =>{
    let ul = document.createElement("ul");
    let menu = document.querySelector(".transitO");
      const getDataO=async () => {
        /* hakee network js tiedot*/
        try{
          let data = await getTransitO();
          const objl = Object.keys(data.data.stop.stoptimesWithoutPatterns).length;
          const title = document.createElement("h1");
          let h=document.createElement("h3");

          title.innerHTML= data.data.stop.name + " V1501";
          h.innerHTML = data.data.stop.desc;
            for(let i = 0; i<objl; i++){
              let li = document.createElement("li");

              /*muuttaa saadut sekuntit kelloajaksi*/
              let tunnit =Math.floor(data.data.stop.stoptimesWithoutPatterns[i].realtimeDeparture/60/60);
              let minuutit= (((data.data.stop.stoptimesWithoutPatterns[i].realtimeDeparture/60/60)-tunnit)*60).toFixed(0);
              if (tunnit<10){
                tunnit= "0"+tunnit;
              }
              if (minuutit<10){
                minuutit= "0"+minuutit;
              }
              let arrivalTime= tunnit+":"+minuutit;
              /* lisää li elementtiin bussin numeron ajan jolloin bussi on pysäkillä ja sunnan johon bussi on menossa*/
              li.innerHTML= data.data.stop.stoptimesWithoutPatterns[i].trip.route.shortName+
              " "+ data.data.stop.stoptimesWithoutPatterns[i].headsign +" Saapumisaika: " +  arrivalTime ;

              ul.appendChild(li);
            }

            menu.appendChild(title);
            menu.appendChild(h);
            menu.appendChild(ul);
        }catch (e) {
           console.log('error' + e);
         }

      };
      getDataO();
    };

const dataTransit = {getTransitDataV, getTransitDataO};

export default dataTransit;
