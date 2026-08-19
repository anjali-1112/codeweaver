// Implement:

// | Function | Input | Output |
// |---|---|---|
// | calculateTotal() | 3 marks | Total |
// | calculateAverage() | 3 marks | Average |
// | checkPassStatus() | Average | "Pass"/"Fail" |
// | getGrade() | Average | 90+ A · 75+ B · 60+ C · 33+ D · <33 Fail |

const readlineSync = require("readline-sync");

let marks1 = Number(readlineSync.question("Enter the Marks1: "));
let marks2 = Number(readlineSync.question("Enter the Marks2: "));
let marks3 = Number(readlineSync.question("Enter the Marks3: "));

function calculateTotal(marks1, marks2, marks3) {
    return marks1 + marks2 + marks3;
}

function calculateAverage(total) {
    return total / 3;
}

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