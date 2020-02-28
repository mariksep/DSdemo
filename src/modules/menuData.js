import {getCourses} from './network';


/**
 * Display current lunch data in fin
 */
let title = document.querySelector(".title");
const getInit = async (lang) =>{
let menu = document.querySelector(`.menu${lang}`);

    try{
      const data = await getCourses();
      const objl = Object.keys(data.courses).length;
      title.innerHTML= data.meta.ref_title;

    for(let i= 1; i<=objl; i++){
          let p = document.createElement("p");
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
