⚙️ CodeWeavers Learning Operating System

Day 11 — Engineering Lab OS

MERN Full Stack — Job Ready Program

Phase 1 · Programming Foundations — Week 2 · Think Like a Programmer


---

📌 Lab Snapshot


| | |
|---|---|
| Topic | Scope, Nested Scope & Scope Chain |
| Lab Type | Hands-on coding lab (post-lecture) |
| Mode | Individual — code first, discuss after |
| Prerequisite | Day 11 Mentor OS session completed |
| Tooling | VS Code + Node.js + Git |
🎯 Lab Philosophy: Mentor taught you the theory. Student Notes OS gave you reference. This lab makes you write the bugs yourself, then hunt them down — that's how scope actually sticks.


---

🧰 Setup — Do This First


bash
mkdir day11-scope-lab
cd day11-scope-lab
git init
touch lab.js
code .


Every task below runs inside lab.js unless stated otherwise. Run with:

bash
node lab.js

💡 Comment out earlier tasks as you move to new ones, or split into task1.js, task2.js, etc. — your call, your repo.


---

🧪 Lab 01 — Prove Scope to Yourself


Goal: Don't take "it fails" on faith — make it fail yourself.

js
// 1a. Write this exactly and run it
function labTest() {
  let value = 100;
  console.log(value);
}
labTest();

// 1b. Now try to access value from outside — write the line
// and run it. Read the actual terminal error message.

Deliverable: Paste the exact error message you got in a comment above the failing line. Don't paraphrase it.

=> console.log(value);
               ^
ReferenceError: value is not defined
    at Object.<anonymous> (c:\Users\HP\projects\CODE\JavaScript\Day11\lab.js:6:13)
---

🧪 Lab 02 — Build the Three Scope Types


Write one working example each for Global, Function, and Block scope — but with a twist: each example must include one working access and one intentionally broken access (commented out with a note on why it breaks).

js

// GLOBAL SCOPE
let name = "Anjali" ;
let isStudent = true ;
if(isStudent) {
    console.log(name);
}
console.log(name);

// FUNCTION SCOPE
function sum(a,b){
    let sum = a+b;
    console.log(sum);
}
sum(52,63);
//   console.log(sum); // sum is function scope so can't access outside 



// BLOCK SCOPE
{
    let colour = "red";
    console.log(colour + " yellow");

}
//console.log(colour); // ReferenceError: colour is not defined // colour is block scope so can't access outside


Constraint: No copy-pasting the Mentor OS examples verbatim — variable names and values must be your own.

---

🧪 Lab 03 — Nested Scope Construction Site


Build a 3-level nested structure from scratch:

js
// Requirement:
// - global variable: appName
// - outer() with a local variable: version
// - inner() (inside outer) with a local variable: buildNumber
// - inner() must console.log all three

let appName = "Swiggy" ;
function outer() {
    let version = "2.56.126" ;
    function inner() {
        let buildNumber = 9 ;
        console.log(appName);
        console.log(version);
        console.log(buildNumber);

    }
    inner();
}
outer();


Then answer in comments:
Can outer() access buildNumber? Why/why not?

=> no, because buildNumber is declared inside inner() ,its only available within inner() 

Can the global scope access version? Why/why not?

=> no , because version is declared inside outer() , its local to outer() .
---

🧪 Lab 04 — Trace the Chain (No Running Allowed)


For each snippet below, write the search path in a comment before you run the code. Only run it after you've committed to an answer.

js
// 4a
let p = "P";
function a() {
  let q = "Q";
  function b() {
    let r = "R";
    console.log(q);
    // YOUR TRACE: b → a → q ("Q")
  }
  b();
}
a();


js
// 4b
let m = 1;
function outer() {
  function inner() {
    console.log(m);
    // YOUR TRACE: inner → global variable m → 1
  }
  inner();
}
outer();


js
// 4c — this one should throw. Predict the error before running.
function outer() {
  function inner() {
    console.log(secretValue);
    // YOUR TRACE: inner → outer → global → RefrenceError
  }
  inner();
}
outer();


Deliverable: All three traces written before execution, plus a ✅/❌ next to each showing if your prediction matched reality.

---

🧪 Lab 05 — Shadowing Sandbox


js
let mode = "production";

function runTask() {
  let mode = "test";
  console.log("Inside runTask:", mode);
}

runTask();
console.log("Outside:", mode);


Modify this code to add a third level of shadowing inside a nested function, so the same variable name (mode) exists in three different scopes simultaneously. Log all three and confirm each resolves independently.

let mode = "production";

function runTask() {
  let mode = "test";
  console.log("Inside runTask:", mode);
  function thirdTask() {
    let mode = "execution ";
    console.log("Inside thirdTask : "mode);
  }
  thirdTask();
}

runTask();
console.log("Outside:", mode);


---

🐞 Lab 06 — Bug Bounty (Self-Inflicted)


Write 3 original scope bugs — code that looks reasonable but throws a ReferenceError or logs the wrong value because of scope/shadowing. For each bug, fill this table:

