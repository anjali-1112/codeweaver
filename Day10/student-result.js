// 14 — Mini Build 🚀


// Student Result Analyzer


// Create:
// day10-functions/
// └── student-result.js


// Create these functions (using Arrow Functions):
// calculateTotal()
// calculateAverage()
// checkPassStatus()
// getGrade()


// Example:
// js
// const calculateTotal = (a, b, c) => a + b + c;


// Test data:

// | Student | Scores |
// |---|---|
// | Student 1 | 80, 75, 90 |
// | Student 2 | 50, 60, 55 |
// | Student 3 | 30, 25, 20 |
// | Student 4 | 95, 92, 90 |

// For every student, determine:
// Total

// Average

// Pass / Fail

// Grade


// ---

const readlineSync = require("readline-sync");

let marks1 = Number(readlineSync.question("Enter the Marks1: "));
let marks2 = Number(readlineSync.question("Enter the Marks2: "));
let marks3 = Number(readlineSync.question("Enter the Marks3: "));

const calculateTotal = (marks1, marks2, marks3) => marks1 + marks2 + marks3;


const calculateAverage = (total) => total / 3;


function checkPassStatus(marks) {
    if (marks >= 33) {
        return "Pass";
    } else {
        return "Fail";
    }
}

function getGrade(marks) {
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

let total = calculateTotal(marks1, marks2, marks3);
let average = calculateAverage(total);
let status = checkPassStatus(average);
let grade = getGrade(average);

console.log("Total Marks: " + total);
console.log("Average Marks: " + average);
console.log("Status: " + status);
console.log("Grade: " + grade);