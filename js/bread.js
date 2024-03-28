// function to calc max # of sandwiches based on bread #
function calcSandwiches(bread){
    const breadSandWich = bread / 2;

    return breadSandWich;
}

console.log(calcSandwiches(10));

// function to extend parameters with chees
function sandWichWithCheese(bread, cheese = 5){
    const withCheese = cheese;
    bread = calcSandwiches();

    return bread, withCheese;
}

console.log(sandWichWithCheese(10, 1));