// Lab 10 — Mini Project: Student Marks Analyzer

let marks = [78, 65, 92, 25, 88];
let sum = 0;
for (let mark of marks ){
    console.log(mark);
    if(mark>=33){
        console.log("PASS");
    }else{
        console.log("FAIL");
    }
    sum += mark ;
    console.log("---------");

}
console.log("Total Marks: "+ sum);

// js
// let marks = [78, 65, 92, 45, 88];

// Using for...of, print every mark.

// Then print PASS or FAIL for each (pass marks = 33).

// Bonus: calculate total marks (hint: variable + loop).