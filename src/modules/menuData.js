import {getCourses} from './network';


/**
 * Display current lunch data in HTML
 */
const getInit = () =>{
let ul = document.createElement("ul");
let menu = document.querySelector(".menu");
  const getCoursesSodexo =async () => {
    try{
      const data = await getCourses();
      const objl = Object.keys(data.courses).length;
      const title = document.createElement("h1");
       menu.appendChild(title);
      title.innerHTML= data.meta.ref_title;
        for(let i= 1; i<=objl; i++){
          let p = document.createElement("p");
          p.innerHTML= data.courses[i].title_fi;
        menu.appendChild(p);
        }

    }catch (e) {
       console.log('error' + e);
     }

  };
  getCoursesSodexo();
};





const menuData = {getInit};

export default menuData;
