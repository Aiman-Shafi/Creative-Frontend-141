let fruits = ["apple", "orange", "kiwi", "papaya", "banana"];

console.log(fruits[0]); // using index
console.log(fruits.length); // number of items
console.log(fruits.indexOf("banana")); // find the index of an item

fruits.pop(); // remove last items from the array
fruits.push("strawberry"); // item add to the last of an array
fruits.shift(); //remove first items from the array
fruits.unshift("berry"); // item add to the first of an array

console.log(fruits);

let numbers = [2, 56, 23, 1, 23, 6, 7, 90, 8, 9];

// splice - adding new items to an array (index number | delete count | new items name)
// slice - slice a peice of an array

// fruits.splice(3, 1, "lemon", "kiwi")
// console.log(fruits)

// let slice = fruits.slice(3)
// console.log(slice)

// sorting an array

// console.log(fruits.sort())
// console.log(fruits.reverse())

// console.log(numbers.sort())
// console.log(numbers.sort(function(a,b){return a - b}))

// 10 - 20

// for (let i = 10; i <= 20; i++){
//     console.log(i)
// }

// array iteration

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
  // console.log(fruits[1])
}

// console.log(fruits.length)
