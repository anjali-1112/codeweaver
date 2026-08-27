12 — Debugging Lab


For every broken program below, follow this exact process. Do not fix anything until you've completed Problem → Observation → Hypothesis → Test.

Problem → Observation → Hypothesis → Test → Root Cause → Fix → Prevention


Bug 1 — Off-by-one loop
js
const cities = ["Patna", "Gaya", "Bhagalpur"];
for (let i = 0; i <= cities.length; i++) {
  console.log(cities[i]);
}

 Problem : <= , observation : < valid index = 0,1,2, but <= index are 0 , 1,2,3 so cities = undefined 


Bug 2 — Wrong index
js
const scores = [67, 89, 45, 92, 78];
console.log("Highest attempt is at position 5:", scores[5]);

=> highest score is 92 so invoked the value scores[3] 

Bug 3 — length misuse
js
const books = ["Atomic Habits", "Deep Work", "Clean Code"];
console.log("Last book:", books[books.length]);

=> last book means last valid index  so, last valid index is books.length - 1. 

Bug 4 — Invalid access after shift
js
const queue = ["A", "B", "C"];
queue.shift();  // this line remove the first element of queue "A".
console.log(queue[2]);

=> So, only access the "B" and "C" and thier index are 0 ,1 

Bug 5 — Wrong update target
js
const inventory = [10, 20, 30];
// Intent: increase the first item by 5
inventory[1] = inventory[1] + 5;
console.log(inventory);

=> Problem - update the second item so we fix this inventory[1] -> inventory[0]


Bug 6 — Infinite/broken traversal
js
const nums = [1, 2, 3];
for (let i = 0; i > -1; i++) {
  console.log(nums[i]);
}

problem - infinite traversal so fix the for loop
