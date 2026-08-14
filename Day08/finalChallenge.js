// Print 1 → 100 with these rules:
// ✅ Skip all multiples of 3

// ✅ Stop completely when 75 is reached

for(let i = 1 ; i <= 100 ; i++) {
    
    if(i=== 75){
        break;
    }
    if(i%3 == 0){
        continue ;
    }
    console.log(i);
   
}
