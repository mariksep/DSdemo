import {getCourses} from './network';


/**
 * Display current lunch data in fin
 */
let title = document.querySelector(".title");
const getInit = () =>{
let menu = document.querySelector(".menu");
  const getCoursesSodexo =async () => {
    try{
      const data = await getCourses();
      const objl = Object.keys(data.courses).length;
      title.innerHTML= data.meta.ref_title;
        for(let i= 1; i<=objl; i++){
          let p = document.createElement("p");
          p.innerHTML=  data.courses[i].title_fi  +"<br>"+data.courses[i].properties +"<br>"+data.courses[i].price ;
        menu.appendChild(p);
        }

    }catch (e) {
       console.log('error' + e);
     }

  };
  getCoursesSodexo();
};
/**
 * Display current lunch data  in En
 */
const getInitE = () =>{
let menu = document.querySelector(".menuE");
  const getCoursesSodexo =async () => {
    try{
      const data = await getCourses();
      const objl = Object.keys(data.courses).length;
        for(let i= 1; i<=objl; i++){
          let p = document.createElement("p");
          p.innerHTML=  data.courses[i].title_en +"<br>"+data.courses[i].properties+"<br>" +data.courses[i].price ;
        menu.appendChild(p);
        }

    }catch (e) {
       console.log('error' + e);
     }

  };
  getCoursesSodexo();
};






const menuData = {getInit, getInitE};

export default menuData;
