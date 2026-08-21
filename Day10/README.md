🛠️ CodeWeavers Learning Operating System

Day 10 — Engineering Lab


---

⚡ Function Forms → Scope

## Build. Predict. Debug. Refactor.


Today you will take yesterday's functions and make them more flexible. You will work with:

Function Expression → Arrow Function → Implicit Return → Scope


---

🎯 Lab Mission


By the end of this lab, you should be able to:
[ ] Write Function Expressions

[ ] Write Arrow Functions

[ ] Use implicit return

[ ] Convert one function form into another

[ ] Understand functions stored in variables

[ ] Identify basic scope

[ ] Debug simple scope errors


---
### 🧠 Rule

Predict first. Run second.

> Do not immediately execute every question.

>
> Think → Write → Run → Compare



---

01 — Warm-Up


Convert this Function Declaration into a Function Expression:
js
function add(a, b) {
    return a + b;
}


Your code:
js
const add = function(a,b) {
    return a+b;
};


Now convert it into an Arrow Function:
js
// Write here
const add = (a,b) => {
    return a+b ;
};


Now make it concise:
js
// Write here

const add = (a,b) => a+b ;

---

02 — Function Expression


Create: greet(name)

Requirements:
Accept a name

Return "Hello " + name

Do not print inside the function


js
greet("Rahul");
// Expected: "Hello Rahul"


Your Code:
js
// Write here

=>
function greet(name) {
    return "Hello "+ name ;
};
console.log(greet("Rahul"));


---

03 — Arrow Function


Create: square(number)

Requirements:
Use an Arrow Function

Return the square

Use concise syntax


Test:
js
square(5)
square(10)
square(12)


Your Code:
js
const square = (n) => n*n ;
console.log(square(5));
console.log(square(10));
console.log(square(12));
---

04 — Predict the Output

⚠️ Do NOT run first.


js
const multiply = (a, b) => a*b;

console.log(multiply(4, 5));
console.log(multiply(7, 3));


Output:
=> 20
=> 21
____________________________
____________________________


Now run it. Prediction Correct? YES / NO
=> Yes
---

05 — Find the Bug 🐞


What is wrong here?

js
const add = (a, b) => {
    a + b;
};

console.log(add(5, 10));


Problem:

=> we should add return statement 
________________________________________


Fix:
js
// Write corrected code

=> const add = (a,b) => {return a+b ;};
console.log(add(5,10)) ;

---

06 — Return Check


Which one correctly returns the result?

A
js
const add = (a, b) => {
    a + b;
};


B
js
const add = (a, b) => {
    return a + b;
};


C
js
const add = (a, b) => a + b;


Answer: B and C

Why?

=> B uses an explicit return and C uses an implicit return. A does not return the result 
________________________________________


---

07 — Function Refactoring


Convert this function through all three forms.

Original
js
function calculateAverage(a, b, c) {
    return (a + b + c) / 3;
}


1. Function Expression
js
// Write here
const calculateAverage = function(a,b,c) {
    return (a+b+c) / 3;
}


2. Arrow Function
js
// Write here
const calculateAverage = (a,b,c) => {
    return (a+b+c) / 3;
}

3. Concise Arrow Function
js
// Write here
const calculateAverage = (a,b,c) => (a+b+c) / 3;


Test all versions with:
80, 70, 90

50, 60, 70


Expected average for the first: 80

average for the first: 80

average for the second: 60


---

08 — Scope


Consider:
js
function test() {
    let value = 100;
    console.log(value);
}

test();


Question: Where is value accessible?

only function scope
________________________________________


Now:
js
function test() {
    let value = 100;
}

console.log(value);


Will this work? YES / NO

Why?
NO because of value variable access only function scope 
________________________________________


---

09 — Block Scope


Predict:
js
if (true) {
    let score = 90;
    console.log(score);
}


Does score work inside the block? YES / NO => Yes

Now:
js
if (true) {
    let score = 90;
}

console.log(score);


Does it work outside? YES / NO =>

Why?
=> NO because of value variable access only block scope 

