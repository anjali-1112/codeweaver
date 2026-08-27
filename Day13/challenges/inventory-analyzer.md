Problem Understanding

The program needs to store product prices and analyze the inventory using an array. It should display all prices, calculate the total inventory value, find the highest and lowest prices, and count products above a given price threshold.



Data Model

The product prices are stored in a single array.

Example:

const productPrices = [100, 150, 80, 75, 30];

The threshold price is stored as a separate number.

Example:

const thresholdPrice = 50;

Pseudocode

-> Display Prices

FOR each price in the product prices array:
    Display the product number and its price.

-> Calculate Total Inventory

SET total to 0.

FOR each price in the array:
    Add the price to total.

RETURN total.

-> Find Highest Price

SET highest price to the first element.

FOR each remaining price:
    IF current price is greater than highest price:
        Update highest price.

RETURN highest price.

-> Find Lowest Price

SET lowest price to the first element.

FOR each remaining price:
    IF current price is lower than lowest price:
        Update lowest price.

RETURN lowest price.

-> Count Products Above Threshold

SET count to 0.

FOR each price in the array:
    IF price is greater than the threshold:
        Increase count by 1.

RETURN count.

15 — Independent Engineering Challenge: Inventory Collection Analyzer


Now design this one without step-by-step guidance. Apply the same discipline you just practiced (Problem → Understand → Model → Predict → Implement → Test → Debug → Improve → Document).

Requirements:
Store product prices in an array.

Display products/prices.

Calculate total inventory value.

Find the highest price.

Find the lowest price.

Count products above a given threshold price.


You decide the data model, function names, and structure. Document your own Problem Understanding, Inputs, Outputs, Data Model, and Pseudocode before implementing — the same rigor as Section 14, but self-directed.

Save in challenges/inventory-analyzer.js with your own challenges/inventory-analyzer.md documentation.