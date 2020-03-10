import { getFazerMenuData } from "./network";

/**
 * Display days Fazer-menu in correct language
 * @param {string} language wanted language of the menu
 */
const displayFazerMenu = async language => {
  const displayMenu = document.querySelector(".menu");
  displayMenu.innerHTML= "";

  // Get todays date in YYYY-MM-DD
  //const today = new Date().toISOString().slice(0, 10);
  const today = '2020-03-04';

  try {

    // Get menu-data, returns whole weeks menu
    const menuJSON = await getFazerMenuData(language, today);

    // Get the index of the current day
    const dayOfWeek = new Date().getDay();

    // Loop all courses of the day
    for (const setMenu of menuJSON.LunchMenus[dayOfWeek - 1].SetMenus) {
      // Save name of todays soup
      const soupOfTheDay = setMenu.Name;

      // Create HTML-elements for the courses
      const courses = document.createElement("div");
      const food = document.createElement("p");
      const allergies = document.createElement("p");

      // If the course contains several elements
      if (setMenu.Meals.length > 1) {
        // Loop all elements and add names and allergies to same p-element
        for (const meal of setMenu.Meals) {
          // If the dish is soup-lunch, add the name of the soup and the snacks on the same line
          if (soupOfTheDay) {
            food.innerHTML += `${soupOfTheDay}, ${meal.Name}<br>`;
          } else {
            food.innerHTML += `${meal.Name}<br>`;
          }

          allergies.innerHTML += meal.Diets.join(", ") + `<br>`;
        }

        // When course contains only one element, add the name and the allergies to own p-elements
      } else {
        // If the dish is soup-lunch, add the name of the soup and the snacks on the same line
        if (soupOfTheDay) {
          food.innerHTML = `${soupOfTheDay}, ${setMenu.Meals[0].Name}`;
        } else {
          food.innerHTML = setMenu.Meals[0].Name;
        }

        allergies.innerHTML = setMenu.Meals[0].Diets.join(", ");
      }

      // Append courses to HTML
      courses.appendChild(food);
      courses.appendChild(allergies);
      displayMenu.append(courses);
      courses.classList.add("fazerCourses");
    }

    // Add price-info
    const priceInfo = document.createElement('p');

    if (language === 'fi') {
      priceInfo.textContent = `Lounaan hinta opiskelijoille 1,80/2,60/4,95€,
                              Metropolian henkilökunnalle 4,50/5,90/6,90€
                              sekä muille lounastajille 5,50/6,90/8,90€.
                              Jälkiruokakahvi 1,00€ ja päivän jälkiruoka 1,20€.`;
    } else {
      priceInfo.textContent = `Lunch prices for the students 1,80/2,60/4,95€,
                              for Metropolia staff 4,50/5,90/6,90€
                              and for others 5,50/6,90/8,90€.
                              Coffee after meal 1,00€ and days dessert 1,20€. `;
    }


    priceInfo.classList.add('priceInfo');
    displayMenu.appendChild(priceInfo);

  } catch (error) {
    console.log('Error in displaying Fazer menu');
    displayMenu.innerHTML= "<img src='../assets/error_img_big.png' alt='error img'>";
  }
};

const FazerData = { displayFazerMenu };

export default FazerData;
