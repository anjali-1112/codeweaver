const number = [85,42,96,50,33,56,23,9];

// Print every element of the array using a for loop.
console.log("Print every element of the array using a for loop :- ");
let total = 0;
for(let i=0 ;i<number.length;i++) {
    console.log(number[i]); // 85 42 96 50 33 56 23 9
     total += number[i];
}

// Calculate the total of all elements.
console.log("The total of all elements:- ");

console.log(total); //394

// Find a specific value — write a loop that checks whether 42 exists anywhere in the array, and reports true/false.
function isExist(number , x) {
    for(let i= 0 ; i < number.length ; i++) {
        if(number[i]===x) {
            return true ;
        }       
    }
    return false;
}
let result = isExist(number, 42) ;
console.log("Report of existed :-" + result);

// Count values — count how many elements are greater than a chosen threshold (e.g., 50).
let  y = 23 ;
let count = 0;
for(let i=0 ; i< number.length ; i++) {
    if(number[i]>y){
        count++;
    }
}
console.log(`Count values:- ${count} elements are greater than ${y}`);

// Generate a report — print a formatted line for each element, e.g. "Element 0: 67".
console.log("============================================================");

for(let i = 0 ;i < number.length ; i++) {
    console.log(`Element ${i} :${number[i]}`);
    
}


// 10 — Traversal Lab


// Model → Predict → Implement → Test

// You already know: Array + Loop = Process every element.

// Using an array of at least 6 numbers, implement each of the following. For each, predict the output before running.
// Print every element of the array using a for loop.

// Calculate the total of all elements.

// Find a specific value — write a loop that checks whether 42 exists anywhere in the array, and reports true/false.

// Count values — count how many elements are greater than a chosen threshold (e.g., 50).

// Generate a report — print a formatted line for each element, e.g. "Element 0: 67".


// Save all five in traversal/traversal-lab.js, each clearly labeled with a comment.

// ---