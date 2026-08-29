// An employee with at least 4 properties, including one boolean.
const employee = {
    name : "FAIZ KHAN",
    empId : 9630,
    isFullTime : true,
    isWFH : false 
};
console.log(employee.name);
console.log(employee["empId"]);
console.log(employee.salary);



// 07 — Property Access Lab


// Model → Predict → Implement → Test

// Using one of your objects from Lab 6 (at least 4 properties), predict the output for each of the following before running anything:

// | Expression | Your Prediction | Actual Output |
// |---|---|---|
// | obj.propertyOne (an existing property, dot notation) | FAIZ KHAN| FAIZ KHAN|
// | obj["propertyTwo"] (an existing property, bracket notation) |9630 | 9630|
// | obj.doesNotExist (a property you never defined) |undefined | undefined|

// Fill in "Your Prediction" first. Only then run the code and fill in "Actual Output." Where they differ, write a one-sentence explanation of what you misunderstood — pay special attention to the third row: what exactly does JavaScript do when a property doesn't exist, and why is that not the same as an error?
//third row is not an error because accessing a missing object property normally returns undefined.
// Save this table in access/access-lab.js.