| Bug # | What the code looks like it should do | What it actually does | Root cause (one line) |
|---|---|---|---|
| 1 | print the username| referenceError | name is declared in other function|
| 2 | print the n value| referenceError | due to block scope  |
| 3 | print online| print offline | due to shadow scope |

⚠️ Rule: These must be your own bugs, not the ones from Mentor/Student OS. If you can't think of one, deliberately break working code from Lab 02–05.


---

🛠️ Lab 07 — Refactor Challenge: Grade Analyzer


You're given this (intentionally bad) starting point:

js
let total;
let average;
let grade;
let studentName;

function processStudent(name, marks) {
  studentName = name;
  total = marks.reduce((sum, m) => sum + m, 0);
  average = total / marks.length;

  if (average >= 90) grade = "A";
  else if (average >= 75) grade = "B";
  else if (average >= 50) grade = "C";
  else grade = "F";

  console.log(${studentName}: ${grade} (avg: ${average}));
}

processStudent("Anita", [88, 92, 79]);
processStudent("Rohit", [45, 60, 55]);


Your task:
Run it as-is and note what's fragile about using globals here — call out a concrete scenario where it breaks (hint: run processStudent twice and inspect state between calls).

Refactor processStudent into a pure, locally-scoped version that takes name and marks, and returns an object { name, total, average, grade } instead of mutating globals.

Rewrite the two calling lines to use the return value.


Deliverable: Before/after code, plus a 2–3 line comment explaining why the refactored version is safer, in your own words.


=> 
// Problem:
// After the second call, the global variables contain Rohit's data.
// If another part of the program reads them between or after calls,
// the previous student's data has been overwritten.

function processStudent(name, marks) {
    let total = marks.reduce((sum, m) => sum + m, 0);
    let average = total / marks.length;
    let grade;

    if (average >= 90) grade = "A";
    else if (average >= 75) grade = "B";
    else if (average >= 50) grade = "C";
    else grade = "F";

    return {
        name: name,
        total: total,
        average: average,
        grade: grade
    };
}

const AnitaResult = processStudent("Anita", [88, 92, 79]);
console.log(AnitaResult);

const RohitResult = processStudent("Rohit", [45, 60, 55]);
console.log(RohitResult);


// Each function call keeps its own data inside local variables.
// The function does not change shared global state, and its result is returned explicitly.

---

🎯 Lab 08 — Output Prediction Gauntlet (Timed — 10 min)


No running code until you've written down all four answers.

js
// G1
let n = 5;
function f1() {
  console.log(n);
  let n = 10;
}
f1();

// ReferenceError: Cannot access 'n' before initialization
=> ReferenceError: Cannot access 'n' before initialization
(Hint: this one's a trap — think about let and where the declaration lives, even before the console.log line. Predict what happens, run it, then explain the actual result in your own words — even if it's not what you expected.)

js
// G2
function counter() {
  let count = 0;
  function increment() {
    count = count + 1;
    console.log(count);
  }
  increment();
  increment();
  increment();
}
counter();
=> 1 2 3 
// 1 2 3
js
// G3
let status = "idle";
function start() {
  status = "running";
}
start();
console.log(status);
=> running
//running

js
// G4
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
=> 2
// 2

Deliverable: Predictions written first, actual output after, and for any mismatch — one sentence on what you misunderstood.

---

📋 Lab Submission Checklist

[ ] Lab 01 — error message captured

[ ] Lab 02 — 3 scope examples, working + broken access each

[ ] Lab 03 — nested structure + 2 reasoning answers

[ ] Lab 04 — traces written before execution, ✅/❌ marked

[ ] Lab 05 — 3-level shadowing sandbox

[ ] Lab 06 — bug bounty table completed (3 original bugs)

[ ] Lab 07 — refactor before/after + reasoning

[ ] Lab 08 — predictions written before running, mismatches explained


---

🔁 Git Workflow


bash
git add .
git commit -m "lab: day 11 - scope, nested scope, scope chain"
git push

Commit after each Lab section, not just once at the end — small, honest commits show your actual thought progression, which matters more than a single "finished lab" commit.


---

🧠 Reflection (Write This Last)


Answer in your own words, 2–4 sentences each:
What's one moment in this lab where your prediction was wrong? What did that teach you about how you were actually thinking about scope before?

Where in a real app (React component, Express route, etc.) do you think Scope Chain reasoning will matter most? You don't need to be right — just think it through.


---

🔮 Where This Connects Next


Today's Lab:  Scope → Nested Scope → Scope Chain → Shadowing → Refactoring
                                                              ↓
Next Lab:     Closures — functions that "remember" the scope they were
              created in, even after that outer function has finished running.

You've already built the muscle for this without knowing it — Lab 05's shadowing sandbox and Lab 07's refactor are both quietly previewing why Closures matter.


---

CodeWeavers Full Stack Program · MERN Job-Ready Track · End of Day 11 Engineering Lab OS ⚙️