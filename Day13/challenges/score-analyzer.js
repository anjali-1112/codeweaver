const scores = [67, 89, 45, 92, 78, 33];
function displayScores(scores) {
    for(let i = 0 ; i< scores.length ;i++) {
        console.log(`score ${i+1} : ${scores[i]}`);
        
    }
}
function calculateTotal(scores) { 
    if (scores.length === 0) {
        return 0 ;
    }
    let total = 0;
    for(let i = 0 ; i < scores.length ; i++) {
        total += scores[i];
    }

    return total ;
}
function calculateAverage(scores) {
    if (scores.length === 0) {
        return 0 ;
    }
    return calculateTotal(scores)/scores.length ;
} 
function findHighest(scores) {
    if (scores.length === 0) {
        return 0 ;
    } 
    let high = scores[0] ;
    for(let i = 1 ; i< scores.length ; i++) {
        if(high<scores[i]) {
            high = scores[i];
        }
    }
    return high ;
}
function findLowest(scores) { 
    if (scores.length === 0) {
        return 0 ;
    }
    let low = scores[0] ;
    for(let i = 1 ; i< scores.length ; i++) {
        if(low > scores[i]) {
            low = scores[i];
        }
    }
    return low ;
}
function countPassing(scores, passMark) { 
    if (scores.length === 0) {
        return 0 ;
    }
    let count = 0 ;
    for(let i = 0 ; i<scores.length ; i++) {
        if(scores[i] >= passMark){
            count++ ;
        }
    }
    return count ;
}

function main() {
    displayScores(scores) ;
    console.log("Total of all scores : " + calculateTotal(scores) );
    console.log("Average score : " + calculateAverage(scores) );
    console.log("Highest score :" + findHighest(scores) );
    console.log("Lowest score :" + findLowest(scores) );
    console.log("Count of passing scores :" + countPassing(scores ,40));

}

main();
