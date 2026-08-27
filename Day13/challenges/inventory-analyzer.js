// Store product prices in an array.

const productPrice = [100,150,80,75,30,90,60,85,130,25,55,90,35,45,50];

// Display products/prices.
function  displayPrice(productPrice) {
    for(let i = 0 ; i < productPrice.length ; i++){    
        console.log(`Product Price ${i+1} : ${productPrice[i]}`);
    }    
}
// Calculate total inventory value.
function calTotalInventory(productPrice) {
    let total = 0;
    for(let i = 0 ; i< productPrice.length ;i++) {
        total += productPrice[i];
    }
    return total;
}
// Find the highest price.
function findHighestPrice(productPrice) {
    if(productPrice.length === 0 ) {
        return 0;
    }
    let high = productPrice[0];
    for(let i = 1 ; i< productPrice.length ; i++) {
        if(high < productPrice[i]){
            high = productPrice[i] ;
        }
    }
    return high ;
}
// Find the lowest price.
function findLowestPrice(productPrice) {
    if(productPrice.length === 0 ) {
        return 0;
    }
    let low = productPrice[0];
    for(let i = 1 ; i< productPrice.length ; i++) {
        if(low > productPrice[i]){
            low = productPrice[i] ;
        }
    }
    return low ;
}

// Count products above a given threshold price.

function countPassingPrice (productPrice,thresholdPrice) {
    let count = 0 ;
    for(let i=0 ; i< productPrice.length;i++) {
        if(productPrice[i] > thresholdPrice) {
            count++ ;
        }
    }
    return count ;
}

function main() {
    console.log("Display Product Price: ");
    displayPrice(productPrice);
    console.log("Calculate Total Inventory: "+ calTotalInventory(productPrice));
    console.log("The Highest Price: "+findHighestPrice(productPrice) );
    console.log("The Lowest Price: "+ findLowestPrice(productPrice));
    console.log("Count products above 50: "+ countPassingPrice(productPrice,50));  
}

main();