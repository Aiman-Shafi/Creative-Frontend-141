const API_KEY = "api_key=817c2d467cf5ccf6a5f3783c41ec34a2";
const IMAGE_URL = "https://image.tmdb.org/t/p/original";
const YOUTUBE_URL = "https://www.youtube.com/watch?v=";
const BASE_URL = "https://api.themoviedb.org/3";

const POPULAR_TV_URL = BASE_URL + "/tv/popular?" + API_KEY;

// fetchPopularShow(POPULAR_TV_URL, swiperSlider);
function showLoader() {
  document.getElementById("loader").classList.remove("hidden");
  document.getElementById("loader").classList.add("visible");
  setTimeout(() => {
    document.getElementById("loader").classList.add("hidden");
  }, 5000);
}
function removeLoader() {
  // document.getElementById("loader").classList.remove("visible");
  document.getElementById("loader").classList.add("hidden");
}

function fetchPopularShow(api, callBack) {
  showLoader();
  setTimeout(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        removeLoader();
        callBack(data);
      });
  }, 1000);
}

fetchPopularShow(POPULAR_TV_URL, swiperSlider);
fetchPopularShow(POPULAR_TV_URL, showPopularMovies);

const swiperWrapper = document.querySelector(".swiper-wrapper");

function swiperSlider(series) {
  let allSeries = series.results;
  allSeries.splice(5, 20);
  console.log(allSeries);
  allSeries.map((series) => {
    swiperWrapper.innerHTML += `
    <div class="swiper-slide relative">
        <img
          src=${"https://image.tmdb.org/t/p/original" + series.backdrop_path}
          alt=${series.original_name}
          class="brightness-50 absolute top-0 left-0 w-full h-full object-cover"
        />
        <div
          class="swiper-content absolute top-15 left-[10%] text-white w-[1140px] mx-auto"
        >
          <div class="container mx-auto flex items-start gap-10">
            <img
              src=${"https://image.tmdb.org/t/p/original" + series.poster_path}
              alt=${series.original_name}
              class="w-[300px] rounded-lg drop-shadow-2xl"
            />
            <div class="content text-start relative z-10">
              <h2 class="text-6xl font-semibold drop-shadow-xl">
                ${series.original_name}
              </h2>
              <p class="mt-5 drop-shadow-xl">
                ${series.overview}
              </p>
              <h4 class="mt-4">
                <lord-icon
                  src="https://cdn.lordicon.com/surjmvno.json"
                  trigger="hover"
                  colors="primary:#ffc738,secondary:#16c79e"
                  style="width: 60px; height: 60px"
                >
                </lord-icon>
                <span
                  class="text-4xl align-middle font-semibold ml-[-.5rem] drop-shadow-xl"
                  >${series.vote_average}</span
                >
              </h4>
              <div class="slider-buttons">
                <button class="btn py-2 px-4 mt-5">
                  <lord-icon
                    src="https://cdn.lordicon.com/tdxypxgp.json"
                    trigger="hover"
                    colors="primary:#ffffff,secondary:#ffffff"
                    state="hover"
                    style="width: 40px; height: 30px"
                  >
                  </lord-icon>
                  Play Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  });
}

function showPopularMovies(series) {
  let allSeries = series.results;
  let newAllSeries = allSeries.reverse();
  // allSeries.splice(5, 20);
  // console.log(allSeries);
  newAllSeries.forEach((series) => {
    document.getElementById("popular-movies").innerHTML += `
    <div class="snap-center shrink-0">
      <img
        src=${"https://image.tmdb.org/t/p/original" + series.poster_path}
        alt=""
        class="w-60 h-80 object-fill shrink-0 drop-shadow-xl rounded-lg cursor-pointer duration-500 hover:scale-110"
        onclick="displayShow(${series.id})"
        />
      <h3 class="pt-5 text-lg font-semibold">${series.original_name.slice(
        0,
        30
      )}</h3>
      <p class="text-gray">${series.first_air_date}</p>
    </div>
    `;
  });
}

function displayShow(id) {
  fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=817c2d467cf5ccf6a5f3783c41ec34a2&language=en-US`
  )
    .then((data) => data.json())
    .then((movies) => displayMovies(movies));
}

function displayMovies(movies) {
  document.getElementById("popup").classList.remove("invisible");
  document.getElementById("popup").classList.add("visible");

  document.getElementById("popup").innerHTML = `
    <div class="detail-content w-[70%] h-[80%] bg-white z-50">
      <h1>${movies.id}</h1>
      <p>hello</p>
      <button class="btn">
    </div>
  `;
  document.getElementById("popup").addEventListener("click", (e) => {
    console.log(e.target.classList.value);
    if (e.target.classList.value) {
      document.getElementById("popup").classList.add("hidden");
      document.getElementById("popup").classList.remove("visible");
    }
  });
}

var swiper = new Swiper(".mySwiper", {
  // Optional parameters
  loop: true,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
