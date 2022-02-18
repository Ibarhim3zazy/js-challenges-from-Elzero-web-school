// Challenge From vid num 47 (*.*);

// Challenge 1

console.log("_______________Challenge 1_________________");

let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Ibrahim", "Ameer"];

my.reverse().splice(zero, counter - !zero);

console.log(my);

console.log(my.slice(!zero, -!zero));


console.log(my[my.indexOf("Mazero")].replace("Ma", "El"));

console.log(my[my.indexOf("Mazero")].slice(-(counter - !zero), -!zero) + my[my.indexOf("Mazero")].slice(-!zero).toUpperCase());
