CodeWeavers Engineering Lab — Day 08

Master Every Loop. Choose the Right One.


Mission: Not just write loops — choose the right loop for the right problem.

Rules: Dry run before execute · Think before coding · Debug before asking · Every answer needs reasoning · Engineering > Memorization

---

🎯 Objectives

Write do...while & for loops · use break/continue correctly · understand Nested Loops · understand for...of & for...in · choose the correct loop for a given problem.

Prerequisites: Variables, Data Types, Operators, Decision Making, switch, while Loop.

---

Lab 01 — Choose the Best Loop


| # | Scenario | Answer |
|---|---|---|
| 1 | Print numbers 1 → 100 | for loop |
| 2 | Display ATM menu until user exits | do while loop |
| 3 | Display every product in Amazon's product list | for loop |
| 4 | Display every student roll number 1 → 60 | for loop |
| 5 | Display every key of an object | for...in loop |
| 6 | Keep checking server response until success | while loop |
| 7 | Execute code at least once | do while loop |

---

Lab 02 — do...while Practice

Print 1 → 5 using do...while

Print 10 → 1 using do...while

Print even numbers 2 → 20 using do...while

Print your name 5 times using do...while


---

Lab 03 — for Loop Practice

Print 1 → 20

Print 20 → 1

Print odd numbers 1 → 25

Print even numbers 2 → 30

Print multiples of 7, 7 → 70

Print squares of numbers 1² → 10²


---

Lab 04 — Output Prediction


Predict first, then execute.

P1.
js
for (let i = 1; i <= 3; i++) {
    console.log(i);
}

Prediction: 1 2 3  | Output: 1 2 3

P2.
js
let i = 5;
do {
    console.log(i);
} while (i < 5);

Prediction: 5 | Output: 5

P3.
js
for (let i = 1; i <= 5; i++) {
    if (i == 3) { break; }
    console.log(i);
}

Prediction: 1 2  | Output: 1 2

P4.
js
for (let i = 1; i <= 5; i++) {
    if (i == 3) { continue; }
    console.log(i);
}

Prediction: 1 2 4 5  | Output: 1 2 4 5

---

Lab 05 — Debugging Mission


Find and fix every mistake.

Bug 1
js
for (let i=1;i<=10;i++) {
    console.log(i);
}


Bug 2
js
for (let i=1; i<=5; i++) {
    console.log(i);
}


Bug 3
js
let i = 1;
do {
    console.log(i);
    // i++ ;
} while (i <= 5)

Why is this loop infinite?   ->  there is no updatation condition (like i++)

Bug 4
js
for (let i=1; i<=10; i++) {
    if (i===5){
    continue ;       
    }
    console.log(i)
}

Find all missing syntax.  -> { } and ;

Bug 5
js
for (let i=1; i<=5; i++) {
    if (i===3) { break; }
    console.log(i);
}

Will 3 print? Why? -> No , due to if i equal to 3 then break statement  stops the loop .

---

Lab 06 — break vs continue


P1.
js
for (let i = 1; i <= 5; i++) {
    if (i === 2) { continue; }
    console.log(i);
}

Output: 1 3 4 5

P2.
js
for (let i = 1; i <= 5; i++) {
    if (i === 2) { break; }
    console.log(i);
}

Output: 1 

Q: Difference between break and continue in ONE line: _______________

-> break stops the loop completely and continue skips the current iteration and moves to the next iteration
---

Lab 07 — for...of Practice


js
let fruits = ["Apple", "Mango", "Banana", "Orange"];

Print every fruit.

Print "I Like Apple", "I Like Mango", ... for each fruit.

Print every fruit in UPPERCASE (hint: toUpperCase()).


---

Lab 08 — for...in Practice


js
let fruits = ["Apple", "Mango", "Banana", "Orange"];

Print every index.

Print Index : Value — e.g. 0 : Apple, 1 : Mango ...


Bonus:
js
let student = { name: "Rahul", age: 21, city: "Patna" };

Print only the keys using for...in.

---

Lab 09 — Mini Project: Multiplication Table Generator


Input: Number = 9
Output:
9 × 1 = 9
9 × 2 = 18
...
9 × 10 = 90

Use a for loop.

---

Lab 10 — Mini Project: Student Marks Analyzer


js
let marks = [78, 65, 92, 45, 88];

Using for...of, print every mark.

Then print PASS or FAIL for each (pass marks = 33).

Bonus: calculate total marks (hint: variable + loop).


---

Lab 11 — Engineering Thinking


| Scenario | Best Loop |
|---|---|
| Netflix — display every movie | for loop|
| Instagram — display every reel | for loop |
| School ERP — generate report card for every student | for loop |
| Online Exam — keep asking question until quiz ends | while loop |
| Bank — display every transaction | for loop |

---

🎤 Rapid Fire (one line each)

Difference between while and do...while? 

-> while loop checks the condition first and do while loop executes once before checking the condition 

When should we use a for loop? 

->When we known how many times we want to repeat something .

What does break do?  -> break completely stops the loop .

What does continue do? -> continue skips the current iteration and moves to the next iteration . 

What is a Nested Loop? -> A loop inside another loop 

Difference between for...of and for...in? for...of gives values and for...in gives keys/indexs.

Which loop always executes at least once? -> do while loop 

Which iterator returns values? -> for...of

Which iterator returns indexes? for...in

Why do software applications use loops? ______

-> To repeat tasks efficiently without writing the same code again and again.
---

📝 Reflection Journal

Which loop did you like the most?
-> for loop
Which loop was difficult?
-> do while loop 
Did you understand break and continue? YES / NO
-> yes
Which debugging question challenged you the most?
-> no one 
Today's confidence score: ⭐ 10 / 10


---

🏆 Self Assessment


☐ I understand do...while ☐ I understand for Loop ☐ I know while vs do...while ☐ I understand break ☐ I understand continue ☐ I understand Nested Loops ☐ I understand for...of ☐ I understand for...in ☐ I can choose the correct loop for a problem ☐ I can debug looping programs ☐ I can solve engineering problems using loops

---

🎯 Final Challenge


Print 1 → 100 with these rules:
✅ Skip all multiples of 3

✅ Stop completely when 75 is reached


(Hint: use both continue and break.)

---

🚀 Mission Complete


You've now got the complete foundation of looping in JavaScript — you can repeat work, choose the correct loop, stop execution, skip iterations, and iterate over arrays and object keys.

Next up: 🚀 Functions — writing code once and reusing it everywhere.

---
End of Day 08 Engineering Lab