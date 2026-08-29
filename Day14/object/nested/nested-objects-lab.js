// 10 — Nested Objects Lab


// Model → Predict → Implement → Test

// js
const learnerRecord = {
  name: "Neha",
  age: 20,

  contact: {
    email: "neha@example.com",
    city: "Gaya" ,

    address : {
        state : "Bihar" ,
        pincode : 823001 
    }
  }
};


// Predict the output before running each line:

// js
console.log(learnerRecord.email);          // predict first! undefined
console.log(learnerRecord.contact.email);  // predict first! neha@example.com
console.log(learnerRecord.contact.city);   // predict first! Gaya

// Which of the three lines above returns undefined, and why?
// => learnerRecord.email returns undefined because email is inside the
// nested contact object, not directly inside learnerRecord.

// Write out, in your own words, the full "path" you have to walk to reach city starting from learnerRecord.
//=> learnerRecord -> contact -> city


// Extend this: add a second level of nesting — give contact an address object containing pincode and state. Access learnerRecord.contact.address.pincode.
 console.log( learnerRecord.contact.address.pincode); // 823001
 
// Save in nested/nested-objects-lab.js.

