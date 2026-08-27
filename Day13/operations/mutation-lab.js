const queue = ["Aman", "Riya", "Karan"];
console.log(queue.length);

queue.push("Neha");      // 1 add in last 
console.log(queue);

queue.pop();              // 2 remove at last 
console.log(queue);

queue.unshift("Ishaan");  // 3 add in first
console.log(queue);

queue.shift();             // 4 remove at first
console.log(queue);
console.log(queue.length);


// 11 — Mutation Lab (Basic Array Operations)


// For each of the four operations below, follow this exact cycle: Predict → Execute → Observe → Explain.

// js
// const queue = ["Aman", "Riya", "Karan"];

// queue.push("Neha");      // 1
// queue.pop();              // 2
// queue.unshift("Ishaan");  // 3
// queue.shift();             // 4


// For each numbered line:
// Predict the array's contents and .length before running that line.

// Run it and log the array.

// Observe what actually changed.

// Explain, in one sentence, what the operation did and why it changed length the way it did.

// operation push add kiya last index pr, pop remove kiya last index, unshift add kiya first index par ,and 
// shift remove kiya first index se so add remove in array karenge to length change hoga hi

// Save this in operations/mutation-lab.js.
