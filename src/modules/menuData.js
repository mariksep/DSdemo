import {getCourses} from './network';

/**
 * Display current lunch data in fin
 */

let title = document.querySelector(".title");
/*Saa indexistä muutujat lang(kieli) ja num toimipaikan  */
const getInit = async (lang, num) =>{
    let menu = document.querySelector(`.menu${lang}`);
    menu.innerHTML= "";
    try{
      /*Hakee toimipaikka kohtaisen menun num muuttujan avulla*/
      const data = await getCourses(num);
      const objl = Object.keys(data.courses).length;
      /*Tulostaa toimipaikan nimen */
      title.innerHTML= data.meta.ref_title;
    for(let i= 1; i<=objl; i++){
          let p = document.createElement("p");
          /*Lang avulla tulostaa oikean kielisen menun*/
        if(lang==='fin'){
          p.innerHTML=  data.courses[i].title_fi  +"<br>"+data.courses[i].properties +"<br>"+data.courses[i].price ;
          menu.appendChild(p);
        }else{
          p.innerHTML=  data.courses[i].title_en +"<br>"+data.courses[i].properties+"<br>" +data.courses[i].price ;
          menu.appendChild(p);
        }
        }
    }catch (e) {
       console.log('error' + e);
     }
  };
const menuData = {getInit};

export default menuData;
