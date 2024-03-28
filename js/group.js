// Write a JavaScript program that calculates the total cost of a meal including tax and tip. Define a function called calculateTotalCost that takes three parameters: mealCost, taxRate, and tipPercentage. 
// Inside the function, calculate the tax amount by multiplying mealCost by taxRate.
// Then, calculate the tip amount by multiplying mealCost by tipPercentage. Finally, return the total cost by adding the mealCost, tax amount, and tip amount together.
// Imagine you're building a program for a library system. You want a function to process book titles and create a display string that includes the title in uppercase and wrapped in quotation marks.
// Here's what you need to achieve:

// Write a function named formatBookTitle that takes a single argument, bookTitle (a string).
// Inside the function, use an anonymous function to convert the bookTitle to uppercase using the toUpperCase() method.
// Then, use string concatenation to create a final string where the uppercase title is wrapped in quotation marks (e.g., "THE LORD OF THE RINGS").
// The function should use the return keyword to send back the formatted string.
// Example:
// If you call the function with the argument "The Lord of the Rings", the function should return the string "THE LORD OF THE RINGS".

function calculateTotalCost(mealCost, taxRate, tipPercentage){
    const tax = mealCost * taxRate / 100;
    const tip = mealCost * tipPercentage / 100;
    const total = mealCost + (tax + tip);

    return {
        tax: tax, 
        tip: tip, 
        total: total
    };
}

console.log(calculateTotalCost(2500, 15, 6));

function formatBookTitle(bookTitle) {
    let title = bookTitle.toUpperCase();
    let wrapped = '"' + title + '"';

    return wrapped;
}

console.log(formatBookTitle("the boys"));