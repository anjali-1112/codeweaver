⚡ CodeWeavers Engineering Lab — Day 09

Functions: Build Reusable Logic


Mission: Repeated Logic → Reusable Logic → Modular Programs

Rule: Predict first, execute second. Don't run code just to see what happens.

---

🎯 Lab Objectives

Declare & call functions · parameters vs arguments · return values · return vs console.log() · function reuse · functions + conditions/loops · problem decomposition · debugging · naming.

Prerequisites: Variables, Data Types, Operators, Conditions, switch, while, do-while, for, break, continue.

---

Section 01 — Fundamentals


Q1. What problem do functions primarily solve? _______________

=> function solve reusability, readability, modularity, avoid repetition .

Q2. Write greet() — should print Hello CodeWeavers.
js
=> 
function greet() {
    console.log("Hello CodeWeavers");
}
greet();

Q3.
js
function greet() { console.log("Hello"); }

What statement executes it? => greet() because it invokes the function .

Q4. Predict output:
js
function greet() { console.log("Hello"); }
console.log("Start");
greet();
console.log("End");

Output:  

=>  Start 
    Hello
    End

Q5. Will this print anything?
js
function greet() { console.log("Hello"); }

YES / NO — Why? _______________

=> No because function are defined but not invoked  .
---

Section 02 — Parameters & Arguments


Q6. function greet(name) { console.log("Hello " + name); } — What is the parameter? => name

Q7. greet("Rahul"); greet("Priya"); — What are the arguments? the arguments are Rahul and Priya 

Q8. Predict, then explain a, b, a+b:
js
function add(a, b) { console.log(a + b); }
add(10, 20);

Output: 30 | a= 10 b= 20 a+b= 30 

Q9. Write multiply(a, b) — returns the product.
js
function multiply(a, b){
    return a*b ;
}
console.log(multiply(12, 3));

Q10. Define: Parameter = variable defined in the function 
 Argument = actual value passed to the function

---

Section 03 — Return Values


Q11. In one sentence, what does return do? 
=> return gives the result back from a function 

Q12. Predict:
js
function add(a, b) { return a + b; }
let result = add(10, 20);
console.log(result);

Output: 30 
Q13. Dry run:
js
function square(number) { return number*number; }
let result = square(5);

Call: square(5) → Param: number = 5 → Calc: 5*5 → Returned: 25  → Output: 25 

Q14. Difference between console.log() and return:

=> console.log() displays the value and return gives the result back from a function .

Q15. Debug and fix:
js
function add(a, b) { return a + b; } 
let result = add(5, 10);
console.log(result);

Fix: return is missing 

---

Section 04 — Debugging Mission


For each bug, identify Problem → Cause → Fix.

Bug 01 — Never called
js
function welcome() { console.log("Welcome"); }
welcome() //fix -missing


Bug 02 — Missing return
js
function calculateTotal(a, b) {return a + b; }


Bug 03 — Wrong responsibility
js
function processStudent() {
    // calculate average, calculate grade, print report,
    // check pass status, generate summary, validate marks
}

Engineering problem? How would you decompose it? _______________
=> The  function has too many responsibilities, making it difficult to read, test and maintain
So, we decompose it into seperate function like (calculateAvg() , calculateGrade() , printReport()
checkStatus() , GenerateSummary() validateMarks() )


Bug 04 — Code after return
js
function test() { return 10; console.log("Hello"); }

Does "Hello" execute? YES / NO — Why? _______________

=> No , because return statement ends the function immediately , console.log after it will not execute .

Bug 05 — console.log instead of return
js
function square(number) { return(number*number); }
let result = square(5);
console.log(result);

Problem + fix: _______________

---

Section 05 — Output Prediction


C1.
js
function calculate(a, b) { return a + b; }
console.log(calculate(5, 10));

Output: 15

C2.
js
function calculate(a, b) { return a*b; }
let x = calculate(5, 10);
console.log(calculate(x, 2));

