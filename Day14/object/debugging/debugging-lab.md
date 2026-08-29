12 — Debugging Lab


For every broken program below, follow this exact process. Do not fix anything until you've completed Problem → Observation → Hypothesis → Test.

Problem → Observation → Hypothesis → Test → Root Cause → Fix → Prevention


Bug 1 — Case-sensitive property mismatch
js
const learner = { name: "Aman" };
console.log(learner.Name); // undefined 

problem- js is case sensitive so Name and name is different. 
console.log(learner.name); // Aman 


Bug 2 — Wrong nested path
js
const learner2 = { contact: { city: "Gaya" } };
console.log(learner2.city); // undefined because city declares in under contact 

console.log(learner2.contact.city); // Gaya


Bug 3 — Array-like object confusion
js
const oddStudents = { 0: "Aman", 1: "Riya" };
console.log(oddStudents[2]); // undefined
console.log(oddStudents.length); // predict this one carefully = > undefined

const oddStudents =[ { 0: "Aman", 1: "Riya" }];
console.log(oddStudents[0]);
console.log(oddStudents.length); 

Bug 4 — Calling data as a function
js
const learner3 = { name: "Aman" };
learner3.name(); // TypeError: learner3.name is not a function 

const learner3 = { name: "Aman" };
console.log(learner3.name);


Bug 5 — Missing object reference
js
console.log(unknownStudent.name);
//ReferenceError: unknownStudent is not defined

Bug 6 — Wrong property added by typo
js
const product = { name: "Pen", price: 10 };
product.pricee = 15; // typo — a NEW property was created, not an update!
// pricee and price its different update hone k badle add ho gaya
console.log(product);
console.log(product.price); // still 10 — why?


const product = { name: "Pen", price: 10 };
product.price = 15; // typo — a NEW property was created, not an update!
console.log(product);
console.log(product.price); // still 10 — why?


For each bug, document your full process in debugging/debugging-lab.md — Problem, Observation, Hypothesis, Test, Root Cause, Fix, Prevention — before writing the corrected code in a matching .js file.

---