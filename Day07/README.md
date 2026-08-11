=============================================================================
🚀 CodeWeavers Learning Operating System
⚡ DAY 07 ENGINEERING LAB
=============================================================================

🎯 LAB THEME

"Teach Your Program to Choose and Repeat Intelligently."

Yesterday your programs learned how to make decisions.

Today they will learn

✅ How to choose between multiple options.

✅ How to repeat the same task automatically.

Welcome to the next level of programming.

=============================================================================

🎯 LAB OBJECTIVES

By the end of today's Engineering Lab, you should be able to

✅ Write switch statements.

✅ Use case, break and default correctly.

✅ Choose between if...else and switch.

✅ Write while loops.

✅ Understand loop execution.

✅ Identify Infinite Loops.

✅ Dry-run loops confidently.

=============================================================================

📚 PREREQUISITES

Before starting today's lab, you should know

✔ Variables

✔ Data Types

✔ Operators

✔ Comparison Operators

✔ Logical Operators

✔ if

✔ if...else

✔ else if

=============================================================================

⚠️ LAB RULES
Predict every output before execution.

Never skip dry-run.

Every answer must include reasoning.

Fix bugs before asking for help.

Think like an Engineer.


=============================================================================

🧠 LAB 01 — CHOOSE THE CORRECT TOOL

Choose

IF...ELSE

OR

SWITCH

------------------------------------------------
Checking Grade


(A, B, C, D)

Answer

-> IF...ELSE

________________________

------------------------------------------------
Checking Age >=18


Answer

-> IF...ELSE

________________________

------------------------------------------------
Traffic Signal


(Red, Yellow, Green)

Answer

-> SWITCH

________________________

------------------------------------------------
Marks >90


Answer

-> IF...ELSE

________________________

------------------------------------------------
Payment Status


Pending

Paid

Cancelled

Refunded

Answer

-> SWITCH

________________________

------------------------------------------------
Temperature >40


Answer

-> IF...ELSE

________________________

=============================================================================

💻 LAB 02 — SWITCH PRACTICE

Create

day-finder.js

Write a switch statement for

Monday

Tuesday

Wednesday

Thursday

Friday

Saturday

Sunday

Print a different message for each day.

Example

Monday

↓

"New Week Started"

Tuesday

↓

"Keep Learning"

Wednesday

↓

"Half Week"

Thursday

↓

"Almost There"

Friday

↓

"Project Day"

Saturday

↓

"Revision Day"

Sunday

↓

"Rest & Recharge"

Also write a

default

case.

=============================================================================

🧩 LAB 03 — PREDICT THE OUTPUT

Predict first.

Then execute.

------------------------------------------------

Program 1

switch("Tuesday"){

case "Monday":

console.log("A");

break;

case "Tuesday":

console.log("B");

break;

default:

console.log("C");

}

Prediction

-> B
____________________

Output

-> B
____________________

------------------------------------------------

Program 2

switch("Sunday"){

case "Monday":

console.log("A");

break;

default:

console.log("Holiday");

}

Prediction

-> Holiday
____________________

Output

-> Holiday
____________________

------------------------------------------------

Program 3

switch("Friday"){

case "Friday":

console.log("Weekend Coming");

break;

default:

console.log("Unknown");

}

Prediction

-> Weekend Coming
____________________

Output

-> Weekend Coming
____________________

=============================================================================

🐞 LAB 04 — DEBUGGING SWITCH

Find and fix every mistake.

------------------------------------------------

Program 1

switch(day){

case "Monday":  //case Monday: 

console.log("Start");

}

------------------------------------------------

Program 2

switch(day){

case "Monday": // : missing

console.log("Start");

}

------------------------------------------------

Program 3

let day = "Monday";
switch(day){

case "Monday":

console.log("Start");

default:

console.log("Unknown");

}

------------------------------------------------

Program 4

switch(day){

case "Monday":

console.log("Monday");

case "Tuesday":

console.log("Tuesday");

}

Question

Why are both outputs printing?
-> because there is no break statement 
-> Because break is missing, so execution falls through to the next case.

=============================================================================

🔁 LAB 05 — FIRST LOOP

Create

print-numbers.js

Using

while

Print

1

↓

10

Expected Output

1

2

3

4

5

6

7

8

9

10

=============================================================================

🔁 LAB 06 — LOOP PRACTICE

Write separate programs.

------------------------------------------------
Print


10 → 1

--------------------------------------------
Print


Even Numbers

2 → 20

--------------------------------------------
Print


Odd Numbers

1 → 19

--------------------------------------------
Print


Multiples of 5

5 → 50

--------------------------------------------
Print


Your Name

10 Times

Using while.

=============================================================================

🧠 LAB 07 — DRY RUN CHALLENGE

