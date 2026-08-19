/*//Q16. isEven(number) — return whether even. Test: 2, 7, 10, 13
let num = 13 ;
function isEven(number) {
    if(number%2==0) {
        return "Even" ;
    }else {
        return "Odd" ;
    }
}
console.log(isEven(num));

// Q17. checkAge(age) — >=18 → "Eligible", else "Not Eligible". Return the result.

let age = 19 ;
function checkAge(age) {
    if(age >= 18){
        return "Eligible";
    }else {
        return "Not Eligible";

    }
}
console.log(checkAge(age));

Q20. printEvenNumbers(limit) — printEvenNumbers(20) → 2 4 6 ... 20


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

Q19. printNumbers(limit) — loop inside function. printNumbers(5) → 1 2 3 4 5

*/

function printNumbers(limit) {
    for(let i = 1 ; i <= limit ;i++) {
        console.log(i) ;
    }
}
printNumbers(5);
