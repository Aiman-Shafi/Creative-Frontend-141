let text = "Bangladesh is a populated country";
console.log(text.length); // to find the total letters

// replace - replace a text in a string

let newText = text.replace("Bangladesh", "China");
console.log(newText);

// charAt - finding a letter in a string using index
console.log(text.charAt(0));

// split - seperating a words or letters

let split = text.split(" ");
console.log(split);

// joining a spliting array
console.log(split.join(" "));

// trim - remove spaces between a sentence
let trim = text.trim();
console.log(trim.split(" "));

// slice - we can slice a string the part we need to work with
// index can be both negative and positive

let slice = text.slice(10, -5);
console.log(slice);

// substr - we cannot have any negative index

let substr = text.substr(5, 13);
console.log(substr);

// uppercase and lowercase

console.log(text.toLowerCase());
console.log(text.toUpperCase());

// using slice method

let paragraph =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, animi non neque tenetur at natus officiis voluptates, iure fugit qui optio. Autem exercitationem placeat eveniet necessitatibus, atque dolore nulla minima!";

let shortP = paragraph.slice(0, 20);

console.log(shortP + "..");

// find the word is present or not in the paragraph

paragraph = "Bangladesh is a populated country. Our Pride...";

let lowercase = paragraph.toLowerCase();

let searchValue = "BangLaDesh";

let search = lowercase.indexOf(searchValue.toLowerCase());
console.log(search);

if (search === -1) {
  console.log("Word is missing");
} else {
  console.log("Word is present in the paragraph");
}

// template literals

let userName = "Nadim Shah";
let userJob = "Developer";

let add = 20;

let aboutUser = `
Hello, I'm ${userName}, Currently I'm working as ${userJob}.  
`;
console.log(aboutUser);
