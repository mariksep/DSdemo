import {getCourses} from './network';

/**
 * Display current lunch data in fin
 */

let title = document.querySelector(".title");
/*Saa indexistä muutujat lang(kieli) ja num toimipaikan  */
const getInit = async (lang, num) =>{
    let menu = document.querySelector(`.menu`);
    const img = document.createElement("div");

    try{

      /*Hakee toimipaikka kohtaisen menun num muuttujan avulla
      - jos myllypuron nro niin poistaa elementin 1
      */
      const data = await getCourses(num);
      const objl = Object.keys(data.courses).length;
      /*Tulostaa toimipaikan nimen

      title.innerHTML= data.meta.ref_title;
*/

      let i = 1;
      if(num=== 158){
        i = 2;
      }
      menu.innerHTML= "";
      img.classList.add('img');
    //  menu.appendChild(img);

    const logo = document.createElement('div');
    logo.classList.add('sodexoLogo');
    menu.appendChild(logo);

    for(i; i<=objl; i++){
          let  courses = document.createElement("div");
          let  coursesCategory = document.createElement("div");
          coursesCategory.classList.add("coursesCategory");

          let food = document.createElement("p");
          let properties = document.createElement("p");
          let price = document.createElement("p");
          let foodTheme =  document.createElement("p");

          /*Lang avulla tulostaa oikean kielisen menun*/
        if(lang==='fi'){
          foodTheme.innerHTML = data.courses[i].category;
           food.innerHTML=  data.courses[i].title_fi;
           properties.innerHTML ='<strong>'+data.courses[i].properties +'</strong>';
           price.innerHTML= data.courses[i].price ;
           coursesCategory.appendChild(foodTheme);
           courses.appendChild(food);
           courses.appendChild(price);
           courses.appendChild(properties);

            menu.appendChild(coursesCategory);
            menu.appendChild(courses);
        }else{
          foodTheme.innerHTML = data.courses[i].category;
          food.innerHTML=  data.courses[i].title_en;
          properties.innerHTML =data.courses[i].properties;
          price.innerHTML= data.courses[i].price ;
          coursesCategory.appendChild(foodTheme);
          courses.appendChild(food);
          courses.appendChild(price);
          courses.appendChild(properties);

           menu.appendChild(coursesCategory);
           menu.appendChild(courses);


        }
        courses.classList.add("courses");
        }
    }catch (e) {
       console.log('Error in displaying Sodexo menu');
       menu.innerHTML= "<img src='../assets/error_img_big.png' alt='error img' >";
     }
  };
const menuData = {getInit};

export default menuData;