Output: 100

C3.
js
function check(number) {
    if (number >= 10) return "Large";
    return "Small";
}
console.log(check(15)); console.log(check(5));

Output: 
=> Large
    Small

C4.
js
function test() { console.log("A"); return "B"; console.log("C"); }
console.log(test());

Output: 

A
B

C5.
js
function add(a, b) { return a + b; }
let x = add(2, 3);
console.log(add(x, 5));

Output: 10

---

Section 06 — Functions + Conditions


Q16. isEven(number) — return whether even. Test: 2, 7, 10, 13
js

let num = 13 ;
function isEven(number) {
    if(number%2==0) {
        return "Even" ;
    }else {
        return "Odd" ;
    }
}
console.log(isEven(num));


Q17. checkAge(age) — >=18 → "Eligible", else "Not Eligible". Return the result.
js


let age = 19 ;
function checkAge(age) {
    if(age >= 18){
        return "Eligible";
    }else {
        return "Not Eligible";

    }
}
console.log(checkAge(age));


Q18. findLargest(a, b) — return the larger number. Test: (10,20) (50,30) (100,100)
js


---

Section 07 — Functions + Loops


Q19. printNumbers(limit) — loop inside function. printNumbers(5) → 1 2 3 4 5
js

function printNumbers(limit) {
    for(let i = 1 ; i <= limit ;i++) {
        console.log(i) ;
    }
}
printNumbers(5);

Q20. printEvenNumbers(limit) — printEvenNumbers(20) → 2 4 6 ... 20
js

let limit = 20;
function isEven(num) {
    if(num%2==0){
        return true ;
    }
    return false ;
}
function printEvenNumbers(limit) {
    for(let i = 2 ; i<=limit;i++) {
        if(isEven(i)){
            console.log(i);
        }
    }
}
printEvenNumbers(20);

---

Section 08 — Problem Decomposition


Scenario: Build a Student Grade Analyzer — total, average, pass/fail, grade, summary.

Q21. Function names only (no code):

=> 1. calculateTotal() 2. calculateAverage() 3. checkPassStatus() 4. getGrade() 5. generateSummary() 


Q22. Map responsibility → function:
calculateTotal() → calculate total marks | calculateAverage() → calculate average marks | checkPassStatus() → check whether pass or fail | getGrade() → calculate return the grade | generateSummary() → generate final student summary

Q23. Why is this better than one 150-line analyzeStudent()? _______________

=> because of each function has separate and one clear responsbility ,making the code easier to read , reuse ,debug, test , maintain 
---

Section 09 — Mini Project: Grade Utility Library


day09-functions/
├── grade-utils.js
└── README.md


Implement:

| Function | Input | Output |
|---|---|---|
| calculateTotal() | 3 marks | Total |
| calculateAverage() | 3 marks | Average |
| checkPassStatus() | Average | "Pass"/"Fail" |
| getGrade() | Average | 90+ A · 75+ B · 60+ C · 33+ D · <33 Fail |

Requirements: functions ✓ · parameters ✓ · return values ✓ · conditions ✓ · no duplicated logic ✓ · meaningful names ✓ · multiple inputs tested ✓

Test cases (record Total/Average/Status/Grade for each):

| Student | Marks |
|---|---|
| 1 | 80, 75, 90 |
| 2 | 50, 60, 55 |
| 3 | 30, 25, 20 |
| 4 | 95, 92, 90 |

---

Section 10 — Logical Thinking


Q24. calculateTotal(10, 20, 30) — arguments are?  => 10,20,30 

Q25. function calculateTotal(a, b, c) {} — parameters are? => a,b,c

Q26. More maintainable: (A) one 150-line function or (B) several small functions? ___ Why? ___

=> =>(B) because of each function has separate and one clear responsbility ,making the code easier to read , reuse ,debug, test , maintain 

