fetchCountry();

document.getElementById("loader").style.display = "none";

// function fetchCountry() {
//   fetch("https://restcountries.com/v3.1/all")
//     .then((res) => res.json())
//     .then((data) => displayData(data));
// }
function showLoader() {
  document.getElementById("loader").style.display = "block";
}

function removeLoader() {
  document.getElementById("loader").style.display = "none";
}

showLoader();

async function fetchCountry() {
  //   fetch("https://restcountries.com/v3.1/all")
  //     .then((res) => res.json())
  //     .then((data) => displayData(data));
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  removeLoader();
  displayData(data);
}

function displayData(countries) {
  //   console.log(countries);

  countries.forEach((country) => {
    // console.log(country);
    document.getElementById("list").innerHTML += `
        <li>${"Name: " + country.name.common} </li>    `;
  });
}

async function searchApi(keyword) {
  const res = await fetch(`https://restcountries.com/v3.1/name/${keyword}`);

  const data = await res.json();

  displaySearchResults(data);
}

const search = document.getElementById("search");
const btn = document.getElementById("submit");

function getSearchResults() {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    searchApi(search.value);
  });
}

getSearchResults();

function displaySearchResults(data) {
  console.log(data);
  document.getElementById("list").innerHTML = "";
  data.forEach((value) => {
    console.log(value.name.common);
    document.getElementById("list").innerHTML += `
    <li onclick="displayDetails(${value.area})">${
      "Name: " + value.name.common
    } </li>    `;
  });
}

function displayDetails(area) {
  console.log(area);
}
