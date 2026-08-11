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

switch("Sunday"){

case "Monday":

console.log("A");

break;

default:

console.log("Holiday");

}

switch("Friday"){

case "Friday":

console.log("Weekend Coming");

break;

default:

console.log("Unknown");

}

console.log("__________________________");

//Program 1

let day = "Monday";

switch(day){

case "Monday":  //case Monday: 

console.log("Start");

}

console.log("__________________________");

//Program 2

switch(day){

case "Monday": // : missing

console.log("Start");

}

console.log("__________________________");

//Program 3

switch(day){

case "Monday":

console.log("Start");

default:

console.log("Unknown");

}

console.log("__________________________");

//Program 4

switch(day){

case "Monday":

console.log("Monday");

case "Tuesday":

console.log("Tuesday");

}