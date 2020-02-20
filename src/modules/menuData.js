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
      title.innerHTML= data.meta.ref_title;
        for(let i= 1; i<=objl; i++){
          let li = document.createElement("li");
          li.innerHTML= data.courses[i].title_fi;
          ul.appendChild(li);
        }
        menu.appendChild(title);
        menu.appendChild(ul);
    }catch (e) {
       console.log('error' + e);
     }

  };
  getCoursesSodexo();
};





const menuData = {getInit};

export default menuData;
