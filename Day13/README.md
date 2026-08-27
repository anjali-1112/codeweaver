Day 13 — Engineering Lab OS

CodeWeavers MERN Full Stack — Job Ready Program

Introduction to Arrays — Managing Collections

This is not a worksheet. This is not a theory document. This is not copy-paste coding.

This is an engineering practice environment.


Engineering Workflow for Today:

Problem → Understand → Model → Predict → Implement → Test → Debug → Improve → Document → Commit


Every lab section below follows this workflow. Do not skip steps, even when a step feels "obvious" — the discipline is the point.

---

01 — Mission Brief


The Problem:

A coaching application needs to store the names of 30 students.

The naive approach:

js
const student1 = "Aman";
const student2 = "Riya";
const student3 = "Karan";
// ...27 more of these


Think before you code:
What happens when the number of students becomes 100?

What happens when it becomes 500?

What happens when it becomes 10,000?

How would you print all of them?

How would you find student #217's name?


You will not solve this with more variables. You will solve it with a collection — today, an array.

By the end of this lab you will be able to create, access, update, traverse, and process arrays — and debug the mistakes that come with all of it.

---

02 — Engineering Problem


Restate the mission brief as a formal engineering problem before touching code:

Problem statement: Design a way to store an arbitrary number of related values under one reference, such that the number of values can grow without requiring new variable names, and such that every value can be processed uniformly using existing loop knowledge.

Constraints:
Must use a single variable to represent the whole collection.

Must allow access to any individual value.

Must allow processing of all values using a loop (not manual repetition).


Write this problem statement in your own words in basics/problem-statement.md before continuing.

---

03 — Prerequisite Check


Before starting, confirm you can still do the following without looking anything up. If any of these feel shaky, flag it to your mentor before proceeding.
[ ] Write a for loop from scratch (initialization, condition, increment).

[ ] Write a function with parameters and a return value.

[ ] Explain the difference between a parameter and an argument.

[ ] Explain what scope means for a variable declared inside a loop or function.

[ ] Use console.log to debug a value at a specific point in your code.

[ ] Create a new folder, initialize Git, and make a commit.


---

04 — Warm-Up


Task 1 — Convert scattered variables:

js
const student1 = "Aman";
const student2 = "Riya";
const student3 = "Karan";


Rewrite this as a single organized collection. Do not run any code yet — write your answer on paper or in a comment first.

=> 
js
const student = ["Aman","Riya","Karan"] ;

Task 2 — Answer without running code:
What is the first student's position (index)?

=> 0

What is the second student's position?

=> 1


What is the last student's position?

=> 2



Write your answers down. You will check them against your actual code in Lab 2 — do not peek ahead.

---

05 — Observation Lab


Before writing your own arrays, observe this one carefully:

js
const fruits = ["Mango", "Apple", "Banana"];
console.log(fruits); // print all element in the array 
console.log(fruits[0]); // print 0 index only
console.log(fruits[1]); // print 1st index only
console.log(fruits[2]); // print 2nd index only
console.log(fruits.length); // print length of array


Predict the output of every line — write it down.

=>[ 'Mango' , 'Apple' , 'Banana' ]
  Mango
  Apple
  Banana
  3

Then execute the code and compare.

Then explain in one sentence, for each line, why the output is what it is. If any prediction was wrong, write down specifically what you misunderstood — this record is more valuable than getting it right the first time.

---

06 — Array Construction Lab


Model → Predict → Implement → Test

Create arrays representing each of the following. Use meaningful, plural variable names (students, not data or arr1).
A list of 5 students in your batch.

A list of 5 products a shop might sell.

A list of 5 book titles.

A list of 5 cities.

A list of 5 exam scores (numbers, not strings).


For each array:
Predict what console.log(yourArray) will print, before running it.

Implement the array.

Test by logging it.

Confirm the output matches your prediction; if not, investigate why.


Save this work in basics/array-construction.js.

---

07 — Indexing Lab


Model → Predict → Implement → Test

Using one of your arrays from Lab 1 (5 elements), predict the output for each of the following before running anything:

| Expression | Your Prediction | Actual Output |
|---|---|---|
| arr[0] (first element) |kamal | kamal |
| arr[2] (middle element) |hena | hena |
| arr[4] (last element) | faiz | faiz |
| arr[5] (invalid index) | undefined| undefined|

Fill in "Your Prediction" first. Only then run the code and fill in "Actual Output." Where they differ, write a one-sentence explanation of what you misunderstood.

Save this table (as a comment or markdown) in indexing/indexing-lab.js.

---

08 — Update Lab


One of the arrays below has a deliberate mistake. Find it before running anything.

js
const scores = [67, 89, 45, 92, 78];

// Intended: update the LAST score to 100
scores[5] = 100;

console.log(scores);

What do you predict happens when this runs?
=>The last score will not updated. 100 will be added as a new element to  the array .

What was the engineer trying to do?
=> update the last score, which is at index 4, to 100

What is the actual bug?
=> the wrong index 5 was used . array indexing starts from 0,the last element is at index 4 .

What is the correct line of code?

=> scores[4]=100;


Write your reasoning down first, then run the code to confirm, then write the corrected version. Save both the broken and fixed versions with comments explaining the difference in basics/update-lab.js.

---

09 — Length Lab


Using any array of your choice, investigate .length before writing any traversal code.

Answer in writing:
What does .length actually represent?

=> .length represents the total number of elements in an array 

What is the last valid index of an array with .length equal to n?

=>last index = n-1 

Why is the last valid index not equal to .length?

=> because array indexing start from 0 while .length represents the total number of elements.

What does arr[arr.length] return? Predict first, then test, then explain why.

=> undefined because arr[arr.length] is not a valid index.
The valid indexes go from 0 to arr.length - 1.

Save your written answers in basics/length-lab.md.

---

10 — Traversal Lab


Model → Predict → Implement → Test

You already know: Array + Loop = Process every element.

Using an array of at least 6 numbers, implement each of the following. For each, predict the output before running.
Print every element of the array using a for loop.

Calculate the total of all elements.

Find a specific value — write a loop that checks whether 42 exists anywhere in the array, and reports true/false.

Count values — count how many elements are greater than a chosen threshold (e.g., 50).

Generate a report — print a formatted line for each element, e.g. "Element 0: 67".


Save all five in traversal/traversal-lab.js, each clearly labeled with a comment.

---

11 — Mutation Lab (Basic Array Operations)


For each of the four operations below, follow this exact cycle: Predict → Execute → Observe → Explain.

js
const queue = ["Aman", "Riya", "Karan"];

queue.push("Neha");      // 1
queue.pop();              // 2
queue.unshift("Ishaan");  // 3
queue.shift();             // 4


For each numbered line:
Predict the array's contents and .length before running that line.

Run it and log the array.

Observe what actually changed.

Explain, in one sentence, what the operation did and why it changed length the way it did.


Save this in operations/mutation-lab.js.

---

12 — Debugging Lab


For every broken program below, follow this exact process. Do not fix anything until you've completed Problem → Observation → Hypothesis → Test.

Problem → Observation → Hypothesis → Test → Root Cause → Fix → Prevention


Bug 1 — Off-by-one loop
js
const cities = ["Patna", "Gaya", "Bhagalpur"];
for (let i = 0; i <= cities.length; i++) {
  console.log(cities[i]);
}


Bug 2 — Wrong index
js
const scores = [67, 89, 45, 92, 78];
console.log("Highest attempt is at position 5:", scores[5]);


Bug 3 — length misuse
js
const books = ["Atomic Habits", "Deep Work", "Clean Code"];
console.log("Last book:", books[books.length]);


Bug 4 — Invalid access after shift
js
const queue = ["A", "B", "C"];
queue.shift();
console.log(queue[2]);


Bug 5 — Wrong update target
js
const inventory = [10, 20, 30];
// Intent: increase the first item by 5
inventory[1] = inventory[1] + 5;
console.log(inventory);


Bug 6 — Infinite/broken traversal
js
const nums = [1, 2, 3];
for (let i = 0; i > -1; i++) {
  console.log(nums[i]);
}


For each bug, document your full process in debugging/debugging-lab.md — Problem, Observation, Hypothesis, Test, Root Cause, Fix, Prevention — before writing the corrected code in a matching .js file.

