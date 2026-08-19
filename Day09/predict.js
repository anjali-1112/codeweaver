// function add(a, b) { console.log(a + b); }
// add(10, 20);

// function multiply(a, b) {
//     return a*b ;
// }
// console.log(multiply(12, 3));

// // function square(number) { return number*number; }
// // let result = square(5);

// function add(a, b) { return a + b; } 
// let result = add(5, 10);
// console.log(result);

// function welcome() { console.log("Welcome"); }
// welcome() //fix -missing

// function test() { return 10; console.log("Hello"); }
// console.log(test());

// function square(number) { return(number*number); }
// let result = square(5);
// console.log(result);

// function calculate(a, b) { return a + b; }
// console.log(calculate(5, 10));

function calculate(a, b) { return a*b; }
let x = calculate(5, 10);
console.log(calculate(x, 2));
function check(number) {
    if (number >= 10) return "Large";
    return "Small";
}
console.log(check(15)); console.log(check(5));

function test() { console.log("A"); return "B"; console.log("C"); }
console.log(test());