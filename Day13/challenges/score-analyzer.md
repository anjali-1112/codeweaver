14 — Guided Engineering Challenge: Student Score Analyzer

Do not jump to code. Work through the full sequence below, in order, documenting each step.

Step 1 — Problem Understanding

The program needs to analyze a collection of student scores. It should display all scores, calculate the total and average score, find the highest and lowest scores, and count how many students have passed.

Step 2 — Inputs

The program takes an array of student scores as input.

Example:

const scores = [67, 89, 45, 92, 78, 33];

A passing mark is also provided to determine which scores are passing.

Step 3 — Outputs

The program should produce:

- All scores displayed
- Total of all scores
- Average score
- Highest score
- Lowest score
- Count of passing scores

The passing threshold used in this program is 40.

Step 4 — Data Model

The student scores are represented using an array.

const scores = [67, 89, 45, 92, 78, 33];

Each score is stored as an element in the array and can be accessed using its index.

Step 5 — Pseudocode

Display Scores

FOR each score in the scores array:
    Display the score with its position.

Calculate Total

SET total to 0.

FOR each score in the scores array:
    ADD the score to total.

RETURN total.

Calculate Average

IF the array is empty:
    RETURN 0.

Calculate the total of all scores.

Divide the total by the number of scores.

RETURN the average.

Find Highest Score

IF the array is empty:
    RETURN 0.

SET highest to the first score.

FOR each remaining score:
    IF the current score is greater than highest:
        Update highest.

RETURN highest.

Find Lowest Score

IF the array is empty:
    RETURN 0.

SET lowest to the first score.

FOR each remaining score:
    IF the current score is lower than lowest:
        Update lowest.

RETURN lowest.

Count Passing Scores

IF the array is empty:
    RETURN 0.

SET count to 0.

FOR each score in the array:
    IF the score is greater than or equal to the passing mark:
        Increase count by 1.

RETURN count.

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