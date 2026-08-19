// //Task1
// function labTest() {
//   let value = 100;
//   console.log(value);
// }
// labTest();
// console.log(value);

// // Task2

// // GLOBAL SCOPE
// let name = "Anjali" ;
// let isStudent = true ;
// if(isStudent) {
//     console.log(name);
// }
// console.log(name);

// // FUNCTION SCOPE
// function sum(a,b){
//     let sum = a+b;
//     console.log(sum);
// }
// sum(52,63);
// //   console.log(sum); // sum is function scope so can't access outside 



// // BLOCK SCOPE
// {
//     let colour = "red";
//     console.log(colour + " yellow");

// }
// //console.log(colour); // ReferenceError: colour is not defined // colour is block scope so can't access outside

// let p = "P";
// function a() {
//   let q = "Q";
//   function b() {
//     let r = "R";
//     console.log(q);
//     // YOUR TRACE: b → R → Q
//   }
//   b();
// }
// a();

// let mode = "production";

// function runTask() {
//   let mode = "test";
//   console.log("Inside runTask:", mode);
//   function thirdTask() {
//     let mode = "execution ";
//     console.log("Inside thirdTask : " + mode);
//   }
//   thirdTask();
// }

// runTask();
// console.log("Outside:", mode);


// let total;
// let average;
// let grade;
// let studentName;

// function processStudent(name, marks) {
//   studentName = name;
//   total = marks.reduce((sum, m) => sum + m, 0);
//   average = total / marks.length;

//   if (average >= 90) grade = "A";
//   else if (average >= 75) grade = "B";
//   else if (average >= 50) grade = "C";
//   else grade = "F";

//   console.log(`${studentName}:  ${grade}  (avg: ${average})`);
// }

// processStudent("Anita", [88, 92, 79]);
// processStudent("Rohit", [45, 60, 55]);


// // Problem:
// // After the second call, the global variables contain Rohit's data.
// // If another part of the program reads them between or after calls,
// // the previous student's data has been overwritten.

// function processStudent(name, marks) {
//     let total = marks.reduce((sum, m) => sum + m, 0);
//     let average = total / marks.length;
//     let grade;

//     if (average >= 90) grade = "A";
//     else if (average >= 75) grade = "B";
//     else if (average >= 50) grade = "C";
//     else grade = "F";

//     return {
//         name: name,
//         total: total,
//         average: average,
//         grade: grade
//     };
// }

// const AnitaResult = processStudent("Anita", [88, 92, 79]);
// console.log(AnitaResult);

// const RohitResult = processStudent("Rohit", [45, 60, 55]);
// console.log(RohitResult);


// Each function call keeps its own data inside local variables.
// The function does not change shared global state, and its result is returned explicitly.
// G1
// let n = 5;
// function f1() {
//   console.log(n);
//   let n = 10;
// }
// f1();

// function counter() {
//   let count = 0;
//   function increment() {
//     count = count + 1;
//     console.log(count);
//   }
//   increment();
//   increment();
//   increment();
// }
// counter();
// let status = "idle";
// function start() {
//   status = "running";
// }
// start();
// console.log(status);
function outer() {
  let x = 1;
  function middle() {
    let x = 2;
    function inner() {
      console.log(x);
    }
    inner();
  }
  middle();
}
outer();