________________________________________


---

10 — Scope Debugging 🐞


Fix this code:
js
function calculate() {
    let total = 500;
}

console.log(total);


Problem:

=> total is declared inside the function, so it cannot be accessed outside the function 
    refrenceError
________________________________________


Corrected Code:
js
// Write here
function calculate() {
    let total = 500;
    console.log(total);

}

calculate();

---

11 — Think Carefully


What will this print?

js
let name = "Rahul";

function greet() {
    console.log(name);
}

greet();


Answer: Rahul 

Why can the function access name?

=> name is declared outside the function (global scope).so it can be accessed inside the function 
________________________________________


---

12 — Mixed Challenge 🔥


Predict the output before running.

js
const square = number => number*number;

function calculate(number) {
    let result = square(number);
    return result;
}

console.log(calculate(5));


Output: => 25

Flow:
calculate(5)
      ↓
square(5)
      ↓
5 × 5
      ↓
    ? 
 

Complete:

result = 25
      ↓
return 25 
      ↓
print 25 
---

13 — Engineering Task


Refactor Yesterday's Grade Functions


Take your Day 09 functions:
calculateTotal()
calculateAverage()
checkPassStatus()
getGrade()


Convert them into Arrow Functions.

Example:
js
const calculateTotal = (a, b, c) => a + b + c;


Requirements:
[ ] Correct output

[ ] Meaningful names

[ ] Parameters used correctly

[ ] Return used correctly

[ ] Test with multiple inputs

=> done , In grade_utilis.js
---

14 — Mini Build 🚀


Student Result Analyzer


Create:
day10-functions/
└── student-result.js


Create these functions (using Arrow Functions):
calculateTotal()
calculateAverage()
checkPassStatus()
getGrade()


Example:
js
const calculateTotal = (a, b, c) => a + b + c;


Test data:

| Student | Scores |
|---|---|
| Student 1 | 80, 75, 90 |
| Student 2 | 50, 60, 55 |
| Student 3 | 30, 25, 20 |
| Student 4 | 95, 92, 90 |

For every student, determine:
Total

Average

Pass / Fail

Grade


---

15 — Final Debugging Challenge


This program has two problems. Find them.

js
const calculateTotal = (a, b, c) => {
    a + b + c;
};

function analyzeStudent() {
    let total = calculateTotal(80, 70, 90);
    return total ;
}

console.log(total);


Problem 1:

=> calculateTotal() does not return the calculated result.
________________________________________


Problem 2:

=> total is declared inside analyzeStudent() , so it cannot be accessed outside the function .
________________________________________


Correct the program:
js
// Write corrected version

const calculateTotal = (a, b, c) => {
   return  a + b + c;
};

function analyzeStudent() {
    let total = calculateTotal(80, 70, 90);
}

console.log(analyzeStudent());


---

🏆 Submission Checklist


Before submitting:
[ ] Function Expression practiced

[ ] Arrow Functions practiced

[ ] Implicit return understood

[ ] Output predicted before running

[ ] Bugs fixed independently

[ ] Scope questions attempted

[ ] Day 09 functions refactored

[ ] Student Result Analyzer completed

[ ] Multiple test cases executed


---

🧠 Quick Check


Answer in one line.
What is a Function Expression?

=> a function stored inside a variable.
________________________________________

What does => represent?

=> It represents an arrow function.
________________________________________

What is implicit return?

=> returning a value automatically without using the return keyword .
________________________________________

What is Scope?

=> scope defines where a variable can be accessed.
________________________________________

Why can't a function's local variable normally be accessed outside it?

=> because the local variable is limited to the function's scope .
________________________________________


---

💼 Engineering Habit


Before changing working code:

Understand → Change → Run → Compare

Do not make code shorter just because you can. Make it clearer and easier to maintain.


---

🔮 Next


Today:
Functions → Function Expressions → Arrow Functions → Scope Introduction


Next:
Scope → Nested Scope → Lexical Scope → Scope Chain


Build today's foundation properly before moving forward.

---

— End of Day 10 Engineering Lab —