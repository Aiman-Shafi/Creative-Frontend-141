const searchBtn = document.getElementById("basic-addon1");

function fetchMeal() {
  let searchMeal = document.getElementById("searchMeal");
  if (searchMeal.value) {
    const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal.value}`;

    searchMeal.value = "";

    fetch(URL)
      .then((res) => res.json())
      .then((data) => showAllMeal(data));
  } else {
    alert("Enter name of the food!");
  }
}

function showAllMeal(meals) {
  console.log(meals.meals);
  let allMeals = meals.meals;

  document.getElementById("allMeals").innerHTML = "";

  for (const meal of allMeals) {
    document.getElementById("allMeals").innerHTML += `
    <div class="col">
        <div class="card h-100">
        <img src=${meal.strMealThumb} class="card-img-top" alt=${meal.strMeal} />
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">
            ${meal.strCategory}, ${meal.strArea}
            </p>
        </div>
        <button class="btn btn-success rounded-0" onclick="loadMealDetails('${meal.idMeal}')">View Meal</button>
        </div>
    </div>
  `;
  }
}

function loadMealDetails(id) {
  console.log(id);
  let URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

  fetch(URL)
    .then((res) => res.json())
    .then((data) => showMealDeatails(data.meals[0]));
}

function showMealDeatails(meal) {
  const details = document.querySelector(".details");

  details.innerHTML = `
    <h2>${meal.strMeal}</h2>
    <p>
      ${meal.strInstructions}
    </p>
    <a href="${meal.strYoutube}" target="blank">Watch Video</a>
    `;
}

searchBtn.addEventListener("click", fetchMeal);
