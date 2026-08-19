
// Input: Name, Marks1, Marks2, Marks3 → Output: Total, Average, Pass/Fail, Grade

// Requirements: ≥4 reusable functions · parameters used · results returned · conditions used · clear responsibilities · ≥4 students tested · boundary cases included

// Example: Rahul — 33, 33, 33 → Total: 99, Average: 33, Status: Pass, Grade: D
const readlineSync = require("readline-sync");

let name = readlineSync.question("Enter the Name: ");
let marks1 = Number(readlineSync.question("Enter the Marks1: "));
let marks2 = Number(readlineSync.question("Enter the Marks2: "));
let marks3 = Number(readlineSync.question("Enter the Marks3: "));

function totalMarks(marks1, marks2, marks3) {
    return marks1 + marks2 + marks3;
}

function averageMarks(total) {
    return total / 3;
}

function checkPassFail(marks) {
    if (marks >= 33) {
        return "Pass";
    } else {
        return "Fail";
    }
}

function calculateGrade(marks) {
    if (marks >= 90) {
        return "A";
    } else if (marks >= 75) {
        return "B";
    } else if (marks >= 60) {
        return "C";
    } else if (marks >= 33) {
        return "D";
    } else {
        return "F";
    }
}

let total = totalMarks(marks1, marks2, marks3);
let average = averageMarks(total);
let status = checkPassFail(average);
let grade = calculateGrade(average);

console.log("Name: " + name);
console.log("Total Marks: " + total);
console.log("Average Marks: " + average);
console.log("Status: " + status);
console.log("Grade: " + grade);