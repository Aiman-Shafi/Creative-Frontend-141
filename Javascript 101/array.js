let fruits = ["apple", "orange", "kiwi", "papaya", 0, true, null, "banana"];

console.log(fruits[0]); // using index
console.log(fruits.length); // number of items
console.log(fruits.indexOf("banana")); // find the index of an item

fruits.pop(); // remove last items from the array
fruits.push("strawberry"); // item add to the last of an array
fruits.shift(); //remove first items from the array
fruits.unshift("berry"); // item add to the first of an array

console.log(fruits);
