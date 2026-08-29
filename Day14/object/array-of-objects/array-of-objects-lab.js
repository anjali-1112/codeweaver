// 11 — Array of Objects Lab


// Model → Predict → Implement → Test

// js
const students = [
  { name: "Aman", cgpa: 8.2 },
  { name: "Riya", cgpa: 9.1 },
  { name: "Karan", cgpa: 7.8 }
];


// Predict before running:

// js
console.log(students[0]);       // predict: what TYPE of thing is this — an object or a value? 
// { name: 'Aman', cgpa: 8.2 } -> object

console.log(students[0].name);  // predict the value => Aman
console.log(students[1].cgpa);  // predict the value => 9.1
console.log(students.length);   // predict: how many STUDENTS, not how many properties
//=>3

// Now traverse it — combine Day 13's traversal skill with today's object access:

// js
for (let i = 0; i < students.length; i++) {
  console.log(`${students[i].name} has a CGPA of ${students[i].cgpa}.`);
}


// Predict the full output, line by line, before running.
// => Aman has a CGPA of 8.2.
// => Riya has a CGPA of 9.1.
// => Karan has a CGPA of 7.8.
console.log("--------------------");

// Extend it: add a 4th student object with the same two properties, and re-run the traversal without changing the loop code. Why didn't the loop itself need to change?
 students.push({ name: "Raju", cgpa: 8.3 });
for (let i = 0; i < students.length; i++) {
  console.log(`${students[i].name} has a CGPA of ${students[i].cgpa}.`);
}

// => The loop uses students.length, so it automatically includes the new student added to the array.
// Save in array-of-objects/array-of-objects-lab.js.