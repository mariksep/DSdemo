import {getCourses} from './network';
const getInit = () =>{
let list=[];
let ul = document.createElement("ul");
let menu = document.querySelector(".menu");
  const getCoursesSodexo =async () => {
    try{
      const data = await getCourses();
      console.log( data);
      //lisätään ruoka per päivä listaan
      const objl = Object.keys(data.mealdates[0].courses).length;
      const title = document.createElement("h1");
      const date = document.createElement("h3");
      title.innerHTML= data.meta.ref_title;
      date.innerHTML=data.mealdates[0].date;
        for(let i= 1; i<=objl; i++){
          let li = document.createElement("li");
          //list.push(data.mealdates[0].courses[i].title_fi);
          li.innerHTML= data.mealdates[0].courses[i].title_fi;
          ul.appendChild(li);
        }
        menu.appendChild(title);
        menu.appendChild(date);
        menu.appendChild(ul);
    }catch (e) {
       console.log('error' + e);
     }

  };
  getCoursesSodexo();
};







const Data = {getInit};

export default Data;
