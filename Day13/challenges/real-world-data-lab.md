13 — Real-World Data Lab


For each scenario below, answer these four questions before writing any code:
What should be stored?

Why should it be an array (not separate variables)?

How will it be traversed?

What operation is required (print / total / count / find / update)?


Scenarios:
## Student attendance for a class of 30.

What should be stored?

-> student attendance values , names.

Why should it be an array (not separate variables)?

-> because many students are related values and can be processed together.

How will it be traversed?

-> using a for loop

What operation is required (print / total / count / find / update)?

-> print /find /count

Working :-


const attendance = ["P","A","P","P","P","P","A","A","P","A","P","P","P","P","A","A","P","A","P","P","P","P","A","A","P","A","P","P","P","P"];
let presentAttendance = 0;
for(let i = 0; i< attendance.length ; i++) {
    if("P" === attendance[i]){
        presentAttendance++ ;
    }
}
console.log("Present student: "+presentAttendance);
console.log("Absent student: "+(attendance.length-presentAttendance));


## Product prices in a small shop.

What should be stored?

-> product price in array

Why should it be an array (not separate variables)?

->-> because product price are related values and can be processed together.


How will it be traversed?

-> using for  loop

What operation is required (print / total / count / find / update)?

=> total /print


// Product prices in a small shop.

const price = [85,96,40,52,63,75];
let total = 0 ;
for(let i = 0 ; i < price .length ;i++) {
total += price[i] ;
}

console.log("Total price:- " + total  );



## Items in a shopping cart.

What should be stored?

-> items in array 

Why should it be an array (not separate variables)?

-> because items price are related values and can be processed together.


How will it be traversed?
-> using for loop

What operation is required (print / total / count / find / update)?

=> print/ total / count 

working:- 

const cart = ["bag","shoes" ,"dress","book","flower"];
for(let i=0 ;i< cart.length;i++){
    console.log(cart[i]);
    
}
console.log("no. of items in cart : " + cart.length);

Exam scores for a class.

A personal book collection.

Monthly expenses for a household.


Pick any three of the six and implement a small working example for each — just enough code to demonstrate storage + one traversal-based operation. Save your written answers and code in challenges/real-world-data-lab.md and .js files.

---
