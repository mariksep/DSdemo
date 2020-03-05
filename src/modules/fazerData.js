import { getFazerMenuData } from "./network";

const displayFazerMenu = async language => {

  const displayMenu = document.querySelector(".menufin");

  // Get todays date in YYYY-MM-DD
  const today = new Date().toISOString().slice(0, 10);

  try {
    // Get menu-data, returns whole weeks menu
    const menuJSON = await getFazerMenuData(language, today);

    // Get the index of the current day
    const dayOfWeek = new Date().getDay();

    // Loop all courses of the day
    menuJSON.LunchMenus[dayOfWeek - 1].SetMenus.map(
      setMenu => {
        // Save name of todays soup
        const soupOfTheDay = setMenu.Name;

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

          // When course contains only one element, add the name and the allergies to p-elements
        } else {
          // If the dish is soup-lunch, add the name of the soup and the snacks on the same line
          if (soupOfTheDay) {
            food.innerHTML = `${soupOfTheDay}, ${setMenu.Meals[0].Name}`;
          } else {
            food.innerHTML = setMenu.Meals[0].Name;
          }

          allergies.innerHTML =setMenu.Meals[0].Diets.join(", ");
        }

        // Append to HTML
        courses.appendChild(food);
        courses.appendChild(allergies);
        displayMenu.append(courses);
        courses.classList.add("courses");

      }
    );
  } catch (error) {
    console.log("Error in displaying Fazer menu", error);
  }
};

const FazerData = { displayFazerMenu };

export default FazerData;