Complete the table.

Program

let i = 1;

while(i <=5){

console.log(i);

i++;

}

| Iteration | i Before | Condition | Output | i After |
|-----------|----------|-----------|--------|---------|
| 1 | 1 | True | 1 | 2 |
| 2 | 2 | True | 2 | 3 |
| 3 | 3 | True | 3 | 4 |
| 4 | 4 | True | 4 | 5 |
| 5 | 5 | True | 5 | 6 |
| Stop | | False | | |

=============================================================================

🐞 LAB 08 — DEBUGGING LOOPS

Find every mistake.

------------------------------------------------

Program 1

let i = 1;

while(i <=5){

console.log(i);
i++ ; // i++ missing 
}

------------------------------------------------

Program 2

let i = 10;

while(i <=5){ 

console.log(i);

i++;

}

Question

Why doesn't this loop execute?

-> Because the condition is false from the beginning 

------------------------------------------------

Program 3

let i = 1;

while(i <10){

console.log(i);

i++;

}

Find all syntax mistakes.

------------------------------------------------

Program 4

let number = 2;

while(number <=10){

console.log(number);

number += 2 ; // fix number++; 

}

Question

Will this print only even numbers?
-> no
If not,

fix it.

=============================================================================

🌍 LAB 09 — REAL WORLD THINKING

Write only the logic.

------------------------------------------------
ATM


If user selects

Balance

Deposit

Withdraw

Mini Statement

Which statement is best?

IF

OR

SWITCH

Answer

-> Switch case 
____________________

------------------------------------------------
School ERP


Generate Report Card

For Every Student

Need

Loop?

YES / NO

-> YES

------------------------------------------------
Netflix


Display Every Movie

Need

Loop?

YES / NO

-> Yes
------------------------------------------------
Food Delivery


Order Status

Pending

Preparing

Delivered

Cancelled

Use

IF

OR

SWITCH
-> switch
=============================================================================

🏗 LAB 10 — MINI PROJECT

Project Name

Traffic Signal Simulator

Requirements

Store

Signal

Possible Values

Red

Yellow

Green

Using switch

Print

Red

↓

STOP

--------------------

Yellow

↓

READY

--------------------

Green

↓

GO

--------------------

Default

↓

Invalid Signal

=============================================================================

🚀 BONUS PROJECT

Project Name

Number Analyzer

Using while Loop

Print

Numbers

1 → 50

Separate

Even Numbers

Odd Numbers

Multiples of 3

Multiples of 5

Challenge

Do not write duplicate code unnecessarily.

Think before coding.

=============================================================================

🎤 RAPID FIRE

Answer in ONE LINE.
Why do we use switch?

-> To choose one case from multiple fixed case
_________________________________
When should we use if...else instead of switch?

->when conditions involve ranges,complex logic
_________________________________
What is break?

-> break stops the execution of loop or switch .
_________________________________
What is default?

-> default runs when no switch cases matches .
_________________________________
What is a Loop?

-> loop repeats block of code until a condition is met
_________________________________
What is an Infinite Loop?

-> A loop that never stops because its condition always remains true .

_________________________________
Why is updating the loop variable important?

-> It ensures the loop eventually reaches its stopping condition.
_________________________________
Difference between switch and if...else?

-> switch is best for fixed values and if else is better for conditions and ranges
_________________________________
Name one real software that uses loops.

-> Netflix
_________________________________
Name one real software that uses switch.

-> ATM machine
_________________________________

=============================================================================

📝 REFLECTION JOURNAL
Today's easiest topic

All

_________________________________
Today's most difficult topic


_________________________________
Which debugging question challenged you the most?


_________________________________
Where do you see loops in real software?

Almost every software
_________________________________
Confidence Level


⭐ _10____ / 10

=============================================================================

🏆 SELF ASSESSMENT

☐ I understand switch.

☐ I understand case.

☐ I understand break.

☐ I understand default.

☐ I know when to use switch.

☐ I can write while loops.

☐ I can dry-run loops.

☐ I can identify Infinite Loops.

☐ I can debug switch programs.

☐ I can debug while loops.

☐ I can solve real-world problems using switch and loops.

=============================================================================

🎯 MISSION COMPLETE

Excellent Engineer! 🎉

Today your programs learned two powerful skills.

✅ Choosing between multiple options using switch.

✅ Repeating tasks automatically using while loops.

Tomorrow you'll master advanced iteration using

🚀 do...while

🚀 for Loop

🚀 break

🚀 continue

🚀 Nested Loops (Introduction)

🚀 for...of

🚀 for...in

This will complete the core foundation of looping in JavaScript.

=============================================================================
END OF DAY 07 ENGINEERING LAB
=============================================================================