const list = document.getElementById("list");
const regionArea = document.getElementById("region");
const container = document.querySelector(".container");
const search = document.getElementById("search");
const btn = document.getElementById("submit");
let regions = [];

// preloader
let loader = document.getElementById("loader");
loader.style.display = "block";

function showLoader() {
  loader.style.display = "block";
}

function removeLoader() {
  loader.style.display = "none";
}

// fetch all country data
async function fetchCountry() {
  //   fetch("https://restcountries.com/v3.1/all")
  //     .then((res) => res.json())
  //     .then((data) => displayData(data));
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  removeLoader();
  displayData(data);
}

fetchCountry();

function displayData(countries) {
  //   console.log(countries);

  countries.forEach((country) => {
    // console.log(country);
    list.innerHTML += `
        <li onclick="displayDetails('${country.capital}')">${
      "Name: " + country.name.common
    } </li>    `;

    // filtering or removing the duplicate regions from array region
    if (regions.indexOf(country.region) === -1) {
      regions.push(country.region);
    }
  });

  // loop through region select option from region array
  regions.forEach((region) => {
    regionArea.innerHTML += `
    <option value="${region}">${region}</option>
    `;
  });
}

// add if else -> show all data there is no data found!

async function searchApi(keyword) {
  if (keyword) {
    showLoader();
    const res = await fetch(`https://restcountries.com/v3.1/name/${keyword}`);

    const data = await res.json();
    removeLoader();
    displaySearchResults(data);
  } else {
    list.innerHTML = "";
    fetchCountry();
  }
}

// Class way ja kora hoise

// function getSearchResults() {
//   btn.addEventListener("keyup", (e) => {
//     e.preventDefault();
//     console.log(e.target.value);
//     searchApi(search.value);
//   });
// }

// Better Apporach hocche
function getSearchResults() {
  search.addEventListener("keyup", (e) => {
    e.preventDefault();
    console.log(e.target.value);
    searchApi(search.value);
  });
}

getSearchResults();

function displaySearchResults(data) {
  list.innerHTML = "";
  data.forEach((value) => {
    console.log(value.name.common);
    list.innerHTML += `
    <li onclick="displayDetails('${value.capital}')">${
      "Name: " + value.name.common
    } </li>`;
  });
}

function displayDetails(data) {
  //   console.log(typeof data);
  fetch(`https://restcountries.com/v3.1/capital/${data}`)
    .then((res) => res.json())
    .then((data) => {
      document.querySelector(".details").innerHTML = `
            <h1>Details</h1>
            <h2>${data[0].name.common}</h2>
            <h4>${data[0].name.official}</h4>
            <h4>${data[0].region}</h4>
        `;
    });
}

function regionFilter() {
  regionArea.addEventListener("change", (e) => {
    // console.log(e.target.value);
    if (e.target.value != "all") searchRegion(e.target.value);
  });
}

regionFilter();

async function searchRegion(keyword) {
  if (keyword) {
    showLoader();
    const res = await fetch(`https://restcountries.com/v3.1/region/${keyword}`);

    const data = await res.json();
    removeLoader();
    displaySearchResults(data);
  } else {
    list.innerHTML = "";
    fetchCountry();
  }
}
