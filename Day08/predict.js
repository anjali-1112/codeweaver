for (let i = 1; i <= 3; i++) {
    console.log(i);
}
 console.log("===============");

let i = 5;
do {
    console.log(i);
} while (i < 5);
 console.log("===============");

for (let i = 1; i <= 5; i++) {
    if (i == 3) { break; }
    console.log(i);
}

 console.log("===============");
for (let i = 1; i <= 5; i++) {
    if (i == 3) { continue; }
    console.log(i);
}
 console.log("===============");

 for (let i=1; i<=10; i++) {
    if (i===5){
    continue ;
    }
    console.log(i)
}
 console.log("===============");

for (let i=1; i<=5; i++) {
    if (i===3) { break; }
    console.log(i);
}
