import {getTransitO, getTransitV} from './network';

/**
 *  hakee tiedot hsl apista pysäkki numerolla 4150296 (pois päin myyrmäestä)
 */


const getTransitDataV = () =>{
  let menu = document.querySelector(".transitV");
  let title = document.querySelector(".titleTV");

    const getDataV=async () => {
      menu.innerHTML= "";
      try{
        /* hakee network js tiedot*/
        let data = await getTransitV();
        const objl = Object.keys(data.data.stop.stoptimesWithoutPatterns).length;
        title.innerHTML= data.data.stop.name + " V1596";
        let h=document.createElement("h3");
        menu.appendChild(h);
        h.innerHTML = data.data.stop.desc;


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
            /* lisää li elementtiin bussin numeron ajan jolloin bussi on pysäkillä ja sunnan johon bussi on menossa*/
            p.innerHTML="<strong>"+ data.data.stop.stoptimesWithoutPatterns[i].trip.route.shortName+"</strong>  " +
            " "+ data.data.stop.stoptimesWithoutPatterns[i].headsign + " <strong>" +  arrivalTime +"</strong>";
            menu.appendChild(p);
          }


      }catch (e) {
         console.log('error' + e);
       }

    };
    getDataV();
  };

/* hakee tiedot hsl apista pysäkki numerolla 4150201 (myyrmäen juna-asemaa kohden)*/
  const getTransitDataO = () =>{
    let menu = document.querySelector(".transitO");
    const title = document.querySelector(".titleTO");

      const getDataO=async () => {
        menu.innerHTML= "";
        /* hakee network js tiedot*/
        try{
          let data = await getTransitO();
          const objl = Object.keys(data.data.stop.stoptimesWithoutPatterns).length;
          let h=document.createElement("h3");
          menu.appendChild(h);
          title.innerHTML= data.data.stop.name + " V1501";
          h.innerHTML = data.data.stop.desc;
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
              let arrivalTime= tunnit+":"+minuutit;
              /* lisää li elementtiin bussin numeron ajan jolloin bussi on pysäkillä ja sunnan johon bussi on menossa*/
              p.innerHTML= "<strong>"+ data.data.stop.stoptimesWithoutPatterns[i].trip.route.shortName+"</strong>  " +
              " "+ data.data.stop.stoptimesWithoutPatterns[i].headsign +" <strong>" +  arrivalTime +"</strong>" ;

              menu.appendChild(p);
            }


        }catch (e) {
           console.log('error' + e);
         }

      };
      getDataO();
    };

const dataTransit = {getTransitDataV, getTransitDataO};

export default dataTransit;