---

13 — Real-World Data Lab


For each scenario below, answer these four questions before writing any code:
What should be stored?

Why should it be an array (not separate variables)?

How will it be traversed?

What operation is required (print / total / count / find / update)?


Scenarios:
Student attendance for a class of 30.

Product prices in a small shop.

Items in a shopping cart.

Exam scores for a class.

A personal book collection.

Monthly expenses for a household.


Pick any three of the six and implement a small working example for each — just enough code to demonstrate storage + one traversal-based operation. Save your written answers and code in challenges/real-world-data-lab.md and .js files.

---

14 — Guided Engineering Challenge: Student Score Analyzer


Do not jump to code. Work through the full sequence below, in order, documenting each step.

Step 1 — Problem Understanding
Write, in your own words, what this program needs to do.

Step 2 — Inputs
What data does the program need? (An array of scores.)

Step 3 — Outputs
What should the program produce? List them explicitly:
All scores displayed

Total of all scores

Average score

Highest score

Lowest score

Count of passing scores (define a passing threshold, e.g. 40)


Step 4 — Data Model
Decide how the scores will be represented. (const scores = [67, 89, 45, 92, 78, 33];)

Step 5 — Pseudocode
Write pseudocode (plain English or structured comments) for each required output before writing real JavaScript. Example:

FUNCTION calculateTotal(scores):
    SET total = 0
    FOR each score in scores:
        ADD score to total
    RETURN total


Step 6 — Implementation
Now implement each piece as a real function:

js
function displayScores(scores) { / ... / }
function calculateTotal(scores) { / ... / }
function calculateAverage(scores) { / ... / }
function findHighest(scores) { / ... / }
function findLowest(scores) { / ... / }
function countPassing(scores, passMark) { / ... / }


Use only traversal (for loops) — no built-in Math.max/Math.min, no array methods beyond what's already been taught today.

Step 7 — Testing
Test with at least three different score arrays (see Section 16 for required test cases).

Step 8 — Debugging
Deliberately test with an empty array ([]). What happens to your average calculation? Fix any division-by-zero or incorrect behavior.

Step 9 — Refactoring
Review your functions — are any of them doing too much in one place? Could naming be clearer? Refactor before moving on.

Save all work in challenges/score-analyzer.js with a short challenges/score-analyzer.md documenting your Steps 1–5.

---

15 — Independent Engineering Challenge: Inventory Collection Analyzer


Now design this one without step-by-step guidance. Apply the same discipline you just practiced (Problem → Understand → Model → Predict → Implement → Test → Debug → Improve → Document).

Requirements:
Store product prices in an array.

Display products/prices.

Calculate total inventory value.

Find the highest price.

Find the lowest price.

Count products above a given threshold price.


You decide the data model, function names, and structure. Document your own Problem Understanding, Inputs, Outputs, Data Model, and Pseudocode before implementing — the same rigor as Section 14, but self-directed.

Save in challenges/inventory-analyzer.js with your own challenges/inventory-analyzer.md documentation.

---

16 — Stretch Challenge: Weekly Expense Analyzer


Given an array of daily expenses (7 values, one per day):
Calculate total spending for the week.

Calculate average daily spending.

Find the highest expense.

Find the lowest expense.

Count how many days exceeded a given daily budget.

Determine whether the week overall stayed within a weekly budget.


Stay strictly within arrays + loops + functions. Do not use map, filter, reduce, or any array method not already covered today.

Save in challenges/expense-analyzer.js with brief documentation of your approach.

---

17 — Test Cases


For every program you wrote in Sections 14–16, run and document results for the following inputs. Add each result to a README.md inside challenges/.

| Test Case | Example Input | What You're Checking |
|---|---|---|
| Empty array | [] | Does your code crash or misbehave (e.g., average = 0/0)? |
| One element | [50] | Do "highest" and "lowest" both correctly equal the single value? |
| Multiple elements | [67, 89, 45, 92, 78] | Normal case — does everything compute correctly? |
| Repeated values | [50, 50, 50] | Does highest/lowest logic still work when all values are equal? |
| Zero values | [0, 20, 0, 40] | Does a 0 value break any calculation (e.g., falsy-value bugs)? |
| Negative values (where relevant) | [-10, 20, -5] | Does your threshold/counting logic still behave correctly? |
| Large values | [100000, 250000] | Does anything overflow or format oddly? |
| Unexpected input (where applicable) | e.g. very long array | Does traversal still work at scale? |