Q27. Need the result later in the program — console.log() or return? ___ Why? ___
=> return  because of return gives result back from function.
---

Section 11 — Advanced Challenge: Number Analyzer


Create number-analyzer.js with isEven(), isPositive(), findLargest(), calculateSquare(), then compose them inside analyzeNumber().
Don't put all logic directly in analyzeNumber() — use the smaller functions.

Small Functions → Composition → Larger Behaviour


Example: analyzeNumber(10) → Even: Yes | Positive: Yes | Square: 100

---

Section 12 — Testing


Every function needs: Normal · Boundary · Different input.

E.g. isEven(10), isEven(0), isEven(7) — Grade Analyzer: 95, 33, 32. Record any unexpected behavior.


=> All test cases passed
---


Section 13 — Submission


week-02-grade-analyzer/
├── src/functions/grade-utils.js
├── practice/
└── README.md


README: Project Name · Purpose · Functions Implemented · How to Run · Test Cases · What I Learned · Challenges Faced

Commit message: feat: add reusable grade utility functions

Checklist: ☐ Code runs ☐ Functions work ☐ Multiple inputs tested ☐ Meaningful names ☐ No duplication ☐ README updated ☐ Committed ☐ Pushed

---

Section 14 — Rubric (100 pts)


| Category | Points |
|---|---|
| Concept Understanding | 15 |
| Function Implementation | 20 |
| Parameters & Arguments | 10 |
| Return Values | 15 |
| Logical Reasoning | 10 |
| Debugging | 10 |
| Problem Decomposition | 10 |
| Code Quality | 5 |
| Testing | 5 |

Levels: L1 Awareness (0–49) · L2 Guided Implementation (50–69) · L3 Independent Engineering (70–84) · L4 Professional Readiness (85–100)
Target isn't a high score — it's growing engineering independence.


---

Section 15 — Reflection

What problem do functions solve?
=> functions decompose a big problem into small  functions  , and making code easier to reuse, read,maintain ,debug ,test.
What mistake did you make today?
=> nothing
What confused you about parameters/arguments?
=> nothing 
return vs console.log() — in your own words?
=> return gives result back from the function and console.log() displays the value on the console .

Which function did you design most confidently?
=> All functions
Which required the most debugging, and what did you learn?
=> analyzeNumber() required the most debugging . i learned how to combine small function to create a larger behavior .
Where can functions reduce duplication in real software?
=> write common logic once and reuse it in different parts of a program.
What would you improve in your implementation?
=> adding better input validation and making the functions more reusable .
Confidence with Functions: ⭐ 10 / 10


---

Section 16 — Technical Viva


Be ready to explain: why this function exists · its inputs/outputs · why this name · why these responsibilities were separated · why return was used · invalid-input handling · how you tested it · what you'd refactor · could another engineer understand it without your help?

---

🎯 Final Challenge — Reusable Student Analyzer


Input: Name, Marks1, Marks2, Marks3 → Output: Total, Average, Pass/Fail, Grade

Requirements: ≥4 reusable functions · parameters used · results returned · conditions used · clear responsibilities · ≥4 students tested · boundary cases included

Example: Rahul — 33, 33, 33 → Total: 99, Average: 33, Status: Pass, Grade: D

---

🚀 Engineering Mindset


Don't ask "How do I write the syntax?" — ask "What responsibility does this logic have?"

Understand → Identify Responsibilities → Create Functions → Define I/O → Implement → Test → Debug → Refactor

---

🔑 Key Takeaways


Function = Reusable Logic · Parameter = Placeholder · Argument = Actual Value · return = Value sent back · Problem Decomposition = Large Problem → Smaller Responsibilities → Functions

Goal isn't "I know function syntax" — it's "I can identify reusable responsibilities and implement them as functions."

🔮 Next Up

Functions → Function Expressions → Arrow Functions → Scope → Lexical Scope → Closures

---
End of Day 09 Engineering Lab*