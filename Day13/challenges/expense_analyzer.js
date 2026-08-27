// Given an array of daily expenses (7 values, one per day):
const dailyExpense = [570,620,430,450,525,900,250];
// Calculate total spending for the week.
function totalExpenses(dailyExpense) {
    let total = 0;
    for(let i = 0 ;i<dailyExpense.length;i++) {
        total += dailyExpense[i];

    } 
    return total;
}
// Calculate average daily spending.
const avgExpenses = (dailyExpense) => {
     if(dailyExpense.length === 0) {
        return 0;
    }
     return totalExpenses(dailyExpense)/dailyExpense.length 
};

// Find the highest expense.
function highestExpense(dailyExpense) {
    if(dailyExpense.length === 0) {
        return 0;
    }
    let high = dailyExpense[0];
    for(let i = 1 ;i< dailyExpense.length;i++) {
        if(high < dailyExpense[i]) {
            high = dailyExpense[i];
        }
    }
    return high ;
}
// Find the lowest expense.
const lowestExpense = (dailyExpense) => {
    if(dailyExpense.length === 0) {
        return 0;
    }
    let low = dailyExpense[0] ;
    for(let i = 1 ;i<dailyExpense.length ;i++) {
        if(low > dailyExpense[i]) {
            low = dailyExpense[i];
        }
    }
    return low ;
}
// Count how many days exceeded a given daily budget.
const countExceedBudget = function (dailyExpense,budget) {
    let count = 0 ;
    for(let i = 0;i<dailyExpense.length ; i++) {
        if(dailyExpense[i] > budget) {
            count ++ ;
        }
    }
    return count ;
}

// Determine whether the week overall stayed within a weekly budget.
const checkWeeklyBudget = (dailyExpense,weeklyBudget) => weeklyBudget >= totalExpenses(dailyExpense);

function main() {
    console.log("Total spending for the week: " + totalExpenses(dailyExpense));
    console.log("Average daily spending: " + avgExpenses(dailyExpense));
    console.log("The highest expense: " + highestExpense(dailyExpense) );
    console.log("The lowest expense: " + lowestExpense(dailyExpense));
    console.log(`${countExceedBudget(dailyExpense,500)} days exceeded a given daily budget.` );
    console.log("The week overall stayed within a weekly budget: " + checkWeeklyBudget(dailyExpense,3500));

}
main();