Document what happened for each case — including any bugs you found and fixed as a result.

---

18 — Git Submission


Repository: week-03-array-practice/

Required structure:

week-03-array-practice/
│
├── README.md
├── basics/
├── indexing/
├── traversal/
├── operations/
├── debugging/
├── challenges/
└── reflection/


README.md must explain what each folder contains and how to run the code inside it.

Commit discipline — required:
Commit incrementally as you complete each lab section, not all at once at the end.

Use specific, professional commit messages, for example:

feat: add array indexing exercises

feat: add traversal practice

fix: correct off-by-one loop

feat: add score analyzer

docs: add day 13 reflection


Not acceptable:
done

code

final

update


Vague commits will be flagged in evaluation (see Section 19, Git Discipline).

---

19 — Reflection


Answer each of the following in reflection/day13-reflection.md, in your own words:
What problem do arrays solve?

Why does indexing start at 0?

What is the difference between length and the last valid index?

What was your most common array mistake today?

How did loops become more useful after learning arrays?

When would you choose an array over separate variables?

What did today's debugging exercises teach you?

What concept from Week 2 did you directly reuse today?


Write at least 2–3 sentences per answer. Surface-level answers ("because that's the rule") will be sent back for revision.

---

20 — Mentor Evaluation Rubric


Evaluated across eight dimensions, at four levels each.

| Dimension | Level 1 — Awareness | Level 2 — Guided Implementation | Level 3 — Independent Engineering | Level 4 — Professional Readiness |
|---|---|---|---|---|
| Conceptual Understanding | Recognizes what an array is when shown one | Can explain indexing and length with prompting | Explains zero-based indexing and length−1 unprompted, correctly | Can teach the concept clearly to a peer |
| Programming | Copies array syntax with heavy guidance | Writes basic create/access/update with occasional errors | Writes traversal and processing independently, correctly | Writes clean, reusable functions combining arrays and loops |
| Problem Solving | Needs the full solution shown first | Solves guided challenges with prompting | Solves the Independent Challenge with minimal help | Designs and justifies data model choices unprompted |
| Debugging | Cannot identify the bug without help | Identifies bugs with mentor hints | Follows Problem→Cause→Fix independently and correctly | Anticipates likely bugs before running code |
| Code Quality | Inconsistent, unclear variable names | Reasonable naming, some inconsistency | Clear, meaningful, consistent naming throughout | Code reads clearly without needing comments to follow logic |
| Engineering Thinking | Treats array use as arbitrary syntax | Can explain "why array" when asked | Proactively identifies when an array fits a new scenario | Discusses trade-offs (e.g., when array is not the right fit) |
| Communication | Struggles to explain own code | Explains code with some prompting | Explains reasoning and decisions clearly, unprompted | Communicates as if presenting to a technical reviewer |
| Git Discipline | Single unclear commit at the end | A few commits, inconsistent messages | Incremental, mostly clear commit messages | Fully incremental, professional, descriptive commit history |

Mentor should record the level per dimension and note specific observed evidence, not just a number.

---

21 — Completion Criteria


This lab is complete only when the student can demonstrate all of the following:
✓ Create arrays confidently

✓ Access values using indexes

✓ Explain zero-based indexing

✓ Update values

✓ Use .length correctly

✓ Traverse arrays with loops

✓ Process collection data (totals, counts, searches)

✓ Use basic array operations (push, pop, unshift, shift)

✓ Debug common indexing mistakes using the Problem→Cause→Fix process

✓ Combine arrays with functions

✓ Explain, unprompted, why arrays are useful

✓ Push organized, incrementally-committed work to GitHub

✓ Explain their own solution to another person clearly


If any box cannot be checked honestly, the lab is not yet complete — revisit the relevant section before moving to Day 14.

---