// Section 11 — Advanced Challenge: Number Analyzer

function isEven(num) {
    if(num%2==0){
        return true ;
    }
    return false ;
}

function isPositive(num) {
    if(num > 0) {
        return true ;
    }
    return false ;
}

function findLargest(a, b, c) {
    return Math.max(a, b, c);
}

function calculateSquare(num) {
    return num*num ;
}

function analyzeNumber(num,a,b,c){
    console.log("Even :" + (isEven(num) ? "Yes":"No")) ;
    console.log("Positive :" + (isPositive(num)? "Yes" :"No")) ;
    console.log("Find Largest number :" + findLargest(a,b,c)) ;
    console.log("Square :" + calculateSquare(num)) ;
}
analyzeNumber(8,52,96,96);

// Create number-analyzer.js with isEven(), isPositive(), findLargest(), calculateSquare(), then compose them inside analyzeNumber().
// Don't put all logic directly in analyzeNumber() — use the smaller functions.

// Small Functions → Composition → Larger Behaviour


// Example: analyzeNumber(10) → Even: Yes | Positive: Yes | Square: 100
