// function generateQuote() {
//   fetch("https://api.kanye.rest/")
//     .then((res) => res.json())
//     .then((data) => showData(data));
// }

// function showData(data) {
//   document.querySelector(".blockquote p ").innerHTML = data.quote;
// }

// generateQuote();

// document.getElementById("btn").addEventListener("click", () => {
//   generateQuote();
// });

// function fetchAlbum() {
//   fetch("https://jsonplaceholder.typicode.com/comments")
//     .then((res) => res.json())
//     .then((data) => displayAlbum(data));
// }

// function displayAlbum(data) {
//   for (let album of data) {
//     console.log(album);
//     document.getElementById("album-container").innerHTML += `
//         <div class="col">
//             <div class="card">
//             <div class="card-body">
//                 <h5 class="card-title">${album.name}</h5>
//                 <p class="card-text">
//                 ${album.body}
//                 </p>
//             </div>
//             </div>
//         </div>
//     `;
//   }
// }

// fetchAlbum();

// 1. data load / fetch

function fetchUser() {
  fetch("https://randomuser.me/api/?results=50")
    .then((res) => res.json())
    .then((data) => displayUser(data));
}

function displayUser(data) {
  //   console.log(data);
  let users = data.results;
  //   console.log(users);
  for (let user of users) {
    console.log(user);
    document.getElementById("users").innerHTML += `
    <div class="col">
    <div class="card">
    <img src=${user.picture.large} class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${user.name.first + " " + user.name.last}</h5>
        <p class="card-text">
          ${user.email + ", " + user.gender}
        </p>
      </div>
    </div>
    `;
  }
}

fetchUser();
